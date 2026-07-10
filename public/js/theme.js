function toggleTheme() {
  var html = document.documentElement;
  var btn = document.getElementById('themeToggle');
  var next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  if (btn) btn.textContent = next === 'dark' ? '☾' : '☀';
}

document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = document.documentElement.getAttribute('data-theme') === 'light' ? '☀' : '☾';
});
