// ==UserScript==
// @name         lofterscript
// @namespace    npm/vite-plugin-monkey
// @version      1.0.2
// @icon         data:image/x-icon;base64,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AP+UnAD/lJwA/5ScAP+UnAD/lJwA/5ScAP+UnAD/lJwA/5ScAP+UnAD/lJwA/5ScAP+UnADZlJwA9JScAP+UnAD/lJwA/5ScAP+UnAD/lJwA/5ScAP+TmwD/09aV/////v+1uk7/kZkA/6uxNv/6+/T/09eX/5ObAP+UnAD/lJwA/5ScAP+UnAD/lJwA/5ScAP+UnAD/lJwA/5ScAP+UnAD/lJwA/5ScAP+UnAD/lJwA/5ScAPSUnAD/lJwA/5ScAP+UnAD/lJwA/5ScAP+UnAD/lJwA/5ObAP/T1pf//v78/7C2RP+RmQD/rrQ///39+//T15f/k5sA/5ScAP+UnAD/lJwA/5ScAP+UnAD/lJwA/5ScAP+UnAD/lJwA/5ScAP+UnAD/lJwA/5ScAP+UnAD/lJwA/5ScAP+UnAD/lJwA/5ScAP+UnAD/lJwA/5ScAP+UnAD/k5sA/9PWl//+/vz/sbZE/5GZAP+utD///f37/9PXl/+TmwD/lJwA/5ScAP+UnAD/lJwA/5ScAP+UnAD/lJwA/5ScAP+UnAD/lJwA/5ScAP+UnAD/lJwA/5ScAP+UnAD/lJwA9JScAP+UnAD/lJwA/5ScAP+UnAD/lJwA/5ScAP+TmwD/09aX//7+/P+xtkT/kZkA/660P//9/fv/09eX/5ObAP+UnAD/lJwA/5ScAP+UnAD/lJwA/5ScAP+UnAD/lJwA/5ScAP+UnAD/lJwA/5ScAP+UnAD/lJwA/5ScAPSUnADZlJwA/5ScAP+UnAD/lJwA/5ScAP+UnAD/lJwA/5ObAP/T1pf//v78/7G2RP+RmQD/rrQ///39+//T15f/k5sA/5ScAP+UnAD/lJwA/5ScAP+UnAD/lJwA/5ScAP+UnAD/lJwA/5ScAP+UnAD/lJwA/5ScAP+UnAD/lJwA2ZScALCUnAD/lJwA/5ScAP+UnAD/lJwA/5ScAP+UnAD/k5sA/9PWl//+/vz/sbZE/5GZAP+utD///f37/9PXl/+TmwD/lJwA/5ScAP+UnAD/lJwA/5ScAP+UnAD/lJwA/5ScAP+UnAD/lJwA/5ScAP+UnAD/lJwA/5ScAP+UnACwlJwAbJScAPuUnAD/lJwA/5ScAP+UnAD/lJwA/5ScAP+TmwD/09aX//7+/P+xtkT/kZkA/660P//9/fv/09eX/5ObAP+UnAD/lJwA/5Sc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
// @downloadURL  https://skinamarinkadinkadink.github.io/lofterscript.user.js
// @updateURL    https://skinamarinkadinkadink.github.io/lofterscript.user.js
// @match        *://*.lofter.com/lofty*
// @require      https://cdn.jsdelivr.net/npm/preact@10.28.3/dist/preact.min.js
// @connect      lofter.com
// @connect      lf127.net
// @connect      *
// @grant        GM.xmlHttpRequest
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(() => {
  window.stop();
  document.open("text/html", "replace");
  document.write("");
  document.close();
  if (!window.location.href.split('//').pop().startsWith('www.lofter.com/lofty/')) {
    history.replaceState({page: "replaced_page"}, "Browse Lofter", "/lofty/");
  }
})();


