(function () {
  function qs(sel, ctx) { return (ctx || document).querySelector(sel); }
  function qsa(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  var lb = qs("#lightbox");
  if (!lb) return;

  var img = qs(".lightbox__img", lb);

  function openLightbox(src, alt) {
    img.src = src;
    img.alt = alt || "";
    lb.classList.add("is-open");
    lb.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
  }

  function closeLightbox() {
    lb.classList.remove("is-open");
    lb.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
    // nettoyage pour éviter le flash d’ancienne image au prochain open
    img.src = "";
    img.alt = "";
  }

  // Ouvre sur clic d’une image “lightbox”
  document.addEventListener("click", function (e) {
    var a = e.target.closest("a.js-lightbox[data-lightbox]");
    if (!a) return;

    e.preventDefault();
    var imageEl = a.querySelector("img");
    openLightbox(a.getAttribute("href"), imageEl ? imageEl.getAttribute("alt") : "");
  });

  // Ferme si clic backdrop / bouton close
  qsa("[data-lightbox-close]", lb).forEach(function (el) {
    el.addEventListener("click", closeLightbox);
  });

  // Ferme avec ESC
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && lb.classList.contains("is-open")) closeLightbox();
  });
})();
