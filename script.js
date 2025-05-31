javascript
function toggleLang() {
  const lang = document.documentElement.getAttribute('lang');
  if (lang === 'ar') {
    window.location.href = window.location.pathname.replace('.html', '_en.html') || 'index_en.html';
  } else {
    window.location.href = window.location.pathname.replace('_en.html', '.html') || 'index.html';
  }
}
