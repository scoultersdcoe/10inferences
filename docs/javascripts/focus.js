// Focus mode: a header button that hides the sidebar so the text fills the page.
(function () {
  var KEY = "focus-mode";
  var root = document.documentElement;
  function saved() { try { return localStorage.getItem(KEY) === "1"; } catch (e) { return false; } }
  function save(on) { try { localStorage.setItem(KEY, on ? "1" : "0"); } catch (e) {} }
  var ICON_ON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 21v-2H6.41l4.5-4.5-1.41-1.41-4.5 4.5V14H3v7h7m4.5-10.09 4.5-4.5V10h2V3h-7v2h3.59l-4.5 4.5 1.41 1.41Z"/></svg>';
  var ICON_OFF = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.5 3.09 15 7.59V4h-2v7h7V9h-3.59l4.5-4.5-1.41-1.41M4 13v2h3.59l-4.5 4.5 1.41 1.41 4.5-4.5V20h2v-7H4Z"/></svg>';
  function apply(on, btn) {
    root.classList.toggle("focus-mode", on);
    if (btn) {
      btn.innerHTML = on ? ICON_OFF : ICON_ON;
      btn.title = on ? "Show the menu" : "Hide the menu (focus mode)";
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    }
  }
  apply(saved(), null);
  function init() {
    var header = document.querySelector(".md-header__inner");
    if (!header || document.querySelector(".focus-toggle")) return;
    var btn = document.createElement("button");
    btn.className = "md-header__button md-icon focus-toggle";
    btn.type = "button";
    btn.setAttribute("aria-label", "Toggle focus mode");
    var anchor = header.querySelector(".md-search") || header.querySelector("label[for='__search']");
    header.insertBefore(btn, anchor ? anchor : null);
    apply(saved(), btn);
    btn.addEventListener("click", function () {
      var on = !root.classList.contains("focus-mode");
      apply(on, btn); save(on);
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
