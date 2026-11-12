(function () {
  'use strict';

  // Reading progress bar
  var progress = document.getElementById('readingProgress');
  if (progress) {
    window.addEventListener('scroll', function () {
      var h = document.documentElement;
      var scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
      progress.style.width = (Math.min(scrolled, 1) * 100) + '%';
    }, { passive: true });
  }

  // Smooth scroll for TOC (already handled by CSS, but adds offset tolerance)
  document.querySelectorAll('.toc a').forEach(function (link) {
    link.addEventListener('click', function () {
      // CSS scroll-padding-top handles offset; nothing else needed
    });
  });
})();