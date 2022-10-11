!(function (t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], e)
    : e(
        ((t =
          'undefined' != typeof globalThis ? globalThis : t || self).XState =
          {})
      );
})(this, function (t) {
  'use strict';
  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */ var e,
    n,
    r = function () {
      return (r =
        Object.assign ||
        function (t) {
          for (var e, n = 1, r = arguments.length; n < r; n++)
            for (var i in (e = arguments[n]))
              Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
          return t;
        }).apply(this, arguments);
    };
  function i(t, e) {
    var n = {};
    for (var r in t)
      Object.prototype.hasOwnProperty.call(t, r) &&
        e.indexOf(r) < 0 &&
        (n[r] = t[r]);
    if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
      var i = 0;
      for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
        e.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
          (n[r[i]] = t[r[i]]);
    }
    return n;
  }
  function o(t) {
    var e = 'function' == typeof Symbol && Symbol.iterator,
      n = e && t[e],
      r = 0;
    if (n) return n.call(t);
    if (t && 'number' == typeof t.length)
      return {
        next: function () {
          return (
            t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    );
  }
  function a(t, e) {
    var n = 'function' == typeof Symbol && t[Symbol.iterator];
    if (!n) return t;
    var r,
      i,
      o = n.call(t),
      a = [];
    try {
      for (; (void 0 === e || e-- > 0) && !(r = o.next()).done; )
        a.push(r.value);
    } catch (t) {
      i = { error: t };
    } finally {
      try {
        r && !r.done && (n = o.return) && n.call(o);
      } finally {
        if (i) throw i.error;
      }
    }
    return a;
  }
  function s(t, e, n) {
    if (n || 2 === arguments.length)
      for (var r, i = 0, o = e.length; i < o; i++)
        (!r && i in e) ||
          (r || (r = Array.prototype.slice.call(e, 0, i)), (r[i] = e[i]));
    return t.concat(r || Array.prototype.slice.call(e));
  }
  (t.ActionTypes = void 0),
    ((e = t.ActionTypes || (t.ActionTypes = {})).Start = 'xstate.start'),
    (e.Stop = 'xstate.stop'),
    (e.Raise = 'xstate.raise'),
    (e.Send = 'xstate.send'),
    (e.Cancel = 'xstate.cancel'),
    (e.NullEvent = ''),
    (e.Assign = 'xstate.assign'),
    (e.After = 'xstate.after'),
    (e.DoneState = 'done.state'),
    (e.DoneInvoke = 'done.invoke'),
    (e.Log = 'xstate.log'),
    (e.Init = 'xstate.init'),
    (e.Invoke = 'xstate.invoke'),
    (e.ErrorExecution = 'error.execution'),
    (e.ErrorCommunication = 'error.communication'),
    (e.ErrorPlatform = 'error.platform'),
    (e.ErrorCustom = 'xstate.error'),
    (e.Update = 'xstate.update'),
    (e.Pure = 'xstate.pure'),
    (e.Choose = 'xstate.choose'),
    (t.SpecialTargets = void 0),
    ((n = t.SpecialTargets || (t.SpecialTargets = {})).Parent = '#_parent'),
    (n.Internal = '#_internal');
  var c,
    u = t.ActionTypes.Start,
    h = t.ActionTypes.Stop,
    f = t.ActionTypes.Raise,
    l = t.ActionTypes.Send,
    d = t.ActionTypes.Cancel,
    p = t.ActionTypes.NullEvent,
    v = t.ActionTypes.Assign,
    y = t.ActionTypes.After,
    g = t.ActionTypes.DoneState,
    m = t.ActionTypes.Log,
    S = t.ActionTypes.Init,
    x = t.ActionTypes.Invoke,
    b = t.ActionTypes.ErrorExecution,
    w = t.ActionTypes.ErrorPlatform,
    _ = t.ActionTypes.ErrorCustom,
    E = t.ActionTypes.Update,
    T = t.ActionTypes.Choose,
    O = t.ActionTypes.Pure,
    A = Object.freeze({
      __proto__: null,
      start: u,
      stop: h,
      raise: f,
      send: l,
      cancel: d,
      nullEvent: p,
      assign: v,
      after: y,
      doneState: g,
      log: m,
      init: S,
      invoke: x,
      errorExecution: b,
      errorPlatform: w,
      error: _,
      update: E,
      choose: T,
      pure: O,
    }),
    k = {};
  function j(t, e, n) {
    void 0 === n && (n = '.');
    var r = P(t, n),
      i = P(e, n);
    return Q(i)
      ? !!Q(r) && i === r
      : Q(r)
      ? r in i
      : Object.keys(r).every(function (t) {
          return t in i && j(r[t], i[t]);
        });
  }
  function N(t) {
    try {
      return Q(t) || 'number' == typeof t ? ''.concat(t) : t.type;
    } catch (t) {
      throw new Error(
        'Events must be strings or objects with a string event.type property.'
      );
    }
  }
  function I(t, e) {
    try {
      return X(t) ? t : t.toString().split(e);
    } catch (e) {
      throw new Error("'".concat(t, "' is not a valid state path."));
    }
  }
  function P(t, e) {
    return 'object' == typeof (n = t) &&
      'value' in n &&
      'context' in n &&
      'event' in n &&
      '_event' in n
      ? t.value
      : X(t)
      ? C(t)
      : 'string' != typeof t
      ? t
      : C(I(t, e));
    var n;
  }
  function C(t) {
    if (1 === t.length) return t[0];
    for (var e = {}, n = e, r = 0; r < t.length - 1; r++)
      r === t.length - 2
        ? (n[t[r]] = t[r + 1])
        : ((n[t[r]] = {}), (n = n[t[r]]));
    return e;
  }
  function L(t, e) {
    for (var n = {}, r = Object.keys(t), i = 0; i < r.length; i++) {
      var o = r[i];
      n[o] = e(t[o], o, t, i);
    }
    return n;
  }
  function V(t, e, n) {
    var r,
      i,
      a = {};
    try {
      for (var s = o(Object.keys(t)), c = s.next(); !c.done; c = s.next()) {
        var u = c.value,
          h = t[u];
        n(h) && (a[u] = e(h, u, t));
      }
    } catch (t) {
      r = { error: t };
    } finally {
      try {
        c && !c.done && (i = s.return) && i.call(s);
      } finally {
        if (r) throw r.error;
      }
    }
    return a;
  }
  var D = function (t) {
    return function (e) {
      var n,
        r,
        i = e;
      try {
        for (var a = o(t), s = a.next(); !s.done; s = a.next()) {
          i = i[s.value];
        }
      } catch (t) {
        n = { error: t };
      } finally {
        try {
          s && !s.done && (r = a.return) && r.call(a);
        } finally {
          if (n) throw n.error;
        }
      }
      return i;
    };
  };
  function R(t) {
    return t
      ? Q(t)
        ? [[t]]
        : M(
            Object.keys(t).map(function (e) {
              var n = t[e];
              return 'string' == typeof n || (n && Object.keys(n).length)
                ? R(t[e]).map(function (t) {
                    return [e].concat(t);
                  })
                : [[e]];
            })
          )
      : [[]];
  }
  function M(t) {
    var e;
    return (e = []).concat.apply(e, s([], a(t), !1));
  }
  function z(t) {
    return X(t) ? t : [t];
  }
  function B(t) {
    return void 0 === t ? [] : z(t);
  }
  function U(t, e, n) {
    var r, i;
    if ($(t)) return t(e, n.data);
    var a = {};
    try {
      for (var s = o(Object.keys(t)), c = s.next(); !c.done; c = s.next()) {
        var u = c.value,
          h = t[u];
        $(h) ? (a[u] = h(e, n.data)) : (a[u] = h);
      }
    } catch (t) {
      r = { error: t };
    } finally {
      try {
        c && !c.done && (i = s.return) && i.call(s);
      } finally {
        if (r) throw r.error;
      }
    }
    return a;
  }
  function F(t) {
    return (
      t instanceof Promise ||
      !(null === t || (!$(t) && 'object' != typeof t) || !$(t.then))
    );
  }
  function J(t, e) {
    return L(t.states, function (t, n) {
      if (t) {
        var r = (Q(e) ? void 0 : e[n]) || (t ? t.current : void 0);
        if (r) return { current: r, states: J(t, r) };
      }
    });
  }
  function q(t, e, n, r) {
    return t
      ? n.reduce(function (t, n) {
          var i,
            a,
            s = n.assignment,
            c = { state: r, action: n, _event: e },
            u = {};
          if ($(s)) u = s(t, e.data, c);
          else
            try {
              for (
                var h = o(Object.keys(s)), f = h.next();
                !f.done;
                f = h.next()
              ) {
                var l = f.value,
                  d = s[l];
                u[l] = $(d) ? d(t, e.data, c) : d;
              }
            } catch (t) {
              i = { error: t };
            } finally {
              try {
                f && !f.done && (a = h.return) && a.call(h);
              } finally {
                if (i) throw i.error;
              }
            }
          return Object.assign({}, t, u);
        }, t)
      : t;
  }
  function X(t) {
    return Array.isArray(t);
  }
  function $(t) {
    return 'function' == typeof t;
  }
  function Q(t) {
    return 'string' == typeof t;
  }
  function H(t, e) {
    if (t)
      return Q(t)
        ? { type: 'xstate.guard', name: t, predicate: e ? e[t] : void 0 }
        : $(t)
        ? { type: 'xstate.guard', name: t.name, predicate: t }
        : t;
  }
  var G = (function () {
    return ('function' == typeof Symbol && Symbol.observable) || '@@observable';
  })();
  function K(t) {
    return !!t && '__xstatenode' in t;
  }
  ((c = {})[G] = function () {
    return this;
  }),
    (c[Symbol.observable] = function () {
      return this;
    });
  var W = (function () {
    var t = 0;
    return function () {
      return (++t).toString(16);
    };
  })();
  function Y(t, e) {
    return Q(t) || 'number' == typeof t ? r({ type: t }, e) : t;
  }
  function Z(t, e) {
    if (!Q(t) && '$$type' in t && 'scxml' === t.$$type) return t;
    var n = Y(t);
    return r({ name: n.type, data: n, $$type: 'scxml', type: 'external' }, e);
  }
  function tt(t, e) {
    return z(e).map(function (e) {
      return void 0 === e || 'string' == typeof e || K(e)
        ? { target: e, event: t }
        : r(r({}, e), { event: t });
    });
  }
  function et(t, e, n, r, i) {
    var o = t.options.guards,
      a = { state: i, cond: e, _event: r };
    if ('xstate.guard' === e.type)
      return ((null == o ? void 0 : o[e.name]) || e.predicate)(n, r.data, a);
    var s = null == o ? void 0 : o[e.type];
    if (!s)
      throw new Error(
        "Guard '"
          .concat(e.type, "' is not implemented on machine '")
          .concat(t.id, "'.")
      );
    return s(n, r.data, a);
  }
  function nt(t) {
    return 'string' == typeof t ? { type: t } : t;
  }
  function rt(t, e, n) {
    var r = function () {},
      i = 'object' == typeof t,
      o = i ? t : null;
    return {
      next: ((i ? t.next : t) || r).bind(o),
      error: ((i ? t.error : e) || r).bind(o),
      complete: ((i ? t.complete : n) || r).bind(o),
    };
  }
  function it(t, e) {
    return ''.concat(t, ':invocation[').concat(e, ']');
  }
  var ot = Z({ type: S });
  function at(t, e) {
    return (e && e[t]) || void 0;
  }
  function st(t, e) {
    var n;
    if (Q(t) || 'number' == typeof t)
      n = $((i = at(t, e)))
        ? { type: t, exec: i }
        : i || { type: t, exec: void 0 };
    else if ($(t)) n = { type: t.name || t.toString(), exec: t };
    else {
      var i;
      if ($((i = at(t.type, e)))) n = r(r({}, t), { exec: i });
      else if (i) {
        var o = i.type || t.type;
        n = r(r(r({}, i), t), { type: o });
      } else n = t;
    }
    return n;
  }
  var ct = function (t, e) {
    return t
      ? (X(t) ? t : [t]).map(function (t) {
          return st(t, e);
        })
      : [];
  };
  function ut(t) {
    var e = st(t);
    return r(r({ id: Q(t) ? t : e.id }, e), { type: e.type });
  }
  function ht(e) {
    return Q(e)
      ? { type: f, event: e }
      : lt(e, { to: t.SpecialTargets.Internal });
  }
  function ft(t) {
    return { type: f, _event: Z(t.event) };
  }
  function lt(t, e) {
    return {
      to: e ? e.to : void 0,
      type: l,
      event: $(t) ? t : Y(t),
      delay: e ? e.delay : void 0,
      id: e && void 0 !== e.id ? e.id : $(t) ? t.name : N(t),
    };
  }
  function dt(t, e, n, i) {
    var o,
      a = { _event: n },
      s = Z($(t.event) ? t.event(e, n.data, a) : t.event);
    if (Q(t.delay)) {
      var c = i && i[t.delay];
      o = $(c) ? c(e, n.data, a) : c;
    } else o = $(t.delay) ? t.delay(e, n.data, a) : t.delay;
    var u = $(t.to) ? t.to(e, n.data, a) : t.to;
    return r(r({}, t), { to: u, _event: s, event: s.data, delay: o });
  }
  function pt(e, n) {
    return lt(e, r(r({}, n), { to: t.SpecialTargets.Parent }));
  }
  function vt() {
    return pt(E);
  }
  var yt = function (t, e) {
    return { context: t, event: e };
  };
  var gt = function (t, e, n) {
      return r(r({}, t), {
        value: Q(t.expr) ? t.expr : t.expr(e, n.data, { _event: n }),
      });
    },
    mt = function (t) {
      return { type: d, sendId: t };
    };
  function St(e) {
    var n = ut(e);
    return { type: t.ActionTypes.Start, activity: n, exec: void 0 };
  }
  function xt(e) {
    var n = $(e) ? e : ut(e);
    return { type: t.ActionTypes.Stop, activity: n, exec: void 0 };
  }
  function bt(e, n, r) {
    var i = $(e.activity) ? e.activity(n, r.data) : e.activity,
      o = 'string' == typeof i ? { id: i } : i;
    return { type: t.ActionTypes.Stop, activity: o };
  }
  var wt = function (t) {
    return { type: v, assignment: t };
  };
  function _t(e, n) {
    var r = n ? '#'.concat(n) : '';
    return ''.concat(t.ActionTypes.After, '(').concat(e, ')').concat(r);
  }
  function Et(e, n) {
    var r = ''.concat(t.ActionTypes.DoneState, '.').concat(e),
      i = {
        type: r,
        data: n,
        toString: function () {
          return r;
        },
      };
    return i;
  }
  function Tt(e, n) {
    var r = ''.concat(t.ActionTypes.DoneInvoke, '.').concat(e),
      i = {
        type: r,
        data: n,
        toString: function () {
          return r;
        },
      };
    return i;
  }
  function Ot(e, n) {
    var r = ''.concat(t.ActionTypes.ErrorPlatform, '.').concat(e),
      i = {
        type: r,
        data: n,
        toString: function () {
          return r;
        },
      };
    return i;
  }
  function At(t, e) {
    return lt(function (t, e) {
      return e;
    }, r(r({}, e), { to: t }));
  }
  function kt(e, n, i, c, u, d, p) {
    void 0 === p && (p = !1);
    var y = p
        ? []
        : (function (t) {
            var e,
              n,
              r = [];
            try {
              for (var i = o(t), a = i.next(); !a.done; a = i.next())
                for (var s = a.value, c = 0; c < s.length; )
                  s[c].type !== v ? c++ : (r.push(s[c]), s.splice(c, 1));
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                a && !a.done && (n = i.return) && n.call(i);
              } finally {
                if (e) throw e.error;
              }
            }
            return r;
          })(u),
      g = y.length ? q(i, c, y, n) : i,
      S = p ? [i] : void 0,
      x = [];
    function b(o) {
      var u;
      switch (o.type) {
        case f:
          return ft(o);
        case l:
          var y = dt(o, g, c, e.options.delays);
          return d && y.to !== t.SpecialTargets.Internal && x.push(y), y;
        case m:
          var b = gt(o, g, c);
          return null == d || d(b, g, c), b;
        case T:
          if (
            !(A =
              null ===
                (u = o.conds.find(function (t) {
                  var r = H(t.cond, e.options.guards);
                  return !r || et(e, r, g, c, d ? void 0 : n);
                })) || void 0 === u
                ? void 0
                : u.actions)
          )
            return [];
          var w = a(kt(e, n, g, c, [ct(B(A), e.options.actions)], d, p), 2),
            _ = w[0],
            E = w[1];
          return (g = E), null == S || S.push(g), _;
        case O:
          var A;
          if (!(A = o.get(g, c.data))) return [];
          var k = a(kt(e, n, g, c, [ct(B(A), e.options.actions)], d, p), 2),
            j = k[0],
            N = k[1];
          return (g = N), null == S || S.push(g), j;
        case h:
          b = bt(o, g, c);
          return null == d || d(b, i, c), b;
        case v:
          (g = q(g, c, [o], d ? void 0 : n)), null == S || S.push(g);
          break;
        default:
          var I = st(o, e.options.actions),
            P = I.exec;
          if (d) d(I, g, c);
          else if (P && S) {
            var C = S.length - 1;
            I = r(r({}, I), {
              exec: function (t) {
                for (var e = [], n = 1; n < arguments.length; n++)
                  e[n - 1] = arguments[n];
                P.apply(void 0, s([S[C]], a(e), !1));
              },
            });
          }
          return I;
      }
    }
    return [
      M(
        u.map(function (t) {
          var e,
            n,
            r = [];
          try {
            for (var i = o(t), a = i.next(); !a.done; a = i.next()) {
              var s = b(a.value);
              s && (r = r.concat(s));
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              a && !a.done && (n = i.return) && n.call(i);
            } finally {
              if (e) throw e.error;
            }
          }
          return (
            x.forEach(function (t) {
              d(t, g, c);
            }),
            (x.length = 0),
            r
          );
        })
      ),
      g,
    ];
  }
  var jt = Object.freeze({
      __proto__: null,
      actionTypes: A,
      initEvent: ot,
      getActionFunction: at,
      toActionObject: st,
      toActionObjects: ct,
      toActivityDefinition: ut,
      raise: ht,
      resolveRaise: ft,
      send: lt,
      resolveSend: dt,
      sendParent: pt,
      sendTo: function (t, e, n) {
        return lt(e, r(r({}, n), { to: t }));
      },
      sendUpdate: vt,
      respond: function (t, e) {
        return lt(
          t,
          r(r({}, e), {
            to: function (t, e, n) {
              return n._event.origin;
            },
          })
        );
      },
      log: function (t, e) {
        return void 0 === t && (t = yt), { type: m, label: e, expr: t };
      },
      resolveLog: gt,
      cancel: mt,
      start: St,
      stop: xt,
      resolveStop: bt,
      assign: wt,
      isActionObject: function (t) {
        return 'object' == typeof t && 'type' in t;
      },
      after: _t,
      done: Et,
      doneInvoke: Tt,
      error: Ot,
      pure: function (e) {
        return { type: t.ActionTypes.Pure, get: e };
      },
      forwardTo: At,
      escalate: function (e, n) {
        return pt(function (t, n, r) {
          return { type: _, data: $(e) ? e(t, n, r) : e };
        }, r(r({}, n), { to: t.SpecialTargets.Parent }));
      },
      choose: function (e) {
        return { type: t.ActionTypes.Choose, conds: e };
      },
      resolveActions: kt,
    }),
    Nt = [],
    It = function (t, e) {
      Nt.push(t);
      var n = e(t);
      return Nt.pop(), n;
    };
  function Pt(t) {
    var e;
    return (
      ((e = {
        id: t,
        send: function () {},
        subscribe: function () {
          return { unsubscribe: function () {} };
        },
        getSnapshot: function () {},
        toJSON: function () {
          return { id: t };
        },
      })[G] = function () {
        return this;
      }),
      e
    );
  }
  function Ct(t, e, n) {
    var r = Pt(e);
    if (((r.deferred = !0), K(t))) {
      var i = (r.state = It(void 0, function () {
        return (n ? t.withContext(n) : t).initialState;
      }));
      r.getSnapshot = function () {
        return i;
      };
    }
    return r;
  }
  function Lt(t) {
    var e;
    return r(
      (((e = {
        subscribe: function () {
          return { unsubscribe: function () {} };
        },
        id: 'anonymous',
        getSnapshot: function () {},
      })[G] = function () {
        return this;
      }),
      e),
      t
    );
  }
  var Vt = function (t) {
    return 'atomic' === t.type || 'final' === t.type;
  };
  function Dt(t) {
    return Object.keys(t.states).map(function (e) {
      return t.states[e];
    });
  }
  function Rt(t) {
    return Dt(t).filter(function (t) {
      return 'history' !== t.type;
    });
  }
  function Mt(t) {
    var e = [t];
    return Vt(t) ? e : e.concat(M(Rt(t).map(Mt)));
  }
  function zt(t, e) {
    var n,
      r,
      i,
      a,
      s,
      c,
      u,
      h,
      f = Bt(new Set(t)),
      l = new Set(e);
    try {
      for (var d = o(l), p = d.next(); !p.done; p = d.next())
        for (var v = (E = p.value).parent; v && !l.has(v); )
          l.add(v), (v = v.parent);
    } catch (t) {
      n = { error: t };
    } finally {
      try {
        p && !p.done && (r = d.return) && r.call(d);
      } finally {
        if (n) throw n.error;
      }
    }
    var y = Bt(l);
    try {
      for (var g = o(l), m = g.next(); !m.done; m = g.next()) {
        if (
          'compound' !== (E = m.value).type ||
          (y.get(E) && y.get(E).length)
        ) {
          if ('parallel' === E.type)
            try {
              for (
                var S = ((s = void 0), o(Rt(E))), x = S.next();
                !x.done;
                x = S.next()
              ) {
                var b = x.value;
                l.has(b) ||
                  (l.add(b),
                  f.get(b)
                    ? f.get(b).forEach(function (t) {
                        return l.add(t);
                      })
                    : b.initialStateNodes.forEach(function (t) {
                        return l.add(t);
                      }));
              }
            } catch (t) {
              s = { error: t };
            } finally {
              try {
                x && !x.done && (c = S.return) && c.call(S);
              } finally {
                if (s) throw s.error;
              }
            }
        } else
          f.get(E)
            ? f.get(E).forEach(function (t) {
                return l.add(t);
              })
            : E.initialStateNodes.forEach(function (t) {
                return l.add(t);
              });
      }
    } catch (t) {
      i = { error: t };
    } finally {
      try {
        m && !m.done && (a = g.return) && a.call(g);
      } finally {
        if (i) throw i.error;
      }
    }
    try {
      for (var w = o(l), _ = w.next(); !_.done; _ = w.next()) {
        var E;
        for (v = (E = _.value).parent; v && !l.has(v); )
          l.add(v), (v = v.parent);
      }
    } catch (t) {
      u = { error: t };
    } finally {
      try {
        _ && !_.done && (h = w.return) && h.call(w);
      } finally {
        if (u) throw u.error;
      }
    }
    return l;
  }
  function Bt(t) {
    var e,
      n,
      r = new Map();
    try {
      for (var i = o(t), a = i.next(); !a.done; a = i.next()) {
        var s = a.value;
        r.has(s) || r.set(s, []),
          s.parent &&
            (r.has(s.parent) || r.set(s.parent, []), r.get(s.parent).push(s));
      }
    } catch (t) {
      e = { error: t };
    } finally {
      try {
        a && !a.done && (n = i.return) && n.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return r;
  }
  function Ut(t, e) {
    return (function t(e, n) {
      var r = n.get(e);
      if (!r) return {};
      if ('compound' === e.type) {
        var i = r[0];
        if (!i) return {};
        if (Vt(i)) return i.key;
      }
      var o = {};
      return (
        r.forEach(function (e) {
          o[e.key] = t(e, n);
        }),
        o
      );
    })(t, Bt(zt([t], e)));
  }
  function Ft(t, e) {
    return Array.isArray(t)
      ? t.some(function (t) {
          return t === e;
        })
      : t instanceof Set && t.has(e);
  }
  function Jt(t, e) {
    return 'compound' === e.type
      ? Rt(e).some(function (e) {
          return 'final' === e.type && Ft(t, e);
        })
      : 'parallel' === e.type &&
          Rt(e).every(function (e) {
            return Jt(t, e);
          });
  }
  function qt(t) {
    return new Set(
      M(
        t.map(function (t) {
          return t.tags;
        })
      )
    );
  }
  var Xt = (function () {
      function t(t) {
        var e,
          n,
          r = this;
        (this.actions = []),
          (this.activities = k),
          (this.meta = {}),
          (this.events = []),
          (this.value = t.value),
          (this.context = t.context),
          (this._event = t._event),
          (this._sessionid = t._sessionid),
          (this.event = this._event.data),
          (this.historyValue = t.historyValue),
          (this.history = t.history),
          (this.actions = t.actions || []),
          (this.activities = t.activities || k),
          (this.meta =
            (void 0 === (n = t.configuration) && (n = []),
            n.reduce(function (t, e) {
              return void 0 !== e.meta && (t[e.id] = e.meta), t;
            }, {}))),
          (this.events = t.events || []),
          (this.matches = this.matches.bind(this)),
          (this.toStrings = this.toStrings.bind(this)),
          (this.configuration = t.configuration),
          (this.transitions = t.transitions),
          (this.children = t.children),
          (this.done = !!t.done),
          (this.tags =
            null !== (e = Array.isArray(t.tags) ? new Set(t.tags) : t.tags) &&
            void 0 !== e
              ? e
              : new Set()),
          (this.machine = t.machine),
          Object.defineProperty(this, 'nextEvents', {
            get: function () {
              return (function (t) {
                return s(
                  [],
                  a(
                    new Set(
                      M(
                        s(
                          [],
                          a(
                            t.map(function (t) {
                              return t.ownEvents;
                            })
                          ),
                          !1
                        )
                      )
                    )
                  ),
                  !1
                );
              })(r.configuration);
            },
          });
      }
      return (
        (t.from = function (e, n) {
          return e instanceof t
            ? e.context !== n
              ? new t({
                  value: e.value,
                  context: n,
                  _event: e._event,
                  _sessionid: null,
                  historyValue: e.historyValue,
                  history: e.history,
                  actions: [],
                  activities: e.activities,
                  meta: {},
                  events: [],
                  configuration: [],
                  transitions: [],
                  children: {},
                })
              : e
            : new t({
                value: e,
                context: n,
                _event: ot,
                _sessionid: null,
                historyValue: void 0,
                history: void 0,
                actions: [],
                activities: void 0,
                meta: void 0,
                events: [],
                configuration: [],
                transitions: [],
                children: {},
              });
        }),
        (t.create = function (e) {
          return new t(e);
        }),
        (t.inert = function (e, n) {
          if (e instanceof t) {
            if (!e.actions.length) return e;
            var r = ot;
            return new t({
              value: e.value,
              context: n,
              _event: r,
              _sessionid: null,
              historyValue: e.historyValue,
              history: e.history,
              activities: e.activities,
              configuration: e.configuration,
              transitions: [],
              children: {},
            });
          }
          return t.from(e, n);
        }),
        (t.prototype.toStrings = function (t, e) {
          var n = this;
          if (
            (void 0 === t && (t = this.value), void 0 === e && (e = '.'), Q(t))
          )
            return [t];
          var r = Object.keys(t);
          return r.concat.apply(
            r,
            s(
              [],
              a(
                r.map(function (r) {
                  return n.toStrings(t[r], e).map(function (t) {
                    return r + e + t;
                  });
                })
              ),
              !1
            )
          );
        }),
        (t.prototype.toJSON = function () {
          var t = this;
          t.configuration, t.transitions;
          var e = t.tags;
          t.machine;
          var n = i(t, ['configuration', 'transitions', 'tags', 'machine']);
          return r(r({}, n), { tags: Array.from(e) });
        }),
        (t.prototype.matches = function (t) {
          return j(t, this.value);
        }),
        (t.prototype.hasTag = function (t) {
          return this.tags.has(t);
        }),
        (t.prototype.can = function (t) {
          var e;
          this.machine;
          var n =
            null === (e = this.machine) || void 0 === e
              ? void 0
              : e.getTransitionData(this, t);
          return (
            !!(null == n ? void 0 : n.transitions.length) &&
            n.transitions.some(function (t) {
              return void 0 !== t.target || t.actions.length;
            })
          );
        }),
        t
      );
    })(),
    $t = { deferEvents: !1 },
    Qt = (function () {
      function t(t) {
        (this.processingEvent = !1),
          (this.queue = []),
          (this.initialized = !1),
          (this.options = r(r({}, $t), t));
      }
      return (
        (t.prototype.initialize = function (t) {
          if (((this.initialized = !0), t)) {
            if (!this.options.deferEvents) return void this.schedule(t);
            this.process(t);
          }
          this.flushEvents();
        }),
        (t.prototype.schedule = function (t) {
          if (this.initialized && !this.processingEvent) {
            if (0 !== this.queue.length)
              throw new Error(
                'Event queue should be empty when it is not processing events'
              );
            this.process(t), this.flushEvents();
          } else this.queue.push(t);
        }),
        (t.prototype.clear = function () {
          this.queue = [];
        }),
        (t.prototype.flushEvents = function () {
          for (var t = this.queue.shift(); t; )
            this.process(t), (t = this.queue.shift());
        }),
        (t.prototype.process = function (t) {
          this.processingEvent = !0;
          try {
            t();
          } catch (t) {
            throw (this.clear(), t);
          } finally {
            this.processingEvent = !1;
          }
        }),
        t
      );
    })(),
    Ht = new Map(),
    Gt = 0,
    Kt = function () {
      return 'x:'.concat(Gt++);
    },
    Wt = function (t, e) {
      return Ht.set(t, e), t;
    },
    Yt = function (t) {
      return Ht.get(t);
    },
    Zt = function (t) {
      Ht.delete(t);
    };
  function te() {
    return 'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof self
      ? self
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : void 0;
  }
  function ee(t) {
    if (te()) {
      var e = (function () {
        var t = te();
        if (t && '__xstate__' in t) return t.__xstate__;
      })();
      e && e.register(t);
    }
  }
  function ne(t, e) {
    void 0 === e && (e = {});
    var n = t.initialState,
      r = new Set(),
      i = [],
      o = !1,
      a = Lt({
        id: e.id,
        send: function (e) {
          i.push(e),
            (function () {
              if (!o) {
                for (o = !0; i.length > 0; ) {
                  var e = i.shift();
                  (n = t.transition(n, e, s)),
                    r.forEach(function (t) {
                      return t.next(n);
                    });
                }
                o = !1;
              }
            })();
        },
        getSnapshot: function () {
          return n;
        },
        subscribe: function (t, e, i) {
          var o = rt(t, e, i);
          return (
            r.add(o),
            o.next(n),
            {
              unsubscribe: function () {
                r.delete(o);
              },
            }
          );
        },
      }),
      s = { parent: e.parent, self: a, id: e.id || 'anonymous', observers: r };
    return (n = t.start ? t.start(s) : n), a;
  }
  var re,
    ie = { sync: !1, autoForward: !1 };
  (t.InterpreterStatus = void 0),
    ((re = t.InterpreterStatus || (t.InterpreterStatus = {}))[
      (re.NotStarted = 0)
    ] = 'NotStarted'),
    (re[(re.Running = 1)] = 'Running'),
    (re[(re.Stopped = 2)] = 'Stopped');
  var oe = (function () {
    function e(n, i) {
      void 0 === i && (i = e.defaultOptions);
      var o = this;
      (this.machine = n),
        (this.delayedEventsMap = {}),
        (this.listeners = new Set()),
        (this.contextListeners = new Set()),
        (this.stopListeners = new Set()),
        (this.doneListeners = new Set()),
        (this.eventListeners = new Set()),
        (this.sendListeners = new Set()),
        (this.initialized = !1),
        (this.status = t.InterpreterStatus.NotStarted),
        (this.children = new Map()),
        (this.forwardTo = new Set()),
        (this._outgoingQueue = []),
        (this.init = this.start),
        (this.send = function (e, n) {
          if (X(e)) return o.batch(e), o.state;
          var r = Z(Y(e, n));
          if (o.status === t.InterpreterStatus.Stopped) return o.state;
          if (
            o.status !== t.InterpreterStatus.Running &&
            !o.options.deferEvents
          )
            throw new Error(
              'Event "'
                .concat(r.name, '" was sent to uninitialized service "')
                .concat(
                  o.machine.id,
                  '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.\nEvent: '
                )
                .concat(JSON.stringify(r.data))
            );
          return (
            o.scheduler.schedule(function () {
              o.forward(r);
              var t = o._nextState(r);
              o.update(t, r);
            }),
            o._state
          );
        }),
        (this.sendTo = function (e, n, i) {
          var a,
            s =
              o.parent && (n === t.SpecialTargets.Parent || o.parent.id === n),
            c = s
              ? o.parent
              : Q(n)
              ? o.children.get(n) || Yt(n)
              : (a = n) && 'function' == typeof a.send
              ? n
              : void 0;
          if (c)
            if ('machine' in c) {
              if (
                o.status !== t.InterpreterStatus.Stopped ||
                o.parent !== c ||
                o.state.done
              ) {
                var u = r(r({}, e), {
                  name: e.name === _ ? ''.concat(Ot(o.id)) : e.name,
                  origin: o.sessionId,
                });
                !i && o.machine.config.predictableActionArguments
                  ? o._outgoingQueue.push([c, u])
                  : c.send(u);
              }
            } else
              !i && o.machine.config.predictableActionArguments
                ? o._outgoingQueue.push([c, e.data])
                : c.send(e.data);
          else if (!s)
            throw new Error(
              "Unable to send event to child '"
                .concat(n, "' from service '")
                .concat(o.id, "'.")
            );
        }),
        (this._exec = function (e, n, r, i) {
          void 0 === i && (i = o.machine.options.actions);
          var a = e.exec || at(e.type, i),
            s = $(a) ? a : a ? a.exec : e.exec;
          if (s)
            try {
              return s(
                n,
                r.data,
                o.machine.config.predictableActionArguments
                  ? { action: e, _event: r }
                  : { action: e, state: o.state, _event: r }
              );
            } catch (t) {
              throw (
                (o.parent && o.parent.send({ type: 'xstate.error', data: t }),
                t)
              );
            }
          switch (e.type) {
            case l:
              var c = e;
              if ('number' == typeof c.delay) return void o.defer(c);
              c.to ? o.sendTo(c._event, c.to, r === ot) : o.send(c._event);
              break;
            case d:
              o.cancel(e.sendId);
              break;
            case u:
              if (o.status !== t.InterpreterStatus.Running) return;
              var f = e.activity;
              if (
                !o.machine.config.predictableActionArguments &&
                !o.state.activities[f.id || f.type]
              )
                break;
              if (f.type === t.ActionTypes.Invoke) {
                var p = nt(f.src),
                  v = o.machine.options.services
                    ? o.machine.options.services[p.type]
                    : void 0,
                  y = f.id,
                  g = f.data,
                  S = 'autoForward' in f ? f.autoForward : !!f.forward;
                if (!v) return;
                var x = g ? U(g, n, r) : void 0;
                if ('string' == typeof v) return;
                var b = $(v)
                  ? v(n, r.data, { data: x, src: p, meta: f.meta })
                  : v;
                if (!b) return;
                var w = void 0;
                K(b) &&
                  ((b = x ? b.withContext(x) : b), (w = { autoForward: S })),
                  o.spawn(b, y, w);
              } else o.spawnActivity(f);
              break;
            case h:
              o.stopChild(e.activity.id);
              break;
            case m:
              var _ = e.label,
                E = e.value;
              _ ? o.logger(_, E) : o.logger(E);
          }
        });
      var a = r(r({}, e.defaultOptions), i),
        s = a.clock,
        c = a.logger,
        f = a.parent,
        p = a.id,
        v = void 0 !== p ? p : n.id;
      (this.id = v),
        (this.logger = c),
        (this.clock = s),
        (this.parent = f),
        (this.options = a),
        (this.scheduler = new Qt({ deferEvents: this.options.deferEvents })),
        (this.sessionId = Kt());
    }
    return (
      Object.defineProperty(e.prototype, 'initialState', {
        get: function () {
          var t = this;
          return this._initialState
            ? this._initialState
            : It(this, function () {
                return (
                  (t._initialState = t.machine.initialState), t._initialState
                );
              });
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'state', {
        get: function () {
          return this._state;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.execute = function (t, e) {
        var n, r;
        try {
          for (var i = o(t.actions), a = i.next(); !a.done; a = i.next()) {
            var s = a.value;
            this.exec(s, t, e);
          }
        } catch (t) {
          n = { error: t };
        } finally {
          try {
            a && !a.done && (r = i.return) && r.call(i);
          } finally {
            if (n) throw n.error;
          }
        }
      }),
      (e.prototype.update = function (t, e) {
        var n,
          r,
          i,
          a,
          s,
          c,
          u,
          h,
          f = this;
        if (
          ((t._sessionid = this.sessionId),
          (this._state = t),
          (this.machine.config.predictableActionArguments && e !== ot) ||
            !this.options.execute)
        )
          for (var l = void 0; (l = this._outgoingQueue.shift()); )
            l[0].send(l[1]);
        else this.execute(this.state);
        if (
          (this.children.forEach(function (t) {
            f.state.children[t.id] = t;
          }),
          this.devTools && this.devTools.send(e.data, t),
          t.event)
        )
          try {
            for (
              var d = o(this.eventListeners), p = d.next();
              !p.done;
              p = d.next()
            ) {
              (0, p.value)(t.event);
            }
          } catch (t) {
            n = { error: t };
          } finally {
            try {
              p && !p.done && (r = d.return) && r.call(d);
            } finally {
              if (n) throw n.error;
            }
          }
        try {
          for (var v = o(this.listeners), y = v.next(); !y.done; y = v.next()) {
            (0, y.value)(t, t.event);
          }
        } catch (t) {
          i = { error: t };
        } finally {
          try {
            y && !y.done && (a = v.return) && a.call(v);
          } finally {
            if (i) throw i.error;
          }
        }
        try {
          for (
            var g = o(this.contextListeners), m = g.next();
            !m.done;
            m = g.next()
          ) {
            (0, m.value)(
              this.state.context,
              this.state.history ? this.state.history.context : void 0
            );
          }
        } catch (t) {
          s = { error: t };
        } finally {
          try {
            m && !m.done && (c = g.return) && c.call(g);
          } finally {
            if (s) throw s.error;
          }
        }
        if (this.state.done) {
          var S = t.configuration.find(function (t) {
              return 'final' === t.type && t.parent === f.machine;
            }),
            x = S && S.doneData ? U(S.doneData, t.context, e) : void 0;
          try {
            for (
              var b = o(this.doneListeners), w = b.next();
              !w.done;
              w = b.next()
            ) {
              (0, w.value)(Tt(this.id, x));
            }
          } catch (t) {
            u = { error: t };
          } finally {
            try {
              w && !w.done && (h = b.return) && h.call(b);
            } finally {
              if (u) throw u.error;
            }
          }
          this._stop(), this._stopChildren();
        }
      }),
      (e.prototype.onTransition = function (e) {
        return (
          this.listeners.add(e),
          this.status === t.InterpreterStatus.Running &&
            e(this.state, this.state.event),
          this
        );
      }),
      (e.prototype.subscribe = function (e, n, r) {
        var i = this,
          o = rt(e, n, r);
        this.listeners.add(o.next),
          this.status !== t.InterpreterStatus.NotStarted && o.next(this.state);
        var a = function () {
          i.doneListeners.delete(a), i.stopListeners.delete(a), o.complete();
        };
        return (
          this.status === t.InterpreterStatus.Stopped
            ? o.complete()
            : (this.onDone(a), this.onStop(a)),
          {
            unsubscribe: function () {
              i.listeners.delete(o.next),
                i.doneListeners.delete(a),
                i.stopListeners.delete(a);
            },
          }
        );
      }),
      (e.prototype.onEvent = function (t) {
        return this.eventListeners.add(t), this;
      }),
      (e.prototype.onSend = function (t) {
        return this.sendListeners.add(t), this;
      }),
      (e.prototype.onChange = function (t) {
        return this.contextListeners.add(t), this;
      }),
      (e.prototype.onStop = function (t) {
        return this.stopListeners.add(t), this;
      }),
      (e.prototype.onDone = function (t) {
        return this.doneListeners.add(t), this;
      }),
      (e.prototype.off = function (t) {
        return (
          this.listeners.delete(t),
          this.eventListeners.delete(t),
          this.sendListeners.delete(t),
          this.stopListeners.delete(t),
          this.doneListeners.delete(t),
          this.contextListeners.delete(t),
          this
        );
      }),
      (e.prototype.start = function (e) {
        var n = this;
        if (this.status === t.InterpreterStatus.Running) return this;
        this.machine._init(),
          Wt(this.sessionId, this),
          (this.initialized = !0),
          (this.status = t.InterpreterStatus.Running);
        var r =
          void 0 === e
            ? this.initialState
            : It(this, function () {
                return 'object' == typeof (t = e) &&
                  null !== t &&
                  'value' in t &&
                  '_event' in t
                  ? n.machine.resolveState(e)
                  : n.machine.resolveState(Xt.from(e, n.machine.context));
                var t;
              });
        return (
          this.options.devTools && this.attachDev(),
          this.scheduler.initialize(function () {
            n.update(r, ot);
          }),
          this
        );
      }),
      (e.prototype._stopChildren = function () {
        this.children.forEach(function (t) {
          $(t.stop) && t.stop();
        }),
          this.children.clear();
      }),
      (e.prototype._stop = function () {
        var e, n, r, i, a, s, c, u, h, f;
        try {
          for (var l = o(this.listeners), d = l.next(); !d.done; d = l.next()) {
            var p = d.value;
            this.listeners.delete(p);
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            d && !d.done && (n = l.return) && n.call(l);
          } finally {
            if (e) throw e.error;
          }
        }
        try {
          for (
            var v = o(this.stopListeners), y = v.next();
            !y.done;
            y = v.next()
          ) {
            (p = y.value)(), this.stopListeners.delete(p);
          }
        } catch (t) {
          r = { error: t };
        } finally {
          try {
            y && !y.done && (i = v.return) && i.call(v);
          } finally {
            if (r) throw r.error;
          }
        }
        try {
          for (
            var g = o(this.contextListeners), m = g.next();
            !m.done;
            m = g.next()
          ) {
            p = m.value;
            this.contextListeners.delete(p);
          }
        } catch (t) {
          a = { error: t };
        } finally {
          try {
            m && !m.done && (s = g.return) && s.call(g);
          } finally {
            if (a) throw a.error;
          }
        }
        try {
          for (
            var S = o(this.doneListeners), x = S.next();
            !x.done;
            x = S.next()
          ) {
            p = x.value;
            this.doneListeners.delete(p);
          }
        } catch (t) {
          c = { error: t };
        } finally {
          try {
            x && !x.done && (u = S.return) && u.call(S);
          } finally {
            if (c) throw c.error;
          }
        }
        if (!this.initialized) return this;
        (this.initialized = !1),
          (this.status = t.InterpreterStatus.Stopped),
          (this._initialState = void 0);
        try {
          for (
            var b = o(Object.keys(this.delayedEventsMap)), w = b.next();
            !w.done;
            w = b.next()
          ) {
            var _ = w.value;
            this.clock.clearTimeout(this.delayedEventsMap[_]);
          }
        } catch (t) {
          h = { error: t };
        } finally {
          try {
            w && !w.done && (f = b.return) && f.call(b);
          } finally {
            if (h) throw h.error;
          }
        }
        this.scheduler.clear(),
          (this.scheduler = new Qt({ deferEvents: this.options.deferEvents }));
      }),
      (e.prototype.stop = function () {
        var e = this,
          n = this.scheduler;
        return (
          this._stop(),
          n.schedule(function () {
            var n = Z({ type: 'xstate.stop' }),
              r = It(e, function () {
                var r = M(
                    s([], a(e.state.configuration), !1)
                      .sort(function (t, e) {
                        return e.order - t.order;
                      })
                      .map(function (t) {
                        return ct(t.onExit, e.machine.options.actions);
                      })
                  ),
                  i = a(
                    kt(
                      e.machine,
                      e.state,
                      e.state.context,
                      n,
                      [r],
                      e.machine.config.predictableActionArguments
                        ? e._exec
                        : void 0,
                      e.machine.config.predictableActionArguments ||
                        e.machine.config.preserveActionOrder
                    ),
                    2
                  ),
                  o = i[0],
                  c = i[1],
                  u = new Xt({
                    value: e.state.value,
                    context: c,
                    _event: n,
                    _sessionid: e.sessionId,
                    historyValue: void 0,
                    history: e.state,
                    actions: o.filter(function (e) {
                      return (
                        e.type !== f &&
                        (e.type !== l ||
                          (!!e.to && e.to !== t.SpecialTargets.Internal))
                      );
                    }),
                    activities: {},
                    events: [],
                    configuration: [],
                    transitions: [],
                    children: {},
                    done: e.state.done,
                    tags: e.state.tags,
                    machine: e.machine,
                  });
                return (u.changed = !0), u;
              });
            e.update(r, n), e._stopChildren(), Zt(e.sessionId);
          }),
          this
        );
      }),
      (e.prototype.batch = function (e) {
        var n = this;
        if (
          this.status === t.InterpreterStatus.NotStarted &&
          this.options.deferEvents
        );
        else if (this.status !== t.InterpreterStatus.Running)
          throw new Error(
            ''
              .concat(
                e.length,
                ' event(s) were sent to uninitialized service "'
              )
              .concat(
                this.machine.id,
                '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.'
              )
          );
        if (e.length) {
          var i =
            !!this.machine.config.predictableActionArguments && this._exec;
          this.scheduler.schedule(function () {
            var t,
              c,
              u = n.state,
              h = !1,
              f = [],
              l = function (t) {
                var e = Z(t);
                n.forward(e),
                  (u = It(n, function () {
                    return n.machine.transition(u, e, void 0, i || void 0);
                  })),
                  f.push.apply(
                    f,
                    s(
                      [],
                      a(
                        n.machine.config.predictableActionArguments
                          ? u.actions
                          : u.actions.map(function (t) {
                              return (function (t, e) {
                                var n = t.exec;
                                return r(r({}, t), {
                                  exec:
                                    void 0 !== n
                                      ? function () {
                                          return n(e.context, e.event, {
                                            action: t,
                                            state: e,
                                            _event: e._event,
                                          });
                                        }
                                      : void 0,
                                });
                              })(t, u);
                            })
                      ),
                      !1
                    )
                  ),
                  (h = h || !!u.changed);
              };
            try {
              for (var d = o(e), p = d.next(); !p.done; p = d.next()) {
                l(p.value);
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                p && !p.done && (c = d.return) && c.call(d);
              } finally {
                if (t) throw t.error;
              }
            }
            (u.changed = h), (u.actions = f), n.update(u, Z(e[e.length - 1]));
          });
        }
      }),
      (e.prototype.sender = function (t) {
        return this.send.bind(this, t);
      }),
      (e.prototype._nextState = function (t, e) {
        var n = this;
        void 0 === e &&
          (e = !!this.machine.config.predictableActionArguments && this._exec);
        var r = Z(t);
        if (
          0 === r.name.indexOf(w) &&
          !this.state.nextEvents.some(function (t) {
            return 0 === t.indexOf(w);
          })
        )
          throw r.data.data;
        return It(this, function () {
          return n.machine.transition(n.state, r, void 0, e || void 0);
        });
      }),
      (e.prototype.nextState = function (t) {
        return this._nextState(t, !1);
      }),
      (e.prototype.forward = function (t) {
        var e, n;
        try {
          for (var r = o(this.forwardTo), i = r.next(); !i.done; i = r.next()) {
            var a = i.value,
              s = this.children.get(a);
            if (!s)
              throw new Error(
                "Unable to forward event '"
                  .concat(t, "' from interpreter '")
                  .concat(this.id, "' to nonexistant child '")
                  .concat(a, "'.")
              );
            s.send(t);
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            i && !i.done && (n = r.return) && n.call(r);
          } finally {
            if (e) throw e.error;
          }
        }
      }),
      (e.prototype.defer = function (t) {
        var e = this;
        this.delayedEventsMap[t.id] = this.clock.setTimeout(function () {
          t.to ? e.sendTo(t._event, t.to, !0) : e.send(t._event);
        }, t.delay);
      }),
      (e.prototype.cancel = function (t) {
        this.clock.clearTimeout(this.delayedEventsMap[t]),
          delete this.delayedEventsMap[t];
      }),
      (e.prototype.exec = function (t, e, n) {
        void 0 === n && (n = this.machine.options.actions),
          this._exec(t, e.context, e._event, n);
      }),
      (e.prototype.removeChild = function (t) {
        var e;
        this.children.delete(t),
          this.forwardTo.delete(t),
          null === (e = this.state) || void 0 === e || delete e.children[t];
      }),
      (e.prototype.stopChild = function (t) {
        var e = this.children.get(t);
        e && (this.removeChild(t), $(e.stop) && e.stop());
      }),
      (e.prototype.spawn = function (e, n, i) {
        if (this.status !== t.InterpreterStatus.Running) return Ct(e, n);
        if (F(e)) return this.spawnPromise(Promise.resolve(e), n);
        if ($(e)) return this.spawnCallback(e, n);
        if (
          (function (t) {
            try {
              return 'function' == typeof t.send;
            } catch (t) {
              return !1;
            }
          })((a = e)) &&
          'id' in a
        )
          return this.spawnActor(e, n);
        if (
          (function (t) {
            try {
              return 'subscribe' in t && $(t.subscribe);
            } catch (t) {
              return !1;
            }
          })(e)
        )
          return this.spawnObservable(e, n);
        if (K(e)) return this.spawnMachine(e, r(r({}, i), { id: n }));
        if (
          null !== (o = e) &&
          'object' == typeof o &&
          'transition' in o &&
          'function' == typeof o.transition
        )
          return this.spawnBehavior(e, n);
        throw new Error(
          'Unable to spawn entity "'
            .concat(n, '" of type "')
            .concat(typeof e, '".')
        );
        var o, a;
      }),
      (e.prototype.spawnMachine = function (t, n) {
        var i = this;
        void 0 === n && (n = {});
        var o = new e(
            t,
            r(r({}, this.options), { parent: this, id: n.id || t.id })
          ),
          a = r(r({}, ie), n);
        a.sync &&
          o.onTransition(function (t) {
            i.send(E, { state: t, id: o.id });
          });
        var s = o;
        return (
          this.children.set(o.id, s),
          a.autoForward && this.forwardTo.add(o.id),
          o
            .onDone(function (t) {
              i.removeChild(o.id), i.send(Z(t, { origin: o.id }));
            })
            .start(),
          s
        );
      }),
      (e.prototype.spawnBehavior = function (t, e) {
        var n = ne(t, { id: e, parent: this });
        return this.children.set(e, n), n;
      }),
      (e.prototype.spawnPromise = function (t, e) {
        var n,
          r,
          i = this,
          o = !1;
        t.then(
          function (t) {
            o ||
              ((r = t), i.removeChild(e), i.send(Z(Tt(e, t), { origin: e })));
          },
          function (t) {
            if (!o) {
              i.removeChild(e);
              var n = Ot(e, t);
              try {
                i.send(Z(n, { origin: e }));
              } catch (t) {
                i.devTools && i.devTools.send(n, i.state),
                  i.machine.strict && i.stop();
              }
            }
          }
        );
        var a =
          (((n = {
            id: e,
            send: function () {},
            subscribe: function (e, n, r) {
              var i = rt(e, n, r),
                o = !1;
              return (
                t.then(
                  function (t) {
                    o || (i.next(t), o || i.complete());
                  },
                  function (t) {
                    o || i.error(t);
                  }
                ),
                {
                  unsubscribe: function () {
                    return (o = !0);
                  },
                }
              );
            },
            stop: function () {
              o = !0;
            },
            toJSON: function () {
              return { id: e };
            },
            getSnapshot: function () {
              return r;
            },
          })[G] = function () {
            return this;
          }),
          n);
        return this.children.set(e, a), a;
      }),
      (e.prototype.spawnCallback = function (t, e) {
        var n,
          r,
          i,
          o = this,
          a = !1,
          s = new Set(),
          c = new Set();
        try {
          i = t(
            function (t) {
              (r = t),
                c.forEach(function (e) {
                  return e(t);
                }),
                a || o.send(Z(t, { origin: e }));
            },
            function (t) {
              s.add(t);
            }
          );
        } catch (t) {
          this.send(Ot(e, t));
        }
        if (F(i)) return this.spawnPromise(i, e);
        var u =
          (((n = {
            id: e,
            send: function (t) {
              return s.forEach(function (e) {
                return e(t);
              });
            },
            subscribe: function (t) {
              var e = rt(t);
              return (
                c.add(e.next),
                {
                  unsubscribe: function () {
                    c.delete(e.next);
                  },
                }
              );
            },
            stop: function () {
              (a = !0), $(i) && i();
            },
            toJSON: function () {
              return { id: e };
            },
            getSnapshot: function () {
              return r;
            },
          })[G] = function () {
            return this;
          }),
          n);
        return this.children.set(e, u), u;
      }),
      (e.prototype.spawnObservable = function (t, e) {
        var n,
          r,
          i = this,
          o = t.subscribe(
            function (t) {
              (r = t), i.send(Z(t, { origin: e }));
            },
            function (t) {
              i.removeChild(e), i.send(Z(Ot(e, t), { origin: e }));
            },
            function () {
              i.removeChild(e), i.send(Z(Tt(e), { origin: e }));
            }
          ),
          a =
            (((n = {
              id: e,
              send: function () {},
              subscribe: function (e, n, r) {
                return t.subscribe(e, n, r);
              },
              stop: function () {
                return o.unsubscribe();
              },
              getSnapshot: function () {
                return r;
              },
              toJSON: function () {
                return { id: e };
              },
            })[G] = function () {
              return this;
            }),
            n);
        return this.children.set(e, a), a;
      }),
      (e.prototype.spawnActor = function (t, e) {
        return this.children.set(e, t), t;
      }),
      (e.prototype.spawnActivity = function (t) {
        var e =
          this.machine.options && this.machine.options.activities
            ? this.machine.options.activities[t.type]
            : void 0;
        if (e) {
          var n = e(this.state.context, t);
          this.spawnEffect(t.id, n);
        }
      }),
      (e.prototype.spawnEffect = function (t, e) {
        var n;
        this.children.set(
          t,
          (((n = {
            id: t,
            send: function () {},
            subscribe: function () {
              return { unsubscribe: function () {} };
            },
            stop: e || void 0,
            getSnapshot: function () {},
            toJSON: function () {
              return { id: t };
            },
          })[G] = function () {
            return this;
          }),
          n)
        );
      }),
      (e.prototype.attachDev = function () {
        var t = te();
        if (this.options.devTools && t) {
          if (t.__REDUX_DEVTOOLS_EXTENSION__) {
            var e =
              'object' == typeof this.options.devTools
                ? this.options.devTools
                : void 0;
            (this.devTools = t.__REDUX_DEVTOOLS_EXTENSION__.connect(
              r(
                r(
                  {
                    name: this.id,
                    autoPause: !0,
                    stateSanitizer: function (t) {
                      return {
                        value: t.value,
                        context: t.context,
                        actions: t.actions,
                      };
                    },
                  },
                  e
                ),
                { features: r({ jump: !1, skip: !1 }, e ? e.features : void 0) }
              ),
              this.machine
            )),
              this.devTools.init(this.state);
          }
          ee(this);
        }
      }),
      (e.prototype.toJSON = function () {
        return { id: this.id };
      }),
      (e.prototype[G] = function () {
        return this;
      }),
      (e.prototype.getSnapshot = function () {
        return this.status === t.InterpreterStatus.NotStarted
          ? this.initialState
          : this._state;
      }),
      (e.defaultOptions = {
        execute: !0,
        deferEvents: !0,
        clock: {
          setTimeout: function (t, e) {
            return setTimeout(t, e);
          },
          clearTimeout: function (t) {
            return clearTimeout(t);
          },
        },
        logger: console.log.bind(console),
        devTools: !1,
      }),
      (e.interpret = ae),
      e
    );
  })();
  function ae(t, e) {
    return new oe(t, e);
  }
  function se(t) {
    if ('string' == typeof t) {
      var e = {
        type: t,
        toString: function () {
          return t;
        },
      };
      return e;
    }
    return t;
  }
  function ce(t) {
    return r(r({ type: x }, t), {
      toJSON: function () {
        t.onDone, t.onError;
        var e = i(t, ['onDone', 'onError']);
        return r(r({}, e), { type: x, src: se(t.src) });
      },
    });
  }
  var ue = {},
    he = function (t) {
      return '#' === t[0];
    },
    fe = (function () {
      function e(t, n, i, c) {
        void 0 === i && (i = 'context' in t ? t.context : void 0);
        var u,
          h = this;
        (this.config = t),
          (this._context = i),
          (this.order = -1),
          (this.__xstatenode = !0),
          (this.__cache = {
            events: void 0,
            relativeValue: new Map(),
            initialStateValue: void 0,
            initialState: void 0,
            on: void 0,
            transitions: void 0,
            candidates: {},
            delayedTransitions: void 0,
          }),
          (this.idMap = {}),
          (this.tags = []),
          (this.options = Object.assign(
            {
              actions: {},
              guards: {},
              services: {},
              activities: {},
              delays: {},
            },
            n
          )),
          (this.parent = null == c ? void 0 : c.parent),
          (this.key =
            this.config.key ||
            (null == c ? void 0 : c.key) ||
            this.config.id ||
            '(machine)'),
          (this.machine = this.parent ? this.parent.machine : this),
          (this.path = this.parent ? this.parent.path.concat(this.key) : []),
          (this.delimiter =
            this.config.delimiter ||
            (this.parent ? this.parent.delimiter : '.')),
          (this.id =
            this.config.id ||
            s([this.machine.key], a(this.path), !1).join(this.delimiter)),
          (this.version = this.parent
            ? this.parent.version
            : this.config.version),
          (this.type =
            this.config.type ||
            (this.config.parallel
              ? 'parallel'
              : this.config.states && Object.keys(this.config.states).length
              ? 'compound'
              : this.config.history
              ? 'history'
              : 'atomic')),
          (this.schema = this.parent
            ? this.machine.schema
            : null !== (u = this.config.schema) && void 0 !== u
            ? u
            : {}),
          (this.description = this.config.description),
          (this.initial = this.config.initial),
          (this.states = this.config.states
            ? L(this.config.states, function (t, n) {
                var i,
                  o = new e(t, {}, void 0, { parent: h, key: n });
                return (
                  Object.assign(h.idMap, r((((i = {})[o.id] = o), i), o.idMap)),
                  o
                );
              })
            : ue);
        var f = 0;
        !(function t(e) {
          var n, r;
          e.order = f++;
          try {
            for (var i = o(Dt(e)), a = i.next(); !a.done; a = i.next()) {
              t(a.value);
            }
          } catch (t) {
            n = { error: t };
          } finally {
            try {
              a && !a.done && (r = i.return) && r.call(i);
            } finally {
              if (n) throw n.error;
            }
          }
        })(this),
          (this.history =
            !0 === this.config.history ? 'shallow' : this.config.history || !1),
          (this._transient =
            !!this.config.always ||
            (!!this.config.on &&
              (Array.isArray(this.config.on)
                ? this.config.on.some(function (t) {
                    return '' === t.event;
                  })
                : '' in this.config.on))),
          (this.strict = !!this.config.strict),
          (this.onEntry = B(this.config.entry || this.config.onEntry).map(
            function (t) {
              return st(t);
            }
          )),
          (this.onExit = B(this.config.exit || this.config.onExit).map(
            function (t) {
              return st(t);
            }
          )),
          (this.meta = this.config.meta),
          (this.doneData = 'final' === this.type ? this.config.data : void 0),
          (this.invoke = B(this.config.invoke).map(function (t, e) {
            var n, i;
            if (K(t)) {
              var o = it(h.id, e);
              return (
                (h.machine.options.services = r(
                  (((n = {})[o] = t), n),
                  h.machine.options.services
                )),
                ce({ src: o, id: o })
              );
            }
            if (Q(t.src)) {
              o = t.id || it(h.id, e);
              return ce(r(r({}, t), { id: o, src: t.src }));
            }
            if (K(t.src) || $(t.src)) {
              o = t.id || it(h.id, e);
              return (
                (h.machine.options.services = r(
                  (((i = {})[o] = t.src), i),
                  h.machine.options.services
                )),
                ce(r(r({ id: o }, t), { src: o }))
              );
            }
            var a = t.src;
            return ce(r(r({ id: it(h.id, e) }, t), { src: a }));
          })),
          (this.activities = B(this.config.activities)
            .concat(this.invoke)
            .map(function (t) {
              return ut(t);
            })),
          (this.transition = this.transition.bind(this)),
          (this.tags = B(this.config.tags));
      }
      return (
        (e.prototype._init = function () {
          this.__cache.transitions ||
            Mt(this).forEach(function (t) {
              return t.on;
            });
        }),
        (e.prototype.withConfig = function (t, n) {
          var i = this.options,
            o = i.actions,
            a = i.activities,
            s = i.guards,
            c = i.services,
            u = i.delays;
          return new e(
            this.config,
            {
              actions: r(r({}, o), t.actions),
              activities: r(r({}, a), t.activities),
              guards: r(r({}, s), t.guards),
              services: r(r({}, c), t.services),
              delays: r(r({}, u), t.delays),
            },
            null != n ? n : this.context
          );
        }),
        (e.prototype.withContext = function (t) {
          return new e(this.config, this.options, t);
        }),
        Object.defineProperty(e.prototype, 'context', {
          get: function () {
            return $(this._context) ? this._context() : this._context;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'definition', {
          get: function () {
            return {
              id: this.id,
              key: this.key,
              version: this.version,
              context: this.context,
              type: this.type,
              initial: this.initial,
              history: this.history,
              states: L(this.states, function (t) {
                return t.definition;
              }),
              on: this.on,
              transitions: this.transitions,
              entry: this.onEntry,
              exit: this.onExit,
              activities: this.activities || [],
              meta: this.meta,
              order: this.order || -1,
              data: this.doneData,
              invoke: this.invoke,
              description: this.description,
              tags: this.tags,
            };
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.toJSON = function () {
          return this.definition;
        }),
        Object.defineProperty(e.prototype, 'on', {
          get: function () {
            if (this.__cache.on) return this.__cache.on;
            var t = this.transitions;
            return (this.__cache.on = t.reduce(function (t, e) {
              return (
                (t[e.eventType] = t[e.eventType] || []),
                t[e.eventType].push(e),
                t
              );
            }, {}));
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'after', {
          get: function () {
            return (
              this.__cache.delayedTransitions ||
              ((this.__cache.delayedTransitions = this.getDelayedTransitions()),
              this.__cache.delayedTransitions)
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'transitions', {
          get: function () {
            return (
              this.__cache.transitions ||
              ((this.__cache.transitions = this.formatTransitions()),
              this.__cache.transitions)
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.getCandidates = function (t) {
          if (this.__cache.candidates[t]) return this.__cache.candidates[t];
          var e = '' === t,
            n = this.transitions.filter(function (n) {
              var r = n.eventType === t;
              return e ? r : r || '*' === n.eventType;
            });
          return (this.__cache.candidates[t] = n), n;
        }),
        (e.prototype.getDelayedTransitions = function () {
          var t = this,
            e = this.config.after;
          if (!e) return [];
          var n = function (e, n) {
            var r = _t(
              $(e) ? ''.concat(t.id, ':delay[').concat(n, ']') : e,
              t.id
            );
            return t.onEntry.push(lt(r, { delay: e })), t.onExit.push(mt(r)), r;
          };
          return (
            X(e)
              ? e.map(function (t, e) {
                  var i = n(t.delay, e);
                  return r(r({}, t), { event: i });
                })
              : M(
                  Object.keys(e).map(function (t, i) {
                    var o = e[t],
                      a = Q(o) ? { target: o } : o,
                      s = isNaN(+t) ? t : +t,
                      c = n(s, i);
                    return B(a).map(function (t) {
                      return r(r({}, t), { event: c, delay: s });
                    });
                  })
                )
          ).map(function (e) {
            var n = e.delay;
            return r(r({}, t.formatTransition(e)), { delay: n });
          });
        }),
        (e.prototype.getStateNodes = function (t) {
          var e,
            n = this;
          if (!t) return [];
          var r = t instanceof Xt ? t.value : P(t, this.delimiter);
          if (Q(r)) {
            var i = this.getStateNode(r).initial;
            return void 0 !== i
              ? this.getStateNodes((((e = {})[r] = i), e))
              : [this, this.states[r]];
          }
          var o = Object.keys(r),
            c = [this];
          return (
            c.push.apply(
              c,
              s(
                [],
                a(
                  M(
                    o.map(function (t) {
                      return n.getStateNode(t).getStateNodes(r[t]);
                    })
                  )
                ),
                !1
              )
            ),
            c
          );
        }),
        (e.prototype.handles = function (t) {
          var e = N(t);
          return this.events.includes(e);
        }),
        (e.prototype.resolveState = function (t) {
          var e = t instanceof Xt ? t : Xt.create(t),
            n = Array.from(zt([], this.getStateNodes(e.value)));
          return new Xt(
            r(r({}, e), {
              value: this.resolve(e.value),
              configuration: n,
              done: Jt(n, this),
              tags: qt(n),
              machine: this.machine,
            })
          );
        }),
        (e.prototype.transitionLeafNode = function (t, e, n) {
          var r = this.getStateNode(t).next(e, n);
          return r && r.transitions.length ? r : this.next(e, n);
        }),
        (e.prototype.transitionCompoundNode = function (t, e, n) {
          var r = Object.keys(t),
            i = this.getStateNode(r[0])._transition(t[r[0]], e, n);
          return i && i.transitions.length ? i : this.next(e, n);
        }),
        (e.prototype.transitionParallelNode = function (t, e, n) {
          var r,
            i,
            a = {};
          try {
            for (
              var s = o(Object.keys(t)), c = s.next();
              !c.done;
              c = s.next()
            ) {
              var u = c.value,
                h = t[u];
              if (h) {
                var f = this.getStateNode(u)._transition(h, e, n);
                f && (a[u] = f);
              }
            }
          } catch (t) {
            r = { error: t };
          } finally {
            try {
              c && !c.done && (i = s.return) && i.call(s);
            } finally {
              if (r) throw r.error;
            }
          }
          var l = Object.keys(a).map(function (t) {
              return a[t];
            }),
            d = M(
              l.map(function (t) {
                return t.transitions;
              })
            );
          if (
            !l.some(function (t) {
              return t.transitions.length > 0;
            })
          )
            return this.next(e, n);
          var p = M(
              l.map(function (t) {
                return t.entrySet;
              })
            ),
            v = M(
              Object.keys(a).map(function (t) {
                return a[t].configuration;
              })
            );
          return {
            transitions: d,
            entrySet: p,
            exitSet: M(
              l.map(function (t) {
                return t.exitSet;
              })
            ),
            configuration: v,
            source: e,
            actions: M(
              Object.keys(a).map(function (t) {
                return a[t].actions;
              })
            ),
          };
        }),
        (e.prototype._transition = function (t, e, n) {
          return Q(t)
            ? this.transitionLeafNode(t, e, n)
            : 1 === Object.keys(t).length
            ? this.transitionCompoundNode(t, e, n)
            : this.transitionParallelNode(t, e, n);
        }),
        (e.prototype.getTransitionData = function (t, e) {
          return this._transition(t.value, t, Z(e));
        }),
        (e.prototype.next = function (t, e) {
          var n,
            r,
            i,
            c = this,
            u = e.name,
            h = [],
            f = [];
          try {
            for (
              var l = o(this.getCandidates(u)), d = l.next();
              !d.done;
              d = l.next()
            ) {
              var p = d.value,
                v = p.cond,
                y = p.in,
                g = t.context,
                m =
                  !y ||
                  (Q(y) && he(y)
                    ? t.matches(
                        P(this.getStateNodeById(y).path, this.delimiter)
                      )
                    : j(
                        P(y, this.delimiter),
                        D(this.path.slice(0, -2))(t.value)
                      )),
                S = !1;
              try {
                S = !v || et(this.machine, v, g, e, t);
              } catch (t) {
                throw new Error(
                  "Unable to evaluate guard '"
                    .concat(v.name || v.type, "' in transition for event '")
                    .concat(u, "' in state node '")
                    .concat(this.id, "':\n")
                    .concat(t.message)
                );
              }
              if (S && m) {
                void 0 !== p.target && (f = p.target),
                  h.push.apply(h, s([], a(p.actions), !1)),
                  (i = p);
                break;
              }
            }
          } catch (t) {
            n = { error: t };
          } finally {
            try {
              d && !d.done && (r = l.return) && r.call(l);
            } finally {
              if (n) throw n.error;
            }
          }
          if (i) {
            if (!f.length)
              return {
                transitions: [i],
                entrySet: [],
                exitSet: [],
                configuration: t.value ? [this] : [],
                source: t,
                actions: h,
              };
            var x = M(
                f.map(function (e) {
                  return c.getRelativeStateNodes(e, t.historyValue);
                })
              ),
              b = !!i.internal,
              w = [];
            return (
              b ||
                f.forEach(function (t) {
                  w.push.apply(w, s([], a(c.getExternalReentryNodes(t)), !1));
                }),
              {
                transitions: [i],
                entrySet: w,
                exitSet: b ? [] : [this],
                configuration: x,
                source: t,
                actions: h,
              }
            );
          }
        }),
        (e.prototype.getExternalReentryNodes = function (t) {
          for (
            var e = [],
              n = a(t.order > this.order ? [t, this] : [this, t], 2),
              r = n[0],
              i = n[1];
            r && r !== i;

          )
            e.push(r), (r = r.parent);
          return r !== i ? [] : (e.push(i), e);
        }),
        (e.prototype.getActions = function (e, n, r, i, c, u, h) {
          var d,
            p,
            v,
            y,
            g = this,
            m = zt([], u ? this.getStateNodes(u.value) : [this]);
          try {
            for (var S = o(e), x = S.next(); !x.done; x = S.next()) {
              (Ft(m, (_ = x.value)) && !Ft(r.entrySet, _.parent)) ||
                r.entrySet.push(_);
            }
          } catch (t) {
            d = { error: t };
          } finally {
            try {
              x && !x.done && (p = S.return) && p.call(S);
            } finally {
              if (d) throw d.error;
            }
          }
          try {
            for (var b = o(m), w = b.next(); !w.done; w = b.next()) {
              var _;
              (Ft(e, (_ = w.value)) && !Ft(r.exitSet, _.parent)) ||
                r.exitSet.push(_);
            }
          } catch (t) {
            v = { error: t };
          } finally {
            try {
              w && !w.done && (y = b.return) && y.call(b);
            } finally {
              if (v) throw v.error;
            }
          }
          var E = M(
            r.entrySet.map(function (t) {
              var e = [];
              if ('final' !== t.type) return e;
              var n = t.parent;
              if (!n.parent) return e;
              e.push(
                Et(t.id, t.doneData),
                Et(n.id, t.doneData ? U(t.doneData, i, c) : void 0)
              );
              var o = n.parent;
              return (
                'parallel' === o.type &&
                  Rt(o).every(function (t) {
                    return Jt(r.configuration, t);
                  }) &&
                  e.push(Et(o.id)),
                e
              );
            })
          );
          r.exitSet.sort(function (t, e) {
            return e.order - t.order;
          }),
            r.entrySet.sort(function (t, e) {
              return t.order - e.order;
            });
          var T = new Set(r.entrySet),
            O = new Set(r.exitSet),
            A = Array.from(T)
              .map(function (t) {
                var e = t.onEntry,
                  n = t.activities.map(function (t) {
                    return St(t);
                  });
                return ct(
                  h
                    ? s(s([], a(e), !1), a(n), !1)
                    : s(s([], a(n), !1), a(e), !1),
                  g.machine.options.actions
                );
              })
              .concat([E.map(ht)]),
            k = Array.from(O)
              .map(function (t) {
                return ct(
                  s(
                    s([], a(t.onExit), !1),
                    a(
                      t.activities.map(function (t) {
                        return xt(t);
                      })
                    ),
                    !1
                  ),
                  g.machine.options.actions
                );
              })
              .concat([ct(r.actions, this.machine.options.actions)])
              .concat(A);
          if (n) {
            var j = ct(
              M(
                s([], a(e), !1)
                  .sort(function (t, e) {
                    return e.order - t.order;
                  })
                  .map(function (t) {
                    return t.onExit;
                  })
              ),
              this.machine.options.actions
            ).filter(function (e) {
              return (
                e.type !== f &&
                (e.type !== l || (!!e.to && e.to !== t.SpecialTargets.Internal))
              );
            });
            return k.concat([j]);
          }
          return k;
        }),
        (e.prototype.transition = function (t, e, n, r) {
          void 0 === t && (t = this.initialState);
          var i,
            o,
            c = Z(e);
          if (t instanceof Xt)
            i = void 0 === n ? t : this.resolveState(Xt.from(t, n));
          else {
            var u = Q(t)
                ? this.resolve(C(this.getResolvedPath(t)))
                : this.resolve(t),
              h = null != n ? n : this.machine.context;
            i = this.resolveState(Xt.from(u, h));
          }
          if (
            this.strict &&
            !this.events.includes(c.name) &&
            ((o = c.name), !/^(done|error)\./.test(o))
          )
            throw new Error(
              "Machine '"
                .concat(this.id, "' does not accept event '")
                .concat(c.name, "'")
            );
          var f = this._transition(i.value, i, c) || {
              transitions: [],
              configuration: [],
              entrySet: [],
              exitSet: [],
              source: i,
              actions: [],
            },
            l = zt([], this.getStateNodes(i.value)),
            d = f.configuration.length ? zt(l, f.configuration) : l;
          return (
            (f.configuration = s([], a(d), !1)),
            this.resolveTransition(f, i, i.context, r, c)
          );
        }),
        (e.prototype.resolveRaisedTransition = function (t, e, n, r) {
          var i,
            o = t.actions;
          return (
            ((t = this.transition(t, e, void 0, r))._event = n),
            (t.event = n.data),
            (i = t.actions).unshift.apply(i, s([], a(o), !1)),
            t
          );
        }),
        (e.prototype.resolveTransition = function (e, n, i, s, c) {
          var d,
            v,
            y,
            g,
            m = this;
          void 0 === c && (c = ot);
          var S = e.configuration,
            b = !n || e.transitions.length > 0,
            w = b ? e.configuration : n ? n.configuration : [],
            _ = Jt(w, this),
            T = b ? Ut(this.machine, S) : void 0,
            O = n
              ? n.historyValue
                ? n.historyValue
                : e.source
                ? this.machine.historyValue(n.value)
                : void 0
              : void 0,
            A = this.getActions(new Set(w), _, e, i, c, n, s),
            k = n ? r({}, n.activities) : {};
          try {
            for (var j = o(A), N = j.next(); !N.done; N = j.next()) {
              var I = N.value;
              try {
                for (
                  var P = ((y = void 0), o(I)), C = P.next();
                  !C.done;
                  C = P.next()
                ) {
                  var L = C.value;
                  L.type === u
                    ? (k[L.activity.id || L.activity.type] = L)
                    : L.type === h &&
                      (k[L.activity.id || L.activity.type] = !1);
                }
              } catch (t) {
                y = { error: t };
              } finally {
                try {
                  C && !C.done && (g = P.return) && g.call(P);
                } finally {
                  if (y) throw y.error;
                }
              }
            }
          } catch (t) {
            d = { error: t };
          } finally {
            try {
              N && !N.done && (v = j.return) && v.call(j);
            } finally {
              if (d) throw d.error;
            }
          }
          var V,
            D,
            R = a(
              kt(
                this,
                n,
                i,
                c,
                A,
                s,
                this.machine.config.predictableActionArguments ||
                  this.machine.config.preserveActionOrder
              ),
              2
            ),
            M = R[0],
            z = R[1],
            B = a(
              (function (t, e) {
                var n,
                  r,
                  i = a([[], []], 2),
                  s = i[0],
                  c = i[1];
                try {
                  for (var u = o(t), h = u.next(); !h.done; h = u.next()) {
                    var f = h.value;
                    e(f) ? s.push(f) : c.push(f);
                  }
                } catch (t) {
                  n = { error: t };
                } finally {
                  try {
                    h && !h.done && (r = u.return) && r.call(u);
                  } finally {
                    if (n) throw n.error;
                  }
                }
                return [s, c];
              })(M, function (e) {
                return (
                  e.type === f ||
                  (e.type === l && e.to === t.SpecialTargets.Internal)
                );
              }),
              2
            ),
            F = B[0],
            q = B[1],
            X = M.filter(function (t) {
              var e;
              return (
                t.type === u &&
                (null === (e = t.activity) || void 0 === e
                  ? void 0
                  : e.type) === x
              );
            }).reduce(
              function (t, e) {
                return (
                  (t[e.activity.id] = (function (t, e, n, r) {
                    var i,
                      o = nt(t.src),
                      a =
                        null ===
                          (i = null == e ? void 0 : e.options.services) ||
                        void 0 === i
                          ? void 0
                          : i[o.type],
                      s = t.data ? U(t.data, n, r) : void 0,
                      c = a ? Ct(a, t.id, s) : Pt(t.id);
                    return (c.meta = t), c;
                  })(e.activity, m.machine, z, c)),
                  t
                );
              },
              n ? r({}, n.children) : {}
            ),
            $ = new Xt({
              value: T || n.value,
              context: z,
              _event: c,
              _sessionid: n ? n._sessionid : null,
              historyValue: T
                ? O
                  ? ((V = O), (D = T), { current: D, states: J(V, D) })
                  : void 0
                : n
                ? n.historyValue
                : void 0,
              history: !T || e.source ? n : void 0,
              actions: T ? q : [],
              activities: T ? k : n ? n.activities : {},
              events: [],
              configuration: w,
              transitions: e.transitions,
              children: X,
              done: _,
              tags: qt(w),
              machine: this,
            }),
            H = i !== z;
          $.changed = c.name === E || H;
          var G = $.history;
          G && delete G.history;
          var K =
            !_ &&
            (this._transient ||
              S.some(function (t) {
                return t._transient;
              }));
          if (!(b || (K && '' !== c.name))) return $;
          var W = $;
          if (!_)
            for (
              K && (W = this.resolveRaisedTransition(W, { type: p }, c, s));
              F.length;

            ) {
              var Y = F.shift();
              W = this.resolveRaisedTransition(W, Y._event, c, s);
            }
          var Z =
            W.changed ||
            (G
              ? !!W.actions.length ||
                H ||
                typeof G.value != typeof W.value ||
                !(function t(e, n) {
                  if (e === n) return !0;
                  if (void 0 === e || void 0 === n) return !1;
                  if (Q(e) || Q(n)) return e === n;
                  var r = Object.keys(e),
                    i = Object.keys(n);
                  return (
                    r.length === i.length &&
                    r.every(function (r) {
                      return t(e[r], n[r]);
                    })
                  );
                })(W.value, G.value)
              : void 0);
          return (W.changed = Z), (W.history = G), W;
        }),
        (e.prototype.getStateNode = function (t) {
          if (he(t)) return this.machine.getStateNodeById(t);
          if (!this.states)
            throw new Error(
              "Unable to retrieve child state '"
                .concat(t, "' from '")
                .concat(this.id, "'; no child states exist.")
            );
          var e = this.states[t];
          if (!e)
            throw new Error(
              "Child state '"
                .concat(t, "' does not exist on '")
                .concat(this.id, "'")
            );
          return e;
        }),
        (e.prototype.getStateNodeById = function (t) {
          var e = he(t) ? t.slice('#'.length) : t;
          if (e === this.id) return this;
          var n = this.machine.idMap[e];
          if (!n)
            throw new Error(
              "Child state node '#"
                .concat(e, "' does not exist on machine '")
                .concat(this.id, "'")
            );
          return n;
        }),
        (e.prototype.getStateNodeByPath = function (t) {
          if ('string' == typeof t && he(t))
            try {
              return this.getStateNodeById(t.slice(1));
            } catch (t) {}
          for (var e = I(t, this.delimiter).slice(), n = this; e.length; ) {
            var r = e.shift();
            if (!r.length) break;
            n = n.getStateNode(r);
          }
          return n;
        }),
        (e.prototype.resolve = function (t) {
          var e,
            n = this;
          if (!t) return this.initialStateValue || ue;
          switch (this.type) {
            case 'parallel':
              return L(this.initialStateValue, function (e, r) {
                return e ? n.getStateNode(r).resolve(t[r] || e) : ue;
              });
            case 'compound':
              if (Q(t)) {
                var r = this.getStateNode(t);
                return 'parallel' === r.type || 'compound' === r.type
                  ? (((e = {})[t] = r.initialStateValue), e)
                  : t;
              }
              return Object.keys(t).length
                ? L(t, function (t, e) {
                    return t ? n.getStateNode(e).resolve(t) : ue;
                  })
                : this.initialStateValue || {};
            default:
              return t || ue;
          }
        }),
        (e.prototype.getResolvedPath = function (t) {
          if (he(t)) {
            var e = this.machine.idMap[t.slice('#'.length)];
            if (!e)
              throw new Error("Unable to find state node '".concat(t, "'"));
            return e.path;
          }
          return I(t, this.delimiter);
        }),
        Object.defineProperty(e.prototype, 'initialStateValue', {
          get: function () {
            var t, e;
            if (this.__cache.initialStateValue)
              return this.__cache.initialStateValue;
            if ('parallel' === this.type)
              e = V(
                this.states,
                function (t) {
                  return t.initialStateValue || ue;
                },
                function (t) {
                  return !('history' === t.type);
                }
              );
            else if (void 0 !== this.initial) {
              if (!this.states[this.initial])
                throw new Error(
                  "Initial state '"
                    .concat(this.initial, "' not found on '")
                    .concat(this.key, "'")
                );
              e = Vt(this.states[this.initial])
                ? this.initial
                : (((t = {})[this.initial] =
                    this.states[this.initial].initialStateValue),
                  t);
            } else e = {};
            return (
              (this.__cache.initialStateValue = e),
              this.__cache.initialStateValue
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.getInitialState = function (t, e) {
          this._init();
          var n = this.getStateNodes(t);
          return this.resolveTransition(
            {
              configuration: n,
              entrySet: s([], a(n), !1),
              exitSet: [],
              transitions: [],
              source: void 0,
              actions: [],
            },
            void 0,
            null != e ? e : this.machine.context,
            void 0
          );
        }),
        Object.defineProperty(e.prototype, 'initialState', {
          get: function () {
            var t = this.initialStateValue;
            if (!t)
              throw new Error(
                "Cannot retrieve initial state from simple state '".concat(
                  this.id,
                  "'."
                )
              );
            return this.getInitialState(t);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'target', {
          get: function () {
            var t;
            if ('history' === this.type) {
              var e = this.config;
              t =
                Q(e.target) && he(e.target)
                  ? C(
                      this.machine
                        .getStateNodeById(e.target)
                        .path.slice(this.path.length - 1)
                    )
                  : e.target;
            }
            return t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.getRelativeStateNodes = function (t, e, n) {
          return (
            void 0 === n && (n = !0),
            n
              ? 'history' === t.type
                ? t.resolveHistory(e)
                : t.initialStateNodes
              : [t]
          );
        }),
        Object.defineProperty(e.prototype, 'initialStateNodes', {
          get: function () {
            var t = this;
            return Vt(this)
              ? [this]
              : 'compound' !== this.type || this.initial
              ? M(
                  R(this.initialStateValue).map(function (e) {
                    return t.getFromRelativePath(e);
                  })
                )
              : [this];
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.getFromRelativePath = function (t) {
          if (!t.length) return [this];
          var e = a(t),
            n = e[0],
            r = e.slice(1);
          if (!this.states)
            throw new Error(
              "Cannot retrieve subPath '".concat(
                n,
                "' from node with no states"
              )
            );
          var i = this.getStateNode(n);
          if ('history' === i.type) return i.resolveHistory();
          if (!this.states[n])
            throw new Error(
              "Child state '"
                .concat(n, "' does not exist on '")
                .concat(this.id, "'")
            );
          return this.states[n].getFromRelativePath(r);
        }),
        (e.prototype.historyValue = function (t) {
          if (Object.keys(this.states).length)
            return {
              current: t || this.initialStateValue,
              states: V(
                this.states,
                function (e, n) {
                  if (!t) return e.historyValue();
                  var r = Q(t) ? void 0 : t[n];
                  return e.historyValue(r || e.initialStateValue);
                },
                function (t) {
                  return !t.history;
                }
              ),
            };
        }),
        (e.prototype.resolveHistory = function (t) {
          var e = this;
          if ('history' !== this.type) return [this];
          var n = this.parent;
          if (!t) {
            var r = this.target;
            return r
              ? M(
                  R(r).map(function (t) {
                    return n.getFromRelativePath(t);
                  })
                )
              : n.initialStateNodes;
          }
          var i,
            a,
            s = ((i = n.path),
            (a = 'states'),
            function (t) {
              var e,
                n,
                r = t;
              try {
                for (var s = o(i), c = s.next(); !c.done; c = s.next()) {
                  var u = c.value;
                  r = r[a][u];
                }
              } catch (t) {
                e = { error: t };
              } finally {
                try {
                  c && !c.done && (n = s.return) && n.call(s);
                } finally {
                  if (e) throw e.error;
                }
              }
              return r;
            })(t).current;
          return Q(s)
            ? [n.getStateNode(s)]
            : M(
                R(s).map(function (t) {
                  return 'deep' === e.history
                    ? n.getFromRelativePath(t)
                    : [n.states[t[0]]];
                })
              );
        }),
        Object.defineProperty(e.prototype, 'stateIds', {
          get: function () {
            var t = this,
              e = M(
                Object.keys(this.states).map(function (e) {
                  return t.states[e].stateIds;
                })
              );
            return [this.id].concat(e);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'events', {
          get: function () {
            var t, e, n, r;
            if (this.__cache.events) return this.__cache.events;
            var i = this.states,
              a = new Set(this.ownEvents);
            if (i)
              try {
                for (
                  var s = o(Object.keys(i)), c = s.next();
                  !c.done;
                  c = s.next()
                ) {
                  var u = i[c.value];
                  if (u.states)
                    try {
                      for (
                        var h = ((n = void 0), o(u.events)), f = h.next();
                        !f.done;
                        f = h.next()
                      ) {
                        var l = f.value;
                        a.add(''.concat(l));
                      }
                    } catch (t) {
                      n = { error: t };
                    } finally {
                      try {
                        f && !f.done && (r = h.return) && r.call(h);
                      } finally {
                        if (n) throw n.error;
                      }
                    }
                }
              } catch (e) {
                t = { error: e };
              } finally {
                try {
                  c && !c.done && (e = s.return) && e.call(s);
                } finally {
                  if (t) throw t.error;
                }
              }
            return (this.__cache.events = Array.from(a));
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'ownEvents', {
          get: function () {
            var t = new Set(
              this.transitions
                .filter(function (t) {
                  return !(!t.target && !t.actions.length && t.internal);
                })
                .map(function (t) {
                  return t.eventType;
                })
            );
            return Array.from(t);
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.resolveTarget = function (t) {
          var e = this;
          if (void 0 !== t)
            return t.map(function (t) {
              if (!Q(t)) return t;
              var n = t[0] === e.delimiter;
              if (n && !e.parent) return e.getStateNodeByPath(t.slice(1));
              var r = n ? e.key + t : t;
              if (!e.parent) return e.getStateNodeByPath(r);
              try {
                return e.parent.getStateNodeByPath(r);
              } catch (t) {
                throw new Error(
                  "Invalid transition definition for state node '"
                    .concat(e.id, "':\n")
                    .concat(t.message)
                );
              }
            });
        }),
        (e.prototype.formatTransition = function (t) {
          var e = this,
            n = (function (t) {
              if (void 0 !== t && '' !== t) return B(t);
            })(t.target),
            i =
              'internal' in t
                ? t.internal
                : !n ||
                  n.some(function (t) {
                    return Q(t) && t[0] === e.delimiter;
                  }),
            o = this.machine.options.guards,
            a = this.resolveTarget(n),
            s = r(r({}, t), {
              actions: ct(B(t.actions)),
              cond: H(t.cond, o),
              target: a,
              source: this,
              internal: i,
              eventType: t.event,
              toJSON: function () {
                return r(r({}, s), {
                  target: s.target
                    ? s.target.map(function (t) {
                        return '#'.concat(t.id);
                      })
                    : void 0,
                  source: '#'.concat(e.id),
                });
              },
            });
          return s;
        }),
        (e.prototype.formatTransitions = function () {
          var t,
            e,
            n,
            r = this;
          if (this.config.on)
            if (Array.isArray(this.config.on)) n = this.config.on;
            else {
              var c = this.config.on,
                u = c['*'],
                h = void 0 === u ? [] : u,
                f = i(c, ['*']);
              n = M(
                Object.keys(f)
                  .map(function (t) {
                    return tt(t, f[t]);
                  })
                  .concat(tt('*', h))
              );
            }
          else n = [];
          var l = this.config.always ? tt('', this.config.always) : [],
            d = this.config.onDone
              ? tt(String(Et(this.id)), this.config.onDone)
              : [],
            p = M(
              this.invoke.map(function (t) {
                var e = [];
                return (
                  t.onDone &&
                    e.push.apply(
                      e,
                      s([], a(tt(String(Tt(t.id)), t.onDone)), !1)
                    ),
                  t.onError &&
                    e.push.apply(
                      e,
                      s([], a(tt(String(Ot(t.id)), t.onError)), !1)
                    ),
                  e
                );
              })
            ),
            v = this.after,
            y = M(
              s(s(s(s([], a(d), !1), a(p), !1), a(n), !1), a(l), !1).map(
                function (t) {
                  return B(t).map(function (t) {
                    return r.formatTransition(t);
                  });
                }
              )
            );
          try {
            for (var g = o(v), m = g.next(); !m.done; m = g.next()) {
              var S = m.value;
              y.push(S);
            }
          } catch (e) {
            t = { error: e };
          } finally {
            try {
              m && !m.done && (e = g.return) && e.call(g);
            } finally {
              if (t) throw t.error;
            }
          }
          return y;
        }),
        e
      );
    })();
  function le(t) {
    return t;
  }
  var de = le,
    pe = wt,
    ve = lt,
    ye = pt,
    ge = vt,
    me = At,
    Se = Tt;
  (t.Interpreter = oe),
    (t.Machine = function (t, e, n) {
      return void 0 === n && (n = t.context), new fe(t, e, n);
    }),
    (t.State = Xt),
    (t.StateNode = fe),
    (t.actions = jt),
    (t.assign = pe),
    (t.createMachine = function (t, e) {
      return new fe(t, e);
    }),
    (t.createSchema = le),
    (t.doneInvoke = Se),
    (t.forwardTo = me),
    (t.interpret = ae),
    (t.mapState = function (t, e) {
      var n, r, i;
      try {
        for (var a = o(Object.keys(t)), s = a.next(); !s.done; s = a.next()) {
          var c = s.value;
          j(c, e) && (!i || e.length > i.length) && (i = c);
        }
      } catch (t) {
        n = { error: t };
      } finally {
        try {
          s && !s.done && (r = a.return) && r.call(a);
        } finally {
          if (n) throw n.error;
        }
      }
      return t[i];
    }),
    (t.matchState = function (t, e, n) {
      var r,
        i,
        s = Xt.from(t, t instanceof Xt ? t.context : void 0);
      try {
        for (var c = o(e), u = c.next(); !u.done; u = c.next()) {
          var h = a(u.value, 2),
            f = h[0],
            l = h[1];
          if (s.matches(f)) return l(s);
        }
      } catch (t) {
        r = { error: t };
      } finally {
        try {
          u && !u.done && (i = c.return) && i.call(c);
        } finally {
          if (r) throw r.error;
        }
      }
      return n(s);
    }),
    (t.matchesState = j),
    (t.send = ve),
    (t.sendParent = ye),
    (t.sendUpdate = ge),
    (t.spawn = function (t, e) {
      var n = (function (t) {
        return Q(t)
          ? r(r({}, ie), { name: t })
          : r(r(r({}, ie), { name: W() }), t);
      })(e);
      return (function (e) {
        return e ? e.spawn(t, n.name, n) : Ct(t, n.name);
      })(Nt[Nt.length - 1]);
    }),
    (t.spawnBehavior = ne),
    (t.t = de),
    (t.toActorRef = Lt),
    (t.toEventObject = Y),
    (t.toObserver = rt),
    (t.toSCXMLEvent = Z),
    Object.defineProperty(t, '__esModule', { value: !0 });
});
