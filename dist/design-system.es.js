import Dr, { Fragment as UT, useRef as mn, useState as En, useCallback as tu, useEffect as wd, useDebugValue as t2 } from "react";
function n2(r) {
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
function r2() {
  if (j_)
    return Hh;
  j_ = 1;
  var r = Dr, o = Symbol.for("react.element"), l = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, d = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function v(E, w, C) {
    var T, R = {}, O = null, U = null;
    C !== void 0 && (O = "" + C), w.key !== void 0 && (O = "" + w.key), w.ref !== void 0 && (U = w.ref);
    for (T in w)
      c.call(w, T) && !m.hasOwnProperty(T) && (R[T] = w[T]);
    if (E && E.defaultProps)
      for (T in w = E.defaultProps, w)
        R[T] === void 0 && (R[T] = w[T]);
    return { $$typeof: o, type: E, key: O, ref: U, props: R, _owner: d.current };
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
function a2() {
  return U_ || (U_ = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Dr, o = Symbol.for("react.element"), l = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), v = Symbol.for("react.provider"), E = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), U = Symbol.for("react.offscreen"), L = Symbol.iterator, H = "@@iterator";
    function ne(N) {
      if (N === null || typeof N != "object")
        return null;
      var se = L && N[L] || N[H];
      return typeof se == "function" ? se : null;
    }
    var oe = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function W(N) {
      {
        for (var se = arguments.length, xe = new Array(se > 1 ? se - 1 : 0), $e = 1; $e < se; $e++)
          xe[$e - 1] = arguments[$e];
        K("error", N, xe);
      }
    }
    function K(N, se, xe) {
      {
        var $e = oe.ReactDebugCurrentFrame, it = $e.getStackAddendum();
        it !== "" && (se += "%s", xe = xe.concat([it]));
        var St = xe.map(function(ot) {
          return String(ot);
        });
        St.unshift("Warning: " + se), Function.prototype.apply.call(console[N], console, St);
      }
    }
    var ae = !1, te = !1, V = !1, Z = !1, we = !1, de;
    de = Symbol.for("react.module.reference");
    function ve(N) {
      return !!(typeof N == "string" || typeof N == "function" || N === c || N === m || we || N === d || N === C || N === T || Z || N === U || ae || te || V || typeof N == "object" && N !== null && (N.$$typeof === O || N.$$typeof === R || N.$$typeof === v || N.$$typeof === E || N.$$typeof === w || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      N.$$typeof === de || N.getModuleId !== void 0));
    }
    function Ae(N, se, xe) {
      var $e = N.displayName;
      if ($e)
        return $e;
      var it = se.displayName || se.name || "";
      return it !== "" ? xe + "(" + it + ")" : xe;
    }
    function Qe(N) {
      return N.displayName || "Context";
    }
    function De(N) {
      if (N == null)
        return null;
      if (typeof N.tag == "number" && W("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof N == "function")
        return N.displayName || N.name || null;
      if (typeof N == "string")
        return N;
      switch (N) {
        case c:
          return "Fragment";
        case l:
          return "Portal";
        case m:
          return "Profiler";
        case d:
          return "StrictMode";
        case C:
          return "Suspense";
        case T:
          return "SuspenseList";
      }
      if (typeof N == "object")
        switch (N.$$typeof) {
          case E:
            var se = N;
            return Qe(se) + ".Consumer";
          case v:
            var xe = N;
            return Qe(xe._context) + ".Provider";
          case w:
            return Ae(N, N.render, "ForwardRef");
          case R:
            var $e = N.displayName || null;
            return $e !== null ? $e : De(N.type) || "Memo";
          case O: {
            var it = N, St = it._payload, ot = it._init;
            try {
              return De(ot(St));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ze = Object.assign, lt = 0, st, Vt, me, Pe, be, wt, Tt;
    function Vn() {
    }
    Vn.__reactDisabledLog = !0;
    function gr() {
      {
        if (lt === 0) {
          st = console.log, Vt = console.info, me = console.warn, Pe = console.error, be = console.group, wt = console.groupCollapsed, Tt = console.groupEnd;
          var N = {
            configurable: !0,
            enumerable: !0,
            value: Vn,
            writable: !0
          };
          Object.defineProperties(console, {
            info: N,
            log: N,
            warn: N,
            error: N,
            group: N,
            groupCollapsed: N,
            groupEnd: N
          });
        }
        lt++;
      }
    }
    function ai() {
      {
        if (lt--, lt === 0) {
          var N = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ze({}, N, {
              value: st
            }),
            info: Ze({}, N, {
              value: Vt
            }),
            warn: Ze({}, N, {
              value: me
            }),
            error: Ze({}, N, {
              value: Pe
            }),
            group: Ze({}, N, {
              value: be
            }),
            groupCollapsed: Ze({}, N, {
              value: wt
            }),
            groupEnd: Ze({}, N, {
              value: Tt
            })
          });
        }
        lt < 0 && W("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Cn = oe.ReactCurrentDispatcher, ha;
    function ar(N, se, xe) {
      {
        if (ha === void 0)
          try {
            throw Error();
          } catch (it) {
            var $e = it.stack.trim().match(/\n( *(at )?)/);
            ha = $e && $e[1] || "";
          }
        return `
` + ha + N;
      }
    }
    var Mr = !1, ii;
    {
      var Nr = typeof WeakMap == "function" ? WeakMap : Map;
      ii = new Nr();
    }
    function va(N, se) {
      if (!N || Mr)
        return "";
      {
        var xe = ii.get(N);
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
        if (se) {
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
            Reflect.construct(N, [], ot);
          } else {
            try {
              ot.call();
            } catch (bt) {
              $e = bt;
            }
            N.call(ot.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (bt) {
            $e = bt;
          }
          N();
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
                    return N.displayName && yr.includes("<anonymous>") && (yr = yr.replace("<anonymous>", N.displayName)), typeof N == "function" && ii.set(N, yr), yr;
                  }
                while (Kt >= 1 && Zt >= 0);
              break;
            }
        }
      } finally {
        Mr = !1, Cn.current = St, ai(), Error.prepareStackTrace = it;
      }
      var uo = N ? N.displayName || N.name : "", Sc = uo ? ar(uo) : "";
      return typeof N == "function" && ii.set(N, Sc), Sc;
    }
    function Ln(N, se, xe) {
      return va(N, !1);
    }
    function ir(N) {
      var se = N.prototype;
      return !!(se && se.isReactComponent);
    }
    function Bn(N, se, xe) {
      if (N == null)
        return "";
      if (typeof N == "function")
        return va(N, ir(N));
      if (typeof N == "string")
        return ar(N);
      switch (N) {
        case C:
          return ar("Suspense");
        case T:
          return ar("SuspenseList");
      }
      if (typeof N == "object")
        switch (N.$$typeof) {
          case w:
            return Ln(N.render);
          case R:
            return Bn(N.type, se, xe);
          case O: {
            var $e = N, it = $e._payload, St = $e._init;
            try {
              return Bn(St(it), se, xe);
            } catch {
            }
          }
        }
      return "";
    }
    var or = Object.prototype.hasOwnProperty, lr = {}, ma = oe.ReactDebugCurrentFrame;
    function Ha(N) {
      if (N) {
        var se = N._owner, xe = Bn(N.type, N._source, se ? se.type : null);
        ma.setExtraStackFrame(xe);
      } else
        ma.setExtraStackFrame(null);
    }
    function ki(N, se, xe, $e, it) {
      {
        var St = Function.call.bind(or);
        for (var ot in N)
          if (St(N, ot)) {
            var We = void 0;
            try {
              if (typeof N[ot] != "function") {
                var Un = Error(($e || "React class") + ": " + xe + " type `" + ot + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof N[ot] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Un.name = "Invariant Violation", Un;
              }
              We = N[ot](se, ot, $e, xe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Kt) {
              We = Kt;
            }
            We && !(We instanceof Error) && (Ha(it), W("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", $e || "React class", xe, ot, typeof We), Ha(null)), We instanceof Error && !(We.message in lr) && (lr[We.message] = !0, Ha(it), W("Failed %s type: %s", xe, We.message), Ha(null));
          }
      }
    }
    var oi = Array.isArray;
    function Ia(N) {
      return oi(N);
    }
    function Zr(N) {
      {
        var se = typeof Symbol == "function" && Symbol.toStringTag, xe = se && N[Symbol.toStringTag] || N.constructor.name || "Object";
        return xe;
      }
    }
    function li(N) {
      try {
        return Xr(N), !1;
      } catch {
        return !0;
      }
    }
    function Xr(N) {
      return "" + N;
    }
    function Ya(N) {
      if (li(N))
        return W("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Zr(N)), Xr(N);
    }
    var gn = oe.ReactCurrentOwner, Jr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, oo, $a, Se;
    Se = {};
    function He(N) {
      if (or.call(N, "ref")) {
        var se = Object.getOwnPropertyDescriptor(N, "ref").get;
        if (se && se.isReactWarning)
          return !1;
      }
      return N.ref !== void 0;
    }
    function ut(N) {
      if (or.call(N, "key")) {
        var se = Object.getOwnPropertyDescriptor(N, "key").get;
        if (se && se.isReactWarning)
          return !1;
      }
      return N.key !== void 0;
    }
    function Nt(N, se) {
      if (typeof N.ref == "string" && gn.current && se && gn.current.stateNode !== se) {
        var xe = De(gn.current.type);
        Se[xe] || (W('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', De(gn.current.type), N.ref), Se[xe] = !0);
      }
    }
    function en(N, se) {
      {
        var xe = function() {
          oo || (oo = !0, W("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", se));
        };
        xe.isReactWarning = !0, Object.defineProperty(N, "key", {
          get: xe,
          configurable: !0
        });
      }
    }
    function jn(N, se) {
      {
        var xe = function() {
          $a || ($a = !0, W("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", se));
        };
        xe.isReactWarning = !0, Object.defineProperty(N, "ref", {
          get: xe,
          configurable: !0
        });
      }
    }
    var dn = function(N, se, xe, $e, it, St, ot) {
      var We = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: N,
        key: se,
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
    function Lr(N, se, xe, $e, it) {
      {
        var St, ot = {}, We = null, Un = null;
        xe !== void 0 && (Ya(xe), We = "" + xe), ut(se) && (Ya(se.key), We = "" + se.key), He(se) && (Un = se.ref, Nt(se, it));
        for (St in se)
          or.call(se, St) && !Jr.hasOwnProperty(St) && (ot[St] = se[St]);
        if (N && N.defaultProps) {
          var Kt = N.defaultProps;
          for (St in Kt)
            ot[St] === void 0 && (ot[St] = Kt[St]);
        }
        if (We || Un) {
          var Zt = typeof N == "function" ? N.displayName || N.name || "Unknown" : N;
          We && en(ot, Zt), Un && jn(ot, Zt);
        }
        return dn(N, We, Un, it, $e, gn.current, ot);
      }
    }
    var It = oe.ReactCurrentOwner, ea = oe.ReactDebugCurrentFrame;
    function zt(N) {
      if (N) {
        var se = N._owner, xe = Bn(N.type, N._source, se ? se.type : null);
        ea.setExtraStackFrame(xe);
      } else
        ea.setExtraStackFrame(null);
    }
    var Yt;
    Yt = !1;
    function Kl(N) {
      return typeof N == "object" && N !== null && N.$$typeof === o;
    }
    function Ko() {
      {
        if (It.current) {
          var N = De(It.current.type);
          if (N)
            return `

Check the render method of \`` + N + "`.";
        }
        return "";
      }
    }
    function Zl(N) {
      {
        if (N !== void 0) {
          var se = N.fileName.replace(/^.*[\\\/]/, ""), xe = N.lineNumber;
          return `

Check your code at ` + se + ":" + xe + ".";
        }
        return "";
      }
    }
    var ru = {};
    function yc(N) {
      {
        var se = Ko();
        if (!se) {
          var xe = typeof N == "string" ? N : N.displayName || N.name;
          xe && (se = `

Check the top-level render call using <` + xe + ">.");
        }
        return se;
      }
    }
    function Zo(N, se) {
      {
        if (!N._store || N._store.validated || N.key != null)
          return;
        N._store.validated = !0;
        var xe = yc(se);
        if (ru[xe])
          return;
        ru[xe] = !0;
        var $e = "";
        N && N._owner && N._owner !== It.current && ($e = " It was passed a child from " + De(N._owner.type) + "."), zt(N), W('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', xe, $e), zt(null);
      }
    }
    function Xl(N, se) {
      {
        if (typeof N != "object")
          return;
        if (Ia(N))
          for (var xe = 0; xe < N.length; xe++) {
            var $e = N[xe];
            Kl($e) && Zo($e, se);
          }
        else if (Kl(N))
          N._store && (N._store.validated = !0);
        else if (N) {
          var it = ne(N);
          if (typeof it == "function" && it !== N.entries)
            for (var St = it.call(N), ot; !(ot = St.next()).done; )
              Kl(ot.value) && Zo(ot.value, se);
        }
      }
    }
    function Xo(N) {
      {
        var se = N.type;
        if (se == null || typeof se == "string")
          return;
        var xe;
        if (typeof se == "function")
          xe = se.propTypes;
        else if (typeof se == "object" && (se.$$typeof === w || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        se.$$typeof === R))
          xe = se.propTypes;
        else
          return;
        if (xe) {
          var $e = De(se);
          ki(xe, N.props, "prop", $e, N);
        } else if (se.PropTypes !== void 0 && !Yt) {
          Yt = !0;
          var it = De(se);
          W("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", it || "Unknown");
        }
        typeof se.getDefaultProps == "function" && !se.getDefaultProps.isReactClassApproved && W("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Jl(N) {
      {
        for (var se = Object.keys(N.props), xe = 0; xe < se.length; xe++) {
          var $e = se[xe];
          if ($e !== "children" && $e !== "key") {
            zt(N), W("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", $e), zt(null);
            break;
          }
        }
        N.ref !== null && (zt(N), W("Invalid attribute `ref` supplied to `React.Fragment`."), zt(null));
      }
    }
    function si(N, se, xe, $e, it, St) {
      {
        var ot = ve(N);
        if (!ot) {
          var We = "";
          (N === void 0 || typeof N == "object" && N !== null && Object.keys(N).length === 0) && (We += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Un = Zl(it);
          Un ? We += Un : We += Ko();
          var Kt;
          N === null ? Kt = "null" : Ia(N) ? Kt = "array" : N !== void 0 && N.$$typeof === o ? (Kt = "<" + (De(N.type) || "Unknown") + " />", We = " Did you accidentally export a JSX literal instead of a component?") : Kt = typeof N, W("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Kt, We);
        }
        var Zt = Lr(N, se, xe, it, St);
        if (Zt == null)
          return Zt;
        if (ot) {
          var yr = se.children;
          if (yr !== void 0)
            if ($e)
              if (Ia(yr)) {
                for (var uo = 0; uo < yr.length; uo++)
                  Xl(yr[uo], N);
                Object.freeze && Object.freeze(yr);
              } else
                W("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Xl(yr, N);
        }
        return N === c ? Jl(Zt) : Xo(Zt), Zt;
      }
    }
    function lo(N, se, xe) {
      return si(N, se, xe, !0);
    }
    function ta(N, se, xe) {
      return si(N, se, xe, !1);
    }
    var Va = ta, so = lo;
    Ih.Fragment = c, Ih.jsx = Va, Ih.jsxs = so;
  }()), Ih;
}
process.env.NODE_ENV === "production" ? Gx.exports = r2() : Gx.exports = a2();
var A = Gx.exports;
const i2 = {
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
class Cy {
  constructor(o) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(o, l);
  }
  init(o) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = l.prefix || "i18next:", this.logger = o || i2, this.options = l, this.debug = l.debug;
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
    return new Cy(this.logger, {
      prefix: `${this.prefix}:${o}:`,
      ...this.options
    });
  }
  clone(o) {
    return o = o || this.options, o.prefix = o.prefix || this.prefix, new Cy(this.logger, o);
  }
}
var Wo = new Cy();
class zy {
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
function Yh() {
  let r, o;
  const l = new Promise((c, d) => {
    r = c, o = d;
  });
  return l.resolve = r, l.reject = o, l;
}
function A_(r) {
  return r == null ? "" : "" + r;
}
function o2(r, o, l) {
  r.forEach((c) => {
    o[c] && (l[c] = o[c]);
  });
}
function gw(r, o, l) {
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
function z_(r, o, l) {
  const {
    obj: c,
    k: d
  } = gw(r, o, Object);
  c[d] = l;
}
function l2(r, o, l, c) {
  const {
    obj: d,
    k: m
  } = gw(r, o, Object);
  d[m] = d[m] || [], c && (d[m] = d[m].concat(l)), c || d[m].push(l);
}
function _y(r, o) {
  const {
    obj: l,
    k: c
  } = gw(r, o);
  if (l)
    return l[c];
}
function s2(r, o, l) {
  const c = _y(r, l);
  return c !== void 0 ? c : _y(o, l);
}
function AT(r, o, l) {
  for (const c in o)
    c !== "__proto__" && c !== "constructor" && (c in r ? typeof r[c] == "string" || r[c] instanceof String || typeof o[c] == "string" || o[c] instanceof String ? l && (r[c] = o[c]) : AT(r[c], o[c], l) : r[c] = o[c]);
  return r;
}
function pd(r) {
  return r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var u2 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function c2(r) {
  return typeof r == "string" ? r.replace(/[&<>"'\/]/g, (o) => u2[o]) : r;
}
const f2 = [" ", ",", "?", "!", ";"];
function d2(r, o, l) {
  o = o || "", l = l || "";
  const c = f2.filter((v) => o.indexOf(v) < 0 && l.indexOf(v) < 0);
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
function Ty(r, o) {
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
      const C = c.slice(m + v).join(l);
      return C ? Ty(w, C, l) : void 0;
    }
    d = d[c[m]];
  }
  return d;
}
function ky(r) {
  return r && r.indexOf("_") > 0 ? r.replace("_", "-") : r;
}
class F_ extends zy {
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
    const w = _y(this.data, E);
    return w || !v || typeof c != "string" ? w : Ty(this.data && this.data[o] && this.data[o][l], c, m);
  }
  addResource(o, l, c, d) {
    let m = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const v = m.keySeparator !== void 0 ? m.keySeparator : this.options.keySeparator;
    let E = [o, l];
    c && (E = E.concat(v ? c.split(v) : c)), o.indexOf(".") > -1 && (E = o.split("."), d = l, l = E[1]), this.addNamespaces(l), z_(this.data, E, d), m.silent || this.emit("added", o, l, c, d);
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
    let w = _y(this.data, E) || {};
    d ? AT(w, c, m) : w = {
      ...w,
      ...c
    }, z_(this.data, E, w), v.silent || this.emit("added", o, l, c);
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
var zT = {
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
const P_ = {};
class Ry extends zy {
  constructor(o) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), o2(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], o, this), this.options = l, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = Wo.create("translator");
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
    const v = c && o.indexOf(c) > -1, E = !this.options.userDefinedKeySeparator && !l.keySeparator && !this.options.userDefinedNsSeparator && !l.nsSeparator && !d2(o, c, d);
    if (v && !E) {
      const w = o.match(this.interpolator.nestingRegexp);
      if (w && w.length > 0)
        return {
          key: o,
          namespaces: m
        };
      const C = o.split(c);
      (c !== d || c === d && this.options.ns.indexOf(C[0]) > -1) && (m = C.shift()), o = C.join(d);
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
    } = this.extractFromKey(o[o.length - 1], l), w = E[E.length - 1], C = l.lng || this.language, T = l.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (C && C.toLowerCase() === "cimode") {
      if (T) {
        const K = l.nsSeparator || this.options.nsSeparator;
        return d ? {
          res: `${w}${K}${v}`,
          usedKey: v,
          exactUsedKey: v,
          usedLng: C,
          usedNS: w
        } : `${w}${K}${v}`;
      }
      return d ? {
        res: v,
        usedKey: v,
        exactUsedKey: v,
        usedLng: C,
        usedNS: w
      } : v;
    }
    const R = this.resolve(o, l);
    let O = R && R.res;
    const U = R && R.usedKey || v, L = R && R.exactUsedKey || v, H = Object.prototype.toString.apply(O), ne = ["[object Number]", "[object Function]", "[object RegExp]"], oe = l.joinArrays !== void 0 ? l.joinArrays : this.options.joinArrays, W = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (W && O && typeof O != "string" && typeof O != "boolean" && typeof O != "number" && ne.indexOf(H) < 0 && !(typeof oe == "string" && H === "[object Array]")) {
      if (!l.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const K = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(U, O, {
          ...l,
          ns: E
        }) : `key '${v} (${this.language})' returned an object instead of string.`;
        return d ? (R.res = K, R) : K;
      }
      if (m) {
        const K = H === "[object Array]", ae = K ? [] : {}, te = K ? L : U;
        for (const V in O)
          if (Object.prototype.hasOwnProperty.call(O, V)) {
            const Z = `${te}${m}${V}`;
            ae[V] = this.translate(Z, {
              ...l,
              joinArrays: !1,
              ns: E
            }), ae[V] === Z && (ae[V] = O[V]);
          }
        O = ae;
      }
    } else if (W && typeof oe == "string" && H === "[object Array]")
      O = O.join(oe), O && (O = this.extendTranslation(O, o, l, c));
    else {
      let K = !1, ae = !1;
      const te = l.count !== void 0 && typeof l.count != "string", V = Ry.hasDefaultValue(l), Z = te ? this.pluralResolver.getSuffix(C, l.count, l) : "", we = l.ordinal && te ? this.pluralResolver.getSuffix(C, l.count, {
        ordinal: !1
      }) : "", de = l[`defaultValue${Z}`] || l[`defaultValue${we}`] || l.defaultValue;
      !this.isValidLookup(O) && V && (K = !0, O = de), this.isValidLookup(O) || (ae = !0, O = v);
      const ve = (l.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && ae ? void 0 : O, Ae = V && de !== O && this.options.updateMissing;
      if (ae || K || Ae) {
        if (this.logger.log(Ae ? "updateKey" : "missingKey", C, w, v, Ae ? de : O), m) {
          const lt = this.resolve(v, {
            ...l,
            keySeparator: !1
          });
          lt && lt.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let Qe = [];
        const De = this.languageUtils.getFallbackCodes(this.options.fallbackLng, l.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && De && De[0])
          for (let lt = 0; lt < De.length; lt++)
            Qe.push(De[lt]);
        else
          this.options.saveMissingTo === "all" ? Qe = this.languageUtils.toResolveHierarchy(l.lng || this.language) : Qe.push(l.lng || this.language);
        const Ze = (lt, st, Vt) => {
          const me = V && Vt !== O ? Vt : ve;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(lt, w, st, me, Ae, l) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(lt, w, st, me, Ae, l), this.emit("missingKey", lt, w, st, O);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && te ? Qe.forEach((lt) => {
          this.pluralResolver.getSuffixes(lt, l).forEach((st) => {
            Ze([lt], v + st, l[`defaultValue${st}`] || de);
          });
        }) : Ze(Qe, v, de));
      }
      O = this.extendTranslation(O, o, l, R, c), ae && O === v && this.options.appendNamespaceToMissingKey && (O = `${w}:${v}`), (ae || K) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? O = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${w}:${v}` : v, K ? O : void 0) : O = this.options.parseMissingKeyHandler(O));
    }
    return d ? (R.res = O, R) : O;
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
      const C = typeof o == "string" && (c && c.interpolation && c.interpolation.skipOnVariables !== void 0 ? c.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let T;
      if (C) {
        const O = o.match(this.interpolator.nestingRegexp);
        T = O && O.length;
      }
      let R = c.replace && typeof c.replace != "string" ? c.replace : c;
      if (this.options.interpolation.defaultVariables && (R = {
        ...this.options.interpolation.defaultVariables,
        ...R
      }), o = this.interpolator.interpolate(o, R, c.lng || this.language, c), C) {
        const O = o.match(this.interpolator.nestingRegexp), U = O && O.length;
        T < U && (c.nest = !1);
      }
      !c.lng && this.options.compatibilityAPI !== "v1" && d && d.res && (c.lng = d.usedLng), c.nest !== !1 && (o = this.interpolator.nest(o, function() {
        for (var O = arguments.length, U = new Array(O), L = 0; L < O; L++)
          U[L] = arguments[L];
        return m && m[0] === U[0] && !c.context ? (v.logger.warn(`It seems you are nesting recursively key: ${U[0]} in key: ${l[0]}`), null) : v.translate(...U, l);
      }, c)), c.interpolation && this.interpolator.reset();
    }
    const E = c.postProcess || this.options.postProcess, w = typeof E == "string" ? [E] : E;
    return o != null && w && w.length && c.applyPostProcessor !== !1 && (o = zT.handle(w, o, l, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: d,
      ...c
    } : c, this)), o;
  }
  resolve(o) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, c, d, m, v, E;
    return typeof o == "string" && (o = [o]), o.forEach((w) => {
      if (this.isValidLookup(c))
        return;
      const C = this.extractFromKey(w, l), T = C.key;
      d = T;
      let R = C.namespaces;
      this.options.fallbackNS && (R = R.concat(this.options.fallbackNS));
      const O = l.count !== void 0 && typeof l.count != "string", U = O && !l.ordinal && l.count === 0 && this.pluralResolver.shouldUseIntlApi(), L = l.context !== void 0 && (typeof l.context == "string" || typeof l.context == "number") && l.context !== "", H = l.lngs ? l.lngs : this.languageUtils.toResolveHierarchy(l.lng || this.language, l.fallbackLng);
      R.forEach((ne) => {
        this.isValidLookup(c) || (E = ne, !P_[`${H[0]}-${ne}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(E) && (P_[`${H[0]}-${ne}`] = !0, this.logger.warn(`key "${d}" for languages "${H.join(", ")}" won't get resolved as namespace "${E}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), H.forEach((oe) => {
          if (this.isValidLookup(c))
            return;
          v = oe;
          const W = [T];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(W, T, oe, ne, l);
          else {
            let ae;
            O && (ae = this.pluralResolver.getSuffix(oe, l.count, l));
            const te = `${this.options.pluralSeparator}zero`, V = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (O && (W.push(T + ae), l.ordinal && ae.indexOf(V) === 0 && W.push(T + ae.replace(V, this.options.pluralSeparator)), U && W.push(T + te)), L) {
              const Z = `${T}${this.options.contextSeparator}${l.context}`;
              W.push(Z), O && (W.push(Z + ae), l.ordinal && ae.indexOf(V) === 0 && W.push(Z + ae.replace(V, this.options.pluralSeparator)), U && W.push(Z + te));
            }
          }
          let K;
          for (; K = W.pop(); )
            this.isValidLookup(c) || (m = K, c = this.getResource(oe, ne, K, l));
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
function Mx(r) {
  return r.charAt(0).toUpperCase() + r.slice(1);
}
class H_ {
  constructor(o) {
    this.options = o, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Wo.create("languageUtils");
  }
  getScriptPartFromCode(o) {
    if (o = ky(o), !o || o.indexOf("-") < 0)
      return null;
    const l = o.split("-");
    return l.length === 2 || (l.pop(), l[l.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(l.join("-"));
  }
  getLanguagePartFromCode(o) {
    if (o = ky(o), !o || o.indexOf("-") < 0)
      return o;
    const l = o.split("-");
    return this.formatLanguageCode(l[0]);
  }
  formatLanguageCode(o) {
    if (typeof o == "string" && o.indexOf("-") > -1) {
      const l = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let c = o.split("-");
      return this.options.lowerCaseLng ? c = c.map((d) => d.toLowerCase()) : c.length === 2 ? (c[0] = c[0].toLowerCase(), c[1] = c[1].toUpperCase(), l.indexOf(c[1].toLowerCase()) > -1 && (c[1] = Mx(c[1].toLowerCase()))) : c.length === 3 && (c[0] = c[0].toLowerCase(), c[1].length === 2 && (c[1] = c[1].toUpperCase()), c[0] !== "sgn" && c[2].length === 2 && (c[2] = c[2].toUpperCase()), l.indexOf(c[1].toLowerCase()) > -1 && (c[1] = Mx(c[1].toLowerCase())), l.indexOf(c[2].toLowerCase()) > -1 && (c[2] = Mx(c[2].toLowerCase()))), c.join("-");
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
let p2 = [{
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
}], h2 = {
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
const v2 = ["v1", "v2", "v3"], m2 = ["v4"], I_ = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function g2() {
  const r = {};
  return p2.forEach((o) => {
    o.lngs.forEach((l) => {
      r[l] = {
        numbers: o.nr,
        plurals: h2[o.fc]
      };
    });
  }), r;
}
class y2 {
  constructor(o) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = o, this.options = l, this.logger = Wo.create("pluralResolver"), (!this.options.compatibilityJSON || m2.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = g2();
  }
  addRule(o, l) {
    this.rules[o] = l;
  }
  getRule(o) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(ky(o), {
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
    return c ? this.shouldUseIntlApi() ? c.resolvedOptions().pluralCategories.sort((d, m) => I_[d] - I_[m]).map((d) => `${this.options.prepend}${l.ordinal ? `ordinal${this.options.prepend}` : ""}${d}`) : c.numbers.map((d) => this.getSuffix(o, d, l)) : [];
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
    return !v2.includes(this.options.compatibilityJSON);
  }
}
function Y_(r, o, l) {
  let c = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", d = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, m = s2(r, o, l);
  return !m && d && typeof l == "string" && (m = Ty(r, l, c), m === void 0 && (m = Ty(o, l, c))), m;
}
class S2 {
  constructor() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Wo.create("interpolator"), this.options = o, this.format = o.interpolation && o.interpolation.format || ((l) => l), this.init(o);
  }
  init() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    o.interpolation || (o.interpolation = {
      escapeValue: !0
    });
    const l = o.interpolation;
    this.escape = l.escape !== void 0 ? l.escape : c2, this.escapeValue = l.escapeValue !== void 0 ? l.escapeValue : !0, this.useRawValueToEscape = l.useRawValueToEscape !== void 0 ? l.useRawValueToEscape : !1, this.prefix = l.prefix ? pd(l.prefix) : l.prefixEscaped || "{{", this.suffix = l.suffix ? pd(l.suffix) : l.suffixEscaped || "}}", this.formatSeparator = l.formatSeparator ? l.formatSeparator : l.formatSeparator || ",", this.unescapePrefix = l.unescapeSuffix ? "" : l.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : l.unescapeSuffix || "", this.nestingPrefix = l.nestingPrefix ? pd(l.nestingPrefix) : l.nestingPrefixEscaped || pd("$t("), this.nestingSuffix = l.nestingSuffix ? pd(l.nestingSuffix) : l.nestingSuffixEscaped || pd(")"), this.nestingOptionsSeparator = l.nestingOptionsSeparator ? l.nestingOptionsSeparator : l.nestingOptionsSeparator || ",", this.maxReplaces = l.maxReplaces ? l.maxReplaces : 1e3, this.alwaysFormat = l.alwaysFormat !== void 0 ? l.alwaysFormat : !1, this.resetRegExp();
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
    function C(U) {
      return U.replace(/\$/g, "$$$$");
    }
    const T = (U) => {
      if (U.indexOf(this.formatSeparator) < 0) {
        const oe = Y_(l, w, U, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(oe, void 0, c, {
          ...d,
          ...l,
          interpolationkey: U
        }) : oe;
      }
      const L = U.split(this.formatSeparator), H = L.shift().trim(), ne = L.join(this.formatSeparator).trim();
      return this.format(Y_(l, w, H, this.options.keySeparator, this.options.ignoreJSONStructure), ne, c, {
        ...d,
        ...l,
        interpolationkey: H
      });
    };
    this.resetRegExp();
    const R = d && d.missingInterpolationHandler || this.options.missingInterpolationHandler, O = d && d.interpolation && d.interpolation.skipOnVariables !== void 0 ? d.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (U) => C(U)
    }, {
      regex: this.regexp,
      safeValue: (U) => this.escapeValue ? C(this.escape(U)) : C(U)
    }].forEach((U) => {
      for (E = 0; m = U.regex.exec(o); ) {
        const L = m[1].trim();
        if (v = T(L), v === void 0)
          if (typeof R == "function") {
            const ne = R(o, m, d);
            v = typeof ne == "string" ? ne : "";
          } else if (d && Object.prototype.hasOwnProperty.call(d, L))
            v = "";
          else if (O) {
            v = m[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${L} for interpolating ${o}`), v = "";
        else
          typeof v != "string" && !this.useRawValueToEscape && (v = A_(v));
        const H = U.safeValue(v);
        if (o = o.replace(m[0], H), O ? (U.regex.lastIndex += v.length, U.regex.lastIndex -= m[0].length) : U.regex.lastIndex = 0, E++, E >= this.maxReplaces)
          break;
      }
    }), o;
  }
  nest(o, l) {
    let c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, d, m, v;
    function E(w, C) {
      const T = this.nestingOptionsSeparator;
      if (w.indexOf(T) < 0)
        return w;
      const R = w.split(new RegExp(`${T}[ ]*{`));
      let O = `{${R[1]}`;
      w = R[0], O = this.interpolate(O, v);
      const U = O.match(/'/g), L = O.match(/"/g);
      (U && U.length % 2 === 0 && !L || L.length % 2 !== 0) && (O = O.replace(/'/g, '"'));
      try {
        v = JSON.parse(O), C && (v = {
          ...C,
          ...v
        });
      } catch (H) {
        return this.logger.warn(`failed parsing options string in nesting for key ${w}`, H), `${w}${T}${O}`;
      }
      return delete v.defaultValue, w;
    }
    for (; d = this.nestingRegexp.exec(o); ) {
      let w = [];
      v = {
        ...c
      }, v = v.replace && typeof v.replace != "string" ? v.replace : v, v.applyPostProcessor = !1, delete v.defaultValue;
      let C = !1;
      if (d[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(d[1])) {
        const T = d[1].split(this.formatSeparator).map((R) => R.trim());
        d[1] = T.shift(), w = T, C = !0;
      }
      if (m = l(E.call(this, d[1].trim(), v), v), m && d[0] === o && typeof m != "string")
        return m;
      typeof m != "string" && (m = A_(m)), m || (this.logger.warn(`missed to resolve ${d[1]} for nesting ${o}`), m = ""), C && (m = w.reduce((T, R) => this.format(T, R, c.lng, {
        ...c,
        interpolationkey: d[1].trim()
      }), m.trim())), o = o.replace(d[0], m), this.regexp.lastIndex = 0;
    }
    return o;
  }
}
function x2(r) {
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
function hd(r) {
  const o = {};
  return function(l, c, d) {
    const m = c + JSON.stringify(d);
    let v = o[m];
    return v || (v = r(ky(c), d), o[m] = v), v(l);
  };
}
class w2 {
  constructor() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Wo.create("formatter"), this.options = o, this.formats = {
      number: hd((l, c) => {
        const d = new Intl.NumberFormat(l, {
          ...c
        });
        return (m) => d.format(m);
      }),
      currency: hd((l, c) => {
        const d = new Intl.NumberFormat(l, {
          ...c,
          style: "currency"
        });
        return (m) => d.format(m);
      }),
      datetime: hd((l, c) => {
        const d = new Intl.DateTimeFormat(l, {
          ...c
        });
        return (m) => d.format(m);
      }),
      relativetime: hd((l, c) => {
        const d = new Intl.RelativeTimeFormat(l, {
          ...c
        });
        return (m) => d.format(m, c.range || "day");
      }),
      list: hd((l, c) => {
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
    this.formats[o.toLowerCase().trim()] = hd(l);
  }
  format(o, l, c) {
    let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return l.split(this.formatSeparator).reduce((m, v) => {
      const {
        formatName: E,
        formatOptions: w
      } = x2(v);
      if (this.formats[E]) {
        let C = m;
        try {
          const T = d && d.formatParams && d.formatParams[d.interpolationkey] || {}, R = T.locale || T.lng || d.locale || d.lng || c;
          C = this.formats[E](m, R, {
            ...w,
            ...d,
            ...T
          });
        } catch (T) {
          this.logger.warn(T);
        }
        return C;
      } else
        this.logger.warn(`there was no format function for ${E}`);
      return m;
    }, o);
  }
}
function b2(r, o) {
  r.pending[o] !== void 0 && (delete r.pending[o], r.pendingCount--);
}
class E2 extends zy {
  constructor(o, l, c) {
    let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = o, this.store = l, this.services = c, this.languageUtils = c.languageUtils, this.options = d, this.logger = Wo.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = d.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = d.maxRetries >= 0 ? d.maxRetries : 5, this.retryTimeout = d.retryTimeout >= 1 ? d.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(c, d.backend, d);
  }
  queueLoad(o, l, c, d) {
    const m = {}, v = {}, E = {}, w = {};
    return o.forEach((C) => {
      let T = !0;
      l.forEach((R) => {
        const O = `${C}|${R}`;
        !c.reload && this.store.hasResourceBundle(C, R) ? this.state[O] = 2 : this.state[O] < 0 || (this.state[O] === 1 ? v[O] === void 0 && (v[O] = !0) : (this.state[O] = 1, T = !1, v[O] === void 0 && (v[O] = !0), m[O] === void 0 && (m[O] = !0), w[R] === void 0 && (w[R] = !0)));
      }), T || (E[C] = !0);
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
      l2(w.loaded, [m], v), b2(w, o), l && w.errors.push(l), w.pendingCount === 0 && !w.done && (Object.keys(w.loaded).forEach((C) => {
        E[C] || (E[C] = {});
        const T = w.loaded[C];
        T.length && T.forEach((R) => {
          E[C][R] === void 0 && (E[C][R] = !0);
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
    const E = (C, T) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const R = this.waitingReads.shift();
        this.read(R.lng, R.ns, R.fcName, R.tried, R.wait, R.callback);
      }
      if (C && T && d < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, o, l, c, d + 1, m * 2, v);
        }, m);
        return;
      }
      v(C, T);
    }, w = this.backend[c].bind(this.backend);
    if (w.length === 2) {
      try {
        const C = w(o, l);
        C && typeof C.then == "function" ? C.then((T) => E(null, T)).catch(E) : E(null, C);
      } catch (C) {
        E(C);
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
        }, C = this.backend.create.bind(this.backend);
        if (C.length < 6)
          try {
            let T;
            C.length === 5 ? T = C(o, l, c, d, w) : T = C(o, l, c, d), T && typeof T.then == "function" ? T.then((R) => E(null, R)).catch(E) : E(null, T);
          } catch (T) {
            E(T);
          }
        else
          C(o, l, c, d, E, w);
      }
      !o || !o[0] || this.store.addResource(o[0], l, c, d);
    }
  }
}
function $_() {
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
function V_(r) {
  return typeof r.ns == "string" && (r.ns = [r.ns]), typeof r.fallbackLng == "string" && (r.fallbackLng = [r.fallbackLng]), typeof r.fallbackNS == "string" && (r.fallbackNS = [r.fallbackNS]), r.supportedLngs && r.supportedLngs.indexOf("cimode") < 0 && (r.supportedLngs = r.supportedLngs.concat(["cimode"])), r;
}
function cy() {
}
function C2(r) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach((o) => {
    typeof r[o] == "function" && (r[o] = r[o].bind(r));
  });
}
class Jh extends zy {
  constructor() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = V_(o), this.services = {}, this.logger = Wo, this.modules = {
      external: []
    }, C2(this), l && !this.isInitialized && !o.isClone) {
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
    const d = $_();
    this.options = {
      ...d,
      ...this.options,
      ...V_(l)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...d.interpolation,
      ...this.options.interpolation
    }), l.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = l.keySeparator), l.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = l.nsSeparator);
    function m(w) {
      return w ? typeof w == "function" ? new w() : w : null;
    }
    if (!this.options.isClone) {
      this.modules.logger ? Wo.init(m(this.modules.logger), this.options) : Wo.init(null, this.options);
      let w;
      this.modules.formatter ? w = this.modules.formatter : typeof Intl < "u" && (w = w2);
      const C = new H_(this.options);
      this.store = new F_(this.options.resources, this.options);
      const T = this.services;
      T.logger = Wo, T.resourceStore = this.store, T.languageUtils = C, T.pluralResolver = new y2(C, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), w && (!this.options.interpolation.format || this.options.interpolation.format === d.interpolation.format) && (T.formatter = m(w), T.formatter.init(T, this.options), this.options.interpolation.format = T.formatter.format.bind(T.formatter)), T.interpolator = new S2(this.options), T.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, T.backendConnector = new E2(m(this.modules.backend), T.resourceStore, T, this.options), T.backendConnector.on("*", function(R) {
        for (var O = arguments.length, U = new Array(O > 1 ? O - 1 : 0), L = 1; L < O; L++)
          U[L - 1] = arguments[L];
        o.emit(R, ...U);
      }), this.modules.languageDetector && (T.languageDetector = m(this.modules.languageDetector), T.languageDetector.init && T.languageDetector.init(T, this.options.detection, this.options)), this.modules.i18nFormat && (T.i18nFormat = m(this.modules.i18nFormat), T.i18nFormat.init && T.i18nFormat.init(this)), this.translator = new Ry(this.services, this.options), this.translator.on("*", function(R) {
        for (var O = arguments.length, U = new Array(O > 1 ? O - 1 : 0), L = 1; L < O; L++)
          U[L - 1] = arguments[L];
        o.emit(R, ...U);
      }), this.modules.external.forEach((R) => {
        R.init && R.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, c || (c = cy), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
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
    const v = Yh(), E = () => {
      const w = (C, T) => {
        this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), v.resolve(T), c(C, T);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized)
        return w(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, w);
    };
    return this.options.resources || !this.options.initImmediate ? E() : setTimeout(E, 0), v;
  }
  loadResources(o) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : cy;
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
    const d = Yh();
    return o || (o = this.languages), l || (l = this.options.ns), c || (c = cy), this.services.backendConnector.reload(o, l, (m) => {
      d.resolve(), c(m);
    }), d;
  }
  use(o) {
    if (!o)
      throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!o.type)
      throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return o.type === "backend" && (this.modules.backend = o), (o.type === "logger" || o.log && o.warn && o.error) && (this.modules.logger = o), o.type === "languageDetector" && (this.modules.languageDetector = o), o.type === "i18nFormat" && (this.modules.i18nFormat = o), o.type === "postProcessor" && zT.addPostProcessor(o), o.type === "formatter" && (this.modules.formatter = o), o.type === "3rdParty" && this.modules.external.push(o), this;
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
    const d = Yh();
    this.emit("languageChanging", o);
    const m = (w) => {
      this.language = w, this.languages = this.services.languageUtils.toResolveHierarchy(w), this.resolvedLanguage = void 0, this.setResolvedLanguage(w);
    }, v = (w, C) => {
      C ? (m(C), this.translator.changeLanguage(C), this.isLanguageChangingTo = void 0, this.emit("languageChanged", C), this.logger.log("languageChanged", C)) : this.isLanguageChangingTo = void 0, d.resolve(function() {
        return c.t(...arguments);
      }), l && l(w, function() {
        return c.t(...arguments);
      });
    }, E = (w) => {
      !o && !w && this.services.languageDetector && (w = []);
      const C = typeof w == "string" ? w : this.services.languageUtils.getBestMatchFromCodes(w);
      C && (this.language || m(C), this.translator.language || this.translator.changeLanguage(C), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(C)), this.loadResources(C, (T) => {
        v(T, C);
      });
    };
    return !o && this.services.languageDetector && !this.services.languageDetector.async ? E(this.services.languageDetector.detect()) : !o && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(E) : this.services.languageDetector.detect(E) : E(o), d;
  }
  getFixedT(o, l, c) {
    var d = this;
    const m = function(v, E) {
      let w;
      if (typeof E != "object") {
        for (var C = arguments.length, T = new Array(C > 2 ? C - 2 : 0), R = 2; R < C; R++)
          T[R - 2] = arguments[R];
        w = d.options.overloadTranslationOptionHandler([v, E].concat(T));
      } else
        w = {
          ...E
        };
      w.lng = w.lng || m.lng, w.lngs = w.lngs || m.lngs, w.ns = w.ns || m.ns, w.keyPrefix = w.keyPrefix || c || m.keyPrefix;
      const O = d.options.keySeparator || ".";
      let U;
      return w.keyPrefix && Array.isArray(v) ? U = v.map((L) => `${w.keyPrefix}${O}${L}`) : U = w.keyPrefix ? `${w.keyPrefix}${O}${v}` : v, d.t(U, w);
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
      const C = this.services.backendConnector.state[`${E}|${w}`];
      return C === -1 || C === 2;
    };
    if (l.precheck) {
      const E = l.precheck(this, v);
      if (E !== void 0)
        return E;
    }
    return !!(this.hasResourceBundle(c, o) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || v(c, o) && (!d || v(m, o)));
  }
  loadNamespaces(o, l) {
    const c = Yh();
    return this.options.ns ? (typeof o == "string" && (o = [o]), o.forEach((d) => {
      this.options.ns.indexOf(d) < 0 && this.options.ns.push(d);
    }), this.loadResources((d) => {
      c.resolve(), l && l(d);
    }), c) : (l && l(), Promise.resolve());
  }
  loadLanguages(o, l) {
    const c = Yh();
    typeof o == "string" && (o = [o]);
    const d = this.options.preload || [], m = o.filter((v) => d.indexOf(v) < 0);
    return m.length ? (this.options.preload = d.concat(m), this.loadResources((v) => {
      c.resolve(), l && l(v);
    }), c) : (l && l(), Promise.resolve());
  }
  dir(o) {
    if (o || (o = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !o)
      return "rtl";
    const l = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], c = this.services && this.services.languageUtils || new H_($_());
    return l.indexOf(c.getLanguagePartFromCode(o)) > -1 || o.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = arguments.length > 1 ? arguments[1] : void 0;
    return new Jh(o, l);
  }
  cloneInstance() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : cy;
    const c = o.forkResourceStore;
    c && delete o.forkResourceStore;
    const d = {
      ...this.options,
      ...o,
      isClone: !0
    }, m = new Jh(d);
    return (o.debug !== void 0 || o.prefix !== void 0) && (m.logger = m.logger.clone(o)), ["store", "services", "language"].forEach((v) => {
      m[v] = this[v];
    }), m.services = {
      ...this.services
    }, m.services.utils = {
      hasLoadedNamespace: m.hasLoadedNamespace.bind(m)
    }, c && (m.store = new F_(this.store.data, d), m.services.resourceStore = m.store), m.translator = new Ry(m.services, d), m.translator.on("*", function(v) {
      for (var E = arguments.length, w = new Array(E > 1 ? E - 1 : 0), C = 1; C < E; C++)
        w[C - 1] = arguments[C];
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
const Or = Jh.createInstance();
Or.createInstance = Jh.createInstance;
Or.createInstance;
Or.dir;
Or.init;
Or.loadResources;
Or.reloadResources;
Or.use;
const _2 = Or.changeLanguage;
Or.getFixedT;
Or.t;
Or.exists;
Or.setDefaultNamespace;
Or.hasLoadedNamespace;
Or.loadNamespaces;
Or.loadLanguages;
const Ci = (r, o) => Or.t(r, o), T2 = {
  common: {
    ok: "Okay",
    "not-found": "Not Found",
    add: "Add",
    error: "Error",
    cancel: "Cancel",
    back: "Back",
    name: "Name",
    group: "Group",
    continue: "Continue",
    close: "Close",
    save: "Save",
    open: "Open",
    break: "Break",
    breaks: "Breaks",
    edit: "Edit",
    logout: "Log Out",
    new: "New",
    workgroups: "Work Groups",
    scalesgroups: "Scales Group",
    scales: "Scales",
    remove: "Remove",
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
    journey: "Journey",
    action: "Action",
    start: "Start",
    entry: "Entry",
    end: "End",
    finish: "Finish"
  },
  complement: {
    add: "Add {{complement}}",
    select: "Select {{complement}}",
    remove: "Remove {{complement}}",
    name: "{{complement}}`s name",
    new: "New {{complement}}",
    edit: "Edit {{complement}}",
    open: "Open {{complement}}",
    close: "Close {{complement}}"
  },
  settings: {
    "application-title": "Select a company and database",
    tabs: {
      personal: "Personal",
      application: "Application"
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
  },
  messages: {
    "not-found": "No {{item}} was found",
    typing: "Type your {{item}}..."
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
      workGroups: "Work Groups",
      breaks: "Breaks"
    },
    services: {
      attempts: "Attempts",
      hour: "Hour",
      answereds: "Answereds",
      contact_right_person: "Contact Right Person",
      loggeds_agents: "Loggeds Agents"
    }
  }
}, k2 = {
  common: {
    ok: "Aceptar",
    add: "Adicionar",
    error: "Error",
    "not-found": "Não encontrado",
    cancel: "Cancelar",
    back: "Volver",
    name: "Nombre",
    group: "Grupo",
    continue: "Continuar",
    close: "Cerrar",
    save: "Guardar",
    open: "Abrir",
    break: "Pausa",
    breaks: "Pausas",
    edit: "Editar",
    logout: "Cerrar sesión",
    new: "Nuevo",
    workgroups: "Grupos de Trabajo",
    scalesgroups: "Grupo de Escalas",
    scales: "Escalas",
    company: "Empresa",
    remove: "Remover",
    companies: "Empresas",
    database: "Bases de Datos",
    theme: "Tema",
    language: "Idioma",
    search: "Buscar",
    done: "Hecho",
    next: "Siguiente",
    previous: "Anterior",
    entry: "Entrada",
    loading: "Cargando",
    action: "Acción",
    start: "Início",
    journey: "Jornada",
    end: "Saída",
    finish: "Fim"
  },
  complement: {
    add: "Agregar {{complement}}",
    select: "Seleccionar {{complement}}",
    remove: "Eliminar {{complement}}",
    name: "Nombre del {{complement}}",
    new: "Nuevo {{complement}}",
    edit: "Editar {{complement}}",
    open: "Abrir {{complement}}",
    close: "Cerrar {{complement}}"
  },
  settings: {
    "application-title": "Seleccione una empresa y una base de datos",
    tabs: {
      application: "Applicacion",
      personal: "Pessoal"
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
  messages: {
    "not-found": "Nenhum(a) {{item}} foi encontrado(a)",
    typing: "Digite o(a) {{item}}..."
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
      workGroups: "Grupos de Trabajo",
      breaks: "Intervalos"
    },
    services: {
      attempts: "Intentos",
      hour: "Hora",
      answereds: "Respostas",
      contact_right_person: "Contato con la persona cierta",
      loggeds_agents: "Agentes Logados"
    }
  }
}, R2 = {
  common: {
    ok: "OK",
    error: "Erro",
    add: "Adicionar",
    cancel: "Cancelar",
    "not-found": "Não encontrado",
    back: "Voltar",
    name: "Nome",
    group: "Grupo",
    continue: "Continuar",
    close: "Fechar",
    save: "Salvar",
    open: "Abrir",
    edit: "Editar",
    logout: "Sair",
    new: "Novo",
    workgroups: "Grupos de Trabalho",
    scalesgroups: "Grupo de Escalas",
    remove: "Remover",
    scales: "Escalas",
    company: "Empresa",
    companies: "Empresas",
    database: "Bancos de Dados",
    theme: "Tema",
    break: "Pausa",
    breaks: "Pausas",
    language: "Idioma",
    search: "Buscar",
    done: "Concluído",
    next: "Próximo",
    previous: "Anterior",
    loading: "Carregando",
    action: "Ação",
    entry: "Entrada",
    journey: "Jornada",
    start: "Início",
    end: "Saída",
    finish: "Fim"
  },
  complement: {
    add: "Adicionar {{complement}}",
    select: "Selecionar {{complement}}",
    remove: "Remover {{complement}}",
    new: "Novo {{complement}}",
    name: "Nome do {{complement}}",
    edit: "Editar {{complement}}",
    open: "Abrir {{complement}}",
    close: "Fechar {{complement}}"
  },
  settings: {
    "application-title": "Selecione uma empresa e banco de dados",
    tabs: {
      application: "Aplicação",
      personal: "Pessoal"
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
  messages: {
    "not-found": "Nenhum(a) {{item}} foi encontrado(a)",
    typing: "Digite o(a) {{item}}..."
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
      workGroups: "Grupos de Trabalho",
      breaks: "Pausas"
    },
    services: {
      attempts: "Tentativas",
      hour: "Hora",
      answereds: "Respostas",
      contact_right_person: "Contato com a pessoa certa",
      loggeds_agents: "Agentes logados"
    }
  }
}, D2 = ({ language: r = "en" }) => {
  Or.init({
    lng: r,
    fallbackLng: "en",
    resources: {
      en: { translation: T2 },
      "pt-BR": { translation: R2 },
      es: { translation: k2 }
    }
  });
}, O2 = (r) => {
  _2(r);
}, M2 = (r, o, l, c, d, m) => {
  o = o - 16;
  const v = o / c, E = [];
  return Object.values(r).forEach((w) => {
    let C = "";
    w.forEach((T, R) => {
      R === 0 && (m ? C += `M-4,${o + 50}L-4,${o - T * v}` : C += `M0,${o - T * v}`), R > 0 && (C += `L${d * R},${o - T * v}`), R === w.length - 1 && (C += `L${l + 4},${o + 50}`);
    }), E.push(C);
  }), E;
}, N2 = ({
  data: r,
  width: o,
  height: l,
  filled: c = !1,
  tooltipRef: d,
  translation: m,
  maxItemValue: v,
  lineRef: E
}) => {
  if (o === 0 || l === 0 || r.length === 0)
    return null;
  const w = Object.keys(r[0]).length, C = o / (r.length - 1) + 1, T = r.reduce(
    (O, U) => (Object.entries(U).forEach(
      ([L, H]) => {
        O != null && O[L] ? O[L].push(H) : O[L] = [H];
      }
    ), O),
    {}
  ), R = M2(
    T,
    l,
    o,
    v,
    C,
    c
  );
  return /* @__PURE__ */ A.jsx(A.Fragment, { children: R == null ? void 0 : R.map((O, U) => /* @__PURE__ */ A.jsxs("g", { children: [
    /* @__PURE__ */ A.jsx(
      "path",
      {
        className: c ? "filled" : "",
        d: O,
        strokeWidth: "3",
        fill: c ? "currentColor" : "none",
        strokeLinejoin: "round",
        strokeLinecap: "round",
        onMouseMove: (L) => {
          const H = L.clientX;
          if (E.current) {
            const ne = E.current.parentNode.getBoundingClientRect().left, W = Array.from({ length: w }).map(
              (ae, te) => C * te
            ).map(
              (ae) => Math.abs(H - ne - ae)
            ), K = W.indexOf(
              Math.min(...W)
            );
            if (d.current) {
              const ae = Object.entries(
                r[K] ?? []
              ).reduce((te, V) => (te += `<span>${Ci(
                `data.${m}.${V[0]}`
              )}: ${V[1]}</span>`, te), "");
              d.current.innerHTML = `
                       ${ae}
                    `;
            }
          }
        }
      }
    ),
    c && /* @__PURE__ */ A.jsxs("linearGradient", { id: `lgrad-${U}`, gradientTransform: "rotate(90)", children: [
      /* @__PURE__ */ A.jsx("stop", { offset: "0%", stopColor: "#4169e1" }),
      /* @__PURE__ */ A.jsx("stop", { offset: "75%", stopColor: "#c44764" })
    ] })
  ] }, U)) });
}, L2 = ({
  label: r,
  onMouseEnter: o,
  x: l,
  y: c,
  height: d,
  width: m,
  ...v
}) => {
  if (v.value === 0)
    return null;
  const E = String(v.value).length * 4, w = m / 2 - E;
  return /* @__PURE__ */ A.jsxs(
    "g",
    {
      onMouseEnter: () => o == null ? void 0 : o({
        label: r,
        value: v.value
      }),
      onMouseMove: (C) => {
        var T;
        return (T = v.onMouseMove) == null ? void 0 : T.call(v, { x: C.clientX, y: C.clientY });
      },
      children: [
        /* @__PURE__ */ A.jsx("text", { x: l + w, y: c - 5, children: v.value }),
        /* @__PURE__ */ A.jsx("rect", { x: l, y: c, height: d, width: m, rx: 4 })
      ]
    }
  );
}, j2 = ({
  width: r,
  height: o,
  data: l,
  showOnly: c,
  tooltipRef: d,
  groupBy: m,
  translation: v,
  maxItemValue: E
}) => {
  if (console.log(l), r === 0 || o === 0 || l.length === 0)
    return null;
  c && (l = l.map((R) => ({
    [m]: R[m],
    [c]: R[c]
  })));
  const w = Object.keys(l[0]).length;
  let C = 24, T = (r - C * (l.length - 1)) / l.length;
  return c ? C = 24 : (C = 0, T = (r - C * (l.length - 1) * (w - 1)) / l.length / w), console.log(l, T, w), /* @__PURE__ */ A.jsx(A.Fragment, { children: l.map((R, O) => {
    const U = (o - 40) / E, L = { ...R };
    delete L[m];
    let H = 1, oe = O * H * w * ((T + C) / (w - 1)), W = O > 0 ? oe / 2 : oe;
    W += String(R[m]).length * 6;
    const K = (T + C) * w;
    let ae = 0;
    if (!c) {
      const te = (r - C * (l.length - 1)) / l.length;
      W = te * O + te / 2 - String(R[m]).length * 8;
    }
    return console.log(Ci("data.workgroups.name")), /* @__PURE__ */ A.jsxs("g", { children: [
      Object.entries(L).map(([te, V]) => {
        const Z = ae;
        if (V === 0)
          return null;
        oe = Z * w * ((T + C * (w - 1)) / (w - 1)), oe = oe + O * K, c && (oe /= 2);
        const de = V * U;
        return H += 1, ae += 1, /* @__PURE__ */ A.jsx(
          L2,
          {
            x: oe,
            value: V,
            y: o - 20 - de,
            onMouseEnter: ({ label: ve, value: Ae }) => {
              d.current && (d.current.innerHTML = `
                         <span>${ve}: ${Ae}</span>
                    `);
            },
            itemIndex: O,
            width: T,
            height: de,
            label: Ci(
              `data.${v}.${te}`
            )
          },
          `${te}-${O}`
        );
      }),
      /* @__PURE__ */ A.jsx(
        "text",
        {
          y: o - 4,
          x: W + (T - C - T * (w - 3) - String(R[m]).length * 8) / 2,
          children: R[m]
        }
      )
    ] }, O);
  }) });
};
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var FT;
function fe() {
  return FT.apply(null, arguments);
}
function U2(r) {
  FT = r;
}
function ro(r) {
  return r instanceof Array || Object.prototype.toString.call(r) === "[object Array]";
}
function hc(r) {
  return r != null && Object.prototype.toString.call(r) === "[object Object]";
}
function Ot(r, o) {
  return Object.prototype.hasOwnProperty.call(r, o);
}
function yw(r) {
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
function Gl(r) {
  return typeof r == "number" || Object.prototype.toString.call(r) === "[object Number]";
}
function lv(r) {
  return r instanceof Date || Object.prototype.toString.call(r) === "[object Date]";
}
function PT(r, o) {
  var l = [], c, d = r.length;
  for (c = 0; c < d; ++c)
    l.push(o(r[c], c));
  return l;
}
function Xs(r, o) {
  for (var l in o)
    Ot(o, l) && (r[l] = o[l]);
  return Ot(o, "toString") && (r.toString = o.toString), Ot(o, "valueOf") && (r.valueOf = o.valueOf), r;
}
function Qo(r, o, l, c) {
  return uk(r, o, l, c, !0).utc();
}
function A2() {
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
  return r._pf == null && (r._pf = A2()), r._pf;
}
var Qx;
Array.prototype.some ? Qx = Array.prototype.some : Qx = function(r) {
  var o = Object(this), l = o.length >>> 0, c;
  for (c = 0; c < l; c++)
    if (c in o && r.call(this, o[c], c, o))
      return !0;
  return !1;
};
function Sw(r) {
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
function Fy(r) {
  var o = Qo(NaN);
  return r != null ? Xs(ft(o), r) : ft(o).userInvalidated = !0, o;
}
var B_ = fe.momentProperties = [], Nx = !1;
function xw(r, o) {
  var l, c, d, m = B_.length;
  if (Pa(o._isAMomentObject) || (r._isAMomentObject = o._isAMomentObject), Pa(o._i) || (r._i = o._i), Pa(o._f) || (r._f = o._f), Pa(o._l) || (r._l = o._l), Pa(o._strict) || (r._strict = o._strict), Pa(o._tzm) || (r._tzm = o._tzm), Pa(o._isUTC) || (r._isUTC = o._isUTC), Pa(o._offset) || (r._offset = o._offset), Pa(o._pf) || (r._pf = ft(o)), Pa(o._locale) || (r._locale = o._locale), m > 0)
    for (l = 0; l < m; l++)
      c = B_[l], d = o[c], Pa(d) || (r[c] = d);
  return r;
}
function sv(r) {
  xw(this, r), this._d = new Date(r._d != null ? r._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), Nx === !1 && (Nx = !0, fe.updateOffset(this), Nx = !1);
}
function ao(r) {
  return r instanceof sv || r != null && r._isAMomentObject != null;
}
function HT(r) {
  fe.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + r);
}
function _i(r, o) {
  var l = !0;
  return Xs(function() {
    if (fe.deprecationHandler != null && fe.deprecationHandler(null, r), l) {
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
      HT(
        r + `
Arguments: ` + Array.prototype.slice.call(c).join("") + `
` + new Error().stack
      ), l = !1;
    }
    return o.apply(this, arguments);
  }, o);
}
var W_ = {};
function IT(r, o) {
  fe.deprecationHandler != null && fe.deprecationHandler(r, o), W_[r] || (HT(o), W_[r] = !0);
}
fe.suppressDeprecationWarnings = !1;
fe.deprecationHandler = null;
function qo(r) {
  return typeof Function < "u" && r instanceof Function || Object.prototype.toString.call(r) === "[object Function]";
}
function z2(r) {
  var o, l;
  for (l in r)
    Ot(r, l) && (o = r[l], qo(o) ? this[l] = o : this["_" + l] = o);
  this._config = r, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function qx(r, o) {
  var l = Xs({}, r), c;
  for (c in o)
    Ot(o, c) && (hc(r[c]) && hc(o[c]) ? (l[c] = {}, Xs(l[c], r[c]), Xs(l[c], o[c])) : o[c] != null ? l[c] = o[c] : delete l[c]);
  for (c in r)
    Ot(r, c) && !Ot(o, c) && hc(r[c]) && (l[c] = Xs({}, l[c]));
  return l;
}
function ww(r) {
  r != null && this.set(r);
}
var Kx;
Object.keys ? Kx = Object.keys : Kx = function(r) {
  var o, l = [];
  for (o in r)
    Ot(r, o) && l.push(o);
  return l;
};
var F2 = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function P2(r, o, l) {
  var c = this._calendar[r] || this._calendar.sameElse;
  return qo(c) ? c.call(o, l) : c;
}
function Go(r, o, l) {
  var c = "" + Math.abs(r), d = o - c.length, m = r >= 0;
  return (m ? l ? "+" : "" : "-") + Math.pow(10, Math.max(0, d)).toString().substr(1) + c;
}
var bw = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, fy = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Lx = {}, yd = {};
function Be(r, o, l, c) {
  var d = c;
  typeof c == "string" && (d = function() {
    return this[c]();
  }), r && (yd[r] = d), o && (yd[o[0]] = function() {
    return Go(d.apply(this, arguments), o[1], o[2]);
  }), l && (yd[l] = function() {
    return this.localeData().ordinal(
      d.apply(this, arguments),
      r
    );
  });
}
function H2(r) {
  return r.match(/\[[\s\S]/) ? r.replace(/^\[|\]$/g, "") : r.replace(/\\/g, "");
}
function I2(r) {
  var o = r.match(bw), l, c;
  for (l = 0, c = o.length; l < c; l++)
    yd[o[l]] ? o[l] = yd[o[l]] : o[l] = H2(o[l]);
  return function(d) {
    var m = "", v;
    for (v = 0; v < c; v++)
      m += qo(o[v]) ? o[v].call(d, r) : o[v];
    return m;
  };
}
function gy(r, o) {
  return r.isValid() ? (o = YT(o, r.localeData()), Lx[o] = Lx[o] || I2(o), Lx[o](r)) : r.localeData().invalidDate();
}
function YT(r, o) {
  var l = 5;
  function c(d) {
    return o.longDateFormat(d) || d;
  }
  for (fy.lastIndex = 0; l >= 0 && fy.test(r); )
    r = r.replace(
      fy,
      c
    ), fy.lastIndex = 0, l -= 1;
  return r;
}
var Y2 = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function $2(r) {
  var o = this._longDateFormat[r], l = this._longDateFormat[r.toUpperCase()];
  return o || !l ? o : (this._longDateFormat[r] = l.match(bw).map(function(c) {
    return c === "MMMM" || c === "MM" || c === "DD" || c === "dddd" ? c.slice(1) : c;
  }).join(""), this._longDateFormat[r]);
}
var V2 = "Invalid date";
function B2() {
  return this._invalidDate;
}
var W2 = "%d", G2 = /\d{1,2}/;
function Q2(r) {
  return this._ordinal.replace("%d", r);
}
var q2 = {
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
function K2(r, o, l, c) {
  var d = this._relativeTime[l];
  return qo(d) ? d(r, o, l, c) : d.replace(/%d/i, r);
}
function Z2(r, o) {
  var l = this._relativeTime[r > 0 ? "future" : "past"];
  return qo(l) ? l(o) : l.replace(/%s/i, o);
}
var Gh = {};
function qr(r, o) {
  var l = r.toLowerCase();
  Gh[l] = Gh[l + "s"] = Gh[o] = r;
}
function Ti(r) {
  return typeof r == "string" ? Gh[r] || Gh[r.toLowerCase()] : void 0;
}
function Ew(r) {
  var o = {}, l, c;
  for (c in r)
    Ot(r, c) && (l = Ti(c), l && (o[l] = r[c]));
  return o;
}
var $T = {};
function Kr(r, o) {
  $T[r] = o;
}
function X2(r) {
  var o = [], l;
  for (l in r)
    Ot(r, l) && o.push({ unit: l, priority: $T[l] });
  return o.sort(function(c, d) {
    return c.priority - d.priority;
  }), o;
}
function Py(r) {
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
    return l != null ? (VT(this, r, l), fe.updateOffset(this, o), this) : Dy(this, r);
  };
}
function Dy(r, o) {
  return r.isValid() ? r._d["get" + (r._isUTC ? "UTC" : "") + o]() : NaN;
}
function VT(r, o, l) {
  r.isValid() && !isNaN(l) && (o === "FullYear" && Py(r.year()) && r.month() === 1 && r.date() === 29 ? (l = vt(l), r._d["set" + (r._isUTC ? "UTC" : "") + o](
    l,
    r.month(),
    By(l, r.month())
  )) : r._d["set" + (r._isUTC ? "UTC" : "") + o](l));
}
function J2(r) {
  return r = Ti(r), qo(this[r]) ? this[r]() : this;
}
function ej(r, o) {
  if (typeof r == "object") {
    r = Ew(r);
    var l = X2(r), c, d = l.length;
    for (c = 0; c < d; c++)
      this[l[c].unit](r[l[c].unit]);
  } else if (r = Ti(r), qo(this[r]))
    return this[r](o);
  return this;
}
var BT = /\d/, ri = /\d\d/, WT = /\d{3}/, Cw = /\d{4}/, Hy = /[+-]?\d{6}/, ln = /\d\d?/, GT = /\d\d\d\d?/, QT = /\d\d\d\d\d\d?/, Iy = /\d{1,3}/, _w = /\d{1,4}/, Yy = /[+-]?\d{1,6}/, Ed = /\d+/, $y = /[+-]?\d+/, tj = /Z|[+-]\d\d:?\d\d/gi, Vy = /Z|[+-]\d\d(?::?\d\d)?/gi, nj = /[+-]?\d+(\.\d{1,3})?/, uv = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Oy;
Oy = {};
function Oe(r, o, l) {
  Oy[r] = qo(o) ? o : function(c, d) {
    return c && l ? l : o;
  };
}
function rj(r, o) {
  return Ot(Oy, r) ? Oy[r](o._strict, o._locale) : new RegExp(aj(r));
}
function aj(r) {
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
  for (typeof r == "string" && (r = [r]), Gl(o) && (c = function(m, v) {
    v[o] = vt(m);
  }), d = r.length, l = 0; l < d; l++)
    Zx[r[l]] = c;
}
function cv(r, o) {
  $t(r, function(l, c, d, m) {
    d._w = d._w || {}, o(l, d._w, d, m);
  });
}
function ij(r, o, l) {
  o != null && Ot(Zx, r) && Zx[r](o, l._a, l, r);
}
var Qr = 0, Vl = 1, Bo = 2, rr = 3, no = 4, Bl = 5, pc = 6, oj = 7, lj = 8;
function sj(r, o) {
  return (r % o + o) % o;
}
var Nn;
Array.prototype.indexOf ? Nn = Array.prototype.indexOf : Nn = function(r) {
  var o;
  for (o = 0; o < this.length; ++o)
    if (this[o] === r)
      return o;
  return -1;
};
function By(r, o) {
  if (isNaN(r) || isNaN(o))
    return NaN;
  var l = sj(o, 12);
  return r += (o - l) / 12, l === 1 ? Py(r) ? 29 : 28 : 31 - l % 7 % 2;
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
Oe("M", ln);
Oe("MM", ln, ri);
Oe("MMM", function(r, o) {
  return o.monthsShortRegex(r);
});
Oe("MMMM", function(r, o) {
  return o.monthsRegex(r);
});
$t(["M", "MM"], function(r, o) {
  o[Vl] = vt(r) - 1;
});
$t(["MMM", "MMMM"], function(r, o, l, c) {
  var d = l._locale.monthsParse(r, c, l._strict);
  d != null ? o[Vl] = d : ft(l).invalidMonth = r;
});
var uj = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), qT = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), KT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, cj = uv, fj = uv;
function dj(r, o) {
  return r ? ro(this._months) ? this._months[r.month()] : this._months[(this._months.isFormat || KT).test(o) ? "format" : "standalone"][r.month()] : ro(this._months) ? this._months : this._months.standalone;
}
function pj(r, o) {
  return r ? ro(this._monthsShort) ? this._monthsShort[r.month()] : this._monthsShort[KT.test(o) ? "format" : "standalone"][r.month()] : ro(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function hj(r, o, l) {
  var c, d, m, v = r.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], c = 0; c < 12; ++c)
      m = Qo([2e3, c]), this._shortMonthsParse[c] = this.monthsShort(
        m,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[c] = this.months(m, "").toLocaleLowerCase();
  return l ? o === "MMM" ? (d = Nn.call(this._shortMonthsParse, v), d !== -1 ? d : null) : (d = Nn.call(this._longMonthsParse, v), d !== -1 ? d : null) : o === "MMM" ? (d = Nn.call(this._shortMonthsParse, v), d !== -1 ? d : (d = Nn.call(this._longMonthsParse, v), d !== -1 ? d : null)) : (d = Nn.call(this._longMonthsParse, v), d !== -1 ? d : (d = Nn.call(this._shortMonthsParse, v), d !== -1 ? d : null));
}
function vj(r, o, l) {
  var c, d, m;
  if (this._monthsParseExact)
    return hj.call(this, r, o, l);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), c = 0; c < 12; c++) {
    if (d = Qo([2e3, c]), l && !this._longMonthsParse[c] && (this._longMonthsParse[c] = new RegExp(
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
function ZT(r, o) {
  var l;
  if (!r.isValid())
    return r;
  if (typeof o == "string") {
    if (/^\d+$/.test(o))
      o = vt(o);
    else if (o = r.localeData().monthsParse(o), !Gl(o))
      return r;
  }
  return l = Math.min(r.date(), By(r.year(), o)), r._d["set" + (r._isUTC ? "UTC" : "") + "Month"](o, l), r;
}
function XT(r) {
  return r != null ? (ZT(this, r), fe.updateOffset(this, !0), this) : Dy(this, "Month");
}
function mj() {
  return By(this.year(), this.month());
}
function gj(r) {
  return this._monthsParseExact ? (Ot(this, "_monthsRegex") || JT.call(this), r ? this._monthsShortStrictRegex : this._monthsShortRegex) : (Ot(this, "_monthsShortRegex") || (this._monthsShortRegex = cj), this._monthsShortStrictRegex && r ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function yj(r) {
  return this._monthsParseExact ? (Ot(this, "_monthsRegex") || JT.call(this), r ? this._monthsStrictRegex : this._monthsRegex) : (Ot(this, "_monthsRegex") || (this._monthsRegex = fj), this._monthsStrictRegex && r ? this._monthsStrictRegex : this._monthsRegex);
}
function JT() {
  function r(v, E) {
    return E.length - v.length;
  }
  var o = [], l = [], c = [], d, m;
  for (d = 0; d < 12; d++)
    m = Qo([2e3, d]), o.push(this.monthsShort(m, "")), l.push(this.months(m, "")), c.push(this.months(m, "")), c.push(this.monthsShort(m, ""));
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
  return r <= 9999 ? Go(r, 4) : "+" + r;
});
Be(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
Be(0, ["YYYY", 4], 0, "year");
Be(0, ["YYYYY", 5], 0, "year");
Be(0, ["YYYYYY", 6, !0], 0, "year");
qr("year", "y");
Kr("year", 1);
Oe("Y", $y);
Oe("YY", ln, ri);
Oe("YYYY", _w, Cw);
Oe("YYYYY", Yy, Hy);
Oe("YYYYYY", Yy, Hy);
$t(["YYYYY", "YYYYYY"], Qr);
$t("YYYY", function(r, o) {
  o[Qr] = r.length === 2 ? fe.parseTwoDigitYear(r) : vt(r);
});
$t("YY", function(r, o) {
  o[Qr] = fe.parseTwoDigitYear(r);
});
$t("Y", function(r, o) {
  o[Qr] = parseInt(r, 10);
});
function Qh(r) {
  return Py(r) ? 366 : 365;
}
fe.parseTwoDigitYear = function(r) {
  return vt(r) + (vt(r) > 68 ? 1900 : 2e3);
};
var ek = bd("FullYear", !0);
function Sj() {
  return Py(this.year());
}
function xj(r, o, l, c, d, m, v) {
  var E;
  return r < 100 && r >= 0 ? (E = new Date(r + 400, o, l, c, d, m, v), isFinite(E.getFullYear()) && E.setFullYear(r)) : E = new Date(r, o, l, c, d, m, v), E;
}
function ev(r) {
  var o, l;
  return r < 100 && r >= 0 ? (l = Array.prototype.slice.call(arguments), l[0] = r + 400, o = new Date(Date.UTC.apply(null, l)), isFinite(o.getUTCFullYear()) && o.setUTCFullYear(r)) : o = new Date(Date.UTC.apply(null, arguments)), o;
}
function My(r, o, l) {
  var c = 7 + o - l, d = (7 + ev(r, 0, c).getUTCDay() - o) % 7;
  return -d + c - 1;
}
function tk(r, o, l, c, d) {
  var m = (7 + l - c) % 7, v = My(r, c, d), E = 1 + 7 * (o - 1) + m + v, w, C;
  return E <= 0 ? (w = r - 1, C = Qh(w) + E) : E > Qh(r) ? (w = r + 1, C = E - Qh(r)) : (w = r, C = E), {
    year: w,
    dayOfYear: C
  };
}
function tv(r, o, l) {
  var c = My(r.year(), o, l), d = Math.floor((r.dayOfYear() - c - 1) / 7) + 1, m, v;
  return d < 1 ? (v = r.year() - 1, m = d + Wl(v, o, l)) : d > Wl(r.year(), o, l) ? (m = d - Wl(r.year(), o, l), v = r.year() + 1) : (v = r.year(), m = d), {
    week: m,
    year: v
  };
}
function Wl(r, o, l) {
  var c = My(r, o, l), d = My(r + 1, o, l);
  return (Qh(r) - c + d) / 7;
}
Be("w", ["ww", 2], "wo", "week");
Be("W", ["WW", 2], "Wo", "isoWeek");
qr("week", "w");
qr("isoWeek", "W");
Kr("week", 5);
Kr("isoWeek", 5);
Oe("w", ln);
Oe("ww", ln, ri);
Oe("W", ln);
Oe("WW", ln, ri);
cv(
  ["w", "ww", "W", "WW"],
  function(r, o, l, c) {
    o[c.substr(0, 1)] = vt(r);
  }
);
function wj(r) {
  return tv(r, this._week.dow, this._week.doy).week;
}
var bj = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function Ej() {
  return this._week.dow;
}
function Cj() {
  return this._week.doy;
}
function _j(r) {
  var o = this.localeData().week(this);
  return r == null ? o : this.add((r - o) * 7, "d");
}
function Tj(r) {
  var o = tv(this, 1, 4).week;
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
Oe("d", ln);
Oe("e", ln);
Oe("E", ln);
Oe("dd", function(r, o) {
  return o.weekdaysMinRegex(r);
});
Oe("ddd", function(r, o) {
  return o.weekdaysShortRegex(r);
});
Oe("dddd", function(r, o) {
  return o.weekdaysRegex(r);
});
cv(["dd", "ddd", "dddd"], function(r, o, l, c) {
  var d = l._locale.weekdaysParse(r, c, l._strict);
  d != null ? o.d = d : ft(l).invalidWeekday = r;
});
cv(["d", "e", "E"], function(r, o, l, c) {
  o[c] = vt(r);
});
function kj(r, o) {
  return typeof r != "string" ? r : isNaN(r) ? (r = o.weekdaysParse(r), typeof r == "number" ? r : null) : parseInt(r, 10);
}
function Rj(r, o) {
  return typeof r == "string" ? o.weekdaysParse(r) % 7 || 7 : isNaN(r) ? null : r;
}
function Tw(r, o) {
  return r.slice(o, 7).concat(r.slice(0, o));
}
var Dj = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), nk = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Oj = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Mj = uv, Nj = uv, Lj = uv;
function jj(r, o) {
  var l = ro(this._weekdays) ? this._weekdays : this._weekdays[r && r !== !0 && this._weekdays.isFormat.test(o) ? "format" : "standalone"];
  return r === !0 ? Tw(l, this._week.dow) : r ? l[r.day()] : l;
}
function Uj(r) {
  return r === !0 ? Tw(this._weekdaysShort, this._week.dow) : r ? this._weekdaysShort[r.day()] : this._weekdaysShort;
}
function Aj(r) {
  return r === !0 ? Tw(this._weekdaysMin, this._week.dow) : r ? this._weekdaysMin[r.day()] : this._weekdaysMin;
}
function zj(r, o, l) {
  var c, d, m, v = r.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], c = 0; c < 7; ++c)
      m = Qo([2e3, 1]).day(c), this._minWeekdaysParse[c] = this.weekdaysMin(
        m,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[c] = this.weekdaysShort(
        m,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[c] = this.weekdays(m, "").toLocaleLowerCase();
  return l ? o === "dddd" ? (d = Nn.call(this._weekdaysParse, v), d !== -1 ? d : null) : o === "ddd" ? (d = Nn.call(this._shortWeekdaysParse, v), d !== -1 ? d : null) : (d = Nn.call(this._minWeekdaysParse, v), d !== -1 ? d : null) : o === "dddd" ? (d = Nn.call(this._weekdaysParse, v), d !== -1 || (d = Nn.call(this._shortWeekdaysParse, v), d !== -1) ? d : (d = Nn.call(this._minWeekdaysParse, v), d !== -1 ? d : null)) : o === "ddd" ? (d = Nn.call(this._shortWeekdaysParse, v), d !== -1 || (d = Nn.call(this._weekdaysParse, v), d !== -1) ? d : (d = Nn.call(this._minWeekdaysParse, v), d !== -1 ? d : null)) : (d = Nn.call(this._minWeekdaysParse, v), d !== -1 || (d = Nn.call(this._weekdaysParse, v), d !== -1) ? d : (d = Nn.call(this._shortWeekdaysParse, v), d !== -1 ? d : null));
}
function Fj(r, o, l) {
  var c, d, m;
  if (this._weekdaysParseExact)
    return zj.call(this, r, o, l);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), c = 0; c < 7; c++) {
    if (d = Qo([2e3, 1]).day(c), l && !this._fullWeekdaysParse[c] && (this._fullWeekdaysParse[c] = new RegExp(
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
function Pj(r) {
  if (!this.isValid())
    return r != null ? this : NaN;
  var o = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return r != null ? (r = kj(r, this.localeData()), this.add(r - o, "d")) : o;
}
function Hj(r) {
  if (!this.isValid())
    return r != null ? this : NaN;
  var o = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return r == null ? o : this.add(r - o, "d");
}
function Ij(r) {
  if (!this.isValid())
    return r != null ? this : NaN;
  if (r != null) {
    var o = Rj(r, this.localeData());
    return this.day(this.day() % 7 ? o : o - 7);
  } else
    return this.day() || 7;
}
function Yj(r) {
  return this._weekdaysParseExact ? (Ot(this, "_weekdaysRegex") || kw.call(this), r ? this._weekdaysStrictRegex : this._weekdaysRegex) : (Ot(this, "_weekdaysRegex") || (this._weekdaysRegex = Mj), this._weekdaysStrictRegex && r ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function $j(r) {
  return this._weekdaysParseExact ? (Ot(this, "_weekdaysRegex") || kw.call(this), r ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (Ot(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Nj), this._weekdaysShortStrictRegex && r ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function Vj(r) {
  return this._weekdaysParseExact ? (Ot(this, "_weekdaysRegex") || kw.call(this), r ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (Ot(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Lj), this._weekdaysMinStrictRegex && r ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function kw() {
  function r(T, R) {
    return R.length - T.length;
  }
  var o = [], l = [], c = [], d = [], m, v, E, w, C;
  for (m = 0; m < 7; m++)
    v = Qo([2e3, 1]).day(m), E = ni(this.weekdaysMin(v, "")), w = ni(this.weekdaysShort(v, "")), C = ni(this.weekdays(v, "")), o.push(E), l.push(w), c.push(C), d.push(E), d.push(w), d.push(C);
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
function Rw() {
  return this.hours() % 12 || 12;
}
function Bj() {
  return this.hours() || 24;
}
Be("H", ["HH", 2], 0, "hour");
Be("h", ["hh", 2], 0, Rw);
Be("k", ["kk", 2], 0, Bj);
Be("hmm", 0, 0, function() {
  return "" + Rw.apply(this) + Go(this.minutes(), 2);
});
Be("hmmss", 0, 0, function() {
  return "" + Rw.apply(this) + Go(this.minutes(), 2) + Go(this.seconds(), 2);
});
Be("Hmm", 0, 0, function() {
  return "" + this.hours() + Go(this.minutes(), 2);
});
Be("Hmmss", 0, 0, function() {
  return "" + this.hours() + Go(this.minutes(), 2) + Go(this.seconds(), 2);
});
function rk(r, o) {
  Be(r, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      o
    );
  });
}
rk("a", !0);
rk("A", !1);
qr("hour", "h");
Kr("hour", 13);
function ak(r, o) {
  return o._meridiemParse;
}
Oe("a", ak);
Oe("A", ak);
Oe("H", ln);
Oe("h", ln);
Oe("k", ln);
Oe("HH", ln, ri);
Oe("hh", ln, ri);
Oe("kk", ln, ri);
Oe("hmm", GT);
Oe("hmmss", QT);
Oe("Hmm", GT);
Oe("Hmmss", QT);
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
  o[rr] = vt(r.substr(0, c)), o[no] = vt(r.substr(c)), ft(l).bigHour = !0;
});
$t("hmmss", function(r, o, l) {
  var c = r.length - 4, d = r.length - 2;
  o[rr] = vt(r.substr(0, c)), o[no] = vt(r.substr(c, 2)), o[Bl] = vt(r.substr(d)), ft(l).bigHour = !0;
});
$t("Hmm", function(r, o, l) {
  var c = r.length - 2;
  o[rr] = vt(r.substr(0, c)), o[no] = vt(r.substr(c));
});
$t("Hmmss", function(r, o, l) {
  var c = r.length - 4, d = r.length - 2;
  o[rr] = vt(r.substr(0, c)), o[no] = vt(r.substr(c, 2)), o[Bl] = vt(r.substr(d));
});
function Wj(r) {
  return (r + "").toLowerCase().charAt(0) === "p";
}
var Gj = /[ap]\.?m?\.?/i, Qj = bd("Hours", !0);
function qj(r, o, l) {
  return r > 11 ? l ? "pm" : "PM" : l ? "am" : "AM";
}
var ik = {
  calendar: F2,
  longDateFormat: Y2,
  invalidDate: V2,
  ordinal: W2,
  dayOfMonthOrdinalParse: G2,
  relativeTime: q2,
  months: uj,
  monthsShort: qT,
  week: bj,
  weekdays: Dj,
  weekdaysMin: Oj,
  weekdaysShort: nk,
  meridiemParse: Gj
}, fn = {}, $h = {}, nv;
function Kj(r, o) {
  var l, c = Math.min(r.length, o.length);
  for (l = 0; l < c; l += 1)
    if (r[l] !== o[l])
      return l;
  return c;
}
function G_(r) {
  return r && r.toLowerCase().replace("_", "-");
}
function Zj(r) {
  for (var o = 0, l, c, d, m; o < r.length; ) {
    for (m = G_(r[o]).split("-"), l = m.length, c = G_(r[o + 1]), c = c ? c.split("-") : null; l > 0; ) {
      if (d = Wy(m.slice(0, l).join("-")), d)
        return d;
      if (c && c.length >= l && Kj(m, c) >= l - 1)
        break;
      l--;
    }
    o++;
  }
  return nv;
}
function Xj(r) {
  return r.match("^[^/\\\\]*$") != null;
}
function Wy(r) {
  var o = null, l;
  if (fn[r] === void 0 && typeof module < "u" && module && module.exports && Xj(r))
    try {
      o = nv._abbr, l = require, l("./locale/" + r), eu(o);
    } catch {
      fn[r] = null;
    }
  return fn[r];
}
function eu(r, o) {
  var l;
  return r && (Pa(o) ? l = Ql(r) : l = Dw(r, o), l ? nv = l : typeof console < "u" && console.warn && console.warn(
    "Locale " + r + " not found. Did you forget to load it?"
  )), nv._abbr;
}
function Dw(r, o) {
  if (o !== null) {
    var l, c = ik;
    if (o.abbr = r, fn[r] != null)
      IT(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), c = fn[r]._config;
    else if (o.parentLocale != null)
      if (fn[o.parentLocale] != null)
        c = fn[o.parentLocale]._config;
      else if (l = Wy(o.parentLocale), l != null)
        c = l._config;
      else
        return $h[o.parentLocale] || ($h[o.parentLocale] = []), $h[o.parentLocale].push({
          name: r,
          config: o
        }), null;
    return fn[r] = new ww(qx(c, o)), $h[r] && $h[r].forEach(function(d) {
      Dw(d.name, d.config);
    }), eu(r), fn[r];
  } else
    return delete fn[r], null;
}
function Jj(r, o) {
  if (o != null) {
    var l, c, d = ik;
    fn[r] != null && fn[r].parentLocale != null ? fn[r].set(qx(fn[r]._config, o)) : (c = Wy(r), c != null && (d = c._config), o = qx(d, o), c == null && (o.abbr = r), l = new ww(o), l.parentLocale = fn[r], fn[r] = l), eu(r);
  } else
    fn[r] != null && (fn[r].parentLocale != null ? (fn[r] = fn[r].parentLocale, r === eu() && eu(r)) : fn[r] != null && delete fn[r]);
  return fn[r];
}
function Ql(r) {
  var o;
  if (r && r._locale && r._locale._abbr && (r = r._locale._abbr), !r)
    return nv;
  if (!ro(r)) {
    if (o = Wy(r), o)
      return o;
    r = [r];
  }
  return Zj(r);
}
function eU() {
  return Kx(fn);
}
function Ow(r) {
  var o, l = r._a;
  return l && ft(r).overflow === -2 && (o = l[Vl] < 0 || l[Vl] > 11 ? Vl : l[Bo] < 1 || l[Bo] > By(l[Qr], l[Vl]) ? Bo : l[rr] < 0 || l[rr] > 24 || l[rr] === 24 && (l[no] !== 0 || l[Bl] !== 0 || l[pc] !== 0) ? rr : l[no] < 0 || l[no] > 59 ? no : l[Bl] < 0 || l[Bl] > 59 ? Bl : l[pc] < 0 || l[pc] > 999 ? pc : -1, ft(r)._overflowDayOfYear && (o < Qr || o > Bo) && (o = Bo), ft(r)._overflowWeeks && o === -1 && (o = oj), ft(r)._overflowWeekday && o === -1 && (o = lj), ft(r).overflow = o), r;
}
var tU = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, nU = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, rU = /Z|[+-]\d\d(?::?\d\d)?/, dy = [
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
], jx = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], aU = /^\/?Date\((-?\d+)/i, iU = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, oU = {
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
function ok(r) {
  var o, l, c = r._i, d = tU.exec(c) || nU.exec(c), m, v, E, w, C = dy.length, T = jx.length;
  if (d) {
    for (ft(r).iso = !0, o = 0, l = C; o < l; o++)
      if (dy[o][1].exec(d[1])) {
        v = dy[o][0], m = dy[o][2] !== !1;
        break;
      }
    if (v == null) {
      r._isValid = !1;
      return;
    }
    if (d[3]) {
      for (o = 0, l = T; o < l; o++)
        if (jx[o][1].exec(d[3])) {
          E = (d[2] || " ") + jx[o][0];
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
      if (rU.exec(d[4]))
        w = "Z";
      else {
        r._isValid = !1;
        return;
      }
    r._f = v + (E || "") + (w || ""), Nw(r);
  } else
    r._isValid = !1;
}
function lU(r, o, l, c, d, m) {
  var v = [
    sU(r),
    qT.indexOf(o),
    parseInt(l, 10),
    parseInt(c, 10),
    parseInt(d, 10)
  ];
  return m && v.push(parseInt(m, 10)), v;
}
function sU(r) {
  var o = parseInt(r, 10);
  return o <= 49 ? 2e3 + o : o <= 999 ? 1900 + o : o;
}
function uU(r) {
  return r.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function cU(r, o, l) {
  if (r) {
    var c = nk.indexOf(r), d = new Date(
      o[0],
      o[1],
      o[2]
    ).getDay();
    if (c !== d)
      return ft(l).weekdayMismatch = !0, l._isValid = !1, !1;
  }
  return !0;
}
function fU(r, o, l) {
  if (r)
    return oU[r];
  if (o)
    return 0;
  var c = parseInt(l, 10), d = c % 100, m = (c - d) / 100;
  return m * 60 + d;
}
function lk(r) {
  var o = iU.exec(uU(r._i)), l;
  if (o) {
    if (l = lU(
      o[4],
      o[3],
      o[2],
      o[5],
      o[6],
      o[7]
    ), !cU(o[1], l, r))
      return;
    r._a = l, r._tzm = fU(o[8], o[9], o[10]), r._d = ev.apply(null, r._a), r._d.setUTCMinutes(r._d.getUTCMinutes() - r._tzm), ft(r).rfc2822 = !0;
  } else
    r._isValid = !1;
}
function dU(r) {
  var o = aU.exec(r._i);
  if (o !== null) {
    r._d = /* @__PURE__ */ new Date(+o[1]);
    return;
  }
  if (ok(r), r._isValid === !1)
    delete r._isValid;
  else
    return;
  if (lk(r), r._isValid === !1)
    delete r._isValid;
  else
    return;
  r._strict ? r._isValid = !1 : fe.createFromInputFallback(r);
}
fe.createFromInputFallback = _i(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(r) {
    r._d = /* @__PURE__ */ new Date(r._i + (r._useUTC ? " UTC" : ""));
  }
);
function md(r, o, l) {
  return r ?? o ?? l;
}
function pU(r) {
  var o = new Date(fe.now());
  return r._useUTC ? [
    o.getUTCFullYear(),
    o.getUTCMonth(),
    o.getUTCDate()
  ] : [o.getFullYear(), o.getMonth(), o.getDate()];
}
function Mw(r) {
  var o, l, c = [], d, m, v;
  if (!r._d) {
    for (d = pU(r), r._w && r._a[Bo] == null && r._a[Vl] == null && hU(r), r._dayOfYear != null && (v = md(r._a[Qr], d[Qr]), (r._dayOfYear > Qh(v) || r._dayOfYear === 0) && (ft(r)._overflowDayOfYear = !0), l = ev(v, 0, r._dayOfYear), r._a[Vl] = l.getUTCMonth(), r._a[Bo] = l.getUTCDate()), o = 0; o < 3 && r._a[o] == null; ++o)
      r._a[o] = c[o] = d[o];
    for (; o < 7; o++)
      r._a[o] = c[o] = r._a[o] == null ? o === 2 ? 1 : 0 : r._a[o];
    r._a[rr] === 24 && r._a[no] === 0 && r._a[Bl] === 0 && r._a[pc] === 0 && (r._nextDay = !0, r._a[rr] = 0), r._d = (r._useUTC ? ev : xj).apply(
      null,
      c
    ), m = r._useUTC ? r._d.getUTCDay() : r._d.getDay(), r._tzm != null && r._d.setUTCMinutes(r._d.getUTCMinutes() - r._tzm), r._nextDay && (r._a[rr] = 24), r._w && typeof r._w.d < "u" && r._w.d !== m && (ft(r).weekdayMismatch = !0);
  }
}
function hU(r) {
  var o, l, c, d, m, v, E, w, C;
  o = r._w, o.GG != null || o.W != null || o.E != null ? (m = 1, v = 4, l = md(
    o.GG,
    r._a[Qr],
    tv(on(), 1, 4).year
  ), c = md(o.W, 1), d = md(o.E, 1), (d < 1 || d > 7) && (w = !0)) : (m = r._locale._week.dow, v = r._locale._week.doy, C = tv(on(), m, v), l = md(o.gg, r._a[Qr], C.year), c = md(o.w, C.week), o.d != null ? (d = o.d, (d < 0 || d > 6) && (w = !0)) : o.e != null ? (d = o.e + m, (o.e < 0 || o.e > 6) && (w = !0)) : d = m), c < 1 || c > Wl(l, m, v) ? ft(r)._overflowWeeks = !0 : w != null ? ft(r)._overflowWeekday = !0 : (E = tk(l, c, d, m, v), r._a[Qr] = E.year, r._dayOfYear = E.dayOfYear);
}
fe.ISO_8601 = function() {
};
fe.RFC_2822 = function() {
};
function Nw(r) {
  if (r._f === fe.ISO_8601) {
    ok(r);
    return;
  }
  if (r._f === fe.RFC_2822) {
    lk(r);
    return;
  }
  r._a = [], ft(r).empty = !0;
  var o = "" + r._i, l, c, d, m, v, E = o.length, w = 0, C, T;
  for (d = YT(r._f, r._locale).match(bw) || [], T = d.length, l = 0; l < T; l++)
    m = d[l], c = (o.match(rj(m, r)) || [])[0], c && (v = o.substr(0, o.indexOf(c)), v.length > 0 && ft(r).unusedInput.push(v), o = o.slice(
      o.indexOf(c) + c.length
    ), w += c.length), yd[m] ? (c ? ft(r).empty = !1 : ft(r).unusedTokens.push(m), ij(m, c, r)) : r._strict && !c && ft(r).unusedTokens.push(m);
  ft(r).charsLeftOver = E - w, o.length > 0 && ft(r).unusedInput.push(o), r._a[rr] <= 12 && ft(r).bigHour === !0 && r._a[rr] > 0 && (ft(r).bigHour = void 0), ft(r).parsedDateParts = r._a.slice(0), ft(r).meridiem = r._meridiem, r._a[rr] = vU(
    r._locale,
    r._a[rr],
    r._meridiem
  ), C = ft(r).era, C !== null && (r._a[Qr] = r._locale.erasConvertYear(C, r._a[Qr])), Mw(r), Ow(r);
}
function vU(r, o, l) {
  var c;
  return l == null ? o : r.meridiemHour != null ? r.meridiemHour(o, l) : (r.isPM != null && (c = r.isPM(l), c && o < 12 && (o += 12), !c && o === 12 && (o = 0)), o);
}
function mU(r) {
  var o, l, c, d, m, v, E = !1, w = r._f.length;
  if (w === 0) {
    ft(r).invalidFormat = !0, r._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (d = 0; d < w; d++)
    m = 0, v = !1, o = xw({}, r), r._useUTC != null && (o._useUTC = r._useUTC), o._f = r._f[d], Nw(o), Sw(o) && (v = !0), m += ft(o).charsLeftOver, m += ft(o).unusedTokens.length * 10, ft(o).score = m, E ? m < c && (c = m, l = o) : (c == null || m < c || v) && (c = m, l = o, v && (E = !0));
  Xs(r, l || o);
}
function gU(r) {
  if (!r._d) {
    var o = Ew(r._i), l = o.day === void 0 ? o.date : o.day;
    r._a = PT(
      [o.year, o.month, l, o.hour, o.minute, o.second, o.millisecond],
      function(c) {
        return c && parseInt(c, 10);
      }
    ), Mw(r);
  }
}
function yU(r) {
  var o = new sv(Ow(sk(r)));
  return o._nextDay && (o.add(1, "d"), o._nextDay = void 0), o;
}
function sk(r) {
  var o = r._i, l = r._f;
  return r._locale = r._locale || Ql(r._l), o === null || l === void 0 && o === "" ? Fy({ nullInput: !0 }) : (typeof o == "string" && (r._i = o = r._locale.preparse(o)), ao(o) ? new sv(Ow(o)) : (lv(o) ? r._d = o : ro(l) ? mU(r) : l ? Nw(r) : SU(r), Sw(r) || (r._d = null), r));
}
function SU(r) {
  var o = r._i;
  Pa(o) ? r._d = new Date(fe.now()) : lv(o) ? r._d = new Date(o.valueOf()) : typeof o == "string" ? dU(r) : ro(o) ? (r._a = PT(o.slice(0), function(l) {
    return parseInt(l, 10);
  }), Mw(r)) : hc(o) ? gU(r) : Gl(o) ? r._d = new Date(o) : fe.createFromInputFallback(r);
}
function uk(r, o, l, c, d) {
  var m = {};
  return (o === !0 || o === !1) && (c = o, o = void 0), (l === !0 || l === !1) && (c = l, l = void 0), (hc(r) && yw(r) || ro(r) && r.length === 0) && (r = void 0), m._isAMomentObject = !0, m._useUTC = m._isUTC = d, m._l = l, m._i = r, m._f = o, m._strict = c, yU(m);
}
function on(r, o, l, c) {
  return uk(r, o, l, c, !1);
}
var xU = _i(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var r = on.apply(null, arguments);
    return this.isValid() && r.isValid() ? r < this ? this : r : Fy();
  }
), wU = _i(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var r = on.apply(null, arguments);
    return this.isValid() && r.isValid() ? r > this ? this : r : Fy();
  }
);
function ck(r, o) {
  var l, c;
  if (o.length === 1 && ro(o[0]) && (o = o[0]), !o.length)
    return on();
  for (l = o[0], c = 1; c < o.length; ++c)
    (!o[c].isValid() || o[c][r](l)) && (l = o[c]);
  return l;
}
function bU() {
  var r = [].slice.call(arguments, 0);
  return ck("isBefore", r);
}
function EU() {
  var r = [].slice.call(arguments, 0);
  return ck("isAfter", r);
}
var CU = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, Vh = [
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
function _U(r) {
  var o, l = !1, c, d = Vh.length;
  for (o in r)
    if (Ot(r, o) && !(Nn.call(Vh, o) !== -1 && (r[o] == null || !isNaN(r[o]))))
      return !1;
  for (c = 0; c < d; ++c)
    if (r[Vh[c]]) {
      if (l)
        return !1;
      parseFloat(r[Vh[c]]) !== vt(r[Vh[c]]) && (l = !0);
    }
  return !0;
}
function TU() {
  return this._isValid;
}
function kU() {
  return io(NaN);
}
function Gy(r) {
  var o = Ew(r), l = o.year || 0, c = o.quarter || 0, d = o.month || 0, m = o.week || o.isoWeek || 0, v = o.day || 0, E = o.hour || 0, w = o.minute || 0, C = o.second || 0, T = o.millisecond || 0;
  this._isValid = _U(o), this._milliseconds = +T + C * 1e3 + // 1000
  w * 6e4 + // 1000 * 60
  E * 1e3 * 60 * 60, this._days = +v + m * 7, this._months = +d + c * 3 + l * 12, this._data = {}, this._locale = Ql(), this._bubble();
}
function yy(r) {
  return r instanceof Gy;
}
function Xx(r) {
  return r < 0 ? Math.round(-1 * r) * -1 : Math.round(r);
}
function RU(r, o, l) {
  var c = Math.min(r.length, o.length), d = Math.abs(r.length - o.length), m = 0, v;
  for (v = 0; v < c; v++)
    (l && r[v] !== o[v] || !l && vt(r[v]) !== vt(o[v])) && m++;
  return m + d;
}
function fk(r, o) {
  Be(r, 0, 0, function() {
    var l = this.utcOffset(), c = "+";
    return l < 0 && (l = -l, c = "-"), c + Go(~~(l / 60), 2) + o + Go(~~l % 60, 2);
  });
}
fk("Z", ":");
fk("ZZ", "");
Oe("Z", Vy);
Oe("ZZ", Vy);
$t(["Z", "ZZ"], function(r, o, l) {
  l._useUTC = !0, l._tzm = Lw(Vy, r);
});
var DU = /([\+\-]|\d\d)/gi;
function Lw(r, o) {
  var l = (o || "").match(r), c, d, m;
  return l === null ? null : (c = l[l.length - 1] || [], d = (c + "").match(DU) || ["-", 0, 0], m = +(d[1] * 60) + vt(d[2]), m === 0 ? 0 : d[0] === "+" ? m : -m);
}
function jw(r, o) {
  var l, c;
  return o._isUTC ? (l = o.clone(), c = (ao(r) || lv(r) ? r.valueOf() : on(r).valueOf()) - l.valueOf(), l._d.setTime(l._d.valueOf() + c), fe.updateOffset(l, !1), l) : on(r).local();
}
function Jx(r) {
  return -Math.round(r._d.getTimezoneOffset());
}
fe.updateOffset = function() {
};
function OU(r, o, l) {
  var c = this._offset || 0, d;
  if (!this.isValid())
    return r != null ? this : NaN;
  if (r != null) {
    if (typeof r == "string") {
      if (r = Lw(Vy, r), r === null)
        return this;
    } else
      Math.abs(r) < 16 && !l && (r = r * 60);
    return !this._isUTC && o && (d = Jx(this)), this._offset = r, this._isUTC = !0, d != null && this.add(d, "m"), c !== r && (!o || this._changeInProgress ? hk(
      this,
      io(r - c, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, fe.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? c : Jx(this);
}
function MU(r, o) {
  return r != null ? (typeof r != "string" && (r = -r), this.utcOffset(r, o), this) : -this.utcOffset();
}
function NU(r) {
  return this.utcOffset(0, r);
}
function LU(r) {
  return this._isUTC && (this.utcOffset(0, r), this._isUTC = !1, r && this.subtract(Jx(this), "m")), this;
}
function jU() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var r = Lw(tj, this._i);
    r != null ? this.utcOffset(r) : this.utcOffset(0, !0);
  }
  return this;
}
function UU(r) {
  return this.isValid() ? (r = r ? on(r).utcOffset() : 0, (this.utcOffset() - r) % 60 === 0) : !1;
}
function AU() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function zU() {
  if (!Pa(this._isDSTShifted))
    return this._isDSTShifted;
  var r = {}, o;
  return xw(r, this), r = sk(r), r._a ? (o = r._isUTC ? Qo(r._a) : on(r._a), this._isDSTShifted = this.isValid() && RU(r._a, o.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function FU() {
  return this.isValid() ? !this._isUTC : !1;
}
function PU() {
  return this.isValid() ? this._isUTC : !1;
}
function dk() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var HU = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, IU = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function io(r, o) {
  var l = r, c = null, d, m, v;
  return yy(r) ? l = {
    ms: r._milliseconds,
    d: r._days,
    M: r._months
  } : Gl(r) || !isNaN(+r) ? (l = {}, o ? l[o] = +r : l.milliseconds = +r) : (c = HU.exec(r)) ? (d = c[1] === "-" ? -1 : 1, l = {
    y: 0,
    d: vt(c[Bo]) * d,
    h: vt(c[rr]) * d,
    m: vt(c[no]) * d,
    s: vt(c[Bl]) * d,
    ms: vt(Xx(c[pc] * 1e3)) * d
    // the millisecond decimal point is included in the match
  }) : (c = IU.exec(r)) ? (d = c[1] === "-" ? -1 : 1, l = {
    y: dc(c[2], d),
    M: dc(c[3], d),
    w: dc(c[4], d),
    d: dc(c[5], d),
    h: dc(c[6], d),
    m: dc(c[7], d),
    s: dc(c[8], d)
  }) : l == null ? l = {} : typeof l == "object" && ("from" in l || "to" in l) && (v = YU(
    on(l.from),
    on(l.to)
  ), l = {}, l.ms = v.milliseconds, l.M = v.months), m = new Gy(l), yy(r) && Ot(r, "_locale") && (m._locale = r._locale), yy(r) && Ot(r, "_isValid") && (m._isValid = r._isValid), m;
}
io.fn = Gy.prototype;
io.invalid = kU;
function dc(r, o) {
  var l = r && parseFloat(r.replace(",", "."));
  return (isNaN(l) ? 0 : l) * o;
}
function Q_(r, o) {
  var l = {};
  return l.months = o.month() - r.month() + (o.year() - r.year()) * 12, r.clone().add(l.months, "M").isAfter(o) && --l.months, l.milliseconds = +o - +r.clone().add(l.months, "M"), l;
}
function YU(r, o) {
  var l;
  return r.isValid() && o.isValid() ? (o = jw(o, r), r.isBefore(o) ? l = Q_(r, o) : (l = Q_(o, r), l.milliseconds = -l.milliseconds, l.months = -l.months), l) : { milliseconds: 0, months: 0 };
}
function pk(r, o) {
  return function(l, c) {
    var d, m;
    return c !== null && !isNaN(+c) && (IT(
      o,
      "moment()." + o + "(period, number) is deprecated. Please use moment()." + o + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), m = l, l = c, c = m), d = io(l, c), hk(this, d, r), this;
  };
}
function hk(r, o, l, c) {
  var d = o._milliseconds, m = Xx(o._days), v = Xx(o._months);
  r.isValid() && (c = c ?? !0, v && ZT(r, Dy(r, "Month") + v * l), m && VT(r, "Date", Dy(r, "Date") + m * l), d && r._d.setTime(r._d.valueOf() + d * l), c && fe.updateOffset(r, m || v));
}
var $U = pk(1, "add"), VU = pk(-1, "subtract");
function vk(r) {
  return typeof r == "string" || r instanceof String;
}
function BU(r) {
  return ao(r) || lv(r) || vk(r) || Gl(r) || GU(r) || WU(r) || r === null || r === void 0;
}
function WU(r) {
  var o = hc(r) && !yw(r), l = !1, c = [
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
function GU(r) {
  var o = ro(r), l = !1;
  return o && (l = r.filter(function(c) {
    return !Gl(c) && vk(r);
  }).length === 0), o && l;
}
function QU(r) {
  var o = hc(r) && !yw(r), l = !1, c = [
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
function qU(r, o) {
  var l = r.diff(o, "days", !0);
  return l < -6 ? "sameElse" : l < -1 ? "lastWeek" : l < 0 ? "lastDay" : l < 1 ? "sameDay" : l < 2 ? "nextDay" : l < 7 ? "nextWeek" : "sameElse";
}
function KU(r, o) {
  arguments.length === 1 && (arguments[0] ? BU(arguments[0]) ? (r = arguments[0], o = void 0) : QU(arguments[0]) && (o = arguments[0], r = void 0) : (r = void 0, o = void 0));
  var l = r || on(), c = jw(l, this).startOf("day"), d = fe.calendarFormat(this, c) || "sameElse", m = o && (qo(o[d]) ? o[d].call(this, l) : o[d]);
  return this.format(
    m || this.localeData().calendar(d, this, on(l))
  );
}
function ZU() {
  return new sv(this);
}
function XU(r, o) {
  var l = ao(r) ? r : on(r);
  return this.isValid() && l.isValid() ? (o = Ti(o) || "millisecond", o === "millisecond" ? this.valueOf() > l.valueOf() : l.valueOf() < this.clone().startOf(o).valueOf()) : !1;
}
function JU(r, o) {
  var l = ao(r) ? r : on(r);
  return this.isValid() && l.isValid() ? (o = Ti(o) || "millisecond", o === "millisecond" ? this.valueOf() < l.valueOf() : this.clone().endOf(o).valueOf() < l.valueOf()) : !1;
}
function eA(r, o, l, c) {
  var d = ao(r) ? r : on(r), m = ao(o) ? o : on(o);
  return this.isValid() && d.isValid() && m.isValid() ? (c = c || "()", (c[0] === "(" ? this.isAfter(d, l) : !this.isBefore(d, l)) && (c[1] === ")" ? this.isBefore(m, l) : !this.isAfter(m, l))) : !1;
}
function tA(r, o) {
  var l = ao(r) ? r : on(r), c;
  return this.isValid() && l.isValid() ? (o = Ti(o) || "millisecond", o === "millisecond" ? this.valueOf() === l.valueOf() : (c = l.valueOf(), this.clone().startOf(o).valueOf() <= c && c <= this.clone().endOf(o).valueOf())) : !1;
}
function nA(r, o) {
  return this.isSame(r, o) || this.isAfter(r, o);
}
function rA(r, o) {
  return this.isSame(r, o) || this.isBefore(r, o);
}
function aA(r, o, l) {
  var c, d, m;
  if (!this.isValid())
    return NaN;
  if (c = jw(r, this), !c.isValid())
    return NaN;
  switch (d = (c.utcOffset() - this.utcOffset()) * 6e4, o = Ti(o), o) {
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
fe.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
fe.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function iA() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function oA(r) {
  if (!this.isValid())
    return null;
  var o = r !== !0, l = o ? this.clone().utc() : this;
  return l.year() < 0 || l.year() > 9999 ? gy(
    l,
    o ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : qo(Date.prototype.toISOString) ? o ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", gy(l, "Z")) : gy(
    l,
    o ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function lA() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var r = "moment", o = "", l, c, d, m;
  return this.isLocal() || (r = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", o = "Z"), l = "[" + r + '("]', c = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", d = "-MM-DD[T]HH:mm:ss.SSS", m = o + '[")]', this.format(l + c + d + m);
}
function sA(r) {
  r || (r = this.isUtc() ? fe.defaultFormatUtc : fe.defaultFormat);
  var o = gy(this, r);
  return this.localeData().postformat(o);
}
function uA(r, o) {
  return this.isValid() && (ao(r) && r.isValid() || on(r).isValid()) ? io({ to: this, from: r }).locale(this.locale()).humanize(!o) : this.localeData().invalidDate();
}
function cA(r) {
  return this.from(on(), r);
}
function fA(r, o) {
  return this.isValid() && (ao(r) && r.isValid() || on(r).isValid()) ? io({ from: this, to: r }).locale(this.locale()).humanize(!o) : this.localeData().invalidDate();
}
function dA(r) {
  return this.to(on(), r);
}
function mk(r) {
  var o;
  return r === void 0 ? this._locale._abbr : (o = Ql(r), o != null && (this._locale = o), this);
}
var gk = _i(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(r) {
    return r === void 0 ? this.localeData() : this.locale(r);
  }
);
function yk() {
  return this._locale;
}
var Ny = 1e3, Sd = 60 * Ny, Ly = 60 * Sd, Sk = (365 * 400 + 97) * 24 * Ly;
function xd(r, o) {
  return (r % o + o) % o;
}
function xk(r, o, l) {
  return r < 100 && r >= 0 ? new Date(r + 400, o, l) - Sk : new Date(r, o, l).valueOf();
}
function wk(r, o, l) {
  return r < 100 && r >= 0 ? Date.UTC(r + 400, o, l) - Sk : Date.UTC(r, o, l);
}
function pA(r) {
  var o, l;
  if (r = Ti(r), r === void 0 || r === "millisecond" || !this.isValid())
    return this;
  switch (l = this._isUTC ? wk : xk, r) {
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
        Ly
      );
      break;
    case "minute":
      o = this._d.valueOf(), o -= xd(o, Sd);
      break;
    case "second":
      o = this._d.valueOf(), o -= xd(o, Ny);
      break;
  }
  return this._d.setTime(o), fe.updateOffset(this, !0), this;
}
function hA(r) {
  var o, l;
  if (r = Ti(r), r === void 0 || r === "millisecond" || !this.isValid())
    return this;
  switch (l = this._isUTC ? wk : xk, r) {
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
      o = this._d.valueOf(), o += Ly - xd(
        o + (this._isUTC ? 0 : this.utcOffset() * Sd),
        Ly
      ) - 1;
      break;
    case "minute":
      o = this._d.valueOf(), o += Sd - xd(o, Sd) - 1;
      break;
    case "second":
      o = this._d.valueOf(), o += Ny - xd(o, Ny) - 1;
      break;
  }
  return this._d.setTime(o), fe.updateOffset(this, !0), this;
}
function vA() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function mA() {
  return Math.floor(this.valueOf() / 1e3);
}
function gA() {
  return new Date(this.valueOf());
}
function yA() {
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
function SA() {
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
function xA() {
  return this.isValid() ? this.toISOString() : null;
}
function wA() {
  return Sw(this);
}
function bA() {
  return Xs({}, ft(this));
}
function EA() {
  return ft(this).overflow;
}
function CA() {
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
Oe("N", Uw);
Oe("NN", Uw);
Oe("NNN", Uw);
Oe("NNNN", UA);
Oe("NNNNN", AA);
$t(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(r, o, l, c) {
    var d = l._locale.erasParse(r, c, l._strict);
    d ? ft(l).era = d : ft(l).invalidEra = r;
  }
);
Oe("y", Ed);
Oe("yy", Ed);
Oe("yyy", Ed);
Oe("yyyy", Ed);
Oe("yo", zA);
$t(["y", "yy", "yyy", "yyyy"], Qr);
$t(["yo"], function(r, o, l, c) {
  var d;
  l._locale._eraYearOrdinalRegex && (d = r.match(l._locale._eraYearOrdinalRegex)), l._locale.eraYearOrdinalParse ? o[Qr] = l._locale.eraYearOrdinalParse(r, d) : o[Qr] = parseInt(r, 10);
});
function _A(r, o) {
  var l, c, d, m = this._eras || Ql("en")._eras;
  for (l = 0, c = m.length; l < c; ++l) {
    switch (typeof m[l].since) {
      case "string":
        d = fe(m[l].since).startOf("day"), m[l].since = d.valueOf();
        break;
    }
    switch (typeof m[l].until) {
      case "undefined":
        m[l].until = 1 / 0;
        break;
      case "string":
        d = fe(m[l].until).startOf("day").valueOf(), m[l].until = d.valueOf();
        break;
    }
  }
  return m;
}
function TA(r, o, l) {
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
function kA(r, o) {
  var l = r.since <= r.until ? 1 : -1;
  return o === void 0 ? fe(r.since).year() : fe(r.since).year() + (o - r.offset) * l;
}
function RA() {
  var r, o, l, c = this.localeData().eras();
  for (r = 0, o = c.length; r < o; ++r)
    if (l = this.clone().startOf("day").valueOf(), c[r].since <= l && l <= c[r].until || c[r].until <= l && l <= c[r].since)
      return c[r].name;
  return "";
}
function DA() {
  var r, o, l, c = this.localeData().eras();
  for (r = 0, o = c.length; r < o; ++r)
    if (l = this.clone().startOf("day").valueOf(), c[r].since <= l && l <= c[r].until || c[r].until <= l && l <= c[r].since)
      return c[r].narrow;
  return "";
}
function OA() {
  var r, o, l, c = this.localeData().eras();
  for (r = 0, o = c.length; r < o; ++r)
    if (l = this.clone().startOf("day").valueOf(), c[r].since <= l && l <= c[r].until || c[r].until <= l && l <= c[r].since)
      return c[r].abbr;
  return "";
}
function MA() {
  var r, o, l, c, d = this.localeData().eras();
  for (r = 0, o = d.length; r < o; ++r)
    if (l = d[r].since <= d[r].until ? 1 : -1, c = this.clone().startOf("day").valueOf(), d[r].since <= c && c <= d[r].until || d[r].until <= c && c <= d[r].since)
      return (this.year() - fe(d[r].since).year()) * l + d[r].offset;
  return this.year();
}
function NA(r) {
  return Ot(this, "_erasNameRegex") || Aw.call(this), r ? this._erasNameRegex : this._erasRegex;
}
function LA(r) {
  return Ot(this, "_erasAbbrRegex") || Aw.call(this), r ? this._erasAbbrRegex : this._erasRegex;
}
function jA(r) {
  return Ot(this, "_erasNarrowRegex") || Aw.call(this), r ? this._erasNarrowRegex : this._erasRegex;
}
function Uw(r, o) {
  return o.erasAbbrRegex(r);
}
function UA(r, o) {
  return o.erasNameRegex(r);
}
function AA(r, o) {
  return o.erasNarrowRegex(r);
}
function zA(r, o) {
  return o._eraYearOrdinalRegex || Ed;
}
function Aw() {
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
function Qy(r, o) {
  Be(0, [r, r.length], 0, o);
}
Qy("gggg", "weekYear");
Qy("ggggg", "weekYear");
Qy("GGGG", "isoWeekYear");
Qy("GGGGG", "isoWeekYear");
qr("weekYear", "gg");
qr("isoWeekYear", "GG");
Kr("weekYear", 1);
Kr("isoWeekYear", 1);
Oe("G", $y);
Oe("g", $y);
Oe("GG", ln, ri);
Oe("gg", ln, ri);
Oe("GGGG", _w, Cw);
Oe("gggg", _w, Cw);
Oe("GGGGG", Yy, Hy);
Oe("ggggg", Yy, Hy);
cv(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(r, o, l, c) {
    o[c.substr(0, 2)] = vt(r);
  }
);
cv(["gg", "GG"], function(r, o, l, c) {
  o[c] = fe.parseTwoDigitYear(r);
});
function FA(r) {
  return bk.call(
    this,
    r,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function PA(r) {
  return bk.call(
    this,
    r,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function HA() {
  return Wl(this.year(), 1, 4);
}
function IA() {
  return Wl(this.isoWeekYear(), 1, 4);
}
function YA() {
  var r = this.localeData()._week;
  return Wl(this.year(), r.dow, r.doy);
}
function $A() {
  var r = this.localeData()._week;
  return Wl(this.weekYear(), r.dow, r.doy);
}
function bk(r, o, l, c, d) {
  var m;
  return r == null ? tv(this, c, d).year : (m = Wl(r, c, d), o > m && (o = m), VA.call(this, r, o, l, c, d));
}
function VA(r, o, l, c, d) {
  var m = tk(r, o, l, c, d), v = ev(m.year, 0, m.dayOfYear);
  return this.year(v.getUTCFullYear()), this.month(v.getUTCMonth()), this.date(v.getUTCDate()), this;
}
Be("Q", 0, "Qo", "quarter");
qr("quarter", "Q");
Kr("quarter", 7);
Oe("Q", BT);
$t("Q", function(r, o) {
  o[Vl] = (vt(r) - 1) * 3;
});
function BA(r) {
  return r == null ? Math.ceil((this.month() + 1) / 3) : this.month((r - 1) * 3 + this.month() % 3);
}
Be("D", ["DD", 2], "Do", "date");
qr("date", "D");
Kr("date", 9);
Oe("D", ln);
Oe("DD", ln, ri);
Oe("Do", function(r, o) {
  return r ? o._dayOfMonthOrdinalParse || o._ordinalParse : o._dayOfMonthOrdinalParseLenient;
});
$t(["D", "DD"], Bo);
$t("Do", function(r, o) {
  o[Bo] = vt(r.match(ln)[0]);
});
var Ek = bd("Date", !0);
Be("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
qr("dayOfYear", "DDD");
Kr("dayOfYear", 4);
Oe("DDD", Iy);
Oe("DDDD", WT);
$t(["DDD", "DDDD"], function(r, o, l) {
  l._dayOfYear = vt(r);
});
function WA(r) {
  var o = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return r == null ? o : this.add(r - o, "d");
}
Be("m", ["mm", 2], 0, "minute");
qr("minute", "m");
Kr("minute", 14);
Oe("m", ln);
Oe("mm", ln, ri);
$t(["m", "mm"], no);
var GA = bd("Minutes", !1);
Be("s", ["ss", 2], 0, "second");
qr("second", "s");
Kr("second", 15);
Oe("s", ln);
Oe("ss", ln, ri);
$t(["s", "ss"], Bl);
var QA = bd("Seconds", !1);
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
Oe("S", Iy, BT);
Oe("SS", Iy, ri);
Oe("SSS", Iy, WT);
var Js, Ck;
for (Js = "SSSS"; Js.length <= 9; Js += "S")
  Oe(Js, Ed);
function qA(r, o) {
  o[pc] = vt(("0." + r) * 1e3);
}
for (Js = "S"; Js.length <= 9; Js += "S")
  $t(Js, qA);
Ck = bd("Milliseconds", !1);
Be("z", 0, 0, "zoneAbbr");
Be("zz", 0, 0, "zoneName");
function KA() {
  return this._isUTC ? "UTC" : "";
}
function ZA() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var pe = sv.prototype;
pe.add = $U;
pe.calendar = KU;
pe.clone = ZU;
pe.diff = aA;
pe.endOf = hA;
pe.format = sA;
pe.from = uA;
pe.fromNow = cA;
pe.to = fA;
pe.toNow = dA;
pe.get = J2;
pe.invalidAt = EA;
pe.isAfter = XU;
pe.isBefore = JU;
pe.isBetween = eA;
pe.isSame = tA;
pe.isSameOrAfter = nA;
pe.isSameOrBefore = rA;
pe.isValid = wA;
pe.lang = gk;
pe.locale = mk;
pe.localeData = yk;
pe.max = wU;
pe.min = xU;
pe.parsingFlags = bA;
pe.set = ej;
pe.startOf = pA;
pe.subtract = VU;
pe.toArray = yA;
pe.toObject = SA;
pe.toDate = gA;
pe.toISOString = oA;
pe.inspect = lA;
typeof Symbol < "u" && Symbol.for != null && (pe[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
pe.toJSON = xA;
pe.toString = iA;
pe.unix = mA;
pe.valueOf = vA;
pe.creationData = CA;
pe.eraName = RA;
pe.eraNarrow = DA;
pe.eraAbbr = OA;
pe.eraYear = MA;
pe.year = ek;
pe.isLeapYear = Sj;
pe.weekYear = FA;
pe.isoWeekYear = PA;
pe.quarter = pe.quarters = BA;
pe.month = XT;
pe.daysInMonth = mj;
pe.week = pe.weeks = _j;
pe.isoWeek = pe.isoWeeks = Tj;
pe.weeksInYear = YA;
pe.weeksInWeekYear = $A;
pe.isoWeeksInYear = HA;
pe.isoWeeksInISOWeekYear = IA;
pe.date = Ek;
pe.day = pe.days = Pj;
pe.weekday = Hj;
pe.isoWeekday = Ij;
pe.dayOfYear = WA;
pe.hour = pe.hours = Qj;
pe.minute = pe.minutes = GA;
pe.second = pe.seconds = QA;
pe.millisecond = pe.milliseconds = Ck;
pe.utcOffset = OU;
pe.utc = NU;
pe.local = LU;
pe.parseZone = jU;
pe.hasAlignedHourOffset = UU;
pe.isDST = AU;
pe.isLocal = FU;
pe.isUtcOffset = PU;
pe.isUtc = dk;
pe.isUTC = dk;
pe.zoneAbbr = KA;
pe.zoneName = ZA;
pe.dates = _i(
  "dates accessor is deprecated. Use date instead.",
  Ek
);
pe.months = _i(
  "months accessor is deprecated. Use month instead",
  XT
);
pe.years = _i(
  "years accessor is deprecated. Use year instead",
  ek
);
pe.zone = _i(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  MU
);
pe.isDSTShifted = _i(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  zU
);
function XA(r) {
  return on(r * 1e3);
}
function JA() {
  return on.apply(null, arguments).parseZone();
}
function _k(r) {
  return r;
}
var Mt = ww.prototype;
Mt.calendar = P2;
Mt.longDateFormat = $2;
Mt.invalidDate = B2;
Mt.ordinal = Q2;
Mt.preparse = _k;
Mt.postformat = _k;
Mt.relativeTime = K2;
Mt.pastFuture = Z2;
Mt.set = z2;
Mt.eras = _A;
Mt.erasParse = TA;
Mt.erasConvertYear = kA;
Mt.erasAbbrRegex = LA;
Mt.erasNameRegex = NA;
Mt.erasNarrowRegex = jA;
Mt.months = dj;
Mt.monthsShort = pj;
Mt.monthsParse = vj;
Mt.monthsRegex = yj;
Mt.monthsShortRegex = gj;
Mt.week = wj;
Mt.firstDayOfYear = Cj;
Mt.firstDayOfWeek = Ej;
Mt.weekdays = jj;
Mt.weekdaysMin = Aj;
Mt.weekdaysShort = Uj;
Mt.weekdaysParse = Fj;
Mt.weekdaysRegex = Yj;
Mt.weekdaysShortRegex = $j;
Mt.weekdaysMinRegex = Vj;
Mt.isPM = Wj;
Mt.meridiem = qj;
function jy(r, o, l, c) {
  var d = Ql(), m = Qo().set(c, o);
  return d[l](m, r);
}
function Tk(r, o, l) {
  if (Gl(r) && (o = r, r = void 0), r = r || "", o != null)
    return jy(r, o, l, "month");
  var c, d = [];
  for (c = 0; c < 12; c++)
    d[c] = jy(r, c, l, "month");
  return d;
}
function zw(r, o, l, c) {
  typeof r == "boolean" ? (Gl(o) && (l = o, o = void 0), o = o || "") : (o = r, l = o, r = !1, Gl(o) && (l = o, o = void 0), o = o || "");
  var d = Ql(), m = r ? d._week.dow : 0, v, E = [];
  if (l != null)
    return jy(o, (l + m) % 7, c, "day");
  for (v = 0; v < 7; v++)
    E[v] = jy(o, (v + m) % 7, c, "day");
  return E;
}
function ez(r, o) {
  return Tk(r, o, "months");
}
function tz(r, o) {
  return Tk(r, o, "monthsShort");
}
function nz(r, o, l) {
  return zw(r, o, l, "weekdays");
}
function rz(r, o, l) {
  return zw(r, o, l, "weekdaysShort");
}
function az(r, o, l) {
  return zw(r, o, l, "weekdaysMin");
}
eu("en", {
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
fe.lang = _i(
  "moment.lang is deprecated. Use moment.locale instead.",
  eu
);
fe.langData = _i(
  "moment.langData is deprecated. Use moment.localeData instead.",
  Ql
);
var Yl = Math.abs;
function iz() {
  var r = this._data;
  return this._milliseconds = Yl(this._milliseconds), this._days = Yl(this._days), this._months = Yl(this._months), r.milliseconds = Yl(r.milliseconds), r.seconds = Yl(r.seconds), r.minutes = Yl(r.minutes), r.hours = Yl(r.hours), r.months = Yl(r.months), r.years = Yl(r.years), this;
}
function kk(r, o, l, c) {
  var d = io(o, l);
  return r._milliseconds += c * d._milliseconds, r._days += c * d._days, r._months += c * d._months, r._bubble();
}
function oz(r, o) {
  return kk(this, r, o, 1);
}
function lz(r, o) {
  return kk(this, r, o, -1);
}
function q_(r) {
  return r < 0 ? Math.floor(r) : Math.ceil(r);
}
function sz() {
  var r = this._milliseconds, o = this._days, l = this._months, c = this._data, d, m, v, E, w;
  return r >= 0 && o >= 0 && l >= 0 || r <= 0 && o <= 0 && l <= 0 || (r += q_(ew(l) + o) * 864e5, o = 0, l = 0), c.milliseconds = r % 1e3, d = Ei(r / 1e3), c.seconds = d % 60, m = Ei(d / 60), c.minutes = m % 60, v = Ei(m / 60), c.hours = v % 24, o += Ei(v / 24), w = Ei(Rk(o)), l += w, o -= q_(ew(w)), E = Ei(l / 12), l %= 12, c.days = o, c.months = l, c.years = E, this;
}
function Rk(r) {
  return r * 4800 / 146097;
}
function ew(r) {
  return r * 146097 / 4800;
}
function uz(r) {
  if (!this.isValid())
    return NaN;
  var o, l, c = this._milliseconds;
  if (r = Ti(r), r === "month" || r === "quarter" || r === "year")
    switch (o = this._days + c / 864e5, l = this._months + Rk(o), r) {
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
function cz() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + vt(this._months / 12) * 31536e6 : NaN;
}
function ql(r) {
  return function() {
    return this.as(r);
  };
}
var fz = ql("ms"), dz = ql("s"), pz = ql("m"), hz = ql("h"), vz = ql("d"), mz = ql("w"), gz = ql("M"), yz = ql("Q"), Sz = ql("y");
function xz() {
  return io(this);
}
function wz(r) {
  return r = Ti(r), this.isValid() ? this[r + "s"]() : NaN;
}
function gc(r) {
  return function() {
    return this.isValid() ? this._data[r] : NaN;
  };
}
var bz = gc("milliseconds"), Ez = gc("seconds"), Cz = gc("minutes"), _z = gc("hours"), Tz = gc("days"), kz = gc("months"), Rz = gc("years");
function Dz() {
  return Ei(this.days() / 7);
}
var $l = Math.round, gd = {
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
function Oz(r, o, l, c, d) {
  return d.relativeTime(o || 1, !!l, r, c);
}
function Mz(r, o, l, c) {
  var d = io(r).abs(), m = $l(d.as("s")), v = $l(d.as("m")), E = $l(d.as("h")), w = $l(d.as("d")), C = $l(d.as("M")), T = $l(d.as("w")), R = $l(d.as("y")), O = m <= l.ss && ["s", m] || m < l.s && ["ss", m] || v <= 1 && ["m"] || v < l.m && ["mm", v] || E <= 1 && ["h"] || E < l.h && ["hh", E] || w <= 1 && ["d"] || w < l.d && ["dd", w];
  return l.w != null && (O = O || T <= 1 && ["w"] || T < l.w && ["ww", T]), O = O || C <= 1 && ["M"] || C < l.M && ["MM", C] || R <= 1 && ["y"] || ["yy", R], O[2] = o, O[3] = +r > 0, O[4] = c, Oz.apply(null, O);
}
function Nz(r) {
  return r === void 0 ? $l : typeof r == "function" ? ($l = r, !0) : !1;
}
function Lz(r, o) {
  return gd[r] === void 0 ? !1 : o === void 0 ? gd[r] : (gd[r] = o, r === "s" && (gd.ss = o - 1), !0);
}
function jz(r, o) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var l = !1, c = gd, d, m;
  return typeof r == "object" && (o = r, r = !1), typeof r == "boolean" && (l = r), typeof o == "object" && (c = Object.assign({}, gd, o), o.s != null && o.ss == null && (c.ss = o.s - 1)), d = this.localeData(), m = Mz(this, !l, c, d), l && (m = d.pastFuture(+this, m)), d.postformat(m);
}
var Ux = Math.abs;
function vd(r) {
  return (r > 0) - (r < 0) || +r;
}
function qy() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var r = Ux(this._milliseconds) / 1e3, o = Ux(this._days), l = Ux(this._months), c, d, m, v, E = this.asSeconds(), w, C, T, R;
  return E ? (c = Ei(r / 60), d = Ei(c / 60), r %= 60, c %= 60, m = Ei(l / 12), l %= 12, v = r ? r.toFixed(3).replace(/\.?0+$/, "") : "", w = E < 0 ? "-" : "", C = vd(this._months) !== vd(E) ? "-" : "", T = vd(this._days) !== vd(E) ? "-" : "", R = vd(this._milliseconds) !== vd(E) ? "-" : "", w + "P" + (m ? C + m + "Y" : "") + (l ? C + l + "M" : "") + (o ? T + o + "D" : "") + (d || c || r ? "T" : "") + (d ? R + d + "H" : "") + (c ? R + c + "M" : "") + (r ? R + v + "S" : "")) : "P0D";
}
var _t = Gy.prototype;
_t.isValid = TU;
_t.abs = iz;
_t.add = oz;
_t.subtract = lz;
_t.as = uz;
_t.asMilliseconds = fz;
_t.asSeconds = dz;
_t.asMinutes = pz;
_t.asHours = hz;
_t.asDays = vz;
_t.asWeeks = mz;
_t.asMonths = gz;
_t.asQuarters = yz;
_t.asYears = Sz;
_t.valueOf = cz;
_t._bubble = sz;
_t.clone = xz;
_t.get = wz;
_t.milliseconds = bz;
_t.seconds = Ez;
_t.minutes = Cz;
_t.hours = _z;
_t.days = Tz;
_t.weeks = Dz;
_t.months = kz;
_t.years = Rz;
_t.humanize = jz;
_t.toISOString = qy;
_t.toString = qy;
_t.toJSON = qy;
_t.locale = mk;
_t.localeData = yk;
_t.toIsoString = _i(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  qy
);
_t.lang = gk;
Be("X", 0, 0, "unix");
Be("x", 0, 0, "valueOf");
Oe("x", $y);
Oe("X", nj);
$t("X", function(r, o, l) {
  l._d = new Date(parseFloat(r) * 1e3);
});
$t("x", function(r, o, l) {
  l._d = new Date(vt(r));
});
//! moment.js
fe.version = "2.29.4";
U2(on);
fe.fn = pe;
fe.min = bU;
fe.max = EU;
fe.now = CU;
fe.utc = Qo;
fe.unix = XA;
fe.months = ez;
fe.isDate = lv;
fe.locale = eu;
fe.invalid = Fy;
fe.duration = io;
fe.isMoment = ao;
fe.weekdays = nz;
fe.parseZone = JA;
fe.localeData = Ql;
fe.isDuration = yy;
fe.monthsShort = tz;
fe.weekdaysMin = az;
fe.defineLocale = Dw;
fe.updateLocale = Jj;
fe.locales = eU;
fe.weekdaysShort = rz;
fe.normalizeUnits = Ti;
fe.relativeTimeRounding = Nz;
fe.relativeTimeThreshold = Lz;
fe.calendarFormat = qU;
fe.prototype = pe;
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
const Uz = ({
  tooltipRef: r,
  width: o,
  maxDate: l,
  minDate: c,
  labels: d,
  spacing: m,
  iteration: v,
  rectHeight: E,
  proportion: w,
  theme: C,
  items: T,
  translation: R
}) => {
  const O = mn(null);
  return /* @__PURE__ */ A.jsxs(
    "g",
    {
      onMouseMove: (U) => {
        if (U.target === O.current && r.current) {
          const H = U.nativeEvent.offsetX / o * l.diff(c), ne = c.clone().add(H, "milliseconds"), W = l.diff(c) / 3600 / 1e3 > 24 ? "YYYY-MM-DD HH:mm:ss" : "HH:mm:ss";
          r.current.innerHTML = `
              ${ne.format(W)}
          `;
        }
      },
      children: [
        (d == null ? void 0 : d.length) && (d == null ? void 0 : d.length) > 0 && /* @__PURE__ */ A.jsx(
          "text",
          {
            x: m / 2 - d[v].length * 4,
            y: E / 2 + E * v + 4 + 20,
            children: d[v]
          }
        ),
        /* @__PURE__ */ A.jsx(
          "rect",
          {
            rx: 4,
            x: m,
            y: E * v + 20,
            ref: O,
            width: l.diff(c) * w,
            height: E,
            className: C == null ? void 0 : C.period
          }
        ),
        Object.values(T).map(
          (U, L) => U.map((H, ne) => {
            if (Object.keys(T)[L] === "period")
              return null;
            const oe = H.start.diff(c) * w, W = H.finish.diff(H.start), K = W * w, ae = Object.keys(T)[L];
            let te = W / 3600 / 1e3 < 1 ? fe.utc(W).format("mm[m]") : fe.utc(W).format("HH[h]mm");
            te = te.substring(te.length - 2, te.length) === "00" ? te.substring(0, te.length - 2) : te;
            const V = (te.length + 0.5) * 4;
            return /* @__PURE__ */ A.jsxs(
              "g",
              {
                y: 20,
                onMouseMove: (Z) => {
                  const de = Z.nativeEvent.offsetX / o * l.diff(c), ve = c.clone().add(de, "milliseconds"), Qe = l.diff(c) / 3600 / 1e3 > 24 ? "YYYY-MM-DD HH:mm:ss" : "HH:mm:ss";
                  r.current && (r.current.innerHTML = `
                  <span>${R(ae)}</span>
                  <span>
                  ${ve.format(Qe)} |
                    ${fe.utc(H.start).format("HH[h]mm")} -
                    ${fe.utc(H.finish).format("HH[h]mm")}
                  </span>
                  <span>
                    Escalado: ${fe.utc(H == null ? void 0 : H.scaled).format("HH[h]mm")}
                  </span>
                  <span>
                    Duração: ${te}
                 </span>
              `);
                },
                children: [
                  /* @__PURE__ */ A.jsx(
                    "rect",
                    {
                      className: (C == null ? void 0 : C[Object.keys(T)[L]]) ?? "fill-text-disabled",
                      width: K,
                      rx: 4,
                      x: oe + m,
                      height: E,
                      y: E * v + 20,
                      fill: "currentColor"
                    }
                  ),
                  V < K / 2 && /* @__PURE__ */ A.jsx(
                    "text",
                    {
                      x: oe + K / 2 - V + m,
                      y: E * v + E / 2 + 26,
                      children: te
                    }
                  )
                ]
              },
              ne
            );
          })
        )
      ]
    }
  );
}, Az = ({
  data: r,
  width: o,
  height: l,
  labels: c,
  tooltipRef: d,
  translation: m,
  theme: v
}) => {
  if (o === 0 || l === 0 || r.length === 0)
    return null;
  const E = c != null && c.length && (c == null ? void 0 : c.length) > 0 ? 80 : 0;
  o = o - E, l = l - 20;
  const w = l / r.length;
  let C = fe(), T = fe();
  r.forEach((H) => {
    Object.values(H).forEach((ne) => {
      ne.forEach((oe) => {
        C = fe.min(C, oe.start), T = fe.max(T, oe.finish);
      });
    });
  });
  const R = T.diff(C), O = o / R, U = fe.duration(R, "milliseconds").hours(), L = o / U / 4;
  return /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
    r.map((H, ne) => /* @__PURE__ */ A.jsx(UT, { children: /* @__PURE__ */ A.jsx(
      Uz,
      {
        width: o + E,
        labels: c,
        items: H,
        maxDate: T,
        minDate: C,
        spacing: E,
        iteration: ne,
        proportion: O,
        rectHeight: w,
        translation: m,
        tooltipRef: d,
        theme: v
      }
    ) }, ne)),
    Array.from({ length: U * 4 }).map((H, ne) => /* @__PURE__ */ A.jsx("g", { className: "interval", children: /* @__PURE__ */ A.jsx(
      "line",
      {
        x1: L * ne + 80,
        x2: L * ne + 80,
        y1: 20,
        y2: l + 20
      }
    ) }, ne)),
    Array.from({ length: U + 1 }).map((H, ne) => {
      const oe = fe.utc(C).hours() + ne;
      return /* @__PURE__ */ A.jsxs(
        "text",
        {
          x: L * 4 * ne + E - String(oe).length * 8,
          y: 12,
          fill: "#fff",
          children: [
            oe,
            "h"
          ]
        },
        ne
      );
    })
  ] });
};
function zz(r, o = 300) {
  let l;
  return function(...c) {
    clearTimeout(l), l = setTimeout(() => {
      r.apply(this, c);
    }, o);
  };
}
const Ax = (r, o, l, c = !1) => {
  var v, E, w, C;
  const d = r.clientWidth, m = r.clientHeight;
  if ((v = o.current) == null || v.setAttribute("viewBox", `0 0 ${d} ${m}`), (E = o.current) == null || E.setAttribute("width", String(d)), !c) {
    (w = o.current) == null || w.setAttribute("height", String(m)), l({
      height: m,
      width: d
    });
    return;
  }
  (C = o.current) == null || C.setAttribute("height", String(m)), l((T) => ({
    ...T,
    width: d
  }));
}, Fz = ({
  type: r,
  width: o,
  height: l,
  hide: c,
  data: d,
  children: m,
  translation: v = "workgroups",
  snap: E = !1
}) => {
  const w = mn(null), [C, T] = En({
    width: o ?? 0,
    height: l ?? 0
  }), R = mn(null), O = mn(null), U = tu(() => c ? [...d].filter((H) => (c.forEach((ne) => delete H[ne]), H)) : d, [c, d]);
  console.log(C), wd(() => {
    var ne;
    const H = (ne = w == null ? void 0 : w.current) == null ? void 0 : ne.parentNode;
    return window == null || window.addEventListener(
      "resize",
      zz(
        () => Ax(H, w, T, l !== void 0)
      )
    ), (!o || !l) && Ax(H, w, T, l !== void 0), () => H == null ? void 0 : H.removeEventListener(
      "resize",
      () => Ax(H, w, () => {
      }, l !== void 0)
    );
  }, [T, o, l]);
  const L = Math.max(
    ...U().map((H) => Math.max(...Object.values(H)))
  );
  return /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
    /* @__PURE__ */ A.jsx(
      "div",
      {
        ref: R,
        className: "chart-tooltip container rounded-box bg-neutral shadow-md gap-sm"
      }
    ),
    /* @__PURE__ */ A.jsxs(
      "svg",
      {
        ref: w,
        className: `chart ${r}`,
        viewBox: `0 0 ${o ?? 0} ${l ?? 0}`,
        width: C.width,
        height: C.height,
        onMouseMove: (H) => {
          if (O.current && w.current && R.current) {
            const ne = O.current.style, oe = H.clientX, W = w.current.getBoundingClientRect().left, K = w.current.getBoundingClientRect().top;
            if (ne.opacity = "1", E) {
              const we = C.width / (d.length * 4), de = Array.from({
                length: d.length
              }).map((Qe, De) => Math.abs(
                oe - W - we * De - C.width / d.length * De
              )), ve = de.indexOf(
                Math.min(...de)
              ), Ae = C.width / d.length * ve + we * ve;
              ne.transform = `translate(${Ae}px, 0px)`;
            } else
              ne.transform = `translate(${H.clientX - W}px, 0px)`, ne.transition = "none";
            if (R.current.innerHTML === "") {
              R.current.style.opacity = "0";
              return;
            }
            const ae = H.clientX - W, te = R.current.clientWidth;
            R.current.style.opacity = "1";
            let V = ae + 20;
            const Z = H.clientY - K + 20;
            R.current.offsetLeft + ae + te + 20 > window.innerWidth && (V = ae - te - 20), R.current.style.transform = `translate(${V}px, ${Z}px)`;
          }
        },
        onMouseLeave: () => {
          R.current && O.current && (R.current.innerHTML = "", R.current.style.opacity = "0", O.current.style.opacity = "0");
        },
        children: [
          m({
            currentSize: C,
            tooltipRef: R,
            data: U(),
            maxItemValue: L,
            lineRef: O,
            translation: v
          }),
          /* @__PURE__ */ A.jsx(
            "line",
            {
              ref: O,
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
}, AP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Bar: j2,
  Line: N2,
  Time: Az,
  default: Fz
}, Symbol.toStringTag, { value: "Module" }));
var nu = Dr;
const qh = /^[a-z0-9]+(-[a-z0-9]+)*$/, Ky = (r, o, l, c = "") => {
  const d = r.split(":");
  if (r.slice(0, 1) === "@") {
    if (d.length < 2 || d.length > 3)
      return null;
    c = d.shift().slice(1);
  }
  if (d.length > 3 || !d.length)
    return null;
  if (d.length > 1) {
    const E = d.pop(), w = d.pop(), C = {
      // Allow provider without '@': "provider:prefix:name"
      provider: d.length > 0 ? d[0] : c,
      prefix: w,
      name: E
    };
    return o && !xy(C) ? null : C;
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
}, xy = (r, o) => r ? !!((r.provider === "" || r.provider.match(qh)) && (o && r.prefix === "" || r.prefix.match(qh)) && r.name.match(qh)) : !1, Dk = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), Uy = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), Fw = Object.freeze({
  ...Dk,
  ...Uy
}), tw = Object.freeze({
  ...Fw,
  body: "",
  hidden: !1
});
function Pz(r, o) {
  const l = {};
  !r.hFlip != !o.hFlip && (l.hFlip = !0), !r.vFlip != !o.vFlip && (l.vFlip = !0);
  const c = ((r.rotate || 0) + (o.rotate || 0)) % 4;
  return c && (l.rotate = c), l;
}
function K_(r, o) {
  const l = Pz(r, o);
  for (const c in tw)
    c in Uy ? c in r && !(c in l) && (l[c] = Uy[c]) : c in o ? l[c] = o[c] : c in r && (l[c] = r[c]);
  return l;
}
function Hz(r, o) {
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
function Iz(r, o, l) {
  const c = r.icons, d = r.aliases || /* @__PURE__ */ Object.create(null);
  let m = {};
  function v(E) {
    m = K_(
      c[E] || d[E],
      m
    );
  }
  return v(o), l.forEach(v), K_(r, m);
}
function Ok(r, o) {
  const l = [];
  if (typeof r != "object" || typeof r.icons != "object")
    return l;
  r.not_found instanceof Array && r.not_found.forEach((d) => {
    o(d, null), l.push(d);
  });
  const c = Hz(r);
  for (const d in c) {
    const m = c[d];
    m && (o(d, Iz(r, d, m)), l.push(d));
  }
  return l;
}
const Yz = {
  provider: "",
  aliases: {},
  not_found: {},
  ...Dk
};
function zx(r, o) {
  for (const l in o)
    if (l in r && typeof r[l] != typeof o[l])
      return !1;
  return !0;
}
function Mk(r) {
  if (typeof r != "object" || r === null)
    return null;
  const o = r;
  if (typeof o.prefix != "string" || !r.icons || typeof r.icons != "object" || !zx(r, Yz))
    return null;
  const l = o.icons;
  for (const d in l) {
    const m = l[d];
    if (!d.match(qh) || typeof m.body != "string" || !zx(
      m,
      tw
    ))
      return null;
  }
  const c = o.aliases || /* @__PURE__ */ Object.create(null);
  for (const d in c) {
    const m = c[d], v = m.parent;
    if (!d.match(qh) || typeof v != "string" || !l[v] && !c[v] || !zx(
      m,
      tw
    ))
      return null;
  }
  return o;
}
const Z_ = /* @__PURE__ */ Object.create(null);
function $z(r, o) {
  return {
    provider: r,
    prefix: o,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function vc(r, o) {
  const l = Z_[r] || (Z_[r] = /* @__PURE__ */ Object.create(null));
  return l[o] || (l[o] = $z(r, o));
}
function Pw(r, o) {
  return Mk(o) ? Ok(o, (l, c) => {
    c ? r.icons[l] = c : r.missing.add(l);
  }) : [];
}
function Vz(r, o, l) {
  try {
    if (typeof l.body == "string")
      return r.icons[o] = { ...l }, !0;
  } catch {
  }
  return !1;
}
let rv = !1;
function Nk(r) {
  return typeof r == "boolean" && (rv = r), rv;
}
function Bz(r) {
  const o = typeof r == "string" ? Ky(r, !0, rv) : r;
  if (o) {
    const l = vc(o.provider, o.prefix), c = o.name;
    return l.icons[c] || (l.missing.has(c) ? null : void 0);
  }
}
function Wz(r, o) {
  const l = Ky(r, !0, rv);
  if (!l)
    return !1;
  const c = vc(l.provider, l.prefix);
  return Vz(c, l.name, o);
}
function Gz(r, o) {
  if (typeof r != "object")
    return !1;
  if (typeof o != "string" && (o = r.provider || ""), rv && !o && !r.prefix) {
    let d = !1;
    return Mk(r) && (r.prefix = "", Ok(r, (m, v) => {
      v && Wz(m, v) && (d = !0);
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
  return !!Pw(c, r);
}
const Lk = Object.freeze({
  width: null,
  height: null
}), jk = Object.freeze({
  // Dimensions
  ...Lk,
  // Transformations
  ...Uy
}), Qz = /(-?[0-9.]*[0-9]+[0-9.]*)/g, qz = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function X_(r, o, l) {
  if (o === 1)
    return r;
  if (l = l || 100, typeof r == "number")
    return Math.ceil(r * o * l) / l;
  if (typeof r != "string")
    return r;
  const c = r.split(Qz);
  if (c === null || !c.length)
    return r;
  const d = [];
  let m = c.shift(), v = qz.test(m);
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
const Kz = (r) => r === "unset" || r === "undefined" || r === "none";
function Zz(r, o) {
  const l = {
    ...Fw,
    ...r
  }, c = {
    ...jk,
    ...o
  }, d = {
    left: l.left,
    top: l.top,
    width: l.width,
    height: l.height
  };
  let m = l.body;
  [l, c].forEach((L) => {
    const H = [], ne = L.hFlip, oe = L.vFlip;
    let W = L.rotate;
    ne ? oe ? W += 2 : (H.push(
      "translate(" + (d.width + d.left).toString() + " " + (0 - d.top).toString() + ")"
    ), H.push("scale(-1 1)"), d.top = d.left = 0) : oe && (H.push(
      "translate(" + (0 - d.left).toString() + " " + (d.height + d.top).toString() + ")"
    ), H.push("scale(1 -1)"), d.top = d.left = 0);
    let K;
    switch (W < 0 && (W -= Math.floor(W / 4) * 4), W = W % 4, W) {
      case 1:
        K = d.height / 2 + d.top, H.unshift(
          "rotate(90 " + K.toString() + " " + K.toString() + ")"
        );
        break;
      case 2:
        H.unshift(
          "rotate(180 " + (d.width / 2 + d.left).toString() + " " + (d.height / 2 + d.top).toString() + ")"
        );
        break;
      case 3:
        K = d.width / 2 + d.left, H.unshift(
          "rotate(-90 " + K.toString() + " " + K.toString() + ")"
        );
        break;
    }
    W % 2 === 1 && (d.left !== d.top && (K = d.left, d.left = d.top, d.top = K), d.width !== d.height && (K = d.width, d.width = d.height, d.height = K)), H.length && (m = '<g transform="' + H.join(" ") + '">' + m + "</g>");
  });
  const v = c.width, E = c.height, w = d.width, C = d.height;
  let T, R;
  v === null ? (R = E === null ? "1em" : E === "auto" ? C : E, T = X_(R, w / C)) : (T = v === "auto" ? w : v, R = E === null ? X_(T, C / w) : E === "auto" ? C : E);
  const O = {}, U = (L, H) => {
    Kz(H) || (O[L] = H.toString());
  };
  return U("width", T), U("height", R), O.viewBox = d.left.toString() + " " + d.top.toString() + " " + w.toString() + " " + C.toString(), {
    attributes: O,
    body: m
  };
}
const Xz = /\sid="(\S+)"/g, Jz = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let eF = 0;
function tF(r, o = Jz) {
  const l = [];
  let c;
  for (; c = Xz.exec(r); )
    l.push(c[1]);
  if (!l.length)
    return r;
  const d = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return l.forEach((m) => {
    const v = typeof o == "function" ? o(m) : o + (eF++).toString(), E = m.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    r = r.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + E + ')([")]|\\.[a-z])', "g"),
      "$1" + v + d + "$3"
    );
  }), r = r.replace(new RegExp(d, "g"), ""), r;
}
const nw = /* @__PURE__ */ Object.create(null);
function nF(r, o) {
  nw[r] = o;
}
function rw(r) {
  return nw[r] || nw[""];
}
function Hw(r) {
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
const Iw = /* @__PURE__ */ Object.create(null), Bh = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], wy = [];
for (; Bh.length > 0; )
  Bh.length === 1 || Math.random() > 0.5 ? wy.push(Bh.shift()) : wy.push(Bh.pop());
Iw[""] = Hw({
  resources: ["https://api.iconify.design"].concat(wy)
});
function rF(r, o) {
  const l = Hw(o);
  return l === null ? !1 : (Iw[r] = l, !0);
}
function Yw(r) {
  return Iw[r];
}
const aF = () => {
  let r;
  try {
    if (r = fetch, typeof r == "function")
      return r;
  } catch {
  }
};
let J_ = aF();
function iF(r, o) {
  const l = Yw(r);
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
function oF(r) {
  return r === 404;
}
const lF = (r, o, l) => {
  const c = [], d = iF(r, o), m = "icons";
  let v = {
    type: m,
    provider: r,
    prefix: o,
    icons: []
  }, E = 0;
  return l.forEach((w, C) => {
    E += w.length + 1, E >= d && C > 0 && (c.push(v), v = {
      type: m,
      provider: r,
      prefix: o,
      icons: []
    }, E = w.length), v.icons.push(w);
  }), c.push(v), c;
};
function sF(r) {
  if (typeof r == "string") {
    const o = Yw(r);
    if (o)
      return o.path;
  }
  return "/";
}
const uF = (r, o, l) => {
  if (!J_) {
    l("abort", 424);
    return;
  }
  let c = sF(o.provider);
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
  J_(r + c).then((m) => {
    const v = m.status;
    if (v !== 200) {
      setTimeout(() => {
        l(oF(v) ? "abort" : "next", v);
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
}, cF = {
  prepare: lF,
  send: uF
};
function fF(r) {
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
    const m = d.provider, v = d.prefix, E = d.name, w = l[m] || (l[m] = /* @__PURE__ */ Object.create(null)), C = w[v] || (w[v] = vc(m, v));
    let T;
    E in C.icons ? T = o.loaded : v === "" || C.missing.has(E) ? T = o.missing : T = o.pending;
    const R = {
      provider: m,
      prefix: v,
      name: E
    };
    T.push(R);
  }), o;
}
function Uk(r, o) {
  r.forEach((l) => {
    const c = l.loaderCallbacks;
    c && (l.loaderCallbacks = c.filter((d) => d.id !== o));
  });
}
function dF(r) {
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
        const C = w.name;
        if (r.icons[C])
          v.loaded.push({
            provider: c,
            prefix: d,
            name: C
          });
        else if (r.missing.has(C))
          v.missing.push({
            provider: c,
            prefix: d,
            name: C
          });
        else
          return l = !0, !0;
        return !1;
      }), v.pending.length !== E && (l || Uk([r], m.id), m.callback(
        v.loaded.slice(0),
        v.missing.slice(0),
        v.pending.slice(0),
        m.abort
      ));
    });
  }));
}
let pF = 0;
function hF(r, o, l) {
  const c = pF++, d = Uk.bind(null, l, c);
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
function vF(r, o = !0, l = !1) {
  const c = [];
  return r.forEach((d) => {
    const m = typeof d == "string" ? Ky(d, o, l) : d;
    m && c.push(m);
  }), c;
}
var mF = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function gF(r, o, l, c) {
  const d = r.resources.length, m = r.random ? Math.floor(Math.random() * d) : r.index;
  let v;
  if (r.random) {
    let V = r.resources.slice(0);
    for (v = []; V.length > 1; ) {
      const Z = Math.floor(Math.random() * V.length);
      v.push(V[Z]), V = V.slice(0, Z).concat(V.slice(Z + 1));
    }
    v = v.concat(V);
  } else
    v = r.resources.slice(m).concat(r.resources.slice(0, m));
  const E = Date.now();
  let w = "pending", C = 0, T, R = null, O = [], U = [];
  typeof c == "function" && U.push(c);
  function L() {
    R && (clearTimeout(R), R = null);
  }
  function H() {
    w === "pending" && (w = "aborted"), L(), O.forEach((V) => {
      V.status === "pending" && (V.status = "aborted");
    }), O = [];
  }
  function ne(V, Z) {
    Z && (U = []), typeof V == "function" && U.push(V);
  }
  function oe() {
    return {
      startTime: E,
      payload: o,
      status: w,
      queriesSent: C,
      queriesPending: O.length,
      subscribe: ne,
      abort: H
    };
  }
  function W() {
    w = "failed", U.forEach((V) => {
      V(void 0, T);
    });
  }
  function K() {
    O.forEach((V) => {
      V.status === "pending" && (V.status = "aborted");
    }), O = [];
  }
  function ae(V, Z, we) {
    const de = Z !== "success";
    switch (O = O.filter((ve) => ve !== V), w) {
      case "pending":
        break;
      case "failed":
        if (de || !r.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (Z === "abort") {
      T = we, W();
      return;
    }
    if (de) {
      T = we, O.length || (v.length ? te() : W());
      return;
    }
    if (L(), K(), !r.random) {
      const ve = r.resources.indexOf(V.resource);
      ve !== -1 && ve !== r.index && (r.index = ve);
    }
    w = "completed", U.forEach((ve) => {
      ve(we);
    });
  }
  function te() {
    if (w !== "pending")
      return;
    L();
    const V = v.shift();
    if (V === void 0) {
      if (O.length) {
        R = setTimeout(() => {
          L(), w === "pending" && (K(), W());
        }, r.timeout);
        return;
      }
      W();
      return;
    }
    const Z = {
      status: "pending",
      resource: V,
      callback: (we, de) => {
        ae(Z, we, de);
      }
    };
    O.push(Z), C++, R = setTimeout(te, r.rotate), l(V, o, Z.callback);
  }
  return setTimeout(te), oe;
}
function Ak(r) {
  const o = {
    ...mF,
    ...r
  };
  let l = [];
  function c() {
    l = l.filter((E) => E().status === "pending");
  }
  function d(E, w, C) {
    const T = gF(
      o,
      E,
      w,
      (R, O) => {
        c(), C && C(R, O);
      }
    );
    return l.push(T), T;
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
function eT() {
}
const Fx = /* @__PURE__ */ Object.create(null);
function yF(r) {
  if (!Fx[r]) {
    const o = Yw(r);
    if (!o)
      return;
    const l = Ak(o), c = {
      config: o,
      redundancy: l
    };
    Fx[r] = c;
  }
  return Fx[r];
}
function SF(r, o, l) {
  let c, d;
  if (typeof r == "string") {
    const m = rw(r);
    if (!m)
      return l(void 0, 424), eT;
    d = m.send;
    const v = yF(r);
    v && (c = v.redundancy);
  } else {
    const m = Hw(r);
    if (m) {
      c = Ak(m);
      const v = r.resources ? r.resources[0] : "", E = rw(v);
      E && (d = E.send);
    }
  }
  return !c || !d ? (l(void 0, 424), eT) : c.query(o, d, l)().abort;
}
const tT = "iconify2", av = "iconify", zk = av + "-count", nT = av + "-version", Fk = 36e5, xF = 168;
function aw(r, o) {
  try {
    return r.getItem(o);
  } catch {
  }
}
function $w(r, o, l) {
  try {
    return r.setItem(o, l), !0;
  } catch {
  }
}
function rT(r, o) {
  try {
    r.removeItem(o);
  } catch {
  }
}
function iw(r, o) {
  return $w(r, zk, o.toString());
}
function ow(r) {
  return parseInt(aw(r, zk)) || 0;
}
const Zy = {
  local: !0,
  session: !0
}, Pk = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let Vw = !1;
function wF(r) {
  Vw = r;
}
let py = typeof window > "u" ? {} : window;
function Hk(r) {
  const o = r + "Storage";
  try {
    if (py && py[o] && typeof py[o].length == "number")
      return py[o];
  } catch {
  }
  Zy[r] = !1;
}
function Ik(r, o) {
  const l = Hk(r);
  if (!l)
    return;
  const c = aw(l, nT);
  if (c !== tT) {
    if (c) {
      const E = ow(l);
      for (let w = 0; w < E; w++)
        rT(l, av + w.toString());
    }
    $w(l, nT, tT), iw(l, 0);
    return;
  }
  const d = Math.floor(Date.now() / Fk) - xF, m = (E) => {
    const w = av + E.toString(), C = aw(l, w);
    if (typeof C == "string") {
      try {
        const T = JSON.parse(C);
        if (typeof T == "object" && typeof T.cached == "number" && T.cached > d && typeof T.provider == "string" && typeof T.data == "object" && typeof T.data.prefix == "string" && // Valid item: run callback
        o(T, E))
          return !0;
      } catch {
      }
      rT(l, w);
    }
  };
  let v = ow(l);
  for (let E = v - 1; E >= 0; E--)
    m(E) || (E === v - 1 ? (v--, iw(l, v)) : Pk[r].add(E));
}
function Yk() {
  if (!Vw) {
    wF(!0);
    for (const r in Zy)
      Ik(r, (o) => {
        const l = o.data, c = o.provider, d = l.prefix, m = vc(
          c,
          d
        );
        if (!Pw(m, l).length)
          return !1;
        const v = l.lastModified || -1;
        return m.lastModifiedCached = m.lastModifiedCached ? Math.min(m.lastModifiedCached, v) : v, !0;
      });
  }
}
function bF(r, o) {
  const l = r.lastModifiedCached;
  if (
    // Matches or newer
    l && l >= o
  )
    return l === o;
  if (r.lastModifiedCached = o, l)
    for (const c in Zy)
      Ik(c, (d) => {
        const m = d.data;
        return d.provider !== r.provider || m.prefix !== r.prefix || m.lastModified === o;
      });
  return !0;
}
function EF(r, o) {
  Vw || Yk();
  function l(c) {
    let d;
    if (!Zy[c] || !(d = Hk(c)))
      return;
    const m = Pk[c];
    let v;
    if (m.size)
      m.delete(v = Array.from(m).shift());
    else if (v = ow(d), !iw(d, v + 1))
      return;
    const E = {
      cached: Math.floor(Date.now() / Fk),
      provider: r.provider,
      data: o
    };
    return $w(
      d,
      av + v.toString(),
      JSON.stringify(E)
    );
  }
  o.lastModified && !bF(r, o.lastModified) || Object.keys(o.icons).length && (o.not_found && (o = Object.assign({}, o), delete o.not_found), l("local") || l("session"));
}
function aT() {
}
function CF(r) {
  r.iconsLoaderFlag || (r.iconsLoaderFlag = !0, setTimeout(() => {
    r.iconsLoaderFlag = !1, dF(r);
  }));
}
function _F(r, o) {
  r.iconsToLoad ? r.iconsToLoad = r.iconsToLoad.concat(o).sort() : r.iconsToLoad = o, r.iconsQueueFlag || (r.iconsQueueFlag = !0, setTimeout(() => {
    r.iconsQueueFlag = !1;
    const { provider: l, prefix: c } = r, d = r.iconsToLoad;
    delete r.iconsToLoad;
    let m;
    if (!d || !(m = rw(l)))
      return;
    m.prepare(l, c, d).forEach((E) => {
      SF(l, E, (w) => {
        if (typeof w != "object")
          E.icons.forEach((C) => {
            r.missing.add(C);
          });
        else
          try {
            const C = Pw(
              r,
              w
            );
            if (!C.length)
              return;
            const T = r.pendingIcons;
            T && C.forEach((R) => {
              T.delete(R);
            }), EF(r, w);
          } catch (C) {
            console.error(C);
          }
        CF(r);
      });
    });
  }));
}
const TF = (r, o) => {
  const l = vF(r, !0, Nk()), c = fF(l);
  if (!c.pending.length) {
    let w = !0;
    return o && setTimeout(() => {
      w && o(
        c.loaded,
        c.missing,
        c.pending,
        aT
      );
    }), () => {
      w = !1;
    };
  }
  const d = /* @__PURE__ */ Object.create(null), m = [];
  let v, E;
  return c.pending.forEach((w) => {
    const { provider: C, prefix: T } = w;
    if (T === E && C === v)
      return;
    v = C, E = T, m.push(vc(C, T));
    const R = d[C] || (d[C] = /* @__PURE__ */ Object.create(null));
    R[T] || (R[T] = []);
  }), c.pending.forEach((w) => {
    const { provider: C, prefix: T, name: R } = w, O = vc(C, T), U = O.pendingIcons || (O.pendingIcons = /* @__PURE__ */ new Set());
    U.has(R) || (U.add(R), d[C][T].push(R));
  }), m.forEach((w) => {
    const { provider: C, prefix: T } = w;
    d[C][T].length && _F(w, d[C][T]);
  }), o ? hF(o, c, m) : aT;
};
function kF(r, o) {
  const l = {
    ...r
  };
  for (const c in o) {
    const d = o[c], m = typeof d;
    c in Lk ? (d === null || d && (m === "string" || m === "number")) && (l[c] = d) : m === typeof l[c] && (l[c] = c === "rotate" ? d % 4 : d);
  }
  return l;
}
const RF = /[\s,]+/;
function DF(r, o) {
  o.split(RF).forEach((l) => {
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
function OF(r, o = 0) {
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
function MF(r, o) {
  let l = r.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const c in o)
    l += " " + c + '="' + o[c] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + l + ">" + r + "</svg>";
}
function NF(r) {
  return r.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function LF(r) {
  return "data:image/svg+xml," + NF(r);
}
function jF(r) {
  return 'url("' + LF(r) + '")';
}
let Kh;
function UF() {
  try {
    Kh = window.trustedTypes.createPolicy("iconify", {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      createHTML: (r) => r
    });
  } catch {
    Kh = null;
  }
}
function AF(r) {
  return Kh === void 0 && UF(), Kh ? Kh.createHTML(r) : r;
}
const $k = {
  ...jk,
  inline: !1
}, zF = {
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, FF = {
  display: "inline-block"
}, lw = {
  backgroundColor: "currentColor"
}, Vk = {
  backgroundColor: "transparent"
}, iT = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, oT = {
  WebkitMask: lw,
  mask: lw,
  background: Vk
};
for (const r in oT) {
  const o = oT[r];
  for (const l in iT)
    o[r + l] = iT[l];
}
const PF = {
  ...$k,
  inline: !0
};
function lT(r) {
  return r + (r.match(/^[-0-9.]+$/) ? "px" : "");
}
const HF = (r, o, l, c) => {
  const d = l ? PF : $k, m = kF(d, o), v = o.mode || "svg", E = {}, w = o.style || {}, C = {
    ...v === "svg" ? zF : {},
    ref: c
  };
  for (let oe in o) {
    const W = o[oe];
    if (W !== void 0)
      switch (oe) {
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
          m[oe] = W === !0 || W === "true" || W === 1;
          break;
        case "flip":
          typeof W == "string" && DF(m, W);
          break;
        case "color":
          E.color = W;
          break;
        case "rotate":
          typeof W == "string" ? m[oe] = OF(W) : typeof W == "number" && (m[oe] = W);
          break;
        case "ariaHidden":
        case "aria-hidden":
          W !== !0 && W !== "true" && delete C["aria-hidden"];
          break;
        default:
          d[oe] === void 0 && (C[oe] = W);
      }
  }
  const T = Zz(r, m), R = T.attributes;
  if (m.inline && (E.verticalAlign = "-0.125em"), v === "svg") {
    C.style = {
      ...E,
      ...w
    }, Object.assign(C, R);
    let oe = 0, W = o.id;
    return typeof W == "string" && (W = W.replace(/-/g, "_")), C.dangerouslySetInnerHTML = {
      __html: AF(tF(T.body, W ? () => W + "ID" + oe++ : "iconifyReact"))
    }, nu.createElement("svg", C);
  }
  const { body: O, width: U, height: L } = r, H = v === "mask" || (v === "bg" ? !1 : O.indexOf("currentColor") !== -1), ne = MF(O, {
    ...R,
    width: U + "",
    height: L + ""
  });
  return C.style = {
    ...E,
    "--svg": jF(ne),
    width: lT(R.width),
    height: lT(R.height),
    ...FF,
    ...H ? lw : Vk,
    ...w
  }, nu.createElement("span", C);
};
Nk(!0);
nF("", cF);
if (typeof document < "u" && typeof window < "u") {
  Yk();
  const r = window;
  if (r.IconifyPreload !== void 0) {
    const o = r.IconifyPreload, l = "Invalid IconifyPreload syntax.";
    typeof o == "object" && o !== null && (o instanceof Array ? o : [o]).forEach((c) => {
      try {
        // Check if item is an object and not null/array
        (typeof c != "object" || c === null || c instanceof Array || // Check for 'icons' and 'prefix'
        typeof c.icons != "object" || typeof c.prefix != "string" || // Add icon set
        !Gz(c)) && console.error(l);
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
          rF(l, d) || console.error(c);
        } catch {
          console.error(c);
        }
      }
  }
}
let Bk = class extends nu.Component {
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
    if (typeof c != "string" || (d = Ky(c, !1, !0)) === null) {
      this._abortLoading(), this._setData(null);
      return;
    }
    const m = Bz(d);
    if (!m) {
      (!this._loading || this._loading.name !== c) && (this._abortLoading(), this._icon = "", this._setData(null), m !== null && (this._loading = {
        name: c,
        abort: TF([d], this._checkIcon.bind(this, !1))
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
      return o.children ? o.children : nu.createElement("span", {});
    let c = o;
    return l.classes && (c = {
      ...o,
      className: (typeof o.className == "string" ? o.className + " " : "") + l.classes.join(" ")
    }), HF({
      ...Fw,
      ...l.data
    }, c, o._inline, o._ref);
  }
};
const IF = nu.forwardRef(function(o, l) {
  const c = {
    ...o,
    _ref: l,
    _inline: !1
  };
  return nu.createElement(Bk, c);
});
nu.forwardRef(function(o, l) {
  const c = {
    ...o,
    _ref: l,
    _inline: !0
  };
  return nu.createElement(Bk, c);
});
var mr = IF;
const YF = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (r) => {
  const o = Math.random() * 16 | 0;
  return (r === "x" ? o : o & 3 | 8).toString(16);
}), $F = ({
  onChange: r,
  defaultValue: o,
  children: l,
  name: c,
  invalidText: d,
  placeholder: m,
  variant: v,
  icon: E,
  required: w = !0,
  className: C = "",
  type: T = "text",
  id: R = YF(),
  ...O
}) => /* @__PURE__ */ A.jsxs("div", { className: `textfield ${v ? "bg-" + v : ""} ${C}`, children: [
  /* @__PURE__ */ A.jsx("label", { htmlFor: R, children: m ?? c ?? R }),
  /* @__PURE__ */ A.jsx(
    "input",
    {
      id: R,
      type: T,
      className: "input",
      name: c ?? R,
      onChange: r,
      defaultValue: o,
      placeholder: m ?? c ?? R ?? "",
      required: w,
      ...O
    }
  ),
  E && /* @__PURE__ */ A.jsx(mr, { icon: E }),
  w && /* @__PURE__ */ A.jsx("span", { className: "required", children: d ?? c ? `${c ?? R} should not be empty!` : "Should not be empty!" }),
  l && l
] }), FP = ({
  defaultShow: r = !1,
  ...o
}) => {
  const [l, c] = En(r);
  return /* @__PURE__ */ A.jsx(A.Fragment, { children: /* @__PURE__ */ A.jsx(
    $F,
    {
      ...o,
      className: "textfield-password",
      type: l ? "text" : "password",
      autoComplete: "new-password",
      children: /* @__PURE__ */ A.jsx(
        "button",
        {
          type: "button",
          title: "Show or hide the password",
          className: "btn btn-circle btn-sm ring-info",
          onClick: () => c((d) => !d),
          children: /* @__PURE__ */ A.jsx(mr, { icon: l ? "ph:eye-slash" : "ph:eye-light" })
        }
      )
    }
  ) });
}, VF = (r) => {
  console.log(r);
}, BF = (r) => {
  console.log(r);
}, WF = ["Su", "Mo", "Tu", "We", "Th", "Fri", "Sa"], GF = ({
  defaultSelected: r,
  startDateRef: o,
  endDateRef: l,
  onClose: c
}) => {
  const [d, m] = En(
    (r == null ? void 0 : r.end) === void 0 ? fe() : r.end
  ), [v, E] = En(
    r === void 0 ? {
      start: null,
      end: null
    } : r
  ), w = d, C = w.clone().startOf("month"), T = w.clone().endOf("month"), R = [], O = C.day(), U = T.day();
  for (let L = O - 1; L >= 0; L--)
    R.push(C.clone().subtract(L, "days"));
  for (let L = C.clone().add(1, "day"); L.isSameOrBefore(T); L.add(1, "day"))
    R.push(L.clone());
  for (let L = 1; L <= 6 - U + 1; L++)
    R.push(T.clone().add(L, "days"));
  return /* @__PURE__ */ A.jsx("div", { className: "dropdown", children: /* @__PURE__ */ A.jsxs("div", { className: "container rounded-box shadow-md bg-base-200", children: [
    /* @__PURE__ */ A.jsxs("header", { className: "date-header", children: [
      /* @__PURE__ */ A.jsxs("div", { className: "date-header--actions", children: [
        /* @__PURE__ */ A.jsx(
          "button",
          {
            type: "button",
            className: "btn btn-icon btn-sm btn-square btn-neutral",
            onClick: () => {
              m(
                (L) => L.clone().subtract(1, "month")
              );
            },
            children: /* @__PURE__ */ A.jsx(mr, { icon: "ep:arrow-left-bold" })
          }
        ),
        /* @__PURE__ */ A.jsx("button", { type: "button", className: "btn", children: w.format("MMM, YYYY") }),
        /* @__PURE__ */ A.jsx(
          "button",
          {
            type: "button",
            className: "btn btn-icon btn-sm btn-square btn-neutral",
            onClick: () => {
              m(
                (L) => L.clone().add(1, "month")
              );
            },
            disabled: d.clone().add(1, "month").isSameOrAfter(fe()),
            children: /* @__PURE__ */ A.jsx(mr, { icon: "ep:arrow-left-bold", hFlip: !0 })
          }
        )
      ] }),
      /* @__PURE__ */ A.jsx("ul", { className: "date-weekdays", children: WF.map((L) => /* @__PURE__ */ A.jsx("li", { children: /* @__PURE__ */ A.jsx("span", { children: L }) }, L)) })
    ] }),
    /* @__PURE__ */ A.jsx("ul", { className: "days-container", children: R.map((L, H) => {
      var ae, te, V;
      let ne = "";
      const oe = (ae = v.start) != null && ae.startOf("day").isSame(L) ? "selected start" : (V = (te = v.end) == null ? void 0 : te.startOf("day")) != null && V.isSame(L) ? "selected end" : "", W = L.format("MM") !== w.format("MM") ? "not-current" : "", K = L.isBetween(
        v.start,
        v.end
      ) ? "between" : "";
      return ne += W + oe + K, /* @__PURE__ */ A.jsx("li", { children: /* @__PURE__ */ A.jsx(
        "button",
        {
          type: "button",
          onClick: () => {
            var Z;
            if (!(o.current === null || l.current === null)) {
              if (((Z = v.start) == null ? void 0 : Z.date()) === L.date()) {
                E({
                  start: null,
                  end: null
                }), o.current.value = "", l.current.value = "";
                return;
              }
              if (v.start === null)
                E((we) => ({
                  ...we,
                  start: L
                })), o.current.value = L.format("YYYY-MM-DD");
              else if (v.start !== null) {
                if (L.isBefore(v.start)) {
                  E((we) => ({
                    start: L,
                    end: we.start
                  })), o.current.value = L.format("YYYY-MM-DD"), l.current.value = v.start.format("YYYY-MM-DD");
                  return;
                }
                E((we) => ({
                  ...we,
                  end: L
                })), l.current.value = L.format("YYYY-MM-DD");
              }
            }
          },
          className: ne,
          disabled: L.isAfter(fe()),
          children: L.format("DD")
        }
      ) }, H);
    }) }),
    /* @__PURE__ */ A.jsx(
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
}, PP = ({
  defaultSelected: r,
  onSearch: o,
  children: l
}) => {
  const [c, d] = En(!1), m = mn(null), v = mn(null), E = {
    ref: m,
    type: "date",
    name: "start",
    onFocus: VF,
    onClick: () => {
      d((C) => !C);
    },
    autoComplete: "off",
    defaultValue: r ? r.start.format("YYYY-MM-DD") : ""
  }, w = {
    ref: v,
    type: "date",
    name: "end",
    onFocus: BF,
    onClick: () => {
      d((C) => !C);
    },
    autoComplete: "off",
    defaultValue: r != null && r.end ? r.end.format("YYYY-MM-DD") : ""
  };
  return /* @__PURE__ */ A.jsx(A.Fragment, { children: /* @__PURE__ */ A.jsxs(
    "form",
    {
      className: "date-range-picker",
      onSubmit: (C) => {
        C.preventDefault();
        const T = new FormData(C.target), R = Object.fromEntries(T.entries()), O = {
          start: fe(R.start, "YYYY-MM-DD"),
          end: fe(R.end, "YYYY-MM-DD")
        };
        o == null || o(O);
      },
      children: [
        /* @__PURE__ */ A.jsxs("div", { className: "group rounded-box", children: [
          l({ startDateProps: E, endDateProps: w }),
          /* @__PURE__ */ A.jsx("button", { className: "btn btn-primary ring-info", children: "Search" })
        ] }),
        c && /* @__PURE__ */ A.jsx(
          GF,
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
}, QF = (r, o, l, c, d, m) => {
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
      (C) => C.innerText.toLowerCase().includes(c.current.toLowerCase())
    );
    if (w === -1)
      return;
    d.current[w].focus(), l(w);
  }
}, qF = (r) => typeof r == "object" ? /* @__PURE__ */ A.jsx("span", { children: Object.values(r)[0] }) : /* @__PURE__ */ A.jsx("span", { children: r }), Bw = ({
  items: r,
  selected: o,
  currentSelected: l,
  selector: c,
  onChange: d,
  labelExtractor: m,
  required: v = !0,
  showQty: E = 4,
  style: w = {},
  name: C = "",
  position: T = "top",
  variant: R = "neutral",
  keyExtractor: O = qF
}) => {
  const [U, L] = En(!1), [H, ne] = En(
    r.findIndex(
      (V) => c ? V[c] === (l == null ? void 0 : l[c]) : V === l
    )
  );
  wd(() => {
    o && o !== H && ne(o);
  }, [o, H]);
  const [oe, W] = En(H), K = mn(null), ae = mn(""), te = mn([]);
  return /* @__PURE__ */ A.jsxs(
    "div",
    {
      className: `select ${U ? "shadow-md" : ""} ${T}`,
      onBlur: () => {
      },
      style: w,
      children: [
        /* @__PURE__ */ A.jsxs(
          "button",
          {
            type: "button",
            className: `btn btn-${R} btn-select ${U ? "active" : ""}`,
            onClick: () => {
              L((Z) => !Z);
              const V = l === void 0 ? 0 : H;
              W(V), setTimeout(() => {
                U || te.current[V].focus();
              }, 10);
            },
            children: [
              /* @__PURE__ */ A.jsx("span", { className: H === -1 ? "not-selected" : "", children: H === -1 ? "Selecione uma das opções" : (m == null ? void 0 : m(r[H])) ?? O(r[H]) }),
              /* @__PURE__ */ A.jsx(mr, { icon: "eva:arrow-down-fill", vFlip: U })
            ]
          }
        ),
        /* @__PURE__ */ A.jsx(
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
            name: C,
            ref: K,
            required: v
          }
        ),
        U && /* @__PURE__ */ A.jsx(
          "ul",
          {
            className: `select-items${r.length > 4 ? " custom-scroll " : " "}bg-${R} shadow-md`,
            style: { "--select-items": E },
            children: r.map((V, Z) => /* @__PURE__ */ A.jsx("li", { className: "item", children: /* @__PURE__ */ A.jsx(
              "button",
              {
                type: "button",
                className: `${Z === H ? "active" : ""}`,
                ref: (we) => te.current[Z] = we,
                tabIndex: 0,
                onClick: () => {
                  ne(Z), d !== void 0 && d(Z, r[Z]), K.current && c && (K.current.value = String(r[Z][c])), L(!1);
                },
                onMouseEnter: (we) => {
                  W(Z), we.target.focus();
                },
                onMouseLeave: () => {
                  W(H);
                },
                onKeyDown: (we) => QF(
                  we,
                  oe,
                  W,
                  ae,
                  te,
                  r.length
                ),
                children: O(V)
              }
            ) }, Z))
          }
        )
      ]
    }
  );
}, sT = (r, o, l, c, d, m) => {
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
      (C) => C.innerText.toLowerCase().includes(c.current.toLowerCase())
    );
    if (w === -1)
      return;
    d.current[w].focus(), l(w);
  }
}, Ww = (r, o, l) => {
  let c;
  return (...d) => {
    const v = () => {
      c = null, l || r.apply(void 0, d);
    }, E = l && !c;
    clearTimeout(c), c = setTimeout(v, o), E && r.apply(void 0, d);
  };
}, KF = [
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
], ZF = (r) => typeof r == "object" ? /* @__PURE__ */ A.jsx("span", { children: Object.values(r)[0] }) : /* @__PURE__ */ A.jsx("span", { children: r }), HP = ({
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
  variant: C = "neutral",
  keyExtractor: T = ZF
}) => {
  const [R, O] = En(!1), [U, L] = En(o ?? []), [H, ne] = En(
    "all"
  ), [oe, W] = En("");
  wd(() => {
    o && o !== U && L(o ?? []);
  }, [o, U]);
  const K = tu(() => {
    var ve;
    const de = [];
    for (let Ae = 0; Ae < r.length; Ae++) {
      if (!String(l ? (ve = r[Ae]) == null ? void 0 : ve[l] : r[Ae]).toLowerCase().includes(oe))
        continue;
      if (H === "all") {
        de.push(Ae);
        continue;
      }
      const Ze = U.includes(Ae);
      Ze && H === "selected" && de.push(Ae), !Ze && H === "not-selected" && de.push(Ae);
    }
    return de;
  }, [r, oe, l, H, U]), [ae, te] = En(0), V = mn(null), Z = mn(""), we = mn([]);
  return /* @__PURE__ */ A.jsxs(
    "div",
    {
      className: `select multiselect ${R ? "shadow-md" : ""} ${w}`,
      onBlur: () => {
      },
      style: E,
      children: [
        /* @__PURE__ */ A.jsxs(
          "button",
          {
            type: "button",
            className: `btn btn-${C} btn-select ${R ? "active" : ""}`,
            onClick: () => {
              O((de) => !de), te(0);
            },
            children: [
              /* @__PURE__ */ A.jsx("span", { className: U.length === 0 ? "not-selected" : "", children: U.length === 0 ? "Clique para selecionar" : (d == null ? void 0 : d(U)) ?? `${U.length} selecionados` }),
              /* @__PURE__ */ A.jsx(mr, { icon: "eva:arrow-down-fill", vFlip: R })
            ]
          }
        ),
        R && /* @__PURE__ */ A.jsxs(
          "ul",
          {
            className: `select-items${r.length > 4 ? " custom-scroll " : " "}bg-${C} shadow-md`,
            style: { "--select-items": v },
            children: [
              /* @__PURE__ */ A.jsx(
                "li",
                {
                  className: "group rounded-box",
                  style: { width: "fit-content", padding: "var(--spacing-xs)" },
                  children: KF.map((de) => /* @__PURE__ */ A.jsx(
                    "button",
                    {
                      className: `btn no-bounce btn-${de.mode === H ? "primary" : "neutral"} btn-sm`,
                      onClick: () => ne(de.mode),
                      children: de.label
                    },
                    de.mode
                  ))
                }
              ),
              /* @__PURE__ */ A.jsx("li", { className: "search-bar", children: /* @__PURE__ */ A.jsx(
                "input",
                {
                  className: "input",
                  type: "input",
                  placeholder: "Buscar...",
                  onChange: Ww((de) => {
                    W(de.target.value.toLowerCase());
                  }, 300)
                }
              ) }),
              /* @__PURE__ */ A.jsx("li", { className: "item", children: /* @__PURE__ */ A.jsxs(
                "button",
                {
                  type: "button",
                  ref: (de) => we.current[0] = de,
                  className: `${U.length === r.length ? "active" : ""}`,
                  onMouseEnter: (de) => {
                    te(0), de.target.focus();
                  },
                  onClick: () => {
                    m(U.length !== r.length), U.length === r.length ? L([]) : L(r.map((de, ve) => ve));
                  },
                  onKeyDown: (de) => sT(
                    de,
                    ae,
                    te,
                    Z,
                    we,
                    r.length
                  ),
                  tabIndex: 0,
                  children: [
                    /* @__PURE__ */ A.jsx(
                      "input",
                      {
                        type: "checkbox",
                        className: "checkbox checkbox-secondary",
                        onChange: () => {
                          m(U.length !== r.length), U.length === r.length ? L([]) : L(r.map((de, ve) => ve));
                        },
                        checked: U.length === r.length
                      }
                    ),
                    /* @__PURE__ */ A.jsx("span", { children: "Selecionar Tudo" })
                  ]
                }
              ) }),
              r.length === 0 || K().length === 0 && /* @__PURE__ */ A.jsx("li", { className: "item", style: { padding: "var(--spacing-xs)" }, children: /* @__PURE__ */ A.jsx("span", { children: "Nenhum item foi encontrado" }) }),
              r.map((de, ve) => {
                if (!K().includes(ve))
                  return null;
                const Ae = U.includes(ve);
                return /* @__PURE__ */ A.jsx("li", { className: "item", children: /* @__PURE__ */ A.jsxs(
                  "button",
                  {
                    type: "button",
                    className: `${Ae ? "active" : ""}`,
                    ref: (Qe) => we.current[ve + 1] = Qe,
                    tabIndex: 0,
                    onClick: () => {
                      L((Qe) => Ae ? Qe.filter((De) => De !== ve) : [...Qe, ve]), c !== void 0 && c(ve, r[ve]), V.current && l && (V.current.value = String(r[ve][l]));
                    },
                    onMouseEnter: (Qe) => {
                      te(ve), Qe.target.focus();
                    },
                    onMouseLeave: () => {
                      te(0);
                    },
                    onKeyDown: (Qe) => sT(
                      Qe,
                      ae,
                      te,
                      Z,
                      we,
                      K().length + 1
                    ),
                    children: [
                      /* @__PURE__ */ A.jsx(
                        "input",
                        {
                          type: "checkbox",
                          className: "checkbox checkbox-secondary",
                          checked: Ae ?? !1,
                          onChange: () => {
                            L((Qe) => Ae ? Qe.filter(
                              (De) => De !== ve
                            ) : [...Qe, ve]), c !== void 0 && c(ve, r[ve]), V.current && l && (V.current.value = String(r[ve][l]));
                          }
                        }
                      ),
                      T(de)
                    ]
                  }
                ) }, ve);
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
const XF = [
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
fe.locale("pt-br");
const JF = {
  206: "Almoço",
  205: "Banheiro"
}, e3 = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
], t3 = ({
  data: r,
  lastSevenDays: o
}) => /* @__PURE__ */ A.jsx("div", { className: "detailed-workday--period", children: o.map((l, c) => {
  const d = fe(l).format("DD [de] MMMM"), m = r.find(
    ({ date: w }) => fe(w).format("YYYY/MM/DD") === l.format("YYYY/MM/DD")
  );
  if (m === void 0)
    return /* @__PURE__ */ A.jsx("div", { className: "day", children: /* @__PURE__ */ A.jsx("span", { children: d }) }, c);
  const v = fe.utc(m.start).format("HH[h]mm"), E = fe.utc(m.finish).format("HH[h]mm");
  return /* @__PURE__ */ A.jsxs("div", { className: "day", children: [
    /* @__PURE__ */ A.jsx("span", { children: d }),
    /* @__PURE__ */ A.jsx("span", { className: "service", children: "Serviço" }),
    /* @__PURE__ */ A.jsxs("span", { className: "service-time", children: [
      v,
      " - ",
      E
    ] }),
    /* @__PURE__ */ A.jsxs("span", { className: "description", children: [
      m.description,
      "*"
    ] }),
    /* @__PURE__ */ A.jsx("div", { className: "breaks", children: m.breaks.map((w, C) => {
      const T = fe.utc(w.start).format("HH[h]mm"), R = fe.utc(w.finish).format("HH[h]mm");
      return /* @__PURE__ */ A.jsxs("div", { className: "break-item", children: [
        /* @__PURE__ */ A.jsx("span", { className: "break-item--label", children: JF[String(w.type)] }),
        /* @__PURE__ */ A.jsxs("span", { className: "break-item--content", children: [
          T,
          " - ",
          R
        ] })
      ] }, C);
    }) })
  ] }, c);
}) }), IP = () => {
  const r = Array.from({ length: 7 }).map(
    (o, l) => fe().clone().subtract(7 - l, "days")
  );
  return /* @__PURE__ */ A.jsxs("div", { className: "detailed-workday container", children: [
    /* @__PURE__ */ A.jsxs("header", { className: "detailed-workday--header container row spacing", children: [
      /* @__PURE__ */ A.jsxs("div", { className: "group rounded-box", children: [
        /* @__PURE__ */ A.jsx("label", { className: "bg-primary", children: "Filtro" }),
        /* @__PURE__ */ A.jsx(Bw, { items: ["Semana", "Mês", "Ano"] })
      ] }),
      /* @__PURE__ */ A.jsx("span", { children: "Intervalo de data: 08/08/2023 - 14/08/2023" })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "detailed-workday--container", children: [
      /* @__PURE__ */ A.jsxs("div", { className: "detailed-workday--item", children: [
        /* @__PURE__ */ A.jsx("span", { className: "", style: { width: "10rem" } }),
        /* @__PURE__ */ A.jsx("div", { className: "weekdays", children: r.map((o) => {
          const l = fe(o).day();
          return /* @__PURE__ */ A.jsx("span", { className: "", children: e3[l] });
        }) })
      ] }),
      XF.map((o, l) => /* @__PURE__ */ A.jsxs("div", { className: "detailed-workday--item", children: [
        /* @__PURE__ */ A.jsx("span", { children: o.agent.firstName }),
        /* @__PURE__ */ A.jsx(
          t3,
          {
            data: o.period,
            lastSevenDays: r
          },
          l
        )
      ] }, l))
    ] })
  ] });
}, YP = ({ logo: r, items: o }) => /* @__PURE__ */ A.jsxs("header", { className: "header", children: [
  r,
  o
] }), n3 = (r, o) => {
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
}, uT = (r, o, l, c, d, m = 0, v) => {
  r.current === null || o.current === null || (c.route === l && r.current.classList.add("active"), r.current.classList.contains("active") && c.route !== l && r.current.classList.remove("active"), v || (o.current.innerHTML = `
      <div className="sidebar-tooltip-container">
        <span>${c.label}</span>
      </div>
    `, o.current.style.opacity = "1", o.current.style.top = `calc(48px * ${d + m})`), r.current.style.top = `calc(48px * ${d + m})`);
}, r3 = (r, o, l, c, d, m, v) => {
  var E;
  {
    if (o.current === null || l.current === null)
      return;
    let w = -1;
    d || (l.current.innerHTML = "", l.current.style.opacity = "0"), m.forEach((C, T) => {
      r + C.route === c && (w = T, v !== null && T >= v && (w += m[v].submenus.length)), Object.hasOwnProperty.call(C, "submenus") && C.submenus.forEach((R, O) => {
        `${r}${C.route}${R.route}` === c && (v === T ? w = T + O + 1 : w = T);
      });
    }), (E = document.activeElement) == null || E.blur(), w > -1 && (o.current.style.top = `calc(48px * ${w})`, o.current.classList.add("active"));
  }
}, $P = ({
  data: r,
  itemLink: o,
  onSettings: l,
  onLogout: c,
  prefix: d = "",
  pathname: m = ""
}) => {
  const v = mn(null), E = mn(null), w = mn(null), C = mn(3), [T, R] = En(!1), [O, U] = En(null);
  return /* @__PURE__ */ A.jsxs(
    "aside",
    {
      className: "sidebar closed",
      ref: v,
      onKeyDown: (L) => n3(L, C),
      children: [
        /* @__PURE__ */ A.jsx(
          "button",
          {
            type: "button",
            className: "btn btn-square btn-ghost ring-info",
            onClick: () => {
              v.current !== null && (R((L) => !L), v.current.classList.toggle("closed"));
            },
            children: /* @__PURE__ */ A.jsx(mr, { icon: "jam:menu", height: 32 })
          }
        ),
        /* @__PURE__ */ A.jsxs(
          "ul",
          {
            className: "sidebar-container",
            onMouseLeave: () => r3(
              d,
              E,
              w,
              m,
              T,
              r,
              O
            ),
            children: [
              /* @__PURE__ */ A.jsx("span", { ref: E, className: "sidebar-selector" }),
              /* @__PURE__ */ A.jsx("div", { ref: w, className: "sidebar-tooltip" }),
              r.map((L, H) => /* @__PURE__ */ A.jsxs(UT, { children: [
                /* @__PURE__ */ A.jsxs(
                  "li",
                  {
                    className: "sidebar-item",
                    onMouseEnter: () => uT(
                      E,
                      w,
                      m,
                      L,
                      O !== null && H > O ? H + r[O].submenus.length : H,
                      0,
                      T
                    ),
                    onClick: () => {
                      L != null && L.submenus && U(
                        (ne) => ne === H ? null : H
                      );
                    },
                    children: [
                      /* @__PURE__ */ A.jsx("div", { className: "sidebar-item--icon", children: o({
                        icon: L.icon,
                        label: L.label,
                        route: L.route,
                        isOpen: T,
                        props: {
                          className: L != null && L.submenus ? "group" : "",
                          onClick: () => {
                            C.current = H + 2, E.current && E.current.classList.toggle("active");
                          }
                        }
                      }) }),
                      (L == null ? void 0 : L.submenus) && /* @__PURE__ */ A.jsxs("div", { className: "sidebar-item--submenu-handler", children: [
                        T && /* @__PURE__ */ A.jsx("span", { className: "sidebar-item--indicator", children: L.submenus.length }),
                        /* @__PURE__ */ A.jsx(
                          mr,
                          {
                            icon: "ic:round-arrow-right",
                            height: 24,
                            rotate: H === O ? 45 : 0
                          }
                        )
                      ] })
                    ]
                  }
                ),
                (L == null ? void 0 : L.submenus) && H === O && /* @__PURE__ */ A.jsx("div", { className: "sidebar-submenu", children: L.submenus.map((ne, oe) => /* @__PURE__ */ A.jsx(
                  "div",
                  {
                    className: "sidebar-submenu-item",
                    onMouseEnter: () => uT(
                      E,
                      w,
                      m,
                      ne,
                      H,
                      oe + 1,
                      T
                    ),
                    children: o({
                      icon: ne.icon,
                      label: ne.label,
                      route: `${L.route}${ne.route}`,
                      isOpen: T,
                      props: { className: "" }
                    })
                  },
                  ne.route
                )) })
              ] }, H))
            ]
          }
        ),
        l && /* @__PURE__ */ A.jsxs(
          "button",
          {
            type: "button",
            className: "sidebar-settings-action ring-info",
            onClick: l,
            children: [
              /* @__PURE__ */ A.jsx(mr, { icon: "ph:gear-six-fill", height: 16 }),
              T && /* @__PURE__ */ A.jsx("span", { children: "Settings" })
            ]
          }
        ),
        c && /* @__PURE__ */ A.jsxs(
          "button",
          {
            type: "button",
            className: "sidebar-exit-action ring-warning",
            onClick: c,
            children: [
              /* @__PURE__ */ A.jsx(mr, { icon: "mingcute:exit-fill", height: 16 }),
              T && /* @__PURE__ */ A.jsx("span", { children: "Logout" })
            ]
          }
        )
      ]
    }
  );
};
var sw = { exports: {} }, za = {}, hy = { exports: {} }, Px = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cT;
function a3() {
  return cT || (cT = 1, function(r) {
    function o(me, Pe) {
      var be = me.length;
      me.push(Pe);
      e:
        for (; 0 < be; ) {
          var wt = be - 1 >>> 1, Tt = me[wt];
          if (0 < d(Tt, Pe))
            me[wt] = Pe, me[be] = Tt, be = wt;
          else
            break e;
        }
    }
    function l(me) {
      return me.length === 0 ? null : me[0];
    }
    function c(me) {
      if (me.length === 0)
        return null;
      var Pe = me[0], be = me.pop();
      if (be !== Pe) {
        me[0] = be;
        e:
          for (var wt = 0, Tt = me.length, Vn = Tt >>> 1; wt < Vn; ) {
            var gr = 2 * (wt + 1) - 1, ai = me[gr], Cn = gr + 1, ha = me[Cn];
            if (0 > d(ai, be))
              Cn < Tt && 0 > d(ha, ai) ? (me[wt] = ha, me[Cn] = be, wt = Cn) : (me[wt] = ai, me[gr] = be, wt = gr);
            else if (Cn < Tt && 0 > d(ha, be))
              me[wt] = ha, me[Cn] = be, wt = Cn;
            else
              break e;
          }
      }
      return Pe;
    }
    function d(me, Pe) {
      var be = me.sortIndex - Pe.sortIndex;
      return be !== 0 ? be : me.id - Pe.id;
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
    var w = [], C = [], T = 1, R = null, O = 3, U = !1, L = !1, H = !1, ne = typeof setTimeout == "function" ? setTimeout : null, oe = typeof clearTimeout == "function" ? clearTimeout : null, W = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function K(me) {
      for (var Pe = l(C); Pe !== null; ) {
        if (Pe.callback === null)
          c(C);
        else if (Pe.startTime <= me)
          c(C), Pe.sortIndex = Pe.expirationTime, o(w, Pe);
        else
          break;
        Pe = l(C);
      }
    }
    function ae(me) {
      if (H = !1, K(me), !L)
        if (l(w) !== null)
          L = !0, st(te);
        else {
          var Pe = l(C);
          Pe !== null && Vt(ae, Pe.startTime - me);
        }
    }
    function te(me, Pe) {
      L = !1, H && (H = !1, oe(we), we = -1), U = !0;
      var be = O;
      try {
        for (K(Pe), R = l(w); R !== null && (!(R.expirationTime > Pe) || me && !Ae()); ) {
          var wt = R.callback;
          if (typeof wt == "function") {
            R.callback = null, O = R.priorityLevel;
            var Tt = wt(R.expirationTime <= Pe);
            Pe = r.unstable_now(), typeof Tt == "function" ? R.callback = Tt : R === l(w) && c(w), K(Pe);
          } else
            c(w);
          R = l(w);
        }
        if (R !== null)
          var Vn = !0;
        else {
          var gr = l(C);
          gr !== null && Vt(ae, gr.startTime - Pe), Vn = !1;
        }
        return Vn;
      } finally {
        R = null, O = be, U = !1;
      }
    }
    var V = !1, Z = null, we = -1, de = 5, ve = -1;
    function Ae() {
      return !(r.unstable_now() - ve < de);
    }
    function Qe() {
      if (Z !== null) {
        var me = r.unstable_now();
        ve = me;
        var Pe = !0;
        try {
          Pe = Z(!0, me);
        } finally {
          Pe ? De() : (V = !1, Z = null);
        }
      } else
        V = !1;
    }
    var De;
    if (typeof W == "function")
      De = function() {
        W(Qe);
      };
    else if (typeof MessageChannel < "u") {
      var Ze = new MessageChannel(), lt = Ze.port2;
      Ze.port1.onmessage = Qe, De = function() {
        lt.postMessage(null);
      };
    } else
      De = function() {
        ne(Qe, 0);
      };
    function st(me) {
      Z = me, V || (V = !0, De());
    }
    function Vt(me, Pe) {
      we = ne(function() {
        me(r.unstable_now());
      }, Pe);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(me) {
      me.callback = null;
    }, r.unstable_continueExecution = function() {
      L || U || (L = !0, st(te));
    }, r.unstable_forceFrameRate = function(me) {
      0 > me || 125 < me ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : de = 0 < me ? Math.floor(1e3 / me) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return O;
    }, r.unstable_getFirstCallbackNode = function() {
      return l(w);
    }, r.unstable_next = function(me) {
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
        return me();
      } finally {
        O = be;
      }
    }, r.unstable_pauseExecution = function() {
    }, r.unstable_requestPaint = function() {
    }, r.unstable_runWithPriority = function(me, Pe) {
      switch (me) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          me = 3;
      }
      var be = O;
      O = me;
      try {
        return Pe();
      } finally {
        O = be;
      }
    }, r.unstable_scheduleCallback = function(me, Pe, be) {
      var wt = r.unstable_now();
      switch (typeof be == "object" && be !== null ? (be = be.delay, be = typeof be == "number" && 0 < be ? wt + be : wt) : be = wt, me) {
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
      return Tt = be + Tt, me = { id: T++, callback: Pe, priorityLevel: me, startTime: be, expirationTime: Tt, sortIndex: -1 }, be > wt ? (me.sortIndex = be, o(C, me), l(w) === null && me === l(C) && (H ? (oe(we), we = -1) : H = !0, Vt(ae, be - wt))) : (me.sortIndex = Tt, o(w, me), L || U || (L = !0, st(te))), me;
    }, r.unstable_shouldYield = Ae, r.unstable_wrapCallback = function(me) {
      var Pe = O;
      return function() {
        var be = O;
        O = Pe;
        try {
          return me.apply(this, arguments);
        } finally {
          O = be;
        }
      };
    };
  }(Px)), Px;
}
var Hx = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fT;
function i3() {
  return fT || (fT = 1, function(r) {
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
        for (var Nt = ut; Nt > 0; ) {
          var en = Nt - 1 >>> 1, jn = Se[en];
          if (C(jn, He) > 0)
            Se[en] = He, Se[Nt] = jn, Nt = en;
          else
            return;
        }
      }
      function w(Se, He, ut) {
        for (var Nt = ut, en = Se.length, jn = en >>> 1; Nt < jn; ) {
          var dn = (Nt + 1) * 2 - 1, Lr = Se[dn], It = dn + 1, ea = Se[It];
          if (C(Lr, He) < 0)
            It < en && C(ea, Lr) < 0 ? (Se[Nt] = ea, Se[It] = He, Nt = It) : (Se[Nt] = Lr, Se[dn] = He, Nt = dn);
          else if (It < en && C(ea, He) < 0)
            Se[Nt] = ea, Se[It] = He, Nt = It;
          else
            return;
        }
      }
      function C(Se, He) {
        var ut = Se.sortIndex - He.sortIndex;
        return ut !== 0 ? ut : Se.id - He.id;
      }
      var T = 1, R = 2, O = 3, U = 4, L = 5;
      function H(Se, He) {
      }
      var ne = typeof performance == "object" && typeof performance.now == "function";
      if (ne) {
        var oe = performance;
        r.unstable_now = function() {
          return oe.now();
        };
      } else {
        var W = Date, K = W.now();
        r.unstable_now = function() {
          return W.now() - K;
        };
      }
      var ae = 1073741823, te = -1, V = 250, Z = 5e3, we = 1e4, de = ae, ve = [], Ae = [], Qe = 1, De = null, Ze = O, lt = !1, st = !1, Vt = !1, me = typeof setTimeout == "function" ? setTimeout : null, Pe = typeof clearTimeout == "function" ? clearTimeout : null, be = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function wt(Se) {
        for (var He = m(Ae); He !== null; ) {
          if (He.callback === null)
            v(Ae);
          else if (He.startTime <= Se)
            v(Ae), He.sortIndex = He.expirationTime, d(ve, He);
          else
            return;
          He = m(Ae);
        }
      }
      function Tt(Se) {
        if (Vt = !1, wt(Se), !st)
          if (m(ve) !== null)
            st = !0, Ya(Vn);
          else {
            var He = m(Ae);
            He !== null && gn(Tt, He.startTime - Se);
          }
      }
      function Vn(Se, He) {
        st = !1, Vt && (Vt = !1, Jr()), lt = !0;
        var ut = Ze;
        try {
          var Nt;
          if (!l)
            return gr(Se, He);
        } finally {
          De = null, Ze = ut, lt = !1;
        }
      }
      function gr(Se, He) {
        var ut = He;
        for (wt(ut), De = m(ve); De !== null && !o && !(De.expirationTime > ut && (!Se || Ha())); ) {
          var Nt = De.callback;
          if (typeof Nt == "function") {
            De.callback = null, Ze = De.priorityLevel;
            var en = De.expirationTime <= ut, jn = Nt(en);
            ut = r.unstable_now(), typeof jn == "function" ? De.callback = jn : De === m(ve) && v(ve), wt(ut);
          } else
            v(ve);
          De = m(ve);
        }
        if (De !== null)
          return !0;
        var dn = m(Ae);
        return dn !== null && gn(Tt, dn.startTime - ut), !1;
      }
      function ai(Se, He) {
        switch (Se) {
          case T:
          case R:
          case O:
          case U:
          case L:
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
          case T:
          case R:
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
        var Nt = r.unstable_now(), en;
        if (typeof ut == "object" && ut !== null) {
          var jn = ut.delay;
          typeof jn == "number" && jn > 0 ? en = Nt + jn : en = Nt;
        } else
          en = Nt;
        var dn;
        switch (Se) {
          case T:
            dn = te;
            break;
          case R:
            dn = V;
            break;
          case L:
            dn = de;
            break;
          case U:
            dn = we;
            break;
          case O:
          default:
            dn = Z;
            break;
        }
        var Lr = en + dn, It = {
          id: Qe++,
          callback: He,
          priorityLevel: Se,
          startTime: en,
          expirationTime: Lr,
          sortIndex: -1
        };
        return en > Nt ? (It.sortIndex = en, d(Ae, It), m(ve) === null && It === m(Ae) && (Vt ? Jr() : Vt = !0, gn(Tt, en - Nt))) : (It.sortIndex = Lr, d(ve, It), !st && !lt && (st = !0, Ya(Vn))), It;
      }
      function Mr() {
      }
      function ii() {
        !st && !lt && (st = !0, Ya(Vn));
      }
      function Nr() {
        return m(ve);
      }
      function va(Se) {
        Se.callback = null;
      }
      function Ln() {
        return Ze;
      }
      var ir = !1, Bn = null, or = -1, lr = c, ma = -1;
      function Ha() {
        var Se = r.unstable_now() - ma;
        return !(Se < lr);
      }
      function ki() {
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
          me(Ia, 0);
        };
      function Ya(Se) {
        Bn = Se, ir || (ir = !0, Zr());
      }
      function gn(Se, He) {
        or = me(function() {
          Se(r.unstable_now());
        }, He);
      }
      function Jr() {
        Pe(or), or = -1;
      }
      var oo = ki, $a = null;
      r.unstable_IdlePriority = L, r.unstable_ImmediatePriority = T, r.unstable_LowPriority = U, r.unstable_NormalPriority = O, r.unstable_Profiling = $a, r.unstable_UserBlockingPriority = R, r.unstable_cancelCallback = va, r.unstable_continueExecution = ii, r.unstable_forceFrameRate = oi, r.unstable_getCurrentPriorityLevel = Ln, r.unstable_getFirstCallbackNode = Nr, r.unstable_next = Cn, r.unstable_pauseExecution = Mr, r.unstable_requestPaint = oo, r.unstable_runWithPriority = ai, r.unstable_scheduleCallback = ar, r.unstable_shouldYield = Ha, r.unstable_wrapCallback = ha, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Hx)), Hx;
}
var dT;
function Wk() {
  return dT || (dT = 1, process.env.NODE_ENV === "production" ? hy.exports = a3() : hy.exports = i3()), hy.exports;
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
var pT;
function o3() {
  if (pT)
    return za;
  pT = 1;
  var r = Dr, o = Wk();
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
  var E = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), w = Object.prototype.hasOwnProperty, C = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, T = {}, R = {};
  function O(n) {
    return w.call(R, n) ? !0 : w.call(T, n) ? !1 : C.test(n) ? R[n] = !0 : (T[n] = !0, !1);
  }
  function U(n, a, u, p) {
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
  function L(n, a, u, p) {
    if (a === null || typeof a > "u" || U(n, a, u, p))
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
  function H(n, a, u, p, g, S, _) {
    this.acceptsBooleans = a === 2 || a === 3 || a === 4, this.attributeName = p, this.attributeNamespace = g, this.mustUseProperty = u, this.propertyName = n, this.type = a, this.sanitizeURL = S, this.removeEmptyString = _;
  }
  var ne = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    ne[n] = new H(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var a = n[0];
    ne[a] = new H(a, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    ne[n] = new H(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    ne[n] = new H(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    ne[n] = new H(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    ne[n] = new H(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    ne[n] = new H(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    ne[n] = new H(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    ne[n] = new H(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var oe = /[\-:]([a-z])/g;
  function W(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var a = n.replace(
      oe,
      W
    );
    ne[a] = new H(a, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var a = n.replace(oe, W);
    ne[a] = new H(a, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var a = n.replace(oe, W);
    ne[a] = new H(a, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    ne[n] = new H(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), ne.xlinkHref = new H("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    ne[n] = new H(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function K(n, a, u, p) {
    var g = ne.hasOwnProperty(a) ? ne[a] : null;
    (g !== null ? g.type !== 0 : p || !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (L(a, u, g, p) && (u = null), p || g === null ? O(a) && (u === null ? n.removeAttribute(a) : n.setAttribute(a, "" + u)) : g.mustUseProperty ? n[g.propertyName] = u === null ? g.type === 3 ? !1 : "" : u : (a = g.attributeName, p = g.attributeNamespace, u === null ? n.removeAttribute(a) : (g = g.type, u = g === 3 || g === 4 && u === !0 ? "" : "" + u, p ? n.setAttributeNS(p, a, u) : n.setAttribute(a, u))));
  }
  var ae = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, te = Symbol.for("react.element"), V = Symbol.for("react.portal"), Z = Symbol.for("react.fragment"), we = Symbol.for("react.strict_mode"), de = Symbol.for("react.profiler"), ve = Symbol.for("react.provider"), Ae = Symbol.for("react.context"), Qe = Symbol.for("react.forward_ref"), De = Symbol.for("react.suspense"), Ze = Symbol.for("react.suspense_list"), lt = Symbol.for("react.memo"), st = Symbol.for("react.lazy"), Vt = Symbol.for("react.offscreen"), me = Symbol.iterator;
  function Pe(n) {
    return n === null || typeof n != "object" ? null : (n = me && n[me] || n["@@iterator"], typeof n == "function" ? n : null);
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
          } catch (q) {
            var p = q;
          }
          Reflect.construct(n, [], a);
        } else {
          try {
            a.call();
          } catch (q) {
            p = q;
          }
          n.call(a.prototype);
        }
      else {
        try {
          throw Error();
        } catch (q) {
          p = q;
        }
        n();
      }
    } catch (q) {
      if (q && p && typeof q.stack == "string") {
        for (var g = q.stack.split(`
`), S = p.stack.split(`
`), _ = g.length - 1, M = S.length - 1; 1 <= _ && 0 <= M && g[_] !== S[M]; )
          M--;
        for (; 1 <= _ && 0 <= M; _--, M--)
          if (g[_] !== S[M]) {
            if (_ !== 1 || M !== 1)
              do
                if (_--, M--, 0 > M || g[_] !== S[M]) {
                  var j = `
` + g[_].replace(" at new ", " at ");
                  return n.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", n.displayName)), j;
                }
              while (1 <= _ && 0 <= M);
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
      case Z:
        return "Fragment";
      case V:
        return "Portal";
      case de:
        return "Profiler";
      case we:
        return "StrictMode";
      case De:
        return "Suspense";
      case Ze:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case Ae:
          return (n.displayName || "Context") + ".Consumer";
        case ve:
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
      }, set: function(_) {
        p = "" + _, S.call(this, _);
      } }), Object.defineProperty(n, a, { enumerable: u.enumerable }), { getValue: function() {
        return p;
      }, setValue: function(_) {
        p = "" + _;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[a];
      } };
    }
  }
  function Nr(n) {
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
  function Ln(n) {
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
    a = a.checked, a != null && K(n, "checked", a, !1);
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
    (a !== "number" || Ln(n.ownerDocument) !== n) && (u == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + u && (n.defaultValue = "" + u));
  }
  var ki = Array.isArray;
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
        if (ki(u)) {
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
  function gn(n, a) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Ya(a) : n === "http://www.w3.org/2000/svg" && a === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Jr, oo = function(n) {
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
  function Nt(n, a) {
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
  var Lr = null;
  function It(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var ea = null, zt = null, Yt = null;
  function Kl(n) {
    if (n = _u(n)) {
      if (typeof ea != "function")
        throw Error(l(280));
      var a = n.stateNode;
      a && (a = Ie(a), ea(n.stateNode, n.type, a));
    }
  }
  function Ko(n) {
    zt ? Yt ? Yt.push(n) : Yt = [n] : zt = n;
  }
  function Zl() {
    if (zt) {
      var n = zt, a = Yt;
      if (Yt = zt = null, Kl(n), a)
        for (n = 0; n < a.length; n++)
          Kl(a[n]);
    }
  }
  function ru(n, a) {
    return n(a);
  }
  function yc() {
  }
  var Zo = !1;
  function Xl(n, a, u) {
    if (Zo)
      return n(a, u);
    Zo = !0;
    try {
      return ru(n, a, u);
    } finally {
      Zo = !1, (zt !== null || Yt !== null) && (yc(), Zl());
    }
  }
  function Xo(n, a) {
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
  var Jl = !1;
  if (E)
    try {
      var si = {};
      Object.defineProperty(si, "passive", { get: function() {
        Jl = !0;
      } }), window.addEventListener("test", si, si), window.removeEventListener("test", si, si);
    } catch {
      Jl = !1;
    }
  function lo(n, a, u, p, g, S, _, M, j) {
    var q = Array.prototype.slice.call(arguments, 3);
    try {
      a.apply(u, q);
    } catch (le) {
      this.onError(le);
    }
  }
  var ta = !1, Va = null, so = !1, N = null, se = { onError: function(n) {
    ta = !0, Va = n;
  } };
  function xe(n, a, u, p, g, S, _, M, j) {
    ta = !1, Va = null, lo.apply(se, arguments);
  }
  function $e(n, a, u, p, g, S, _, M, j) {
    if (xe.apply(this, arguments), ta) {
      if (ta) {
        var q = Va;
        ta = !1, Va = null;
      } else
        throw Error(l(198));
      so || (so = !0, N = q);
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
        for (var _ = !1, M = g.child; M; ) {
          if (M === u) {
            _ = !0, u = g, p = S;
            break;
          }
          if (M === p) {
            _ = !0, p = g, u = S;
            break;
          }
          M = M.sibling;
        }
        if (!_) {
          for (M = S.child; M; ) {
            if (M === u) {
              _ = !0, u = S, p = g;
              break;
            }
            if (M === p) {
              _ = !0, p = S, u = g;
              break;
            }
            M = M.sibling;
          }
          if (!_)
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
  var Zt = o.unstable_scheduleCallback, yr = o.unstable_cancelCallback, uo = o.unstable_shouldYield, Sc = o.unstable_requestPaint, bt = o.unstable_now, e0 = o.unstable_getCurrentPriorityLevel, Ri = o.unstable_ImmediatePriority, dt = o.unstable_UserBlockingPriority, co = o.unstable_NormalPriority, fv = o.unstable_LowPriority, Cd = o.unstable_IdlePriority, au = null, Ba = null;
  function dv(n) {
    if (Ba && typeof Ba.onCommitFiberRoot == "function")
      try {
        Ba.onCommitFiberRoot(au, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var ga = Math.clz32 ? Math.clz32 : t0, pv = Math.log, hv = Math.LN2;
  function t0(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (pv(n) / hv | 0) | 0;
  }
  var xc = 64, es = 4194304;
  function Jo(n) {
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
    var p = 0, g = n.suspendedLanes, S = n.pingedLanes, _ = u & 268435455;
    if (_ !== 0) {
      var M = _ & ~g;
      M !== 0 ? p = Jo(M) : (S &= _, S !== 0 && (p = Jo(S)));
    } else
      _ = u & ~g, _ !== 0 ? p = Jo(_) : S !== 0 && (p = Jo(S));
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
      var _ = 31 - ga(S), M = 1 << _, j = g[_];
      j === -1 ? (!(M & u) || M & p) && (g[_] = _d(M, a)) : j <= a && (n.expiredLanes |= M), S &= ~M;
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
  function el(n, a, u) {
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
  function iu(n, a) {
    var u = n.entangledLanes |= a;
    for (n = n.entanglements; u; ) {
      var p = 31 - ga(u), g = 1 << p;
      g & a | n[p] & a && (n[p] |= a), u &= ~g;
    }
  }
  var Lt = 0;
  function Rd(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var vv, Ec, Ft, mv, Dd, nt = !1, ou = [], yn = null, ya = null, Sa = null, lu = /* @__PURE__ */ new Map(), _n = /* @__PURE__ */ new Map(), jt = [], r0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ga(n, a) {
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
        Sa = null;
        break;
      case "pointerover":
      case "pointerout":
        lu.delete(a.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        _n.delete(a.pointerId);
    }
  }
  function sr(n, a, u, p, g, S) {
    return n === null || n.nativeEvent !== S ? (n = { blockedOn: a, domEventName: u, eventSystemFlags: p, nativeEvent: S, targetContainers: [g] }, a !== null && (a = _u(a), a !== null && Ec(a)), n) : (n.eventSystemFlags |= p, a = n.targetContainers, g !== null && a.indexOf(g) === -1 && a.push(g), n);
  }
  function fo(n, a, u, p, g) {
    switch (a) {
      case "focusin":
        return yn = sr(yn, n, a, u, p, g), !0;
      case "dragenter":
        return ya = sr(ya, n, a, u, p, g), !0;
      case "mouseover":
        return Sa = sr(Sa, n, a, u, p, g), !0;
      case "pointerover":
        var S = g.pointerId;
        return lu.set(S, sr(lu.get(S) || null, n, a, u, p, g)), !0;
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
  function ts(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var a = n.targetContainers; 0 < a.length; ) {
      var u = Tc(n.domEventName, n.eventSystemFlags, a[0], n.nativeEvent);
      if (u === null) {
        u = n.nativeEvent;
        var p = new u.constructor(u.type, u);
        Lr = p, u.target.dispatchEvent(p), Lr = null;
      } else
        return a = _u(u), a !== null && Ec(a), n.blockedOn = u, !1;
      a.shift();
    }
    return !0;
  }
  function Od(n, a, u) {
    ts(n) && u.delete(a);
  }
  function yv() {
    nt = !1, yn !== null && ts(yn) && (yn = null), ya !== null && ts(ya) && (ya = null), Sa !== null && ts(Sa) && (Sa = null), lu.forEach(Od), _n.forEach(Od);
  }
  function su(n, a) {
    n.blockedOn === a && (n.blockedOn = null, nt || (nt = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, yv)));
  }
  function uu(n) {
    function a(g) {
      return su(g, n);
    }
    if (0 < ou.length) {
      su(ou[0], n);
      for (var u = 1; u < ou.length; u++) {
        var p = ou[u];
        p.blockedOn === n && (p.blockedOn = null);
      }
    }
    for (yn !== null && su(yn, n), ya !== null && su(ya, n), Sa !== null && su(Sa, n), lu.forEach(a), _n.forEach(a), u = 0; u < jt.length; u++)
      p = jt[u], p.blockedOn === n && (p.blockedOn = null);
    for (; 0 < jt.length && (u = jt[0], u.blockedOn === null); )
      gv(u), u.blockedOn === null && jt.shift();
  }
  var ns = ae.ReactCurrentBatchConfig, tl = !0;
  function Sv(n, a, u, p) {
    var g = Lt, S = ns.transition;
    ns.transition = null;
    try {
      Lt = 1, _c(n, a, u, p);
    } finally {
      Lt = g, ns.transition = S;
    }
  }
  function Cc(n, a, u, p) {
    var g = Lt, S = ns.transition;
    ns.transition = null;
    try {
      Lt = 4, _c(n, a, u, p);
    } finally {
      Lt = g, ns.transition = S;
    }
  }
  function _c(n, a, u, p) {
    if (tl) {
      var g = Tc(n, a, u, p);
      if (g === null)
        Fc(n, a, p, cu, u), Ga(n, p);
      else if (fo(g, n, a, u, p))
        p.stopPropagation();
      else if (Ga(n, p), a & 4 && -1 < r0.indexOf(n)) {
        for (; g !== null; ) {
          var S = _u(g);
          if (S !== null && vv(S), S = Tc(n, a, u, p), S === null && Fc(n, a, p, cu, u), S === g)
            break;
          g = S;
        }
        g !== null && p.stopPropagation();
      } else
        Fc(n, a, p, null, u);
    }
  }
  var cu = null;
  function Tc(n, a, u, p) {
    if (cu = null, n = It(p), n = wa(n), n !== null)
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
    return cu = n, null;
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
          case Ri:
            return 1;
          case dt:
            return 4;
          case co:
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
  var Di = null, fu = null, du = null;
  function Nd() {
    if (du)
      return du;
    var n, a = fu, u = a.length, p, g = "value" in Di ? Di.value : Di.textContent, S = g.length;
    for (n = 0; n < u && a[n] === g[n]; n++)
      ;
    var _ = u - n;
    for (p = 1; p <= _ && a[u - p] === g[S - p]; p++)
      ;
    return du = g.slice(n, 1 < p ? 1 - p : void 0);
  }
  function rs(n) {
    var a = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && a === 13 && (n = 13)) : n = a, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function pu() {
    return !0;
  }
  function xv() {
    return !1;
  }
  function na(n) {
    function a(u, p, g, S, _) {
      this._reactName = u, this._targetInst = g, this.type = p, this.nativeEvent = S, this.target = _, this.currentTarget = null;
      for (var M in n)
        n.hasOwnProperty(M) && (u = n[M], this[M] = u ? u(S) : S[M]);
      return this.isDefaultPrevented = (S.defaultPrevented != null ? S.defaultPrevented : S.returnValue === !1) ? pu : xv, this.isPropagationStopped = xv, this;
    }
    return be(a.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var u = this.nativeEvent;
      u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = pu);
    }, stopPropagation: function() {
      var u = this.nativeEvent;
      u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = pu);
    }, persist: function() {
    }, isPersistent: pu }), a;
  }
  var po = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, kc = na(po), as = be({}, po, { view: 0, detail: 0 }), wv = na(as), Rc, Ld, hu, An = be({}, as, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== hu && (hu && n.type === "mousemove" ? (Rc = n.screenX - hu.screenX, Ld = n.screenY - hu.screenY) : Ld = Rc = 0, hu = n), Rc);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Ld;
  } }), Dc = na(An), bv = be({}, An, { dataTransfer: 0 }), Ev = na(bv), a0 = be({}, as, { relatedTarget: 0 }), ho = na(a0), jd = be({}, po, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Cv = na(jd), i0 = be({}, po, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), o0 = na(i0), l0 = be({}, po, { data: 0 }), Ud = na(l0), Ad = {
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
  var Oi = be({}, as, { key: function(n) {
    if (n.key) {
      var a = Ad[n.key] || n.key;
      if (a !== "Unidentified")
        return a;
    }
    return n.type === "keypress" ? (n = rs(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? _v[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(n) {
    return n.type === "keypress" ? rs(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? rs(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), s0 = na(Oi), Fd = be({}, An, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Oc = na(Fd), Pd = be({}, as, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), u0 = na(Pd), Mc = be({}, po, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Rv = na(Mc), jr = be({}, An, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Mi = na(jr), Sn = [9, 13, 27, 32], Qa = E && "CompositionEvent" in window, nl = null;
  E && "documentMode" in document && (nl = document.documentMode);
  var Nc = E && "TextEvent" in window && !nl, Dv = E && (!Qa || nl && 8 < nl && 11 >= nl), is = String.fromCharCode(32), Ov = !1;
  function Mv(n, a) {
    switch (n) {
      case "keyup":
        return Sn.indexOf(a.keyCode) !== -1;
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
  function Lc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var os = !1;
  function c0(n, a) {
    switch (n) {
      case "compositionend":
        return Lc(a);
      case "keypress":
        return a.which !== 32 ? null : (Ov = !0, is);
      case "textInput":
        return n = a.data, n === is && Ov ? null : n;
      default:
        return null;
    }
  }
  function f0(n, a) {
    if (os)
      return n === "compositionend" || !Qa && Mv(n, a) ? (n = Nd(), du = fu = Di = null, os = !1, n) : null;
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
  var Nv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Lv(n) {
    var a = n && n.nodeName && n.nodeName.toLowerCase();
    return a === "input" ? !!Nv[n.type] : a === "textarea";
  }
  function jv(n, a, u, p) {
    Ko(p), a = bu(a, "onChange"), 0 < a.length && (u = new kc("onChange", "change", null, u, p), n.push({ event: u, listeners: a }));
  }
  var vu = null, ls = null;
  function ss(n) {
    zc(n, 0);
  }
  function us(n) {
    var a = fs(n);
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
    vu && (vu.detachEvent("onpropertychange", Fv), ls = vu = null);
  }
  function Fv(n) {
    if (n.propertyName === "value" && us(ls)) {
      var a = [];
      jv(a, ls, n, It(n)), Xl(ss, a);
    }
  }
  function d0(n, a, u) {
    n === "focusin" ? (zv(), vu = a, ls = u, vu.attachEvent("onpropertychange", Fv)) : n === "focusout" && zv();
  }
  function p0(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return us(ls);
  }
  function h0(n, a) {
    if (n === "click")
      return us(a);
  }
  function Pv(n, a) {
    if (n === "input" || n === "change")
      return us(a);
  }
  function v0(n, a) {
    return n === a && (n !== 0 || 1 / n === 1 / a) || n !== n && a !== a;
  }
  var xa = typeof Object.is == "function" ? Object.is : v0;
  function mu(n, a) {
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
    for (var n = window, a = Ln(); a instanceof n.HTMLIFrameElement; ) {
      try {
        var u = typeof a.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u)
        n = a.contentWindow;
      else
        break;
      a = Ln(n.document);
    }
    return a;
  }
  function Ni(n) {
    var a = n && n.nodeName && n.nodeName.toLowerCase();
    return a && (a === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || a === "textarea" || n.contentEditable === "true");
  }
  function Uc(n) {
    var a = jc(), u = n.focusedElem, p = n.selectionRange;
    if (a !== u && u && u.ownerDocument && Yv(u.ownerDocument.documentElement, u)) {
      if (p !== null && Ni(u)) {
        if (a = p.start, n = p.end, n === void 0 && (n = a), "selectionStart" in u)
          u.selectionStart = a, u.selectionEnd = Math.min(n, u.value.length);
        else if (n = (a = u.ownerDocument || document) && a.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var g = u.textContent.length, S = Math.min(p.start, g);
          p = p.end === void 0 ? S : Math.min(p.end, g), !n.extend && S > p && (g = p, p = S, S = g), g = Iv(u, S);
          var _ = Iv(
            u,
            p
          );
          g && _ && (n.rangeCount !== 1 || n.anchorNode !== g.node || n.anchorOffset !== g.offset || n.focusNode !== _.node || n.focusOffset !== _.offset) && (a = a.createRange(), a.setStart(g.node, g.offset), n.removeAllRanges(), S > p ? (n.addRange(a), n.extend(_.node, _.offset)) : (a.setEnd(_.node, _.offset), n.addRange(a)));
        }
      }
      for (a = [], n = u; n = n.parentNode; )
        n.nodeType === 1 && a.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof u.focus == "function" && u.focus(), u = 0; u < a.length; u++)
        n = a[u], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var $v = E && "documentMode" in document && 11 >= document.documentMode, qa = null, $d = null, gu = null, Vd = !1;
  function Vv(n, a, u) {
    var p = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Vd || qa == null || qa !== Ln(p) || (p = qa, "selectionStart" in p && Ni(p) ? p = { start: p.selectionStart, end: p.selectionEnd } : (p = (p.ownerDocument && p.ownerDocument.defaultView || window).getSelection(), p = { anchorNode: p.anchorNode, anchorOffset: p.anchorOffset, focusNode: p.focusNode, focusOffset: p.focusOffset }), gu && mu(gu, p) || (gu = p, p = bu($d, "onSelect"), 0 < p.length && (a = new kc("onSelect", "select", null, a, u), n.push({ event: a, listeners: p }), a.target = qa)));
  }
  function Ac(n, a) {
    var u = {};
    return u[n.toLowerCase()] = a.toLowerCase(), u["Webkit" + n] = "webkit" + a, u["Moz" + n] = "moz" + a, u;
  }
  var rl = { animationend: Ac("Animation", "AnimationEnd"), animationiteration: Ac("Animation", "AnimationIteration"), animationstart: Ac("Animation", "AnimationStart"), transitionend: Ac("Transition", "TransitionEnd") }, Bd = {}, Wd = {};
  E && (Wd = document.createElement("div").style, "AnimationEvent" in window || (delete rl.animationend.animation, delete rl.animationiteration.animation, delete rl.animationstart.animation), "TransitionEvent" in window || delete rl.transitionend.transition);
  function zn(n) {
    if (Bd[n])
      return Bd[n];
    if (!rl[n])
      return n;
    var a = rl[n], u;
    for (u in a)
      if (a.hasOwnProperty(u) && u in Wd)
        return Bd[n] = a[u];
    return n;
  }
  var Gd = zn("animationend"), Bv = zn("animationiteration"), Wv = zn("animationstart"), Gv = zn("transitionend"), Qv = /* @__PURE__ */ new Map(), qv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Li(n, a) {
    Qv.set(n, a), m(a, [n]);
  }
  for (var yu = 0; yu < qv.length; yu++) {
    var al = qv[yu], m0 = al.toLowerCase(), Su = al[0].toUpperCase() + al.slice(1);
    Li(m0, "on" + Su);
  }
  Li(Gd, "onAnimationEnd"), Li(Bv, "onAnimationIteration"), Li(Wv, "onAnimationStart"), Li("dblclick", "onDoubleClick"), Li("focusin", "onFocus"), Li("focusout", "onBlur"), Li(Gv, "onTransitionEnd"), v("onMouseEnter", ["mouseout", "mouseover"]), v("onMouseLeave", ["mouseout", "mouseover"]), v("onPointerEnter", ["pointerout", "pointerover"]), v("onPointerLeave", ["pointerout", "pointerover"]), m("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), m("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), m("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), m("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), m("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), m("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var xu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), g0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(xu));
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
          for (var _ = p.length - 1; 0 <= _; _--) {
            var M = p[_], j = M.instance, q = M.currentTarget;
            if (M = M.listener, j !== S && g.isPropagationStopped())
              break e;
            Kv(g, M, q), S = j;
          }
        else
          for (_ = 0; _ < p.length; _++) {
            if (M = p[_], j = M.instance, q = M.currentTarget, M = M.listener, j !== S && g.isPropagationStopped())
              break e;
            Kv(g, M, q), S = j;
          }
      }
    }
    if (so)
      throw n = N, so = !1, N = null, n;
  }
  function Pt(n, a) {
    var u = a[ep];
    u === void 0 && (u = a[ep] = /* @__PURE__ */ new Set());
    var p = n + "__bubble";
    u.has(p) || (Zv(a, n, 2, !1), u.add(p));
  }
  function vo(n, a, u) {
    var p = 0;
    a && (p |= 4), Zv(u, n, p, a);
  }
  var ji = "_reactListening" + Math.random().toString(36).slice(2);
  function cs(n) {
    if (!n[ji]) {
      n[ji] = !0, c.forEach(function(u) {
        u !== "selectionchange" && (g0.has(u) || vo(u, !1, n), vo(u, !0, n));
      });
      var a = n.nodeType === 9 ? n : n.ownerDocument;
      a === null || a[ji] || (a[ji] = !0, vo("selectionchange", !1, a));
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
    u = g.bind(null, a, u, n), g = void 0, !Jl || a !== "touchstart" && a !== "touchmove" && a !== "wheel" || (g = !0), p ? g !== void 0 ? n.addEventListener(a, u, { capture: !0, passive: g }) : n.addEventListener(a, u, !0) : g !== void 0 ? n.addEventListener(a, u, { passive: g }) : n.addEventListener(a, u, !1);
  }
  function Fc(n, a, u, p, g) {
    var S = p;
    if (!(a & 1) && !(a & 2) && p !== null)
      e:
        for (; ; ) {
          if (p === null)
            return;
          var _ = p.tag;
          if (_ === 3 || _ === 4) {
            var M = p.stateNode.containerInfo;
            if (M === g || M.nodeType === 8 && M.parentNode === g)
              break;
            if (_ === 4)
              for (_ = p.return; _ !== null; ) {
                var j = _.tag;
                if ((j === 3 || j === 4) && (j = _.stateNode.containerInfo, j === g || j.nodeType === 8 && j.parentNode === g))
                  return;
                _ = _.return;
              }
            for (; M !== null; ) {
              if (_ = wa(M), _ === null)
                return;
              if (j = _.tag, j === 5 || j === 6) {
                p = S = _;
                continue e;
              }
              M = M.parentNode;
            }
          }
          p = p.return;
        }
    Xl(function() {
      var q = S, le = It(u), ue = [];
      e: {
        var ie = Qv.get(n);
        if (ie !== void 0) {
          var Ce = kc, Me = n;
          switch (n) {
            case "keypress":
              if (rs(u) === 0)
                break e;
            case "keydown":
            case "keyup":
              Ce = s0;
              break;
            case "focusin":
              Me = "focus", Ce = ho;
              break;
            case "focusout":
              Me = "blur", Ce = ho;
              break;
            case "beforeblur":
            case "afterblur":
              Ce = ho;
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
              Ce = Mi;
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
          var je = (a & 4) !== 0, hn = !je && n === "scroll", I = je ? ie !== null ? ie + "Capture" : null : ie;
          je = [];
          for (var F = q, B; F !== null; ) {
            B = F;
            var he = B.stateNode;
            if (B.tag === 5 && he !== null && (B = he, I !== null && (he = Xo(F, I), he != null && je.push(wu(F, he, B)))), hn)
              break;
            F = F.return;
          }
          0 < je.length && (ie = new Ce(ie, Me, null, u, le), ue.push({ event: ie, listeners: je }));
        }
      }
      if (!(a & 7)) {
        e: {
          if (ie = n === "mouseover" || n === "pointerover", Ce = n === "mouseout" || n === "pointerout", ie && u !== Lr && (Me = u.relatedTarget || u.fromElement) && (wa(Me) || Me[Ui]))
            break e;
          if ((Ce || ie) && (ie = le.window === le ? le : (ie = le.ownerDocument) ? ie.defaultView || ie.parentWindow : window, Ce ? (Me = u.relatedTarget || u.toElement, Ce = q, Me = Me ? wa(Me) : null, Me !== null && (hn = it(Me), Me !== hn || Me.tag !== 5 && Me.tag !== 6) && (Me = null)) : (Ce = null, Me = q), Ce !== Me)) {
            if (je = Dc, he = "onMouseLeave", I = "onMouseEnter", F = "mouse", (n === "pointerout" || n === "pointerover") && (je = Oc, he = "onPointerLeave", I = "onPointerEnter", F = "pointer"), hn = Ce == null ? ie : fs(Ce), B = Me == null ? ie : fs(Me), ie = new je(he, F + "leave", Ce, u, le), ie.target = hn, ie.relatedTarget = B, he = null, wa(le) === q && (je = new je(I, F + "enter", Me, u, le), je.target = B, je.relatedTarget = hn, he = je), hn = he, Ce && Me)
              t: {
                for (je = Ce, I = Me, F = 0, B = je; B; B = il(B))
                  F++;
                for (B = 0, he = I; he; he = il(he))
                  B++;
                for (; 0 < F - B; )
                  je = il(je), F--;
                for (; 0 < B - F; )
                  I = il(I), B--;
                for (; F--; ) {
                  if (je === I || I !== null && je === I.alternate)
                    break t;
                  je = il(je), I = il(I);
                }
                je = null;
              }
            else
              je = null;
            Ce !== null && Qd(ue, ie, Ce, je, !1), Me !== null && hn !== null && Qd(ue, hn, Me, je, !0);
          }
        }
        e: {
          if (ie = q ? fs(q) : window, Ce = ie.nodeName && ie.nodeName.toLowerCase(), Ce === "select" || Ce === "input" && ie.type === "file")
            var Ue = Uv;
          else if (Lv(ie))
            if (Hd)
              Ue = Pv;
            else {
              Ue = p0;
              var Ne = d0;
            }
          else
            (Ce = ie.nodeName) && Ce.toLowerCase() === "input" && (ie.type === "checkbox" || ie.type === "radio") && (Ue = h0);
          if (Ue && (Ue = Ue(n, q))) {
            jv(ue, Ue, u, le);
            break e;
          }
          Ne && Ne(n, ie, q), n === "focusout" && (Ne = ie._wrapperState) && Ne.controlled && ie.type === "number" && Ha(ie, "number", ie.value);
        }
        switch (Ne = q ? fs(q) : window, n) {
          case "focusin":
            (Lv(Ne) || Ne.contentEditable === "true") && (qa = Ne, $d = q, gu = null);
            break;
          case "focusout":
            gu = $d = qa = null;
            break;
          case "mousedown":
            Vd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Vd = !1, Vv(ue, u, le);
            break;
          case "selectionchange":
            if ($v)
              break;
          case "keydown":
          case "keyup":
            Vv(ue, u, le);
        }
        var Fe;
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
          os ? Mv(n, u) && (Je = "onCompositionEnd") : n === "keydown" && u.keyCode === 229 && (Je = "onCompositionStart");
        Je && (Dv && u.locale !== "ko" && (os || Je !== "onCompositionStart" ? Je === "onCompositionEnd" && os && (Fe = Nd()) : (Di = le, fu = "value" in Di ? Di.value : Di.textContent, os = !0)), Ne = bu(q, Je), 0 < Ne.length && (Je = new Ud(Je, n, null, u, le), ue.push({ event: Je, listeners: Ne }), Fe ? Je.data = Fe : (Fe = Lc(u), Fe !== null && (Je.data = Fe)))), (Fe = Nc ? c0(n, u) : f0(n, u)) && (q = bu(q, "onBeforeInput"), 0 < q.length && (le = new Ud("onBeforeInput", "beforeinput", null, u, le), ue.push({ event: le, listeners: q }), le.data = Fe));
      }
      zc(ue, a);
    });
  }
  function wu(n, a, u) {
    return { instance: n, listener: a, currentTarget: u };
  }
  function bu(n, a) {
    for (var u = a + "Capture", p = []; n !== null; ) {
      var g = n, S = g.stateNode;
      g.tag === 5 && S !== null && (g = S, S = Xo(n, u), S != null && p.unshift(wu(n, S, g)), S = Xo(n, a), S != null && p.push(wu(n, S, g))), n = n.return;
    }
    return p;
  }
  function il(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Qd(n, a, u, p, g) {
    for (var S = a._reactName, _ = []; u !== null && u !== p; ) {
      var M = u, j = M.alternate, q = M.stateNode;
      if (j !== null && j === p)
        break;
      M.tag === 5 && q !== null && (M = q, g ? (j = Xo(u, S), j != null && _.unshift(wu(u, j, M))) : g || (j = Xo(u, S), j != null && _.push(wu(u, j, M)))), u = u.return;
    }
    _.length !== 0 && n.push({ event: a, listeners: _ });
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
  var Zd = null, ol = null;
  function Eu(n, a) {
    return n === "textarea" || n === "noscript" || typeof a.children == "string" || typeof a.children == "number" || typeof a.dangerouslySetInnerHTML == "object" && a.dangerouslySetInnerHTML !== null && a.dangerouslySetInnerHTML.__html != null;
  }
  var ll = typeof setTimeout == "function" ? setTimeout : void 0, Xv = typeof clearTimeout == "function" ? clearTimeout : void 0, Xd = typeof Promise == "function" ? Promise : void 0, Jd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xd < "u" ? function(n) {
    return Xd.resolve(null).then(n).catch(S0);
  } : ll;
  function S0(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function mo(n, a) {
    var u = a, p = 0;
    do {
      var g = u.nextSibling;
      if (n.removeChild(u), g && g.nodeType === 8)
        if (u = g.data, u === "/$") {
          if (p === 0) {
            n.removeChild(g), uu(a);
            return;
          }
          p--;
        } else
          u !== "$" && u !== "$?" && u !== "$!" || p++;
      u = g;
    } while (u);
    uu(a);
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
  function Cu(n) {
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
  var go = Math.random().toString(36).slice(2), ui = "__reactFiber$" + go, sl = "__reactProps$" + go, Ui = "__reactContainer$" + go, ep = "__reactEvents$" + go, x0 = "__reactListeners$" + go, tp = "__reactHandles$" + go;
  function wa(n) {
    var a = n[ui];
    if (a)
      return a;
    for (var u = n.parentNode; u; ) {
      if (a = u[Ui] || u[ui]) {
        if (u = a.alternate, a.child !== null || u !== null && u.child !== null)
          for (n = Cu(n); n !== null; ) {
            if (u = n[ui])
              return u;
            n = Cu(n);
          }
        return a;
      }
      n = u, u = n.parentNode;
    }
    return null;
  }
  function _u(n) {
    return n = n[ui] || n[Ui], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function fs(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(l(33));
  }
  function Ie(n) {
    return n[sl] || null;
  }
  var yo = [], Bt = -1;
  function rt(n) {
    return { current: n };
  }
  function kt(n) {
    0 > Bt || (n.current = yo[Bt], yo[Bt] = null, Bt--);
  }
  function Rt(n, a) {
    Bt++, yo[Bt] = n.current, n.current = a;
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
  function So(n, a, u) {
    if (Xe.current !== ci)
      throw Error(l(168));
    Rt(Xe, a), Rt(sn, u);
  }
  function Tu(n, a, u) {
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
    u ? (n = Tu(n, a, Ur), p.__reactInternalMemoizedMergedChildContext = n, kt(sn), kt(Xe), Rt(Xe, n)) : kt(sn), Rt(sn, u);
  }
  var ra = null, Fn = !1, ku = !1;
  function np(n) {
    ra === null ? ra = [n] : ra.push(n);
  }
  function rp(n) {
    Fn = !0, np(n);
  }
  function Ar() {
    if (!ku && ra !== null) {
      ku = !0;
      var n = 0, a = Lt;
      try {
        var u = ra;
        for (Lt = 1; n < u.length; n++) {
          var p = u[n];
          do
            p = p(!0);
          while (p !== null);
        }
        ra = null, Fn = !1;
      } catch (g) {
        throw ra !== null && (ra = ra.slice(n + 1)), Zt(Ri, Ar), g;
      } finally {
        Lt = a, ku = !1;
      }
    }
    return null;
  }
  var xo = [], zr = 0, ul = null, ds = 0, Fr = [], ur = 0, Ca = null, Wn = 1, Ai = "";
  function aa(n, a) {
    xo[zr++] = ds, xo[zr++] = ul, ul = n, ds = a;
  }
  function ap(n, a, u) {
    Fr[ur++] = Wn, Fr[ur++] = Ai, Fr[ur++] = Ca, Ca = n;
    var p = Wn;
    n = Ai;
    var g = 32 - ga(p) - 1;
    p &= ~(1 << g), u += 1;
    var S = 32 - ga(a) + g;
    if (30 < S) {
      var _ = g - g % 5;
      S = (p & (1 << _) - 1).toString(32), p >>= _, g -= _, Wn = 1 << 32 - ga(a) + g | u << g | p, Ai = S + n;
    } else
      Wn = 1 << S | u << g | p, Ai = n;
  }
  function Yc(n) {
    n.return !== null && (aa(n, 1), ap(n, 1, 0));
  }
  function ip(n) {
    for (; n === ul; )
      ul = xo[--zr], xo[zr] = null, ds = xo[--zr], xo[zr] = null;
    for (; n === Ca; )
      Ca = Fr[--ur], Fr[ur] = null, Ai = Fr[--ur], Fr[ur] = null, Wn = Fr[--ur], Fr[ur] = null;
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
        return a = a.nodeType !== 8 ? null : a, a !== null ? (u = Ca !== null ? { id: Wn, overflow: Ai } : null, n.memoizedState = { dehydrated: a, treeContext: u, retryLane: 1073741824 }, u = Ma(18, null, null, 0), u.stateNode = a, u.return = n, n.child = u, ia = n, Pr = null, !0) : !1;
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
    if ((a = n.tag !== 3) && !(a = n.tag !== 5) && (a = n.type, a = a !== "head" && a !== "body" && !Eu(n.type, n.memoizedProps)), a && (a = Pr)) {
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
  var Wc = ae.ReactCurrentBatchConfig;
  function oa(n, a) {
    if (n && n.defaultProps) {
      a = be({}, a), n = n.defaultProps;
      for (var u in n)
        a[u] === void 0 && (a[u] = n[u]);
      return a;
    }
    return a;
  }
  var fi = rt(null), Gc = null, wo = null, sp = null;
  function up() {
    sp = wo = Gc = null;
  }
  function bo(n) {
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
    Gc = n, sp = wo = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & a && (xn = !0), n.firstContext = null);
  }
  function pn(n) {
    var a = n._currentValue;
    if (sp !== n)
      if (n = { context: n, memoizedValue: a, next: null }, wo === null) {
        if (Gc === null)
          throw Error(l(308));
        wo = n, Gc.dependencies = { lanes: 0, firstContext: n };
      } else
        wo = wo.next = n;
    return a;
  }
  var Gn = null;
  function cp(n) {
    Gn === null ? Gn = [n] : Gn.push(n);
  }
  function rm(n, a, u, p) {
    var g = a.interleaved;
    return g === null ? (u.next = u, cp(a)) : (u.next = g.next, g.next = u), a.interleaved = u, zi(n, p);
  }
  function zi(n, a) {
    n.lanes |= a;
    var u = n.alternate;
    for (u !== null && (u.lanes |= a), u = n, n = n.return; n !== null; )
      n.childLanes |= a, u = n.alternate, u !== null && (u.childLanes |= a), u = n, n = n.return;
    return u.tag === 3 ? u.stateNode : null;
  }
  var Eo = !1;
  function fp(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Tn(n, a) {
    n = n.updateQueue, a.updateQueue === n && (a.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Fi(n, a) {
    return { eventTime: n, lane: a, tag: 0, payload: null, callback: null, next: null };
  }
  function Co(n, a, u) {
    var p = n.updateQueue;
    if (p === null)
      return null;
    if (p = p.shared, pt & 2) {
      var g = p.pending;
      return g === null ? a.next = a : (a.next = g.next, g.next = a), p.pending = a, zi(n, u);
    }
    return g = p.interleaved, g === null ? (a.next = a, cp(p)) : (a.next = g.next, g.next = a), p.interleaved = a, zi(n, u);
  }
  function Qc(n, a, u) {
    if (a = a.updateQueue, a !== null && (a = a.shared, (u & 4194240) !== 0)) {
      var p = a.lanes;
      p &= n.pendingLanes, u |= p, a.lanes = u, iu(n, u);
    }
  }
  function dp(n, a) {
    var u = n.updateQueue, p = n.alternate;
    if (p !== null && (p = p.updateQueue, u === p)) {
      var g = null, S = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var _ = { eventTime: u.eventTime, lane: u.lane, tag: u.tag, payload: u.payload, callback: u.callback, next: null };
          S === null ? g = S = _ : S = S.next = _, u = u.next;
        } while (u !== null);
        S === null ? g = S = a : S = S.next = a;
      } else
        g = S = a;
      u = { baseState: p.baseState, firstBaseUpdate: g, lastBaseUpdate: S, shared: p.shared, effects: p.effects }, n.updateQueue = u;
      return;
    }
    n = u.lastBaseUpdate, n === null ? u.firstBaseUpdate = a : n.next = a, u.lastBaseUpdate = a;
  }
  function _o(n, a, u, p) {
    var g = n.updateQueue;
    Eo = !1;
    var S = g.firstBaseUpdate, _ = g.lastBaseUpdate, M = g.shared.pending;
    if (M !== null) {
      g.shared.pending = null;
      var j = M, q = j.next;
      j.next = null, _ === null ? S = q : _.next = q, _ = j;
      var le = n.alternate;
      le !== null && (le = le.updateQueue, M = le.lastBaseUpdate, M !== _ && (M === null ? le.firstBaseUpdate = q : M.next = q, le.lastBaseUpdate = j));
    }
    if (S !== null) {
      var ue = g.baseState;
      _ = 0, le = q = j = null, M = S;
      do {
        var ie = M.lane, Ce = M.eventTime;
        if ((p & ie) === ie) {
          le !== null && (le = le.next = {
            eventTime: Ce,
            lane: 0,
            tag: M.tag,
            payload: M.payload,
            callback: M.callback,
            next: null
          });
          e: {
            var Me = n, je = M;
            switch (ie = a, Ce = u, je.tag) {
              case 1:
                if (Me = je.payload, typeof Me == "function") {
                  ue = Me.call(Ce, ue, ie);
                  break e;
                }
                ue = Me;
                break e;
              case 3:
                Me.flags = Me.flags & -65537 | 128;
              case 0:
                if (Me = je.payload, ie = typeof Me == "function" ? Me.call(Ce, ue, ie) : Me, ie == null)
                  break e;
                ue = be({}, ue, ie);
                break e;
              case 2:
                Eo = !0;
            }
          }
          M.callback !== null && M.lane !== 0 && (n.flags |= 64, ie = g.effects, ie === null ? g.effects = [M] : ie.push(M));
        } else
          Ce = { eventTime: Ce, lane: ie, tag: M.tag, payload: M.payload, callback: M.callback, next: null }, le === null ? (q = le = Ce, j = ue) : le = le.next = Ce, _ |= ie;
        if (M = M.next, M === null) {
          if (M = g.shared.pending, M === null)
            break;
          ie = M, M = ie.next, ie.next = null, g.lastBaseUpdate = ie, g.shared.pending = null;
        }
      } while (1);
      if (le === null && (j = ue), g.baseState = j, g.firstBaseUpdate = q, g.lastBaseUpdate = le, a = g.shared.interleaved, a !== null) {
        g = a;
        do
          _ |= g.lane, g = g.next;
        while (g !== a);
      } else
        S === null && (g.shared.lanes = 0);
      Yi |= _, n.lanes = _, n.memoizedState = ue;
    }
  }
  function cl(n, a, u) {
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
    var p = pr(), g = wn(n), S = Fi(p, g);
    S.payload = a, u != null && (S.callback = u), a = Co(n, S, g), a !== null && (hr(a, n, g, p), Qc(a, n, g));
  }, enqueueReplaceState: function(n, a, u) {
    n = n._reactInternals;
    var p = pr(), g = wn(n), S = Fi(p, g);
    S.tag = 1, S.payload = a, u != null && (S.callback = u), a = Co(n, S, g), a !== null && (hr(a, n, g, p), Qc(a, n, g));
  }, enqueueForceUpdate: function(n, a) {
    n = n._reactInternals;
    var u = pr(), p = wn(n), g = Fi(u, p);
    g.tag = 2, a != null && (g.callback = a), a = Co(n, g, p), a !== null && (hr(a, n, p, u), Qc(a, n, p));
  } };
  function im(n, a, u, p, g, S, _) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(p, S, _) : a.prototype && a.prototype.isPureReactComponent ? !mu(u, p) || !mu(g, S) : !0;
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
    typeof S == "object" && S !== null ? g.context = pn(S) : (S = Xt(a) ? Ur : Xe.current, g.context = ba(n, S)), g.state = n.memoizedState, S = a.getDerivedStateFromProps, typeof S == "function" && (pp(n, a, S, u), g.state = n.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function" || typeof g.UNSAFE_componentWillMount != "function" && typeof g.componentWillMount != "function" || (a = g.state, typeof g.componentWillMount == "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount == "function" && g.UNSAFE_componentWillMount(), a !== g.state && qc.enqueueReplaceState(g, g.state, null), _o(n, u, g, p), g.state = n.memoizedState), typeof g.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function ps(n, a, u) {
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
        return a !== null && a.ref !== null && typeof a.ref == "function" && a.ref._stringRef === S ? a.ref : (a = function(_) {
          var M = g.refs;
          M === am && (M = g.refs = {}), _ === null ? delete M[S] : M[S] = _;
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
    function a(I, F) {
      if (n) {
        var B = I.deletions;
        B === null ? (I.deletions = [F], I.flags |= 16) : B.push(F);
      }
    }
    function u(I, F) {
      if (!n)
        return null;
      for (; F !== null; )
        a(I, F), F = F.sibling;
      return null;
    }
    function p(I, F) {
      for (I = /* @__PURE__ */ new Map(); F !== null; )
        F.key !== null ? I.set(F.key, F) : I.set(F.index, F), F = F.sibling;
      return I;
    }
    function g(I, F) {
      return I = Lo(I, F), I.index = 0, I.sibling = null, I;
    }
    function S(I, F, B) {
      return I.index = B, n ? (B = I.alternate, B !== null ? (B = B.index, B < F ? (I.flags |= 2, F) : B) : (I.flags |= 2, F)) : (I.flags |= 1048576, F);
    }
    function _(I) {
      return n && I.alternate === null && (I.flags |= 2), I;
    }
    function M(I, F, B, he) {
      return F === null || F.tag !== 6 ? (F = Wu(B, I.mode, he), F.return = I, F) : (F = g(F, B), F.return = I, F);
    }
    function j(I, F, B, he) {
      var Ue = B.type;
      return Ue === Z ? le(I, F, B.props.children, he, B.key) : F !== null && (F.elementType === Ue || typeof Ue == "object" && Ue !== null && Ue.$$typeof === st && sm(Ue) === F.type) ? (he = g(F, B.props), he.ref = ps(I, F, B), he.return = I, he) : (he = Of(B.type, B.key, B.props, null, I.mode, he), he.ref = ps(I, F, B), he.return = I, he);
    }
    function q(I, F, B, he) {
      return F === null || F.tag !== 4 || F.stateNode.containerInfo !== B.containerInfo || F.stateNode.implementation !== B.implementation ? (F = Dl(B, I.mode, he), F.return = I, F) : (F = g(F, B.children || []), F.return = I, F);
    }
    function le(I, F, B, he, Ue) {
      return F === null || F.tag !== 7 ? (F = Rl(B, I.mode, he, Ue), F.return = I, F) : (F = g(F, B), F.return = I, F);
    }
    function ue(I, F, B) {
      if (typeof F == "string" && F !== "" || typeof F == "number")
        return F = Wu("" + F, I.mode, B), F.return = I, F;
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case te:
            return B = Of(F.type, F.key, F.props, null, I.mode, B), B.ref = ps(I, null, F), B.return = I, B;
          case V:
            return F = Dl(F, I.mode, B), F.return = I, F;
          case st:
            var he = F._init;
            return ue(I, he(F._payload), B);
        }
        if (ki(F) || Pe(F))
          return F = Rl(F, I.mode, B, null), F.return = I, F;
        Zc(I, F);
      }
      return null;
    }
    function ie(I, F, B, he) {
      var Ue = F !== null ? F.key : null;
      if (typeof B == "string" && B !== "" || typeof B == "number")
        return Ue !== null ? null : M(I, F, "" + B, he);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case te:
            return B.key === Ue ? j(I, F, B, he) : null;
          case V:
            return B.key === Ue ? q(I, F, B, he) : null;
          case st:
            return Ue = B._init, ie(
              I,
              F,
              Ue(B._payload),
              he
            );
        }
        if (ki(B) || Pe(B))
          return Ue !== null ? null : le(I, F, B, he, null);
        Zc(I, B);
      }
      return null;
    }
    function Ce(I, F, B, he, Ue) {
      if (typeof he == "string" && he !== "" || typeof he == "number")
        return I = I.get(B) || null, M(F, I, "" + he, Ue);
      if (typeof he == "object" && he !== null) {
        switch (he.$$typeof) {
          case te:
            return I = I.get(he.key === null ? B : he.key) || null, j(F, I, he, Ue);
          case V:
            return I = I.get(he.key === null ? B : he.key) || null, q(F, I, he, Ue);
          case st:
            var Ne = he._init;
            return Ce(I, F, B, Ne(he._payload), Ue);
        }
        if (ki(he) || Pe(he))
          return I = I.get(B) || null, le(F, I, he, Ue, null);
        Zc(F, he);
      }
      return null;
    }
    function Me(I, F, B, he) {
      for (var Ue = null, Ne = null, Fe = F, Je = F = 0, Yn = null; Fe !== null && Je < B.length; Je++) {
        Fe.index > Je ? (Yn = Fe, Fe = null) : Yn = Fe.sibling;
        var xt = ie(I, Fe, B[Je], he);
        if (xt === null) {
          Fe === null && (Fe = Yn);
          break;
        }
        n && Fe && xt.alternate === null && a(I, Fe), F = S(xt, F, Je), Ne === null ? Ue = xt : Ne.sibling = xt, Ne = xt, Fe = Yn;
      }
      if (Je === B.length)
        return u(I, Fe), Wt && aa(I, Je), Ue;
      if (Fe === null) {
        for (; Je < B.length; Je++)
          Fe = ue(I, B[Je], he), Fe !== null && (F = S(Fe, F, Je), Ne === null ? Ue = Fe : Ne.sibling = Fe, Ne = Fe);
        return Wt && aa(I, Je), Ue;
      }
      for (Fe = p(I, Fe); Je < B.length; Je++)
        Yn = Ce(Fe, I, Je, B[Je], he), Yn !== null && (n && Yn.alternate !== null && Fe.delete(Yn.key === null ? Je : Yn.key), F = S(Yn, F, Je), Ne === null ? Ue = Yn : Ne.sibling = Yn, Ne = Yn);
      return n && Fe.forEach(function(jo) {
        return a(I, jo);
      }), Wt && aa(I, Je), Ue;
    }
    function je(I, F, B, he) {
      var Ue = Pe(B);
      if (typeof Ue != "function")
        throw Error(l(150));
      if (B = Ue.call(B), B == null)
        throw Error(l(151));
      for (var Ne = Ue = null, Fe = F, Je = F = 0, Yn = null, xt = B.next(); Fe !== null && !xt.done; Je++, xt = B.next()) {
        Fe.index > Je ? (Yn = Fe, Fe = null) : Yn = Fe.sibling;
        var jo = ie(I, Fe, xt.value, he);
        if (jo === null) {
          Fe === null && (Fe = Yn);
          break;
        }
        n && Fe && jo.alternate === null && a(I, Fe), F = S(jo, F, Je), Ne === null ? Ue = jo : Ne.sibling = jo, Ne = jo, Fe = Yn;
      }
      if (xt.done)
        return u(
          I,
          Fe
        ), Wt && aa(I, Je), Ue;
      if (Fe === null) {
        for (; !xt.done; Je++, xt = B.next())
          xt = ue(I, xt.value, he), xt !== null && (F = S(xt, F, Je), Ne === null ? Ue = xt : Ne.sibling = xt, Ne = xt);
        return Wt && aa(I, Je), Ue;
      }
      for (Fe = p(I, Fe); !xt.done; Je++, xt = B.next())
        xt = Ce(Fe, I, Je, xt.value, he), xt !== null && (n && xt.alternate !== null && Fe.delete(xt.key === null ? Je : xt.key), F = S(xt, F, Je), Ne === null ? Ue = xt : Ne.sibling = xt, Ne = xt);
      return n && Fe.forEach(function(H0) {
        return a(I, H0);
      }), Wt && aa(I, Je), Ue;
    }
    function hn(I, F, B, he) {
      if (typeof B == "object" && B !== null && B.type === Z && B.key === null && (B = B.props.children), typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case te:
            e: {
              for (var Ue = B.key, Ne = F; Ne !== null; ) {
                if (Ne.key === Ue) {
                  if (Ue = B.type, Ue === Z) {
                    if (Ne.tag === 7) {
                      u(I, Ne.sibling), F = g(Ne, B.props.children), F.return = I, I = F;
                      break e;
                    }
                  } else if (Ne.elementType === Ue || typeof Ue == "object" && Ue !== null && Ue.$$typeof === st && sm(Ue) === Ne.type) {
                    u(I, Ne.sibling), F = g(Ne, B.props), F.ref = ps(I, Ne, B), F.return = I, I = F;
                    break e;
                  }
                  u(I, Ne);
                  break;
                } else
                  a(I, Ne);
                Ne = Ne.sibling;
              }
              B.type === Z ? (F = Rl(B.props.children, I.mode, he, B.key), F.return = I, I = F) : (he = Of(B.type, B.key, B.props, null, I.mode, he), he.ref = ps(I, F, B), he.return = I, I = he);
            }
            return _(I);
          case V:
            e: {
              for (Ne = B.key; F !== null; ) {
                if (F.key === Ne)
                  if (F.tag === 4 && F.stateNode.containerInfo === B.containerInfo && F.stateNode.implementation === B.implementation) {
                    u(I, F.sibling), F = g(F, B.children || []), F.return = I, I = F;
                    break e;
                  } else {
                    u(I, F);
                    break;
                  }
                else
                  a(I, F);
                F = F.sibling;
              }
              F = Dl(B, I.mode, he), F.return = I, I = F;
            }
            return _(I);
          case st:
            return Ne = B._init, hn(I, F, Ne(B._payload), he);
        }
        if (ki(B))
          return Me(I, F, B, he);
        if (Pe(B))
          return je(I, F, B, he);
        Zc(I, B);
      }
      return typeof B == "string" && B !== "" || typeof B == "number" ? (B = "" + B, F !== null && F.tag === 6 ? (u(I, F.sibling), F = g(F, B), F.return = I, I = F) : (u(I, F), F = Wu(B, I.mode, he), F.return = I, I = F), _(I)) : u(I, F);
    }
    return hn;
  }
  var hs = um(!0), cm = um(!1), Ru = {}, Za = rt(Ru), Du = rt(Ru), vs = rt(Ru);
  function fl(n) {
    if (n === Ru)
      throw Error(l(174));
    return n;
  }
  function hp(n, a) {
    switch (Rt(vs, a), Rt(Du, n), Rt(Za, Ru), n = a.nodeType, n) {
      case 9:
      case 11:
        a = (a = a.documentElement) ? a.namespaceURI : gn(null, "");
        break;
      default:
        n = n === 8 ? a.parentNode : a, a = n.namespaceURI || null, n = n.tagName, a = gn(a, n);
    }
    kt(Za), Rt(Za, a);
  }
  function To() {
    kt(Za), kt(Du), kt(vs);
  }
  function Ve(n) {
    fl(vs.current);
    var a = fl(Za.current), u = gn(a, n.type);
    a !== u && (Rt(Du, n), Rt(Za, u));
  }
  function ct(n) {
    Du.current === n && (kt(Za), kt(Du));
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
  var Jc = ae.ReactCurrentDispatcher, vp = ae.ReactCurrentBatchConfig, dl = 0, Gt = null, ee = null, mt = null, qe = !1, di = !1, la = 0, pl = 0;
  function Qt() {
    throw Error(l(321));
  }
  function hl(n, a) {
    if (a === null)
      return !1;
    for (var u = 0; u < a.length && u < n.length; u++)
      if (!xa(n[u], a[u]))
        return !1;
    return !0;
  }
  function ko(n, a, u, p, g, S) {
    if (dl = S, Gt = a, a.memoizedState = null, a.updateQueue = null, a.lanes = 0, Jc.current = n === null || n.memoizedState === null ? b0 : E0, n = u(p, g), di) {
      S = 0;
      do {
        if (di = !1, la = 0, 25 <= S)
          throw Error(l(301));
        S += 1, mt = ee = null, a.updateQueue = null, Jc.current = gp, n = u(p, g);
      } while (di);
    }
    if (Jc.current = mf, a = ee !== null && ee.next !== null, dl = 0, mt = ee = Gt = null, qe = !1, a)
      throw Error(l(300));
    return n;
  }
  function vl() {
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
  function ml(n, a) {
    return typeof a == "function" ? a(n) : a;
  }
  function Ou(n) {
    var a = Hr(), u = a.queue;
    if (u === null)
      throw Error(l(311));
    u.lastRenderedReducer = n;
    var p = ee, g = p.baseQueue, S = u.pending;
    if (S !== null) {
      if (g !== null) {
        var _ = g.next;
        g.next = S.next, S.next = _;
      }
      p.baseQueue = g = S, u.pending = null;
    }
    if (g !== null) {
      S = g.next, p = p.baseState;
      var M = _ = null, j = null, q = S;
      do {
        var le = q.lane;
        if ((dl & le) === le)
          j !== null && (j = j.next = { lane: 0, action: q.action, hasEagerState: q.hasEagerState, eagerState: q.eagerState, next: null }), p = q.hasEagerState ? q.eagerState : n(p, q.action);
        else {
          var ue = {
            lane: le,
            action: q.action,
            hasEagerState: q.hasEagerState,
            eagerState: q.eagerState,
            next: null
          };
          j === null ? (M = j = ue, _ = p) : j = j.next = ue, Gt.lanes |= le, Yi |= le;
        }
        q = q.next;
      } while (q !== null && q !== S);
      j === null ? _ = p : j.next = M, xa(p, a.memoizedState) || (xn = !0), a.memoizedState = p, a.baseState = _, a.baseQueue = j, u.lastRenderedState = p;
    }
    if (n = u.interleaved, n !== null) {
      g = n;
      do
        S = g.lane, Gt.lanes |= S, Yi |= S, g = g.next;
      while (g !== n);
    } else
      g === null && (u.lanes = 0);
    return [a.memoizedState, u.dispatch];
  }
  function Mu(n) {
    var a = Hr(), u = a.queue;
    if (u === null)
      throw Error(l(311));
    u.lastRenderedReducer = n;
    var p = u.dispatch, g = u.pending, S = a.memoizedState;
    if (g !== null) {
      u.pending = null;
      var _ = g = g.next;
      do
        S = n(S, _.action), _ = _.next;
      while (_ !== g);
      xa(S, a.memoizedState) || (xn = !0), a.memoizedState = S, a.baseQueue === null && (a.baseState = S), u.lastRenderedState = S;
    }
    return [S, p];
  }
  function ef() {
  }
  function tf(n, a) {
    var u = Gt, p = Hr(), g = a(), S = !xa(p.memoizedState, g);
    if (S && (p.memoizedState = g, xn = !0), p = p.queue, Nu(af.bind(null, u, p, n), [n]), p.getSnapshot !== a || S || mt !== null && mt.memoizedState.tag & 1) {
      if (u.flags |= 2048, gl(9, rf.bind(null, u, p, g, a), void 0, null), rn === null)
        throw Error(l(349));
      dl & 30 || nf(u, a, g);
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
    var a = zi(n, 1);
    a !== null && hr(a, n, 1, -1);
  }
  function sf(n) {
    var a = ka();
    return typeof n == "function" && (n = n()), a.memoizedState = a.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ml, lastRenderedState: n }, a.queue = n, n = n.dispatch = vf.bind(null, Gt, n), [a.memoizedState, n];
  }
  function gl(n, a, u, p) {
    return n = { tag: n, create: a, destroy: u, deps: p, next: null }, a = Gt.updateQueue, a === null ? (a = { lastEffect: null, stores: null }, Gt.updateQueue = a, a.lastEffect = n.next = n) : (u = a.lastEffect, u === null ? a.lastEffect = n.next = n : (p = u.next, u.next = n, n.next = p, a.lastEffect = n)), n;
  }
  function uf() {
    return Hr().memoizedState;
  }
  function yl(n, a, u, p) {
    var g = ka();
    Gt.flags |= n, g.memoizedState = gl(1 | a, u, void 0, p === void 0 ? null : p);
  }
  function Pi(n, a, u, p) {
    var g = Hr();
    p = p === void 0 ? null : p;
    var S = void 0;
    if (ee !== null) {
      var _ = ee.memoizedState;
      if (S = _.destroy, p !== null && hl(p, _.deps)) {
        g.memoizedState = gl(a, u, S, p);
        return;
      }
    }
    Gt.flags |= n, g.memoizedState = gl(1 | a, u, S, p);
  }
  function cf(n, a) {
    return yl(8390656, 8, n, a);
  }
  function Nu(n, a) {
    return Pi(2048, 8, n, a);
  }
  function ff(n, a) {
    return Pi(4, 2, n, a);
  }
  function df(n, a) {
    return Pi(4, 4, n, a);
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
  function ms(n, a, u) {
    return u = u != null ? u.concat([n]) : null, Pi(4, 4, mp.bind(null, a, n), u);
  }
  function pf() {
  }
  function gs(n, a) {
    var u = Hr();
    a = a === void 0 ? null : a;
    var p = u.memoizedState;
    return p !== null && a !== null && hl(a, p[1]) ? p[0] : (u.memoizedState = [n, a], n);
  }
  function Ro(n, a) {
    var u = Hr();
    a = a === void 0 ? null : a;
    var p = u.memoizedState;
    return p !== null && a !== null && hl(a, p[1]) ? p[0] : (n = n(), u.memoizedState = [n, a], n);
  }
  function Ir(n, a, u) {
    return dl & 21 ? (xa(u, a) || (u = bc(), Gt.lanes |= u, Yi |= u, n.baseState = !0), a) : (n.baseState && (n.baseState = !1, xn = !0), n.memoizedState = u);
  }
  function w0(n, a) {
    var u = Lt;
    Lt = u !== 0 && 4 > u ? u : 4, n(!0);
    var p = vp.transition;
    vp.transition = {};
    try {
      n(!1), a();
    } finally {
      Lt = u, vp.transition = p;
    }
  }
  function Ht() {
    return Hr().memoizedState;
  }
  function hf(n, a, u) {
    var p = wn(n);
    if (u = { lane: p, action: u, hasEagerState: !1, eagerState: null, next: null }, ys(n))
      Lu(a, u);
    else if (u = rm(n, a, u, p), u !== null) {
      var g = pr();
      hr(u, n, p, g), fm(u, a, p);
    }
  }
  function vf(n, a, u) {
    var p = wn(n), g = { lane: p, action: u, hasEagerState: !1, eagerState: null, next: null };
    if (ys(n))
      Lu(a, g);
    else {
      var S = n.alternate;
      if (n.lanes === 0 && (S === null || S.lanes === 0) && (S = a.lastRenderedReducer, S !== null))
        try {
          var _ = a.lastRenderedState, M = S(_, u);
          if (g.hasEagerState = !0, g.eagerState = M, xa(M, _)) {
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
  function ys(n) {
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
      p &= n.pendingLanes, u |= p, a.lanes = u, iu(n, u);
    }
  }
  var mf = { readContext: pn, useCallback: Qt, useContext: Qt, useEffect: Qt, useImperativeHandle: Qt, useInsertionEffect: Qt, useLayoutEffect: Qt, useMemo: Qt, useReducer: Qt, useRef: Qt, useState: Qt, useDebugValue: Qt, useDeferredValue: Qt, useTransition: Qt, useMutableSource: Qt, useSyncExternalStore: Qt, useId: Qt, unstable_isNewReconciler: !1 }, b0 = { readContext: pn, useCallback: function(n, a) {
    return ka().memoizedState = [n, a === void 0 ? null : a], n;
  }, useContext: pn, useEffect: cf, useImperativeHandle: function(n, a, u) {
    return u = u != null ? u.concat([n]) : null, yl(
      4194308,
      4,
      mp.bind(null, a, n),
      u
    );
  }, useLayoutEffect: function(n, a) {
    return yl(4194308, 4, n, a);
  }, useInsertionEffect: function(n, a) {
    return yl(4, 2, n, a);
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
      dl & 30 || nf(p, a, u);
    }
    g.memoizedState = u;
    var S = { value: u, getSnapshot: a };
    return g.queue = S, cf(af.bind(
      null,
      p,
      S,
      n
    ), [n]), p.flags |= 2048, gl(9, rf.bind(null, p, S, u, a), void 0, null), u;
  }, useId: function() {
    var n = ka(), a = rn.identifierPrefix;
    if (Wt) {
      var u = Ai, p = Wn;
      u = (p & ~(1 << 32 - ga(p) - 1)).toString(32) + u, a = ":" + a + "R" + u, u = la++, 0 < u && (a += "H" + u.toString(32)), a += ":";
    } else
      u = pl++, a = ":" + a + "r" + u.toString(32) + ":";
    return n.memoizedState = a;
  }, unstable_isNewReconciler: !1 }, E0 = {
    readContext: pn,
    useCallback: gs,
    useContext: pn,
    useEffect: Nu,
    useImperativeHandle: ms,
    useInsertionEffect: ff,
    useLayoutEffect: df,
    useMemo: Ro,
    useReducer: Ou,
    useRef: uf,
    useState: function() {
      return Ou(ml);
    },
    useDebugValue: pf,
    useDeferredValue: function(n) {
      var a = Hr();
      return Ir(a, ee.memoizedState, n);
    },
    useTransition: function() {
      var n = Ou(ml)[0], a = Hr().memoizedState;
      return [n, a];
    },
    useMutableSource: ef,
    useSyncExternalStore: tf,
    useId: Ht,
    unstable_isNewReconciler: !1
  }, gp = { readContext: pn, useCallback: gs, useContext: pn, useEffect: Nu, useImperativeHandle: ms, useInsertionEffect: ff, useLayoutEffect: df, useMemo: Ro, useReducer: Mu, useRef: uf, useState: function() {
    return Mu(ml);
  }, useDebugValue: pf, useDeferredValue: function(n) {
    var a = Hr();
    return ee === null ? a.memoizedState = n : Ir(a, ee.memoizedState, n);
  }, useTransition: function() {
    var n = Mu(ml)[0], a = Hr().memoizedState;
    return [n, a];
  }, useMutableSource: ef, useSyncExternalStore: tf, useId: Ht, unstable_isNewReconciler: !1 };
  function Ss(n, a) {
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
  function ju(n, a, u) {
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
    u = Fi(-1, u), u.tag = 3, u.payload = { element: null };
    var p = a.value;
    return u.callback = function() {
      Cf || (Cf = !0, El = p), gf(n, a);
    }, u;
  }
  function Uu(n, a, u) {
    u = Fi(-1, u), u.tag = 3;
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
      var _ = a.stack;
      this.componentDidCatch(a.value, { componentStack: _ !== null ? _ : "" });
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
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = g, n) : (n === a ? n.flags |= 65536 : (n.flags |= 128, u.flags |= 131072, u.flags &= -52805, u.tag === 1 && (u.alternate === null ? u.tag = 17 : (a = Fi(-1, 1), a.tag = 2, Co(u, a, 1))), u.lanes |= 1), n);
  }
  var _0 = ae.ReactCurrentOwner, xn = !1;
  function kn(n, a, u, p) {
    a.child = n === null ? cm(a, null, u, p) : hs(a, n.child, u, p);
  }
  function Do(n, a, u, p, g) {
    u = u.render;
    var S = a.ref;
    return ge(a, g), p = ko(n, a, u, p, S, g), u = vl(), n !== null && !xn ? (a.updateQueue = n.updateQueue, a.flags &= -2053, n.lanes &= ~g, Qn(n, a, g)) : (Wt && u && Yc(a), a.flags |= 1, kn(n, a, p, g), a.child);
  }
  function yf(n, a, u, p, g) {
    if (n === null) {
      var S = u.type;
      return typeof S == "function" && !Fp(S) && S.defaultProps === void 0 && u.compare === null && u.defaultProps === void 0 ? (a.tag = 15, a.type = S, Yr(n, a, S, p, g)) : (n = Of(u.type, null, p, a, a.mode, g), n.ref = a.ref, n.return = a, a.child = n);
    }
    if (S = n.child, !(n.lanes & g)) {
      var _ = S.memoizedProps;
      if (u = u.compare, u = u !== null ? u : mu, u(_, p) && n.ref === a.ref)
        return Qn(n, a, g);
    }
    return a.flags |= 1, n = Lo(S, p), n.ref = a.ref, n.return = a, a.child = n;
  }
  function Yr(n, a, u, p, g) {
    if (n !== null) {
      var S = n.memoizedProps;
      if (mu(S, p) && n.ref === a.ref)
        if (xn = !1, a.pendingProps = p = S, (n.lanes & g) !== 0)
          n.flags & 131072 && (xn = !0);
        else
          return a.lanes = n.lanes, Qn(n, a, g);
    }
    return xs(n, a, u, p, g);
  }
  function Sl(n, a, u) {
    var p = a.pendingProps, g = p.children, S = n !== null ? n.memoizedState : null;
    if (p.mode === "hidden")
      if (!(a.mode & 1))
        a.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Rt(Ts, sa), sa |= u;
      else {
        if (!(u & 1073741824))
          return n = S !== null ? S.baseLanes | u : u, a.lanes = a.childLanes = 1073741824, a.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, a.updateQueue = null, Rt(Ts, sa), sa |= n, null;
        a.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, p = S !== null ? S.baseLanes : u, Rt(Ts, sa), sa |= p;
      }
    else
      S !== null ? (p = S.baseLanes | u, a.memoizedState = null) : p = u, Rt(Ts, sa), sa |= p;
    return kn(n, a, g, u), a.child;
  }
  function at(n, a) {
    var u = a.ref;
    (n === null && u !== null || n !== null && n.ref !== u) && (a.flags |= 512, a.flags |= 2097152);
  }
  function xs(n, a, u, p, g) {
    var S = Xt(u) ? Ur : Xe.current;
    return S = ba(a, S), ge(a, g), u = ko(n, a, u, p, S, g), p = vl(), n !== null && !xn ? (a.updateQueue = n.updateQueue, a.flags &= -2053, n.lanes &= ~g, Qn(n, a, g)) : (Wt && p && Yc(a), a.flags |= 1, kn(n, a, u, g), a.child);
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
      var _ = a.stateNode, M = a.memoizedProps;
      _.props = M;
      var j = _.context, q = u.contextType;
      typeof q == "object" && q !== null ? q = pn(q) : (q = Xt(u) ? Ur : Xe.current, q = ba(a, q));
      var le = u.getDerivedStateFromProps, ue = typeof le == "function" || typeof _.getSnapshotBeforeUpdate == "function";
      ue || typeof _.UNSAFE_componentWillReceiveProps != "function" && typeof _.componentWillReceiveProps != "function" || (M !== p || j !== q) && lm(a, _, p, q), Eo = !1;
      var ie = a.memoizedState;
      _.state = ie, _o(a, p, _, g), j = a.memoizedState, M !== p || ie !== j || sn.current || Eo ? (typeof le == "function" && (pp(a, u, le, p), j = a.memoizedState), (M = Eo || im(a, u, M, p, ie, j, q)) ? (ue || typeof _.UNSAFE_componentWillMount != "function" && typeof _.componentWillMount != "function" || (typeof _.componentWillMount == "function" && _.componentWillMount(), typeof _.UNSAFE_componentWillMount == "function" && _.UNSAFE_componentWillMount()), typeof _.componentDidMount == "function" && (a.flags |= 4194308)) : (typeof _.componentDidMount == "function" && (a.flags |= 4194308), a.memoizedProps = p, a.memoizedState = j), _.props = p, _.state = j, _.context = q, p = M) : (typeof _.componentDidMount == "function" && (a.flags |= 4194308), p = !1);
    } else {
      _ = a.stateNode, Tn(n, a), M = a.memoizedProps, q = a.type === a.elementType ? M : oa(a.type, M), _.props = q, ue = a.pendingProps, ie = _.context, j = u.contextType, typeof j == "object" && j !== null ? j = pn(j) : (j = Xt(u) ? Ur : Xe.current, j = ba(a, j));
      var Ce = u.getDerivedStateFromProps;
      (le = typeof Ce == "function" || typeof _.getSnapshotBeforeUpdate == "function") || typeof _.UNSAFE_componentWillReceiveProps != "function" && typeof _.componentWillReceiveProps != "function" || (M !== ue || ie !== j) && lm(a, _, p, j), Eo = !1, ie = a.memoizedState, _.state = ie, _o(a, p, _, g);
      var Me = a.memoizedState;
      M !== ue || ie !== Me || sn.current || Eo ? (typeof Ce == "function" && (pp(a, u, Ce, p), Me = a.memoizedState), (q = Eo || im(a, u, q, p, ie, Me, j) || !1) ? (le || typeof _.UNSAFE_componentWillUpdate != "function" && typeof _.componentWillUpdate != "function" || (typeof _.componentWillUpdate == "function" && _.componentWillUpdate(p, Me, j), typeof _.UNSAFE_componentWillUpdate == "function" && _.UNSAFE_componentWillUpdate(p, Me, j)), typeof _.componentDidUpdate == "function" && (a.flags |= 4), typeof _.getSnapshotBeforeUpdate == "function" && (a.flags |= 1024)) : (typeof _.componentDidUpdate != "function" || M === n.memoizedProps && ie === n.memoizedState || (a.flags |= 4), typeof _.getSnapshotBeforeUpdate != "function" || M === n.memoizedProps && ie === n.memoizedState || (a.flags |= 1024), a.memoizedProps = p, a.memoizedState = Me), _.props = p, _.state = Me, _.context = j, p = q) : (typeof _.componentDidUpdate != "function" || M === n.memoizedProps && ie === n.memoizedState || (a.flags |= 4), typeof _.getSnapshotBeforeUpdate != "function" || M === n.memoizedProps && ie === n.memoizedState || (a.flags |= 1024), p = !1);
    }
    return hm(n, a, u, p, S, g);
  }
  function hm(n, a, u, p, g, S) {
    at(n, a);
    var _ = (a.flags & 128) !== 0;
    if (!p && !_)
      return g && Jv(a, u, !1), Qn(n, a, S);
    p = a.stateNode, _0.current = a;
    var M = _ && typeof u.getDerivedStateFromError != "function" ? null : p.render();
    return a.flags |= 1, n !== null && _ ? (a.child = hs(a, n.child, null, S), a.child = hs(a, null, M, S)) : kn(n, a, M, S), a.memoizedState = p.state, g && Jv(a, u, !0), a.child;
  }
  function vm(n) {
    var a = n.stateNode;
    a.pendingContext ? So(n, a.pendingContext, a.pendingContext !== a.context) : a.context && So(n, a.context, !1), hp(n, a.containerInfo);
  }
  function Sf(n, a, u, p, g) {
    return tn(), lp(g), a.flags |= 256, kn(n, a, u, p), a.child;
  }
  var xl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function wp(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function bp(n, a, u) {
    var p = a.pendingProps, g = Ge.current, S = !1, _ = (a.flags & 128) !== 0, M;
    if ((M = _) || (M = n !== null && n.memoizedState === null ? !1 : (g & 2) !== 0), M ? (S = !0, a.flags &= -129) : (n === null || n.memoizedState !== null) && (g |= 1), Rt(Ge, g & 1), n === null)
      return Vc(a), n = a.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (a.mode & 1 ? n.data === "$!" ? a.lanes = 8 : a.lanes = 1073741824 : a.lanes = 1, null) : (_ = p.children, n = p.fallback, S ? (p = a.mode, S = a.child, _ = { mode: "hidden", children: _ }, !(p & 1) && S !== null ? (S.childLanes = 0, S.pendingProps = _) : S = Bu(_, p, 0, null), n = Rl(n, p, u, null), S.return = a, n.return = a, S.sibling = n, a.child = S, a.child.memoizedState = wp(u), a.memoizedState = xl, n) : Ep(a, _));
    if (g = n.memoizedState, g !== null && (M = g.dehydrated, M !== null))
      return T0(n, a, _, p, M, g, u);
    if (S) {
      S = p.fallback, _ = a.mode, g = n.child, M = g.sibling;
      var j = { mode: "hidden", children: p.children };
      return !(_ & 1) && a.child !== g ? (p = a.child, p.childLanes = 0, p.pendingProps = j, a.deletions = null) : (p = Lo(g, j), p.subtreeFlags = g.subtreeFlags & 14680064), M !== null ? S = Lo(M, S) : (S = Rl(S, _, u, null), S.flags |= 2), S.return = a, p.return = a, p.sibling = S, a.child = p, p = S, S = a.child, _ = n.child.memoizedState, _ = _ === null ? wp(u) : { baseLanes: _.baseLanes | u, cachePool: null, transitions: _.transitions }, S.memoizedState = _, S.childLanes = n.childLanes & ~u, a.memoizedState = xl, p;
    }
    return S = n.child, n = S.sibling, p = Lo(S, { mode: "visible", children: p.children }), !(a.mode & 1) && (p.lanes = u), p.return = a, p.sibling = null, n !== null && (u = a.deletions, u === null ? (a.deletions = [n], a.flags |= 16) : u.push(n)), a.child = p, a.memoizedState = null, p;
  }
  function Ep(n, a) {
    return a = Bu({ mode: "visible", children: a }, n.mode, 0, null), a.return = n, n.child = a;
  }
  function ws(n, a, u, p) {
    return p !== null && lp(p), hs(a, n.child, null, u), n = Ep(a, a.pendingProps.children), n.flags |= 2, a.memoizedState = null, n;
  }
  function T0(n, a, u, p, g, S, _) {
    if (u)
      return a.flags & 256 ? (a.flags &= -257, p = ju(Error(l(422))), ws(n, a, _, p)) : a.memoizedState !== null ? (a.child = n.child, a.flags |= 128, null) : (S = p.fallback, g = a.mode, p = Bu({ mode: "visible", children: p.children }, g, 0, null), S = Rl(S, g, _, null), S.flags |= 2, p.return = a, S.return = a, p.sibling = S, a.child = p, a.mode & 1 && hs(a, n.child, null, _), a.child.memoizedState = wp(_), a.memoizedState = xl, S);
    if (!(a.mode & 1))
      return ws(n, a, _, null);
    if (g.data === "$!") {
      if (p = g.nextSibling && g.nextSibling.dataset, p)
        var M = p.dgst;
      return p = M, S = Error(l(419)), p = ju(S, p, void 0), ws(n, a, _, p);
    }
    if (M = (_ & n.childLanes) !== 0, xn || M) {
      if (p = rn, p !== null) {
        switch (_ & -_) {
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
        g = g & (p.suspendedLanes | _) ? 0 : g, g !== 0 && g !== S.retryLane && (S.retryLane = g, zi(n, g), hr(p, n, g, -1));
      }
      return Up(), p = ju(Error(l(421))), ws(n, a, _, p);
    }
    return g.data === "$?" ? (a.flags |= 128, a.child = n.child, a = N0.bind(null, n), g._reactRetry = a, null) : (n = S.treeContext, Pr = Ka(g.nextSibling), ia = a, Wt = !0, _a = null, n !== null && (Fr[ur++] = Wn, Fr[ur++] = Ai, Fr[ur++] = Ca, Wn = n.id, Ai = n.overflow, Ca = a), a = Ep(a, p.children), a.flags |= 4096, a);
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
    if (n !== null && (a.dependencies = n.dependencies), Yi |= a.lanes, !(u & a.childLanes))
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
  function Hi(n, a, u) {
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
        return a.lanes = 0, Sl(n, a, u);
    }
    return Qn(n, a, u);
  }
  var Au, wl, Ra, Rn;
  Au = function(n, a) {
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
  }, wl = function() {
  }, Ra = function(n, a, u, p) {
    var g = n.memoizedProps;
    if (g !== p) {
      n = a.stateNode, fl(Za.current);
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
      var _;
      u = null;
      for (q in g)
        if (!p.hasOwnProperty(q) && g.hasOwnProperty(q) && g[q] != null)
          if (q === "style") {
            var M = g[q];
            for (_ in M)
              M.hasOwnProperty(_) && (u || (u = {}), u[_] = "");
          } else
            q !== "dangerouslySetInnerHTML" && q !== "children" && q !== "suppressContentEditableWarning" && q !== "suppressHydrationWarning" && q !== "autoFocus" && (d.hasOwnProperty(q) ? S || (S = []) : (S = S || []).push(q, null));
      for (q in p) {
        var j = p[q];
        if (M = g != null ? g[q] : void 0, p.hasOwnProperty(q) && j !== M && (j != null || M != null))
          if (q === "style")
            if (M) {
              for (_ in M)
                !M.hasOwnProperty(_) || j && j.hasOwnProperty(_) || (u || (u = {}), u[_] = "");
              for (_ in j)
                j.hasOwnProperty(_) && M[_] !== j[_] && (u || (u = {}), u[_] = j[_]);
            } else
              u || (S || (S = []), S.push(
                q,
                u
              )), u = j;
          else
            q === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, M = M ? M.__html : void 0, j != null && M !== j && (S = S || []).push(q, j)) : q === "children" ? typeof j != "string" && typeof j != "number" || (S = S || []).push(q, "" + j) : q !== "suppressContentEditableWarning" && q !== "suppressHydrationWarning" && (d.hasOwnProperty(q) ? (j != null && q === "onScroll" && Pt("scroll", n), S || M === j || (S = [])) : (S = S || []).push(q, j));
      }
      u && (S = S || []).push("style", u);
      var q = S;
      (a.updateQueue = q) && (a.flags |= 4);
    }
  }, Rn = function(n, a, u, p) {
    u !== p && (a.flags |= 4);
  };
  function zu(n, a) {
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
        return p = a.stateNode, To(), kt(sn), kt(Xe), Xc(), p.pendingContext && (p.context = p.pendingContext, p.pendingContext = null), (n === null || n.child === null) && (Bc(a) ? a.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(a.flags & 256) || (a.flags |= 1024, _a !== null && (Vu(_a), _a = null))), wl(n, a), fr(a), null;
      case 5:
        ct(a);
        var g = fl(vs.current);
        if (u = a.type, n !== null && a.stateNode != null)
          Ra(n, a, u, p, g), n.ref !== a.ref && (a.flags |= 512, a.flags |= 2097152);
        else {
          if (!p) {
            if (a.stateNode === null)
              throw Error(l(166));
            return fr(a), null;
          }
          if (n = fl(Za.current), Bc(a)) {
            p = a.stateNode, u = a.type;
            var S = a.memoizedProps;
            switch (p[ui] = a, p[sl] = S, n = (a.mode & 1) !== 0, u) {
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
                for (g = 0; g < xu.length; g++)
                  Pt(xu[g], p);
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
            for (var _ in S)
              if (S.hasOwnProperty(_)) {
                var M = S[_];
                _ === "children" ? typeof M == "string" ? p.textContent !== M && (S.suppressHydrationWarning !== !0 && Pc(p.textContent, M, n), g = ["children", M]) : typeof M == "number" && p.textContent !== "" + M && (S.suppressHydrationWarning !== !0 && Pc(
                  p.textContent,
                  M,
                  n
                ), g = ["children", "" + M]) : d.hasOwnProperty(_) && M != null && _ === "onScroll" && Pt("scroll", p);
              }
            switch (u) {
              case "input":
                Nr(p), ma(p, S, !0);
                break;
              case "textarea":
                Nr(p), Xr(p);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof S.onClick == "function" && (p.onclick = Hc);
            }
            p = g, a.updateQueue = p, p !== null && (a.flags |= 4);
          } else {
            _ = g.nodeType === 9 ? g : g.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Ya(u)), n === "http://www.w3.org/1999/xhtml" ? u === "script" ? (n = _.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof p.is == "string" ? n = _.createElement(u, { is: p.is }) : (n = _.createElement(u), u === "select" && (_ = n, p.multiple ? _.multiple = !0 : p.size && (_.size = p.size))) : n = _.createElementNS(n, u), n[ui] = a, n[sl] = p, Au(n, a, !1, !1), a.stateNode = n;
            e: {
              switch (_ = dn(u, p), u) {
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
                  for (g = 0; g < xu.length; g++)
                    Pt(xu[g], n);
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
                  S === "style" ? Nt(n, j) : S === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, j != null && oo(n, j)) : S === "children" ? typeof j == "string" ? (u !== "textarea" || j !== "") && $a(n, j) : typeof j == "number" && $a(n, "" + j) : S !== "suppressContentEditableWarning" && S !== "suppressHydrationWarning" && S !== "autoFocus" && (d.hasOwnProperty(S) ? j != null && S === "onScroll" && Pt("scroll", n) : j != null && K(n, S, j, _));
                }
              switch (u) {
                case "input":
                  Nr(n), ma(n, p, !1);
                  break;
                case "textarea":
                  Nr(n), Xr(n);
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
          if (u = fl(vs.current), fl(Za.current), Bc(a)) {
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
            _a !== null && (Vu(_a), _a = null), S = !0;
          if (!S)
            return a.flags & 65536 ? a : null;
        }
        return a.flags & 128 ? (a.lanes = u, a) : (p = p !== null, p !== (n !== null && n.memoizedState !== null) && p && (a.child.flags |= 8192, a.mode & 1 && (n === null || Ge.current & 1 ? On === 0 && (On = 3) : Up())), a.updateQueue !== null && (a.flags |= 4), fr(a), null);
      case 4:
        return To(), wl(n, a), n === null && cs(a.stateNode.containerInfo), fr(a), null;
      case 10:
        return bo(a.type._context), fr(a), null;
      case 17:
        return Xt(a.type) && Ea(), fr(a), null;
      case 19:
        if (kt(Ge), S = a.memoizedState, S === null)
          return fr(a), null;
        if (p = (a.flags & 128) !== 0, _ = S.rendering, _ === null)
          if (p)
            zu(S, !1);
          else {
            if (On !== 0 || n !== null && n.flags & 128)
              for (n = a.child; n !== null; ) {
                if (_ = nn(n), _ !== null) {
                  for (a.flags |= 128, zu(S, !1), p = _.updateQueue, p !== null && (a.updateQueue = p, a.flags |= 4), a.subtreeFlags = 0, p = u, u = a.child; u !== null; )
                    S = u, n = p, S.flags &= 14680066, _ = S.alternate, _ === null ? (S.childLanes = 0, S.lanes = n, S.child = null, S.subtreeFlags = 0, S.memoizedProps = null, S.memoizedState = null, S.updateQueue = null, S.dependencies = null, S.stateNode = null) : (S.childLanes = _.childLanes, S.lanes = _.lanes, S.child = _.child, S.subtreeFlags = 0, S.deletions = null, S.memoizedProps = _.memoizedProps, S.memoizedState = _.memoizedState, S.updateQueue = _.updateQueue, S.type = _.type, n = _.dependencies, S.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), u = u.sibling;
                  return Rt(Ge, Ge.current & 1 | 2), a.child;
                }
                n = n.sibling;
              }
            S.tail !== null && bt() > Rs && (a.flags |= 128, p = !0, zu(S, !1), a.lanes = 4194304);
          }
        else {
          if (!p)
            if (n = nn(_), n !== null) {
              if (a.flags |= 128, p = !0, u = n.updateQueue, u !== null && (a.updateQueue = u, a.flags |= 4), zu(S, !0), S.tail === null && S.tailMode === "hidden" && !_.alternate && !Wt)
                return fr(a), null;
            } else
              2 * bt() - S.renderingStartTime > Rs && u !== 1073741824 && (a.flags |= 128, p = !0, zu(S, !1), a.lanes = 4194304);
          S.isBackwards ? (_.sibling = a.child, a.child = _) : (u = S.last, u !== null ? u.sibling = _ : a.child = _, S.last = _);
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
        return To(), kt(sn), kt(Xe), Xc(), n = a.flags, n & 65536 && !(n & 128) ? (a.flags = n & -65537 | 128, a) : null;
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
        return To(), null;
      case 10:
        return bo(a.type._context), null;
      case 22:
      case 23:
        return jp(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Fu = !1, Dn = !1, mm = typeof WeakSet == "function" ? WeakSet : Set, Re = null;
  function bs(n, a) {
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
  function Pu(n, a, u) {
    try {
      u();
    } catch (p) {
      cn(n, a, p);
    }
  }
  var gm = !1;
  function ym(n, a) {
    if (Zd = tl, n = jc(), Ni(n)) {
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
            var _ = 0, M = -1, j = -1, q = 0, le = 0, ue = n, ie = null;
            t:
              for (; ; ) {
                for (var Ce; ue !== u || g !== 0 && ue.nodeType !== 3 || (M = _ + g), ue !== S || p !== 0 && ue.nodeType !== 3 || (j = _ + p), ue.nodeType === 3 && (_ += ue.nodeValue.length), (Ce = ue.firstChild) !== null; )
                  ie = ue, ue = Ce;
                for (; ; ) {
                  if (ue === n)
                    break t;
                  if (ie === u && ++q === g && (M = _), ie === S && ++le === p && (j = _), (Ce = ue.nextSibling) !== null)
                    break;
                  ue = ie, ie = ue.parentNode;
                }
                ue = Ce;
              }
            u = M === -1 || j === -1 ? null : { start: M, end: j };
          } else
            u = null;
        }
      u = u || { start: 0, end: 0 };
    } else
      u = null;
    for (ol = { focusedElem: n, selectionRange: u }, tl = !1, Re = a; Re !== null; )
      if (a = Re, n = a.child, (a.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = a, Re = n;
      else
        for (; Re !== null; ) {
          a = Re;
          try {
            var Me = a.alternate;
            if (a.flags & 1024)
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Me !== null) {
                    var je = Me.memoizedProps, hn = Me.memoizedState, I = a.stateNode, F = I.getSnapshotBeforeUpdate(a.elementType === a.type ? je : oa(a.type, je), hn);
                    I.__reactInternalSnapshotBeforeUpdate = F;
                  }
                  break;
                case 3:
                  var B = a.stateNode.containerInfo;
                  B.nodeType === 1 ? B.textContent = "" : B.nodeType === 9 && B.documentElement && B.removeChild(B.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(l(163));
              }
          } catch (he) {
            cn(a, a.return, he);
          }
          if (n = a.sibling, n !== null) {
            n.return = a.return, Re = n;
            break;
          }
          Re = a.return;
        }
    return Me = gm, gm = !1, Me;
  }
  function Hu(n, a, u) {
    var p = a.updateQueue;
    if (p = p !== null ? p.lastEffect : null, p !== null) {
      var g = p = p.next;
      do {
        if ((g.tag & n) === n) {
          var S = g.destroy;
          g.destroy = void 0, S !== void 0 && Pu(a, u, S);
        }
        g = g.next;
      } while (g !== p);
    }
  }
  function Iu(n, a) {
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
    a !== null && (n.alternate = null, Rp(a)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (a = n.stateNode, a !== null && (delete a[ui], delete a[sl], delete a[ep], delete a[x0], delete a[tp])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
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
  function Es(n, a, u) {
    var p = n.tag;
    if (p === 5 || p === 6)
      n = n.stateNode, a ? u.nodeType === 8 ? u.parentNode.insertBefore(n, a) : u.insertBefore(n, a) : (u.nodeType === 8 ? (a = u.parentNode, a.insertBefore(n, u)) : (a = u, a.appendChild(n)), u = u._reactRootContainer, u != null || a.onclick !== null || (a.onclick = Hc));
    else if (p !== 4 && (n = n.child, n !== null))
      for (Es(n, a, u), n = n.sibling; n !== null; )
        Es(n, a, u), n = n.sibling;
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
      Cs(n, a, u), u = u.sibling;
  }
  function Cs(n, a, u) {
    if (Ba && typeof Ba.onCommitFiberUnmount == "function")
      try {
        Ba.onCommitFiberUnmount(au, u);
      } catch {
      }
    switch (u.tag) {
      case 5:
        Dn || bs(u, a);
      case 6:
        var p = Jt, g = Hn;
        Jt = null, Da(n, a, u), Jt = p, Hn = g, Jt !== null && (Hn ? (n = Jt, u = u.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(u) : n.removeChild(u)) : Jt.removeChild(u.stateNode));
        break;
      case 18:
        Jt !== null && (Hn ? (n = Jt, u = u.stateNode, n.nodeType === 8 ? mo(n.parentNode, u) : n.nodeType === 1 && mo(n, u), uu(n)) : mo(Jt, u.stateNode));
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
            var S = g, _ = S.destroy;
            S = S.tag, _ !== void 0 && (S & 2 || S & 4) && Pu(u, a, _), g = g.next;
          } while (g !== p);
        }
        Da(n, a, u);
        break;
      case 1:
        if (!Dn && (bs(u, a), p = u.stateNode, typeof p.componentWillUnmount == "function"))
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
  function Ii(n) {
    var a = n.updateQueue;
    if (a !== null) {
      n.updateQueue = null;
      var u = n.stateNode;
      u === null && (u = n.stateNode = new mm()), a.forEach(function(p) {
        var g = L0.bind(null, n, p);
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
          var S = n, _ = a, M = _;
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
          Cs(S, _, g), Jt = null, Hn = !1;
          var j = g.alternate;
          j !== null && (j.return = null), g.return = null;
        } catch (q) {
          cn(g, a, q);
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
            Hu(3, n, n.return), Iu(3, n);
          } catch (je) {
            cn(n, n.return, je);
          }
          try {
            Hu(5, n, n.return);
          } catch (je) {
            cn(n, n.return, je);
          }
        }
        break;
      case 1:
        Xa(a, n), hi(n), p & 512 && u !== null && bs(u, u.return);
        break;
      case 5:
        if (Xa(a, n), hi(n), p & 512 && u !== null && bs(u, u.return), n.flags & 32) {
          var g = n.stateNode;
          try {
            $a(g, "");
          } catch (je) {
            cn(n, n.return, je);
          }
        }
        if (p & 4 && (g = n.stateNode, g != null)) {
          var S = n.memoizedProps, _ = u !== null ? u.memoizedProps : S, M = n.type, j = n.updateQueue;
          if (n.updateQueue = null, j !== null)
            try {
              M === "input" && S.type === "radio" && S.name != null && or(g, S), dn(M, _);
              var q = dn(M, S);
              for (_ = 0; _ < j.length; _ += 2) {
                var le = j[_], ue = j[_ + 1];
                le === "style" ? Nt(g, ue) : le === "dangerouslySetInnerHTML" ? oo(g, ue) : le === "children" ? $a(g, ue) : K(g, le, ue, q);
              }
              switch (M) {
                case "input":
                  lr(g, S);
                  break;
                case "textarea":
                  li(g, S);
                  break;
                case "select":
                  var ie = g._wrapperState.wasMultiple;
                  g._wrapperState.wasMultiple = !!S.multiple;
                  var Ce = S.value;
                  Ce != null ? oi(g, !!S.multiple, Ce, !1) : ie !== !!S.multiple && (S.defaultValue != null ? oi(
                    g,
                    !!S.multiple,
                    S.defaultValue,
                    !0
                  ) : oi(g, !!S.multiple, S.multiple ? [] : "", !1));
              }
              g[sl] = S;
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
            uu(a.containerInfo);
          } catch (je) {
            cn(n, n.return, je);
          }
        break;
      case 4:
        Xa(a, n), hi(n);
        break;
      case 13:
        Xa(a, n), hi(n), g = n.child, g.flags & 8192 && (S = g.memoizedState !== null, g.stateNode.isHidden = S, !S || g.alternate !== null && g.alternate.memoizedState !== null || (Mp = bt())), p & 4 && Ii(n);
        break;
      case 22:
        if (le = u !== null && u.memoizedState !== null, n.mode & 1 ? (Dn = (q = Dn) || le, Xa(a, n), Dn = q) : Xa(a, n), hi(n), p & 8192) {
          if (q = n.memoizedState !== null, (n.stateNode.isHidden = q) && !le && n.mode & 1)
            for (Re = n, le = n.child; le !== null; ) {
              for (ue = Re = le; Re !== null; ) {
                switch (ie = Re, Ce = ie.child, ie.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Hu(4, ie, ie.return);
                    break;
                  case 1:
                    bs(ie, ie.return);
                    var Me = ie.stateNode;
                    if (typeof Me.componentWillUnmount == "function") {
                      p = ie, u = ie.return;
                      try {
                        a = p, Me.props = a.memoizedProps, Me.state = a.memoizedState, Me.componentWillUnmount();
                      } catch (je) {
                        cn(p, u, je);
                      }
                    }
                    break;
                  case 5:
                    bs(ie, ie.return);
                    break;
                  case 22:
                    if (ie.memoizedState !== null) {
                      Dp(ue);
                      continue;
                    }
                }
                Ce !== null ? (Ce.return = ie, Re = Ce) : Dp(ue);
              }
              le = le.sibling;
            }
          e:
            for (le = null, ue = n; ; ) {
              if (ue.tag === 5) {
                if (le === null) {
                  le = ue;
                  try {
                    g = ue.stateNode, q ? (S = g.style, typeof S.setProperty == "function" ? S.setProperty("display", "none", "important") : S.display = "none") : (M = ue.stateNode, j = ue.memoizedProps.style, _ = j != null && j.hasOwnProperty("display") ? j.display : null, M.style.display = ut("display", _));
                  } catch (je) {
                    cn(n, n.return, je);
                  }
                }
              } else if (ue.tag === 6) {
                if (le === null)
                  try {
                    ue.stateNode.nodeValue = q ? "" : ue.memoizedProps;
                  } catch (je) {
                    cn(n, n.return, je);
                  }
              } else if ((ue.tag !== 22 && ue.tag !== 23 || ue.memoizedState === null || ue === n) && ue.child !== null) {
                ue.child.return = ue, ue = ue.child;
                continue;
              }
              if (ue === n)
                break e;
              for (; ue.sibling === null; ) {
                if (ue.return === null || ue.return === n)
                  break e;
                le === ue && (le = null), ue = ue.return;
              }
              le === ue && (le = null), ue.sibling.return = ue.return, ue = ue.sibling;
            }
        }
        break;
      case 19:
        Xa(a, n), hi(n), p & 4 && Ii(n);
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
            var _ = p.stateNode.containerInfo, M = wf(n);
            Es(n, M, _);
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
    Re = n, _s(n);
  }
  function _s(n, a, u) {
    for (var p = (n.mode & 1) !== 0; Re !== null; ) {
      var g = Re, S = g.child;
      if (g.tag === 22 && p) {
        var _ = g.memoizedState !== null || Fu;
        if (!_) {
          var M = g.alternate, j = M !== null && M.memoizedState !== null || Dn;
          M = Fu;
          var q = Dn;
          if (Fu = _, (Dn = j) && !q)
            for (Re = g; Re !== null; )
              _ = Re, j = _.child, _.tag === 22 && _.memoizedState !== null ? Em(g) : j !== null ? (j.return = _, Re = j) : Em(g);
          for (; S !== null; )
            Re = S, _s(S), S = S.sibling;
          Re = g, Fu = M, Dn = q;
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
                Dn || Iu(5, a);
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
                S !== null && cl(a, S, p);
                break;
              case 3:
                var _ = a.updateQueue;
                if (_ !== null) {
                  if (u = null, a.child !== null)
                    switch (a.child.tag) {
                      case 5:
                        u = a.child.stateNode;
                        break;
                      case 1:
                        u = a.child.stateNode;
                    }
                  cl(a, _, u);
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
                  var q = a.alternate;
                  if (q !== null) {
                    var le = q.memoizedState;
                    if (le !== null) {
                      var ue = le.dehydrated;
                      ue !== null && uu(ue);
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
        } catch (ie) {
          cn(a, a.return, ie);
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
              Iu(4, a);
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
            var _ = a.return;
            try {
              kp(a);
            } catch (j) {
              cn(a, _, j);
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
  var bf = Math.ceil, Yu = ae.ReactCurrentDispatcher, Op = ae.ReactCurrentOwner, dr = ae.ReactCurrentBatchConfig, pt = 0, rn = null, un = null, In = 0, sa = 0, Ts = rt(0), On = 0, $u = null, Yi = 0, Ef = 0, ks = 0, bl = null, Sr = null, Mp = 0, Rs = 1 / 0, $i = null, Cf = !1, El = null, vi = null, Oo = !1, Mo = null, _f = 0, Ds = 0, Tf = null, Cl = -1, _l = 0;
  function pr() {
    return pt & 6 ? bt() : Cl !== -1 ? Cl : Cl = bt();
  }
  function wn(n) {
    return n.mode & 1 ? pt & 2 && In !== 0 ? In & -In : Wc.transition !== null ? (_l === 0 && (_l = bc()), _l) : (n = Lt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Md(n.type)), n) : 1;
  }
  function hr(n, a, u, p) {
    if (50 < Ds)
      throw Ds = 0, Tf = null, Error(l(185));
    el(n, u, p), (!(pt & 2) || n !== rn) && (n === rn && (!(pt & 2) && (Ef |= u), On === 4 && Oa(n, In)), vr(n, p), u === 1 && pt === 0 && !(a.mode & 1) && (Rs = bt() + 500, Fn && Ar()));
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
            u = Ri;
            break;
          case 4:
            u = dt;
            break;
          case 16:
            u = co;
            break;
          case 536870912:
            u = Cd;
            break;
          default:
            u = co;
        }
        u = zp(u, Os.bind(null, n));
      }
      n.callbackPriority = a, n.callbackNode = u;
    }
  }
  function Os(n, a) {
    if (Cl = -1, _l = 0, pt & 6)
      throw Error(l(327));
    var u = n.callbackNode;
    if (Ns() && n.callbackNode !== u)
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
      (rn !== n || In !== a) && ($i = null, Rs = bt() + 500, Tl(n, a));
      do
        try {
          D0();
          break;
        } catch (M) {
          _m(n, M);
        }
      while (1);
      up(), Yu.current = S, pt = g, un !== null ? a = 0 : (rn = null, In = 0, a = On);
    }
    if (a !== 0) {
      if (a === 2 && (g = Td(n), g !== 0 && (p = g, a = Np(n, g))), a === 1)
        throw u = $u, Tl(n, 0), Oa(n, p), vr(n, bt()), u;
      if (a === 6)
        Oa(n, p);
      else {
        if (g = n.current.alternate, !(p & 30) && !Lp(g) && (a = Rf(n, p), a === 2 && (S = Td(n), S !== 0 && (p = S, a = Np(n, S))), a === 1))
          throw u = $u, Tl(n, 0), Oa(n, p), vr(n, bt()), u;
        switch (n.finishedWork = g, n.finishedLanes = p, a) {
          case 0:
          case 1:
            throw Error(l(345));
          case 2:
            kl(n, Sr, $i);
            break;
          case 3:
            if (Oa(n, p), (p & 130023424) === p && (a = Mp + 500 - bt(), 10 < a)) {
              if (Wa(n, 0) !== 0)
                break;
              if (g = n.suspendedLanes, (g & p) !== p) {
                pr(), n.pingedLanes |= n.suspendedLanes & g;
                break;
              }
              n.timeoutHandle = ll(kl.bind(null, n, Sr, $i), a);
              break;
            }
            kl(n, Sr, $i);
            break;
          case 4:
            if (Oa(n, p), (p & 4194240) === p)
              break;
            for (a = n.eventTimes, g = -1; 0 < p; ) {
              var _ = 31 - ga(p);
              S = 1 << _, _ = a[_], _ > g && (g = _), p &= ~S;
            }
            if (p = g, p = bt() - p, p = (120 > p ? 120 : 480 > p ? 480 : 1080 > p ? 1080 : 1920 > p ? 1920 : 3e3 > p ? 3e3 : 4320 > p ? 4320 : 1960 * bf(p / 1960)) - p, 10 < p) {
              n.timeoutHandle = ll(kl.bind(null, n, Sr, $i), p);
              break;
            }
            kl(n, Sr, $i);
            break;
          case 5:
            kl(n, Sr, $i);
            break;
          default:
            throw Error(l(329));
        }
      }
    }
    return vr(n, bt()), n.callbackNode === u ? Os.bind(null, n) : null;
  }
  function Np(n, a) {
    var u = bl;
    return n.current.memoizedState.isDehydrated && (Tl(n, a).flags |= 256), n = Rf(n, a), n !== 2 && (a = Sr, Sr = u, a !== null && Vu(a)), n;
  }
  function Vu(n) {
    Sr === null ? Sr = n : Sr.push.apply(Sr, n);
  }
  function Lp(n) {
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
    for (a &= ~ks, a &= ~Ef, n.suspendedLanes |= a, n.pingedLanes &= ~a, n = n.expirationTimes; 0 < a; ) {
      var u = 31 - ga(a), p = 1 << u;
      n[u] = -1, a &= ~p;
    }
  }
  function Cm(n) {
    if (pt & 6)
      throw Error(l(327));
    Ns();
    var a = Wa(n, 0);
    if (!(a & 1))
      return vr(n, bt()), null;
    var u = Rf(n, a);
    if (n.tag !== 0 && u === 2) {
      var p = Td(n);
      p !== 0 && (a = p, u = Np(n, p));
    }
    if (u === 1)
      throw u = $u, Tl(n, 0), Oa(n, a), vr(n, bt()), u;
    if (u === 6)
      throw Error(l(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = a, kl(n, Sr, $i), vr(n, bt()), null;
  }
  function Ms(n, a) {
    var u = pt;
    pt |= 1;
    try {
      return n(a);
    } finally {
      pt = u, pt === 0 && (Rs = bt() + 500, Fn && Ar());
    }
  }
  function No(n) {
    Mo !== null && Mo.tag === 0 && !(pt & 6) && Ns();
    var a = pt;
    pt |= 1;
    var u = dr.transition, p = Lt;
    try {
      if (dr.transition = null, Lt = 1, n)
        return n();
    } finally {
      Lt = p, dr.transition = u, pt = a, !(pt & 6) && Ar();
    }
  }
  function jp() {
    sa = Ts.current, kt(Ts);
  }
  function Tl(n, a) {
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
            To(), kt(sn), kt(Xe), Xc();
            break;
          case 5:
            ct(p);
            break;
          case 4:
            To();
            break;
          case 13:
            kt(Ge);
            break;
          case 19:
            kt(Ge);
            break;
          case 10:
            bo(p.type._context);
            break;
          case 22:
          case 23:
            jp();
        }
        u = u.return;
      }
    if (rn = n, un = n = Lo(n.current, null), In = sa = a, On = 0, $u = null, ks = Ef = Yi = 0, Sr = bl = null, Gn !== null) {
      for (a = 0; a < Gn.length; a++)
        if (u = Gn[a], p = u.interleaved, p !== null) {
          u.interleaved = null;
          var g = p.next, S = u.pending;
          if (S !== null) {
            var _ = S.next;
            S.next = g, p.next = _;
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
        if (dl = 0, mt = ee = Gt = null, di = !1, la = 0, Op.current = null, u === null || u.return === null) {
          On = 1, $u = a, un = null;
          break;
        }
        e: {
          var S = n, _ = u.return, M = u, j = a;
          if (a = In, M.flags |= 32768, j !== null && typeof j == "object" && typeof j.then == "function") {
            var q = j, le = M, ue = le.tag;
            if (!(le.mode & 1) && (ue === 0 || ue === 11 || ue === 15)) {
              var ie = le.alternate;
              ie ? (le.updateQueue = ie.updateQueue, le.memoizedState = ie.memoizedState, le.lanes = ie.lanes) : (le.updateQueue = null, le.memoizedState = null);
            }
            var Ce = yp(_);
            if (Ce !== null) {
              Ce.flags &= -257, Sp(Ce, _, M, S, a), Ce.mode & 1 && pm(S, q, a), a = Ce, j = q;
              var Me = a.updateQueue;
              if (Me === null) {
                var je = /* @__PURE__ */ new Set();
                je.add(j), a.updateQueue = je;
              } else
                Me.add(j);
              break e;
            } else {
              if (!(a & 1)) {
                pm(S, q, a), Up();
                break e;
              }
              j = Error(l(426));
            }
          } else if (Wt && M.mode & 1) {
            var hn = yp(_);
            if (hn !== null) {
              !(hn.flags & 65536) && (hn.flags |= 256), Sp(hn, _, M, S, a), lp(Ss(j, M));
              break e;
            }
          }
          S = j = Ss(j, M), On !== 4 && (On = 2), bl === null ? bl = [S] : bl.push(S), S = _;
          do {
            switch (S.tag) {
              case 3:
                S.flags |= 65536, a &= -a, S.lanes |= a;
                var I = dm(S, j, a);
                dp(S, I);
                break e;
              case 1:
                M = j;
                var F = S.type, B = S.stateNode;
                if (!(S.flags & 128) && (typeof F.getDerivedStateFromError == "function" || B !== null && typeof B.componentDidCatch == "function" && (vi === null || !vi.has(B)))) {
                  S.flags |= 65536, a &= -a, S.lanes |= a;
                  var he = Uu(S, M, a);
                  dp(S, he);
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
    var n = Yu.current;
    return Yu.current = mf, n === null ? mf : n;
  }
  function Up() {
    (On === 0 || On === 3 || On === 2) && (On = 4), rn === null || !(Yi & 268435455) && !(Ef & 268435455) || Oa(rn, In);
  }
  function Rf(n, a) {
    var u = pt;
    pt |= 2;
    var p = kf();
    (rn !== n || In !== a) && ($i = null, Tl(n, a));
    do
      try {
        R0();
        break;
      } catch (g) {
        _m(n, g);
      }
    while (1);
    if (up(), pt = u, Yu.current = p, un !== null)
      throw Error(l(261));
    return rn = null, In = 0, On;
  }
  function R0() {
    for (; un !== null; )
      Tm(un);
  }
  function D0() {
    for (; un !== null && !uo(); )
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
  function kl(n, a, u) {
    var p = Lt, g = dr.transition;
    try {
      dr.transition = null, Lt = 1, O0(n, a, u, p);
    } finally {
      dr.transition = g, Lt = p;
    }
    return null;
  }
  function O0(n, a, u, p) {
    do
      Ns();
    while (Mo !== null);
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
    if (n0(n, S), n === rn && (un = rn = null, In = 0), !(u.subtreeFlags & 2064) && !(u.flags & 2064) || Oo || (Oo = !0, zp(co, function() {
      return Ns(), null;
    })), S = (u.flags & 15990) !== 0, u.subtreeFlags & 15990 || S) {
      S = dr.transition, dr.transition = null;
      var _ = Lt;
      Lt = 1;
      var M = pt;
      pt |= 4, Op.current = null, ym(n, u), xm(u, n), Uc(ol), tl = !!Zd, ol = Zd = null, n.current = u, wm(u), Sc(), pt = M, Lt = _, dr.transition = S;
    } else
      n.current = u;
    if (Oo && (Oo = !1, Mo = n, _f = g), S = n.pendingLanes, S === 0 && (vi = null), dv(u.stateNode), vr(n, bt()), a !== null)
      for (p = n.onRecoverableError, u = 0; u < a.length; u++)
        g = a[u], p(g.value, { componentStack: g.stack, digest: g.digest });
    if (Cf)
      throw Cf = !1, n = El, El = null, n;
    return _f & 1 && n.tag !== 0 && Ns(), S = n.pendingLanes, S & 1 ? n === Tf ? Ds++ : (Ds = 0, Tf = n) : Ds = 0, Ar(), null;
  }
  function Ns() {
    if (Mo !== null) {
      var n = Rd(_f), a = dr.transition, u = Lt;
      try {
        if (dr.transition = null, Lt = 16 > n ? 16 : n, Mo === null)
          var p = !1;
        else {
          if (n = Mo, Mo = null, _f = 0, pt & 6)
            throw Error(l(331));
          var g = pt;
          for (pt |= 4, Re = n.current; Re !== null; ) {
            var S = Re, _ = S.child;
            if (Re.flags & 16) {
              var M = S.deletions;
              if (M !== null) {
                for (var j = 0; j < M.length; j++) {
                  var q = M[j];
                  for (Re = q; Re !== null; ) {
                    var le = Re;
                    switch (le.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Hu(8, le, S);
                    }
                    var ue = le.child;
                    if (ue !== null)
                      ue.return = le, Re = ue;
                    else
                      for (; Re !== null; ) {
                        le = Re;
                        var ie = le.sibling, Ce = le.return;
                        if (Rp(le), le === q) {
                          Re = null;
                          break;
                        }
                        if (ie !== null) {
                          ie.return = Ce, Re = ie;
                          break;
                        }
                        Re = Ce;
                      }
                  }
                }
                var Me = S.alternate;
                if (Me !== null) {
                  var je = Me.child;
                  if (je !== null) {
                    Me.child = null;
                    do {
                      var hn = je.sibling;
                      je.sibling = null, je = hn;
                    } while (je !== null);
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
                        Hu(9, S, S.return);
                    }
                  var I = S.sibling;
                  if (I !== null) {
                    I.return = S.return, Re = I;
                    break e;
                  }
                  Re = S.return;
                }
          }
          var F = n.current;
          for (Re = F; Re !== null; ) {
            _ = Re;
            var B = _.child;
            if (_.subtreeFlags & 2064 && B !== null)
              B.return = _, Re = B;
            else
              e:
                for (_ = F; Re !== null; ) {
                  if (M = Re, M.flags & 2048)
                    try {
                      switch (M.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Iu(9, M);
                      }
                    } catch (Ue) {
                      cn(M, M.return, Ue);
                    }
                  if (M === _) {
                    Re = null;
                    break e;
                  }
                  var he = M.sibling;
                  if (he !== null) {
                    he.return = M.return, Re = he;
                    break e;
                  }
                  Re = M.return;
                }
          }
          if (pt = g, Ar(), Ba && typeof Ba.onPostCommitFiberRoot == "function")
            try {
              Ba.onPostCommitFiberRoot(au, n);
            } catch {
            }
          p = !0;
        }
        return p;
      } finally {
        Lt = u, dr.transition = a;
      }
    }
    return !1;
  }
  function km(n, a, u) {
    a = Ss(u, a), a = dm(n, a, 1), n = Co(n, a, 1), a = pr(), n !== null && (el(n, 1, a), vr(n, a));
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
            n = Ss(u, n), n = Uu(a, n, 1), a = Co(a, n, 1), n = pr(), a !== null && (el(a, 1, n), vr(a, n));
            break;
          }
        }
        a = a.return;
      }
  }
  function M0(n, a, u) {
    var p = n.pingCache;
    p !== null && p.delete(a), a = pr(), n.pingedLanes |= n.suspendedLanes & u, rn === n && (In & u) === u && (On === 4 || On === 3 && (In & 130023424) === In && 500 > bt() - Mp ? Tl(n, 0) : ks |= u), vr(n, a);
  }
  function Df(n, a) {
    a === 0 && (n.mode & 1 ? (a = es, es <<= 1, !(es & 130023424) && (es = 4194304)) : a = 1);
    var u = pr();
    n = zi(n, a), n !== null && (el(n, a, u), vr(n, u));
  }
  function N0(n) {
    var a = n.memoizedState, u = 0;
    a !== null && (u = a.retryLane), Df(n, u);
  }
  function L0(n, a) {
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
        xn = !0;
      else {
        if (!(n.lanes & u) && !(a.flags & 128))
          return xn = !1, Hi(n, a, u);
        xn = !!(n.flags & 131072);
      }
    else
      xn = !1, Wt && a.flags & 1048576 && ap(a, ds, a.index);
    switch (a.lanes = 0, a.tag) {
      case 2:
        var p = a.type;
        cr(n, a), n = a.pendingProps;
        var g = ba(a, Xe.current);
        ge(a, u), g = ko(null, a, p, n, g, u);
        var S = vl();
        return a.flags |= 1, typeof g == "object" && g !== null && typeof g.render == "function" && g.$$typeof === void 0 ? (a.tag = 1, a.memoizedState = null, a.updateQueue = null, Xt(p) ? (S = !0, Ic(a)) : S = !1, a.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null, fp(a), g.updater = qc, a.stateNode = g, g._reactInternals = a, Kc(a, p, n, u), a = hm(null, a, p, !0, S, u)) : (a.tag = 0, Wt && S && Yc(a), kn(null, a, g, u), a = a.child), a;
      case 16:
        p = a.elementType;
        e: {
          switch (cr(n, a), n = a.pendingProps, g = p._init, p = g(p._payload), a.type = p, g = a.tag = U0(p), n = oa(p, n), g) {
            case 0:
              a = xs(null, a, p, n, u);
              break e;
            case 1:
              a = xp(null, a, p, n, u);
              break e;
            case 11:
              a = Do(null, a, p, n, u);
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
        return p = a.type, g = a.pendingProps, g = a.elementType === p ? g : oa(p, g), xs(n, a, p, g, u);
      case 1:
        return p = a.type, g = a.pendingProps, g = a.elementType === p ? g : oa(p, g), xp(n, a, p, g, u);
      case 3:
        e: {
          if (vm(a), n === null)
            throw Error(l(387));
          p = a.pendingProps, S = a.memoizedState, g = S.element, Tn(n, a), _o(a, p, null, u);
          var _ = a.memoizedState;
          if (p = _.element, S.isDehydrated)
            if (S = { element: p, isDehydrated: !1, cache: _.cache, pendingSuspenseBoundaries: _.pendingSuspenseBoundaries, transitions: _.transitions }, a.updateQueue.baseState = S, a.memoizedState = S, a.flags & 256) {
              g = Ss(Error(l(423)), a), a = Sf(n, a, p, u, g);
              break e;
            } else if (p !== g) {
              g = Ss(Error(l(424)), a), a = Sf(n, a, p, u, g);
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
        return Ve(a), n === null && Vc(a), p = a.type, g = a.pendingProps, S = n !== null ? n.memoizedProps : null, _ = g.children, Eu(p, g) ? _ = null : S !== null && Eu(p, S) && (a.flags |= 32), at(n, a), kn(n, a, _, u), a.child;
      case 6:
        return n === null && Vc(a), null;
      case 13:
        return bp(n, a, u);
      case 4:
        return hp(a, a.stateNode.containerInfo), p = a.pendingProps, n === null ? a.child = hs(a, null, p, u) : kn(n, a, p, u), a.child;
      case 11:
        return p = a.type, g = a.pendingProps, g = a.elementType === p ? g : oa(p, g), Do(n, a, p, g, u);
      case 7:
        return kn(n, a, a.pendingProps, u), a.child;
      case 8:
        return kn(n, a, a.pendingProps.children, u), a.child;
      case 12:
        return kn(n, a, a.pendingProps.children, u), a.child;
      case 10:
        e: {
          if (p = a.type._context, g = a.pendingProps, S = a.memoizedProps, _ = g.value, Rt(fi, p._currentValue), p._currentValue = _, S !== null)
            if (xa(S.value, _)) {
              if (S.children === g.children && !sn.current) {
                a = Qn(n, a, u);
                break e;
              }
            } else
              for (S = a.child, S !== null && (S.return = a); S !== null; ) {
                var M = S.dependencies;
                if (M !== null) {
                  _ = S.child;
                  for (var j = M.firstContext; j !== null; ) {
                    if (j.context === p) {
                      if (S.tag === 1) {
                        j = Fi(-1, u & -u), j.tag = 2;
                        var q = S.updateQueue;
                        if (q !== null) {
                          q = q.shared;
                          var le = q.pending;
                          le === null ? j.next = j : (j.next = le.next, le.next = j), q.pending = j;
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
                  _ = S.type === a.type ? null : S.child;
                else if (S.tag === 18) {
                  if (_ = S.return, _ === null)
                    throw Error(l(341));
                  _.lanes |= u, M = _.alternate, M !== null && (M.lanes |= u), Pn(_, u, a), _ = S.sibling;
                } else
                  _ = S.child;
                if (_ !== null)
                  _.return = S;
                else
                  for (_ = S; _ !== null; ) {
                    if (_ === a) {
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
        return Sl(n, a, u);
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
    var _ = 2;
    if (p = n, typeof n == "function")
      Fp(n) && (_ = 1);
    else if (typeof n == "string")
      _ = 5;
    else
      e:
        switch (n) {
          case Z:
            return Rl(u.children, g, S, a);
          case we:
            _ = 8, g |= 8;
            break;
          case de:
            return n = Ma(12, u, a, g | 2), n.elementType = de, n.lanes = S, n;
          case De:
            return n = Ma(13, u, a, g), n.elementType = De, n.lanes = S, n;
          case Ze:
            return n = Ma(19, u, a, g), n.elementType = Ze, n.lanes = S, n;
          case Vt:
            return Bu(u, g, S, a);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case ve:
                  _ = 10;
                  break e;
                case Ae:
                  _ = 9;
                  break e;
                case Qe:
                  _ = 11;
                  break e;
                case lt:
                  _ = 14;
                  break e;
                case st:
                  _ = 16, p = null;
                  break e;
              }
            throw Error(l(130, n == null ? n : typeof n, ""));
        }
    return a = Ma(_, u, a, g), a.elementType = n, a.type = p, a.lanes = S, a;
  }
  function Rl(n, a, u, p) {
    return n = Ma(7, n, p, a), n.lanes = u, n;
  }
  function Bu(n, a, u, p) {
    return n = Ma(22, n, p, a), n.elementType = Vt, n.lanes = u, n.stateNode = { isHidden: !1 }, n;
  }
  function Wu(n, a, u) {
    return n = Ma(6, n, null, a), n.lanes = u, n;
  }
  function Dl(n, a, u) {
    return a = Ma(4, n.children !== null ? n.children : [], n.key, a), a.lanes = u, a.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, a;
  }
  function A0(n, a, u, p, g) {
    this.tag = a, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = kd(0), this.expirationTimes = kd(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = kd(0), this.identifierPrefix = p, this.onRecoverableError = g, this.mutableSourceEagerHydrationData = null;
  }
  function Mf(n, a, u, p, g, S, _, M, j) {
    return n = new A0(n, a, u, M, j), a === 1 ? (a = 1, S === !0 && (a |= 8)) : a = 0, S = Ma(3, null, null, a), n.current = S, S.stateNode = n, S.memoizedState = { element: p, isDehydrated: u, cache: null, transitions: null, pendingSuspenseBoundaries: null }, fp(S), n;
  }
  function Dm(n, a, u) {
    var p = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: V, key: p == null ? null : "" + p, children: n, containerInfo: a, implementation: u };
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
        return Tu(n, u, a);
    }
    return a;
  }
  function Om(n, a, u, p, g, S, _, M, j) {
    return n = Mf(u, p, !0, n, g, S, _, M, j), n.context = Pp(null), u = n.current, p = pr(), g = wn(u), S = Fi(p, g), S.callback = a ?? null, Co(u, S, g), n.current.lanes = g, el(n, g, p), vr(n, p), n;
  }
  function Gu(n, a, u, p) {
    var g = a.current, S = pr(), _ = wn(g);
    return u = Pp(u), a.context === null ? a.context = u : a.pendingContext = u, a = Fi(S, _), a.payload = { element: n }, p = p === void 0 ? null : p, p !== null && (a.callback = p), n = Co(g, a, _), n !== null && (hr(n, g, _, S), Qc(n, g, _)), _;
  }
  function Nf(n) {
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
  function Nm() {
    return null;
  }
  var Ip = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Lf(n) {
    this._internalRoot = n;
  }
  Vi.prototype.render = Lf.prototype.render = function(n) {
    var a = this._internalRoot;
    if (a === null)
      throw Error(l(409));
    Gu(n, a, null, null);
  }, Vi.prototype.unmount = Lf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var a = n.containerInfo;
      No(function() {
        Gu(null, n, null, null);
      }), a[Ui] = null;
    }
  };
  function Vi(n) {
    this._internalRoot = n;
  }
  Vi.prototype.unstable_scheduleHydration = function(n) {
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
  function Lm() {
  }
  function z0(n, a, u, p, g) {
    if (g) {
      if (typeof p == "function") {
        var S = p;
        p = function() {
          var q = Nf(_);
          S.call(q);
        };
      }
      var _ = Om(a, p, n, 0, null, !1, !1, "", Lm);
      return n._reactRootContainer = _, n[Ui] = _.current, cs(n.nodeType === 8 ? n.parentNode : n), No(), _;
    }
    for (; g = n.lastChild; )
      n.removeChild(g);
    if (typeof p == "function") {
      var M = p;
      p = function() {
        var q = Nf(j);
        M.call(q);
      };
    }
    var j = Mf(n, 0, !1, null, null, !1, !1, "", Lm);
    return n._reactRootContainer = j, n[Ui] = j.current, cs(n.nodeType === 8 ? n.parentNode : n), No(function() {
      Gu(a, j, u, p);
    }), j;
  }
  function Uf(n, a, u, p, g) {
    var S = u._reactRootContainer;
    if (S) {
      var _ = S;
      if (typeof g == "function") {
        var M = g;
        g = function() {
          var j = Nf(_);
          M.call(j);
        };
      }
      Gu(a, _, n, g);
    } else
      _ = z0(u, a, n, g, p);
    return Nf(_);
  }
  vv = function(n) {
    switch (n.tag) {
      case 3:
        var a = n.stateNode;
        if (a.current.memoizedState.isDehydrated) {
          var u = Jo(a.pendingLanes);
          u !== 0 && (iu(a, u | 1), vr(a, bt()), !(pt & 6) && (Rs = bt() + 500, Ar()));
        }
        break;
      case 13:
        No(function() {
          var p = zi(n, 1);
          if (p !== null) {
            var g = pr();
            hr(p, n, 1, g);
          }
        }), Hp(n, 1);
    }
  }, Ec = function(n) {
    if (n.tag === 13) {
      var a = zi(n, 134217728);
      if (a !== null) {
        var u = pr();
        hr(a, n, 134217728, u);
      }
      Hp(n, 134217728);
    }
  }, Ft = function(n) {
    if (n.tag === 13) {
      var a = wn(n), u = zi(n, a);
      if (u !== null) {
        var p = pr();
        hr(u, n, a, p);
      }
      Hp(n, a);
    }
  }, mv = function() {
    return Lt;
  }, Dd = function(n, a) {
    var u = Lt;
    try {
      return Lt = n, a();
    } finally {
      Lt = u;
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
  }, ru = Ms, yc = No;
  var F0 = { usingClientEntryPoint: !1, Events: [_u, fs, Ie, Ko, Zl, Ms] }, Ls = { findFiberByHostInstance: wa, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, P0 = { bundleType: Ls.bundleType, version: Ls.version, rendererPackageName: Ls.rendererPackageName, rendererConfig: Ls.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ae.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Un(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Ls.findFiberByHostInstance || Nm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Af = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Af.isDisabled && Af.supportsFiber)
      try {
        au = Af.inject(P0), Ba = Af;
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
    return a != null && (a.unstable_strictMode === !0 && (u = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (g = a.onRecoverableError)), a = Mf(n, 1, !1, null, null, u, !1, p, g), n[Ui] = a.current, cs(n.nodeType === 8 ? n.parentNode : n), new Lf(a);
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
    return No(n);
  }, za.hydrate = function(n, a, u) {
    if (!jf(a))
      throw Error(l(200));
    return Uf(null, n, a, !0, u);
  }, za.hydrateRoot = function(n, a, u) {
    if (!Yp(n))
      throw Error(l(405));
    var p = u != null && u.hydratedSources || null, g = !1, S = "", _ = Ip;
    if (u != null && (u.unstable_strictMode === !0 && (g = !0), u.identifierPrefix !== void 0 && (S = u.identifierPrefix), u.onRecoverableError !== void 0 && (_ = u.onRecoverableError)), a = Om(a, null, n, 1, u ?? null, g, !1, S, _), n[Ui] = a.current, cs(n), p)
      for (n = 0; n < p.length; n++)
        u = p[n], g = u._getVersion, g = g(u._source), a.mutableSourceEagerHydrationData == null ? a.mutableSourceEagerHydrationData = [u, g] : a.mutableSourceEagerHydrationData.push(
          u,
          g
        );
    return new Vi(a);
  }, za.render = function(n, a, u) {
    if (!jf(a))
      throw Error(l(200));
    return Uf(null, n, a, !1, u);
  }, za.unmountComponentAtNode = function(n) {
    if (!jf(n))
      throw Error(l(40));
    return n._reactRootContainer ? (No(function() {
      Uf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Ui] = null;
      });
    }), !0) : !1;
  }, za.unstable_batchedUpdates = Ms, za.unstable_renderSubtreeIntoContainer = function(n, a, u, p) {
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
var hT;
function l3() {
  return hT || (hT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var r = Dr, o = Wk(), l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, c = !1;
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
    var w = 0, C = 1, T = 2, R = 3, O = 4, U = 5, L = 6, H = 7, ne = 8, oe = 9, W = 10, K = 11, ae = 12, te = 13, V = 14, Z = 15, we = 16, de = 17, ve = 18, Ae = 19, Qe = 21, De = 22, Ze = 23, lt = 24, st = 25, Vt = !0, me = !1, Pe = !1, be = !1, wt = !1, Tt = !0, Vn = !1, gr = !1, ai = !0, Cn = !0, ha = !0, ar = /* @__PURE__ */ new Set(), Mr = {}, ii = {};
    function Nr(e, t) {
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
    var Ln = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ir = Object.prototype.hasOwnProperty;
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
    function ki(e, t) {
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
    var li = 0, Xr = 1, Ya = 2, gn = 3, Jr = 4, oo = 5, $a = 6, Se = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", He = Se + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ut = new RegExp("^[" + Se + "][" + He + "]*$"), Nt = {}, en = {};
    function jn(e) {
      return ir.call(en, e) ? !0 : ir.call(Nt, e) ? !1 : ut.test(e) ? (en[e] = !0, !0) : (Nt[e] = !0, v("Invalid attribute name: `%s`", e), !1);
    }
    function dn(e, t, i) {
      return t !== null ? t.type === li : i ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Lr(e, t, i, s) {
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
      if (t === null || typeof t > "u" || Lr(e, t, i, s))
        return !0;
      if (s)
        return !1;
      if (i !== null)
        switch (i.type) {
          case gn:
            return !t;
          case Jr:
            return t === !1;
          case oo:
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
      this.acceptsBooleans = t === Ya || t === gn || t === Jr, this.attributeName = s, this.attributeNamespace = f, this.mustUseProperty = i, this.propertyName = e, this.type = t, this.sanitizeURL = h, this.removeEmptyString = y;
    }
    var Yt = {}, Kl = [
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
    Kl.forEach(function(e) {
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
        gn,
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
        gn,
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
        oo,
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
    var Ko = /[\-\:]([a-z])/g, Zl = function(e) {
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
      var t = e.replace(Ko, Zl);
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
      var t = e.replace(Ko, Zl);
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
      var t = e.replace(Ko, Zl);
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
    var ru = "xlinkHref";
    Yt[ru] = new zt(
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
    var yc = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Zo = !1;
    function Xl(e) {
      !Zo && yc.test(e) && (Zo = !0, v("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Xo(e, t, i, s) {
      if (s.mustUseProperty) {
        var f = s.propertyName;
        return e[f];
      } else {
        ma(i, t), s.sanitizeURL && Xl("" + i);
        var h = s.attributeName, y = null;
        if (s.type === Jr) {
          if (e.hasAttribute(h)) {
            var x = e.getAttribute(h);
            return x === "" ? !0 : It(t, i, s, !1) ? x : x === "" + i ? i : x;
          }
        } else if (e.hasAttribute(h)) {
          if (It(t, i, s, !1))
            return e.getAttribute(h);
          if (s.type === gn)
            return i;
          y = e.getAttribute(h);
        }
        return It(t, i, s, !1) ? y === null ? i : y : y === "" + i ? i : y;
      }
    }
    function Jl(e, t, i, s) {
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
            e[x] = b === gn ? !1 : "";
          } else
            e[x] = i;
          return;
        }
        var k = f.attributeName, D = f.attributeNamespace;
        if (i === null)
          e.removeAttribute(k);
        else {
          var P = f.type, z;
          P === gn || P === Jr && i === !0 ? z = "" : (ma(i, k), z = "" + i, f.sanitizeURL && Xl(z.toString())), D ? e.setAttributeNS(D, k, z) : e.setAttribute(k, z);
        }
      }
    }
    var lo = Symbol.for("react.element"), ta = Symbol.for("react.portal"), Va = Symbol.for("react.fragment"), so = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), se = Symbol.for("react.provider"), xe = Symbol.for("react.context"), $e = Symbol.for("react.forward_ref"), it = Symbol.for("react.suspense"), St = Symbol.for("react.suspense_list"), ot = Symbol.for("react.memo"), We = Symbol.for("react.lazy"), Un = Symbol.for("react.scope"), Kt = Symbol.for("react.debug_trace_mode"), Zt = Symbol.for("react.offscreen"), yr = Symbol.for("react.legacy_hidden"), uo = Symbol.for("react.cache"), Sc = Symbol.for("react.tracing_marker"), bt = Symbol.iterator, e0 = "@@iterator";
    function Ri(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = bt && e[bt] || e[e0];
      return typeof t == "function" ? t : null;
    }
    var dt = Object.assign, co = 0, fv, Cd, au, Ba, dv, ga, pv;
    function hv() {
    }
    hv.__reactDisabledLog = !0;
    function t0() {
      {
        if (co === 0) {
          fv = console.log, Cd = console.info, au = console.warn, Ba = console.error, dv = console.group, ga = console.groupCollapsed, pv = console.groupEnd;
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
        co++;
      }
    }
    function xc() {
      {
        if (co--, co === 0) {
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
              value: au
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
        co < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var es = l.ReactCurrentDispatcher, Jo;
    function Wa(e, t, i) {
      {
        if (Jo === void 0)
          try {
            throw Error();
          } catch (f) {
            var s = f.stack.trim().match(/\n( *(at )?)/);
            Jo = s && s[1] || "";
          }
        return `
` + Jo + e;
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
      h = es.current, es.current = null, t0();
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
            } catch (Q) {
              s = Q;
            }
            Reflect.construct(e, [], y);
          } else {
            try {
              y.call();
            } catch (Q) {
              s = Q;
            }
            e.call(y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Q) {
            s = Q;
          }
          e();
        }
      } catch (Q) {
        if (Q && s && typeof Q.stack == "string") {
          for (var x = Q.stack.split(`
`), b = s.stack.split(`
`), k = x.length - 1, D = b.length - 1; k >= 1 && D >= 0 && x[k] !== b[D]; )
            D--;
          for (; k >= 1 && D >= 0; k--, D--)
            if (x[k] !== b[D]) {
              if (k !== 1 || D !== 1)
                do
                  if (k--, D--, D < 0 || x[k] !== b[D]) {
                    var P = `
` + x[k].replace(" at new ", " at ");
                    return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), typeof e == "function" && wc.set(e, P), P;
                  }
                while (k >= 1 && D >= 0);
              break;
            }
        }
      } finally {
        _d = !1, es.current = h, xc(), Error.prepareStackTrace = f;
      }
      var z = e ? e.displayName || e.name : "", G = z ? Wa(z) : "";
      return typeof e == "function" && wc.set(e, G), G;
    }
    function kd(e, t, i) {
      return bc(e, !0);
    }
    function el(e, t, i) {
      return bc(e, !1);
    }
    function n0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function iu(e, t, i) {
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
            return el(e.render);
          case ot:
            return iu(e.type, t, i);
          case We: {
            var s = e, f = s._payload, h = s._init;
            try {
              return iu(h(f), t, i);
            } catch {
            }
          }
        }
      return "";
    }
    function Lt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case U:
          return Wa(e.type);
        case we:
          return Wa("Lazy");
        case te:
          return Wa("Suspense");
        case Ae:
          return Wa("SuspenseList");
        case w:
        case T:
        case Z:
          return el(e.type);
        case K:
          return el(e.type.render);
        case C:
          return kd(e.type);
        default:
          return "";
      }
    }
    function Rd(e) {
      try {
        var t = "", i = e;
        do
          t += Lt(i), i = i.return;
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
        case N:
          return "Profiler";
        case so:
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
          case se:
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
        case oe:
          var s = i;
          return Dd(s) + ".Consumer";
        case W:
          var f = i;
          return Dd(f._context) + ".Provider";
        case ve:
          return "DehydratedFragment";
        case K:
          return mv(i, i.render, "ForwardRef");
        case H:
          return "Fragment";
        case U:
          return i;
        case O:
          return "Portal";
        case R:
          return "Root";
        case L:
          return "Text";
        case we:
          return Ft(i);
        case ne:
          return i === so ? "StrictMode" : "Mode";
        case De:
          return "Offscreen";
        case ae:
          return "Profiler";
        case Qe:
          return "Scope";
        case te:
          return "Suspense";
        case Ae:
          return "SuspenseList";
        case st:
          return "TracingMarker";
        case C:
        case w:
        case de:
        case T:
        case V:
        case Z:
          if (typeof i == "function")
            return i.displayName || i.name || null;
          if (typeof i == "string")
            return i;
          break;
      }
      return null;
    }
    var ou = l.ReactDebugCurrentFrame, yn = null, ya = !1;
    function Sa() {
      {
        if (yn === null)
          return null;
        var e = yn._debugOwner;
        if (e !== null && typeof e < "u")
          return nt(e);
      }
      return null;
    }
    function lu() {
      return yn === null ? "" : Rd(yn);
    }
    function _n() {
      ou.getCurrentStack = null, yn = null, ya = !1;
    }
    function jt(e) {
      ou.getCurrentStack = e === null ? null : lu, yn = e, ya = !1;
    }
    function r0() {
      return yn;
    }
    function Ga(e) {
      ya = e;
    }
    function sr(e) {
      return "" + e;
    }
    function fo(e) {
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
    function ts(e, t) {
      gv[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || v("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || v("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Od(e) {
      var t = e.type, i = e.nodeName;
      return i && i.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function yv(e) {
      return e._valueTracker;
    }
    function su(e) {
      e._valueTracker = null;
    }
    function uu(e) {
      var t = "";
      return e && (Od(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function ns(e) {
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
            su(e), delete e[t];
          }
        };
        return y;
      }
    }
    function tl(e) {
      yv(e) || (e._valueTracker = ns(e));
    }
    function Sv(e) {
      if (!e)
        return !1;
      var t = yv(e);
      if (!t)
        return !0;
      var i = t.getValue(), s = uu(e);
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
    var _c = !1, cu = !1, Tc = !1, Md = !1;
    function Di(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function fu(e, t) {
      var i = e, s = t.checked, f = dt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: s ?? i._wrapperState.initialChecked
      });
      return f;
    }
    function du(e, t) {
      ts("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !cu && (v("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Sa() || "A component", t.type), cu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !_c && (v("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Sa() || "A component", t.type), _c = !0);
      var i = e, s = t.defaultValue == null ? "" : t.defaultValue;
      i._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: fo(t.value != null ? t.value : s),
        controlled: Di(t)
      };
    }
    function Nd(e, t) {
      var i = e, s = t.checked;
      s != null && si(i, "checked", s, !1);
    }
    function rs(e, t) {
      var i = e;
      {
        var s = Di(t);
        !i._wrapperState.controlled && s && !Md && (v("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Md = !0), i._wrapperState.controlled && !s && !Tc && (v("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Tc = !0);
      }
      Nd(e, t);
      var f = fo(t.value), h = t.type;
      if (f != null)
        h === "number" ? (f === 0 && i.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        i.value != f) && (i.value = sr(f)) : i.value !== sr(f) && (i.value = sr(f));
      else if (h === "submit" || h === "reset") {
        i.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? po(i, t.type, f) : t.hasOwnProperty("defaultValue") && po(i, t.type, fo(t.defaultValue)), t.checked == null && t.defaultChecked != null && (i.defaultChecked = !!t.defaultChecked);
    }
    function pu(e, t, i) {
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
      rs(i, t), na(i, t);
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
            Sv(y), rs(y, x);
          }
        }
      }
    }
    function po(e, t, i) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Cc(e.ownerDocument) !== e) && (i == null ? e.defaultValue = sr(e._wrapperState.initialValue) : e.defaultValue !== sr(i) && (e.defaultValue = sr(i)));
    }
    var kc = !1, as = !1, wv = !1;
    function Rc(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? r.Children.forEach(t.children, function(i) {
        i != null && (typeof i == "string" || typeof i == "number" || as || (as = !0, v("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (wv || (wv = !0, v("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !kc && (v("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), kc = !0);
    }
    function Ld(e, t) {
      t.value != null && e.setAttribute("value", sr(fo(t.value)));
    }
    var hu = Array.isArray;
    function An(e) {
      return hu(e);
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
        ts("select", e);
        for (var t = 0; t < Ev.length; t++) {
          var i = Ev[t];
          if (e[i] != null) {
            var s = An(e[i]);
            e.multiple && !s ? v("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", i, bv()) : !e.multiple && s && v("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", i, bv());
          }
        }
      }
    }
    function ho(e, t, i, s) {
      var f = e.options;
      if (t) {
        for (var h = i, y = {}, x = 0; x < h.length; x++)
          y["$" + h[x]] = !0;
        for (var b = 0; b < f.length; b++) {
          var k = y.hasOwnProperty("$" + f[b].value);
          f[b].selected !== k && (f[b].selected = k), k && s && (f[b].defaultSelected = !0);
        }
      } else {
        for (var D = sr(fo(i)), P = null, z = 0; z < f.length; z++) {
          if (f[z].value === D) {
            f[z].selected = !0, s && (f[z].defaultSelected = !0);
            return;
          }
          P === null && !f[z].disabled && (P = f[z]);
        }
        P !== null && (P.selected = !0);
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
      s != null ? ho(i, !!t.multiple, s, !1) : t.defaultValue != null && ho(i, !!t.multiple, t.defaultValue, !0);
    }
    function o0(e, t) {
      var i = e, s = i._wrapperState.wasMultiple;
      i._wrapperState.wasMultiple = !!t.multiple;
      var f = t.value;
      f != null ? ho(i, !!t.multiple, f, !1) : s !== !!t.multiple && (t.defaultValue != null ? ho(i, !!t.multiple, t.defaultValue, !0) : ho(i, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function l0(e, t) {
      var i = e, s = t.value;
      s != null && ho(i, !!t.multiple, s, !1);
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
      ts("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Ud && (v("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Sa() || "A component"), Ud = !0);
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
        initialValue: fo(s)
      };
    }
    function Tv(e, t) {
      var i = e, s = fo(t.value), f = fo(t.defaultValue);
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
    var Oi = "http://www.w3.org/1999/xhtml", s0 = "http://www.w3.org/1998/Math/MathML", Fd = "http://www.w3.org/2000/svg";
    function Oc(e) {
      switch (e) {
        case "svg":
          return Fd;
        case "math":
          return s0;
        default:
          return Oi;
      }
    }
    function Pd(e, t) {
      return e == null || e === Oi ? Oc(t) : e === Fd && t === "foreignObject" ? Oi : e;
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
    }), jr = 1, Mi = 3, Sn = 8, Qa = 9, nl = 11, Nc = function(e, t) {
      if (t) {
        var i = e.firstChild;
        if (i && i === e.lastChild && i.nodeType === Mi) {
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
    }, is = {
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
    Object.keys(is).forEach(function(e) {
      Mv.forEach(function(t) {
        is[Ov(t, e)] = is[e];
      });
    });
    function Lc(e, t, i) {
      var s = t == null || typeof t == "boolean" || t === "";
      return s ? "" : !i && typeof t == "number" && t !== 0 && !(is.hasOwnProperty(e) && is[e]) ? t + "px" : (oi(t, e), ("" + t).trim());
    }
    var os = /([A-Z])/g, c0 = /^ms-/;
    function f0(e) {
      return e.replace(os, "-$1").toLowerCase().replace(c0, "-ms-");
    }
    var Nv = function() {
    };
    {
      var Lv = /^(?:webkit|moz|o)[A-Z]/, jv = /^-ms-/, vu = /-(.)/g, ls = /;\s*$/, ss = {}, us = {}, Uv = !1, Hd = !1, Id = function(e) {
        return e.replace(vu, function(t, i) {
          return i.toUpperCase();
        });
      }, Yd = function(e) {
        ss.hasOwnProperty(e) && ss[e] || (ss[e] = !0, v(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Id(e.replace(jv, "ms-"))
        ));
      }, Av = function(e) {
        ss.hasOwnProperty(e) && ss[e] || (ss[e] = !0, v("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, zv = function(e, t) {
        us.hasOwnProperty(t) && us[t] || (us[t] = !0, v(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(ls, "")));
      }, Fv = function(e, t) {
        Uv || (Uv = !0, v("`NaN` is an invalid value for the `%s` css style property.", e));
      }, d0 = function(e, t) {
        Hd || (Hd = !0, v("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Nv = function(e, t) {
        e.indexOf("-") > -1 ? Yd(e) : Lv.test(e) ? Av(e) : ls.test(t) && zv(e, t), typeof t == "number" && (isNaN(t) ? Fv(e, t) : isFinite(t) || d0(e, t));
      };
    }
    var p0 = Nv;
    function h0(e) {
      {
        var t = "", i = "";
        for (var s in e)
          if (e.hasOwnProperty(s)) {
            var f = e[s];
            if (f != null) {
              var h = s.indexOf("--") === 0;
              t += i + (h ? s : f0(s)) + ":", t += Lc(s, f, h), i = ";";
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
          var h = Lc(s, t[s], f);
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
    function mu(e, t) {
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
    function Ni(e, t) {
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
    }, qa = {}, $d = new RegExp("^(aria)-[" + He + "]*$"), gu = new RegExp("^(aria)[A-Z][" + He + "]*$");
    function Vd(e, t) {
      {
        if (ir.call(qa, t) && qa[t])
          return !0;
        if (gu.test(t)) {
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
      Ni(e, t) || Vv(e, t);
    }
    var rl = !1;
    function Bd(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !rl && (rl = !0, e === "select" && t.multiple ? v("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : v("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
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
        var b = ea(t), k = b !== null && b.type === li;
        if (Uc.hasOwnProperty(f)) {
          var D = Uc[f];
          if (D !== t)
            return v("Invalid DOM property `%s`. Did you mean `%s`?", t, D), zn[t] = !0, !0;
        } else if (!k && t !== f)
          return v("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, f), zn[t] = !0, !0;
        return typeof i == "boolean" && Lr(t, i, b, !1) ? (i ? v('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', i, t, t, i, t) : v('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', i, t, t, i, t, t, t), zn[t] = !0, !0) : k ? !0 : Lr(t, i, b, !1) ? (zn[t] = !0, !1) : ((i === "false" || i === "true") && b !== null && b.type === gn && (v("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", i, t, i === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, i), zn[t] = !0), !0);
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
      Ni(e, t) || Qv(e, t, i);
    }
    var Li = 1, yu = 2, al = 4, m0 = Li | yu | al, Su = null;
    function xu(e) {
      Su !== null && v("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Su = e;
    }
    function g0() {
      Su === null && v("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Su = null;
    }
    function Kv(e) {
      return e === Su;
    }
    function zc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Mi ? t.parentNode : t;
    }
    var Pt = null, vo = null, ji = null;
    function cs(e) {
      var t = As(e);
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
      vo ? ji ? ji.push(e) : ji = [e] : vo = e;
    }
    function wu() {
      return vo !== null || ji !== null;
    }
    function bu() {
      if (vo) {
        var e = vo, t = ji;
        if (vo = null, ji = null, cs(e), t)
          for (var i = 0; i < t.length; i++)
            cs(t[i]);
      }
    }
    var il = function(e, t) {
      return e(t);
    }, Qd = function() {
    }, qd = !1;
    function y0() {
      var e = wu();
      e && (Qd(), bu());
    }
    function Kd(e, t, i) {
      if (qd)
        return e(t, i);
      qd = !0;
      try {
        return il(e, t, i);
      } finally {
        qd = !1, y0();
      }
    }
    function Pc(e, t, i) {
      il = e, Qd = i;
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
    function ol(e, t) {
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
    var Eu = !1;
    if (Ln)
      try {
        var ll = {};
        Object.defineProperty(ll, "passive", {
          get: function() {
            Eu = !0;
          }
        }), window.addEventListener("test", ll, ll), window.removeEventListener("test", ll, ll);
      } catch {
        Eu = !1;
      }
    function Xv(e, t, i, s, f, h, y, x, b) {
      var k = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(i, k);
      } catch (D) {
        this.onError(D);
      }
    }
    var Xd = Xv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Jd = document.createElement("react");
      Xd = function(t, i, s, f, h, y, x, b, k) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var D = document.createEvent("Event"), P = !1, z = !0, G = window.event, Q = Object.getOwnPropertyDescriptor(window, "event");
        function X() {
          Jd.removeEventListener(J, Ye, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = G);
        }
        var Te = Array.prototype.slice.call(arguments, 3);
        function Ye() {
          P = !0, X(), i.apply(s, Te), z = !1;
        }
        var ze, yt = !1, ht = !1;
        function Y($) {
          if (ze = $.error, yt = !0, ze === null && $.colno === 0 && $.lineno === 0 && (ht = !0), $.defaultPrevented && ze != null && typeof ze == "object")
            try {
              ze._suppressLogging = !0;
            } catch {
            }
        }
        var J = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", Y), Jd.addEventListener(J, Ye, !1), D.initEvent(J, !1, !1), Jd.dispatchEvent(D), Q && Object.defineProperty(window, "event", Q), P && z && (yt ? ht && (ze = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : ze = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(ze)), window.removeEventListener("error", Y), !P)
          return X(), Xv.apply(this, arguments);
      };
    }
    var S0 = Xd, mo = !1, Ka = null, Cu = !1, go = null, ui = {
      onError: function(e) {
        mo = !0, Ka = e;
      }
    };
    function sl(e, t, i, s, f, h, y, x, b) {
      mo = !1, Ka = null, S0.apply(ui, arguments);
    }
    function Ui(e, t, i, s, f, h, y, x, b) {
      if (sl.apply(this, arguments), mo) {
        var k = tp();
        Cu || (Cu = !0, go = k);
      }
    }
    function ep() {
      if (Cu) {
        var e = go;
        throw Cu = !1, go = null, e;
      }
    }
    function x0() {
      return mo;
    }
    function tp() {
      if (mo) {
        var e = Ka;
        return mo = !1, Ka = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function wa(e) {
      return e._reactInternals;
    }
    function _u(e) {
      return e._reactInternals !== void 0;
    }
    function fs(e, t) {
      e._reactInternals = t;
    }
    var Ie = (
      /*                      */
      0
    ), yo = (
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
    ), So = (
      /*                   */
      8192
    ), Tu = (
      /*             */
      16384
    ), Ic = Xt | rt | ci | Ur | ba | Tu, Jv = (
      /*               */
      32767
    ), ra = (
      /*                   */
      32768
    ), Fn = (
      /*                */
      65536
    ), ku = (
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
    ), xo = (
      /*                */
      8388608
    ), zr = (
      /*               */
      16777216
    ), ul = (
      /*              */
      33554432
    ), ds = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      rt | ba | 0
    ), Fr = Bt | rt | kt | Rt | Ur | Ea | So, ur = rt | ci | Ur | So, Ca = Xt | kt, Wn = Ar | xo | rp, Ai = l.ReactCurrentOwner;
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
      return t.tag === R ? i : null;
    }
    function ap(e) {
      if (e.tag === te) {
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
      return e.tag === R ? e.stateNode.containerInfo : null;
    }
    function ip(e) {
      return aa(e) === e;
    }
    function ia(e) {
      {
        var t = Ai.current;
        if (t !== null && t.tag === C) {
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
          for (var k = !1, D = h.child; D; ) {
            if (D === s) {
              k = !0, s = h, f = y;
              break;
            }
            if (D === f) {
              k = !0, f = h, s = y;
              break;
            }
            D = D.sibling;
          }
          if (!k) {
            for (D = y.child; D; ) {
              if (D === s) {
                k = !0, s = y, f = h;
                break;
              }
              if (D === f) {
                k = !0, f = y, s = h;
                break;
              }
              D = D.sibling;
            }
            if (!k)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (s.alternate !== f)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (s.tag !== R)
        throw new Error("Unable to find node on an unmounted component.");
      return s.stateNode.current === s ? e : t;
    }
    function _a(e) {
      var t = Wt(e);
      return t !== null ? op(t) : null;
    }
    function op(e) {
      if (e.tag === U || e.tag === L)
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
      if (e.tag === U || e.tag === L)
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
    var Vc = o.unstable_scheduleCallback, tm = o.unstable_cancelCallback, Bc = o.unstable_shouldYield, nm = o.unstable_requestPaint, tn = o.unstable_now, lp = o.unstable_getCurrentPriorityLevel, Wc = o.unstable_ImmediatePriority, oa = o.unstable_UserBlockingPriority, fi = o.unstable_NormalPriority, Gc = o.unstable_LowPriority, wo = o.unstable_IdlePriority, sp = o.unstable_yieldValue, up = o.unstable_setDisableYieldValue, bo = null, Pn = null, ge = null, pn = !1, Gn = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
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
          getLaneLabelMap: Co,
          injectProfilingHooks: Fi
        })), bo = t.inject(e), Pn = t;
      } catch (i) {
        v("React instrumentation encountered an error: %s.", i);
      }
      return !!t.checkDCE;
    }
    function rm(e, t) {
      if (Pn && typeof Pn.onScheduleFiberRoot == "function")
        try {
          Pn.onScheduleFiberRoot(bo, e, t);
        } catch (i) {
          pn || (pn = !0, v("React instrumentation encountered an error: %s", i));
        }
    }
    function zi(e, t) {
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
              case Hi:
                s = fi;
                break;
              case Au:
                s = wo;
                break;
              default:
                s = fi;
                break;
            }
            Pn.onCommitFiberRoot(bo, e, s, i);
          }
        } catch (f) {
          pn || (pn = !0, v("React instrumentation encountered an error: %s", f));
        }
    }
    function Eo(e) {
      if (Pn && typeof Pn.onPostCommitFiberRoot == "function")
        try {
          Pn.onPostCommitFiberRoot(bo, e);
        } catch (t) {
          pn || (pn = !0, v("React instrumentation encountered an error: %s", t));
        }
    }
    function fp(e) {
      if (Pn && typeof Pn.onCommitFiberUnmount == "function")
        try {
          Pn.onCommitFiberUnmount(bo, e);
        } catch (t) {
          pn || (pn = !0, v("React instrumentation encountered an error: %s", t));
        }
    }
    function Tn(e) {
      if (typeof sp == "function" && (up(e), d(e)), Pn && typeof Pn.setStrictMode == "function")
        try {
          Pn.setStrictMode(bo, e);
        } catch (t) {
          pn || (pn = !0, v("React instrumentation encountered an error: %s", t));
        }
    }
    function Fi(e) {
      ge = e;
    }
    function Co() {
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
    function _o(e) {
      ge !== null && typeof ge.markComponentRenderStarted == "function" && ge.markComponentRenderStarted(e);
    }
    function cl() {
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
    function ps() {
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
    function hs() {
      ge !== null && typeof ge.markLayoutEffectsStopped == "function" && ge.markLayoutEffectsStopped();
    }
    function cm(e) {
      ge !== null && typeof ge.markPassiveEffectsStarted == "function" && ge.markPassiveEffectsStarted(e);
    }
    function Ru() {
      ge !== null && typeof ge.markPassiveEffectsStopped == "function" && ge.markPassiveEffectsStopped();
    }
    function Za(e) {
      ge !== null && typeof ge.markRenderStarted == "function" && ge.markRenderStarted(e);
    }
    function Du() {
      ge !== null && typeof ge.markRenderYielded == "function" && ge.markRenderYielded();
    }
    function vs() {
      ge !== null && typeof ge.markRenderStopped == "function" && ge.markRenderStopped();
    }
    function fl(e) {
      ge !== null && typeof ge.markRenderScheduled == "function" && ge.markRenderScheduled(e);
    }
    function hp(e, t) {
      ge !== null && typeof ge.markForceUpdateScheduled == "function" && ge.markForceUpdateScheduled(e, t);
    }
    function To(e, t) {
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
    ), Xc = Math.clz32 ? Math.clz32 : dl, Jc = Math.log, vp = Math.LN2;
    function dl(e) {
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
    ), pl = (
      /*            */
      8
    ), Qt = (
      /*                     */
      16
    ), hl = (
      /*                */
      32
    ), ko = (
      /*                       */
      4194240
    ), vl = (
      /*                        */
      64
    ), ka = (
      /*                        */
      128
    ), Hr = (
      /*                        */
      256
    ), ml = (
      /*                        */
      512
    ), Ou = (
      /*                        */
      1024
    ), Mu = (
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
    ), gl = (
      /*                       */
      1048576
    ), uf = (
      /*                       */
      2097152
    ), yl = (
      /*                            */
      130023424
    ), Pi = (
      /*                             */
      4194304
    ), cf = (
      /*                             */
      8388608
    ), Nu = (
      /*                             */
      16777216
    ), ff = (
      /*                             */
      33554432
    ), df = (
      /*                             */
      67108864
    ), mp = Pi, ms = (
      /*          */
      134217728
    ), pf = (
      /*                          */
      268435455
    ), gs = (
      /*               */
      268435456
    ), Ro = (
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
        if (e & pl)
          return "DefaultHydration";
        if (e & Qt)
          return "Default";
        if (e & hl)
          return "TransitionHydration";
        if (e & ko)
          return "Transition";
        if (e & yl)
          return "Retry";
        if (e & ms)
          return "SelectiveHydration";
        if (e & gs)
          return "IdleHydration";
        if (e & Ro)
          return "Idle";
        if (e & Ir)
          return "Offscreen";
      }
    }
    var Ht = -1, hf = vl, vf = Pi;
    function ys(e) {
      switch (xn(e)) {
        case qe:
          return qe;
        case di:
          return di;
        case la:
          return la;
        case pl:
          return pl;
        case Qt:
          return Qt;
        case hl:
          return hl;
        case vl:
        case ka:
        case Hr:
        case ml:
        case Ou:
        case Mu:
        case ef:
        case tf:
        case nf:
        case rf:
        case af:
        case of:
        case lf:
        case sf:
        case gl:
        case uf:
          return e & ko;
        case Pi:
        case cf:
        case Nu:
        case ff:
        case df:
          return e & yl;
        case ms:
          return ms;
        case gs:
          return gs;
        case Ro:
          return Ro;
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
          s = ys(x);
        else {
          var b = y & h;
          b !== ee && (s = ys(b));
        }
      } else {
        var k = i & ~f;
        k !== ee ? s = ys(k) : h !== ee && (s = ys(h));
      }
      if (s === ee)
        return ee;
      if (t !== ee && t !== s && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & f) === ee) {
        var D = xn(s), P = xn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          D >= P || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          D === Qt && (P & ko) !== ee
        )
          return t;
      }
      (s & la) !== ee && (s |= i & Qt);
      var z = e.entangledLanes;
      if (z !== ee)
        for (var G = e.entanglements, Q = s & z; Q > 0; ) {
          var X = Do(Q), Te = 1 << X;
          s |= G[X], Q &= ~Te;
        }
      return s;
    }
    function fm(e, t) {
      for (var i = e.eventTimes, s = Ht; t > 0; ) {
        var f = Do(t), h = 1 << f, y = i[f];
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
        case pl:
        case Qt:
        case hl:
        case vl:
        case ka:
        case Hr:
        case ml:
        case Ou:
        case Mu:
        case ef:
        case tf:
        case nf:
        case rf:
        case af:
        case of:
        case lf:
        case sf:
        case gl:
        case uf:
          return t + 5e3;
        case Pi:
        case cf:
        case Nu:
        case ff:
        case df:
          return Ht;
        case ms:
        case gs:
        case Ro:
        case Ir:
          return Ht;
        default:
          return v("Should have found matching lanes. This is a bug in React."), Ht;
      }
    }
    function b0(e, t) {
      for (var i = e.pendingLanes, s = e.suspendedLanes, f = e.pingedLanes, h = e.expirationTimes, y = i; y > 0; ) {
        var x = Do(y), b = 1 << x, k = h[x];
        k === Ht ? ((b & s) === ee || (b & f) !== ee) && (h[x] = mf(b, t)) : k <= t && (e.expiredLanes |= b), y &= ~b;
      }
    }
    function E0(e) {
      return ys(e.pendingLanes);
    }
    function gp(e) {
      var t = e.pendingLanes & ~Ir;
      return t !== ee ? t : t & Ir ? Ir : ee;
    }
    function Ss(e) {
      return (e & qe) !== ee;
    }
    function ju(e) {
      return (e & pf) !== ee;
    }
    function gf(e) {
      return (e & yl) === e;
    }
    function C0(e) {
      var t = qe | la | Qt;
      return (e & t) === ee;
    }
    function dm(e) {
      return (e & ko) === e;
    }
    function Uu(e, t) {
      var i = di | la | pl | Qt;
      return (t & i) !== ee;
    }
    function pm(e, t) {
      return (t & e.expiredLanes) !== ee;
    }
    function yp(e) {
      return (e & ko) !== ee;
    }
    function Sp() {
      var e = hf;
      return hf <<= 1, (hf & ko) === ee && (hf = vl), e;
    }
    function _0() {
      var e = vf;
      return vf <<= 1, (vf & yl) === ee && (vf = Pi), e;
    }
    function xn(e) {
      return e & -e;
    }
    function kn(e) {
      return xn(e);
    }
    function Do(e) {
      return 31 - Xc(e);
    }
    function yf(e) {
      return Do(e);
    }
    function Yr(e, t) {
      return (e & t) !== ee;
    }
    function Sl(e, t) {
      return (e & t) === t;
    }
    function at(e, t) {
      return e | t;
    }
    function xs(e, t) {
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
    function xl(e, t, i) {
      e.pendingLanes |= t, t !== Ro && (e.suspendedLanes = ee, e.pingedLanes = ee);
      var s = e.eventTimes, f = yf(t);
      s[f] = i;
    }
    function wp(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var i = e.expirationTimes, s = t; s > 0; ) {
        var f = Do(s), h = 1 << f;
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
        var x = Do(y), b = 1 << x;
        s[x] = ee, f[x] = Ht, h[x] = Ht, y &= ~b;
      }
    }
    function ws(e, t) {
      for (var i = e.entangledLanes |= t, s = e.entanglements, f = i; f; ) {
        var h = Do(f), y = 1 << h;
        // Is this one of the newly entangled lanes?
        y & t | // Is this lane transitively entangled with the newly entangled lanes?
        s[h] & t && (s[h] |= t), f &= ~y;
      }
    }
    function T0(e, t) {
      var i = xn(t), s;
      switch (i) {
        case la:
          s = di;
          break;
        case Qt:
          s = pl;
          break;
        case vl:
        case ka:
        case Hr:
        case ml:
        case Ou:
        case Mu:
        case ef:
        case tf:
        case nf:
        case rf:
        case af:
        case of:
        case lf:
        case sf:
        case gl:
        case uf:
        case Pi:
        case cf:
        case Nu:
        case ff:
        case df:
          s = hl;
          break;
        case Ro:
          s = gs;
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
    var cr = qe, Qn = la, Hi = Qt, Au = Ro, wl = mt;
    function Ra() {
      return wl;
    }
    function Rn(e) {
      wl = e;
    }
    function zu(e, t) {
      var i = wl;
      try {
        return wl = e, t();
      } finally {
        wl = i;
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
    function Fu(e) {
      var t = xn(e);
      return Tp(cr, t) ? Tp(Qn, t) ? ju(t) ? Hi : Au : Qn : cr;
    }
    function Dn(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var mm;
    function Re(e) {
      mm = e;
    }
    function bs(e) {
      mm(e);
    }
    var Pu;
    function gm(e) {
      Pu = e;
    }
    var ym;
    function Hu(e) {
      ym = e;
    }
    var Iu;
    function kp(e) {
      Iu = e;
    }
    var Rp;
    function Sm(e) {
      Rp = e;
    }
    var wf = !1, Es = [], pi = null, Jt = null, Hn = null, Da = /* @__PURE__ */ new Map(), Cs = /* @__PURE__ */ new Map(), Ii = [], Xa = [
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
          Cs.delete(s);
          break;
        }
      }
    }
    function _s(e, t, i, s, f, h) {
      if (e === null || e.nativeEvent !== h) {
        var y = hi(t, i, s, f, h);
        if (t !== null) {
          var x = As(t);
          x !== null && Pu(x);
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
          return pi = _s(pi, e, t, i, s, h), !0;
        }
        case "dragenter": {
          var y = f;
          return Jt = _s(Jt, e, t, i, s, y), !0;
        }
        case "mouseover": {
          var x = f;
          return Hn = _s(Hn, e, t, i, s, x), !0;
        }
        case "pointerover": {
          var b = f, k = b.pointerId;
          return Da.set(k, _s(Da.get(k) || null, e, t, i, s, b)), !0;
        }
        case "gotpointercapture": {
          var D = f, P = D.pointerId;
          return Cs.set(P, _s(Cs.get(P) || null, e, t, i, s, D)), !0;
        }
      }
      return !1;
    }
    function Dp(e) {
      var t = Ku(e.target);
      if (t !== null) {
        var i = aa(t);
        if (i !== null) {
          var s = i.tag;
          if (s === te) {
            var f = ap(i);
            if (f !== null) {
              e.blockedOn = f, Rp(e.priority, function() {
                ym(i);
              });
              return;
            }
          } else if (s === R) {
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
      for (var t = Iu(), i = {
        blockedOn: null,
        target: e,
        priority: t
      }, s = 0; s < Ii.length && Tp(t, Ii[s].priority); s++)
        ;
      Ii.splice(s, 0, i), s === 0 && Dp(i);
    }
    function bf(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var i = t[0], s = bl(e.domEventName, e.eventSystemFlags, i, e.nativeEvent);
        if (s === null) {
          var f = e.nativeEvent, h = new f.constructor(f.type, f);
          xu(h), f.target.dispatchEvent(h), g0();
        } else {
          var y = As(s);
          return y !== null && Pu(y), e.blockedOn = s, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Yu(e, t, i) {
      bf(e) && i.delete(t);
    }
    function Op() {
      wf = !1, pi !== null && bf(pi) && (pi = null), Jt !== null && bf(Jt) && (Jt = null), Hn !== null && bf(Hn) && (Hn = null), Da.forEach(Yu), Cs.forEach(Yu);
    }
    function dr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, wf || (wf = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, Op)));
    }
    function pt(e) {
      if (Es.length > 0) {
        dr(Es[0], e);
        for (var t = 1; t < Es.length; t++) {
          var i = Es[t];
          i.blockedOn === e && (i.blockedOn = null);
        }
      }
      pi !== null && dr(pi, e), Jt !== null && dr(Jt, e), Hn !== null && dr(Hn, e);
      var s = function(x) {
        return dr(x, e);
      };
      Da.forEach(s), Cs.forEach(s);
      for (var f = 0; f < Ii.length; f++) {
        var h = Ii[f];
        h.blockedOn === e && (h.blockedOn = null);
      }
      for (; Ii.length > 0; ) {
        var y = Ii[0];
        if (y.blockedOn !== null)
          break;
        Dp(y), y.blockedOn === null && Ii.shift();
      }
    }
    var rn = l.ReactCurrentBatchConfig, un = !0;
    function In(e) {
      un = !!e;
    }
    function sa() {
      return un;
    }
    function Ts(e, t, i) {
      var s = Sr(t), f;
      switch (s) {
        case cr:
          f = On;
          break;
        case Qn:
          f = $u;
          break;
        case Hi:
        default:
          f = Yi;
          break;
      }
      return f.bind(null, t, i, e);
    }
    function On(e, t, i, s) {
      var f = Ra(), h = rn.transition;
      rn.transition = null;
      try {
        Rn(cr), Yi(e, t, i, s);
      } finally {
        Rn(f), rn.transition = h;
      }
    }
    function $u(e, t, i, s) {
      var f = Ra(), h = rn.transition;
      rn.transition = null;
      try {
        Rn(Qn), Yi(e, t, i, s);
      } finally {
        Rn(f), rn.transition = h;
      }
    }
    function Yi(e, t, i, s) {
      un && Ef(e, t, i, s);
    }
    function Ef(e, t, i, s) {
      var f = bl(e, t, i, s);
      if (f === null) {
        G0(e, t, s, ks, i), wm(e, s);
        return;
      }
      if (bm(f, e, t, i, s)) {
        s.stopPropagation();
        return;
      }
      if (wm(e, s), t & al && xm(e)) {
        for (; f !== null; ) {
          var h = As(f);
          h !== null && bs(h);
          var y = bl(e, t, i, s);
          if (y === null && G0(e, t, s, ks, i), y === f)
            break;
          f = y;
        }
        f !== null && s.stopPropagation();
        return;
      }
      G0(e, t, s, null, i);
    }
    var ks = null;
    function bl(e, t, i, s) {
      ks = null;
      var f = zc(s), h = Ku(f);
      if (h !== null) {
        var y = aa(h);
        if (y === null)
          h = null;
        else {
          var x = y.tag;
          if (x === te) {
            var b = ap(y);
            if (b !== null)
              return b;
            h = null;
          } else if (x === R) {
            var k = y.stateNode;
            if (Dn(k))
              return Yc(y);
            h = null;
          } else
            y !== h && (h = null);
        }
      }
      return ks = h, null;
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
              return Hi;
            case wo:
              return Au;
            default:
              return Hi;
          }
        }
        default:
          return Hi;
      }
    }
    function Mp(e, t, i) {
      return e.addEventListener(t, i, !1), i;
    }
    function Rs(e, t, i) {
      return e.addEventListener(t, i, !0), i;
    }
    function $i(e, t, i, s) {
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
    var El = null, vi = null, Oo = null;
    function Mo(e) {
      return El = e, vi = Tf(), !0;
    }
    function _f() {
      El = null, vi = null, Oo = null;
    }
    function Ds() {
      if (Oo)
        return Oo;
      var e, t = vi, i = t.length, s, f = Tf(), h = f.length;
      for (e = 0; e < i && t[e] === f[e]; e++)
        ;
      var y = i - e;
      for (s = 1; s <= y && t[i - s] === f[h - s]; s++)
        ;
      var x = s > 1 ? 1 - s : void 0;
      return Oo = f.slice(e, x), Oo;
    }
    function Tf() {
      return "value" in El ? El.value : El.textContent;
    }
    function Cl(e) {
      var t, i = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && i === 13 && (t = 13)) : t = i, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function _l() {
      return !0;
    }
    function pr() {
      return !1;
    }
    function wn(e) {
      function t(i, s, f, h, y) {
        this._reactName = i, this._targetInst = f, this.type = s, this.nativeEvent = h, this.target = y, this.currentTarget = null;
        for (var x in e)
          if (e.hasOwnProperty(x)) {
            var b = e[x];
            b ? this[x] = b(h) : this[x] = h[x];
          }
        var k = h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1;
        return k ? this.isDefaultPrevented = _l : this.isDefaultPrevented = pr, this.isPropagationStopped = pr, this;
      }
      return dt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var i = this.nativeEvent;
          i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = _l);
        },
        stopPropagation: function() {
          var i = this.nativeEvent;
          i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = _l);
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
        isPersistent: _l
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
    }, vr = wn(hr), Os = dt({}, hr, {
      view: 0,
      detail: 0
    }), Np = wn(Os), Vu, Lp, Oa;
    function Cm(e) {
      e !== Oa && (Oa && e.type === "mousemove" ? (Vu = e.screenX - Oa.screenX, Lp = e.screenY - Oa.screenY) : (Vu = 0, Lp = 0), Oa = e);
    }
    var Ms = dt({}, Os, {
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
        return "movementX" in e ? e.movementX : (Cm(e), Vu);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Lp;
      }
    }), No = wn(Ms), jp = dt({}, Ms, {
      dataTransfer: 0
    }), Tl = wn(jp), _m = dt({}, Os, {
      relatedTarget: 0
    }), kf = wn(_m), Up = dt({}, hr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Rf = wn(Up), R0 = dt({}, hr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), D0 = wn(R0), Tm = dt({}, hr, {
      data: 0
    }), Ap = wn(Tm), kl = Ap, O0 = {
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
    }, Ns = {
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
        var i = Cl(e);
        return i === 13 ? "Enter" : String.fromCharCode(i);
      }
      return e.type === "keydown" || e.type === "keyup" ? Ns[e.keyCode] || "Unidentified" : "";
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
    var N0 = dt({}, Os, {
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
        return e.type === "keypress" ? Cl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Cl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), L0 = wn(N0), Rm = dt({}, Ms, {
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
    }), zp = wn(Rm), j0 = dt({}, Os, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Df
    }), Ma = wn(j0), Fp = dt({}, hr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), U0 = wn(Fp), Lo = dt({}, Ms, {
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
    }), Of = wn(Lo), Rl = [9, 13, 27, 32], Bu = 229, Wu = Ln && "CompositionEvent" in window, Dl = null;
    Ln && "documentMode" in document && (Dl = document.documentMode);
    var A0 = Ln && "TextEvent" in window && !Dl, Mf = Ln && (!Wu || Dl && Dl > 8 && Dl <= 11), Dm = 32, Pp = String.fromCharCode(Dm);
    function Om() {
      Nr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Nr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Nr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Nr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Gu = !1;
    function Nf(e) {
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
      return e === "keydown" && t.keyCode === Bu;
    }
    function Nm(e, t) {
      switch (e) {
        case "keyup":
          return Rl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Bu;
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
    function Lf(e) {
      return e.locale === "ko";
    }
    var Vi = !1;
    function Yp(e, t, i, s, f) {
      var h, y;
      if (Wu ? h = Mm(t) : Vi ? Nm(t, s) && (h = "onCompositionEnd") : Hp(t, s) && (h = "onCompositionStart"), !h)
        return null;
      Mf && !Lf(s) && (!Vi && h === "onCompositionStart" ? Vi = Mo(f) : h === "onCompositionEnd" && Vi && (y = Ds()));
      var x = zm(i, h);
      if (x.length > 0) {
        var b = new Ap(h, t, null, s, f);
        if (e.push({
          event: b,
          listeners: x
        }), y)
          b.data = y;
        else {
          var k = Ip(s);
          k !== null && (b.data = k);
        }
      }
    }
    function jf(e, t) {
      switch (e) {
        case "compositionend":
          return Ip(t);
        case "keypress":
          var i = t.which;
          return i !== Dm ? null : (Gu = !0, Pp);
        case "textInput":
          var s = t.data;
          return s === Pp && Gu ? null : s;
        default:
          return null;
      }
    }
    function Lm(e, t) {
      if (Vi) {
        if (e === "compositionend" || !Wu && Nm(e, t)) {
          var i = Ds();
          return _f(), Vi = !1, i;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Nf(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Mf && !Lf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function z0(e, t, i, s, f) {
      var h;
      if (A0 ? h = jf(t, s) : h = Lm(t, s), !h)
        return null;
      var y = zm(i, "onBeforeInput");
      if (y.length > 0) {
        var x = new kl("onBeforeInput", "beforeinput", null, s, f);
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
      if (!Ln)
        return !1;
      var t = "on" + e, i = t in document;
      if (!i) {
        var s = document.createElement("div");
        s.setAttribute(t, "return;"), i = typeof s[t] == "function";
      }
      return i;
    }
    function Af() {
      Nr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
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
    function _(e) {
      var t = Yf(e);
      if (Sv(t))
        return e;
    }
    function M(e, t) {
      if (e === "change")
        return t;
    }
    var j = !1;
    Ln && (j = P0("input") && (!document.documentMode || document.documentMode > 9));
    function q(e, t) {
      a = e, u = t, a.attachEvent("onpropertychange", ue);
    }
    function le() {
      a && (a.detachEvent("onpropertychange", ue), a = null, u = null);
    }
    function ue(e) {
      e.propertyName === "value" && _(u) && g(e);
    }
    function ie(e, t, i) {
      e === "focusin" ? (le(), q(t, i)) : e === "focusout" && le();
    }
    function Ce(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return _(u);
    }
    function Me(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function je(e, t) {
      if (e === "click")
        return _(t);
    }
    function hn(e, t) {
      if (e === "input" || e === "change")
        return _(t);
    }
    function I(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || po(e, "number", e.value);
    }
    function F(e, t, i, s, f, h, y) {
      var x = i ? Yf(i) : window, b, k;
      if (p(x) ? b = M : Ls(x) ? j ? b = hn : (b = Ce, k = ie) : Me(x) && (b = je), b) {
        var D = b(t, i);
        if (D) {
          n(e, D, s, f);
          return;
        }
      }
      k && k(t, x, i), t === "focusout" && I(x);
    }
    function B() {
      va("onMouseEnter", ["mouseout", "mouseover"]), va("onMouseLeave", ["mouseout", "mouseover"]), va("onPointerEnter", ["pointerout", "pointerover"]), va("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function he(e, t, i, s, f, h, y) {
      var x = t === "mouseover" || t === "pointerover", b = t === "mouseout" || t === "pointerout";
      if (x && !Kv(s)) {
        var k = s.relatedTarget || s.fromElement;
        if (k && (Ku(k) || nh(k)))
          return;
      }
      if (!(!b && !x)) {
        var D;
        if (f.window === f)
          D = f;
        else {
          var P = f.ownerDocument;
          P ? D = P.defaultView || P.parentWindow : D = window;
        }
        var z, G;
        if (b) {
          var Q = s.relatedTarget || s.toElement;
          if (z = i, G = Q ? Ku(Q) : null, G !== null) {
            var X = aa(G);
            (G !== X || G.tag !== U && G.tag !== L) && (G = null);
          }
        } else
          z = null, G = i;
        if (z !== G) {
          var Te = No, Ye = "onMouseLeave", ze = "onMouseEnter", yt = "mouse";
          (t === "pointerout" || t === "pointerover") && (Te = zp, Ye = "onPointerLeave", ze = "onPointerEnter", yt = "pointer");
          var ht = z == null ? D : Yf(z), Y = G == null ? D : Yf(G), J = new Te(Ye, yt + "leave", z, s, f);
          J.target = ht, J.relatedTarget = Y;
          var $ = null, ce = Ku(f);
          if (ce === i) {
            var ke = new Te(ze, yt + "enter", G, s, f);
            ke.target = Y, ke.relatedTarget = ht, $ = ke;
          }
          jR(e, J, $, z, G);
        }
      }
    }
    function Ue(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Ne = typeof Object.is == "function" ? Object.is : Ue;
    function Fe(e, t) {
      if (Ne(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var i = Object.keys(e), s = Object.keys(t);
      if (i.length !== s.length)
        return !1;
      for (var f = 0; f < i.length; f++) {
        var h = i[f];
        if (!ir.call(t, h) || !Ne(e[h], t[h]))
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
        if (i.nodeType === Mi) {
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
    function jo(e) {
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
      var h = 0, y = -1, x = -1, b = 0, k = 0, D = e, P = null;
      e:
        for (; ; ) {
          for (var z = null; D === t && (i === 0 || D.nodeType === Mi) && (y = h + i), D === s && (f === 0 || D.nodeType === Mi) && (x = h + f), D.nodeType === Mi && (h += D.nodeValue.length), (z = D.firstChild) !== null; )
            P = D, D = z;
          for (; ; ) {
            if (D === e)
              break e;
            if (P === t && ++b === i && (y = h), P === s && ++k === f && (x = h), (z = D.nextSibling) !== null)
              break;
            D = P, P = D.parentNode;
          }
          D = z;
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
        var k = xt(e, y), D = xt(e, x);
        if (k && D) {
          if (f.rangeCount === 1 && f.anchorNode === k.node && f.anchorOffset === k.offset && f.focusNode === D.node && f.focusOffset === D.offset)
            return;
          var P = i.createRange();
          P.setStart(k.node, k.offset), f.removeAllRanges(), y > x ? (f.addRange(P), f.extend(D.node, D.offset)) : (P.setEnd(D.node, D.offset), f.addRange(P));
        }
      }
    }
    function eb(e) {
      return e && e.nodeType === Mi;
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
      } : t = jo(e), t || {
        start: 0,
        end: 0
      };
    }
    function wR(e, t) {
      var i = t.start, s = t.end;
      s === void 0 && (s = i), "selectionStart" in e ? (e.selectionStart = i, e.selectionEnd = Math.min(s, e.value.length)) : vR(e, t);
    }
    var bR = Ln && "documentMode" in document && document.documentMode <= 11;
    function ER() {
      Nr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
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
        if (!$p || !Fe($p, f)) {
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
    Ln && (ab = document.createElement("div").style, "AnimationEvent" in window || (delete Ff.animationend.animation, delete Ff.animationiteration.animation, delete Ff.animationstart.animation), "TransitionEvent" in window || delete Ff.transitionend.transition);
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
    function js(e, t) {
      ub.set(e, t), Nr(t, [e]);
    }
    function kR() {
      for (var e = 0; e < cb.length; e++) {
        var t = cb[e], i = t.toLowerCase(), s = t[0].toUpperCase() + t.slice(1);
        js(i, "on" + s);
      }
      js(ib, "onAnimationEnd"), js(ob, "onAnimationIteration"), js(lb, "onAnimationStart"), js("dblclick", "onDoubleClick"), js("focusin", "onFocus"), js("focusout", "onBlur"), js(sb, "onTransitionEnd");
    }
    function RR(e, t, i, s, f, h, y) {
      var x = ub.get(t);
      if (x !== void 0) {
        var b = vr, k = t;
        switch (t) {
          case "keypress":
            if (Cl(s) === 0)
              return;
          case "keydown":
          case "keyup":
            b = L0;
            break;
          case "focusin":
            k = "focus", b = kf;
            break;
          case "focusout":
            k = "blur", b = kf;
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
            b = No;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            b = Tl;
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
            b = Np;
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
        var D = (h & al) !== 0;
        {
          var P = !D && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", z = NR(i, x, s.type, D, P);
          if (z.length > 0) {
            var G = new b(x, k, null, s, f);
            e.push({
              event: G,
              listeners: z
            });
          }
        }
      }
    }
    kR(), B(), Af(), ER(), Om();
    function DR(e, t, i, s, f, h, y) {
      RR(e, t, i, s, f, h);
      var x = (h & m0) === 0;
      x && (he(e, t, i, s, f), F(e, t, i, s, f), TR(e, t, i, s, f), Uf(e, t, i, s, f));
    }
    var Vp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], B0 = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Vp));
    function fb(e, t, i) {
      var s = e.type || "unknown-event";
      e.currentTarget = i, Ui(s, t, void 0, e), e.currentTarget = null;
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
        for (var k = 0; k < t.length; k++) {
          var D = t[k], P = D.instance, z = D.currentTarget, G = D.listener;
          if (P !== s && e.isPropagationStopped())
            return;
          fb(e, G, z), s = P;
        }
    }
    function db(e, t) {
      for (var i = (t & al) !== 0, s = 0; s < e.length; s++) {
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
      s.has(f) || (pb(t, e, yu, i), s.add(f));
    }
    function W0(e, t, i) {
      B0.has(e) && !t && v('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var s = 0;
      t && (s |= al), pb(i, e, s, t);
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
      var h = Ts(e, t, i), y = void 0;
      Eu && (t === "touchstart" || t === "touchmove" || t === "wheel") && (y = !0), e = e, s ? y !== void 0 ? $i(e, t, h, y) : Rs(e, t, h) : y !== void 0 ? Cf(e, t, h, y) : Mp(e, t, h);
    }
    function hb(e, t) {
      return e === t || e.nodeType === Sn && e.parentNode === t;
    }
    function G0(e, t, i, s, f) {
      var h = s;
      if (!(t & Li) && !(t & yu)) {
        var y = f;
        if (s !== null) {
          var x = s;
          e:
            for (; ; ) {
              if (x === null)
                return;
              var b = x.tag;
              if (b === R || b === O) {
                var k = x.stateNode.containerInfo;
                if (hb(k, y))
                  break;
                if (b === O)
                  for (var D = x.return; D !== null; ) {
                    var P = D.tag;
                    if (P === R || P === O) {
                      var z = D.stateNode.containerInfo;
                      if (hb(z, y))
                        return;
                    }
                    D = D.return;
                  }
                for (; k !== null; ) {
                  var G = Ku(k);
                  if (G === null)
                    return;
                  var Q = G.tag;
                  if (Q === U || Q === L) {
                    x = h = G;
                    continue e;
                  }
                  k = k.parentNode;
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
    function NR(e, t, i, s, f, h) {
      for (var y = t !== null ? t + "Capture" : null, x = s ? y : t, b = [], k = e, D = null; k !== null; ) {
        var P = k, z = P.stateNode, G = P.tag;
        if (G === U && z !== null && (D = z, x !== null)) {
          var Q = ol(k, x);
          Q != null && b.push(Wp(k, Q, D));
        }
        if (f)
          break;
        k = k.return;
      }
      return b;
    }
    function zm(e, t) {
      for (var i = t + "Capture", s = [], f = e; f !== null; ) {
        var h = f, y = h.stateNode, x = h.tag;
        if (x === U && y !== null) {
          var b = y, k = ol(f, i);
          k != null && s.unshift(Wp(f, k, b));
          var D = ol(f, t);
          D != null && s.push(Wp(f, D, b));
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
      while (e && e.tag !== U);
      return e || null;
    }
    function LR(e, t) {
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
        var b = x, k = b.alternate, D = b.stateNode, P = b.tag;
        if (k !== null && k === s)
          break;
        if (P === U && D !== null) {
          var z = D;
          if (f) {
            var G = ol(x, h);
            G != null && y.unshift(Wp(x, G, z));
          } else if (!f) {
            var Q = ol(x, h);
            Q != null && y.push(Wp(x, Q, z));
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
      var h = s && f ? LR(s, f) : null;
      s !== null && vb(e, t, s, h, !1), f !== null && i !== null && vb(e, i, f, h, !0);
    }
    function UR(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Na = !1, Gp = "dangerouslySetInnerHTML", Fm = "suppressContentEditableWarning", Us = "suppressHydrationWarning", mb = "autoFocus", Qu = "children", qu = "style", Pm = "__html", Q0, Hm, Qp, gb, Im, yb, Sb;
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
    }, yb = Ln && !document.documentMode, Qp = function(e, t, i) {
      if (!Na) {
        var s = Ym(i), f = Ym(t);
        f !== s && (Na = !0, v("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(f), JSON.stringify(s)));
      }
    }, gb = function(e) {
      if (!Na) {
        Na = !0;
        var t = [];
        e.forEach(function(i) {
          t.push(i);
        }), v("Extra attributes from the server: %s", t);
      }
    }, Im = function(e, t) {
      t === !1 ? v("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : v("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, Sb = function(e, t) {
      var i = e.namespaceURI === Oi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
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
      if (h !== f && (s && (Na || (Na = !0, v('Text content did not match. Server: "%s" Client: "%s"', h, f))), i && Vt))
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
          if (h === qu)
            y && Object.freeze(y), Pv(t, y);
          else if (h === Gp) {
            var x = y ? y[Pm] : void 0;
            x != null && Rv(t, x);
          } else if (h === Qu)
            if (typeof y == "string") {
              var b = e !== "textarea" || y !== "";
              b && Nc(t, y);
            } else
              typeof y == "number" && Nc(t, "" + y);
          else
            h === Fm || h === Us || h === mb || (Mr.hasOwnProperty(h) ? y != null && (typeof y != "function" && Im(h, y), h === "onScroll" && an("scroll", t)) : y != null && si(t, h, y, f));
        }
    }
    function HR(e, t, i, s) {
      for (var f = 0; f < t.length; f += 2) {
        var h = t[f], y = t[f + 1];
        h === qu ? Pv(e, y) : h === Gp ? Rv(e, y) : h === Qu ? Nc(e, y) : si(e, h, y, s);
      }
    }
    function IR(e, t, i, s) {
      var f, h = xb(i), y, x = s;
      if (x === Oi && (x = Oc(e)), x === Oi) {
        if (f = Ni(e, t), !f && e !== e.toLowerCase() && v("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var b = h.createElement("div");
          b.innerHTML = "<script><\/script>";
          var k = b.firstChild;
          y = b.removeChild(k);
        } else if (typeof t.is == "string")
          y = h.createElement(e, {
            is: t.is
          });
        else if (y = h.createElement(e), e === "select") {
          var D = y;
          t.multiple ? D.multiple = !0 : t.size && (D.size = t.size);
        }
      } else
        y = h.createElementNS(x, e);
      return x === Oi && !f && Object.prototype.toString.call(y) === "[object HTMLUnknownElement]" && !ir.call(Q0, e) && (Q0[e] = !0, v("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), y;
    }
    function YR(e, t) {
      return xb(t).createTextNode(e);
    }
    function $R(e, t, i, s) {
      var f = Ni(t, i);
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
          du(e, i), h = fu(e, i), an("invalid", e);
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
          tl(e), pu(e, i, !1);
          break;
        case "textarea":
          tl(e), kv(e);
          break;
        case "option":
          Ld(e, i);
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
          y = fu(e, i), x = fu(e, s), h = [];
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
      var b, k, D = null;
      for (b in y)
        if (!(x.hasOwnProperty(b) || !y.hasOwnProperty(b) || y[b] == null))
          if (b === qu) {
            var P = y[b];
            for (k in P)
              P.hasOwnProperty(k) && (D || (D = {}), D[k] = "");
          } else
            b === Gp || b === Qu || b === Fm || b === Us || b === mb || (Mr.hasOwnProperty(b) ? h || (h = []) : (h = h || []).push(b, null));
      for (b in x) {
        var z = x[b], G = y != null ? y[b] : void 0;
        if (!(!x.hasOwnProperty(b) || z === G || z == null && G == null))
          if (b === qu)
            if (z && Object.freeze(z), G) {
              for (k in G)
                G.hasOwnProperty(k) && (!z || !z.hasOwnProperty(k)) && (D || (D = {}), D[k] = "");
              for (k in z)
                z.hasOwnProperty(k) && G[k] !== z[k] && (D || (D = {}), D[k] = z[k]);
            } else
              D || (h || (h = []), h.push(b, D)), D = z;
          else if (b === Gp) {
            var Q = z ? z[Pm] : void 0, X = G ? G[Pm] : void 0;
            Q != null && X !== Q && (h = h || []).push(b, Q);
          } else
            b === Qu ? (typeof z == "string" || typeof z == "number") && (h = h || []).push(b, "" + z) : b === Fm || b === Us || (Mr.hasOwnProperty(b) ? (z != null && (typeof z != "function" && Im(b, z), b === "onScroll" && an("scroll", e)), !h && G !== z && (h = [])) : (h = h || []).push(b, z));
      }
      return D && (mu(D, x[qu]), (h = h || []).push(qu, D)), h;
    }
    function BR(e, t, i, s, f) {
      i === "input" && f.type === "radio" && f.name != null && Nd(e, f);
      var h = Ni(i, s), y = Ni(i, f);
      switch (HR(e, t, h, y), i) {
        case "input":
          rs(e, f);
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
      switch (x = Ni(t, i), Hm(t, i), t) {
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
          for (var k = 0; k < Vp.length; k++)
            an(Vp[k], e);
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
          du(e, i), an("invalid", e);
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
        for (var D = e.attributes, P = 0; P < D.length; P++) {
          var z = D[P].name.toLowerCase();
          switch (z) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              b.add(D[P].name);
          }
        }
      }
      var G = null;
      for (var Q in i)
        if (i.hasOwnProperty(Q)) {
          var X = i[Q];
          if (Q === Qu)
            typeof X == "string" ? e.textContent !== X && (i[Us] !== !0 && $m(e.textContent, X, h, y), G = [Qu, X]) : typeof X == "number" && e.textContent !== "" + X && (i[Us] !== !0 && $m(e.textContent, X, h, y), G = [Qu, "" + X]);
          else if (Mr.hasOwnProperty(Q))
            X != null && (typeof X != "function" && Im(Q, X), Q === "onScroll" && an("scroll", e));
          else if (y && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof x == "boolean") {
            var Te = void 0, Ye = x && Vn ? null : ea(Q);
            if (i[Us] !== !0) {
              if (!(Q === Fm || Q === Us || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              Q === "value" || Q === "checked" || Q === "selected")) {
                if (Q === Gp) {
                  var ze = e.innerHTML, yt = X ? X[Pm] : void 0;
                  if (yt != null) {
                    var ht = Sb(e, yt);
                    ht !== ze && Qp(Q, ze, ht);
                  }
                } else if (Q === qu) {
                  if (b.delete(Q), yb) {
                    var Y = h0(X);
                    Te = e.getAttribute("style"), Y !== Te && Qp(Q, Te, Y);
                  }
                } else if (x && !Vn)
                  b.delete(Q.toLowerCase()), Te = Jl(e, Q, X), X !== Te && Qp(Q, Te, X);
                else if (!dn(Q, Ye, x) && !It(Q, X, Ye, x)) {
                  var J = !1;
                  if (Ye !== null)
                    b.delete(Ye.attributeName), Te = Xo(e, Q, X, Ye);
                  else {
                    var $ = s;
                    if ($ === Oi && ($ = Oc(t)), $ === Oi)
                      b.delete(Q.toLowerCase());
                    else {
                      var ce = WR(Q);
                      ce !== null && ce !== Q && (J = !0, b.delete(ce)), b.delete(Q);
                    }
                    Te = Jl(e, Q, X);
                  }
                  var ke = Vn;
                  !ke && X !== Te && !J && Qp(Q, Te, X);
                }
              }
            }
          }
        }
      switch (y && // $FlowFixMe - Should be inferred as not undefined.
      b.size > 0 && i[Us] !== !0 && gb(b), t) {
        case "input":
          tl(e), pu(e, i, !0);
          break;
        case "textarea":
          tl(e), kv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof i.onClick == "function" && Vm(e);
          break;
      }
      return G;
    }
    function QR(e, t, i) {
      var s = e.nodeValue !== t;
      return s;
    }
    function q0(e, t) {
      {
        if (Na)
          return;
        Na = !0, v("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function K0(e, t) {
      {
        if (Na)
          return;
        Na = !0, v('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Z0(e, t, i) {
      {
        if (Na)
          return;
        Na = !0, v("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function X0(e, t) {
      {
        if (t === "" || Na)
          return;
        Na = !0, v('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
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
          var b = x.tag, k = !!h + "|" + e + "|" + b;
          if (!Eb[k]) {
            Eb[k] = !0;
            var D = e, P = "";
            if (e === "#text" ? /\S/.test(t) ? D = "Text nodes" : (D = "Whitespace text nodes", P = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : D = "<" + e + ">", h) {
              var z = "";
              b === "table" && e === "tr" && (z += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), v("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", D, b, P, z);
            } else
              v("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", D, b);
          }
        }
      };
    }
    var Bm = "suppressHydrationWarning", Wm = "$", Gm = "/$", Zp = "$?", Xp = "$!", tD = "style", J0 = null, eS = null;
    function nD(e) {
      var t, i, s = e.nodeType;
      switch (s) {
        case Qa:
        case nl: {
          t = s === Qa ? "#document" : "#fragment";
          var f = e.documentElement;
          i = f ? f.namespaceURI : Pd(null, "");
          break;
        }
        default: {
          var h = s === Sn ? e.parentNode : e, y = h.namespaceURI || null;
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
    function NP(e) {
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
      var k = IR(e, t, i, h);
      return th(f, k), sS(k, t), k;
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
      return e === void 0 ? Hi : Sr(e.type);
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
      Nc(e, "");
    }
    function gD(e, t, i) {
      e.nodeValue = i;
    }
    function yD(e, t) {
      e.appendChild(t);
    }
    function SD(e, t) {
      var i;
      e.nodeType === Sn ? (i = e.parentNode, i.insertBefore(t, e)) : (i = e, i.appendChild(t));
      var s = e._reactRootContainer;
      s == null && i.onclick === null && Vm(i);
    }
    function xD(e, t, i) {
      e.insertBefore(t, i);
    }
    function wD(e, t, i) {
      e.nodeType === Sn ? e.parentNode.insertBefore(t, i) : e.insertBefore(t, i);
    }
    function bD(e, t) {
      e.removeChild(t);
    }
    function ED(e, t) {
      e.nodeType === Sn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function aS(e, t) {
      var i = t, s = 0;
      do {
        var f = i.nextSibling;
        if (e.removeChild(i), f && f.nodeType === Sn) {
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
      e.nodeType === Sn ? aS(e.parentNode, t) : e.nodeType === jr && aS(e, t), pt(e);
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
      e.style.display = Lc("display", s);
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
      return t === "" || e.nodeType !== Mi ? null : e;
    }
    function ND(e) {
      return e.nodeType !== Sn ? null : e;
    }
    function Tb(e) {
      return e.data === Zp;
    }
    function iS(e) {
      return e.data === Xp;
    }
    function LD(e) {
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
        if (t === jr || t === Mi)
          break;
        if (t === Sn) {
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
      var k = (h.mode & ct) !== Ve;
      return GR(e, t, i, x, s, k, y);
    }
    function PD(e, t, i, s) {
      return th(i, e), i.mode & ct, QR(e, t);
    }
    function HD(e, t) {
      th(t, e);
    }
    function ID(e) {
      for (var t = e.nextSibling, i = 0; t; ) {
        if (t.nodeType === Sn) {
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
        if (t.nodeType === Sn) {
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
      t.nodeType === jr ? q0(e, t) : t.nodeType === Sn || K0(e, t);
    }
    function QD(e, t) {
      {
        var i = e.parentNode;
        i !== null && (t.nodeType === jr ? q0(i, t) : t.nodeType === Sn || K0(i, t));
      }
    }
    function qD(e, t, i, s, f) {
      (f || t[Bm] !== !0) && (s.nodeType === jr ? q0(i, s) : s.nodeType === Sn || K0(i, s));
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
    function Ku(e) {
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
    function As(e) {
      var t = e[If] || e[eh];
      return t && (t.tag === U || t.tag === L || t.tag === te || t.tag === R) ? t : null;
    }
    function Yf(e) {
      if (e.tag === U || e.tag === L)
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
        var t = e._owner, i = iu(e.type, e._source, t ? t.type : null);
        Ob.setExtraStackFrame(i);
      } else
        Ob.setExtraStackFrame(null);
    }
    function Bi(e, t, i, s, f) {
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
            } catch (k) {
              x = k;
            }
            x && !(x instanceof Error) && (Zm(f), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", i, y, typeof x), Zm(null)), x instanceof Error && !(x.message in Db) && (Db[x.message] = !0, Zm(f), v("Failed %s type: %s", i, x.message), Zm(null));
          }
      }
    }
    var uS = [], Xm;
    Xm = [];
    var Ol = -1;
    function zs(e) {
      return {
        current: e
      };
    }
    function $r(e, t) {
      if (Ol < 0) {
        v("Unexpected pop.");
        return;
      }
      t !== Xm[Ol] && v("Unexpected Fiber popped."), e.current = uS[Ol], uS[Ol] = null, Xm[Ol] = null, Ol--;
    }
    function Vr(e, t, i) {
      Ol++, uS[Ol] = e.current, Xm[Ol] = i, e.current = t;
    }
    var cS;
    cS = {};
    var Ja = {};
    Object.freeze(Ja);
    var Ml = zs(Ja), Uo = zs(!1), fS = Ja;
    function $f(e, t, i) {
      return i && Ao(t) ? fS : Ml.current;
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
          Bi(s, h, "context", x);
        }
        return f && Mb(e, t, h), h;
      }
    }
    function Jm() {
      return Uo.current;
    }
    function Ao(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function eg(e) {
      $r(Uo, e), $r(Ml, e);
    }
    function dS(e) {
      $r(Uo, e), $r(Ml, e);
    }
    function Nb(e, t, i) {
      {
        if (Ml.current !== Ja)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Vr(Ml, t, e), Vr(Uo, i, e);
      }
    }
    function Lb(e, t, i) {
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
          Bi(f, y, "child context", b);
        }
        return dt({}, i, y);
      }
    }
    function tg(e) {
      {
        var t = e.stateNode, i = t && t.__reactInternalMemoizedMergedChildContext || Ja;
        return fS = Ml.current, Vr(Ml, i, e), Vr(Uo, Uo.current, e), !0;
      }
    }
    function jb(e, t, i) {
      {
        var s = e.stateNode;
        if (!s)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (i) {
          var f = Lb(e, t, fS);
          s.__reactInternalMemoizedMergedChildContext = f, $r(Uo, e), $r(Ml, e), Vr(Ml, f, e), Vr(Uo, i, e);
        } else
          $r(Uo, e), Vr(Uo, i, e);
      }
    }
    function sO(e) {
      {
        if (!ip(e) || e.tag !== C)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case R:
              return t.stateNode.context;
            case C: {
              var i = t.type;
              if (Ao(i))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Fs = 0, ng = 1, Nl = null, pS = !1, hS = !1;
    function Ub(e) {
      Nl === null ? Nl = [e] : Nl.push(e);
    }
    function uO(e) {
      pS = !0, Ub(e);
    }
    function Ab() {
      pS && Ps();
    }
    function Ps() {
      if (!hS && Nl !== null) {
        hS = !0;
        var e = 0, t = Ra();
        try {
          var i = !0, s = Nl;
          for (Rn(cr); e < s.length; e++) {
            var f = s[e];
            do
              f = f(i);
            while (f !== null);
          }
          Nl = null, pS = !1;
        } catch (h) {
          throw Nl !== null && (Nl = Nl.slice(e + 1)), Vc(Wc, Ps), h;
        } finally {
          Rn(t), hS = !1;
        }
      }
      return null;
    }
    var Bf = [], Wf = 0, rg = null, ag = 0, mi = [], gi = 0, Zu = null, Ll = 1, jl = "";
    function cO(e) {
      return Ju(), (e.flags & np) !== Ie;
    }
    function fO(e) {
      return Ju(), ag;
    }
    function dO() {
      var e = jl, t = Ll, i = t & ~pO(t);
      return i.toString(32) + e;
    }
    function Xu(e, t) {
      Ju(), Bf[Wf++] = ag, Bf[Wf++] = rg, rg = e, ag = t;
    }
    function zb(e, t, i) {
      Ju(), mi[gi++] = Ll, mi[gi++] = jl, mi[gi++] = Zu, Zu = e;
      var s = Ll, f = jl, h = ig(s) - 1, y = s & ~(1 << h), x = i + 1, b = ig(t) + h;
      if (b > 30) {
        var k = h - h % 5, D = (1 << k) - 1, P = (y & D).toString(32), z = y >> k, G = h - k, Q = ig(t) + G, X = x << G, Te = X | z, Ye = P + f;
        Ll = 1 << Q | Te, jl = Ye;
      } else {
        var ze = x << h, yt = ze | y, ht = f;
        Ll = 1 << b | yt, jl = ht;
      }
    }
    function vS(e) {
      Ju();
      var t = e.return;
      if (t !== null) {
        var i = 1, s = 0;
        Xu(e, i), zb(e, i, s);
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
      for (; e === Zu; )
        Zu = mi[--gi], mi[gi] = null, jl = mi[--gi], mi[gi] = null, Ll = mi[--gi], mi[gi] = null;
    }
    function hO() {
      return Ju(), Zu !== null ? {
        id: Ll,
        overflow: jl
      } : null;
    }
    function vO(e, t) {
      Ju(), mi[gi++] = Ll, mi[gi++] = jl, mi[gi++] = Zu, Ll = t.id, jl = t.overflow, Zu = e;
    }
    function Ju() {
      wr() || v("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var xr = null, yi = null, Wi = !1, ec = !1, Hs = null;
    function mO() {
      Wi && v("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function Fb() {
      ec = !0;
    }
    function gO() {
      return ec;
    }
    function yO(e) {
      var t = e.stateNode.containerInfo;
      return yi = AD(t), xr = e, Wi = !0, Hs = null, ec = !1, !0;
    }
    function SO(e, t, i) {
      return yi = zD(t), xr = e, Wi = !0, Hs = null, ec = !1, i !== null && vO(e, i), !0;
    }
    function Pb(e, t) {
      switch (e.tag) {
        case R: {
          GD(e.stateNode.containerInfo, t);
          break;
        }
        case U: {
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
        case te: {
          var s = e.memoizedState;
          s.dehydrated !== null && QD(s.dehydrated, t);
          break;
        }
      }
    }
    function Hb(e, t) {
      Pb(e, t);
      var i = bL();
      i.stateNode = t, i.return = e;
      var s = e.deletions;
      s === null ? (e.deletions = [i], e.flags |= kt) : s.push(i);
    }
    function gS(e, t) {
      {
        if (ec)
          return;
        switch (e.tag) {
          case R: {
            var i = e.stateNode.containerInfo;
            switch (t.tag) {
              case U:
                var s = t.type;
                t.pendingProps, KD(i, s);
                break;
              case L:
                var f = t.pendingProps;
                ZD(i, f);
                break;
            }
            break;
          }
          case U: {
            var h = e.type, y = e.memoizedProps, x = e.stateNode;
            switch (t.tag) {
              case U: {
                var b = t.type, k = t.pendingProps, D = (e.mode & ct) !== Ve;
                eO(
                  h,
                  y,
                  x,
                  b,
                  k,
                  // TODO: Delete this argument when we remove the legacy root API.
                  D
                );
                break;
              }
              case L: {
                var P = t.pendingProps, z = (e.mode & ct) !== Ve;
                tO(
                  h,
                  y,
                  x,
                  P,
                  // TODO: Delete this argument when we remove the legacy root API.
                  z
                );
                break;
              }
            }
            break;
          }
          case te: {
            var G = e.memoizedState, Q = G.dehydrated;
            if (Q !== null)
              switch (t.tag) {
                case U:
                  var X = t.type;
                  t.pendingProps, XD(Q, X);
                  break;
                case L:
                  var Te = t.pendingProps;
                  JD(Q, Te);
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
        case U: {
          var i = e.type;
          e.pendingProps;
          var s = OD(t, i);
          return s !== null ? (e.stateNode = s, xr = e, yi = UD(s), !0) : !1;
        }
        case L: {
          var f = e.pendingProps, h = MD(t, f);
          return h !== null ? (e.stateNode = h, xr = e, yi = null, !0) : !1;
        }
        case te: {
          var y = ND(t);
          if (y !== null) {
            var x = {
              dehydrated: y,
              treeContext: hO(),
              retryLane: Ir
            };
            e.memoizedState = x;
            var b = EL(y);
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
      if (Wi) {
        var t = yi;
        if (!t) {
          yS(e) && (gS(xr, e), SS()), Ib(xr, e), Wi = !1, xr = e;
          return;
        }
        var i = t;
        if (!Yb(e, t)) {
          yS(e) && (gS(xr, e), SS()), t = Jp(i);
          var s = xr;
          if (!t || !Yb(e, t)) {
            Ib(xr, e), Wi = !1, xr = e;
            return;
          }
          Hb(s, i);
        }
      }
    }
    function xO(e, t, i) {
      var s = e.stateNode, f = !ec, h = FD(s, e.type, e.memoizedProps, t, i, e, f);
      return e.updateQueue = h, h !== null;
    }
    function wO(e) {
      var t = e.stateNode, i = e.memoizedProps, s = PD(t, i, e);
      if (s) {
        var f = xr;
        if (f !== null)
          switch (f.tag) {
            case R: {
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
            case U: {
              var x = f.type, b = f.memoizedProps, k = f.stateNode, D = (f.mode & ct) !== Ve;
              WD(
                x,
                b,
                k,
                t,
                i,
                // TODO: Delete this argument when we remove the legacy root API.
                D
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
      for (var t = e.return; t !== null && t.tag !== U && t.tag !== R && t.tag !== te; )
        t = t.return;
      xr = t;
    }
    function og(e) {
      if (e !== xr)
        return !1;
      if (!Wi)
        return $b(e), Wi = !0, !1;
      if (e.tag !== R && (e.tag !== U || VD(e.type) && !tS(e.type, e.memoizedProps))) {
        var t = yi;
        if (t)
          if (yS(e))
            Vb(e), SS();
          else
            for (; t; )
              Hb(e, t), t = Jp(t);
      }
      return $b(e), e.tag === te ? yi = EO(e) : yi = xr ? Jp(e.stateNode) : null, !0;
    }
    function CO() {
      return Wi && yi !== null;
    }
    function Vb(e) {
      for (var t = yi; t; )
        Pb(e, t), t = Jp(t);
    }
    function Gf() {
      xr = null, yi = null, Wi = !1, ec = !1;
    }
    function Bb() {
      Hs !== null && (PC(Hs), Hs = null);
    }
    function wr() {
      return Wi;
    }
    function wS(e) {
      Hs === null ? Hs = [e] : Hs.push(e);
    }
    var _O = l.ReactCurrentBatchConfig, TO = null;
    function kO() {
      return _O.transition;
    }
    var Gi = {
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
      }, tc = function(e) {
        var t = [];
        return e.forEach(function(i) {
          t.push(i);
        }), t.sort().join(", ");
      }, rh = [], ah = [], ih = [], oh = [], lh = [], sh = [], nc = /* @__PURE__ */ new Set();
      Gi.recordUnsafeLifecycleWarnings = function(e, t) {
        nc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && rh.push(e), e.mode & nn && typeof t.UNSAFE_componentWillMount == "function" && ah.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && ih.push(e), e.mode & nn && typeof t.UNSAFE_componentWillReceiveProps == "function" && oh.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && lh.push(e), e.mode & nn && typeof t.UNSAFE_componentWillUpdate == "function" && sh.push(e));
      }, Gi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        rh.length > 0 && (rh.forEach(function(z) {
          e.add(nt(z) || "Component"), nc.add(z.type);
        }), rh = []);
        var t = /* @__PURE__ */ new Set();
        ah.length > 0 && (ah.forEach(function(z) {
          t.add(nt(z) || "Component"), nc.add(z.type);
        }), ah = []);
        var i = /* @__PURE__ */ new Set();
        ih.length > 0 && (ih.forEach(function(z) {
          i.add(nt(z) || "Component"), nc.add(z.type);
        }), ih = []);
        var s = /* @__PURE__ */ new Set();
        oh.length > 0 && (oh.forEach(function(z) {
          s.add(nt(z) || "Component"), nc.add(z.type);
        }), oh = []);
        var f = /* @__PURE__ */ new Set();
        lh.length > 0 && (lh.forEach(function(z) {
          f.add(nt(z) || "Component"), nc.add(z.type);
        }), lh = []);
        var h = /* @__PURE__ */ new Set();
        if (sh.length > 0 && (sh.forEach(function(z) {
          h.add(nt(z) || "Component"), nc.add(z.type);
        }), sh = []), t.size > 0) {
          var y = tc(t);
          v(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, y);
        }
        if (s.size > 0) {
          var x = tc(s);
          v(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, x);
        }
        if (h.size > 0) {
          var b = tc(h);
          v(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, b);
        }
        if (e.size > 0) {
          var k = tc(e);
          m(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, k);
        }
        if (i.size > 0) {
          var D = tc(i);
          m(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, D);
        }
        if (f.size > 0) {
          var P = tc(f);
          m(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, P);
        }
      };
      var lg = /* @__PURE__ */ new Map(), Wb = /* @__PURE__ */ new Set();
      Gi.recordLegacyContextWarning = function(e, t) {
        var i = RO(e);
        if (i === null) {
          v("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!Wb.has(e.type)) {
          var s = lg.get(i);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (s === void 0 && (s = [], lg.set(i, s)), s.push(e));
        }
      }, Gi.flushLegacyContextWarning = function() {
        lg.forEach(function(e, t) {
          if (e.length !== 0) {
            var i = e[0], s = /* @__PURE__ */ new Set();
            e.forEach(function(h) {
              s.add(nt(h) || "Component"), Wb.add(h.type);
            });
            var f = tc(s);
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
      }, Gi.discardPendingWarnings = function() {
        rh = [], ah = [], ih = [], oh = [], lh = [], sh = [], lg = /* @__PURE__ */ new Map();
      };
    }
    function Qi(e, t) {
      if (e && e.defaultProps) {
        var i = dt({}, t), s = e.defaultProps;
        for (var f in s)
          i[f] === void 0 && (i[f] = s[f]);
        return i;
      }
      return t;
    }
    var bS = zs(null), ES;
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
        if (Sl(s.childLanes, t) ? f !== null && !Sl(f.childLanes, t) && (f.childLanes = at(f.childLanes, t)) : (s.childLanes = at(s.childLanes, t), f !== null && (f.childLanes = at(f.childLanes, t))), s === i)
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
              if (s.tag === C) {
                var x = kn(i), b = Ul(Ht, x);
                b.tag = dg;
                var k = s.updateQueue;
                if (k !== null) {
                  var D = k.shared, P = D.pending;
                  P === null ? b.next = b : (b.next = P.next, P.next = b), D.pending = b;
                }
              }
              s.lanes = at(s.lanes, i);
              var z = s.alternate;
              z !== null && (z.lanes = at(z.lanes, i)), TS(s.return, i, e), h.lanes = at(h.lanes, i);
              break;
            }
            y = y.next;
          }
        } else if (s.tag === W)
          f = s.type === e.type ? null : s.child;
        else if (s.tag === ve) {
          var G = s.return;
          if (G === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          G.lanes = at(G.lanes, i);
          var Q = G.alternate;
          Q !== null && (Q.lanes = at(Q.lanes, i)), TS(G, i, e), f = s.sibling;
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
            var X = f.sibling;
            if (X !== null) {
              X.return = f.return, f = X;
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
    var rc = null;
    function kS(e) {
      rc === null ? rc = [e] : rc.push(e);
    }
    function MO() {
      if (rc !== null) {
        for (var e = 0; e < rc.length; e++) {
          var t = rc[e], i = t.interleaved;
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
        rc = null;
      }
    }
    function Kb(e, t, i, s) {
      var f = t.interleaved;
      return f === null ? (i.next = i, kS(t)) : (i.next = f.next, f.next = i), t.interleaved = i, fg(e, s);
    }
    function NO(e, t, i, s) {
      var f = t.interleaved;
      f === null ? (i.next = i, kS(t)) : (i.next = f.next, f.next = i), t.interleaved = i;
    }
    function LO(e, t, i, s) {
      var f = t.interleaved;
      return f === null ? (i.next = i, kS(t)) : (i.next = f.next, f.next = i), t.interleaved = i, fg(e, s);
    }
    function La(e, t) {
      return fg(e, t);
    }
    var jO = fg;
    function fg(e, t) {
      e.lanes = at(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = at(i.lanes, t)), i === null && (e.flags & (Bt | Ea)) !== Ie && ZC(e);
      for (var s = e, f = e.return; f !== null; )
        f.childLanes = at(f.childLanes, t), i = f.alternate, i !== null ? i.childLanes = at(i.childLanes, t) : (f.flags & (Bt | Ea)) !== Ie && ZC(e), s = f, f = f.return;
      if (s.tag === R) {
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
    function Ul(e, t) {
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
    function Is(e, t, i) {
      var s = e.updateQueue;
      if (s === null)
        return null;
      var f = s.shared;
      if (hg === f && !DS && (v("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), DS = !0), jN()) {
        var h = f.pending;
        return h === null ? t.next = t : (t.next = h.next, h.next = t), f.pending = t, jO(e, i);
      } else
        return LO(e, f, t, i);
    }
    function vg(e, t, i) {
      var s = t.updateQueue;
      if (s !== null) {
        var f = s.shared;
        if (yp(i)) {
          var h = f.lanes;
          h = xp(h, e.pendingLanes);
          var y = at(h, i);
          f.lanes = y, ws(e, y);
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
              var k = {
                eventTime: b.eventTime,
                lane: b.lane,
                tag: b.tag,
                payload: b.payload,
                callback: b.callback,
                next: null
              };
              y === null ? h = y = k : (y.next = k, y = k), b = b.next;
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
      var D = i.lastBaseUpdate;
      D === null ? i.firstBaseUpdate = t : D.next = t, i.lastBaseUpdate = t;
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
          var b = i.payload, k;
          if (typeof b == "function") {
            Gb(), k = b.call(h, s, f);
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
            k = b;
          return k == null ? s : dt({}, s, k);
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
        var b = x, k = b.next;
        b.next = null, y === null ? h = k : y.next = k, y = b;
        var D = e.alternate;
        if (D !== null) {
          var P = D.updateQueue, z = P.lastBaseUpdate;
          z !== y && (z === null ? P.firstBaseUpdate = k : z.next = k, P.lastBaseUpdate = b);
        }
      }
      if (h !== null) {
        var G = f.baseState, Q = ee, X = null, Te = null, Ye = null, ze = h;
        do {
          var yt = ze.lane, ht = ze.eventTime;
          if (Sl(s, yt)) {
            if (Ye !== null) {
              var J = {
                eventTime: ht,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: mt,
                tag: ze.tag,
                payload: ze.payload,
                callback: ze.callback,
                next: null
              };
              Ye = Ye.next = J;
            }
            G = UO(e, f, ze, G, t, i);
            var $ = ze.callback;
            if ($ !== null && // If the update was already committed, we should not queue its
            // callback again.
            ze.lane !== mt) {
              e.flags |= ci;
              var ce = f.effects;
              ce === null ? f.effects = [ze] : ce.push(ze);
            }
          } else {
            var Y = {
              eventTime: ht,
              lane: yt,
              tag: ze.tag,
              payload: ze.payload,
              callback: ze.callback,
              next: null
            };
            Ye === null ? (Te = Ye = Y, X = G) : Ye = Ye.next = Y, Q = at(Q, yt);
          }
          if (ze = ze.next, ze === null) {
            if (x = f.shared.pending, x === null)
              break;
            var ke = x, Ee = ke.next;
            ke.next = null, ze = Ee, f.lastBaseUpdate = ke, f.shared.pending = null;
          }
        } while (!0);
        Ye === null && (X = G), f.baseState = X, f.firstBaseUpdate = Te, f.lastBaseUpdate = Ye;
        var Ke = f.shared.interleaved;
        if (Ke !== null) {
          var tt = Ke;
          do
            Q = at(Q, tt.lane), tt = tt.next;
          while (tt !== Ke);
        } else
          h === null && (f.shared.lanes = ee);
        jh(Q), e.lanes = Q, e.memoizedState = G;
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
    var NS = {}, nE = new r.Component().refs, LS, jS, US, AS, zS, rE, yg, FS, PS, HS;
    {
      LS = /* @__PURE__ */ new Set(), jS = /* @__PURE__ */ new Set(), US = /* @__PURE__ */ new Set(), AS = /* @__PURE__ */ new Set(), FS = /* @__PURE__ */ new Set(), zS = /* @__PURE__ */ new Set(), PS = /* @__PURE__ */ new Set(), HS = /* @__PURE__ */ new Set();
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
      }, Object.defineProperty(NS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(NS);
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
        var s = wa(e), f = fa(), h = qs(s), y = Ul(f, h);
        y.payload = t, i != null && (yg(i, "setState"), y.callback = i);
        var x = Is(s, y, h);
        x !== null && (nr(x, s, h, f), vg(x, s, h)), To(s, h);
      },
      enqueueReplaceState: function(e, t, i) {
        var s = wa(e), f = fa(), h = qs(s), y = Ul(f, h);
        y.tag = Xb, y.payload = t, i != null && (yg(i, "replaceState"), y.callback = i);
        var x = Is(s, y, h);
        x !== null && (nr(x, s, h, f), vg(x, s, h)), To(s, h);
      },
      enqueueForceUpdate: function(e, t) {
        var i = wa(e), s = fa(), f = qs(i), h = Ul(s, f);
        h.tag = dg, t != null && (yg(t, "forceUpdate"), h.callback = t);
        var y = Is(i, h, f);
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
      return t.prototype && t.prototype.isPureReactComponent ? !Fe(i, s) || !Fe(f, h) : !0;
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
      t.updater = YS, e.stateNode = t, fs(t, e), t._reactInternalInstance = NS;
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
          y === void 0 ? b = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof y != "object" ? b = " However, it is set to a " + typeof y + "." : y.$$typeof === se ? b = " Did you accidentally pass the Context.Provider instead?" : y._context !== void 0 ? b = " Did you accidentally pass the Context.Consumer instead?" : b = " However, it is set to an object with keys {" + Object.keys(y).join(", ") + "}.", v("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ft(t) || "Component", b);
        }
      }
      if (typeof y == "object" && y !== null)
        h = $n(y);
      else {
        f = $f(e, t, !0);
        var k = t.contextTypes;
        s = k != null, h = s ? Vf(e, f) : Ja;
      }
      var D = new t(i, h);
      if (e.mode & nn) {
        Tn(!0);
        try {
          D = new t(i, h);
        } finally {
          Tn(!1);
        }
      }
      var P = e.memoizedState = D.state !== null && D.state !== void 0 ? D.state : null;
      oE(e, D);
      {
        if (typeof t.getDerivedStateFromProps == "function" && P === null) {
          var z = Ft(t) || "Component";
          jS.has(z) || (jS.add(z), v("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", z, D.state === null ? "null" : "undefined", z));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof D.getSnapshotBeforeUpdate == "function") {
          var G = null, Q = null, X = null;
          if (typeof D.componentWillMount == "function" && D.componentWillMount.__suppressDeprecationWarning !== !0 ? G = "componentWillMount" : typeof D.UNSAFE_componentWillMount == "function" && (G = "UNSAFE_componentWillMount"), typeof D.componentWillReceiveProps == "function" && D.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? Q = "componentWillReceiveProps" : typeof D.UNSAFE_componentWillReceiveProps == "function" && (Q = "UNSAFE_componentWillReceiveProps"), typeof D.componentWillUpdate == "function" && D.componentWillUpdate.__suppressDeprecationWarning !== !0 ? X = "componentWillUpdate" : typeof D.UNSAFE_componentWillUpdate == "function" && (X = "UNSAFE_componentWillUpdate"), G !== null || Q !== null || X !== null) {
            var Te = Ft(t) || "Component", Ye = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            AS.has(Te) || (AS.add(Te), v(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Te, Ye, G !== null ? `
  ` + G : "", Q !== null ? `
  ` + Q : "", X !== null ? `
  ` + X : ""));
          }
        }
      }
      return s && Mb(e, f, h), D;
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
          LS.has(h) || (LS.add(h), v("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", h));
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
        e.mode & nn && Gi.recordLegacyContextWarning(e, f), Gi.recordUnsafeLifecycleWarnings(e, f);
      }
      f.state = e.memoizedState;
      var b = t.getDerivedStateFromProps;
      if (typeof b == "function" && (IS(e, t, b, i), f.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof f.getSnapshotBeforeUpdate != "function" && (typeof f.UNSAFE_componentWillMount == "function" || typeof f.componentWillMount == "function") && (FO(e, f), mg(e, i, f, s), f.state = e.memoizedState), typeof f.componentDidMount == "function") {
        var k = rt;
        k |= Ar, (e.mode & Ta) !== Ve && (k |= zr), e.flags |= k;
      }
    }
    function PO(e, t, i, s) {
      var f = e.stateNode, h = e.memoizedProps;
      f.props = h;
      var y = f.context, x = t.contextType, b = Ja;
      if (typeof x == "object" && x !== null)
        b = $n(x);
      else {
        var k = $f(e, t, !0);
        b = Vf(e, k);
      }
      var D = t.getDerivedStateFromProps, P = typeof D == "function" || typeof f.getSnapshotBeforeUpdate == "function";
      !P && (typeof f.UNSAFE_componentWillReceiveProps == "function" || typeof f.componentWillReceiveProps == "function") && (h !== i || y !== b) && sE(e, f, i, b), eE();
      var z = e.memoizedState, G = f.state = z;
      if (mg(e, i, f, s), G = e.memoizedState, h === i && z === G && !Jm() && !gg()) {
        if (typeof f.componentDidMount == "function") {
          var Q = rt;
          Q |= Ar, (e.mode & Ta) !== Ve && (Q |= zr), e.flags |= Q;
        }
        return !1;
      }
      typeof D == "function" && (IS(e, t, D, i), G = e.memoizedState);
      var X = gg() || iE(e, t, h, i, z, G, b);
      if (X) {
        if (!P && (typeof f.UNSAFE_componentWillMount == "function" || typeof f.componentWillMount == "function") && (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function") {
          var Te = rt;
          Te |= Ar, (e.mode & Ta) !== Ve && (Te |= zr), e.flags |= Te;
        }
      } else {
        if (typeof f.componentDidMount == "function") {
          var Ye = rt;
          Ye |= Ar, (e.mode & Ta) !== Ve && (Ye |= zr), e.flags |= Ye;
        }
        e.memoizedProps = i, e.memoizedState = G;
      }
      return f.props = i, f.state = G, f.context = b, X;
    }
    function HO(e, t, i, s, f) {
      var h = t.stateNode;
      Jb(e, t);
      var y = t.memoizedProps, x = t.type === t.elementType ? y : Qi(t.type, y);
      h.props = x;
      var b = t.pendingProps, k = h.context, D = i.contextType, P = Ja;
      if (typeof D == "object" && D !== null)
        P = $n(D);
      else {
        var z = $f(t, i, !0);
        P = Vf(t, z);
      }
      var G = i.getDerivedStateFromProps, Q = typeof G == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      !Q && (typeof h.UNSAFE_componentWillReceiveProps == "function" || typeof h.componentWillReceiveProps == "function") && (y !== b || k !== P) && sE(t, h, s, P), eE();
      var X = t.memoizedState, Te = h.state = X;
      if (mg(t, s, h, f), Te = t.memoizedState, y === b && X === Te && !Jm() && !gg() && !Pe)
        return typeof h.componentDidUpdate == "function" && (y !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= rt), typeof h.getSnapshotBeforeUpdate == "function" && (y !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= ba), !1;
      typeof G == "function" && (IS(t, i, G, s), Te = t.memoizedState);
      var Ye = gg() || iE(t, i, x, s, X, Te, P) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Pe;
      return Ye ? (!Q && (typeof h.UNSAFE_componentWillUpdate == "function" || typeof h.componentWillUpdate == "function") && (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(s, Te, P), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(s, Te, P)), typeof h.componentDidUpdate == "function" && (t.flags |= rt), typeof h.getSnapshotBeforeUpdate == "function" && (t.flags |= ba)) : (typeof h.componentDidUpdate == "function" && (y !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= rt), typeof h.getSnapshotBeforeUpdate == "function" && (y !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= ba), t.memoizedProps = s, t.memoizedState = Te), h.props = s, h.state = Te, h.context = P, Ye;
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
            if (x.tag !== C)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            y = x.stateNode;
          }
          if (!y)
            throw new Error("Missing owner for string ref " + s + ". This error is likely caused by a bug in React. Please file an issue.");
          var b = y;
          ki(s, "ref");
          var k = "" + s;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === k)
            return t.ref;
          var D = function(P) {
            var z = b.refs;
            z === nE && (z = b.refs = {}), P === null ? delete z[k] : z[k] = P;
          };
          return D._stringRef = k, D;
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
      function t(Y, J) {
        if (e) {
          var $ = Y.deletions;
          $ === null ? (Y.deletions = [J], Y.flags |= kt) : $.push(J);
        }
      }
      function i(Y, J) {
        if (!e)
          return null;
        for (var $ = J; $ !== null; )
          t(Y, $), $ = $.sibling;
        return null;
      }
      function s(Y, J) {
        for (var $ = /* @__PURE__ */ new Map(), ce = J; ce !== null; )
          ce.key !== null ? $.set(ce.key, ce) : $.set(ce.index, ce), ce = ce.sibling;
        return $;
      }
      function f(Y, J) {
        var $ = fc(Y, J);
        return $.index = 0, $.sibling = null, $;
      }
      function h(Y, J, $) {
        if (Y.index = $, !e)
          return Y.flags |= np, J;
        var ce = Y.alternate;
        if (ce !== null) {
          var ke = ce.index;
          return ke < J ? (Y.flags |= Bt, J) : ke;
        } else
          return Y.flags |= Bt, J;
      }
      function y(Y) {
        return e && Y.alternate === null && (Y.flags |= Bt), Y;
      }
      function x(Y, J, $, ce) {
        if (J === null || J.tag !== L) {
          var ke = wx($, Y.mode, ce);
          return ke.return = Y, ke;
        } else {
          var Ee = f(J, $);
          return Ee.return = Y, Ee;
        }
      }
      function b(Y, J, $, ce) {
        var ke = $.type;
        if (ke === Va)
          return D(Y, J, $.props.children, ce, $.key);
        if (J !== null && (J.elementType === ke || // Keep this check inline so it only runs on the false path:
        t_(J, $) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ke == "object" && ke !== null && ke.$$typeof === We && cE(ke) === J.type)) {
          var Ee = f(J, $.props);
          return Ee.ref = uh(Y, J, $), Ee.return = Y, Ee._debugSource = $._source, Ee._debugOwner = $._owner, Ee;
        }
        var Ke = xx($, Y.mode, ce);
        return Ke.ref = uh(Y, J, $), Ke.return = Y, Ke;
      }
      function k(Y, J, $, ce) {
        if (J === null || J.tag !== O || J.stateNode.containerInfo !== $.containerInfo || J.stateNode.implementation !== $.implementation) {
          var ke = bx($, Y.mode, ce);
          return ke.return = Y, ke;
        } else {
          var Ee = f(J, $.children || []);
          return Ee.return = Y, Ee;
        }
      }
      function D(Y, J, $, ce, ke) {
        if (J === null || J.tag !== H) {
          var Ee = Zs($, Y.mode, ce, ke);
          return Ee.return = Y, Ee;
        } else {
          var Ke = f(J, $);
          return Ke.return = Y, Ke;
        }
      }
      function P(Y, J, $) {
        if (typeof J == "string" && J !== "" || typeof J == "number") {
          var ce = wx("" + J, Y.mode, $);
          return ce.return = Y, ce;
        }
        if (typeof J == "object" && J !== null) {
          switch (J.$$typeof) {
            case lo: {
              var ke = xx(J, Y.mode, $);
              return ke.ref = uh(Y, null, J), ke.return = Y, ke;
            }
            case ta: {
              var Ee = bx(J, Y.mode, $);
              return Ee.return = Y, Ee;
            }
            case We: {
              var Ke = J._payload, tt = J._init;
              return P(Y, tt(Ke), $);
            }
          }
          if (An(J) || Ri(J)) {
            var At = Zs(J, Y.mode, $, null);
            return At.return = Y, At;
          }
          Sg(Y, J);
        }
        return typeof J == "function" && xg(Y), null;
      }
      function z(Y, J, $, ce) {
        var ke = J !== null ? J.key : null;
        if (typeof $ == "string" && $ !== "" || typeof $ == "number")
          return ke !== null ? null : x(Y, J, "" + $, ce);
        if (typeof $ == "object" && $ !== null) {
          switch ($.$$typeof) {
            case lo:
              return $.key === ke ? b(Y, J, $, ce) : null;
            case ta:
              return $.key === ke ? k(Y, J, $, ce) : null;
            case We: {
              var Ee = $._payload, Ke = $._init;
              return z(Y, J, Ke(Ee), ce);
            }
          }
          if (An($) || Ri($))
            return ke !== null ? null : D(Y, J, $, ce, null);
          Sg(Y, $);
        }
        return typeof $ == "function" && xg(Y), null;
      }
      function G(Y, J, $, ce, ke) {
        if (typeof ce == "string" && ce !== "" || typeof ce == "number") {
          var Ee = Y.get($) || null;
          return x(J, Ee, "" + ce, ke);
        }
        if (typeof ce == "object" && ce !== null) {
          switch (ce.$$typeof) {
            case lo: {
              var Ke = Y.get(ce.key === null ? $ : ce.key) || null;
              return b(J, Ke, ce, ke);
            }
            case ta: {
              var tt = Y.get(ce.key === null ? $ : ce.key) || null;
              return k(J, tt, ce, ke);
            }
            case We:
              var At = ce._payload, Et = ce._init;
              return G(Y, J, $, Et(At), ke);
          }
          if (An(ce) || Ri(ce)) {
            var Mn = Y.get($) || null;
            return D(J, Mn, ce, ke, null);
          }
          Sg(J, ce);
        }
        return typeof ce == "function" && xg(J), null;
      }
      function Q(Y, J, $) {
        {
          if (typeof Y != "object" || Y === null)
            return J;
          switch (Y.$$typeof) {
            case lo:
            case ta:
              uE(Y, $);
              var ce = Y.key;
              if (typeof ce != "string")
                break;
              if (J === null) {
                J = /* @__PURE__ */ new Set(), J.add(ce);
                break;
              }
              if (!J.has(ce)) {
                J.add(ce);
                break;
              }
              v("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", ce);
              break;
            case We:
              var ke = Y._payload, Ee = Y._init;
              Q(Ee(ke), J, $);
              break;
          }
        }
        return J;
      }
      function X(Y, J, $, ce) {
        for (var ke = null, Ee = 0; Ee < $.length; Ee++) {
          var Ke = $[Ee];
          ke = Q(Ke, ke, Y);
        }
        for (var tt = null, At = null, Et = J, Mn = 0, Ct = 0, bn = null; Et !== null && Ct < $.length; Ct++) {
          Et.index > Ct ? (bn = Et, Et = null) : bn = Et.sibling;
          var Wr = z(Y, Et, $[Ct], ce);
          if (Wr === null) {
            Et === null && (Et = bn);
            break;
          }
          e && Et && Wr.alternate === null && t(Y, Et), Mn = h(Wr, Mn, Ct), At === null ? tt = Wr : At.sibling = Wr, At = Wr, Et = bn;
        }
        if (Ct === $.length) {
          if (i(Y, Et), wr()) {
            var Rr = Ct;
            Xu(Y, Rr);
          }
          return tt;
        }
        if (Et === null) {
          for (; Ct < $.length; Ct++) {
            var ti = P(Y, $[Ct], ce);
            ti !== null && (Mn = h(ti, Mn, Ct), At === null ? tt = ti : At.sibling = ti, At = ti);
          }
          if (wr()) {
            var da = Ct;
            Xu(Y, da);
          }
          return tt;
        }
        for (var pa = s(Y, Et); Ct < $.length; Ct++) {
          var Gr = G(pa, Y, Ct, $[Ct], ce);
          Gr !== null && (e && Gr.alternate !== null && pa.delete(Gr.key === null ? Ct : Gr.key), Mn = h(Gr, Mn, Ct), At === null ? tt = Gr : At.sibling = Gr, At = Gr);
        }
        if (e && pa.forEach(function(dd) {
          return t(Y, dd);
        }), wr()) {
          var Il = Ct;
          Xu(Y, Il);
        }
        return tt;
      }
      function Te(Y, J, $, ce) {
        var ke = Ri($);
        if (typeof ke != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          $[Symbol.toStringTag] === "Generator" && (BS || v("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), BS = !0), $.entries === ke && (VS || v("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), VS = !0);
          var Ee = ke.call($);
          if (Ee)
            for (var Ke = null, tt = Ee.next(); !tt.done; tt = Ee.next()) {
              var At = tt.value;
              Ke = Q(At, Ke, Y);
            }
        }
        var Et = ke.call($);
        if (Et == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Mn = null, Ct = null, bn = J, Wr = 0, Rr = 0, ti = null, da = Et.next(); bn !== null && !da.done; Rr++, da = Et.next()) {
          bn.index > Rr ? (ti = bn, bn = null) : ti = bn.sibling;
          var pa = z(Y, bn, da.value, ce);
          if (pa === null) {
            bn === null && (bn = ti);
            break;
          }
          e && bn && pa.alternate === null && t(Y, bn), Wr = h(pa, Wr, Rr), Ct === null ? Mn = pa : Ct.sibling = pa, Ct = pa, bn = ti;
        }
        if (da.done) {
          if (i(Y, bn), wr()) {
            var Gr = Rr;
            Xu(Y, Gr);
          }
          return Mn;
        }
        if (bn === null) {
          for (; !da.done; Rr++, da = Et.next()) {
            var Il = P(Y, da.value, ce);
            Il !== null && (Wr = h(Il, Wr, Rr), Ct === null ? Mn = Il : Ct.sibling = Il, Ct = Il);
          }
          if (wr()) {
            var dd = Rr;
            Xu(Y, dd);
          }
          return Mn;
        }
        for (var Ph = s(Y, bn); !da.done; Rr++, da = Et.next()) {
          var Vo = G(Ph, Y, Rr, da.value, ce);
          Vo !== null && (e && Vo.alternate !== null && Ph.delete(Vo.key === null ? Rr : Vo.key), Wr = h(Vo, Wr, Rr), Ct === null ? Mn = Vo : Ct.sibling = Vo, Ct = Vo);
        }
        if (e && Ph.forEach(function(e2) {
          return t(Y, e2);
        }), wr()) {
          var JL = Rr;
          Xu(Y, JL);
        }
        return Mn;
      }
      function Ye(Y, J, $, ce) {
        if (J !== null && J.tag === L) {
          i(Y, J.sibling);
          var ke = f(J, $);
          return ke.return = Y, ke;
        }
        i(Y, J);
        var Ee = wx($, Y.mode, ce);
        return Ee.return = Y, Ee;
      }
      function ze(Y, J, $, ce) {
        for (var ke = $.key, Ee = J; Ee !== null; ) {
          if (Ee.key === ke) {
            var Ke = $.type;
            if (Ke === Va) {
              if (Ee.tag === H) {
                i(Y, Ee.sibling);
                var tt = f(Ee, $.props.children);
                return tt.return = Y, tt._debugSource = $._source, tt._debugOwner = $._owner, tt;
              }
            } else if (Ee.elementType === Ke || // Keep this check inline so it only runs on the false path:
            t_(Ee, $) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Ke == "object" && Ke !== null && Ke.$$typeof === We && cE(Ke) === Ee.type) {
              i(Y, Ee.sibling);
              var At = f(Ee, $.props);
              return At.ref = uh(Y, Ee, $), At.return = Y, At._debugSource = $._source, At._debugOwner = $._owner, At;
            }
            i(Y, Ee);
            break;
          } else
            t(Y, Ee);
          Ee = Ee.sibling;
        }
        if ($.type === Va) {
          var Et = Zs($.props.children, Y.mode, ce, $.key);
          return Et.return = Y, Et;
        } else {
          var Mn = xx($, Y.mode, ce);
          return Mn.ref = uh(Y, J, $), Mn.return = Y, Mn;
        }
      }
      function yt(Y, J, $, ce) {
        for (var ke = $.key, Ee = J; Ee !== null; ) {
          if (Ee.key === ke)
            if (Ee.tag === O && Ee.stateNode.containerInfo === $.containerInfo && Ee.stateNode.implementation === $.implementation) {
              i(Y, Ee.sibling);
              var Ke = f(Ee, $.children || []);
              return Ke.return = Y, Ke;
            } else {
              i(Y, Ee);
              break;
            }
          else
            t(Y, Ee);
          Ee = Ee.sibling;
        }
        var tt = bx($, Y.mode, ce);
        return tt.return = Y, tt;
      }
      function ht(Y, J, $, ce) {
        var ke = typeof $ == "object" && $ !== null && $.type === Va && $.key === null;
        if (ke && ($ = $.props.children), typeof $ == "object" && $ !== null) {
          switch ($.$$typeof) {
            case lo:
              return y(ze(Y, J, $, ce));
            case ta:
              return y(yt(Y, J, $, ce));
            case We:
              var Ee = $._payload, Ke = $._init;
              return ht(Y, J, Ke(Ee), ce);
          }
          if (An($))
            return X(Y, J, $, ce);
          if (Ri($))
            return Te(Y, J, $, ce);
          Sg(Y, $);
        }
        return typeof $ == "string" && $ !== "" || typeof $ == "number" ? y(Ye(Y, J, "" + $, ce)) : (typeof $ == "function" && xg(Y), i(Y, J));
      }
      return ht;
    }
    var Kf = fE(!0), dE = fE(!1);
    function IO(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var i = t.child, s = fc(i, i.pendingProps);
        for (t.child = s, s.return = t; i.sibling !== null; )
          i = i.sibling, s = s.sibling = fc(i, i.pendingProps), s.return = t;
        s.sibling = null;
      }
    }
    function YO(e, t) {
      for (var i = e.child; i !== null; )
        gL(i, t), i = i.sibling;
    }
    var ch = {}, Ys = zs(ch), fh = zs(ch), wg = zs(ch);
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
      Vr(wg, t, e), Vr(fh, e, e), Vr(Ys, ch, e);
      var i = nD(t);
      $r(Ys, e), Vr(Ys, i, e);
    }
    function Zf(e) {
      $r(Ys, e), $r(fh, e), $r(wg, e);
    }
    function KS() {
      var e = bg(Ys.current);
      return e;
    }
    function hE(e) {
      bg(wg.current);
      var t = bg(Ys.current), i = rD(t, e.type);
      t !== i && (Vr(fh, e, e), Vr(Ys, i, e));
    }
    function ZS(e) {
      fh.current === e && ($r(Ys, e), $r(fh, e));
    }
    var $O = 0, vE = 1, mE = 1, dh = 2, qi = zs($O);
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
    function $s(e, t) {
      Vr(qi, t, e);
    }
    function Jf(e) {
      $r(qi, e);
    }
    function BO(e, t) {
      var i = e.memoizedState;
      return i !== null ? i.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Eg(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === te) {
          var i = t.memoizedState;
          if (i !== null) {
            var s = i.dehydrated;
            if (s === null || Tb(s) || iS(s))
              return t;
          }
        } else if (t.tag === Ae && // revealOrder undefined can't be trusted because it don't
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
    ), zo = (
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
    var ac = ee, Ut = null, Zn = null, Xn = null, Cg = !1, hh = !1, vh = 0, GO = 0, QO = 25, re = null, Si = null, Vs = -1, r1 = !1;
    function Dt() {
      {
        var e = re;
        Si === null ? Si = [e] : Si.push(e);
      }
    }
    function ye() {
      {
        var e = re;
        Si !== null && (Vs++, Si[Vs] !== e && qO(e));
      }
    }
    function td(e) {
      e != null && !An(e) && v("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", re, typeof e);
    }
    function qO(e) {
      {
        var t = nt(Ut);
        if (!n1.has(t) && (n1.add(t), Si !== null)) {
          for (var i = "", s = 30, f = 0; f <= Vs; f++) {
            for (var h = Si[f], y = f === Vs ? e : h, x = f + 1 + ". " + h; x.length < s; )
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
        return v("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", re), !1;
      e.length !== t.length && v(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, re, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var i = 0; i < t.length && i < e.length; i++)
        if (!Ne(e[i], t[i]))
          return !1;
      return !0;
    }
    function nd(e, t, i, s, f, h) {
      ac = h, Ut = t, Si = e !== null ? e._debugHookTypes : null, Vs = -1, r1 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ee, e !== null && e.memoizedState !== null ? _e.current = FE : Si !== null ? _e.current = zE : _e.current = AE;
      var y = i(s, f);
      if (hh) {
        var x = 0;
        do {
          if (hh = !1, vh = 0, x >= QO)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          x += 1, r1 = !1, Zn = null, Xn = null, t.updateQueue = null, Vs = -1, _e.current = PE, y = i(s, f);
        } while (hh);
      }
      _e.current = zg, t._debugHookTypes = Si;
      var b = Zn !== null && Zn.next !== null;
      if (ac = ee, Ut = null, Zn = null, Xn = null, re = null, Si = null, Vs = -1, e !== null && (e.flags & Wn) !== (t.flags & Wn) && // Disable this warning in legacy mode, because legacy Suspense is weird
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
      t.updateQueue = e.updateQueue, (t.mode & Ta) !== Ve ? t.flags &= ~(ul | zr | Xt | rt) : t.flags &= ~(Xt | rt), e.lanes = xs(e.lanes, i);
    }
    function yE() {
      if (_e.current = zg, Cg) {
        for (var e = Ut.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Cg = !1;
      }
      ac = ee, Ut = null, Zn = null, Xn = null, Si = null, Vs = -1, re = null, ME = !1, hh = !1, vh = 0;
    }
    function Fo() {
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
      var s = Fo(), f;
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
          var b = y.next, k = x.next;
          y.next = k, x.next = b;
        }
        h.baseQueue !== y && v("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), h.baseQueue = y = x, f.pending = null;
      }
      if (y !== null) {
        var D = y.next, P = h.baseState, z = null, G = null, Q = null, X = D;
        do {
          var Te = X.lane;
          if (Sl(ac, Te)) {
            if (Q !== null) {
              var ze = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: mt,
                action: X.action,
                hasEagerState: X.hasEagerState,
                eagerState: X.eagerState,
                next: null
              };
              Q = Q.next = ze;
            }
            if (X.hasEagerState)
              P = X.eagerState;
            else {
              var yt = X.action;
              P = e(P, yt);
            }
          } else {
            var Ye = {
              lane: Te,
              action: X.action,
              hasEagerState: X.hasEagerState,
              eagerState: X.eagerState,
              next: null
            };
            Q === null ? (G = Q = Ye, z = P) : Q = Q.next = Ye, Ut.lanes = at(Ut.lanes, Te), jh(Te);
          }
          X = X.next;
        } while (X !== null && X !== D);
        Q === null ? z = P : Q.next = G, Ne(P, s.memoizedState) || bh(), s.memoizedState = P, s.baseState = z, s.baseQueue = Q, f.lastRenderedState = P;
      }
      var ht = f.interleaved;
      if (ht !== null) {
        var Y = ht;
        do {
          var J = Y.lane;
          Ut.lanes = at(Ut.lanes, J), jh(J), Y = Y.next;
        } while (Y !== ht);
      } else
        y === null && (f.lanes = ee);
      var $ = f.dispatch;
      return [s.memoizedState, $];
    }
    function s1(e, t, i) {
      var s = xi(), f = s.queue;
      if (f === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      f.lastRenderedReducer = e;
      var h = f.dispatch, y = f.pending, x = s.memoizedState;
      if (y !== null) {
        f.pending = null;
        var b = y.next, k = b;
        do {
          var D = k.action;
          x = e(x, D), k = k.next;
        } while (k !== b);
        Ne(x, s.memoizedState) || bh(), s.memoizedState = x, s.baseQueue === null && (s.baseState = x), f.lastRenderedState = x;
      }
      return [x, h];
    }
    function LP(e, t, i) {
    }
    function jP(e, t, i) {
    }
    function u1(e, t, i) {
      var s = Ut, f = Fo(), h, y = wr();
      if (y) {
        if (i === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        h = i(), ed || h !== i() && (v("The result of getServerSnapshot should be cached to avoid an infinite loop"), ed = !0);
      } else {
        if (h = t(), !ed) {
          var x = t();
          Ne(h, x) || (v("The result of getSnapshot should be cached to avoid an infinite loop"), ed = !0);
        }
        var b = ty();
        if (b === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Uu(b, ac) || xE(s, t, h);
      }
      f.memoizedState = h;
      var k = {
        value: h,
        getSnapshot: t
      };
      return f.queue = k, Dg(bE.bind(null, s, k, e), [e]), s.flags |= Xt, mh(qn | br, wE.bind(null, s, k, h, t), void 0, null), h;
    }
    function _g(e, t, i) {
      var s = Ut, f = xi(), h = t();
      if (!ed) {
        var y = t();
        Ne(h, y) || (v("The result of getSnapshot should be cached to avoid an infinite loop"), ed = !0);
      }
      var x = f.memoizedState, b = !Ne(x, h);
      b && (f.memoizedState = h, bh());
      var k = f.queue;
      if (yh(bE.bind(null, s, k, e), [e]), k.getSnapshot !== t || b || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Xn !== null && Xn.memoizedState.tag & qn) {
        s.flags |= Xt, mh(qn | br, wE.bind(null, s, k, h, t), void 0, null);
        var D = ty();
        if (D === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Uu(D, ac) || xE(s, t, h);
      }
      return h;
    }
    function xE(e, t, i) {
      e.flags |= Tu;
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
        return !Ne(i, s);
      } catch {
        return !0;
      }
    }
    function CE(e) {
      var t = La(e, qe);
      t !== null && nr(t, e, qe, Ht);
    }
    function Tg(e) {
      var t = Fo();
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
      var t = Fo();
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
      var f = Fo(), h = s === void 0 ? null : s;
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
      return (Ut.mode & Ta) !== Ve ? gh(ul | Xt | xo, br, e, t) : gh(Xt | xo, br, e, t);
    }
    function yh(e, t) {
      return Rg(Xt, br, e, t);
    }
    function p1(e, t) {
      return gh(rt, zo, e, t);
    }
    function Og(e, t) {
      return Rg(rt, zo, e, t);
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
    function Ng(e, t, i) {
      typeof t != "function" && v("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var s = i != null ? i.concat([e]) : null;
      return Rg(rt, Kn, _E.bind(null, t, e), s);
    }
    function KO(e, t) {
    }
    var Lg = KO;
    function m1(e, t) {
      var i = Fo(), s = t === void 0 ? null : t;
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
      var i = Fo(), s = t === void 0 ? null : t, f = e();
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
      var t = Fo();
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
      var s = !C0(ac);
      if (s) {
        if (!Ne(i, t)) {
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
      var e = Tg(!1), t = e[0], i = e[1], s = ZO.bind(null, i), f = Fo();
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
      var e = Fo(), t = ty(), i = t.identifierPrefix, s;
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
      var s = qs(e), f = {
        lane: s,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (NE(e))
        LE(t, f);
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
      var s = qs(e), f = {
        lane: s,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (NE(e))
        LE(t, f);
      else {
        var h = e.alternate;
        if (e.lanes === ee && (h === null || h.lanes === ee)) {
          var y = t.lastRenderedReducer;
          if (y !== null) {
            var x;
            x = _e.current, _e.current = Ki;
            try {
              var b = t.lastRenderedState, k = y(b, i);
              if (f.hasEagerState = !0, f.eagerState = k, Ne(k, b)) {
                NO(e, t, f, s);
                return;
              }
            } catch {
            } finally {
              _e.current = x;
            }
          }
        }
        var D = Kb(e, t, f, s);
        if (D !== null) {
          var P = fa();
          nr(D, e, s, P), jE(D, t, s);
        }
      }
      UE(e, s);
    }
    function NE(e) {
      var t = e.alternate;
      return e === Ut || t !== null && t === Ut;
    }
    function LE(e, t) {
      hh = Cg = !0;
      var i = e.pending;
      i === null ? t.next = t : (t.next = i.next, i.next = t), e.pending = t;
    }
    function jE(e, t, i) {
      if (yp(i)) {
        var s = t.lanes;
        s = xp(s, e.pendingLanes);
        var f = at(s, i);
        t.lanes = f, ws(e, f);
      }
    }
    function UE(e, t, i) {
      To(e, t);
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
      unstable_isNewReconciler: me
    }, AE = null, zE = null, FE = null, PE = null, Po = null, Ki = null, Fg = null;
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
          return re = "useCallback", Dt(), td(t), m1(e, t);
        },
        useContext: function(e) {
          return re = "useContext", Dt(), $n(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", Dt(), td(t), Dg(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return re = "useImperativeHandle", Dt(), td(i), v1(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", Dt(), td(t), p1(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", Dt(), td(t), h1(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", Dt(), td(t);
          var i = _e.current;
          _e.current = Po;
          try {
            return g1(e, t);
          } finally {
            _e.current = i;
          }
        },
        useReducer: function(e, t, i) {
          re = "useReducer", Dt();
          var s = _e.current;
          _e.current = Po;
          try {
            return o1(e, t, i);
          } finally {
            _e.current = s;
          }
        },
        useRef: function(e) {
          return re = "useRef", Dt(), d1(e);
        },
        useState: function(e) {
          re = "useState", Dt();
          var t = _e.current;
          _e.current = Po;
          try {
            return Tg(e);
          } finally {
            _e.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", Dt(), void 0;
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", Dt(), y1(e);
        },
        useTransition: function() {
          return re = "useTransition", Dt(), S1();
        },
        useMutableSource: function(e, t, i) {
          return re = "useMutableSource", Dt(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return re = "useSyncExternalStore", Dt(), u1(e, t, i);
        },
        useId: function() {
          return re = "useId", Dt(), x1();
        },
        unstable_isNewReconciler: me
      }, zE = {
        readContext: function(e) {
          return $n(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", ye(), m1(e, t);
        },
        useContext: function(e) {
          return re = "useContext", ye(), $n(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", ye(), Dg(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return re = "useImperativeHandle", ye(), v1(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", ye(), p1(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", ye(), h1(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", ye();
          var i = _e.current;
          _e.current = Po;
          try {
            return g1(e, t);
          } finally {
            _e.current = i;
          }
        },
        useReducer: function(e, t, i) {
          re = "useReducer", ye();
          var s = _e.current;
          _e.current = Po;
          try {
            return o1(e, t, i);
          } finally {
            _e.current = s;
          }
        },
        useRef: function(e) {
          return re = "useRef", ye(), d1(e);
        },
        useState: function(e) {
          re = "useState", ye();
          var t = _e.current;
          _e.current = Po;
          try {
            return Tg(e);
          } finally {
            _e.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", ye(), void 0;
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", ye(), y1(e);
        },
        useTransition: function() {
          return re = "useTransition", ye(), S1();
        },
        useMutableSource: function(e, t, i) {
          return re = "useMutableSource", ye(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return re = "useSyncExternalStore", ye(), u1(e, t, i);
        },
        useId: function() {
          return re = "useId", ye(), x1();
        },
        unstable_isNewReconciler: me
      }, FE = {
        readContext: function(e) {
          return $n(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", ye(), jg(e, t);
        },
        useContext: function(e) {
          return re = "useContext", ye(), $n(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", ye(), yh(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return re = "useImperativeHandle", ye(), Ng(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", ye(), Og(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", ye(), Mg(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", ye();
          var i = _e.current;
          _e.current = Ki;
          try {
            return Ug(e, t);
          } finally {
            _e.current = i;
          }
        },
        useReducer: function(e, t, i) {
          re = "useReducer", ye();
          var s = _e.current;
          _e.current = Ki;
          try {
            return l1(e, t, i);
          } finally {
            _e.current = s;
          }
        },
        useRef: function(e) {
          return re = "useRef", ye(), kg();
        },
        useState: function(e) {
          re = "useState", ye();
          var t = _e.current;
          _e.current = Ki;
          try {
            return c1(e);
          } finally {
            _e.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", ye(), Lg();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", ye(), TE(e);
        },
        useTransition: function() {
          return re = "useTransition", ye(), DE();
        },
        useMutableSource: function(e, t, i) {
          return re = "useMutableSource", ye(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return re = "useSyncExternalStore", ye(), _g(e, t);
        },
        useId: function() {
          return re = "useId", ye(), Ag();
        },
        unstable_isNewReconciler: me
      }, PE = {
        readContext: function(e) {
          return $n(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", ye(), jg(e, t);
        },
        useContext: function(e) {
          return re = "useContext", ye(), $n(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", ye(), yh(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return re = "useImperativeHandle", ye(), Ng(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", ye(), Og(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", ye(), Mg(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", ye();
          var i = _e.current;
          _e.current = Fg;
          try {
            return Ug(e, t);
          } finally {
            _e.current = i;
          }
        },
        useReducer: function(e, t, i) {
          re = "useReducer", ye();
          var s = _e.current;
          _e.current = Fg;
          try {
            return s1(e, t, i);
          } finally {
            _e.current = s;
          }
        },
        useRef: function(e) {
          return re = "useRef", ye(), kg();
        },
        useState: function(e) {
          re = "useState", ye();
          var t = _e.current;
          _e.current = Fg;
          try {
            return f1(e);
          } finally {
            _e.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", ye(), Lg();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", ye(), kE(e);
        },
        useTransition: function() {
          return re = "useTransition", ye(), OE();
        },
        useMutableSource: function(e, t, i) {
          return re = "useMutableSource", ye(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return re = "useSyncExternalStore", ye(), _g(e, t);
        },
        useId: function() {
          return re = "useId", ye(), Ag();
        },
        unstable_isNewReconciler: me
      }, Po = {
        readContext: function(e) {
          return w1(), $n(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", et(), Dt(), m1(e, t);
        },
        useContext: function(e) {
          return re = "useContext", et(), Dt(), $n(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", et(), Dt(), Dg(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return re = "useImperativeHandle", et(), Dt(), v1(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", et(), Dt(), p1(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", et(), Dt(), h1(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", et(), Dt();
          var i = _e.current;
          _e.current = Po;
          try {
            return g1(e, t);
          } finally {
            _e.current = i;
          }
        },
        useReducer: function(e, t, i) {
          re = "useReducer", et(), Dt();
          var s = _e.current;
          _e.current = Po;
          try {
            return o1(e, t, i);
          } finally {
            _e.current = s;
          }
        },
        useRef: function(e) {
          return re = "useRef", et(), Dt(), d1(e);
        },
        useState: function(e) {
          re = "useState", et(), Dt();
          var t = _e.current;
          _e.current = Po;
          try {
            return Tg(e);
          } finally {
            _e.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", et(), Dt(), void 0;
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", et(), Dt(), y1(e);
        },
        useTransition: function() {
          return re = "useTransition", et(), Dt(), S1();
        },
        useMutableSource: function(e, t, i) {
          return re = "useMutableSource", et(), Dt(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return re = "useSyncExternalStore", et(), Dt(), u1(e, t, i);
        },
        useId: function() {
          return re = "useId", et(), Dt(), x1();
        },
        unstable_isNewReconciler: me
      }, Ki = {
        readContext: function(e) {
          return w1(), $n(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", et(), ye(), jg(e, t);
        },
        useContext: function(e) {
          return re = "useContext", et(), ye(), $n(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", et(), ye(), yh(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return re = "useImperativeHandle", et(), ye(), Ng(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", et(), ye(), Og(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", et(), ye(), Mg(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", et(), ye();
          var i = _e.current;
          _e.current = Ki;
          try {
            return Ug(e, t);
          } finally {
            _e.current = i;
          }
        },
        useReducer: function(e, t, i) {
          re = "useReducer", et(), ye();
          var s = _e.current;
          _e.current = Ki;
          try {
            return l1(e, t, i);
          } finally {
            _e.current = s;
          }
        },
        useRef: function(e) {
          return re = "useRef", et(), ye(), kg();
        },
        useState: function(e) {
          re = "useState", et(), ye();
          var t = _e.current;
          _e.current = Ki;
          try {
            return c1(e);
          } finally {
            _e.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", et(), ye(), Lg();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", et(), ye(), TE(e);
        },
        useTransition: function() {
          return re = "useTransition", et(), ye(), DE();
        },
        useMutableSource: function(e, t, i) {
          return re = "useMutableSource", et(), ye(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return re = "useSyncExternalStore", et(), ye(), _g(e, t);
        },
        useId: function() {
          return re = "useId", et(), ye(), Ag();
        },
        unstable_isNewReconciler: me
      }, Fg = {
        readContext: function(e) {
          return w1(), $n(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", et(), ye(), jg(e, t);
        },
        useContext: function(e) {
          return re = "useContext", et(), ye(), $n(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", et(), ye(), yh(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return re = "useImperativeHandle", et(), ye(), Ng(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", et(), ye(), Og(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", et(), ye(), Mg(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", et(), ye();
          var i = _e.current;
          _e.current = Ki;
          try {
            return Ug(e, t);
          } finally {
            _e.current = i;
          }
        },
        useReducer: function(e, t, i) {
          re = "useReducer", et(), ye();
          var s = _e.current;
          _e.current = Ki;
          try {
            return s1(e, t, i);
          } finally {
            _e.current = s;
          }
        },
        useRef: function(e) {
          return re = "useRef", et(), ye(), kg();
        },
        useState: function(e) {
          re = "useState", et(), ye();
          var t = _e.current;
          _e.current = Ki;
          try {
            return f1(e);
          } finally {
            _e.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", et(), ye(), Lg();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", et(), ye(), kE(e);
        },
        useTransition: function() {
          return re = "useTransition", et(), ye(), OE();
        },
        useMutableSource: function(e, t, i) {
          return re = "useMutableSource", et(), ye(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return re = "useSyncExternalStore", et(), ye(), _g(e, t);
        },
        useId: function() {
          return re = "useId", et(), ye(), Ag();
        },
        unstable_isNewReconciler: me
      };
    }
    var Bs = o.unstable_now, HE = 0, Pg = -1, Sh = -1, Hg = -1, b1 = !1, Ig = !1;
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
      HE = Bs();
    }
    function E1(e) {
      Sh = Bs(), e.actualStartTime < 0 && (e.actualStartTime = Bs());
    }
    function VE(e) {
      Sh = -1;
    }
    function Yg(e, t) {
      if (Sh >= 0) {
        var i = Bs() - Sh;
        e.actualDuration += i, t && (e.selfBaseDuration = i), Sh = -1;
      }
    }
    function Ho(e) {
      if (Pg >= 0) {
        var t = Bs() - Pg;
        Pg = -1;
        for (var i = e.return; i !== null; ) {
          switch (i.tag) {
            case R:
              var s = i.stateNode;
              s.effectDuration += t;
              return;
            case ae:
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
        var t = Bs() - Hg;
        Hg = -1;
        for (var i = e.return; i !== null; ) {
          switch (i.tag) {
            case R:
              var s = i.stateNode;
              s !== null && (s.passiveEffectDuration += t);
              return;
            case ae:
              var f = i.stateNode;
              f !== null && (f.passiveEffectDuration += t);
              return;
          }
          i = i.return;
        }
      }
    }
    function Io() {
      Pg = Bs();
    }
    function _1() {
      Hg = Bs();
    }
    function T1(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ic(e, t) {
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
          if (e.tag === C)
            return;
          console.error(s);
        }
        var x = f ? nt(f) : null, b = x ? "The above error occurred in the <" + x + "> component:" : "The above error occurred in one of your React components:", k;
        if (e.tag === R)
          k = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var D = nt(e) || "Anonymous";
          k = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + D + ".");
        }
        var P = b + `
` + y + `

` + ("" + k);
        console.error(P);
      } catch (z) {
        setTimeout(function() {
          throw z;
        });
      }
    }
    var iM = typeof WeakMap == "function" ? WeakMap : Map;
    function BE(e, t, i) {
      var s = Ul(Ht, i);
      s.tag = RS, s.payload = {
        element: null
      };
      var f = t.value;
      return s.callback = function() {
        ZN(f), R1(e, t);
      }, s;
    }
    function D1(e, t, i) {
      var s = Ul(Ht, i);
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
        n_(e), R1(e, t), typeof f != "function" && qN(this);
        var b = t.value, k = t.stack;
        this.componentDidCatch(b, {
          componentStack: k !== null ? k : ""
        }), typeof f != "function" && (Yr(e.lanes, qe) || v("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", nt(e) || "Unknown"));
      }), s;
    }
    function WE(e, t, i) {
      var s = e.pingCache, f;
      if (s === null ? (s = e.pingCache = new iM(), f = /* @__PURE__ */ new Set(), s.set(t, f)) : (f = s.get(t), f === void 0 && (f = /* @__PURE__ */ new Set(), s.set(t, f))), !f.has(i)) {
        f.add(i);
        var h = XN.bind(null, e, t, i);
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
      if ((e.mode & ct) === Ve && (i === w || i === K || i === Z)) {
        var s = e.alternate;
        s ? (e.updateQueue = s.updateQueue, e.memoizedState = s.memoizedState, e.lanes = s.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function GE(e) {
      var t = e;
      do {
        if (t.tag === te && BO(t))
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
          if (e.flags |= Xe, i.flags |= ku, i.flags &= ~(Ic | ra), i.tag === C) {
            var h = i.alternate;
            if (h === null)
              i.tag = de;
            else {
              var y = Ul(Ht, qe);
              y.tag = dg, Is(i, y, qe);
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
          if (!Ss(f)) {
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
          (b.flags & Fn) === Ie && (b.flags |= sn), QE(b, t, i, e, f), wS(ic(s, i));
          return;
        }
      }
      s = ic(s, i), IN(s);
      var k = t;
      do {
        switch (k.tag) {
          case R: {
            var D = s;
            k.flags |= Fn;
            var P = kn(f);
            k.lanes = at(k.lanes, P);
            var z = BE(k, D, P);
            MS(k, z);
            return;
          }
          case C:
            var G = s, Q = k.type, X = k.stateNode;
            if ((k.flags & Xe) === Ie && (typeof Q.getDerivedStateFromError == "function" || X !== null && typeof X.componentDidCatch == "function" && !GC(X))) {
              k.flags |= Fn;
              var Te = kn(f);
              k.lanes = at(k.lanes, Te);
              var Ye = D1(k, G, Te);
              MS(k, Ye);
              return;
            }
            break;
        }
        k = k.return;
      } while (k !== null);
    }
    function uM() {
      return null;
    }
    var xh = l.ReactCurrentOwner, Zi = !1, O1, wh, M1, N1, L1, oc, j1, $g;
    O1 = {}, wh = {}, M1 = {}, N1 = {}, L1 = {}, oc = !1, j1 = {}, $g = {};
    function ua(e, t, i, s) {
      e === null ? t.child = dE(t, null, i, s) : t.child = Kf(t, e.child, i, s);
    }
    function cM(e, t, i, s) {
      t.child = Kf(t, e.child, null, s), t.child = Kf(t, null, i, s);
    }
    function qE(e, t, i, s, f) {
      if (t.type !== t.elementType) {
        var h = i.propTypes;
        h && Bi(
          h,
          s,
          // Resolved props
          "prop",
          Ft(i)
        );
      }
      var y = i.render, x = t.ref, b, k;
      qf(t, f), _o(t);
      {
        if (xh.current = t, Ga(!0), b = nd(e, t, y, s, x, f), k = rd(), t.mode & nn) {
          Tn(!0);
          try {
            b = nd(e, t, y, s, x, f), k = rd();
          } finally {
            Tn(!1);
          }
        }
        Ga(!1);
      }
      return cl(), e !== null && !Zi ? (gE(e, t, f), Al(e, t, f)) : (wr() && k && vS(t), t.flags |= yo, ua(e, t, b, f), t.child);
    }
    function KE(e, t, i, s, f) {
      if (e === null) {
        var h = i.type;
        if (vL(h) && i.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        i.defaultProps === void 0) {
          var y = h;
          return y = fd(h), t.tag = Z, t.type = y, z1(t, h), ZE(e, t, y, s, f);
        }
        {
          var x = h.propTypes;
          x && Bi(
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
        var k = i.type, D = k.propTypes;
        D && Bi(
          D,
          s,
          // Resolved props
          "prop",
          Ft(k)
        );
      }
      var P = e.child, z = $1(e, f);
      if (!z) {
        var G = P.memoizedProps, Q = i.compare;
        if (Q = Q !== null ? Q : Fe, Q(G, s) && e.ref === t.ref)
          return Al(e, t, f);
      }
      t.flags |= yo;
      var X = fc(P, s);
      return X.ref = t.ref, X.return = t, t.child = X, X;
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
          var k = h && h.propTypes;
          k && Bi(
            k,
            s,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Ft(h)
          );
        }
      }
      if (e !== null) {
        var D = e.memoizedProps;
        if (Fe(D, s) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Zi = !1, t.pendingProps = s = D, $1(e, f))
            (e.flags & ku) !== Ie && (Zi = !0);
          else
            return t.lanes = e.lanes, Al(e, t, f);
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
          var P = {
            baseLanes: ee,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = P;
          var z = h !== null ? h.baseLanes : i;
          ny(t, z);
        } else {
          var x = null, b;
          if (h !== null) {
            var k = h.baseLanes;
            b = at(k, i);
          } else
            b = i;
          t.lanes = t.childLanes = Ir;
          var D = {
            baseLanes: b,
            cachePool: x,
            transitions: null
          };
          return t.memoizedState = D, t.updateQueue = null, ny(t, b), null;
        }
      else {
        var G;
        h !== null ? (G = at(h.baseLanes, i), t.memoizedState = null) : G = i, ny(t, G);
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
        h && Bi(
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
      var b, k;
      qf(t, f), _o(t);
      {
        if (xh.current = t, Ga(!0), b = nd(e, t, i, s, y, f), k = rd(), t.mode & nn) {
          Tn(!0);
          try {
            b = nd(e, t, i, s, y, f), k = rd();
          } finally {
            Tn(!1);
          }
        }
        Ga(!1);
      }
      return cl(), e !== null && !Zi ? (gE(e, t, f), Al(e, t, f)) : (wr() && k && vS(t), t.flags |= yo, ua(e, t, b, f), t.child);
    }
    function eC(e, t, i, s, f) {
      {
        switch (OL(t)) {
          case !1: {
            var h = t.stateNode, y = t.type, x = new y(t.memoizedProps, h.context), b = x.state;
            h.updater.enqueueSetState(h, b, null);
            break;
          }
          case !0: {
            t.flags |= Xe, t.flags |= Fn;
            var k = new Error("Simulated error coming from DevTools"), D = kn(f);
            t.lanes = at(t.lanes, D);
            var P = D1(t, ic(k, t), D);
            MS(t, P);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var z = i.propTypes;
          z && Bi(
            z,
            s,
            // Resolved props
            "prop",
            Ft(i)
          );
        }
      }
      var G;
      Ao(i) ? (G = !0, tg(t)) : G = !1, qf(t, f);
      var Q = t.stateNode, X;
      Q === null ? (Bg(e, t), lE(t, i, s), $S(t, i, s, f), X = !0) : e === null ? X = PO(t, i, s, f) : X = HO(e, t, i, s, f);
      var Te = A1(e, t, i, X, G, f);
      {
        var Ye = t.stateNode;
        X && Ye.props !== s && (oc || v("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", nt(t) || "a component"), oc = !0);
      }
      return Te;
    }
    function A1(e, t, i, s, f, h) {
      JE(e, t);
      var y = (t.flags & Xe) !== Ie;
      if (!s && !y)
        return f && jb(t, i, !1), Al(e, t, h);
      var x = t.stateNode;
      xh.current = t;
      var b;
      if (y && typeof i.getDerivedStateFromError != "function")
        b = null, VE();
      else {
        _o(t);
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
        cl();
      }
      return t.flags |= yo, e !== null && y ? cM(e, t, b, h) : ua(e, t, b, h), t.memoizedState = x.state, f && jb(t, i, !0), t.child;
    }
    function tC(e) {
      var t = e.stateNode;
      t.pendingContext ? Nb(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Nb(e, t.context, !1), qS(e, t.containerInfo);
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
        }, k = t.updateQueue;
        if (k.baseState = b, t.memoizedState = b, t.flags & sn) {
          var D = ic(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return nC(e, t, x, i, D);
        } else if (x !== h) {
          var P = ic(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return nC(e, t, x, i, P);
        } else {
          yO(t);
          var z = dE(t, null, x, i);
          t.child = z;
          for (var G = z; G; )
            G.flags = G.flags & ~Bt | Ea, G = G.sibling;
        }
      } else {
        if (Gf(), x === h)
          return Al(e, t, i);
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
      var k = t.tag = mL(b), D = Qi(b, f), P;
      switch (k) {
        case w:
          return z1(t, b), t.type = b = fd(b), P = U1(null, t, b, D, s), P;
        case C:
          return t.type = b = px(b), P = eC(null, t, b, D, s), P;
        case K:
          return t.type = b = hx(b), P = qE(null, t, b, D, s), P;
        case V: {
          if (t.type !== t.elementType) {
            var z = b.propTypes;
            z && Bi(
              z,
              D,
              // Resolved for outer only
              "prop",
              Ft(b)
            );
          }
          return P = KE(
            null,
            t,
            b,
            Qi(b.type, D),
            // The inner type can have defaults too
            s
          ), P;
        }
      }
      var G = "";
      throw b !== null && typeof b == "object" && b.$$typeof === We && (G = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + b + ". " + ("Lazy element type must resolve to a class or function." + G));
    }
    function yM(e, t, i, s, f) {
      Bg(e, t), t.tag = C;
      var h;
      return Ao(i) ? (h = !0, tg(t)) : h = !1, qf(t, f), lE(t, i, s), $S(t, i, s, f), A1(null, t, i, !0, h, f);
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
      _o(t);
      {
        if (i.prototype && typeof i.prototype.render == "function") {
          var k = Ft(i) || "Unknown";
          O1[k] || (v("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", k, k), O1[k] = !0);
        }
        t.mode & nn && Gi.recordLegacyContextWarning(t, null), Ga(!0), xh.current = t, x = nd(null, t, i, f, h, s), b = rd(), Ga(!1);
      }
      if (cl(), t.flags |= yo, typeof x == "object" && x !== null && typeof x.render == "function" && x.$$typeof === void 0) {
        var D = Ft(i) || "Unknown";
        wh[D] || (v("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", D, D, D), wh[D] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof x == "object" && x !== null && typeof x.render == "function" && x.$$typeof === void 0
      ) {
        {
          var P = Ft(i) || "Unknown";
          wh[P] || (v("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", P, P, P), wh[P] = !0);
        }
        t.tag = C, t.memoizedState = null, t.updateQueue = null;
        var z = !1;
        return Ao(i) ? (z = !0, tg(t)) : z = !1, t.memoizedState = x.state !== null && x.state !== void 0 ? x.state : null, OS(t), oE(t, x), $S(t, i, f, s), A1(null, t, i, !0, z, s);
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
          h && (f = h.fileName + ":" + h.lineNumber), L1[f] || (L1[f] = !0, v("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", i));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var y = Ft(t) || "Unknown";
          N1[y] || (v("%s: Function components do not support getDerivedStateFromProps.", y), N1[y] = !0);
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
      return xs(e.childLanes, t);
    }
    function rC(e, t, i) {
      var s = t.pendingProps;
      ML(t) && (t.flags |= Xe);
      var f = qi.current, h = !1, y = (t.flags & Xe) !== Ie;
      if (y || wM(f, e) ? (h = !0, t.flags &= ~Xe) : (e === null || e.memoizedState !== null) && (f = VO(f, mE)), f = Xf(f), $s(t, f), e === null) {
        xS(t);
        var x = t.memoizedState;
        if (x !== null) {
          var b = x.dehydrated;
          if (b !== null)
            return kM(t, b);
        }
        var k = s.children, D = s.fallback;
        if (h) {
          var P = EM(t, k, D, i), z = t.child;
          return z.memoizedState = P1(i), t.memoizedState = F1, P;
        } else
          return H1(t, k);
      } else {
        var G = e.memoizedState;
        if (G !== null) {
          var Q = G.dehydrated;
          if (Q !== null)
            return RM(e, t, y, s, Q, G, i);
        }
        if (h) {
          var X = s.fallback, Te = s.children, Ye = _M(e, t, Te, X, i), ze = t.child, yt = e.child.memoizedState;
          return ze.memoizedState = yt === null ? P1(i) : xM(yt, i), ze.childLanes = bM(e, i), t.memoizedState = F1, Ye;
        } else {
          var ht = s.children, Y = CM(e, t, ht, i);
          return t.memoizedState = null, Y;
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
      return (f & ct) === Ve && h !== null ? (x = h, x.childLanes = ee, x.pendingProps = y, e.mode & Ge && (x.actualDuration = 0, x.actualStartTime = -1, x.selfBaseDuration = 0, x.treeBaseDuration = 0), b = Zs(i, f, s, null)) : (x = I1(y, f), b = Zs(i, f, s, null)), x.return = e, b.return = e, x.sibling = b, e.child = x, b;
    }
    function I1(e, t, i) {
      return a_(e, t, ee, null);
    }
    function aC(e, t) {
      return fc(e, t);
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
      }, k;
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
        var D = t.child;
        k = D, k.childLanes = ee, k.pendingProps = b, t.mode & Ge && (k.actualDuration = 0, k.actualStartTime = -1, k.selfBaseDuration = y.selfBaseDuration, k.treeBaseDuration = y.treeBaseDuration), t.deletions = null;
      } else
        k = aC(y, b), k.subtreeFlags = y.subtreeFlags & Wn;
      var P;
      return x !== null ? P = fc(x, s) : (P = Zs(s, h, f, null), P.flags |= Bt), P.return = t, k.return = t, k.sibling = P, t.child = k, P;
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
      }, x = I1(y, h), b = Zs(s, h, f, null);
      return b.flags |= Bt, x.return = t, b.return = t, x.sibling = b, t.child = x, (t.mode & ct) !== Ve && Kf(t, e.child, null, f), b;
    }
    function kM(e, t, i) {
      return (e.mode & ct) === Ve ? (v("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = qe) : iS(t) ? e.lanes = pl : e.lanes = Ir, null;
    }
    function RM(e, t, i, s, f, h, y) {
      if (i)
        if (t.flags & sn) {
          t.flags &= ~sn;
          var Y = k1(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Vg(e, t, y, Y);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Xe, null;
          var J = s.children, $ = s.fallback, ce = TM(e, t, J, $, y), ke = t.child;
          return ke.memoizedState = P1(y), t.memoizedState = F1, ce;
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
          var x, b, k;
          {
            var D = LD(f);
            x = D.digest, b = D.message, k = D.stack;
          }
          var P;
          b ? P = new Error(b) : P = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var z = k1(P, x, k);
          return Vg(e, t, y, z);
        }
        var G = Yr(y, e.childLanes);
        if (Zi || G) {
          var Q = ty();
          if (Q !== null) {
            var X = T0(Q, y);
            if (X !== mt && X !== h.retryLane) {
              h.retryLane = X;
              var Te = Ht;
              La(e, X), nr(Q, e, X, Te);
            }
          }
          sx();
          var Ye = k1(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Vg(e, t, y, Ye);
        } else if (Tb(f)) {
          t.flags |= Xe, t.child = e.child;
          var ze = JN.bind(null, e);
          return jD(f, ze), null;
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
        if (s.tag === te) {
          var f = s.memoizedState;
          f !== null && iC(s, i, e);
        } else if (s.tag === Ae)
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
    function NM(e, t) {
      e !== void 0 && !$g[e] && (e !== "collapsed" && e !== "hidden" ? ($g[e] = !0, v('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && ($g[e] = !0, v('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function oC(e, t) {
      {
        var i = An(e), s = !i && typeof Ri(e) == "function";
        if (i || s) {
          var f = i ? "array" : "iterable";
          return v("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", f, t, f), !1;
        }
      }
      return !0;
    }
    function LM(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (An(e)) {
          for (var i = 0; i < e.length; i++)
            if (!oC(e[i], i))
              return;
        } else {
          var s = Ri(e);
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
      MM(f), NM(h, f), LM(y, f), ua(e, t, y, i);
      var x = qi.current, b = XS(x, dh);
      if (b)
        x = JS(x, dh), t.flags |= Xe;
      else {
        var k = e !== null && (e.flags & Xe) !== Ie;
        k && DM(t, t.child, i), x = Xf(x);
      }
      if ($s(t, x), (t.mode & ct) === Ve)
        t.memoizedState = null;
      else
        switch (f) {
          case "forwards": {
            var D = OM(t.child), P;
            D === null ? (P = t.child, t.child = null) : (P = D.sibling, D.sibling = null), Y1(
              t,
              !1,
              // isBackwards
              P,
              D,
              h
            );
            break;
          }
          case "backwards": {
            var z = null, G = t.child;
            for (t.child = null; G !== null; ) {
              var Q = G.alternate;
              if (Q !== null && Eg(Q) === null) {
                t.child = G;
                break;
              }
              var X = G.sibling;
              G.sibling = z, z = G, G = X;
            }
            Y1(
              t,
              !0,
              // isBackwards
              z,
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
        b && Bi(b, h, "prop", "Context.Provider");
      }
      if (qb(t, f, x), y !== null) {
        var k = y.value;
        if (Ne(k, x)) {
          if (y.children === h.children && !Jm())
            return Al(e, t, i);
        } else
          DO(t, f, i);
      }
      var D = h.children;
      return ua(e, t, D, i), t.child;
    }
    var uC = !1;
    function AM(e, t, i) {
      var s = t.type;
      s._context === void 0 ? s !== s.Consumer && (uC || (uC = !0, v("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : s = s._context;
      var f = t.pendingProps, h = f.children;
      typeof h != "function" && v("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), qf(t, i);
      var y = $n(s);
      _o(t);
      var x;
      return xh.current = t, Ga(!0), x = h(y), Ga(!1), cl(), t.flags |= yo, ua(e, t, x, i), t.child;
    }
    function bh() {
      Zi = !0;
    }
    function Bg(e, t) {
      (t.mode & ct) === Ve && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Bt);
    }
    function Al(e, t, i) {
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
        case R:
          tC(t), t.stateNode, Gf();
          break;
        case U:
          hE(t);
          break;
        case C: {
          var s = t.type;
          Ao(s) && tg(t);
          break;
        }
        case O:
          qS(t, t.stateNode.containerInfo);
          break;
        case W: {
          var f = t.memoizedProps.value, h = t.type._context;
          qb(t, h, f);
          break;
        }
        case ae:
          {
            var y = Yr(i, t.childLanes);
            y && (t.flags |= rt);
            {
              var x = t.stateNode;
              x.effectDuration = 0, x.passiveEffectDuration = 0;
            }
          }
          break;
        case te: {
          var b = t.memoizedState;
          if (b !== null) {
            if (b.dehydrated !== null)
              return $s(t, Xf(qi.current)), t.flags |= Xe, null;
            var k = t.child, D = k.childLanes;
            if (Yr(i, D))
              return rC(e, t, i);
            $s(t, Xf(qi.current));
            var P = Al(e, t, i);
            return P !== null ? P.sibling : null;
          } else
            $s(t, Xf(qi.current));
          break;
        }
        case Ae: {
          var z = (e.flags & Xe) !== Ie, G = Yr(i, t.childLanes);
          if (z) {
            if (G)
              return lC(e, t, i);
            t.flags |= Xe;
          }
          var Q = t.memoizedState;
          if (Q !== null && (Q.rendering = null, Q.tail = null, Q.lastEffect = null), $s(t, qi.current), G)
            break;
          return null;
        }
        case De:
        case Ze:
          return t.lanes = ee, XE(e, t, i);
      }
      return Al(e, t, i);
    }
    function cC(e, t, i) {
      if (t._debugNeedsRemount && e !== null)
        return zM(e, t, Sx(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var s = e.memoizedProps, f = t.pendingProps;
        if (s !== f || Jm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Zi = !0;
        else {
          var h = $1(e, i);
          if (!h && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Xe) === Ie)
            return Zi = !1, FM(e, t, i);
          (e.flags & ku) !== Ie ? Zi = !0 : Zi = !1;
        }
      } else if (Zi = !1, wr() && cO(t)) {
        var y = t.index, x = fO();
        zb(t, x, y);
      }
      switch (t.lanes = ee, t.tag) {
        case T:
          return SM(e, t, t.type, i);
        case we: {
          var b = t.elementType;
          return gM(e, t, b, i);
        }
        case w: {
          var k = t.type, D = t.pendingProps, P = t.elementType === k ? D : Qi(k, D);
          return U1(e, t, k, P, i);
        }
        case C: {
          var z = t.type, G = t.pendingProps, Q = t.elementType === z ? G : Qi(z, G);
          return eC(e, t, z, Q, i);
        }
        case R:
          return hM(e, t, i);
        case U:
          return vM(e, t, i);
        case L:
          return mM(e, t);
        case te:
          return rC(e, t, i);
        case O:
          return jM(e, t, i);
        case K: {
          var X = t.type, Te = t.pendingProps, Ye = t.elementType === X ? Te : Qi(X, Te);
          return qE(e, t, X, Ye, i);
        }
        case H:
          return fM(e, t, i);
        case ne:
          return dM(e, t, i);
        case ae:
          return pM(e, t, i);
        case W:
          return UM(e, t, i);
        case oe:
          return AM(e, t, i);
        case V: {
          var ze = t.type, yt = t.pendingProps, ht = Qi(ze, yt);
          if (t.type !== t.elementType) {
            var Y = ze.propTypes;
            Y && Bi(
              Y,
              ht,
              // Resolved for outer only
              "prop",
              Ft(ze)
            );
          }
          return ht = Qi(ze.type, ht), KE(e, t, ze, ht, i);
        }
        case Z:
          return ZE(e, t, t.type, t.pendingProps, i);
        case de: {
          var J = t.type, $ = t.pendingProps, ce = t.elementType === J ? $ : Qi(J, $);
          return yM(e, t, J, ce, i);
        }
        case Ae:
          return lC(e, t, i);
        case Qe:
          break;
        case De:
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
        if (f.tag === U || f.tag === L)
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
          for (var b = e.selfBaseDuration, k = e.child; k !== null; )
            i = at(i, at(k.lanes, k.childLanes)), s |= k.subtreeFlags & Wn, s |= k.flags & Wn, b += k.treeBaseDuration, k = k.sibling;
          e.treeBaseDuration = b;
        } else
          for (var D = e.child; D !== null; )
            i = at(i, at(D.lanes, D.childLanes)), s |= D.subtreeFlags & Wn, s |= D.flags & Wn, D.return = e, D = D.sibling;
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
        case T:
        case we:
        case Z:
        case w:
        case K:
        case H:
        case ne:
        case ae:
        case oe:
        case V:
          return Er(t), null;
        case C: {
          var f = t.type;
          return Ao(f) && eg(t), Er(t), null;
        }
        case R: {
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
        case U: {
          ZS(t);
          var b = pE(), k = t.type;
          if (e !== null && t.stateNode != null)
            pC(e, t, k, s, b), e.ref !== t.ref && fC(t);
          else {
            if (!s) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Er(t), null;
            }
            var D = KS(), P = og(t);
            if (P)
              xO(t, b, D) && ad(t);
            else {
              var z = oD(k, s, b, D, t);
              dC(z, t, !1, !1), t.stateNode = z, sD(z, k, s, b) && ad(t);
            }
            t.ref !== null && fC(t);
          }
          return Er(t), null;
        }
        case L: {
          var G = s;
          if (e && t.stateNode != null) {
            var Q = e.memoizedProps;
            hC(e, t, Q, G);
          } else {
            if (typeof G != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var X = pE(), Te = KS(), Ye = og(t);
            Ye ? wO(t) && ad(t) : t.stateNode = cD(G, X, Te, t);
          }
          return Er(t), null;
        }
        case te: {
          Jf(t);
          var ze = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var yt = PM(e, t, ze);
            if (!yt)
              return t.flags & Fn ? t : null;
          }
          if ((t.flags & Xe) !== Ie)
            return t.lanes = i, (t.mode & Ge) !== Ve && T1(t), t;
          var ht = ze !== null, Y = e !== null && e.memoizedState !== null;
          if (ht !== Y && ht) {
            var J = t.child;
            if (J.flags |= So, (t.mode & ct) !== Ve) {
              var $ = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !wt);
              $ || XS(qi.current, mE) ? HN() : sx();
            }
          }
          var ce = t.updateQueue;
          if (ce !== null && (t.flags |= rt), Er(t), (t.mode & Ge) !== Ve && ht) {
            var ke = t.child;
            ke !== null && (t.treeBaseDuration -= ke.treeBaseDuration);
          }
          return null;
        }
        case O:
          return Zf(t), V1(e, t), e === null && rO(t.stateNode.containerInfo), Er(t), null;
        case W:
          var Ee = t.type._context;
          return _S(Ee, t), Er(t), null;
        case de: {
          var Ke = t.type;
          return Ao(Ke) && eg(t), Er(t), null;
        }
        case Ae: {
          Jf(t);
          var tt = t.memoizedState;
          if (tt === null)
            return Er(t), null;
          var At = (t.flags & Xe) !== Ie, Et = tt.rendering;
          if (Et === null)
            if (At)
              Eh(tt, !1);
            else {
              var Mn = YN() && (e === null || (e.flags & Xe) === Ie);
              if (!Mn)
                for (var Ct = t.child; Ct !== null; ) {
                  var bn = Eg(Ct);
                  if (bn !== null) {
                    At = !0, t.flags |= Xe, Eh(tt, !1);
                    var Wr = bn.updateQueue;
                    return Wr !== null && (t.updateQueue = Wr, t.flags |= rt), t.subtreeFlags = Ie, YO(t, i), $s(t, JS(qi.current, dh)), t.child;
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
            var Gr = qi.current;
            return At ? Gr = JS(Gr, dh) : Gr = Xf(Gr), $s(t, Gr), pa;
          }
          return Er(t), null;
        }
        case Qe:
          break;
        case De:
        case Ze: {
          lx(t);
          var Il = t.memoizedState, dd = Il !== null;
          if (e !== null) {
            var Ph = e.memoizedState, Vo = Ph !== null;
            Vo !== dd && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !be && (t.flags |= So);
          }
          return !dd || (t.mode & ct) === Ve ? Er(t) : Yr($o, Ir) && (Er(t), t.subtreeFlags & (Bt | rt) && (t.flags |= So)), null;
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
        case C: {
          var s = t.type;
          Ao(s) && eg(t);
          var f = t.flags;
          return f & Fn ? (t.flags = f & ~Fn | Xe, (t.mode & Ge) !== Ve && T1(t), t) : null;
        }
        case R: {
          t.stateNode, Zf(t), dS(t), t1();
          var h = t.flags;
          return (h & Fn) !== Ie && (h & Xe) === Ie ? (t.flags = h & ~Fn | Xe, t) : null;
        }
        case U:
          return ZS(t), null;
        case te: {
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
        case Ae:
          return Jf(t), null;
        case O:
          return Zf(t), null;
        case W:
          var b = t.type._context;
          return _S(b, t), null;
        case De:
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
        case C: {
          var s = t.type.childContextTypes;
          s != null && eg(t);
          break;
        }
        case R: {
          t.stateNode, Zf(t), dS(t), t1();
          break;
        }
        case U: {
          ZS(t);
          break;
        }
        case O:
          Zf(t);
          break;
        case te:
          Jf(t);
          break;
        case Ae:
          Jf(t);
          break;
        case W:
          var f = t.type._context;
          _S(f, t);
          break;
        case De:
        case Ze:
          lx(t);
          break;
      }
    }
    var gC = null;
    gC = /* @__PURE__ */ new Set();
    var Wg = !1, Cr = !1, IM = typeof WeakSet == "function" ? WeakSet : Set, Le = null, id = null, od = null;
    function YM(e) {
      sl(null, function() {
        throw e;
      }), tp();
    }
    var $M = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ge)
        try {
          Io(), t.componentWillUnmount();
        } finally {
          Ho(e);
        }
      else
        t.componentWillUnmount();
    };
    function yC(e, t) {
      try {
        Ws(Kn, e);
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
                Io(), s = i(null);
              } finally {
                Ho(e);
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
        (e.subtreeFlags & ds) !== Ie && t !== null ? (t.return = e, Le = t) : GM();
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
          case K:
          case Z:
            break;
          case C: {
            if (t !== null) {
              var s = t.memoizedProps, f = t.memoizedState, h = e.stateNode;
              e.type === e.elementType && !oc && (h.props !== e.memoizedProps && v("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", nt(e) || "instance"), h.state !== e.memoizedState && v("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", nt(e) || "instance"));
              var y = h.getSnapshotBeforeUpdate(e.elementType === e.type ? s : Qi(e.type, s), f);
              {
                var x = gC;
                y === void 0 && !x.has(e.type) && (x.add(e.type), v("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", nt(e)));
              }
              h.__reactInternalSnapshotBeforeUpdate = y;
            }
            break;
          }
          case R: {
            {
              var b = e.stateNode;
              DD(b.containerInfo);
            }
            break;
          }
          case U:
          case L:
          case O:
          case de:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        _n();
      }
    }
    function Xi(e, t, i) {
      var s = t.updateQueue, f = s !== null ? s.lastEffect : null;
      if (f !== null) {
        var h = f.next, y = h;
        do {
          if ((y.tag & e) === e) {
            var x = y.destroy;
            y.destroy = void 0, x !== void 0 && ((e & br) !== ja ? qc(t) : (e & Kn) !== ja && Kc(t), (e & zo) !== ja && Ah(!0), Gg(t, i, x), (e & zo) !== ja && Ah(!1), (e & br) !== ja ? im() : (e & Kn) !== ja && ps());
          }
          y = y.next;
        } while (y !== h);
      }
    }
    function Ws(e, t) {
      var i = t.updateQueue, s = i !== null ? i.lastEffect : null;
      if (s !== null) {
        var f = s.next, h = f;
        do {
          if ((h.tag & e) === e) {
            (e & br) !== ja ? am(t) : (e & Kn) !== ja && om(t);
            var y = h.create;
            (e & zo) !== ja && Ah(!0), h.destroy = y(), (e & zo) !== ja && Ah(!1), (e & br) !== ja ? pp() : (e & Kn) !== ja && lm();
            {
              var x = h.destroy;
              if (x !== void 0 && typeof x != "function") {
                var b = void 0;
                (h.tag & Kn) !== Ie ? b = "useLayoutEffect" : (h.tag & zo) !== Ie ? b = "useInsertionEffect" : b = "useEffect";
                var k = void 0;
                x === null ? k = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof x.then == "function" ? k = `

It looks like you wrote ` + b + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + b + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : k = " You returned: " + x, v("%s must not return anything besides a function, which is used for clean-up.%s", b, k);
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
          case ae: {
            var i = t.stateNode.passiveEffectDuration, s = t.memoizedProps, f = s.id, h = s.onPostCommit, y = YE(), x = t.alternate === null ? "mount" : "update";
            IE() && (x = "nested-update"), typeof h == "function" && h(f, x, i, y);
            var b = t.return;
            e:
              for (; b !== null; ) {
                switch (b.tag) {
                  case R:
                    var k = b.stateNode;
                    k.passiveEffectDuration += i;
                    break e;
                  case ae:
                    var D = b.stateNode;
                    D.passiveEffectDuration += i;
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
          case K:
          case Z: {
            if (!Cr)
              if (i.mode & Ge)
                try {
                  Io(), Ws(Kn | qn, i);
                } finally {
                  Ho(i);
                }
              else
                Ws(Kn | qn, i);
            break;
          }
          case C: {
            var f = i.stateNode;
            if (i.flags & rt && !Cr)
              if (t === null)
                if (i.type === i.elementType && !oc && (f.props !== i.memoizedProps && v("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", nt(i) || "instance"), f.state !== i.memoizedState && v("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", nt(i) || "instance")), i.mode & Ge)
                  try {
                    Io(), f.componentDidMount();
                  } finally {
                    Ho(i);
                  }
                else
                  f.componentDidMount();
              else {
                var h = i.elementType === i.type ? t.memoizedProps : Qi(i.type, t.memoizedProps), y = t.memoizedState;
                if (i.type === i.elementType && !oc && (f.props !== i.memoizedProps && v("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", nt(i) || "instance"), f.state !== i.memoizedState && v("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", nt(i) || "instance")), i.mode & Ge)
                  try {
                    Io(), f.componentDidUpdate(h, y, f.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Ho(i);
                  }
                else
                  f.componentDidUpdate(h, y, f.__reactInternalSnapshotBeforeUpdate);
              }
            var x = i.updateQueue;
            x !== null && (i.type === i.elementType && !oc && (f.props !== i.memoizedProps && v("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", nt(i) || "instance"), f.state !== i.memoizedState && v("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", nt(i) || "instance")), tE(i, x, f));
            break;
          }
          case R: {
            var b = i.updateQueue;
            if (b !== null) {
              var k = null;
              if (i.child !== null)
                switch (i.child.tag) {
                  case U:
                    k = i.child.stateNode;
                    break;
                  case C:
                    k = i.child.stateNode;
                    break;
                }
              tE(i, b, k);
            }
            break;
          }
          case U: {
            var D = i.stateNode;
            if (t === null && i.flags & rt) {
              var P = i.type, z = i.memoizedProps;
              vD(D, P, z);
            }
            break;
          }
          case L:
            break;
          case O:
            break;
          case ae: {
            {
              var G = i.memoizedProps, Q = G.onCommit, X = G.onRender, Te = i.stateNode.effectDuration, Ye = YE(), ze = t === null ? "mount" : "update";
              IE() && (ze = "nested-update"), typeof X == "function" && X(i.memoizedProps.id, ze, i.actualDuration, i.treeBaseDuration, i.actualStartTime, Ye);
              {
                typeof Q == "function" && Q(i.memoizedProps.id, ze, Te, Ye), GN(i);
                var yt = i.return;
                e:
                  for (; yt !== null; ) {
                    switch (yt.tag) {
                      case R:
                        var ht = yt.stateNode;
                        ht.effectDuration += Te;
                        break e;
                      case ae:
                        var Y = yt.stateNode;
                        Y.effectDuration += Te;
                        break e;
                    }
                    yt = yt.return;
                  }
              }
            }
            break;
          }
          case te: {
            aN(e, i);
            break;
          }
          case Ae:
          case de:
          case Qe:
          case De:
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
        case K:
        case Z: {
          if (e.mode & Ge)
            try {
              Io(), yC(e, e.return);
            } finally {
              Ho(e);
            }
          else
            yC(e, e.return);
          break;
        }
        case C: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && VM(e, e.return, t), SC(e, e.return);
          break;
        }
        case U: {
          SC(e, e.return);
          break;
        }
      }
    }
    function XM(e, t) {
      for (var i = null, s = e; ; ) {
        if (s.tag === U) {
          if (i === null) {
            i = s;
            try {
              var f = s.stateNode;
              t ? _D(f) : kD(s.stateNode, s.memoizedProps);
            } catch (y) {
              qt(e, e.return, y);
            }
          }
        } else if (s.tag === L) {
          if (i === null)
            try {
              var h = s.stateNode;
              t ? TD(h) : RD(h, s.memoizedProps);
            } catch (y) {
              qt(e, e.return, y);
            }
        } else if (!((s.tag === De || s.tag === Ze) && s.memoizedState !== null && s !== e)) {
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
          case U:
            s = i;
            break;
          default:
            s = i;
        }
        if (typeof t == "function") {
          var f;
          if (e.mode & Ge)
            try {
              Io(), f = t(s);
            } finally {
              Ho(e);
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
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === U) {
          var i = e.stateNode;
          i !== null && oO(i);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function eN(e) {
      for (var t = e.return; t !== null; ) {
        if (EC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function EC(e) {
      return e.tag === U || e.tag === R || e.tag === O;
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
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== U && t.tag !== L && t.tag !== ve; ) {
            if (t.flags & Bt || t.child === null || t.tag === O)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & Bt))
            return t.stateNode;
        }
    }
    function tN(e) {
      var t = eN(e);
      switch (t.tag) {
        case U: {
          var i = t.stateNode;
          t.flags & Rt && (_b(i), t.flags &= ~Rt);
          var s = CC(e);
          G1(e, s, i);
          break;
        }
        case R:
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
      var s = e.tag, f = s === U || s === L;
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
      var s = e.tag, f = s === U || s === L;
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
    var _r = null, Ji = !1;
    function nN(e, t, i) {
      {
        var s = t;
        e:
          for (; s !== null; ) {
            switch (s.tag) {
              case U: {
                _r = s.stateNode, Ji = !1;
                break e;
              }
              case R: {
                _r = s.stateNode.containerInfo, Ji = !0;
                break e;
              }
              case O: {
                _r = s.stateNode.containerInfo, Ji = !0;
                break e;
              }
            }
            s = s.return;
          }
        if (_r === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        _C(e, t, i), _r = null, Ji = !1;
      }
      JM(i);
    }
    function Gs(e, t, i) {
      for (var s = i.child; s !== null; )
        _C(e, t, s), s = s.sibling;
    }
    function _C(e, t, i) {
      switch (fp(i), i.tag) {
        case U:
          Cr || ld(i, t);
        case L: {
          {
            var s = _r, f = Ji;
            _r = null, Gs(e, t, i), _r = s, Ji = f, _r !== null && (Ji ? ED(_r, i.stateNode) : bD(_r, i.stateNode));
          }
          return;
        }
        case ve: {
          _r !== null && (Ji ? CD(_r, i.stateNode) : aS(_r, i.stateNode));
          return;
        }
        case O: {
          {
            var h = _r, y = Ji;
            _r = i.stateNode.containerInfo, Ji = !0, Gs(e, t, i), _r = h, Ji = y;
          }
          return;
        }
        case w:
        case K:
        case V:
        case Z: {
          if (!Cr) {
            var x = i.updateQueue;
            if (x !== null) {
              var b = x.lastEffect;
              if (b !== null) {
                var k = b.next, D = k;
                do {
                  var P = D, z = P.destroy, G = P.tag;
                  z !== void 0 && ((G & zo) !== ja ? Gg(i, t, z) : (G & Kn) !== ja && (Kc(i), i.mode & Ge ? (Io(), Gg(i, t, z), Ho(i)) : Gg(i, t, z), ps())), D = D.next;
                } while (D !== k);
              }
            }
          }
          Gs(e, t, i);
          return;
        }
        case C: {
          if (!Cr) {
            ld(i, t);
            var Q = i.stateNode;
            typeof Q.componentWillUnmount == "function" && B1(i, t, Q);
          }
          Gs(e, t, i);
          return;
        }
        case Qe: {
          Gs(e, t, i);
          return;
        }
        case De: {
          if (
            // TODO: Remove this dead flag
            i.mode & ct
          ) {
            var X = Cr;
            Cr = X || i.memoizedState !== null, Gs(e, t, i), Cr = X;
          } else
            Gs(e, t, i);
          break;
        }
        default: {
          Gs(e, t, i);
          return;
        }
      }
    }
    function rN(e) {
      e.memoizedState;
    }
    function aN(e, t) {
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
          var f = eL.bind(null, e, s);
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
    function iN(e, t, i) {
      id = i, od = e, jt(t), kC(t, e), jt(t), id = null, od = null;
    }
    function eo(e, t, i) {
      var s = t.deletions;
      if (s !== null)
        for (var f = 0; f < s.length; f++) {
          var h = s[f];
          try {
            nN(e, t, h);
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
        case K:
        case V:
        case Z: {
          if (eo(t, e), Yo(e), f & rt) {
            try {
              Xi(zo | qn, e, e.return), Ws(zo | qn, e);
            } catch (Ke) {
              qt(e, e.return, Ke);
            }
            if (e.mode & Ge) {
              try {
                Io(), Xi(Kn | qn, e, e.return);
              } catch (Ke) {
                qt(e, e.return, Ke);
              }
              Ho(e);
            } else
              try {
                Xi(Kn | qn, e, e.return);
              } catch (Ke) {
                qt(e, e.return, Ke);
              }
          }
          return;
        }
        case C: {
          eo(t, e), Yo(e), f & Ur && s !== null && ld(s, s.return);
          return;
        }
        case U: {
          eo(t, e), Yo(e), f & Ur && s !== null && ld(s, s.return);
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
                var x = e.memoizedProps, b = s !== null ? s.memoizedProps : x, k = e.type, D = e.updateQueue;
                if (e.updateQueue = null, D !== null)
                  try {
                    mD(y, D, k, b, x, e);
                  } catch (Ke) {
                    qt(e, e.return, Ke);
                  }
              }
            }
          }
          return;
        }
        case L: {
          if (eo(t, e), Yo(e), f & rt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var P = e.stateNode, z = e.memoizedProps, G = s !== null ? s.memoizedProps : z;
            try {
              gD(P, G, z);
            } catch (Ke) {
              qt(e, e.return, Ke);
            }
          }
          return;
        }
        case R: {
          if (eo(t, e), Yo(e), f & rt && s !== null) {
            var Q = s.memoizedState;
            if (Q.isDehydrated)
              try {
                YD(t.containerInfo);
              } catch (Ke) {
                qt(e, e.return, Ke);
              }
          }
          return;
        }
        case O: {
          eo(t, e), Yo(e);
          return;
        }
        case te: {
          eo(t, e), Yo(e);
          var X = e.child;
          if (X.flags & So) {
            var Te = X.stateNode, Ye = X.memoizedState, ze = Ye !== null;
            if (Te.isHidden = ze, ze) {
              var yt = X.alternate !== null && X.alternate.memoizedState !== null;
              yt || PN();
            }
          }
          if (f & rt) {
            try {
              rN(e);
            } catch (Ke) {
              qt(e, e.return, Ke);
            }
            TC(e);
          }
          return;
        }
        case De: {
          var ht = s !== null && s.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & ct
          ) {
            var Y = Cr;
            Cr = Y || ht, eo(t, e), Cr = Y;
          } else
            eo(t, e);
          if (Yo(e), f & So) {
            var J = e.stateNode, $ = e.memoizedState, ce = $ !== null, ke = e;
            if (J.isHidden = ce, ce && !ht && (ke.mode & ct) !== Ve) {
              Le = ke;
              for (var Ee = ke.child; Ee !== null; )
                Le = Ee, lN(Ee), Ee = Ee.sibling;
            }
            XM(ke, ce);
          }
          return;
        }
        case Ae: {
          eo(t, e), Yo(e), f & rt && TC(e);
          return;
        }
        case Qe:
          return;
        default: {
          eo(t, e), Yo(e);
          return;
        }
      }
    }
    function Yo(e) {
      var t = e.flags;
      if (t & Bt) {
        try {
          tN(e);
        } catch (i) {
          qt(e, e.return, i);
        }
        e.flags &= ~Bt;
      }
      t & Ea && (e.flags &= ~Ea);
    }
    function oN(e, t, i) {
      id = i, od = t, Le = e, RC(e, t, i), id = null, od = null;
    }
    function RC(e, t, i) {
      for (var s = (e.mode & ct) !== Ve; Le !== null; ) {
        var f = Le, h = f.child;
        if (f.tag === De && s) {
          var y = f.memoizedState !== null, x = y || Wg;
          if (x) {
            Q1(e, t, i);
            continue;
          } else {
            var b = f.alternate, k = b !== null && b.memoizedState !== null, D = k || Cr, P = Wg, z = Cr;
            Wg = x, Cr = D, Cr && !z && (Le = f, sN(f));
            for (var G = h; G !== null; )
              Le = G, RC(
                G,
                // New root; bubble back up to here and stop.
                t,
                i
              ), G = G.sibling;
            Le = f, Wg = P, Cr = z, Q1(e, t, i);
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
    function lN(e) {
      for (; Le !== null; ) {
        var t = Le, i = t.child;
        switch (t.tag) {
          case w:
          case K:
          case V:
          case Z: {
            if (t.mode & Ge)
              try {
                Io(), Xi(Kn, t, t.return);
              } finally {
                Ho(t);
              }
            else
              Xi(Kn, t, t.return);
            break;
          }
          case C: {
            ld(t, t.return);
            var s = t.stateNode;
            typeof s.componentWillUnmount == "function" && B1(t, t.return, s);
            break;
          }
          case U: {
            ld(t, t.return);
            break;
          }
          case De: {
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
    function sN(e) {
      for (; Le !== null; ) {
        var t = Le, i = t.child;
        if (t.tag === De) {
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
    function uN(e, t, i, s) {
      Le = t, cN(t, e, i, s);
    }
    function cN(e, t, i, s) {
      for (; Le !== null; ) {
        var f = Le, h = f.child;
        (f.subtreeFlags & Ca) !== Ie && h !== null ? (h.return = f, Le = h) : fN(e, t, i, s);
      }
    }
    function fN(e, t, i, s) {
      for (; Le !== null; ) {
        var f = Le;
        if ((f.flags & Xt) !== Ie) {
          jt(f);
          try {
            dN(t, f, i, s);
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
    function dN(e, t, i, s) {
      switch (t.tag) {
        case w:
        case K:
        case Z: {
          if (t.mode & Ge) {
            _1();
            try {
              Ws(br | qn, t);
            } finally {
              C1(t);
            }
          } else
            Ws(br | qn, t);
          break;
        }
      }
    }
    function pN(e) {
      Le = e, hN();
    }
    function hN() {
      for (; Le !== null; ) {
        var e = Le, t = e.child;
        if ((Le.flags & kt) !== Ie) {
          var i = e.deletions;
          if (i !== null) {
            for (var s = 0; s < i.length; s++) {
              var f = i[s];
              Le = f, gN(f, e);
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
        (e.subtreeFlags & Ca) !== Ie && t !== null ? (t.return = e, Le = t) : vN();
      }
    }
    function vN() {
      for (; Le !== null; ) {
        var e = Le;
        (e.flags & Xt) !== Ie && (jt(e), mN(e), _n());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Le = t;
          return;
        }
        Le = e.return;
      }
    }
    function mN(e) {
      switch (e.tag) {
        case w:
        case K:
        case Z: {
          e.mode & Ge ? (_1(), Xi(br | qn, e, e.return), C1(e)) : Xi(br | qn, e, e.return);
          break;
        }
      }
    }
    function gN(e, t) {
      for (; Le !== null; ) {
        var i = Le;
        jt(i), SN(i, t), _n();
        var s = i.child;
        s !== null ? (s.return = i, Le = s) : yN(e);
      }
    }
    function yN(e) {
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
    function SN(e, t) {
      switch (e.tag) {
        case w:
        case K:
        case Z: {
          e.mode & Ge ? (_1(), Xi(br, e, t), C1(e)) : Xi(br, e, t);
          break;
        }
      }
    }
    function xN(e) {
      switch (e.tag) {
        case w:
        case K:
        case Z: {
          try {
            Ws(Kn | qn, e);
          } catch (i) {
            qt(e, e.return, i);
          }
          break;
        }
        case C: {
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
    function wN(e) {
      switch (e.tag) {
        case w:
        case K:
        case Z: {
          try {
            Ws(br | qn, e);
          } catch (t) {
            qt(e, e.return, t);
          }
          break;
        }
      }
    }
    function bN(e) {
      switch (e.tag) {
        case w:
        case K:
        case Z: {
          try {
            Xi(Kn | qn, e, e.return);
          } catch (i) {
            qt(e, e.return, i);
          }
          break;
        }
        case C: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && B1(e, e.return, t);
          break;
        }
      }
    }
    function EN(e) {
      switch (e.tag) {
        case w:
        case K:
        case Z:
          try {
            Xi(br | qn, e, e.return);
          } catch (t) {
            qt(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Ch = Symbol.for;
      Ch("selector.component"), Ch("selector.has_pseudo_class"), Ch("selector.role"), Ch("selector.test_id"), Ch("selector.text");
    }
    var CN = [];
    function _N() {
      CN.forEach(function(e) {
        return e();
      });
    }
    var TN = l.ReactCurrentActQueue;
    function kN(e) {
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
        return !e && TN.current !== null && v("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var RN = Math.ceil, q1 = l.ReactCurrentDispatcher, K1 = l.ReactCurrentOwner, Tr = l.ReactCurrentBatchConfig, to = l.ReactCurrentActQueue, Jn = (
      /*             */
      0
    ), NC = (
      /*               */
      1
    ), kr = (
      /*                */
      2
    ), wi = (
      /*                */
      4
    ), zl = 0, _h = 1, lc = 2, Qg = 3, Th = 4, LC = 5, Z1 = 6, gt = Jn, ca = null, vn = null, er = ee, $o = ee, X1 = zs(ee), tr = zl, kh = null, qg = ee, Rh = ee, Kg = ee, Dh = null, Ua = null, J1 = 0, jC = 500, UC = 1 / 0, DN = 500, Fl = null;
    function Oh() {
      UC = tn() + DN;
    }
    function AC() {
      return UC;
    }
    var Zg = !1, ex = null, sd = null, sc = !1, Qs = null, Mh = ee, tx = [], nx = null, ON = 50, Nh = 0, rx = null, ax = !1, Xg = !1, MN = 50, ud = 0, Jg = null, Lh = Ht, ey = ee, zC = !1;
    function ty() {
      return ca;
    }
    function fa() {
      return (gt & (kr | wi)) !== Jn ? tn() : (Lh !== Ht || (Lh = tn()), Lh);
    }
    function qs(e) {
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
    function NN(e) {
      var t = e.mode;
      return (t & ct) === Ve ? qe : _0();
    }
    function nr(e, t, i, s) {
      nL(), zC && v("useInsertionEffect must not schedule updates."), ax && (Xg = !0), xl(e, i, s), (gt & kr) !== ee && e === ca ? iL(t) : (Gn && Cp(e, t, i), oL(t), e === ca && ((gt & kr) === Jn && (Rh = at(Rh, i)), tr === Th && Ks(e, er)), Aa(e, s), i === qe && gt === Jn && (t.mode & ct) === Ve && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !to.isBatchingLegacy && (Oh(), Ab()));
    }
    function LN(e, t, i) {
      var s = e.current;
      s.lanes = t, xl(e, t, i), Aa(e, i);
    }
    function jN(e) {
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
      var f = xn(s), h = e.callbackPriority;
      if (h === f && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(to.current !== null && i !== fx)) {
        i == null && h !== qe && v("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      i != null && JC(i);
      var y;
      if (f === qe)
        e.tag === Fs ? (to.isBatchingLegacy !== null && (to.didScheduleLegacyUpdate = !0), uO(HC.bind(null, e))) : Ub(HC.bind(null, e)), to.current !== null ? to.current.push(Ps) : pD(function() {
          (gt & (kr | wi)) === Jn && Ps();
        }), y = null;
      else {
        var x;
        switch (Fu(s)) {
          case cr:
            x = Wc;
            break;
          case Qn:
            x = oa;
            break;
          case Hi:
            x = fi;
            break;
          case Au:
            x = wo;
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
      if (nM(), Lh = Ht, ey = ee, (gt & (kr | wi)) !== Jn)
        throw new Error("Should not already be working.");
      var i = e.callbackNode, s = Hl();
      if (s && e.callbackNode !== i)
        return null;
      var f = Lu(e, e === ca ? er : ee);
      if (f === ee)
        return null;
      var h = !Uu(e, f) && !pm(e, f) && !t, y = h ? VN(e, f) : ry(e, f);
      if (y !== zl) {
        if (y === lc) {
          var x = gp(e);
          x !== ee && (f = x, y = ix(e, x));
        }
        if (y === _h) {
          var b = kh;
          throw uc(e, ee), Ks(e, f), Aa(e, tn()), b;
        }
        if (y === Z1)
          Ks(e, f);
        else {
          var k = !Uu(e, f), D = e.current.alternate;
          if (k && !AN(D)) {
            if (y = ry(e, f), y === lc) {
              var P = gp(e);
              P !== ee && (f = P, y = ix(e, P));
            }
            if (y === _h) {
              var z = kh;
              throw uc(e, ee), Ks(e, f), Aa(e, tn()), z;
            }
          }
          e.finishedWork = D, e.finishedLanes = f, UN(e, y, f);
        }
      }
      return Aa(e, tn()), e.callbackNode === i ? FC.bind(null, e) : null;
    }
    function ix(e, t) {
      var i = Dh;
      if (Dn(e)) {
        var s = uc(e, t);
        s.flags |= sn, nO(e.containerInfo);
      }
      var f = ry(e, t);
      if (f !== lc) {
        var h = Ua;
        Ua = i, h !== null && PC(h);
      }
      return f;
    }
    function PC(e) {
      Ua === null ? Ua = e : Ua.push.apply(Ua, e);
    }
    function UN(e, t, i) {
      switch (t) {
        case zl:
        case _h:
          throw new Error("Root did not complete. This is a bug in React.");
        case lc: {
          cc(e, Ua, Fl);
          break;
        }
        case Qg: {
          if (Ks(e, i), gf(i) && // do not delay if we're inside an act() scope
          !e_()) {
            var s = J1 + jC - tn();
            if (s > 10) {
              var f = Lu(e, ee);
              if (f !== ee)
                break;
              var h = e.suspendedLanes;
              if (!Sl(h, i)) {
                fa(), bp(e, h);
                break;
              }
              e.timeoutHandle = nS(cc.bind(null, e, Ua, Fl), s);
              break;
            }
          }
          cc(e, Ua, Fl);
          break;
        }
        case Th: {
          if (Ks(e, i), dm(i))
            break;
          if (!e_()) {
            var y = fm(e, i), x = y, b = tn() - x, k = tL(b) - b;
            if (k > 10) {
              e.timeoutHandle = nS(cc.bind(null, e, Ua, Fl), k);
              break;
            }
          }
          cc(e, Ua, Fl);
          break;
        }
        case LC: {
          cc(e, Ua, Fl);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function AN(e) {
      for (var t = e; ; ) {
        if (t.flags & Tu) {
          var i = t.updateQueue;
          if (i !== null) {
            var s = i.stores;
            if (s !== null)
              for (var f = 0; f < s.length; f++) {
                var h = s[f], y = h.getSnapshot, x = h.value;
                try {
                  if (!Ne(y(), x))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var b = t.child;
        if (t.subtreeFlags & Tu && b !== null) {
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
    function Ks(e, t) {
      t = xs(t, Kg), t = xs(t, Rh), wp(e, t);
    }
    function HC(e) {
      if (rM(), (gt & (kr | wi)) !== Jn)
        throw new Error("Should not already be working.");
      Hl();
      var t = Lu(e, ee);
      if (!Yr(t, qe))
        return Aa(e, tn()), null;
      var i = ry(e, t);
      if (e.tag !== Fs && i === lc) {
        var s = gp(e);
        s !== ee && (t = s, i = ix(e, s));
      }
      if (i === _h) {
        var f = kh;
        throw uc(e, ee), Ks(e, t), Aa(e, tn()), f;
      }
      if (i === Z1)
        throw new Error("Root did not complete. This is a bug in React.");
      var h = e.current.alternate;
      return e.finishedWork = h, e.finishedLanes = t, cc(e, Ua, Fl), Aa(e, tn()), null;
    }
    function zN(e, t) {
      t !== ee && (ws(e, at(t, qe)), Aa(e, tn()), (gt & (kr | wi)) === Jn && (Oh(), Ps()));
    }
    function ox(e, t) {
      var i = gt;
      gt |= NC;
      try {
        return e(t);
      } finally {
        gt = i, gt === Jn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !to.isBatchingLegacy && (Oh(), Ab());
      }
    }
    function FN(e, t, i, s, f) {
      var h = Ra(), y = Tr.transition;
      try {
        return Tr.transition = null, Rn(cr), e(t, i, s, f);
      } finally {
        Rn(h), Tr.transition = y, gt === Jn && Oh();
      }
    }
    function Pl(e) {
      Qs !== null && Qs.tag === Fs && (gt & (kr | wi)) === Jn && Hl();
      var t = gt;
      gt |= NC;
      var i = Tr.transition, s = Ra();
      try {
        return Tr.transition = null, Rn(cr), e ? e() : void 0;
      } finally {
        Rn(s), Tr.transition = i, gt = t, (gt & (kr | wi)) === Jn && Ps();
      }
    }
    function IC() {
      return (gt & (kr | wi)) !== Jn;
    }
    function ny(e, t) {
      Vr(X1, $o, e), $o = at($o, t);
    }
    function lx(e) {
      $o = X1.current, $r(X1, e);
    }
    function uc(e, t) {
      e.finishedWork = null, e.finishedLanes = ee;
      var i = e.timeoutHandle;
      if (i !== rS && (e.timeoutHandle = rS, dD(i)), vn !== null)
        for (var s = vn.return; s !== null; ) {
          var f = s.alternate;
          mC(f, s), s = s.return;
        }
      ca = e;
      var h = fc(e.current, null);
      return vn = h, er = $o = t, tr = zl, kh = null, qg = ee, Rh = ee, Kg = ee, Dh = null, Ua = null, MO(), Gi.discardPendingWarnings(), h;
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
            if (cl(), t !== null && typeof t == "object" && typeof t.then == "function") {
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
    function PN() {
      J1 = tn();
    }
    function jh(e) {
      qg = at(e, qg);
    }
    function HN() {
      tr === zl && (tr = Qg);
    }
    function sx() {
      (tr === zl || tr === Qg || tr === lc) && (tr = Th), ca !== null && (ju(qg) || ju(Rh)) && Ks(ca, er);
    }
    function IN(e) {
      tr !== Th && (tr = lc), Dh === null ? Dh = [e] : Dh.push(e);
    }
    function YN() {
      return tr === zl;
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
        Fl = _p(), uc(e, t);
      }
      Za(t);
      do
        try {
          $N();
          break;
        } catch (h) {
          YC(e, h);
        }
      while (!0);
      if (cg(), gt = i, VC(s), vn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return vs(), ca = null, er = ee, tr;
    }
    function $N() {
      for (; vn !== null; )
        BC(vn);
    }
    function VN(e, t) {
      var i = gt;
      gt |= kr;
      var s = $C();
      if (ca !== e || er !== t) {
        if (Gn) {
          var f = e.memoizedUpdaters;
          f.size > 0 && (Uh(e, er), f.clear()), xf(e, t);
        }
        Fl = _p(), Oh(), uc(e, t);
      }
      Za(t);
      do
        try {
          BN();
          break;
        } catch (h) {
          YC(e, h);
        }
      while (!0);
      return cg(), VC(s), gt = i, vn !== null ? (Du(), zl) : (vs(), ca = null, er = ee, tr);
    }
    function BN() {
      for (; vn !== null && !Bc(); )
        BC(vn);
    }
    function BC(e) {
      var t = e.alternate;
      jt(e);
      var i;
      (e.mode & Ge) !== Ve ? (E1(e), i = ux(t, e, $o), Yg(e, !0)) : i = ux(t, e, $o), _n(), e.memoizedProps = e.pendingProps, i === null ? WC(e) : vn = i, K1.current = null;
    }
    function WC(e) {
      var t = e;
      do {
        var i = t.alternate, s = t.return;
        if ((t.flags & ra) === Ie) {
          jt(t);
          var f = void 0;
          if ((t.mode & Ge) === Ve ? f = vC(i, t, $o) : (E1(t), f = vC(i, t, $o), Yg(t, !1)), _n(), f !== null) {
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
      tr === zl && (tr = LC);
    }
    function cc(e, t, i) {
      var s = Ra(), f = Tr.transition;
      try {
        Tr.transition = null, Rn(cr), WN(e, t, i, s);
      } finally {
        Tr.transition = f, Rn(s);
      }
      return null;
    }
    function WN(e, t, i, s) {
      do
        Hl();
      while (Qs !== null);
      if (rL(), (gt & (kr | wi)) !== Jn)
        throw new Error("Should not already be working.");
      var f = e.finishedWork, h = e.finishedLanes;
      if (Qc(h), f === null)
        return dp(), null;
      if (h === ee && v("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = ee, f === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = mt;
      var y = at(f.lanes, f.childLanes);
      Ep(e, y), e === ca && (ca = null, vn = null, er = ee), ((f.subtreeFlags & Ca) !== Ie || (f.flags & Ca) !== Ie) && (sc || (sc = !0, nx = i, dx(fi, function() {
        return Hl(), null;
      })));
      var x = (f.subtreeFlags & (ds | Fr | ur | Ca)) !== Ie, b = (f.flags & (ds | Fr | ur | Ca)) !== Ie;
      if (x || b) {
        var k = Tr.transition;
        Tr.transition = null;
        var D = Ra();
        Rn(cr);
        var P = gt;
        gt |= wi, K1.current = null, BM(e, f), $E(), iN(e, f, h), iD(e.containerInfo), e.current = f, um(h), oN(f, e, h), hs(), nm(), gt = P, Rn(D), Tr.transition = k;
      } else
        e.current = f, $E();
      var z = sc;
      if (sc ? (sc = !1, Qs = e, Mh = h) : (ud = 0, Jg = null), y = e.pendingLanes, y === ee && (sd = null), z || KC(e.current, !1), zi(f.stateNode, s), Gn && e.memoizedUpdaters.clear(), _N(), Aa(e, tn()), t !== null)
        for (var G = e.onRecoverableError, Q = 0; Q < t.length; Q++) {
          var X = t[Q], Te = X.stack, Ye = X.digest;
          G(X.value, {
            componentStack: Te,
            digest: Ye
          });
        }
      if (Zg) {
        Zg = !1;
        var ze = ex;
        throw ex = null, ze;
      }
      return Yr(Mh, qe) && e.tag !== Fs && Hl(), y = e.pendingLanes, Yr(y, qe) ? (tM(), e === rx ? Nh++ : (Nh = 0, rx = e)) : Nh = 0, Ps(), dp(), null;
    }
    function Hl() {
      if (Qs !== null) {
        var e = Fu(Mh), t = k0(Hi, e), i = Tr.transition, s = Ra();
        try {
          return Tr.transition = null, Rn(t), QN();
        } finally {
          Rn(s), Tr.transition = i;
        }
      }
      return !1;
    }
    function GN(e) {
      tx.push(e), sc || (sc = !0, dx(fi, function() {
        return Hl(), null;
      }));
    }
    function QN() {
      if (Qs === null)
        return !1;
      var e = nx;
      nx = null;
      var t = Qs, i = Mh;
      if (Qs = null, Mh = ee, (gt & (kr | wi)) !== Jn)
        throw new Error("Cannot flush passive effects while already rendering.");
      ax = !0, Xg = !1, cm(i);
      var s = gt;
      gt |= wi, pN(t.current), uN(t, t.current, i, e);
      {
        var f = tx;
        tx = [];
        for (var h = 0; h < f.length; h++) {
          var y = f[h];
          qM(t, y);
        }
      }
      Ru(), KC(t.current, !0), gt = s, Ps(), Xg ? t === Jg ? ud++ : (ud = 0, Jg = t) : ud = 0, ax = !1, Xg = !1, Eo(t);
      {
        var x = t.current.stateNode;
        x.effectDuration = 0, x.passiveEffectDuration = 0;
      }
      return !0;
    }
    function GC(e) {
      return sd !== null && sd.has(e);
    }
    function qN(e) {
      sd === null ? sd = /* @__PURE__ */ new Set([e]) : sd.add(e);
    }
    function KN(e) {
      Zg || (Zg = !0, ex = e);
    }
    var ZN = KN;
    function QC(e, t, i) {
      var s = ic(i, t), f = BE(e, s, qe), h = Is(e, f, qe), y = fa();
      h !== null && (xl(h, qe, y), Aa(h, y));
    }
    function qt(e, t, i) {
      if (YM(i), Ah(!1), e.tag === R) {
        QC(e, e, i);
        return;
      }
      var s = null;
      for (s = t; s !== null; ) {
        if (s.tag === R) {
          QC(s, e, i);
          return;
        } else if (s.tag === C) {
          var f = s.type, h = s.stateNode;
          if (typeof f.getDerivedStateFromError == "function" || typeof h.componentDidCatch == "function" && !GC(h)) {
            var y = ic(i, e), x = D1(s, y, qe), b = Is(s, x, qe), k = fa();
            b !== null && (xl(b, qe, k), Aa(b, k));
            return;
          }
        }
        s = s.return;
      }
      v(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, i);
    }
    function XN(e, t, i) {
      var s = e.pingCache;
      s !== null && s.delete(t);
      var f = fa();
      bp(e, i), lL(e), ca === e && Sl(er, i) && (tr === Th || tr === Qg && gf(er) && tn() - J1 < jC ? uc(e, ee) : Kg = at(Kg, i)), Aa(e, f);
    }
    function qC(e, t) {
      t === mt && (t = NN(e));
      var i = fa(), s = La(e, t);
      s !== null && (xl(s, t, i), Aa(s, i));
    }
    function JN(e) {
      var t = e.memoizedState, i = mt;
      t !== null && (i = t.retryLane), qC(e, i);
    }
    function eL(e, t) {
      var i = mt, s;
      switch (e.tag) {
        case te:
          s = e.stateNode;
          var f = e.memoizedState;
          f !== null && (i = f.retryLane);
          break;
        case Ae:
          s = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      s !== null && s.delete(t), qC(e, i);
    }
    function tL(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : RN(e / 1960) * 1960;
    }
    function nL() {
      if (Nh > ON)
        throw Nh = 0, rx = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      ud > MN && (ud = 0, Jg = null, v("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function rL() {
      Gi.flushLegacyContextWarning(), Gi.flushPendingUnsafeLifecycleWarnings();
    }
    function KC(e, t) {
      jt(e), ay(e, zr, bN), t && ay(e, ul, EN), ay(e, zr, xN), t && ay(e, ul, wN), _n();
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
        if (t !== T && t !== R && t !== C && t !== w && t !== K && t !== V && t !== Z)
          return;
        var i = nt(e) || "ReactComponent";
        if (iy !== null) {
          if (iy.has(i))
            return;
          iy.add(i);
        } else
          iy = /* @__PURE__ */ new Set([i]);
        var s = yn;
        try {
          jt(e), v("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          s ? jt(e) : _n();
        }
      }
    }
    var ux;
    {
      var aL = null;
      ux = function(e, t, i) {
        var s = i_(aL, t);
        try {
          return cC(e, t, i);
        } catch (h) {
          if (gO() || h !== null && typeof h == "object" && typeof h.then == "function")
            throw h;
          if (cg(), yE(), mC(e, t), i_(t, s), t.mode & Ge && E1(t), sl(null, cC, null, e, t, i), x0()) {
            var f = tp();
            typeof f == "object" && f !== null && f._suppressLogging && typeof h == "object" && h !== null && !h._suppressLogging && (h._suppressLogging = !0);
          }
          throw h;
        }
      };
    }
    var XC = !1, cx;
    cx = /* @__PURE__ */ new Set();
    function iL(e) {
      if (ya && !XO())
        switch (e.tag) {
          case w:
          case K:
          case Z: {
            var t = vn && nt(vn) || "Unknown", i = t;
            if (!cx.has(i)) {
              cx.add(i);
              var s = nt(e) || "Unknown";
              v("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", s, t, t);
            }
            break;
          }
          case C: {
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
        var i = to.current;
        return i !== null ? (i.push(t), fx) : Vc(e, t);
      }
    }
    function JC(e) {
      if (e !== fx)
        return tm(e);
    }
    function e_() {
      return to.current !== null;
    }
    function oL(e) {
      {
        if (e.mode & ct) {
          if (!MC())
            return;
        } else if (!kN() || gt !== Jn || e.tag !== w && e.tag !== K && e.tag !== Z)
          return;
        if (to.current === null) {
          var t = yn;
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
    function lL(e) {
      e.tag !== Fs && MC() && to.current === null && v(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

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
    var bi = null, cd = null, sL = function(e) {
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
          case C: {
            typeof s == "function" && (f = !0);
            break;
          }
          case w: {
            (typeof s == "function" || h === We) && (f = !0);
            break;
          }
          case K: {
            (h === $e || h === We) && (f = !0);
            break;
          }
          case V:
          case Z: {
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
    var uL = function(e, t) {
      {
        if (bi === null)
          return;
        var i = t.staleFamilies, s = t.updatedFamilies;
        Hl(), Pl(function() {
          vx(e.current, s, i);
        });
      }
    }, cL = function(e, t) {
      {
        if (e.context !== Ja)
          return;
        Hl(), Pl(function() {
          zh(t, e, null, null);
        });
      }
    };
    function vx(e, t, i) {
      {
        var s = e.alternate, f = e.child, h = e.sibling, y = e.tag, x = e.type, b = null;
        switch (y) {
          case w:
          case Z:
          case C:
            b = x;
            break;
          case K:
            b = x.render;
            break;
        }
        if (bi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var k = !1, D = !1;
        if (b !== null) {
          var P = bi(b);
          P !== void 0 && (i.has(P) ? D = !0 : t.has(P) && (y === C ? D = !0 : k = !0));
        }
        if (cd !== null && (cd.has(e) || s !== null && cd.has(s)) && (D = !0), D && (e._debugNeedsRemount = !0), D || k) {
          var z = La(e, qe);
          z !== null && nr(z, e, qe, Ht);
        }
        f !== null && !D && vx(f, t, i), h !== null && vx(h, t, i);
      }
    }
    var fL = function(e, t) {
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
          case Z:
          case C:
            x = y;
            break;
          case K:
            x = y.render;
            break;
        }
        var b = !1;
        x !== null && t.has(x) && (b = !0), b ? dL(e, i) : s !== null && mx(s, t, i), f !== null && mx(f, t, i);
      }
    }
    function dL(e, t) {
      {
        var i = pL(e, t);
        if (i)
          return;
        for (var s = e; ; ) {
          switch (s.tag) {
            case U:
              t.add(s.stateNode);
              return;
            case O:
              t.add(s.stateNode.containerInfo);
              return;
            case R:
              t.add(s.stateNode.containerInfo);
              return;
          }
          if (s.return === null)
            throw new Error("Expected to reach root first.");
          s = s.return;
        }
      }
    }
    function pL(e, t) {
      for (var i = e, s = !1; ; ) {
        if (i.tag === U)
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
    function hL(e, t, i, s) {
      this.tag = e, this.key = i, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = s, this.flags = Ie, this.subtreeFlags = Ie, this.deletions = null, this.lanes = ee, this.childLanes = ee, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !gx && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ei = function(e, t, i, s) {
      return new hL(e, t, i, s);
    };
    function yx(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function vL(e) {
      return typeof e == "function" && !yx(e) && e.defaultProps === void 0;
    }
    function mL(e) {
      if (typeof e == "function")
        return yx(e) ? C : w;
      if (e != null) {
        var t = e.$$typeof;
        if (t === $e)
          return K;
        if (t === ot)
          return V;
      }
      return T;
    }
    function fc(e, t) {
      var i = e.alternate;
      i === null ? (i = ei(e.tag, t, e.key, e.mode), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i._debugSource = e._debugSource, i._debugOwner = e._debugOwner, i._debugHookTypes = e._debugHookTypes, i.alternate = e, e.alternate = i) : (i.pendingProps = t, i.type = e.type, i.flags = Ie, i.subtreeFlags = Ie, i.deletions = null, i.actualDuration = 0, i.actualStartTime = -1), i.flags = e.flags & Wn, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue;
      var s = e.dependencies;
      switch (i.dependencies = s === null ? null : {
        lanes: s.lanes,
        firstContext: s.firstContext
      }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i.selfBaseDuration = e.selfBaseDuration, i.treeBaseDuration = e.treeBaseDuration, i._debugNeedsRemount = e._debugNeedsRemount, i.tag) {
        case T:
        case w:
        case Z:
          i.type = fd(e.type);
          break;
        case C:
          i.type = px(e.type);
          break;
        case K:
          i.type = hx(e.type);
          break;
      }
      return i;
    }
    function gL(e, t) {
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
    function yL(e, t, i) {
      var s;
      return e === ng ? (s = ct, t === !0 && (s |= nn, s |= Ta)) : s = Ve, Gn && (s |= Ge), ei(R, null, null, s);
    }
    function Sx(e, t, i, s, f, h) {
      var y = T, x = e;
      if (typeof e == "function")
        yx(e) ? (y = C, x = px(x)) : x = fd(x);
      else if (typeof e == "string")
        y = U;
      else
        e:
          switch (e) {
            case Va:
              return Zs(i.children, f, h, t);
            case so:
              y = ne, f |= nn, (f & ct) !== Ve && (f |= Ta);
              break;
            case N:
              return SL(i, f, h, t);
            case it:
              return xL(i, f, h, t);
            case St:
              return wL(i, f, h, t);
            case Zt:
              return a_(i, f, h, t);
            case yr:
            case Un:
            case uo:
            case Sc:
            case Kt:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case se:
                    y = W;
                    break e;
                  case xe:
                    y = oe;
                    break e;
                  case $e:
                    y = K, x = hx(x);
                    break e;
                  case ot:
                    y = V;
                    break e;
                  case We:
                    y = we, x = null;
                    break e;
                }
              var b = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var k = s ? nt(s) : null;
                k && (b += `

Check the render method of \`` + k + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + b));
            }
          }
      var D = ei(y, i, t, f);
      return D.elementType = e, D.type = x, D.lanes = h, D._debugOwner = s, D;
    }
    function xx(e, t, i) {
      var s = null;
      s = e._owner;
      var f = e.type, h = e.key, y = e.props, x = Sx(f, h, y, s, t, i);
      return x._debugSource = e._source, x._debugOwner = e._owner, x;
    }
    function Zs(e, t, i, s) {
      var f = ei(H, e, s, t);
      return f.lanes = i, f;
    }
    function SL(e, t, i, s) {
      typeof e.id != "string" && v('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var f = ei(ae, e, s, t | Ge);
      return f.elementType = N, f.lanes = i, f.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, f;
    }
    function xL(e, t, i, s) {
      var f = ei(te, e, s, t);
      return f.elementType = it, f.lanes = i, f;
    }
    function wL(e, t, i, s) {
      var f = ei(Ae, e, s, t);
      return f.elementType = St, f.lanes = i, f;
    }
    function a_(e, t, i, s) {
      var f = ei(De, e, s, t);
      f.elementType = Zt, f.lanes = i;
      var h = {
        isHidden: !1
      };
      return f.stateNode = h, f;
    }
    function wx(e, t, i) {
      var s = ei(L, e, null, t);
      return s.lanes = i, s;
    }
    function bL() {
      var e = ei(U, null, null, Ve);
      return e.elementType = "DELETED", e;
    }
    function EL(e) {
      var t = ei(ve, null, null, Ve);
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
      return e === null && (e = ei(T, null, null, Ve)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function CL(e, t, i, s, f) {
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
        case Fs:
          this._debugRootType = i ? "hydrate()" : "render()";
          break;
      }
    }
    function o_(e, t, i, s, f, h, y, x, b, k) {
      var D = new CL(e, t, i, x, b), P = yL(t, h);
      D.current = P, P.stateNode = D;
      {
        var z = {
          element: s,
          isDehydrated: i,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        P.memoizedState = z;
      }
      return OS(P), D;
    }
    var Ex = "18.2.0";
    function _L(e, t, i) {
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
      if (t.tag === C) {
        var s = t.type;
        if (Ao(s))
          return Lb(t, s, i);
      }
      return i;
    }
    function TL(e, t) {
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
            var y = yn;
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
      var b = !1, k = null;
      return o_(e, t, b, k, i, s, f, h, y);
    }
    function u_(e, t, i, s, f, h, y, x, b, k) {
      var D = !0, P = o_(i, s, D, e, f, h, y, x, b);
      P.context = l_(null);
      var z = P.current, G = fa(), Q = qs(z), X = Ul(G, Q);
      return X.callback = t ?? null, Is(z, X, Q), LN(P, Q, G), P;
    }
    function zh(e, t, i, s) {
      rm(t, e);
      var f = t.current, h = fa(), y = qs(f);
      fl(y);
      var x = l_(i);
      t.context === null ? t.context = x : t.pendingContext = x, ya && yn !== null && !Cx && (Cx = !0, v(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, nt(yn) || "Unknown"));
      var b = Ul(h, y);
      b.payload = {
        element: e
      }, s = s === void 0 ? null : s, s !== null && (typeof s != "function" && v("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", s), b.callback = s);
      var k = Is(f, b, y);
      return k !== null && (nr(k, f, y, h), vg(k, f, y)), y;
    }
    function oy(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case U:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function kL(e) {
      switch (e.tag) {
        case R: {
          var t = e.stateNode;
          if (Dn(t)) {
            var i = E0(t);
            zN(t, i);
          }
          break;
        }
        case te: {
          Pl(function() {
            var f = La(e, qe);
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
    function RL(e) {
      if (e.tag === te) {
        var t = ms, i = La(e, t);
        if (i !== null) {
          var s = fa();
          nr(i, e, t, s);
        }
        Tx(e, t);
      }
    }
    function DL(e) {
      if (e.tag === te) {
        var t = qs(e), i = La(e, t);
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
    function OL(e) {
      return d_(e);
    }
    var p_ = function(e) {
      return !1;
    };
    function ML(e) {
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
          var y = La(e, qe);
          y !== null && nr(y, e, qe, Ht);
        }
      }, v_ = function(e, t, i) {
        var s = kx(e, t);
        if (s !== null) {
          var f = C_(s.memoizedState, i);
          s.memoizedState = f, s.baseState = f, e.memoizedProps = dt({}, e.memoizedProps);
          var h = La(e, qe);
          h !== null && nr(h, e, qe, Ht);
        }
      }, m_ = function(e, t, i, s) {
        var f = kx(e, t);
        if (f !== null) {
          var h = T_(f.memoizedState, i, s);
          f.memoizedState = h, f.baseState = h, e.memoizedProps = dt({}, e.memoizedProps);
          var y = La(e, qe);
          y !== null && nr(y, e, qe, Ht);
        }
      }, g_ = function(e, t, i) {
        e.pendingProps = R_(e.memoizedProps, t, i), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var s = La(e, qe);
        s !== null && nr(s, e, qe, Ht);
      }, y_ = function(e, t) {
        e.pendingProps = C_(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = La(e, qe);
        i !== null && nr(i, e, qe, Ht);
      }, S_ = function(e, t, i) {
        e.pendingProps = T_(e.memoizedProps, t, i), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var s = La(e, qe);
        s !== null && nr(s, e, qe, Ht);
      }, x_ = function(e) {
        var t = La(e, qe);
        t !== null && nr(t, e, qe, Ht);
      }, w_ = function(e) {
        d_ = e;
      }, b_ = function(e) {
        p_ = e;
      };
    }
    function NL(e) {
      var t = _a(e);
      return t === null ? null : t.stateNode;
    }
    function LL(e) {
      return null;
    }
    function jL() {
      return yn;
    }
    function UL(e) {
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
        findHostInstanceByFiber: NL,
        findFiberByHostInstance: t || LL,
        // React Refresh
        findHostInstancesForRefresh: fL,
        scheduleRefresh: uL,
        scheduleRoot: cL,
        setRefreshHandler: sL,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: jL,
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
        if (i.nodeType !== Sn) {
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
        IC() && v("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Pl(function() {
          zh(null, e, null, null);
        }), Rb(t);
      }
    };
    function AL(e, t) {
      if (!sy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      O_(e);
      var i = !1, s = !1, f = "", h = D_;
      t != null && (t.hydrate ? m("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === lo && v(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (i = !0), t.identifierPrefix !== void 0 && (f = t.identifierPrefix), t.onRecoverableError !== void 0 && (h = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var y = s_(e, ng, null, i, s, f, h);
      qm(y.current, e);
      var x = e.nodeType === Sn ? e.parentNode : e;
      return Bp(x), new Rx(y);
    }
    function ly(e) {
      this._internalRoot = e;
    }
    function zL(e) {
      e && Em(e);
    }
    ly.prototype.unstable_scheduleHydration = zL;
    function FL(e, t, i) {
      if (!sy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      O_(e), t === void 0 && v("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var s = i ?? null, f = i != null && i.hydratedSources || null, h = !1, y = !1, x = "", b = D_;
      i != null && (i.unstable_strictMode === !0 && (h = !0), i.identifierPrefix !== void 0 && (x = i.identifierPrefix), i.onRecoverableError !== void 0 && (b = i.onRecoverableError));
      var k = u_(t, null, e, ng, s, h, y, x, b);
      if (qm(k.current, e), Bp(e), f)
        for (var D = 0; D < f.length; D++) {
          var P = f[D];
          WO(k, P);
        }
      return new ly(k);
    }
    function sy(e) {
      return !!(e && (e.nodeType === jr || e.nodeType === Qa || e.nodeType === nl || !Tt));
    }
    function Fh(e) {
      return !!(e && (e.nodeType === jr || e.nodeType === Qa || e.nodeType === nl || e.nodeType === Sn && e.nodeValue === " react-mount-point-unstable "));
    }
    function O_(e) {
      e.nodeType === jr && e.tagName && e.tagName.toUpperCase() === "BODY" && v("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), nh(e) && (e._reactRootContainer ? v("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : v("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var PL = l.ReactCurrentOwner, M_;
    M_ = function(e) {
      if (e._reactRootContainer && e.nodeType !== Sn) {
        var t = f_(e._reactRootContainer.current);
        t && t.parentNode !== e && v("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var i = !!e._reactRootContainer, s = Dx(e), f = !!(s && As(s));
      f && !i && v("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === jr && e.tagName && e.tagName.toUpperCase() === "BODY" && v("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function Dx(e) {
      return e ? e.nodeType === Qa ? e.documentElement : e.firstChild : null;
    }
    function N_() {
    }
    function HL(e, t, i, s, f) {
      if (f) {
        if (typeof s == "function") {
          var h = s;
          s = function() {
            var z = oy(y);
            h.call(z);
          };
        }
        var y = u_(
          t,
          s,
          e,
          Fs,
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
        e._reactRootContainer = y, qm(y.current, e);
        var x = e.nodeType === Sn ? e.parentNode : e;
        return Bp(x), Pl(), y;
      } else {
        for (var b; b = e.lastChild; )
          e.removeChild(b);
        if (typeof s == "function") {
          var k = s;
          s = function() {
            var z = oy(D);
            k.call(z);
          };
        }
        var D = s_(
          e,
          Fs,
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
        e._reactRootContainer = D, qm(D.current, e);
        var P = e.nodeType === Sn ? e.parentNode : e;
        return Bp(P), Pl(function() {
          zh(t, D, i, s);
        }), D;
      }
    }
    function IL(e, t) {
      e !== null && typeof e != "function" && v("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function uy(e, t, i, s, f) {
      M_(i), IL(f === void 0 ? null : f, "render");
      var h = i._reactRootContainer, y;
      if (!h)
        y = HL(i, t, e, f, s);
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
    function YL(e) {
      {
        var t = PL.current;
        if (t !== null && t.stateNode !== null) {
          var i = t.stateNode._warnedAboutRefsInRender;
          i || v("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ft(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === jr ? e : TL(e, "findDOMNode");
    }
    function $L(e, t, i) {
      if (v("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Fh(t))
        throw new Error("Target container is not a DOM element.");
      {
        var s = nh(t) && t._reactRootContainer === void 0;
        s && v("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return uy(null, e, t, !0, i);
    }
    function VL(e, t, i) {
      if (v("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Fh(t))
        throw new Error("Target container is not a DOM element.");
      {
        var s = nh(t) && t._reactRootContainer === void 0;
        s && v("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return uy(null, e, t, !1, i);
    }
    function BL(e, t, i, s) {
      if (v("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Fh(i))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !_u(e))
        throw new Error("parentComponent must be a valid React Component");
      return uy(e, t, i, !1, s);
    }
    function WL(e) {
      if (!Fh(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = nh(e) && e._reactRootContainer === void 0;
        t && v("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var i = Dx(e), s = i && !As(i);
          s && v("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Pl(function() {
          uy(null, null, e, !1, function() {
            e._reactRootContainer = null, Rb(e);
          });
        }), !0;
      } else {
        {
          var f = Dx(e), h = !!(f && As(f)), y = e.nodeType === jr && Fh(e.parentNode) && !!e.parentNode._reactRootContainer;
          h && v("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", y ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Re(kL), gm(RL), Hu(DL), kp(Ra), Sm(zu), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && v("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Zv(qR), Pc(ox, FN, Pl);
    function GL(e, t) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!sy(t))
        throw new Error("Target container is not a DOM element.");
      return _L(e, t, null, i);
    }
    function QL(e, t, i, s) {
      return BL(e, t, i, s);
    }
    var Ox = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [As, Yf, Km, Fc, bu, ox]
    };
    function qL(e, t) {
      return Ox.usingClientEntryPoint || v('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), AL(e, t);
    }
    function KL(e, t, i) {
      return Ox.usingClientEntryPoint || v('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), FL(e, t, i);
    }
    function ZL(e) {
      return IC() && v("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Pl(e);
    }
    var XL = UL({
      findFiberByHostInstance: Ku,
      bundleType: 1,
      version: Ex,
      rendererPackageName: "react-dom"
    });
    if (!XL && Ln && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var L_ = window.location.protocol;
      /^(https?|file):$/.test(L_) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (L_ === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Fa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ox, Fa.createPortal = GL, Fa.createRoot = qL, Fa.findDOMNode = YL, Fa.flushSync = ZL, Fa.hydrate = $L, Fa.hydrateRoot = KL, Fa.render = VL, Fa.unmountComponentAtNode = WL, Fa.unstable_batchedUpdates = ox, Fa.unstable_renderSubtreeIntoContainer = QL, Fa.version = Ex, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Fa;
}
function Gk() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gk);
    } catch (r) {
      console.error(r);
    }
  }
}
process.env.NODE_ENV === "production" ? (Gk(), sw.exports = o3()) : sw.exports = l3();
var s3 = sw.exports;
const Zh = /^[a-z0-9]+(-[a-z0-9]+)*$/, Xy = (r, o, l, c = "") => {
  const d = r.split(":");
  if (r.slice(0, 1) === "@") {
    if (d.length < 2 || d.length > 3)
      return null;
    c = d.shift().slice(1);
  }
  if (d.length > 3 || !d.length)
    return null;
  if (d.length > 1) {
    const E = d.pop(), w = d.pop(), C = {
      // Allow provider without '@': "provider:prefix:name"
      provider: d.length > 0 ? d[0] : c,
      prefix: w,
      name: E
    };
    return o && !by(C) ? null : C;
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
}, by = (r, o) => r ? !!((r.provider === "" || r.provider.match(Zh)) && (o && r.prefix === "" || r.prefix.match(Zh)) && r.name.match(Zh)) : !1, Qk = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), Ay = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), Gw = Object.freeze({
  ...Qk,
  ...Ay
}), uw = Object.freeze({
  ...Gw,
  body: "",
  hidden: !1
});
function u3(r, o) {
  const l = {};
  !r.hFlip != !o.hFlip && (l.hFlip = !0), !r.vFlip != !o.vFlip && (l.vFlip = !0);
  const c = ((r.rotate || 0) + (o.rotate || 0)) % 4;
  return c && (l.rotate = c), l;
}
function vT(r, o) {
  const l = u3(r, o);
  for (const c in uw)
    c in Ay ? c in r && !(c in l) && (l[c] = Ay[c]) : c in o ? l[c] = o[c] : c in r && (l[c] = r[c]);
  return l;
}
function c3(r, o) {
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
function f3(r, o, l) {
  const c = r.icons, d = r.aliases || /* @__PURE__ */ Object.create(null);
  let m = {};
  function v(E) {
    m = vT(
      c[E] || d[E],
      m
    );
  }
  return v(o), l.forEach(v), vT(r, m);
}
function qk(r, o) {
  const l = [];
  if (typeof r != "object" || typeof r.icons != "object")
    return l;
  r.not_found instanceof Array && r.not_found.forEach((d) => {
    o(d, null), l.push(d);
  });
  const c = c3(r);
  for (const d in c) {
    const m = c[d];
    m && (o(d, f3(r, d, m)), l.push(d));
  }
  return l;
}
const d3 = {
  provider: "",
  aliases: {},
  not_found: {},
  ...Qk
};
function Ix(r, o) {
  for (const l in o)
    if (l in r && typeof r[l] != typeof o[l])
      return !1;
  return !0;
}
function Kk(r) {
  if (typeof r != "object" || r === null)
    return null;
  const o = r;
  if (typeof o.prefix != "string" || !r.icons || typeof r.icons != "object" || !Ix(r, d3))
    return null;
  const l = o.icons;
  for (const d in l) {
    const m = l[d];
    if (!d.match(Zh) || typeof m.body != "string" || !Ix(
      m,
      uw
    ))
      return null;
  }
  const c = o.aliases || /* @__PURE__ */ Object.create(null);
  for (const d in c) {
    const m = c[d], v = m.parent;
    if (!d.match(Zh) || typeof v != "string" || !l[v] && !c[v] || !Ix(
      m,
      uw
    ))
      return null;
  }
  return o;
}
const mT = /* @__PURE__ */ Object.create(null);
function p3(r, o) {
  return {
    provider: r,
    prefix: o,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function mc(r, o) {
  const l = mT[r] || (mT[r] = /* @__PURE__ */ Object.create(null));
  return l[o] || (l[o] = p3(r, o));
}
function Qw(r, o) {
  return Kk(o) ? qk(o, (l, c) => {
    c ? r.icons[l] = c : r.missing.add(l);
  }) : [];
}
function h3(r, o, l) {
  try {
    if (typeof l.body == "string")
      return r.icons[o] = { ...l }, !0;
  } catch {
  }
  return !1;
}
let iv = !1;
function Zk(r) {
  return typeof r == "boolean" && (iv = r), iv;
}
function v3(r) {
  const o = typeof r == "string" ? Xy(r, !0, iv) : r;
  if (o) {
    const l = mc(o.provider, o.prefix), c = o.name;
    return l.icons[c] || (l.missing.has(c) ? null : void 0);
  }
}
function m3(r, o) {
  const l = Xy(r, !0, iv);
  if (!l)
    return !1;
  const c = mc(l.provider, l.prefix);
  return h3(c, l.name, o);
}
function g3(r, o) {
  if (typeof r != "object")
    return !1;
  if (typeof o != "string" && (o = r.provider || ""), iv && !o && !r.prefix) {
    let d = !1;
    return Kk(r) && (r.prefix = "", qk(r, (m, v) => {
      v && m3(m, v) && (d = !0);
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
  return !!Qw(c, r);
}
const Xk = Object.freeze({
  width: null,
  height: null
}), Jk = Object.freeze({
  // Dimensions
  ...Xk,
  // Transformations
  ...Ay
}), y3 = /(-?[0-9.]*[0-9]+[0-9.]*)/g, S3 = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function gT(r, o, l) {
  if (o === 1)
    return r;
  if (l = l || 100, typeof r == "number")
    return Math.ceil(r * o * l) / l;
  if (typeof r != "string")
    return r;
  const c = r.split(y3);
  if (c === null || !c.length)
    return r;
  const d = [];
  let m = c.shift(), v = S3.test(m);
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
const x3 = (r) => r === "unset" || r === "undefined" || r === "none";
function w3(r, o) {
  const l = {
    ...Gw,
    ...r
  }, c = {
    ...Jk,
    ...o
  }, d = {
    left: l.left,
    top: l.top,
    width: l.width,
    height: l.height
  };
  let m = l.body;
  [l, c].forEach((L) => {
    const H = [], ne = L.hFlip, oe = L.vFlip;
    let W = L.rotate;
    ne ? oe ? W += 2 : (H.push(
      "translate(" + (d.width + d.left).toString() + " " + (0 - d.top).toString() + ")"
    ), H.push("scale(-1 1)"), d.top = d.left = 0) : oe && (H.push(
      "translate(" + (0 - d.left).toString() + " " + (d.height + d.top).toString() + ")"
    ), H.push("scale(1 -1)"), d.top = d.left = 0);
    let K;
    switch (W < 0 && (W -= Math.floor(W / 4) * 4), W = W % 4, W) {
      case 1:
        K = d.height / 2 + d.top, H.unshift(
          "rotate(90 " + K.toString() + " " + K.toString() + ")"
        );
        break;
      case 2:
        H.unshift(
          "rotate(180 " + (d.width / 2 + d.left).toString() + " " + (d.height / 2 + d.top).toString() + ")"
        );
        break;
      case 3:
        K = d.width / 2 + d.left, H.unshift(
          "rotate(-90 " + K.toString() + " " + K.toString() + ")"
        );
        break;
    }
    W % 2 === 1 && (d.left !== d.top && (K = d.left, d.left = d.top, d.top = K), d.width !== d.height && (K = d.width, d.width = d.height, d.height = K)), H.length && (m = '<g transform="' + H.join(" ") + '">' + m + "</g>");
  });
  const v = c.width, E = c.height, w = d.width, C = d.height;
  let T, R;
  v === null ? (R = E === null ? "1em" : E === "auto" ? C : E, T = gT(R, w / C)) : (T = v === "auto" ? w : v, R = E === null ? gT(T, C / w) : E === "auto" ? C : E);
  const O = {}, U = (L, H) => {
    x3(H) || (O[L] = H.toString());
  };
  return U("width", T), U("height", R), O.viewBox = d.left.toString() + " " + d.top.toString() + " " + w.toString() + " " + C.toString(), {
    attributes: O,
    body: m
  };
}
const b3 = /\sid="(\S+)"/g, E3 = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let C3 = 0;
function _3(r, o = E3) {
  const l = [];
  let c;
  for (; c = b3.exec(r); )
    l.push(c[1]);
  if (!l.length)
    return r;
  const d = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return l.forEach((m) => {
    const v = typeof o == "function" ? o(m) : o + (C3++).toString(), E = m.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    r = r.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + E + ')([")]|\\.[a-z])', "g"),
      "$1" + v + d + "$3"
    );
  }), r = r.replace(new RegExp(d, "g"), ""), r;
}
const cw = /* @__PURE__ */ Object.create(null);
function T3(r, o) {
  cw[r] = o;
}
function fw(r) {
  return cw[r] || cw[""];
}
function qw(r) {
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
const Kw = /* @__PURE__ */ Object.create(null), Wh = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], Ey = [];
for (; Wh.length > 0; )
  Wh.length === 1 || Math.random() > 0.5 ? Ey.push(Wh.shift()) : Ey.push(Wh.pop());
Kw[""] = qw({
  resources: ["https://api.iconify.design"].concat(Ey)
});
function k3(r, o) {
  const l = qw(o);
  return l === null ? !1 : (Kw[r] = l, !0);
}
function Zw(r) {
  return Kw[r];
}
const R3 = () => {
  let r;
  try {
    if (r = fetch, typeof r == "function")
      return r;
  } catch {
  }
};
let yT = R3();
function D3(r, o) {
  const l = Zw(r);
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
function O3(r) {
  return r === 404;
}
const M3 = (r, o, l) => {
  const c = [], d = D3(r, o), m = "icons";
  let v = {
    type: m,
    provider: r,
    prefix: o,
    icons: []
  }, E = 0;
  return l.forEach((w, C) => {
    E += w.length + 1, E >= d && C > 0 && (c.push(v), v = {
      type: m,
      provider: r,
      prefix: o,
      icons: []
    }, E = w.length), v.icons.push(w);
  }), c.push(v), c;
};
function N3(r) {
  if (typeof r == "string") {
    const o = Zw(r);
    if (o)
      return o.path;
  }
  return "/";
}
const L3 = (r, o, l) => {
  if (!yT) {
    l("abort", 424);
    return;
  }
  let c = N3(o.provider);
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
  yT(r + c).then((m) => {
    const v = m.status;
    if (v !== 200) {
      setTimeout(() => {
        l(O3(v) ? "abort" : "next", v);
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
}, j3 = {
  prepare: M3,
  send: L3
};
function U3(r) {
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
    const m = d.provider, v = d.prefix, E = d.name, w = l[m] || (l[m] = /* @__PURE__ */ Object.create(null)), C = w[v] || (w[v] = mc(m, v));
    let T;
    E in C.icons ? T = o.loaded : v === "" || C.missing.has(E) ? T = o.missing : T = o.pending;
    const R = {
      provider: m,
      prefix: v,
      name: E
    };
    T.push(R);
  }), o;
}
function eR(r, o) {
  r.forEach((l) => {
    const c = l.loaderCallbacks;
    c && (l.loaderCallbacks = c.filter((d) => d.id !== o));
  });
}
function A3(r) {
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
        const C = w.name;
        if (r.icons[C])
          v.loaded.push({
            provider: c,
            prefix: d,
            name: C
          });
        else if (r.missing.has(C))
          v.missing.push({
            provider: c,
            prefix: d,
            name: C
          });
        else
          return l = !0, !0;
        return !1;
      }), v.pending.length !== E && (l || eR([r], m.id), m.callback(
        v.loaded.slice(0),
        v.missing.slice(0),
        v.pending.slice(0),
        m.abort
      ));
    });
  }));
}
let z3 = 0;
function F3(r, o, l) {
  const c = z3++, d = eR.bind(null, l, c);
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
function P3(r, o = !0, l = !1) {
  const c = [];
  return r.forEach((d) => {
    const m = typeof d == "string" ? Xy(d, o, l) : d;
    m && c.push(m);
  }), c;
}
var H3 = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function I3(r, o, l, c) {
  const d = r.resources.length, m = r.random ? Math.floor(Math.random() * d) : r.index;
  let v;
  if (r.random) {
    let V = r.resources.slice(0);
    for (v = []; V.length > 1; ) {
      const Z = Math.floor(Math.random() * V.length);
      v.push(V[Z]), V = V.slice(0, Z).concat(V.slice(Z + 1));
    }
    v = v.concat(V);
  } else
    v = r.resources.slice(m).concat(r.resources.slice(0, m));
  const E = Date.now();
  let w = "pending", C = 0, T, R = null, O = [], U = [];
  typeof c == "function" && U.push(c);
  function L() {
    R && (clearTimeout(R), R = null);
  }
  function H() {
    w === "pending" && (w = "aborted"), L(), O.forEach((V) => {
      V.status === "pending" && (V.status = "aborted");
    }), O = [];
  }
  function ne(V, Z) {
    Z && (U = []), typeof V == "function" && U.push(V);
  }
  function oe() {
    return {
      startTime: E,
      payload: o,
      status: w,
      queriesSent: C,
      queriesPending: O.length,
      subscribe: ne,
      abort: H
    };
  }
  function W() {
    w = "failed", U.forEach((V) => {
      V(void 0, T);
    });
  }
  function K() {
    O.forEach((V) => {
      V.status === "pending" && (V.status = "aborted");
    }), O = [];
  }
  function ae(V, Z, we) {
    const de = Z !== "success";
    switch (O = O.filter((ve) => ve !== V), w) {
      case "pending":
        break;
      case "failed":
        if (de || !r.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (Z === "abort") {
      T = we, W();
      return;
    }
    if (de) {
      T = we, O.length || (v.length ? te() : W());
      return;
    }
    if (L(), K(), !r.random) {
      const ve = r.resources.indexOf(V.resource);
      ve !== -1 && ve !== r.index && (r.index = ve);
    }
    w = "completed", U.forEach((ve) => {
      ve(we);
    });
  }
  function te() {
    if (w !== "pending")
      return;
    L();
    const V = v.shift();
    if (V === void 0) {
      if (O.length) {
        R = setTimeout(() => {
          L(), w === "pending" && (K(), W());
        }, r.timeout);
        return;
      }
      W();
      return;
    }
    const Z = {
      status: "pending",
      resource: V,
      callback: (we, de) => {
        ae(Z, we, de);
      }
    };
    O.push(Z), C++, R = setTimeout(te, r.rotate), l(V, o, Z.callback);
  }
  return setTimeout(te), oe;
}
function tR(r) {
  const o = {
    ...H3,
    ...r
  };
  let l = [];
  function c() {
    l = l.filter((E) => E().status === "pending");
  }
  function d(E, w, C) {
    const T = I3(
      o,
      E,
      w,
      (R, O) => {
        c(), C && C(R, O);
      }
    );
    return l.push(T), T;
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
function ST() {
}
const Yx = /* @__PURE__ */ Object.create(null);
function Y3(r) {
  if (!Yx[r]) {
    const o = Zw(r);
    if (!o)
      return;
    const l = tR(o), c = {
      config: o,
      redundancy: l
    };
    Yx[r] = c;
  }
  return Yx[r];
}
function $3(r, o, l) {
  let c, d;
  if (typeof r == "string") {
    const m = fw(r);
    if (!m)
      return l(void 0, 424), ST;
    d = m.send;
    const v = Y3(r);
    v && (c = v.redundancy);
  } else {
    const m = qw(r);
    if (m) {
      c = tR(m);
      const v = r.resources ? r.resources[0] : "", E = fw(v);
      E && (d = E.send);
    }
  }
  return !c || !d ? (l(void 0, 424), ST) : c.query(o, d, l)().abort;
}
const xT = "iconify2", ov = "iconify", nR = ov + "-count", wT = ov + "-version", rR = 36e5, V3 = 168;
function dw(r, o) {
  try {
    return r.getItem(o);
  } catch {
  }
}
function Xw(r, o, l) {
  try {
    return r.setItem(o, l), !0;
  } catch {
  }
}
function bT(r, o) {
  try {
    r.removeItem(o);
  } catch {
  }
}
function pw(r, o) {
  return Xw(r, nR, o.toString());
}
function hw(r) {
  return parseInt(dw(r, nR)) || 0;
}
const Jy = {
  local: !0,
  session: !0
}, aR = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let Jw = !1;
function B3(r) {
  Jw = r;
}
let vy = typeof window > "u" ? {} : window;
function iR(r) {
  const o = r + "Storage";
  try {
    if (vy && vy[o] && typeof vy[o].length == "number")
      return vy[o];
  } catch {
  }
  Jy[r] = !1;
}
function oR(r, o) {
  const l = iR(r);
  if (!l)
    return;
  const c = dw(l, wT);
  if (c !== xT) {
    if (c) {
      const E = hw(l);
      for (let w = 0; w < E; w++)
        bT(l, ov + w.toString());
    }
    Xw(l, wT, xT), pw(l, 0);
    return;
  }
  const d = Math.floor(Date.now() / rR) - V3, m = (E) => {
    const w = ov + E.toString(), C = dw(l, w);
    if (typeof C == "string") {
      try {
        const T = JSON.parse(C);
        if (typeof T == "object" && typeof T.cached == "number" && T.cached > d && typeof T.provider == "string" && typeof T.data == "object" && typeof T.data.prefix == "string" && // Valid item: run callback
        o(T, E))
          return !0;
      } catch {
      }
      bT(l, w);
    }
  };
  let v = hw(l);
  for (let E = v - 1; E >= 0; E--)
    m(E) || (E === v - 1 ? (v--, pw(l, v)) : aR[r].add(E));
}
function lR() {
  if (!Jw) {
    B3(!0);
    for (const r in Jy)
      oR(r, (o) => {
        const l = o.data, c = o.provider, d = l.prefix, m = mc(
          c,
          d
        );
        if (!Qw(m, l).length)
          return !1;
        const v = l.lastModified || -1;
        return m.lastModifiedCached = m.lastModifiedCached ? Math.min(m.lastModifiedCached, v) : v, !0;
      });
  }
}
function W3(r, o) {
  const l = r.lastModifiedCached;
  if (
    // Matches or newer
    l && l >= o
  )
    return l === o;
  if (r.lastModifiedCached = o, l)
    for (const c in Jy)
      oR(c, (d) => {
        const m = d.data;
        return d.provider !== r.provider || m.prefix !== r.prefix || m.lastModified === o;
      });
  return !0;
}
function G3(r, o) {
  Jw || lR();
  function l(c) {
    let d;
    if (!Jy[c] || !(d = iR(c)))
      return;
    const m = aR[c];
    let v;
    if (m.size)
      m.delete(v = Array.from(m).shift());
    else if (v = hw(d), !pw(d, v + 1))
      return;
    const E = {
      cached: Math.floor(Date.now() / rR),
      provider: r.provider,
      data: o
    };
    return Xw(
      d,
      ov + v.toString(),
      JSON.stringify(E)
    );
  }
  o.lastModified && !W3(r, o.lastModified) || Object.keys(o.icons).length && (o.not_found && (o = Object.assign({}, o), delete o.not_found), l("local") || l("session"));
}
function ET() {
}
function Q3(r) {
  r.iconsLoaderFlag || (r.iconsLoaderFlag = !0, setTimeout(() => {
    r.iconsLoaderFlag = !1, A3(r);
  }));
}
function q3(r, o) {
  r.iconsToLoad ? r.iconsToLoad = r.iconsToLoad.concat(o).sort() : r.iconsToLoad = o, r.iconsQueueFlag || (r.iconsQueueFlag = !0, setTimeout(() => {
    r.iconsQueueFlag = !1;
    const { provider: l, prefix: c } = r, d = r.iconsToLoad;
    delete r.iconsToLoad;
    let m;
    if (!d || !(m = fw(l)))
      return;
    m.prepare(l, c, d).forEach((E) => {
      $3(l, E, (w) => {
        if (typeof w != "object")
          E.icons.forEach((C) => {
            r.missing.add(C);
          });
        else
          try {
            const C = Qw(
              r,
              w
            );
            if (!C.length)
              return;
            const T = r.pendingIcons;
            T && C.forEach((R) => {
              T.delete(R);
            }), G3(r, w);
          } catch (C) {
            console.error(C);
          }
        Q3(r);
      });
    });
  }));
}
const K3 = (r, o) => {
  const l = P3(r, !0, Zk()), c = U3(l);
  if (!c.pending.length) {
    let w = !0;
    return o && setTimeout(() => {
      w && o(
        c.loaded,
        c.missing,
        c.pending,
        ET
      );
    }), () => {
      w = !1;
    };
  }
  const d = /* @__PURE__ */ Object.create(null), m = [];
  let v, E;
  return c.pending.forEach((w) => {
    const { provider: C, prefix: T } = w;
    if (T === E && C === v)
      return;
    v = C, E = T, m.push(mc(C, T));
    const R = d[C] || (d[C] = /* @__PURE__ */ Object.create(null));
    R[T] || (R[T] = []);
  }), c.pending.forEach((w) => {
    const { provider: C, prefix: T, name: R } = w, O = mc(C, T), U = O.pendingIcons || (O.pendingIcons = /* @__PURE__ */ new Set());
    U.has(R) || (U.add(R), d[C][T].push(R));
  }), m.forEach((w) => {
    const { provider: C, prefix: T } = w;
    d[C][T].length && q3(w, d[C][T]);
  }), o ? F3(o, c, m) : ET;
};
function Z3(r, o) {
  const l = {
    ...r
  };
  for (const c in o) {
    const d = o[c], m = typeof d;
    c in Xk ? (d === null || d && (m === "string" || m === "number")) && (l[c] = d) : m === typeof l[c] && (l[c] = c === "rotate" ? d % 4 : d);
  }
  return l;
}
const X3 = /[\s,]+/;
function J3(r, o) {
  o.split(X3).forEach((l) => {
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
function eP(r, o = 0) {
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
function tP(r, o) {
  let l = r.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const c in o)
    l += " " + c + '="' + o[c] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + l + ">" + r + "</svg>";
}
function nP(r) {
  return r.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function rP(r) {
  return "data:image/svg+xml," + nP(r);
}
function aP(r) {
  return 'url("' + rP(r) + '")';
}
let Xh;
function iP() {
  try {
    Xh = window.trustedTypes.createPolicy("iconify", {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      createHTML: (r) => r
    });
  } catch {
    Xh = null;
  }
}
function oP(r) {
  return Xh === void 0 && iP(), Xh ? Xh.createHTML(r) : r;
}
const sR = {
  ...Jk,
  inline: !1
}, lP = {
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, sP = {
  display: "inline-block"
}, vw = {
  backgroundColor: "currentColor"
}, uR = {
  backgroundColor: "transparent"
}, CT = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, _T = {
  WebkitMask: vw,
  mask: vw,
  background: uR
};
for (const r in _T) {
  const o = _T[r];
  for (const l in CT)
    o[r + l] = CT[l];
}
const uP = {
  ...sR,
  inline: !0
};
function TT(r) {
  return r + (r.match(/^[-0-9.]+$/) ? "px" : "");
}
const cP = (r, o, l, c) => {
  const d = l ? uP : sR, m = Z3(d, o), v = o.mode || "svg", E = {}, w = o.style || {}, C = {
    ...v === "svg" ? lP : {},
    ref: c
  };
  for (let oe in o) {
    const W = o[oe];
    if (W !== void 0)
      switch (oe) {
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
          m[oe] = W === !0 || W === "true" || W === 1;
          break;
        case "flip":
          typeof W == "string" && J3(m, W);
          break;
        case "color":
          E.color = W;
          break;
        case "rotate":
          typeof W == "string" ? m[oe] = eP(W) : typeof W == "number" && (m[oe] = W);
          break;
        case "ariaHidden":
        case "aria-hidden":
          W !== !0 && W !== "true" && delete C["aria-hidden"];
          break;
        default:
          d[oe] === void 0 && (C[oe] = W);
      }
  }
  const T = w3(r, m), R = T.attributes;
  if (m.inline && (E.verticalAlign = "-0.125em"), v === "svg") {
    C.style = {
      ...E,
      ...w
    }, Object.assign(C, R);
    let oe = 0, W = o.id;
    return typeof W == "string" && (W = W.replace(/-/g, "_")), C.dangerouslySetInnerHTML = {
      __html: oP(_3(T.body, W ? () => W + "ID" + oe++ : "iconifyReact"))
    }, Dr.createElement("svg", C);
  }
  const { body: O, width: U, height: L } = r, H = v === "mask" || (v === "bg" ? !1 : O.indexOf("currentColor") !== -1), ne = tP(O, {
    ...R,
    width: U + "",
    height: L + ""
  });
  return C.style = {
    ...E,
    "--svg": aP(ne),
    width: TT(R.width),
    height: TT(R.height),
    ...sP,
    ...H ? vw : uR,
    ...w
  }, Dr.createElement("span", C);
};
Zk(!0);
T3("", j3);
if (typeof document < "u" && typeof window < "u") {
  lR();
  const r = window;
  if (r.IconifyPreload !== void 0) {
    const o = r.IconifyPreload, l = "Invalid IconifyPreload syntax.";
    typeof o == "object" && o !== null && (o instanceof Array ? o : [o]).forEach((c) => {
      try {
        // Check if item is an object and not null/array
        (typeof c != "object" || c === null || c instanceof Array || // Check for 'icons' and 'prefix'
        typeof c.icons != "object" || typeof c.prefix != "string" || // Add icon set
        !g3(c)) && console.error(l);
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
          k3(l, d) || console.error(c);
        } catch {
          console.error(c);
        }
      }
  }
}
class cR extends Dr.Component {
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
    if (typeof c != "string" || (d = Xy(c, !1, !0)) === null) {
      this._abortLoading(), this._setData(null);
      return;
    }
    const m = v3(d);
    if (!m) {
      (!this._loading || this._loading.name !== c) && (this._abortLoading(), this._icon = "", this._setData(null), m !== null && (this._loading = {
        name: c,
        abort: K3([d], this._checkIcon.bind(this, !1))
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
    }), cP({
      ...Gw,
      ...l.data
    }, c, o._inline, o._ref);
  }
}
const fP = Dr.forwardRef(function(o, l) {
  const c = {
    ...o,
    _ref: l,
    _inline: !1
  };
  return Dr.createElement(cR, c);
});
Dr.forwardRef(function(o, l) {
  const c = {
    ...o,
    _ref: l,
    _inline: !0
  };
  return Dr.createElement(cR, c);
});
const kT = (r) => {
  let o;
  const l = /* @__PURE__ */ new Set(), c = (w, C) => {
    const T = typeof w == "function" ? w(o) : w;
    if (!Object.is(T, o)) {
      const R = o;
      o = C ?? typeof T != "object" ? T : Object.assign({}, o, T), l.forEach((O) => O(o, R));
    }
  }, d = () => o, E = { setState: c, getState: d, subscribe: (w) => (l.add(w), () => l.delete(w)), destroy: () => {
    l.clear();
  } };
  return o = r(c, d, E), E;
}, dP = (r) => r ? kT(r) : kT;
var mw = { exports: {} }, $x = {}, my = { exports: {} }, Vx = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var RT;
function pP() {
  if (RT)
    return Vx;
  RT = 1;
  var r = Dr;
  function o(R, O) {
    return R === O && (R !== 0 || 1 / R === 1 / O) || R !== R && O !== O;
  }
  var l = typeof Object.is == "function" ? Object.is : o, c = r.useState, d = r.useEffect, m = r.useLayoutEffect, v = r.useDebugValue;
  function E(R, O) {
    var U = O(), L = c({ inst: { value: U, getSnapshot: O } }), H = L[0].inst, ne = L[1];
    return m(function() {
      H.value = U, H.getSnapshot = O, w(H) && ne({ inst: H });
    }, [R, U, O]), d(function() {
      return w(H) && ne({ inst: H }), R(function() {
        w(H) && ne({ inst: H });
      });
    }, [R]), v(U), U;
  }
  function w(R) {
    var O = R.getSnapshot;
    R = R.value;
    try {
      var U = O();
      return !l(R, U);
    } catch {
      return !0;
    }
  }
  function C(R, O) {
    return O();
  }
  var T = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? C : E;
  return Vx.useSyncExternalStore = r.useSyncExternalStore !== void 0 ? r.useSyncExternalStore : T, Vx;
}
var Bx = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var DT;
function hP() {
  return DT || (DT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var r = Dr, o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function l(K) {
      {
        for (var ae = arguments.length, te = new Array(ae > 1 ? ae - 1 : 0), V = 1; V < ae; V++)
          te[V - 1] = arguments[V];
        c("error", K, te);
      }
    }
    function c(K, ae, te) {
      {
        var V = o.ReactDebugCurrentFrame, Z = V.getStackAddendum();
        Z !== "" && (ae += "%s", te = te.concat([Z]));
        var we = te.map(function(de) {
          return String(de);
        });
        we.unshift("Warning: " + ae), Function.prototype.apply.call(console[K], console, we);
      }
    }
    function d(K, ae) {
      return K === ae && (K !== 0 || 1 / K === 1 / ae) || K !== K && ae !== ae;
    }
    var m = typeof Object.is == "function" ? Object.is : d, v = r.useState, E = r.useEffect, w = r.useLayoutEffect, C = r.useDebugValue, T = !1, R = !1;
    function O(K, ae, te) {
      T || r.startTransition !== void 0 && (T = !0, l("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var V = ae();
      if (!R) {
        var Z = ae();
        m(V, Z) || (l("The result of getSnapshot should be cached to avoid an infinite loop"), R = !0);
      }
      var we = v({
        inst: {
          value: V,
          getSnapshot: ae
        }
      }), de = we[0].inst, ve = we[1];
      return w(function() {
        de.value = V, de.getSnapshot = ae, U(de) && ve({
          inst: de
        });
      }, [K, V, ae]), E(function() {
        U(de) && ve({
          inst: de
        });
        var Ae = function() {
          U(de) && ve({
            inst: de
          });
        };
        return K(Ae);
      }, [K]), C(V), V;
    }
    function U(K) {
      var ae = K.getSnapshot, te = K.value;
      try {
        var V = ae();
        return !m(te, V);
      } catch {
        return !0;
      }
    }
    function L(K, ae, te) {
      return ae();
    }
    var H = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ne = !H, oe = ne ? L : O, W = r.useSyncExternalStore !== void 0 ? r.useSyncExternalStore : oe;
    Bx.useSyncExternalStore = W, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Bx;
}
var OT;
function fR() {
  return OT || (OT = 1, process.env.NODE_ENV === "production" ? my.exports = pP() : my.exports = hP()), my.exports;
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
var MT;
function vP() {
  if (MT)
    return $x;
  MT = 1;
  var r = Dr, o = fR();
  function l(C, T) {
    return C === T && (C !== 0 || 1 / C === 1 / T) || C !== C && T !== T;
  }
  var c = typeof Object.is == "function" ? Object.is : l, d = o.useSyncExternalStore, m = r.useRef, v = r.useEffect, E = r.useMemo, w = r.useDebugValue;
  return $x.useSyncExternalStoreWithSelector = function(C, T, R, O, U) {
    var L = m(null);
    if (L.current === null) {
      var H = { hasValue: !1, value: null };
      L.current = H;
    } else
      H = L.current;
    L = E(function() {
      function oe(V) {
        if (!W) {
          if (W = !0, K = V, V = O(V), U !== void 0 && H.hasValue) {
            var Z = H.value;
            if (U(Z, V))
              return ae = Z;
          }
          return ae = V;
        }
        if (Z = ae, c(K, V))
          return Z;
        var we = O(V);
        return U !== void 0 && U(Z, we) ? Z : (K = V, ae = we);
      }
      var W = !1, K, ae, te = R === void 0 ? null : R;
      return [function() {
        return oe(T());
      }, te === null ? void 0 : function() {
        return oe(te());
      }];
    }, [T, R, O, U]);
    var ne = d(C, L[0], L[1]);
    return v(function() {
      H.hasValue = !0, H.value = ne;
    }, [ne]), w(ne), ne;
  }, $x;
}
var Wx = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var NT;
function mP() {
  return NT || (NT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var r = Dr, o = fR();
    function l(T, R) {
      return T === R && (T !== 0 || 1 / T === 1 / R) || T !== T && R !== R;
    }
    var c = typeof Object.is == "function" ? Object.is : l, d = o.useSyncExternalStore, m = r.useRef, v = r.useEffect, E = r.useMemo, w = r.useDebugValue;
    function C(T, R, O, U, L) {
      var H = m(null), ne;
      H.current === null ? (ne = {
        hasValue: !1,
        value: null
      }, H.current = ne) : ne = H.current;
      var oe = E(function() {
        var te = !1, V, Z, we = function(Qe) {
          if (!te) {
            te = !0, V = Qe;
            var De = U(Qe);
            if (L !== void 0 && ne.hasValue) {
              var Ze = ne.value;
              if (L(Ze, De))
                return Z = Ze, Ze;
            }
            return Z = De, De;
          }
          var lt = V, st = Z;
          if (c(lt, Qe))
            return st;
          var Vt = U(Qe);
          return L !== void 0 && L(st, Vt) ? st : (V = Qe, Z = Vt, Vt);
        }, de = O === void 0 ? null : O, ve = function() {
          return we(R());
        }, Ae = de === null ? void 0 : function() {
          return we(de());
        };
        return [ve, Ae];
      }, [R, O, U, L]), W = oe[0], K = oe[1], ae = d(T, W, K);
      return v(function() {
        ne.hasValue = !0, ne.value = ae;
      }, [ae]), w(ae), ae;
    }
    Wx.useSyncExternalStoreWithSelector = C, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Wx;
}
process.env.NODE_ENV === "production" ? mw.exports = vP() : mw.exports = mP();
var gP = mw.exports;
const yP = /* @__PURE__ */ n2(gP), { useSyncExternalStoreWithSelector: SP } = yP;
function xP(r, o = r.getState, l) {
  const c = SP(
    r.subscribe,
    r.getState,
    r.getServerState || r.getState,
    o,
    l
  );
  return t2(c), c;
}
const LT = (r) => {
  const o = typeof r == "function" ? dP(r) : r, l = (c, d) => xP(o, c, d);
  return Object.assign(l, o), l;
}, dR = (r) => r ? LT(r) : LT, pR = (r, o) => (...l) => Object.assign({}, r, o(...l)), hR = dR(
  pR(
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
), wP = ({
  children: r,
  currentName: o,
  variant: l = "neutral",
  size: c = "normal",
  closeButton: d = !1,
  onClose: m = () => {
  }
}) => {
  const { currentOpen: v, closeModal: E } = hR(), w = document.querySelector("#modal-root"), C = mn(null);
  return wd(() => {
    v.length > 0 && C.current && (C.current.focus(), w.style.display = "block"), v.length === 0 && (w.style.display = "none");
  }, [v, w]), v.includes(o) && w ? s3.createPortal(
    /* @__PURE__ */ A.jsxs(
      "div",
      {
        tabIndex: 0,
        ref: C,
        onKeyDown: (T) => {
          T.key === "Escape" && (m(), E());
        },
        className: "modal",
        children: [
          /* @__PURE__ */ A.jsx(
            "div",
            {
              className: "modal-overlay",
              onClick: () => {
                m(), E();
              }
            }
          ),
          /* @__PURE__ */ A.jsxs(
            "div",
            {
              className: `modal-body container rounded-box bg-${l} ${c}`,
              children: [
                d && /* @__PURE__ */ A.jsx(
                  "button",
                  {
                    type: "button",
                    className: "close-btn",
                    onClick: () => {
                      m(), E();
                    },
                    children: /* @__PURE__ */ A.jsx(fP, { icon: "mingcute:close-fill", height: 16 })
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
}, bP = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], EP = ({
  children: r,
  data: o,
  itemsPerPage: l = 30
}) => {
  const c = tu(() => o.length, [o]), [d, m] = En(1), [v, E] = En(l), w = tu(() => o.slice(
    (d - 1) * v,
    d * v
  ), [o, d, v]);
  return /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
    /* @__PURE__ */ A.jsx("div", { className: "table-content custom-scroll", children: r({ data: w() }) }),
    /* @__PURE__ */ A.jsxs("footer", { className: "table-footer", children: [
      /* @__PURE__ */ A.jsx(
        "button",
        {
          className: "btn btn-icon btn-square btn-sm ring-info",
          title: "First Page",
          disabled: d === 1,
          onClick: () => m(1),
          children: /* @__PURE__ */ A.jsx(mr, { hFlip: !0, icon: "ic:round-fast-forward" })
        }
      ),
      /* @__PURE__ */ A.jsx(
        "button",
        {
          className: "btn btn-icon btn-square btn-sm ring-info",
          title: "Previous Page",
          disabled: d === 1,
          onClick: () => m((C) => C - 1),
          children: /* @__PURE__ */ A.jsx(mr, { hFlip: !0, icon: "ic:round-skip-next" })
        }
      ),
      /* @__PURE__ */ A.jsxs("span", { children: [
        Ci("table.page"),
        " ",
        /* @__PURE__ */ A.jsx("span", { className: "page", children: d }),
        " ",
        Ci("table.of"),
        " ",
        /* @__PURE__ */ A.jsx("span", { className: "page", children: Math.ceil(c() / v) })
      ] }),
      /* @__PURE__ */ A.jsx(
        Bw,
        {
          items: bP,
          currentSelected: l,
          labelExtractor: (C) => `${Ci("table.per-page")} ${C}`,
          keyExtractor: (C) => C,
          showQty: 3,
          position: "bottom",
          onChange: (C, T) => {
            const R = Math.ceil(c() / T), O = d * v, L = (d > R ? R * T : d * T) / O, H = L !== 1 ? Math.floor(d / L) : d;
            d > R ? m(R) : m(H < 1 ? 1 : H), E(T);
          }
        }
      ),
      /* @__PURE__ */ A.jsx(
        "button",
        {
          className: "btn btn-icon btn-square btn-sm ring-info",
          title: "Next Page",
          disabled: Math.ceil(c() / v) === d,
          onClick: () => m((C) => C + 1),
          children: /* @__PURE__ */ A.jsx(mr, { icon: "ic:round-skip-next" })
        }
      ),
      /* @__PURE__ */ A.jsx(
        "button",
        {
          className: "btn btn-icon btn-square btn-sm ring-info",
          disabled: Math.ceil(c() / v) === d,
          onClick: () => m(Math.ceil(c() / v)),
          title: "Last Page",
          children: /* @__PURE__ */ A.jsx(mr, { icon: "ic:round-fast-forward" })
        }
      ),
      /* @__PURE__ */ A.jsxs("span", { children: [
        c(),
        Ci("table.items")
      ] })
    ] })
  ] });
}, CP = (r) => {
  const [o, l] = En(r ?? null), [c, d] = En({
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
      return o == null || o.addEventListener("scroll", Ww(m, 150)), () => {
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
}, _P = ({
  children: r,
  data: o,
  tableContainerRef: l
}) => {
  const { height: c, scrollHeight: d, top: m, root: v, setRoot: E, changeScrollData: w } = CP(l == null ? void 0 : l.current), C = mn(0), T = mn(C.current * 2), R = 40, O = tu(() => l.current === null ? 10 : Math.ceil(l.current.clientHeight / R), [l]);
  wd(() => (v === null && E(l.current), C.current = O(), () => {
  }), [O, l, v, E, w]);
  const U = tu(() => {
    let L = 0;
    return v === null ? [] : (C.current < 10 && (C.current = O() * 2), Math.ceil(c + m) === d && (T.current += C.current, v.scrollTo({
      top: C.current * R
    })), T.current > C.current * 3 && m > 0 && (L = T.current - C.current * 3), m === 0 && T.current > C.current * 3 && (T.current -= C.current, L = T.current - C.current * 3, v.scrollTo({
      top: C.current * R
    })), o.slice(L, T.current));
  }, [o, c, O, d, m, v, C]);
  return r({ data: U() });
}, TP = {
  scroll: _P,
  pagination: EP
}, kP = ({
  mode: r,
  children: o,
  data: l
}) => {
  const c = mn(null), d = TP[r];
  return /* @__PURE__ */ A.jsx("div", { className: `table-container ${r}`, ref: c, children: /* @__PURE__ */ A.jsx(d, { tableContainerRef: c, data: l, children: o }) });
}, RP = ({
  closeModal: r,
  config: o
}) => /* @__PURE__ */ A.jsxs(wP, { currentName: "table-config-modal", children: [
  o.map((l) => /* @__PURE__ */ A.jsxs("div", { className: "container row between-center", children: [
    /* @__PURE__ */ A.jsx("span", { children: l }),
    /* @__PURE__ */ A.jsx(
      Bw,
      {
        variant: "neutral",
        items: ["Expected", "Overhelmed", "Below Expectation"]
      }
    )
  ] }, l)),
  /* @__PURE__ */ A.jsx("button", { className: "btn btn-primary ring-info", onClick: r, children: "Save" })
] }), DP = ({
  index: r,
  columns: o,
  translation: l,
  column: c,
  ordersType: d,
  orderedHeader: m,
  order: v,
  setOrder: E,
  tBodyRef: w,
  mousePosition: C
}) => /* @__PURE__ */ A.jsx("th", { children: /* @__PURE__ */ A.jsxs("div", { className: "table-column", children: [
  /* @__PURE__ */ A.jsx("span", { children: Ci(
    `data.${l}.${c}`
  ) }),
  /* @__PURE__ */ A.jsxs("div", { className: "group-vertical rounded-box no-print", children: [
    /* @__PURE__ */ A.jsx(
      "button",
      {
        className: `btn btn-square btn-xs ${d[v] === "asc" && m.current === c ? "active" : ""}`,
        onClick: () => {
          E(
            (T) => T === 1 && m.current === c ? 0 : 1
          ), m.current = c;
        },
        children: /* @__PURE__ */ A.jsx(mr, { icon: "eva:arrow-up-fill" })
      }
    ),
    /* @__PURE__ */ A.jsx(
      "button",
      {
        className: `btn btn-square btn-xs ${d[v] === "desc" && m.current === c ? "active" : ""}`,
        onClick: () => {
          E(
            (T) => T === 2 && m.current === c ? 0 : 2
          ), m.current = c;
        },
        children: /* @__PURE__ */ A.jsx(mr, { icon: "eva:arrow-down-fill" })
      }
    )
  ] }),
  o.length - 1 !== r && /* @__PURE__ */ A.jsxs(
    "button",
    {
      className: "handler",
      title: "Resize Column",
      onMouseDown: (T) => {
        C.current.startPosition = T.clientX;
      },
      onMouseMove: (T) => {
        var L;
        if (w.current === null || C.current.startPosition === 0)
          return;
        C.current.currentPosition = T.clientX;
        const R = (L = w.current.firstChild) == null ? void 0 : L.childNodes[r];
        if (R === null)
          return;
        const O = R.getBoundingClientRect().width, U = C.current.currentPosition - C.current.startPosition;
        R.style.width = `${O + U}px`, C.current.startPosition = C.current.currentPosition;
      },
      onMouseUp: () => {
        C.current = {
          startPosition: 0,
          currentPosition: 0,
          endPosition: 0
        };
      },
      onMouseLeave: () => {
        C.current = {
          startPosition: 0,
          currentPosition: 0,
          endPosition: 0
        };
      },
      onClick: (T) => {
        var O;
        if (T.detail < 2 || w.current === null)
          return;
        const R = (O = w.current.firstChild) == null ? void 0 : O.childNodes[r];
        R !== null && (R.style.width = "auto");
      },
      children: [
        /* @__PURE__ */ A.jsx("span", {}),
        /* @__PURE__ */ A.jsx("span", {})
      ]
    }
  )
] }) }), OP = (r, o, l = "asc") => {
  if (l === "default" || o === null)
    return r;
  const c = l === "asc" ? 1 : -1;
  return r.slice().sort((d, m) => {
    const v = d[o], E = m[o];
    return v < E ? -1 * c : v > E ? 1 * c : 0;
  });
}, jT = ["default", "asc", "desc"], VP = ({
  headers: r,
  data: o,
  dataConfig: l,
  showObject: c,
  // headersConfig,
  translation: d = "workgroups",
  action: m,
  loading: v = !1,
  hideColumn: E = [],
  mode: w = "pagination"
}) => {
  const { closeModal: C, openModal: T } = hR(), [R] = En(w), [O, U] = En(0), L = mn(null), H = mn(null), ne = mn({
    startPosition: 0,
    currentPosition: 0,
    endPosition: 0
  }), [oe, W] = En(""), K = tu(() => v ? [] : o.filter((te) => {
    if (oe.trim() === "")
      return o;
    const V = oe.toLowerCase().trim();
    return Object.entries(te).some(([we, de]) => {
      var ve;
      return E.includes(we) ? !1 : typeof de == "object" && Object.hasOwnProperty.call(l, we) ? String(
        (ve = l == null ? void 0 : l[we]) == null ? void 0 : ve.call(l, de, te)
      ).toLowerCase().includes(V) : typeof de == "object" ? String(Object.values(de)[0]).toLowerCase().includes(V) : String(de).toLowerCase().includes(V);
    });
  }), [oe, E, o, l, v]), ae = tu(() => OP(K(), L.current, jT[O]), [O, K, L]);
  return /* @__PURE__ */ A.jsxs("div", { className: "table-full", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "group rounded-box no-print", children: [
      /* @__PURE__ */ A.jsx("label", { className: "bg-primary", htmlFor: "find-all-table", children: Ci("common.search") }),
      /* @__PURE__ */ A.jsx(
        "input",
        {
          className: "input input-neutral ring-info",
          id: "find-all-table",
          placeholder: "Filtrar por....",
          style: { flex: "1" },
          onChange: Ww((te) => {
            W(te.target.value);
          }, 300)
        }
      ),
      /* @__PURE__ */ A.jsx(
        "button",
        {
          className: "btn btn-primary btn-icon",
          style: { flex: "0" },
          onClick: () => T("table-config-modal"),
          children: /* @__PURE__ */ A.jsx(mr, { icon: "mdi:filter" })
        }
      )
    ] }),
    /* @__PURE__ */ A.jsx(kP, { mode: R, data: ae(), children: ({ data: te }) => {
      let V = 0;
      return /* @__PURE__ */ A.jsxs("table", { className: "table", children: [
        /* @__PURE__ */ A.jsx("thead", { children: /* @__PURE__ */ A.jsxs("tr", { children: [
          r && r.map((Z, we) => E.includes(Z) ? null : (we++, /* @__PURE__ */ A.jsx("th", { children: Z }, we))),
          r === void 0 && te.length > 0 && Object.keys(te[0]).map((Z) => E.includes(Z) ? null : (V++, /* @__PURE__ */ A.jsx(
            DP,
            {
              tBodyRef: H,
              mousePosition: ne,
              orderedHeader: L,
              order: O,
              setOrder: U,
              column: Z,
              index: V - 1,
              columns: Object.keys(te[0]),
              ordersType: jT,
              translation: d
            },
            V - 1
          ))),
          v && /* @__PURE__ */ A.jsx("th", {}),
          m && /* @__PURE__ */ A.jsx("th", { children: Ci("common.action") })
        ] }) }),
        /* @__PURE__ */ A.jsxs("tbody", { ref: H, children: [
          v && /* @__PURE__ */ A.jsxs(
            "h2",
            {
              className: "subtitle",
              style: {
                margin: "auto",
                marginTop: "1rem",
                width: "fit-content"
              },
              children: [
                Ci("common.loading"),
                "..."
              ]
            }
          ),
          !v && te.map((Z, we) => /* @__PURE__ */ A.jsxs("tr", { tabIndex: 0, children: [
            Object.entries(Z).map(([de, ve], Ae) => {
              var De;
              let Qe;
              return E.includes(de) ? null : (typeof ve == "object" && (l == null ? void 0 : l[de]) === void 0 ? Qe = Object.values(ve)[0] : Object.hasOwnProperty.call(l ?? {}, de) ? Qe = (De = l == null ? void 0 : l[de]) == null ? void 0 : De.call(
                l,
                ve,
                Z
              ) : Qe = ve, /* @__PURE__ */ A.jsx(
                "td",
                {
                  title: "Click to copy",
                  style: { width: "auto" },
                  children: typeof ve != "object" || !(c != null && c[de]) ? Qe : /* @__PURE__ */ A.jsx("div", { className: "cell-container", children: /* @__PURE__ */ A.jsxs("div", { className: "cell-container--header", children: [
                    Qe,
                    /* @__PURE__ */ A.jsx(
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
                          st.className = "content", Object.entries(ve).forEach(
                            ([me, Pe]) => {
                              const be = document.createElement("li");
                              be.innerText = `${Ci(
                                `data.${d}.${me}`
                              )}: ${Pe}`, st.appendChild(be);
                            }
                          ), lt.appendChild(
                            st
                          );
                        },
                        children: /* @__PURE__ */ A.jsx(mr, { icon: "eva:arrow-down-fill" })
                      }
                    )
                  ] }) })
                },
                Ae
              ));
            }),
            m && m(Z, we)
          ] }, we))
        ] })
      ] });
    } }),
    !v && /* @__PURE__ */ A.jsx(
      RP,
      {
        config: Object.keys(o[0]),
        closeModal: C
      }
    )
  ] });
}, MP = {
  small: "4rem",
  medium: "6rem",
  large: "8rem"
}, BP = dR(
  pR(
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
          `${MP[(r == null ? void 0 : r.size) ?? "small"]}`
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
), WP = D2, GP = O2;
export {
  AP as Chart,
  PP as DateRangePicker,
  IP as DetailedWorkDay,
  YP as Header,
  wP as Modal,
  HP as MultiSelect,
  Bw as Select,
  FP as ShowPassword,
  $P as Sidebar,
  VP as Table,
  $F as Textfield,
  GP as changeDesignLanguage,
  Ww as debounce,
  WP as initDesignTranslator,
  hR as useModal,
  CP as useScroll,
  BP as useToast
};
