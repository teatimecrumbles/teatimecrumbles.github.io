// Remembers the theme a visitor picks at the top of the app hub (Linen, Parchment or Imperial), on both language pages.
// Only the theme's name is kept, in this browser's localStorage; nothing is sent anywhere. Without this script the
// theme buttons still work (site.css does the switching), the choice just is not remembered.
(function () {
  var KEY = 'teatimecrumbles-theme';
  var BAR = { linen: '#faf6ef', parchment: '#f2e9d5', imperial: '#1b1222' };
  function read() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function save(value) { try { localStorage.setItem(KEY, value); } catch (e) { /* private mode: not remembered */ } }
  function paintBrowserBar(value) {
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta && BAR[value]) meta.setAttribute('content', BAR[value]);
  }

  var theme = read();
  if (!BAR.hasOwnProperty(theme)) {
    // No choice yet: follow the phone's dark mode with the dark theme, otherwise keep Parchment.
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
})();