(function (preact) {
  'use strict';

  const d$2=new Set;const importCSS = async e=>{d$2.has(e)||(d$2.add(e),(t=>{typeof GM_addStyle=="function"?GM_addStyle(t):(document.head||document.documentElement).appendChild(document.createElement("style")).append(t);})(e));};

  var f$1 = 0;
  function u$1(e2, t2, n, o2, i2, u2) {
    t2 || (t2 = {});
    var a2, c2, p2 = t2;
    if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
    var l2 = { type: e2, props: p2, key: n, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f$1, __i: -1, __u: 0, __source: i2, __self: u2 };
    if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === p2[c2] && (p2[c2] = a2[c2]);
    return preact.options.vnode && preact.options.vnode(l2), l2;
  }
  var t, r, u, i, o = 0, f = [], c$1 = preact.options, e = c$1.__b, a$1 = c$1.__r, v$1 = c$1.diffed, l$1 = c$1.__c, m$1 = c$1.unmount, s$1 = c$1.__;
  function p$1(n, t2) {
    c$1.__h && c$1.__h(r, n, o || t2), o = 0;
    var u2 = r.__H || (r.__H = { __: [], __h: [] });
    return n >= u2.__.length && u2.__.push({}), u2.__[n];
  }
  function d$1(n) {
    return o = 1, h$1(D$1, n);
  }
  function h$1(n, u2, i2) {
    var o2 = p$1(t++, 2);
    if (o2.t = n, !o2.__c && (o2.__ = [D$1(void 0, u2), function(n2) {
      var t2 = o2.__N ? o2.__N[0] : o2.__[0], r2 = o2.t(t2, n2);
      t2 !== r2 && (o2.__N = [r2, o2.__[1]], o2.__c.setState({}));
    }], o2.__c = r, !r.__f)) {
      var f2 = function(n2, t2, r2) {
        if (!o2.__c.__H) return true;
        var u3 = o2.__c.__H.__.filter(function(n3) {
          return !!n3.__c;
        });
        if (u3.every(function(n3) {
          return !n3.__N;
        })) return !c2 || c2.call(this, n2, t2, r2);
        var i3 = o2.__c.props !== n2;
        return u3.forEach(function(n3) {
          if (n3.__N) {
            var t3 = n3.__[0];
            n3.__ = n3.__N, n3.__N = void 0, t3 !== n3.__[0] && (i3 = true);
          }
        }), c2 && c2.call(this, n2, t2, r2) || i3;
      };
      r.__f = true;
      var c2 = r.shouldComponentUpdate, e2 = r.componentWillUpdate;
      r.componentWillUpdate = function(n2, t2, r2) {
        if (this.__e) {
          var u3 = c2;
          c2 = void 0, f2(n2, t2, r2), c2 = u3;
        }
        e2 && e2.call(this, n2, t2, r2);
      }, r.shouldComponentUpdate = f2;
    }
    return o2.__N || o2.__;
  }
  function y$1(n, u2) {
    var i2 = p$1(t++, 3);
    !c$1.__s && C(i2.__H, u2) && (i2.__ = n, i2.u = u2, r.__H.__h.push(i2));
  }
  function A(n) {
    return o = 5, T(function() {
      return { current: n };
    }, []);
  }
  function T(n, r2) {
    var u2 = p$1(t++, 7);
    return C(u2.__H, r2) && (u2.__ = n(), u2.__H = r2, u2.__h = n), u2.__;
  }
  function j() {
    for (var n; n = f.shift(); ) if (n.__P && n.__H) try {
      n.__H.__h.forEach(z), n.__H.__h.forEach(B), n.__H.__h = [];
    } catch (t2) {
      n.__H.__h = [], c$1.__e(t2, n.__v);
    }
  }
  c$1.__b = function(n) {
    r = null, e && e(n);
  }, c$1.__ = function(n, t2) {
    n && t2.__k && t2.__k.__m && (n.__m = t2.__k.__m), s$1 && s$1(n, t2);
  }, c$1.__r = function(n) {
    a$1 && a$1(n), t = 0;
    var i2 = (r = n.__c).__H;
    i2 && (u === r ? (i2.__h = [], r.__h = [], i2.__.forEach(function(n2) {
      n2.__N && (n2.__ = n2.__N), n2.u = n2.__N = void 0;
    })) : (i2.__h.forEach(z), i2.__h.forEach(B), i2.__h = [], t = 0)), u = r;
  }, c$1.diffed = function(n) {
    v$1 && v$1(n);
    var t2 = n.__c;
    t2 && t2.__H && (t2.__H.__h.length && (1 !== f.push(t2) && i === c$1.requestAnimationFrame || ((i = c$1.requestAnimationFrame) || w$1)(j)), t2.__H.__.forEach(function(n2) {
      n2.u && (n2.__H = n2.u), n2.u = void 0;
    })), u = r = null;
  }, c$1.__c = function(n, t2) {
    t2.some(function(n2) {
      try {
        n2.__h.forEach(z), n2.__h = n2.__h.filter(function(n3) {
          return !n3.__ || B(n3);
        });
      } catch (r2) {
        t2.some(function(n3) {
          n3.__h && (n3.__h = []);
        }), t2 = [], c$1.__e(r2, n2.__v);
      }
    }), l$1 && l$1(n, t2);
  }, c$1.unmount = function(n) {
    m$1 && m$1(n);
    var t2, r2 = n.__c;
    r2 && r2.__H && (r2.__H.__.forEach(function(n2) {
      try {
        z(n2);
      } catch (n3) {
        t2 = n3;
      }
    }), r2.__H = void 0, t2 && c$1.__e(t2, r2.__v));
  };
  var k$1 = "function" == typeof requestAnimationFrame;
  function w$1(n) {
    var t2, r2 = function() {
      clearTimeout(u2), k$1 && cancelAnimationFrame(t2), setTimeout(n);
    }, u2 = setTimeout(r2, 35);
    k$1 && (t2 = requestAnimationFrame(r2));
  }
  function z(n) {
    var t2 = r, u2 = n.__c;
    "function" == typeof u2 && (n.__c = void 0, u2()), r = t2;
  }
  function B(n) {
    var t2 = r;
    n.__c = n.__(), r = t2;
  }
  function C(n, t2) {
    return !n || n.length !== t2.length || t2.some(function(t3, r2) {
      return t3 !== n[r2];
    });
  }
  function D$1(n, t2) {
    return "function" == typeof t2 ? t2(n) : t2;
  }
  var a = {};
  function c(n, t2) {
    for (var r2 in t2) n[r2] = t2[r2];
    return n;
  }
  function s(n, t2, r2) {
    var i2, o2 = /(?:\?([^#]*))?(#.*)?$/, e2 = n.match(o2), u2 = {};
    if (e2 && e2[1]) for (var f2 = e2[1].split("&"), c2 = 0; c2 < f2.length; c2++) {
      var s2 = f2[c2].split("=");
      u2[decodeURIComponent(s2[0])] = decodeURIComponent(s2.slice(1).join("="));
    }
    n = d(n.replace(o2, "")), t2 = d(t2 || "");
    for (var h2 = Math.max(n.length, t2.length), v2 = 0; v2 < h2; v2++) if (t2[v2] && ":" === t2[v2].charAt(0)) {
      var l2 = t2[v2].replace(/(^:|[+*?]+$)/g, ""), p2 = (t2[v2].match(/[+*?]+$/) || a)[0] || "", m2 = ~p2.indexOf("+"), y2 = ~p2.indexOf("*"), U2 = n[v2] || "";
      if (!U2 && !y2 && (p2.indexOf("?") < 0 || m2)) {
        i2 = false;
        break;
      }
      if (u2[l2] = decodeURIComponent(U2), m2 || y2) {
        u2[l2] = n.slice(v2).map(decodeURIComponent).join("/");
        break;
      }
    } else if (t2[v2] !== n[v2]) {
      i2 = false;
      break;
    }
    return (true === r2.default || false !== i2) && u2;
  }
  function h(n, t2) {
    return n.rank < t2.rank ? 1 : n.rank > t2.rank ? -1 : n.index - t2.index;
  }
  function v(n, t2) {
    return n.index = t2, n.rank = (function(n2) {
      return n2.props.default ? 0 : d(n2.props.path).map(l).join("");
    })(n), n.props;
  }
  function d(n) {
    return n.replace(/(^\/+|\/+$)/g, "").split("/");
  }
  function l(n) {
    return ":" == n.charAt(0) ? 1 + "*+?".indexOf(n.charAt(n.length - 1)) || 4 : 5;
  }
  var p = {}, m = [], y = [], U = null, g = { url: R() }, k = preact.createContext(g);
  function R() {
    var n;
    return "" + ((n = U && U.location ? U.location : U && U.getCurrentLocation ? U.getCurrentLocation() : "undefined" != typeof location ? location : p).pathname || "") + (n.search || "");
  }
  function $(n, t2) {
    return void 0 === t2 && (t2 = false), "string" != typeof n && n.url && (t2 = n.replace, n = n.url), (function(n2) {
      for (var t3 = m.length; t3--; ) if (m[t3].canRoute(n2)) return true;
      return false;
    })(n) && (function(n2, t3) {
      void 0 === t3 && (t3 = "push"), U && U[t3] ? U[t3](n2) : "undefined" != typeof history && history[t3 + "State"] && history[t3 + "State"](null, null, n2);
    })(n, t2 ? "replace" : "push"), I(n);
  }
  function I(n) {
    for (var t2 = false, r2 = 0; r2 < m.length; r2++) m[r2].routeTo(n) && (t2 = true);
    return t2;
  }
  function M(n) {
    if (n && n.getAttribute) {
      var t2 = n.getAttribute("href"), r2 = n.getAttribute("target");
      if (t2 && t2.match(/^\//g) && (!r2 || r2.match(/^_?self$/i))) return $(t2);
    }
  }
  function b(n) {
    return n.stopImmediatePropagation && n.stopImmediatePropagation(), n.stopPropagation && n.stopPropagation(), n.preventDefault(), false;
  }
  function W(n) {
    if (!(n.ctrlKey || n.metaKey || n.altKey || n.shiftKey || n.button)) {
      var t2 = n.target;
      do {
        if ("a" === t2.localName && t2.getAttribute("href")) {
          if (t2.hasAttribute("data-native") || t2.hasAttribute("native")) return;
          if (M(t2)) return b(n);
        }
      } while (t2 = t2.parentNode);
    }
  }
  var w = false;
  function D(n) {
    n.history && (U = n.history), this.state = { url: n.url || R() };
  }
  c(D.prototype = new preact.Component(), { shouldComponentUpdate: function(n) {
    return true !== n.static || n.url !== this.props.url || n.onChange !== this.props.onChange;
  }, canRoute: function(n) {
    var t2 = preact.toChildArray(this.props.children);
    return void 0 !== this.g(t2, n);
  }, routeTo: function(n) {
    this.setState({ url: n });
    var t2 = this.canRoute(n);
    return this.p || this.forceUpdate(), t2;
  }, componentWillMount: function() {
    this.p = true;
  }, componentDidMount: function() {
    var n = this;
    w || (w = true, U || addEventListener("popstate", function() {
      I(R());
    }), addEventListener("click", W)), m.push(this), U && (this.u = U.listen(function(t2) {
      var r2 = t2.location || t2;
      n.routeTo("" + (r2.pathname || "") + (r2.search || ""));
    })), this.p = false;
  }, componentWillUnmount: function() {
    "function" == typeof this.u && this.u(), m.splice(m.indexOf(this), 1);
  }, componentWillUpdate: function() {
    this.p = true;
  }, componentDidUpdate: function() {
    this.p = false;
  }, g: function(n, t2) {
    n = n.filter(v).sort(h);
    for (var r2 = 0; r2 < n.length; r2++) {
      var i2 = n[r2], o2 = s(t2, i2.props.path, i2.props);
      if (o2) return [i2, o2];
    }
  }, render: function(n, t2) {
    var e2, u2, f2 = n.onChange, a2 = t2.url, s2 = this.c, h2 = this.g(preact.toChildArray(n.children), a2);
    if (h2 && (u2 = preact.cloneElement(h2[0], c(c({ url: a2, matches: e2 = h2[1] }, e2), { key: void 0, ref: void 0 }))), a2 !== (s2 && s2.url)) {
      c(g, s2 = this.c = { url: a2, previous: s2 && s2.url, current: u2, path: u2 ? u2.props.path : null, matches: e2 }), s2.router = this, s2.active = u2 ? [u2] : [];
      for (var v2 = y.length; v2--; ) y[v2]({});
      "function" == typeof f2 && f2(s2);
    }
    return preact.h(k.Provider, { value: s2 }, u2);
  } });
  function _extends() {
    return _extends = Object.assign ? Object.assign.bind() : function(n) {
      for (var e2 = 1; e2 < arguments.length; e2++) {
        var t2 = arguments[e2];
        for (var r2 in t2) ({}).hasOwnProperty.call(t2, r2) && (n[r2] = t2[r2]);
      }
      return n;
    }, _extends.apply(null, arguments);
  }
  var Action;
  (function(Action2) {
    Action2["Pop"] = "POP";
    Action2["Push"] = "PUSH";
    Action2["Replace"] = "REPLACE";
  })(Action || (Action = {}));
  var readOnly = function(obj) {
    return obj;
  };
  var BeforeUnloadEventType = "beforeunload";
  var HashChangeEventType = "hashchange";
  var PopStateEventType = "popstate";
  function createHashHistory(options2) {
    if (options2 === void 0) {
      options2 = {};
    }
    var _options2 = options2, _options2$window = _options2.window, window2 = _options2$window === void 0 ? document.defaultView : _options2$window;
    var globalHistory = window2.history;
    function getIndexAndLocation() {
      var _parsePath = parsePath(window2.location.hash.substr(1)), _parsePath$pathname = _parsePath.pathname, pathname = _parsePath$pathname === void 0 ? "/" : _parsePath$pathname, _parsePath$search = _parsePath.search, search = _parsePath$search === void 0 ? "" : _parsePath$search, _parsePath$hash = _parsePath.hash, hash = _parsePath$hash === void 0 ? "" : _parsePath$hash;
      var state = globalHistory.state || {};
      return [state.idx, readOnly({
        pathname,
        search,
        hash,
        state: state.usr || null,
        key: state.key || "default"
      })];
    }
    var blockedPopTx = null;
    function handlePop() {
      if (blockedPopTx) {
        blockers.call(blockedPopTx);
        blockedPopTx = null;
      } else {
        var nextAction = Action.Pop;
        var _getIndexAndLocation4 = getIndexAndLocation(), nextIndex = _getIndexAndLocation4[0], nextLocation = _getIndexAndLocation4[1];
        if (blockers.length) {
          if (nextIndex != null) {
            var delta = index - nextIndex;
            if (delta) {
              blockedPopTx = {
                action: nextAction,
                location: nextLocation,
                retry: function retry() {
                  go(delta * -1);
                }
              };
              go(delta);
            }
          }
        } else {
          applyTx(nextAction);
        }
      }
    }
    window2.addEventListener(PopStateEventType, handlePop);
    window2.addEventListener(HashChangeEventType, function() {
      var _getIndexAndLocation5 = getIndexAndLocation(), nextLocation = _getIndexAndLocation5[1];
      if (createPath(nextLocation) !== createPath(location2)) {
        handlePop();
      }
    });
    var action = Action.Pop;
    var _getIndexAndLocation6 = getIndexAndLocation(), index = _getIndexAndLocation6[0], location2 = _getIndexAndLocation6[1];
    var listeners = createEvents();
    var blockers = createEvents();
    if (index == null) {
      index = 0;
      globalHistory.replaceState(_extends({}, globalHistory.state, {
        idx: index
      }), "");
    }
    function getBaseHref() {
      var base = document.querySelector("base");
      var href = "";
      if (base && base.getAttribute("href")) {
        var url = window2.location.href;
        var hashIndex = url.indexOf("#");
        href = hashIndex === -1 ? url : url.slice(0, hashIndex);
      }
      return href;
    }
    function createHref(to) {
      return getBaseHref() + "#" + (typeof to === "string" ? to : createPath(to));
    }
    function getNextLocation(to, state) {
      if (state === void 0) {
        state = null;
      }
      return readOnly(_extends({
        pathname: location2.pathname,
        hash: "",
        search: ""
      }, typeof to === "string" ? parsePath(to) : to, {
        state,
        key: createKey()
      }));
    }
    function getHistoryStateAndUrl(nextLocation, index2) {
      return [{
        usr: nextLocation.state,
        key: nextLocation.key,
        idx: index2
      }, createHref(nextLocation)];
    }
    function allowTx(action2, location22, retry) {
      return !blockers.length || (blockers.call({
        action: action2,
        location: location22,
        retry
      }), false);
    }
    function applyTx(nextAction) {
      action = nextAction;
      var _getIndexAndLocation7 = getIndexAndLocation();
      index = _getIndexAndLocation7[0];
      location2 = _getIndexAndLocation7[1];
      listeners.call({
        action,
        location: location2
      });
    }
    function push(to, state) {
      var nextAction = Action.Push;
      var nextLocation = getNextLocation(to, state);
      function retry() {
        push(to, state);
      }
      if (allowTx(nextAction, nextLocation, retry)) {
        var _getHistoryStateAndUr3 = getHistoryStateAndUrl(nextLocation, index + 1), historyState = _getHistoryStateAndUr3[0], url = _getHistoryStateAndUr3[1];
        try {
          globalHistory.pushState(historyState, "", url);
        } catch (error) {
          window2.location.assign(url);
        }
        applyTx(nextAction);
      }
    }
    function replace(to, state) {
      var nextAction = Action.Replace;
      var nextLocation = getNextLocation(to, state);
      function retry() {
        replace(to, state);
      }
      if (allowTx(nextAction, nextLocation, retry)) {
        var _getHistoryStateAndUr4 = getHistoryStateAndUrl(nextLocation, index), historyState = _getHistoryStateAndUr4[0], url = _getHistoryStateAndUr4[1];
        globalHistory.replaceState(historyState, "", url);
        applyTx(nextAction);
      }
    }
    function go(delta) {
      globalHistory.go(delta);
    }
    var history2 = {
      get action() {
        return action;
      },
      get location() {
        return location2;
      },
      createHref,
      push,
      replace,
      go,
      back: function back() {
        go(-1);
      },
      forward: function forward() {
        go(1);
      },
      listen: function listen(listener) {
        return listeners.push(listener);
      },
      block: function block(blocker) {
        var unblock = blockers.push(blocker);
        if (blockers.length === 1) {
          window2.addEventListener(BeforeUnloadEventType, promptBeforeUnload);
        }
        return function() {
          unblock();
          if (!blockers.length) {
            window2.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);
          }
        };
      }
    };
    return history2;
  }
  function promptBeforeUnload(event) {
    event.preventDefault();
    event.returnValue = "";
  }
  function createEvents() {
    var handlers = [];
    return {
      get length() {
        return handlers.length;
      },
      push: function push(fn) {
        handlers.push(fn);
        return function() {
          handlers = handlers.filter(function(handler) {
            return handler !== fn;
          });
        };
      },
      call: function call(arg) {
        handlers.forEach(function(fn) {
          return fn && fn(arg);
        });
      }
    };
  }
  function createKey() {
    return Math.random().toString(36).substr(2, 8);
  }
  function createPath(_ref) {
    var _ref$pathname = _ref.pathname, pathname = _ref$pathname === void 0 ? "/" : _ref$pathname, _ref$search = _ref.search, search = _ref$search === void 0 ? "" : _ref$search, _ref$hash = _ref.hash, hash = _ref$hash === void 0 ? "" : _ref$hash;
    if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
    if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
    return pathname;
  }
  function parsePath(path) {
    var parsedPath = {};
    if (path) {
      var hashIndex = path.indexOf("#");
      if (hashIndex >= 0) {
        parsedPath.hash = path.substr(hashIndex);
        path = path.substr(0, hashIndex);
      }
      var searchIndex = path.indexOf("?");
      if (searchIndex >= 0) {
        parsedPath.search = path.substr(searchIndex);
        path = path.substr(0, searchIndex);
      }
      if (path) {
        parsedPath.pathname = path;
      }
    }
    return parsedPath;
  }
  const gmFetch = (details) => {
    return new Promise((resolve, reject) => {
      GM.xmlHttpRequest({
        ...details,
        onload: (response) => {
          resolve(response);
        },
        onerror: (error) => {
          reject(error);
        },
        ontimeout: () => {
          reject(new Error("Request timed out"));
        }
      });
    });
  };
  const tagSearch = async (tag, offset) => {
    const url = new URL("https://api.lofter.com/oldapi/tagPosts.api");
    url.searchParams.append("product", "lofter-android-6.13.0");
    url.searchParams.append("method", "newTagSearch");
    url.searchParams.append("offset", offset.toString());
    url.searchParams.append("limit", "12");
    url.searchParams.append("firstpermalink", "null");
    url.searchParams.append("tag", tag);
    url.searchParams.append("type", "new");
    const fetchdetails = {
      method: "POST",
      url: url.toString()
    };
    const response = await gmFetch(fetchdetails);
    return JSON.parse(response.responseText);
  };
  const getPost = async (url) => {
    const fetchdetails = {
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
      },
      url
    };
    const response = await gmFetch(fetchdetails);
    const result = response.responseText;
    const data = result.match(`<script>window.__initialize_data__ = (.*?)<\/script>`);
    const parsedData = JSON.parse(data[1]);
    return parsedData;
  };
  const getUserPics = async (lofterusername) => {
    console.log("Attempting GM.xmlHttpRequest to Lofter...");
    const firstFetch = async (username) => {
      try {
        const response = await gmFetch({
          method: "GET",
          url: "https://www.lofter.com/front/blog/home-page/" + username,
          headers: {
            "Cookie": "usertrack=Clhv9Gk9+Ma2y2t1h3zRAg==",
            "User-Agent": navigator.userAgent,
            "Referer": "https://www.lofter.com/"
          }
        });
        if (response.status === 200) {
          console.log("Success! Response length:", response.responseText.length);
          const html = response.responseText;
          const matches = [...html.matchAll(/<script>window\.__initialize_data__ =([\s\S]*?)<\/script>/g)];
          if (matches.length > 0) {
            const parsed = JSON.parse(matches[0][1].trim());
            const blogId = parsed.blogData.data.blogInfo.blogId;
            const blogName = parsed.blogName;
            return { parsed, blogId, blogName };
          } else {
            console.warn("Could not find __initialize_data__ in response.");
          }
        } else {
          console.log("Request finished, but status was: " + response.status);
        }
      } catch (err) {
        console.error("GM.xmlHttpRequest Error: ", err);
        throw err;
      }
    };
    const blogstuff = await firstFetch(lofterusername);
    console.log(blogstuff);
    const secondFetch = async (blogstuff2) => {
      try {
        const url = "https://api.lofter.com/v2.0/blogHomePage.api?product=lofter-android-6.9.2&targetblogid=" + blogstuff2.blogId + "&supportposttypes=2&blogdomain=" + blogstuff2.blogName + ".lofter.com&offset=0&method=getPostLists&postdigestnew=1&returnData=1&limit=500&checkpwd=1&needgetpoststat=1";
        console.log(url);
        const response = await gmFetch({
          method: "POST",
          url,
          headers: {
            "Cookie": "usertrack=Clhv9Gk9+Ma2y2t1h3zRAg==",
            "User-Agent": "lofter-android-6.13.0",
            "Referer": "https://www.lofter.com/"
          }
        });
        if (response.status === 200) {
          const parsed = JSON.parse(response.responseText);
          console.log(parsed);
          const posts = parsed.response.posts.filter((x) => x).map((x) => x.post);
          const allPostItems = [];
          for (const post of posts) {
            const photoLinks = JSON.parse(post.photoLinks);
            const postItems = photoLinks.map((photo) => ({ small: photo.small.replace("164y164", "164z164") + (!!photo.small.match(/\?imageView|\.gif/) ? "" : "?imageView&thumbnail=164z164&enlarge=1&quality=90&type=jpg"), big: photo.raw?.includes("netease.com") ? photo.orign.split("?imageView").at(0) : photo.raw, page: post.blogPageUrl, published: post.publishTime }));
            allPostItems.push(...postItems);
          }
          return allPostItems;
        }
      } catch (error) {
        console.error(error);
        throw error;
      }
    };
    const secondFetchResult = await secondFetch(blogstuff);
    return secondFetchResult;
  };
  const downloadImage = async (imageurl, post_author, post_id) => {
    const downloadurl = imageurl.split("?imageView")[0];
    try {
      const response = await gmFetch({
        method: "GET",
        url: downloadurl,
        responseType: "blob",
        headers: {
          "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "Referer": "https://www.lofter.com/"
        }
      });
      const blob = new Blob([response.response], {
        type: response.responseHeaders.match(/content-type:\s*([^\r\n]+)/i)?.[1] || "image/jpeg"
      });
      const blobUrl = URL.createObjectURL(blob);
      const downloadLink = document.createElement("a");
      downloadLink.href = blobUrl;
      downloadLink.download = post_author + " lofter " + post_id + "." + downloadurl.split(".").pop();
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      setTimeout(() => URL.revokeObjectURL(blobUrl), 100);
    } catch (error) {
      console.error("Failed to download image:", downloadurl, error);
      alert("Failed to download image. Please try again.");
    }
  };
  const formattimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const options2 = {
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    return new Intl.DateTimeFormat("en-US", options2).format(date);
  };
  const ScrollingImage = ({ src, alt = "", onClick, children }) => {
    const containerRef = A(null);
    const imgRef = A(null);
    const handleMouseMove = (e2) => {
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = e2.clientX - left;
      const y2 = e2.clientY - top;
      const xPercent = x / width * 100;
      const yPercent = y2 / height * 100;
      imgRef.current.style.objectPosition = `${xPercent}% ${yPercent}%`;
    };
    const handleMouseLeave = () => {
      imgRef.current.style.objectPosition = "50% 50%";
    };
    return u$1(
      "div",
      {
        ref: containerRef,
        class: "aspect-[4/3] w-full overflow-hidden border-b border-gray-200 rounded-t-sm bg-gray-100 relative group cursor-pointer",
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        children: [
u$1(
            "img",
            {
              ref: imgRef,
              src,
              alt,
              loading: "lazy",
              class: "block w-full h-full object-cover pointer-events-none transition-all duration-500 ease-in-out group-hover:transition-none",
              style: { objectPosition: "50% 50%" }
            }
          ),
u$1(
            "div",
            {
              class: "absolute inset-0 z-10",
              onClick
            }
          ),
          children
        ]
      }
    );
  };
  function assign(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        target[key] = source[key];
      }
    }
    return target;
  }
  var defaultConverter = {
    read: function(value) {
      if (value[0] === '"') {
        value = value.slice(1, -1);
      }
      return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
    },
    write: function(value) {
      return encodeURIComponent(value).replace(
        /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
        decodeURIComponent
      );
    }
  };
  function init(converter, defaultAttributes) {
    function set(name, value, attributes) {
      if (typeof document === "undefined") {
        return;
      }
      attributes = assign({}, defaultAttributes, attributes);
      if (typeof attributes.expires === "number") {
        attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
      }
      if (attributes.expires) {
        attributes.expires = attributes.expires.toUTCString();
      }
      name = encodeURIComponent(name).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      var stringifiedAttributes = "";
      for (var attributeName in attributes) {
        if (!attributes[attributeName]) {
          continue;
        }
        stringifiedAttributes += "; " + attributeName;
        if (attributes[attributeName] === true) {
          continue;
        }
        stringifiedAttributes += "=" + attributes[attributeName].split(";")[0];
      }
      return document.cookie = name + "=" + converter.write(value, name) + stringifiedAttributes;
    }
    function get(name) {
      if (typeof document === "undefined" || arguments.length && !name) {
        return;
      }
      var cookies = document.cookie ? document.cookie.split("; ") : [];
      var jar = {};
      for (var i2 = 0; i2 < cookies.length; i2++) {
        var parts = cookies[i2].split("=");
        var value = parts.slice(1).join("=");
        try {
          var found = decodeURIComponent(parts[0]);
          jar[found] = converter.read(value, found);
          if (name === found) {
            break;
          }
        } catch (e2) {
        }
      }
      return name ? jar[name] : jar;
    }
    return Object.create(
      {
        set,
        get,
        remove: function(name, attributes) {
          set(
            name,
            "",
            assign({}, attributes, {
              expires: -1
            })
          );
        },
        withAttributes: function(attributes) {
          return init(this.converter, assign({}, this.attributes, attributes));
        },
        withConverter: function(converter2) {
          return init(assign({}, this.converter, converter2), this.attributes);
        }
      },
      {
        attributes: { value: Object.freeze(defaultAttributes) },
        converter: { value: Object.freeze(converter) }
      }
    );
  }
  var api = init(defaultConverter, { path: "/" });
  const ResultCard$1 = ({ permalink, src, title, digest, publishtime, count, tagList }) => {
    const isEmpty = !permalink;
    if (isEmpty) {
      return u$1("article", { class: "flex flex-col gap-3 animate-fade-in", children: [
u$1("div", { class: "flex flex-col border-2 border-dashed border-gray-300 bg-white rounded-sm min-h-[200px]", children: [
u$1("div", { class: "aspect-[4/3] w-full border-b border-gray-200 rounded-t-sm bg-white p-4 flex flex-col justify-center items-center text-gray-400", children: u$1("span", { class: "text-sm font-semibold", children: "No Result" }) }),
u$1("div", { class: "p-4", children: u$1("div", { class: "flex justify-between items-baseline", children: [
u$1("span", { class: "text-xs uppercase text-gray-400", children: "—" }),
u$1("span", { class: "text-xs text-gray-400", children: "—" })
          ] }) })
        ] }),
u$1("div", { class: "flex flex-wrap gap-2 pt-1", children: u$1("span", { class: "text-[11px] font-semibold px-2 py-1 rounded-sm invisible", children: "placeholder" }) })
      ] });
    }
    return u$1("article", { class: "flex flex-col gap-3 animate-fade-in", children: [
u$1(
        "a",
        {
          href: "#/post/" + permalink,
          class: "flex flex-col block border border-gray-300 bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow duration-200 group",
          children: count === 0 ? u$1(preact.Fragment, { children: [
u$1("div", { class: "aspect-[4/3] w-full border-b border-gray-200 rounded-t-sm bg-white p-4 flex flex-col overflow-hidden", children: [
u$1("h3", { class: "text-lg font-semibold text-gray-800 mb-2 group-hover:text-gray-600 transition-colors", children: title || "Untitled Post" }),
u$1("p", { class: "text-sm text-gray-600 line-clamp-4", children: digest || "No description available" })
            ] }),
u$1("div", { class: "p-4", children: u$1("div", { class: "flex justify-between items-baseline", children: [
u$1("time", { class: "text-xs font-semibold uppercase text-gray-500", children: publishtime }),
u$1("span", { class: "text-xs text-gray-500", children: "Text post" })
            ] }) })
          ] }) : u$1(preact.Fragment, { children: [
u$1(ScrollingImage, { src, alt: title, children: u$1("div", { class: "absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20", children: u$1("span", { class: "text-white text-sm font-semibold", children: "View post" }) }) }),
u$1("div", { class: "p-4", children: u$1("div", { class: "flex justify-between items-baseline", children: [
u$1("time", { class: "text-xs font-semibold uppercase text-gray-500", children: publishtime }),
u$1("span", { class: "text-xs text-gray-500", children: [
                count,
                " pics"
              ] })
            ] }) })
          ] })
        }
      ),
u$1("div", { class: "flex flex-wrap gap-2 pt-1", children: tagList.map((tag) => u$1(
        "a",
        {
          href: `#/search/${tag}/0`,
          class: "text-[11px] font-semibold text-white bg-gray-700 px-2 py-1 rounded-sm hover:bg-gray-800 transition",
          children: tag
        }
      )) })
    ] });
  };
  const getPostImage = (photoLinks) => {
    const fallback = "https://placehold.co/600x400/EEE/31343C?text=No+Image";
    if (!photoLinks) return { src: fallback, count: 0 };
    try {
      const parsed = JSON.parse(photoLinks);
      if (!parsed || parsed.length === 0) return { src: fallback, count: 0 };
      const firstImg = parsed[0]?.small || "";
      const src = firstImg ? firstImg.replace("164y164", "164z164") : fallback;
      return { src, count: parsed.length };
    } catch (error) {
      return { src: fallback, count: 0 };
    }
  };
  function SearchPage({ tag: urlTag, offset: urlOffset }) {
    const [inputTag, setInputTag] = d$1(urlTag || "");
    const [inputOffset, setInputOffset] = d$1(urlOffset || 0);
    const [results, setResults] = d$1([]);
    const [loading, setLoading] = d$1(false);
    const [error, setError] = d$1(null);
    const MAX_OFFSET = 1e3;
    y$1(() => {
      if (urlTag) {
        setInputTag(urlTag);
        setInputOffset(parseInt(urlOffset) || 0);
        api.set("lastSearch", urlTag + `/${parseInt(urlOffset) || 0}`);
        performSearch(urlTag, parseInt(urlOffset) || 0);
      } else {
        setResults([]);
      }
    }, [urlTag, urlOffset]);
    const performSearch = async (tagToSearch, offsetToSearch) => {
      if (!tagToSearch.trim()) {
        setError("Please enter a tag to search");
        return;
      }
      setLoading(true);
      setError(null);
      try {
        const response = await tagSearch(tagToSearch, offsetToSearch);
        if (response && response.response && response.response.items) {
          const posts = response.response.items.map((item) => {
            if (!item) return { permalink: null, src: null, title: null, digest: null, publishtime: -1, count: -1, tagList: null };
            console.log(item);
            const { src, count } = getPostImage(item.post.photoLinks);
            const title = item.post.title ? item.post.title : "";
            const digest = item.post.digest || "";
            const permalink = item.post.permalink;
            const publishtime = formattimestamp(item.post.publishTime);
            return {
              permalink,
              src,
              title,
              digest,
              publishtime,
              count,
              tagList: item.post.tagList || []
            };
          });
          setResults(posts);
        } else {
          setResults([]);
        }
      } catch (err) {
        setError("Failed to fetch results: " + err.message);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };
    const handleSubmit = (e2) => {
      e2.preventDefault();
      $(`/search/${inputTag}/${inputOffset}`);
    };
    const handlePrev = () => {
      const currentOffset = parseInt(urlOffset) || 0;
      const newOffset = Math.max(0, currentOffset - 12);
      $(`/search/${urlTag}/${newOffset}`);
    };
    const handleNext = () => {
      const currentOffset = parseInt(urlOffset) || 0;
      const newOffset = Math.min(MAX_OFFSET, currentOffset + 12);
      $(`/search/${urlTag}/${newOffset}`);
    };
    y$1(() => {
      const handleKeyDown = (e2) => {
        if (e2.target.tagName === "INPUT" || e2.target.tagName === "TEXTAREA") {
          return;
        }
        if (e2.key === "ArrowLeft") {
          const currentOffset = parseInt(urlOffset) || 0;
          if (urlTag && currentOffset > 0 && !loading) {
            handlePrev();
          }
        } else if (e2.key === "ArrowRight") {
          const currentOffset = parseInt(urlOffset) || 0;
          if (urlTag && currentOffset < MAX_OFFSET && !loading) {
            handleNext();
          }
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, [urlTag, urlOffset, loading]);
    const currentOffsetInt = parseInt(urlOffset) || 0;
    return u$1(preact.Fragment, { children: [
u$1("header", { class: "bg-white border-b border-gray-300 shadow-sm sticky top-0 z-50 mb-8", children: u$1("div", { class: "max-w-7xl mx-auto px-4 py-3 sm:px-8", children: u$1(
        "form",
        {
          class: "flex flex-col sm:flex-row gap-4 items-center justify-between",
          id: "search-form",
          onSubmit: handleSubmit,
          children: [
u$1("div", { class: "flex flex-col sm:flex-row w-full sm:w-auto gap-2 items-center", children: [
u$1(
                "input",
                {
                  type: "text",
                  name: "tag",
                  placeholder: "Tag...",
                  required: true,
                  value: inputTag,
                  onInput: (e2) => setInputTag(e2.target.value),
                  class: "w-full sm:w-48 px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm text-gray-700 bg-gray-50"
                }
              ),
u$1("div", { class: "flex w-full sm:w-auto gap-2", children: [
u$1(
                  "input",
                  {
                    type: "number",
                    name: "offset",
                    placeholder: "Offset",
                    min: "0",
                    max: MAX_OFFSET,
                    value: inputOffset,
                    onInput: (e2) => setInputOffset(parseInt(e2.target.value) || 0),
                    class: "w-20 px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm text-gray-700 text-center bg-gray-50"
                  }
                ),
u$1(
                  "button",
                  {
                    type: "submit",
                    disabled: loading,
                    class: "flex-1 sm:flex-none px-5 py-2 bg-gray-800 text-white text-sm font-semibold rounded-sm hover:bg-gray-700 transition-colors disabled:opacity-50",
                    id: "search-btn",
                    children: loading ? "Searching..." : "Search"
                  }
                )
              ] })
            ] }),
u$1("div", { class: "flex gap-2 w-full sm:w-auto justify-center sm:justify-end", children: [
u$1(
                "button",
                {
                  type: "button",
                  id: "searchprev",
                  onClick: handlePrev,
                  disabled: loading || !urlTag || currentOffsetInt === 0,
                  class: "px-3 py-1.5 border border-gray-300 bg-white text-gray-600 text-xs font-semibold uppercase rounded-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed",
                  children: "Prev"
                }
              ),
u$1(
                "button",
                {
                  type: "button",
                  id: "searchnext",
                  onClick: handleNext,
                  disabled: loading || !urlTag || currentOffsetInt >= MAX_OFFSET,
                  class: "px-3 py-1.5 border border-gray-300 bg-white text-gray-600 text-xs font-semibold uppercase rounded-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed",
                  children: "Next"
                }
              )
            ] })
          ]
        }
      ) }) }),
u$1("div", { class: "px-8 pb-8", children: [
        error && u$1("div", { class: "max-w-7xl mx-auto mb-4 p-4 bg-red-50 border border-red-200 rounded-sm text-red-700 text-sm", children: error }),
u$1(
          "div",
          {
            class: "max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8",
            id: "results-grid",
            children: loading ? u$1("div", { class: "col-span-full text-center py-12 text-gray-500", children: "Loading..." }) : results.length > 0 ? results.map((result) => u$1(
              ResultCard$1,
              {
                permalink: result.permalink,
                src: result.src,
                title: result.title,
                digest: result.digest,
                publishtime: result.publishtime,
                count: result.count,
                tagList: result.tagList
              },
              result.permalink
            )) : u$1("div", { class: "col-span-full text-center py-12 text-gray-500", children: urlTag ? "No results found. Try a different search." : "Enter a tag to search" })
          }
        )
      ] })
    ] });
  }
  const makePost = (post) => {
    const post_id = post.permalink;
    const post_title = post.postData.data.postData.postView.title;
    const post_date = post.postData.data.postData.postView.publishTime;
    const post_author = post.postData.data.blogInfo.blogName;
    const post_tags = post.postData.data.postData.postView.tagList;
    const post_body = post.postData.data.postData.postView.digest;
    const post_images = post.postData.data.postData.postView.photoPostView?.photoLinks || [];
    const makeImage = (image, post_author2, post_id2) => u$1("div", { class: "w-full relative group cursor-pointer", children: [
u$1(
        "img",
        {
          src: image.orign.replace(/quality=\d\d/g, "quality=20"),
          class: "w-full h-auto block",
          loading: "lazy",
          onClick: () => downloadImage(image.orign, post_author2, post_id2)
        }
      ),
u$1("div", { class: "absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none", children: u$1(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          class: "w-10 h-10 text-white",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          "stroke-width": "2",
          children: u$1(
            "path",
            {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
            }
          )
        }
      ) })
    ] });
    return u$1("article", { class: "bg-white border border-gray-300 rounded-sm shadow-sm overflow-hidden animate-fade-in", children: [
u$1("div", { class: "p-6 sm:p-8 border-b border-gray-200", children: [
u$1("h1", { class: "text-2xl sm:text-3xl font-bold text-gray-900 mb-3 leading-tight", children: post_title }),
u$1("div", { class: "flex flex-wrap items-center gap-x-4 gap-y-2 text-sm", children: [
u$1("div", { class: "flex items-center gap-2", children: u$1(
            "a",
            {
              href: "#/timeline/" + post_author,
              class: "font-bold text-gray-800 hover:underline cursor-pointer",
              children: post_author
            }
          ) }),
u$1("span", { class: "text-gray-300", children: "|" }),
u$1("time", { class: "text-xs font-semibold uppercase text-gray-500", children: formattimestamp(post_date) })
        ] })
      ] }),
u$1("div", { class: "flex flex-col bg-gray-100 border-b border-gray-200", children: post_images.map((image) => makeImage(image, post_author, post_id)) }),
u$1("div", { class: "p-6 sm:p-8", children: [
u$1("div", { class: "prose prose-gray max-w-none mb-8 text-gray-800 text-base leading-relaxed whitespace-pre-line", dangerouslySetInnerHTML: { __html: post_body } }),
u$1("div", { class: "border-t border-gray-100 pt-6", children: [
u$1("span", { class: "text-xs font-semibold text-gray-400 uppercase tracking-wide block mb-3", children: "Tags" }),
u$1("div", { class: "flex flex-wrap gap-2", children: post_tags.map((tag) => u$1(
            "a",
            {
              href: "#/search/" + tag + "/0",
              class: "text-[11px] font-semibold text-white bg-gray-700 px-2 py-1 rounded-sm hover:bg-gray-800 transition",
              children: tag
            }
          )) })
        ] })
      ] })
    ] });
  };
  function PostPage({ postid }) {
    const [post, setPost] = d$1(null);
    const [loading, setLoading] = d$1(true);
    const [error, setError] = d$1(null);
    y$1(() => {
      const fetchPost = async () => {
        setLoading(true);
        setError(null);
        try {
          const postData = await getPost(
            "https://_blogid_1269029848.lofter.com/post/" + postid
          );
          if (postData.postData.data.postData) {
            setPost(postData);
          } else {
            setError("Post not found");
          }
        } catch (err) {
          setError("Failed to load post: " + err.message);
        } finally {
          setLoading(false);
        }
      };
      fetchPost();
    }, [postid]);
    let content;
    if (loading) {
      content = u$1("div", { class: "fixed inset-0 flex items-center justify-center pointer-events-none", children: u$1("div", { class: "flex flex-col items-center gap-4 pointer-events-auto", children: [
u$1("div", { class: "w-12 h-12 border-4 border-gray-300 border-t-gray-800 rounded-full animate-spin" }),
u$1("p", { class: "text-gray-500 text-sm font-semibold", children: "Loading post..." })
      ] }) });
    } else if (error) {
      content = u$1("div", { class: "flex items-center justify-center min-h-[50vh] px-4", children: u$1("div", { class: "max-w-md w-full bg-red-50 border border-red-200 rounded-sm p-6", children: [
u$1("h2", { class: "text-red-700 font-bold text-lg mb-2", children: "Error" }),
u$1("p", { class: "text-red-600 text-sm mb-4", children: error })
      ] }) });
    } else if (!post) {
      content = u$1("div", { class: "flex items-center justify-center min-h-[50vh] px-4", children: u$1("div", { class: "max-w-md w-full bg-red-50 border border-red-200 rounded-sm p-6", children: [
u$1("h2", { class: "text-red-700 font-bold text-lg mb-2", children: "Post was null" }),
u$1("p", { class: "text-red-600 text-sm mb-4", children: "Not clear what happened." })
      ] }) });
    } else {
      content = makePost(post);
    }
    return u$1("div", { class: "mt-8 px-4 pb-12", children: u$1("div", { class: "max-w-3xl mx-auto", children: [
u$1("div", { class: "mb-4", children: u$1(
        "button",
        {
          onClick: () => {
            if (api.get("lastSearch")) {
              window.location.hash = "#/search/" + api.get("lastSearch");
            } else {
              window.location.hash = "#/search";
            }
          },
          class: "text-xs font-semibold uppercase text-gray-500 hover:text-gray-800 transition-colors flex items-center gap-1 cursor-pointer bg-transparent border-none p-0 z-10",
          children: "← Back to Search"
        }
      ) }),
      content
    ] }) });
  }
  const ResultCard = ({ item }) => {
    const blogName = item.page.split("//").pop().split(".lofter.com")[0];
    const postId = item.page.split(".lofter.com/post/").pop();
    return u$1("article", { class: "animate-fade-in block border border-gray-300 bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow duration-200", children: [
u$1(
        ScrollingImage,
        {
          src: item.small,
          alt: "",
          onClick: () => downloadImage(item.big, blogName, postId),
          children: u$1("div", { class: "absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20", children: u$1("svg", { xmlns: "http://www.w3.org/2000/svg", class: "w-8 h-8 text-white", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "2", children: u$1("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" }) }) })
        }
      ),
u$1("div", { class: "py-2 px-4", children: u$1(
        "a",
        {
          href: "#/post/" + postId,
          class: "text-xs font-semibold uppercase text-gray-500 hover:underline",
          children: formattimestamp(item.published)
        }
      ) })
    ] });
  };
  function TimelinePage({ username }) {
    const [results, setResults] = d$1([]);
    const [loading, setLoading] = d$1(true);
    const [error, setError] = d$1(null);
    y$1(() => {
      const fetchTimeline = async () => {
        setLoading(true);
        setError(null);
        try {
          const postData = await getUserPics(username);
          setResults(postData);
        } catch (err) {
          setError("Failed to load user timeline: " + err.message);
        } finally {
          setLoading(false);
        }
      };
      fetchTimeline();
    }, [username]);
    return u$1("div", { class: "mt-8 px-4 pb-12", children: [
u$1("div", { class: "max-w-7xl mx-auto mb-4", children: u$1(
        "button",
        {
          onClick: () => {
            if (api.get("lastSearch")) {
              window.location.hash = "#/search/" + api.get("lastSearch");
            } else {
              window.location.hash = "#/search";
            }
          },
          class: "text-xs font-semibold uppercase text-gray-500 hover:text-gray-800 transition-colors flex items-center gap-1 cursor-pointer bg-transparent border-none p-0 relative z-10",
          children: "← Back to Search"
        }
      ) }),
      error && u$1("div", { class: "max-w-7xl mx-auto mb-4 p-4 bg-red-50 border border-red-200 rounded-sm text-red-700 text-sm", children: error }),
      loading ? u$1("div", { class: "fixed inset-0 flex items-center justify-center pointer-events-none", children: u$1("div", { class: "flex flex-col items-center gap-4 pointer-events-auto", children: [
u$1("div", { class: "w-12 h-12 border-4 border-gray-300 border-t-gray-800 rounded-full animate-spin" }),
u$1("p", { class: "text-gray-500 text-sm font-semibold", children: "Loading timeline..." })
      ] }) }) : u$1("div", { class: "max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8", children: results.length > 0 ? results.map((result) => u$1(ResultCard, { item: result })) : u$1("div", { class: "col-span-full text-center py-12 text-gray-500", children: username ? "Couldn't load the user timeline" : "No username provided" }) })
    ] });
  }
  function App() {
    return u$1(D, { history: createHashHistory(), children: [
u$1(SearchPage, { path: "/" }),
u$1(SearchPage, { path: "/search" }),
u$1(SearchPage, { path: "/search/:tag" }),
u$1(SearchPage, { path: "/search/:tag/:offset" }),
u$1(PostPage, { path: "/post/:postid" }),
u$1(TimelinePage, { path: "/timeline/:username" })
    ] });
  }
  const indexCss = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-duration:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-md:28rem;--container-3xl:48rem;--container-7xl:80rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--ease-in-out:cubic-bezier(.4,0,.2,1);--animate-spin:spin 1s linear infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-none{pointer-events:none}.invisible{visibility:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.sticky{position:sticky}.inset-0{inset:calc(var(--spacing)*0)}.top-0{top:calc(var(--spacing)*0)}.z-10{z-index:10}.z-20{z-index:20}.z-50{z-index:50}.col-span-full{grid-column:1/-1}.mx-auto{margin-inline:auto}.mt-8{margin-top:calc(var(--spacing)*8)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-8{margin-bottom:calc(var(--spacing)*8)}.line-clamp-4{-webkit-line-clamp:4;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.block{display:block}.flex{display:flex}.grid{display:grid}.aspect-\\[4\\/3\\]{aspect-ratio:4/3}.h-8{height:calc(var(--spacing)*8)}.h-10{height:calc(var(--spacing)*10)}.h-12{height:calc(var(--spacing)*12)}.h-auto{height:auto}.h-full{height:100%}.min-h-\\[50vh\\]{min-height:50vh}.min-h-\\[200px\\]{min-height:200px}.w-8{width:calc(var(--spacing)*8)}.w-10{width:calc(var(--spacing)*10)}.w-12{width:calc(var(--spacing)*12)}.w-20{width:calc(var(--spacing)*20)}.w-full{width:100%}.max-w-3xl{max-width:var(--container-3xl)}.max-w-7xl{max-width:var(--container-7xl)}.max-w-md{max-width:var(--container-md)}.max-w-none{max-width:none}.flex-1{flex:1}.animate-spin{animation:var(--animate-spin)}.cursor-pointer{cursor:pointer}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-baseline{align-items:baseline}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.gap-1{gap:calc(var(--spacing)*1)}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}.gap-8{gap:calc(var(--spacing)*8)}.gap-x-4{column-gap:calc(var(--spacing)*4)}.gap-y-2{row-gap:calc(var(--spacing)*2)}.overflow-hidden{overflow:hidden}.rounded-full{border-radius:3.40282e38px}.rounded-sm{border-radius:var(--radius-sm)}.rounded-t-sm{border-top-left-radius:var(--radius-sm);border-top-right-radius:var(--radius-sm)}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-4{border-style:var(--tw-border-style);border-width:4px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.border-none{--tw-border-style:none;border-style:none}.border-gray-100{border-color:var(--color-gray-100)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-300{border-color:var(--color-gray-300)}.border-red-200{border-color:var(--color-red-200)}.border-t-gray-800{border-top-color:var(--color-gray-800)}.bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){.bg-black\\/40{background-color:color-mix(in oklab,var(--color-black)40%,transparent)}}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-700{background-color:var(--color-gray-700)}.bg-gray-800{background-color:var(--color-gray-800)}.bg-red-50{background-color:var(--color-red-50)}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.object-cover{object-fit:cover}.p-0{padding:calc(var(--spacing)*0)}.p-4{padding:calc(var(--spacing)*4)}.p-6{padding:calc(var(--spacing)*6)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-5{padding-inline:calc(var(--spacing)*5)}.px-8{padding-inline:calc(var(--spacing)*8)}.py-1{padding-block:calc(var(--spacing)*1)}.py-1\\.5{padding-block:calc(var(--spacing)*1.5)}.py-2{padding-block:calc(var(--spacing)*2)}.py-3{padding-block:calc(var(--spacing)*3)}.py-12{padding-block:calc(var(--spacing)*12)}.pt-1{padding-top:calc(var(--spacing)*1)}.pt-6{padding-top:calc(var(--spacing)*6)}.pb-8{padding-bottom:calc(var(--spacing)*8)}.pb-12{padding-bottom:calc(var(--spacing)*12)}.text-center{text-align:center}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[11px\\]{font-size:11px}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.whitespace-pre-line{white-space:pre-line}.text-gray-300{color:var(--color-gray-300)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-gray-900{color:var(--color-gray-900)}.text-red-600{color:var(--color-red-600)}.text-red-700{color:var(--color-red-700)}.text-white{color:var(--color-white)}.uppercase{text-transform:uppercase}.opacity-0{opacity:0}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-shadow{transition-property:box-shadow;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-500{--tw-duration:.5s;transition-duration:.5s}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}@media(hover:hover){.group-hover\\:text-gray-600:is(:where(.group):hover *){color:var(--color-gray-600)}.group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}.group-hover\\:transition-none:is(:where(.group):hover *){transition-property:none}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:bg-gray-700:hover{background-color:var(--color-gray-700)}.hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}.hover\\:text-gray-800:hover{color:var(--color-gray-800)}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:shadow-md:hover{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-gray-400:focus{--tw-ring-color:var(--color-gray-400)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}@media(min-width:40rem){.sm\\:w-48{width:calc(var(--spacing)*48)}.sm\\:w-auto{width:auto}.sm\\:flex-none{flex:none}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.sm\\:flex-row{flex-direction:row}.sm\\:justify-end{justify-content:flex-end}.sm\\:p-8{padding:calc(var(--spacing)*8)}.sm\\:px-8{padding-inline:calc(var(--spacing)*8)}.sm\\:text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}}@media(min-width:64rem){.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.lg\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}';
  
  preact.render(
u$1(App, {}),
    (() => {
      window.stop();
      document.open("text/html", "replace");
      document.write("");
      document.close();
      const html = document.createElement("html");
      const head = document.createElement("head");
      const body = document.createElement("body");
      html.appendChild(head);
      html.appendChild(body);
      document.documentElement.replaceWith(html); importCSS(indexCss);

      const app = document.createElement("div");
      body.append(app);
      return app;
    })()
  );

})(preact);
