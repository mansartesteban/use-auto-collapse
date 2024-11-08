const g = {
  /**
   * The CSS timing function use to apply transition
   */
  timingFunction: "ease-in-out",
  /**
   * The duration of the transition (in milliseconds)
   */
  duration: 500,
  /**
   * Apply some classes to define the default behavior depending on the opening state at first
   */
  openedByDefault: !0,
  /**
   * Minimum height of the container (css value : px, %, cm, pt, rem, ch ...)
   */
  minHeight: void 0,
  /**
   * Maximum height of the container (css value : px, %, cm, pt, rem, ch ...)
   */
  maxHeight: void 0
}, f = (i, e) => {
  e = { ...g, ...e };
  let n = e.openedByDefault;
  const r = () => new Promise((t) => {
    i.style.height = i.scrollHeight + "px", requestAnimationFrame(() => {
      i.style.height = "0";
    }), n = !1, t(n);
  }), h = () => new Promise((t) => {
    i.style.height = i.scrollHeight + "px", i.addEventListener("transitionend", function s() {
      i.style.height = "auto", i.removeEventListener("transitionend", s);
    }), n = !0, t(n);
  }), u = (t) => t !== void 0 ? t ? h() : r() : n ? r() : h(), a = (t) => {
    t.style.height = e.openedByDefault ? "auto" : "0", e.minHeight !== void 0 && (typeof e.minHeight == "number" && (e.minHeight += "px"), t.style.minHeight = e.minHeight), e.maxHeight !== void 0 && (typeof e.maxHeight == "number" && (e.maxHeight += "px"), t.style.maxHeight = e.maxHeight), t.style.transition = `height ${e.duration}ms ${e.timingFunction}`, t.style.overflow = "clip";
  }, d = () => {
    i.style.height = n ? "auto" : "0";
  };
  if (!(i instanceof Element))
    throw new Error("Provided element must be an instance of Element");
  return a(i), {
    toggle: u,
    close: r,
    open: h,
    hide: r,
    show: h,
    refresh: d,
    opened: n
  };
};
export {
  f as default
};
