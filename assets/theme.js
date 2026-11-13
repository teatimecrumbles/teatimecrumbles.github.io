// Remembers the theme a visitor picks in the app hub's theme menu (Parchment, Linen or Imperial), on both language pages,
// and closes the menu after a pick. Only the theme's name is kept, in this browser's localStorage; nothing is sent anywhere.
// Without this script the menu still opens and the themes still switch (site.css does that); the choice is just not remembered.
(function () {
  var KEY = 'teatimecrumbles-theme';
  var BAR = { parchment: '#f4ecdb', linen: '#faf7f1', imperial: '#1b1222' };
  var menu = document.querySelector('details.theme');
  function read() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function save(value) { try { localStorage.setItem(KEY, value); } catch (e) { /* private mode: not remembered */ } }
  function paintBrowserBar(value) {
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta && BAR[value]) meta.setAttribute('content', BAR[value]);
  }
  function close(returnFocus) {
    if (!menu || !menu.open) return;
    menu.open = false;
    if (returnFocus) menu.querySelector('summary').focus();
  }

  var theme = read();
  if (!BAR.hasOwnProperty(theme)) {
    // No choice yet: a phone in dark mode starts on the dark theme, everything else on Parchment.
    theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'imperial' : 'parchment';
  }
  var radio = document.getElementById('theme-' + theme);
  if (radio) radio.checked = true;
  paintBrowserBar(theme);

  document.addEventListener('change', function (event) {
    var input = event.target;
    if (input && input.name === 'theme' && BAR.hasOwnProperty(input.value)) {
      save(input.value);
      paintBrowserBar(input.value);
    }
  });
  if (menu) {
    // A tap or click on a theme closes the menu; arrow keys only move between themes.
    menu.addEventListener('pointerup', function (event) {
      if (event.target.closest('.opt')) setTimeout(function () { close(false); }, 150);
    });
    document.addEventListener('click', function (event) { if (!menu.contains(event.target)) close(false); });
    document.addEventListener('keydown', function (event) { if (event.key === 'Escape') close(true); });
  }
})();
