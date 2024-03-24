var ze = Object.defineProperty;
var Ge = (h, e, r) => e in h ? ze(h, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : h[e] = r;
var g = (h, e, r) => (Ge(h, typeof e != "symbol" ? e + "" : e, r), r), Nt = (h, e, r) => {
  if (!e.has(h))
    throw TypeError("Cannot " + r);
};
var v = (h, e, r) => (Nt(h, e, "read from private field"), r ? r.call(h) : e.get(h)), E = (h, e, r) => {
  if (e.has(h))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(h) : e.set(h, r);
}, p = (h, e, r, s) => (Nt(h, e, "write to private field"), s ? s.call(h, r) : e.set(h, r), r);
var x = (h, e, r) => (Nt(h, e, "access private method"), r);
import pe, { useRef as K, useEffect as qt } from "react";
import st from "./formatters/ko.es.js";
var Vt = { exports: {} }, ot = {};
var ge;
function Je() {
  if (ge)
    return ot;
  ge = 1;
  var h = pe, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, o = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function R(S, _, u) {
    var y, D = {}, P = null, N = null;
    u !== void 0 && (P = "" + u), _.key !== void 0 && (P = "" + _.key), _.ref !== void 0 && (N = _.ref);
    for (y in _)
      s.call(_, y) && !a.hasOwnProperty(y) && (D[y] = _[y]);
    if (S && S.defaultProps)
      for (y in _ = S.defaultProps, _)
        D[y] === void 0 && (D[y] = _[y]);
    return { $$typeof: e, type: S, key: P, ref: N, props: D, _owner: o.current };
  }
  return ot.Fragment = r, ot.jsx = R, ot.jsxs = R, ot;
}
var at = {};
var me;
function Ke() {
  return me || (me = 1, process.env.NODE_ENV !== "production" && function() {
    var h = pe, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), S = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), rt = Symbol.iterator, q = "@@iterator";
    function At(t) {
      if (t === null || typeof t != "object")
        return null;
      var n = rt && t[rt] || t[q];
      return typeof n == "function" ? n : null;
    }
    var $ = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(t) {
      {
        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), c = 1; c < n; c++)
          i[c - 1] = arguments[c];
        X("error", t, i);
      }
    }
    function X(t, n, i) {
      {
        var c = $.ReactDebugCurrentFrame, d = c.getStackAddendum();
        d !== "" && (n += "%s", i = i.concat([d]));
        var m = i.map(function(f) {
          return String(f);
        });
        m.unshift("Warning: " + n), Function.prototype.apply.call(console[t], console, m);
      }
    }
    var z = !1, Lt = !1, Mt = !1, T = !1, A = !1, _t;
    _t = Symbol.for("react.module.reference");
    function we(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === s || t === a || A || t === o || t === u || t === y || T || t === N || z || Lt || Mt || typeof t == "object" && t !== null && (t.$$typeof === P || t.$$typeof === D || t.$$typeof === R || t.$$typeof === S || t.$$typeof === _ || t.$$typeof === _t || t.getModuleId !== void 0));
    }
    function be(t, n, i) {
      var c = t.displayName;
      if (c)
        return c;
      var d = n.displayName || n.name || "";
      return d !== "" ? i + "(" + d + ")" : i;
    }
    function Bt(t) {
      return t.displayName || "Context";
    }
    function I(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case s:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case S:
            var n = t;
            return Bt(n) + ".Consumer";
          case R:
            var i = t;
            return Bt(i._context) + ".Provider";
          case _:
            return be(t, t.render, "ForwardRef");
          case D:
            var c = t.displayName || null;
            return c !== null ? c : I(t.type) || "Memo";
          case P: {
            var d = t, m = d._payload, f = d._init;
            try {
              return I(f(m));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var U = Object.assign, nt = 0, Xt, zt, Gt, Jt, Kt, Qt, Zt;
    function te() {
    }
    te.__reactDisabledLog = !0;
    function Te() {
      {
        if (nt === 0) {
          Xt = console.log, zt = console.info, Gt = console.warn, Jt = console.error, Kt = console.group, Qt = console.groupCollapsed, Zt = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: te,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        nt++;
      }
    }
    function Re() {
      {
        if (nt--, nt === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: U({}, t, {
              value: Xt
            }),
            info: U({}, t, {
              value: zt
            }),
            warn: U({}, t, {
              value: Gt
            }),
            error: U({}, t, {
              value: Jt
            }),
            group: U({}, t, {
              value: Kt
            }),
            groupCollapsed: U({}, t, {
              value: Qt
            }),
            groupEnd: U({}, t, {
              value: Zt
            })
          });
        }
        nt < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var kt = $.ReactCurrentDispatcher, Yt;
    function yt(t, n, i) {
      {
        if (Yt === void 0)
          try {
            throw Error();
          } catch (d) {
            var c = d.stack.trim().match(/\n( *(at )?)/);
            Yt = c && c[1] || "";
          }
        return `
` + Yt + t;
      }
    }
    var $t = !1, Et;
    {
      var Se = typeof WeakMap == "function" ? WeakMap : Map;
      Et = new Se();
    }
    function ee(t, n) {
      if (!t || $t)
        return "";
      {
        var i = Et.get(t);
        if (i !== void 0)
          return i;
      }
      var c;
      $t = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var m;
      m = kt.current, kt.current = null, Te();
      try {
        if (n) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (F) {
              c = F;
            }
            Reflect.construct(t, [], f);
          } else {
            try {
              f.call();
            } catch (F) {
              c = F;
            }
            t.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (F) {
            c = F;
          }
          t();
        }
      } catch (F) {
        if (F && c && typeof F.stack == "string") {
          for (var l = F.stack.split(`
`), O = c.stack.split(`
`), w = l.length - 1, b = O.length - 1; w >= 1 && b >= 0 && l[w] !== O[b]; )
            b--;
          for (; w >= 1 && b >= 0; w--, b--)
            if (l[w] !== O[b]) {
              if (w !== 1 || b !== 1)
                do
                  if (w--, b--, b < 0 || l[w] !== O[b]) {
                    var M = `
` + l[w].replace(" at new ", " at ");
                    return t.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", t.displayName)), typeof t == "function" && Et.set(t, M), M;
                  }
                while (w >= 1 && b >= 0);
              break;
            }
        }
      } finally {
        $t = !1, kt.current = m, Re(), Error.prepareStackTrace = d;
      }
      var J = t ? t.displayName || t.name : "", de = J ? yt(J) : "";
      return typeof t == "function" && Et.set(t, de), de;
    }
    function Ce(t, n, i) {
      return ee(t, !1);
    }
    function xe(t) {
      var n = t.prototype;
      return !!(n && n.isReactComponent);
    }
    function wt(t, n, i) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return ee(t, xe(t));
      if (typeof t == "string")
        return yt(t);
      switch (t) {
        case u:
          return yt("Suspense");
        case y:
          return yt("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case _:
            return Ce(t.render);
          case D:
            return wt(t.type, n, i);
          case P: {
            var c = t, d = c._payload, m = c._init;
            try {
              return wt(m(d), n, i);
            } catch {
            }
          }
        }
      return "";
    }
    var bt = Object.prototype.hasOwnProperty, re = {}, ne = $.ReactDebugCurrentFrame;
    function Tt(t) {
      if (t) {
        var n = t._owner, i = wt(t.type, t._source, n ? n.type : null);
        ne.setExtraStackFrame(i);
      } else
        ne.setExtraStackFrame(null);
    }
    function De(t, n, i, c, d) {
      {
        var m = Function.call.bind(bt);
        for (var f in t)
          if (m(t, f)) {
            var l = void 0;
            try {
              if (typeof t[f] != "function") {
                var O = Error((c || "React class") + ": " + i + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              l = t[f](n, f, c, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (w) {
              l = w;
            }
            l && !(l instanceof Error) && (Tt(d), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", c || "React class", i, f, typeof l), Tt(null)), l instanceof Error && !(l.message in re) && (re[l.message] = !0, Tt(d), C("Failed %s type: %s", i, l.message), Tt(null));
          }
      }
    }
    var Oe = Array.isArray;
    function It(t) {
      return Oe(t);
    }
    function Pe(t) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, i = n && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return i;
      }
    }
    function Ae(t) {
      try {
        return ie(t), !1;
      } catch {
        return !0;
      }
    }
    function ie(t) {
      return "" + t;
    }
    function se(t) {
      if (Ae(t))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Pe(t)), ie(t);
    }
    var it = $.ReactCurrentOwner, Le = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, oe, ae, Ft;
    Ft = {};
    function Me(t) {
      if (bt.call(t, "ref")) {
        var n = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function ke(t) {
      if (bt.call(t, "key")) {
        var n = Object.getOwnPropertyDescriptor(t, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Ye(t, n) {
      if (typeof t.ref == "string" && it.current && n && it.current.stateNode !== n) {
        var i = I(it.current.type);
        Ft[i] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', I(it.current.type), t.ref), Ft[i] = !0);
      }
    }
    function $e(t, n) {
      {
        var i = function() {
          oe || (oe = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        i.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function Ie(t, n) {
      {
        var i = function() {
          ae || (ae = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        i.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var Fe = function(t, n, i, c, d, m, f) {
      var l = {
        $$typeof: e,
        type: t,
        key: n,
        ref: i,
        props: f,
        _owner: m
      };
      return l._store = {}, Object.defineProperty(l._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(l, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.defineProperty(l, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    };
    function je(t, n, i, c, d) {
      {
        var m, f = {}, l = null, O = null;
        i !== void 0 && (se(i), l = "" + i), ke(n) && (se(n.key), l = "" + n.key), Me(n) && (O = n.ref, Ye(n, d));
        for (m in n)
          bt.call(n, m) && !Le.hasOwnProperty(m) && (f[m] = n[m]);
        if (t && t.defaultProps) {
          var w = t.defaultProps;
          for (m in w)
            f[m] === void 0 && (f[m] = w[m]);
        }
        if (l || O) {
          var b = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          l && $e(f, b), O && Ie(f, b);
        }
        return Fe(t, l, O, d, c, it.current, f);
      }
    }
    var jt = $.ReactCurrentOwner, ue = $.ReactDebugCurrentFrame;
    function G(t) {
      if (t) {
        var n = t._owner, i = wt(t.type, t._source, n ? n.type : null);
        ue.setExtraStackFrame(i);
      } else
        ue.setExtraStackFrame(null);
    }
    var Ht;
    Ht = !1;
    function Wt(t) {
      return typeof t == "object" && t !== null && t.$$typeof === e;
    }
    function ce() {
      {
        if (jt.current) {
          var t = I(jt.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function He(t) {
      {
        if (t !== void 0) {
          var n = t.fileName.replace(/^.*[\\\/]/, ""), i = t.lineNumber;
          return `

Check your code at ` + n + ":" + i + ".";
        }
        return "";
      }
    }
    var he = {};
    function We(t) {
      {
        var n = ce();
        if (!n) {
          var i = typeof t == "string" ? t : t.displayName || t.name;
          i && (n = `

Check the top-level render call using <` + i + ">.");
        }
        return n;
      }
    }
    function le(t, n) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var i = We(n);
        if (he[i])
          return;
        he[i] = !0;
        var c = "";
        t && t._owner && t._owner !== jt.current && (c = " It was passed a child from " + I(t._owner.type) + "."), G(t), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, c), G(null);
      }
    }
    function fe(t, n) {
      {
        if (typeof t != "object")
          return;
        if (It(t))
          for (var i = 0; i < t.length; i++) {
            var c = t[i];
            Wt(c) && le(c, n);
          }
        else if (Wt(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var d = At(t);
          if (typeof d == "function" && d !== t.entries)
            for (var m = d.call(t), f; !(f = m.next()).done; )
              Wt(f.value) && le(f.value, n);
        }
      }
    }
    function Ne(t) {
      {
        var n = t.type;
        if (n == null || typeof n == "string")
          return;
        var i;
        if (typeof n == "function")
          i = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === _ || n.$$typeof === D))
          i = n.propTypes;
        else
          return;
        if (i) {
          var c = I(n);
          De(i, t.props, "prop", c, t);
        } else if (n.PropTypes !== void 0 && !Ht) {
          Ht = !0;
          var d = I(n);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function qe(t) {
      {
        for (var n = Object.keys(t.props), i = 0; i < n.length; i++) {
          var c = n[i];
          if (c !== "children" && c !== "key") {
            G(t), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", c), G(null);
            break;
          }
        }
        t.ref !== null && (G(t), C("Invalid attribute `ref` supplied to `React.Fragment`."), G(null));
      }
    }
    function ve(t, n, i, c, d, m) {
      {
        var f = we(t);
        if (!f) {
          var l = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = He(d);
          O ? l += O : l += ce();
          var w;
          t === null ? w = "null" : It(t) ? w = "array" : t !== void 0 && t.$$typeof === e ? (w = "<" + (I(t.type) || "Unknown") + " />", l = " Did you accidentally export a JSX literal instead of a component?") : w = typeof t, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", w, l);
        }
        var b = je(t, n, i, d, m);
        if (b == null)
          return b;
        if (f) {
          var M = n.children;
          if (M !== void 0)
            if (c)
              if (It(M)) {
                for (var J = 0; J < M.length; J++)
                  fe(M[J], t);
                Object.freeze && Object.freeze(M);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              fe(M, t);
        }
        return t === s ? qe(b) : Ne(b), b;
      }
    }
    function Ue(t, n, i) {
      return ve(t, n, i, !0);
    }
    function Ve(t, n, i) {
      return ve(t, n, i, !1);
    }
    var Be = Ve, Xe = Ue;
    at.Fragment = s, at.jsx = Be, at.jsxs = Xe;
  }()), at;
}
(function(h) {
  process.env.NODE_ENV === "production" ? h.exports = Je() : h.exports = Ke();
})(Vt);
const ut = Vt.exports.jsx, Qe = Vt.exports.jsxs, Ze = {
  easeOutCubic: function(h) {
    return Math.pow(h - 1, 3) + 1;
  },
  easeOutQuart: function(h) {
    return -(Math.pow(h - 1, 4) - 1);
  }
};
function Rt(h, e) {
  let r = h;
  for (; r < 0; )
    r += e;
  return r % e;
}
function St(h, e) {
  return [...new Array(e - h)].map((r, s) => h + s);
}
const j = {
  wrapper: "ios-style-picker",
  optionList: "ios-style-picker__option-list",
  optionItem: "ios-style-picker__option-item",
  highlight: "ios-style-picker__highlight",
  highlightList: "ios-style-picker__highlight-list",
  highlightItem: "ios-style-picker__highlight-item"
};
class tr {
  constructor({
    container: e,
    source: r,
    isInfinite: s,
    wheelCount: o,
    itemAngle: a,
    itemHeight: R,
    radius: S
  }) {
    g(this, "_container");
    g(this, "_optionList");
    g(this, "_optionItems");
    g(this, "_highlightList");
    g(this, "_source");
    g(this, "_isInfinite");
    g(this, "wheelCount");
    g(this, "itemAngle");
    g(this, "itemHeight");
    g(this, "radius");
    this._container = e, this._source = r, this._isInfinite = s, this.wheelCount = o, this.itemAngle = a, this.itemHeight = R, this.radius = S;
    const _ = this._getOptionItems(), u = this._getHighlightItems();
    this._container.innerHTML = `
<div class="${j.wrapper}">
  <ul
    class="${j.optionList}"
    style="transform: translate3d(0, 0, ${-this.radius}px) rotateX(0deg);"
  >
    ${_}
  </ul>
  <div
    class="${j.highlight}"
    style="height: ${this.itemHeight}px; line-height: ${this.itemHeight}px;"
  >
    <ul class="${j.highlightList}">
      ${u}
    </ul>
  </div>
</div>`;
    const y = this._container.querySelector(`.${j.optionList}`);
    if (!y)
      throw new Error("optionList does not exists");
    this._optionList = y;
    const D = this._container.querySelectorAll(
      `.${j.optionItem}`
    );
    if (!D)
      throw new Error("optionList does not exists");
    this._optionItems = D;
    const P = this._container.querySelector(
      `.${j.highlightList}`
    );
    if (!P)
      throw new Error("highlightList does not exists.");
    s && (P.style.top = `${-this.itemHeight}px`), this._highlightList = P;
  }
  _getOptionItems() {
    return (this._isInfinite ? St(-this.wheelCount / 4, this._source.length + this.wheelCount / 4) : St(0, this._source.length)).map((s) => ({
      rotateX: -this.itemAngle * s,
      index: s,
      text: this._source[(s + this._source.length) % this._source.length].text
    })).reduce(
      (s, o) => `${s}
<li
  class="${j.optionItem}"
  style="
    top: ${this.itemHeight * -0.5}px;
    height: ${this.itemHeight}px;
    line-height: ${this.itemHeight}px;
    transform: rotateX(${o.rotateX}deg) translate3d(0, 0, ${this.radius}px);
  "
  data-index="${o.index}"
>
  ${o.text}
</li>`,
      ""
    );
  }
  _getHighlightItems() {
    return (this._isInfinite ? St(-1, this._source.length + 1) : St(0, this._source.length)).map((s) => ({
      text: this._source[(s + this._source.length) % this._source.length].text
    })).reduce(
      (s, o) => `${s}
<li
  class="${j.highlightItem}"
  style="height: ${this.itemHeight}px;"
>
  ${o.text}
</li>`,
      ""
    );
  }
  scroll(e) {
    const r = -this.radius, s = this.itemAngle * e;
    this._optionList.style.transform = `translate3d(0, 0, ${r}px) rotateX(${s}deg)`;
    const o = -e * this.itemHeight;
    this._highlightList.style.transform = `translate3d(0, ${o}px, 0)`, [...this._optionItems].forEach((a) => {
      if (a.dataset.index === void 0)
        throw new Error("itemElem.dataset.index does not exists");
      a.style.visibility = Math.abs(+a.dataset.index - e) > this.wheelCount / 4 ? "hidden" : "visible";
    });
  }
  addEventListener(e, r) {
    this._container.addEventListener(e, r);
  }
  removeEventListener(e, r) {
    this._container.removeEventListener(e, r);
  }
  equalOrContains(e) {
    var r;
    return ((r = this._container) == null ? void 0 : r.contains(e)) || this._container === e;
  }
  clear() {
    this._container.innerHTML = "";
  }
  get container() {
    return this._container;
  }
}
class ct {
  constructor(e, r) {
    g(this, "variant");
    g(this, "source");
    g(this, "selected");
    g(this, "onChange");
    g(this, "sensitivity");
    g(this, "wheelCount");
    g(this, "exceedA");
    g(this, "moveT");
    g(this, "moving");
    g(this, "targetElement");
    g(this, "html");
    g(this, "events");
    g(this, "itemHeight");
    g(this, "itemAngle");
    g(this, "radius");
    g(this, "scroll");
    g(this, "touchData", {
      startY: 0,
      yArr: [],
      touchScroll: 0
    });
    var o, a;
    this.variant = r.variant ?? "infinite", this.source = r.source, this.selected = this.source[0], this.onChange = r.onChange;
    const s = r.count ?? 20;
    if (this.wheelCount = s - s % 4, this.sensitivity = r.sensitivity ?? 8, this.exceedA = 10, this.moveT = 0, this.moving = !1, this.targetElement = e, !this.targetElement)
      throw new Error("targetElement does not exists.");
    this.itemHeight = this.targetElement.offsetHeight * 3 / s, this.itemAngle = 360 / s, this.radius = this.itemHeight / Math.tan(this.itemAngle * Math.PI / 180), this.scroll = 0, this._create(this.source), this.events = {
      touchstart: this._createEventListener("touchstart"),
      touchmove: this._createEventListener("touchmove"),
      touchend: this._createEventListener("touchend")
    }, (o = this.html) == null || o.addEventListener("touchstart", this.events.touchstart), document.addEventListener("mousedown", this.events.touchstart), (a = this.html) == null || a.addEventListener("touchend", this.events.touchend), document.addEventListener("mouseup", this.events.touchend), this.source.length && this.select(this.selected.value);
  }
  _createEventListener(e) {
    return (r) => {
      var s;
      !((s = this.html) != null && s.equalOrContains(r.target)) || this.source.length !== 0 && (r.preventDefault(), this[`_${e}`](r));
    };
  }
  _touchstart(e) {
    if (!this.html)
      throw new Error("this.html does not exists");
    this.html.addEventListener("touchmove", this.events.touchmove), document.addEventListener("mousemove", this.events.touchmove);
    const r = e.clientY ?? e.touches[0].clientY;
    this.touchData.startY = r, this.touchData.yArr = [[r, new Date().getTime()]], this.touchData.touchScroll = this.scroll, this._stop();
  }
  _touchmove(e) {
    const r = e.clientY ?? e.touches[0].clientY;
    this.touchData.yArr.push([r, new Date().getTime()]), this.touchData.yArr.length > 5 && this.touchData.yArr.unshift();
    const o = (this.touchData.startY - r) / this.itemHeight + this.scroll, a = this.variant === "infinite" ? Rt(o, this.source.length) : o < 0 ? o * 0.3 : o > this.source.length ? this.source.length + (o - this.source.length) * 0.3 : o;
    this.touchData.touchScroll = this._moveTo(a);
  }
  _getInitV() {
    if (this.touchData.yArr.length === 1)
      return 0;
    const e = this.touchData.yArr[this.touchData.yArr.length - 2][1], r = this.touchData.yArr[this.touchData.yArr.length - 1][1], s = this.touchData.yArr[this.touchData.yArr.length - 2][0], o = this.touchData.yArr[this.touchData.yArr.length - 1][0], a = (s - o) / this.itemHeight * 1e3 / (r - e), R = a > 0 ? 1 : -1;
    return Math.abs(a) > 30 ? 30 * R : a;
  }
  _touchend(e) {
    if (!this.html)
      throw new Error("this.html does not exists.");
    this.html.removeEventListener("touchmove", this.events.touchmove), document.removeEventListener("mousemove", this.events.touchmove);
    const r = this._getInitV();
    this.scroll = this.touchData.touchScroll, this._animateMoveByInitV(r);
  }
  _create(e) {
    if (!e.length)
      throw new Error("source does not exists.");
    if (this.variant === "infinite") {
      let r = [...e];
      for (; r.length < this.wheelCount / 2; )
        r = r.concat(e);
      e = r;
    }
    this.source = e, this.html = new tr({
      container: this.targetElement,
      source: this.source,
      isInfinite: this.variant === "infinite",
      wheelCount: this.wheelCount,
      itemAngle: this.itemAngle,
      itemHeight: this.itemHeight,
      radius: this.radius
    });
  }
  _moveTo(e) {
    if (!this.html)
      throw new Error("html does not exists");
    return this.variant === "infinite" && (e = Rt(e, this.source.length)), this.html.scroll(e), e;
  }
  async _animateMoveByInitV(e) {
    if (this.variant === "infinite") {
      const r = e > 0 ? -this.sensitivity : this.sensitivity, s = Math.abs(e / r), o = e * s + r * s * s / 2, a = Math.round(this.scroll + o);
      await this._animateToScroll(this.scroll, a, s, "easeOutQuart");
    } else if (this.scroll < 0 || this.scroll > this.source.length - 1) {
      const r = this.scroll < 0 ? 0 : this.source.length - 1;
      await this._animateToScroll(
        this.scroll,
        r,
        Math.sqrt(Math.abs((this.scroll - r) / this.exceedA))
      );
    } else {
      const r = e > 0 ? -this.sensitivity : this.sensitivity;
      let s = Math.abs(e / r), o = e * s + r * s * s / 2, a = Math.round(this.scroll + o);
      a = a < 0 ? 0 : a > this.source.length - 1 ? this.source.length - 1 : a, o = a - this.scroll, s = Math.sqrt(Math.abs(o / r)), await this._animateToScroll(this.scroll, a, s, "easeOutQuart");
    }
    this._selectByScroll(this.scroll);
  }
  _animateToScroll(e, r, s, o = "easeOutQuart") {
    if (e === r || s === 0) {
      this._moveTo(e);
      return;
    }
    const a = new Date().getTime() / 1e3, R = r - e;
    return new Promise((S, _) => {
      this.moving = !0;
      const u = () => {
        const y = new Date().getTime() / 1e3 - a;
        y < s ? (this.scroll = this._moveTo(
          e + Ze[o](y / s) * R
        ), this.moveT = requestAnimationFrame(u)) : (S(), this._stop(), this.scroll = this._moveTo(e + R));
      };
      u();
    });
  }
  _stop() {
    this.moving = !1, cancelAnimationFrame(this.moveT);
  }
  _selectByScroll(e) {
    e = Rt(e, this.source.length) | 0, e > this.source.length - 1 && (e = this.source.length - 1, this._moveTo(e)), this._moveTo(e), this.scroll = e, this.selected = this.source[e], this.onChange && this.onChange(this.selected);
  }
  updateSource(e) {
    this._create(e), this.moving || this._selectByScroll(this.scroll);
  }
  async select(e) {
    for (let r = 0; r < this.source.length; r++)
      if (this.source[r].value === e) {
        window.cancelAnimationFrame(this.moveT);
        const s = Rt(this.scroll, this.source.length), o = r, a = Math.sqrt(Math.abs((o - s) / this.sensitivity));
        await this._animateToScroll(s, o, a), this._selectByScroll(r);
        return;
      }
    throw new Error(`can't find value: ${e}`);
  }
  destroy() {
    var e, r, s, o;
    this._stop(), (e = this.html) == null || e.removeEventListener("touchstart", this.events.touchstart), (r = this.html) == null || r.removeEventListener("touchmove", this.events.touchmove), (s = this.html) == null || s.removeEventListener("touchend", this.events.touchend), document.removeEventListener("mousedown", this.events.touchstart), document.removeEventListener("mousemove", this.events.touchmove), document.removeEventListener("mouseup", this.events.touchend), (o = this.html) == null || o.clear();
  }
}
var L, k, Y, H, ht, lt, ft, vt, dt, Z, V, B, gt, mt, Dt, _e, W, Q, pt, Ut, tt, Ct, et, xt, Ot, ye, Pt, Ee;
class er {
  constructor({
    fromDate: e,
    toDate: r,
    currentYear: s,
    currentMonth: o,
    formatters: a
  } = {}) {
    E(this, Dt);
    E(this, W);
    E(this, pt);
    E(this, tt);
    E(this, et);
    E(this, Ot);
    E(this, Pt);
    E(this, L, void 0);
    E(this, k, void 0);
    E(this, Y, void 0);
    E(this, H, void 0);
    E(this, ht, void 0);
    E(this, lt, void 0);
    E(this, ft, void 0);
    E(this, vt, void 0);
    E(this, dt, void 0);
    E(this, Z, void 0);
    E(this, V, void 0);
    E(this, B, void 0);
    E(this, gt, void 0);
    E(this, mt, void 0);
    var R, S, _;
    p(this, L, e ?? new Date()), p(this, k, r ?? x(this, Dt, _e).call(this)), p(this, Y, s ?? v(this, L).getFullYear()), p(this, H, o ?? v(this, L).getMonth() + 1), p(this, ht, (a == null ? void 0 : a.year) ?? st.year), p(this, lt, (a == null ? void 0 : a.month) ?? st.month), p(this, ft, (a == null ? void 0 : a.day) ?? ((R = st) == null ? void 0 : R.day)), p(this, vt, (a == null ? void 0 : a.hour) ?? ((S = st) == null ? void 0 : S.hour)), p(this, dt, (a == null ? void 0 : a.minute) ?? ((_ = st) == null ? void 0 : _.minute)), p(this, Z, x(this, pt, Ut).call(this)), p(this, V, x(this, tt, Ct).call(this)), p(this, B, x(this, et, xt).call(this)), p(this, gt, x(this, Ot, ye).call(this)), p(this, mt, x(this, Pt, Ee).call(this));
  }
  init({ fromDate: e, toDate: r, currentYear: s, currentMonth: o }) {
    e && p(this, L, e), r && p(this, k, r), s && p(this, Y, s), o && p(this, H, o), p(this, Z, x(this, pt, Ut).call(this)), p(this, V, x(this, tt, Ct).call(this)), p(this, B, x(this, et, xt).call(this));
  }
  setCurrent(e, r) {
    p(this, Y, e), p(this, V, x(this, tt, Ct).call(this)), r && (p(this, H, r), p(this, B, x(this, et, xt).call(this)));
  }
  get years() {
    return v(this, Z);
  }
  get months() {
    return v(this, V);
  }
  get days() {
    return v(this, B);
  }
  get hours() {
    return v(this, gt);
  }
  get minutes() {
    return v(this, mt);
  }
}
L = new WeakMap(), k = new WeakMap(), Y = new WeakMap(), H = new WeakMap(), ht = new WeakMap(), lt = new WeakMap(), ft = new WeakMap(), vt = new WeakMap(), dt = new WeakMap(), Z = new WeakMap(), V = new WeakMap(), B = new WeakMap(), gt = new WeakMap(), mt = new WeakMap(), Dt = new WeakSet(), _e = function() {
  const e = new Date(v(this, L));
  return e.setFullYear(e.getFullYear() + 40), e.setMonth(11), e.setDate(31), e;
}, W = new WeakSet(), Q = function(e, r, s) {
  return [...new Array(r - e + 1)].map((o, a) => ({
    value: a + e,
    text: s(a + e)
  }));
}, pt = new WeakSet(), Ut = function() {
  return x(this, W, Q).call(this, v(this, L).getFullYear(), v(this, k).getFullYear(), v(this, ht));
}, tt = new WeakSet(), Ct = function() {
  const e = v(this, Y) === v(this, L).getFullYear() ? v(this, L).getMonth() + 1 : 1, r = v(this, Y) === v(this, k).getFullYear() ? v(this, k).getMonth() + 1 : 12;
  return x(this, W, Q).call(this, e, r, v(this, lt));
}, et = new WeakSet(), xt = function() {
  const e = v(this, Y) === v(this, L).getFullYear() && v(this, H) === v(this, L).getMonth() + 1 ? v(this, L).getDate() : 1, r = v(this, Y) === v(this, k).getFullYear() && v(this, H) === v(this, k).getMonth() + 1 ? v(this, k).getDate() : new Date(v(this, Y), v(this, H), 0).getDate();
  return x(this, W, Q).call(this, e, r, v(this, ft));
}, Ot = new WeakSet(), ye = function() {
  return x(this, W, Q).call(this, 0, 23, v(this, vt));
}, Pt = new WeakSet(), Ee = function() {
  return x(this, W, Q).call(this, 0, 59, v(this, dt));
};
const rr = 100;
function or({
  onChange: h,
  fromDate: e = new Date(),
  toDate: r,
  initDate: s,
  infinite: o,
  formatters: a,
  className: R
}) {
  const S = s ?? e, _ = "ios-style-date-picker" + (R ? ` ${R}` : ""), u = K({
    currentYear: e.getFullYear(),
    currentMonth: e.getMonth() + 1,
    currentDay: e.getDate(),
    currentHour: e.getHours(),
    currentMinute: e.getMinutes(),
    source: new er({
      fromDate: e,
      toDate: r,
      currentYear: e.getFullYear(),
      currentMonth: e.getMonth() + 1,
      formatters: a
    }),
    onChange: h,
    onChangeTimeout: null
  }).current, y = K(null), D = K(null), P = K(null), N = K(null), rt = K(null);
  return qt(() => {
    u.source.init({
      fromDate: e,
      toDate: r,
      currentYear: u.currentYear,
      currentMonth: u.currentMonth
    });
  }, [e, r]), qt(() => {
    u.onChange = h;
  }, [h]), qt(() => {
    const q = () => {
      u.onChangeTimeout && clearTimeout(u.onChangeTimeout), u.onChangeTimeout = setTimeout(() => {
        u.onChange(
          u.currentYear,
          u.currentMonth,
          u.currentDay,
          u.currentHour,
          u.currentMinute
        ), u.onChangeTimeout = null;
      }, rr);
    }, At = () => {
      u.source.setCurrent(u.currentYear), X.updateSource(u.source.months);
    }, $ = () => {
      u.source.setCurrent(u.currentYear, u.currentMonth), z.updateSource(u.source.days);
    }, C = new ct(y.current, {
      variant: o ? "infinite" : "normal",
      source: u.source.years,
      onChange: (T) => {
        const A = u.currentYear !== T.value;
        u.currentYear = T.value, A && (At(), $(), q());
      }
    }), X = new ct(D.current, {
      variant: o ? "infinite" : "normal",
      source: u.source.months,
      onChange: (T) => {
        const A = u.currentMonth !== T.value;
        u.currentMonth = T.value, A && ($(), q());
      }
    }), z = new ct(P.current, {
      variant: o ? "infinite" : "normal",
      source: u.source.days,
      onChange: (T) => {
        const A = u.currentDay !== T.value;
        u.currentDay = T.value, A && q();
      }
    }), Lt = new ct(N.current, {
      variant: o ? "infinite" : "normal",
      source: u.source.hours,
      onChange: (T) => {
        const A = u.currentHour !== T.value;
        u.currentHour = T.value, A && q();
      }
    }), Mt = new ct(rt.current, {
      variant: o ? "infinite" : "normal",
      source: u.source.minutes,
      onChange: (T) => {
        const A = u.currentMinute !== T.value;
        u.currentMinute = T.value, A && q();
      }
    });
    return setTimeout(() => {
      const T = S.getFullYear(), A = S.getMonth() + 1, _t = S.getDate();
      u.source.setCurrent(T, A), X.updateSource(u.source.months), z.updateSource(u.source.days), C.select(T), X.select(A), z.select(_t);
    }, 0), () => {
      C.destroy(), X.destroy(), z.destroy(), Lt.destroy(), Mt.destroy();
    };
  }, [o]), /* @__PURE__ */ Qe("div", { className: _, children: [
    /* @__PURE__ */ ut("div", { ref: y }),
    /* @__PURE__ */ ut("div", { ref: D }),
    /* @__PURE__ */ ut("div", { ref: P }),
    /* @__PURE__ */ ut("div", { ref: N }),
    /* @__PURE__ */ ut("div", { ref: rt })
  ] });
}
export {
  or as DatePicker
};
//# sourceMappingURL=iosStylePicker.es.js.map
