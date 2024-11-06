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
}, f = (t, e) => {
  e = { ...g, ...e };
  const n = e.openedByDefault, a = () => new Promise((i) => {
    t.style.height = t.scrollHeight + "px", requestAnimationFrame(() => {
      t.style.height = "0";
    }), n.value = !1, i(n.value);
  }), h = () => new Promise((i) => {
    t.style.height = t.scrollHeight + "px", t.addEventListener("transitionend", function s() {
      t.style.height = "auto", t.removeEventListener("transitionend", s);
    }), n.value = !0, i(n.value);
  }), r = () => n.value ? a() : h(), u = (i) => {
    i.style.height = e.openedByDefault ? "auto" : "0", e.minHeight !== void 0 && (typeof e.minHeight == "number" && (e.minHeight += "px"), i.style.minHeight = e.minHeight), e.maxHeight !== void 0 && (typeof e.maxHeight == "number" && (e.maxHeight += "px"), i.style.maxHeight = e.maxHeight), i.style.transition = `height ${e.duration}ms ${e.timingFunction}`, i.style.overflow = "hidden";
  }, d = () => {
    t.style.height = n.value ? "auto" : "0";
  };
  if (!(t instanceof Element))
    throw new Error("Provided element must be an instance of Element");
  return u(t), {
    toggle: r,
    close: a,
    open: h,
    hide: a,
    show: h,
    refresh: d,
    opened: n
  };
};
export {
  f as default
};
