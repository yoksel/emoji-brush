console.clear();
import ThemeSwitcher from './lib/ThemeSwitcher/index.js';
import EmojiBrush from './lib/EmojiBrush/index.js';

(function() {
  document.addEventListener('change-theme', () => {
    document.body.style.background = getBackgroundStr(event.detail.colors)
  });

  function getBackgroundStr(colorsList) {
    let bgStr = '';

    if(colorsList.length === 1) {
      bgStr = colorsList[0]
      return bgStr;
    }

    bgStr = `linear-gradient(to bottom, ${colorsList.join(',')})`;
    return bgStr;
  }

  window.customElements.define('emoji-brush', EmojiBrush);
  window.customElements.define('theme-switcher', ThemeSwitcher);
})();
