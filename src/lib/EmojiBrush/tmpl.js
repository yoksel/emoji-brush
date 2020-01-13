export const templateStyles = document.createElement('template');
templateStyles.innerHTML = `<style>
  :host {
    display: block;
    min-width: 500px;
    min-height: 500px;

    --font-size: 32px;
    font: inherit;
    color: var(--color-base);
  }

  A {
    color: var(--color-base);
  }

  .visuallyhidden {
    position: absolute;

    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  .paint-area {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: var(--font-size);
    user-select: none;
  }

  .paint-area path {
    stroke: transparent;
    stroke-opacity: .35;
    fill: none;
    transition: stroke .15s;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .paint-area path:hover {
    stroke: var(--color-hover);
    cursor: pointer;
  }

  .paint-area text,
  .paint-area textPath,
  .paint-area .current-path {
    pointer-events: none;
  }

  .paint-area textPath {
    fill: currentColor;
  }

  SELECT,
  INPUT {
    height: 2rem;
    max-width: 200px;
    margin-left: 1rem;
    padding: 0 .25rem;
    box-sizing: border-box;
    background: #EEE;
    border: 1px solid #DDD;
    border-radius: .25rem;
    font: inherit;
    line-height: 2rem;
    vertical-align: middle;
  }

  .highlight path {
    stroke: var(--color-focus);
    stroke-opacity: .65;
  }

  .highlight:hover path {
    stroke: var(--color-focushover);
  }

  .panel {
    position: absolute;
    z-index: 10;
    left: 1rem;
    right: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .panel--top {
    top: 2rem;
    justify-content: flex-start;
  }
  .panel--bottom {
    bottom: 2rem;
  }

  .choice {
    display: flex;
  }

  .choice__label {
    display: flex;
    align-items: center;
  }

  .choice[data-mode="presets"] .choice__label--presets {
    margin-right: 1rem;
  }

  .choice__label-text {
    cursor: pointer;
  }

  .choice__input {
    margin-left: 0;
  }

  .choice[data-mode="presets"] .choice__input--custom,
  .choice[data-mode="custom"] .choice__input--presets {
    display: none;
  }
  .choice[data-mode="presets"] .choice__label-text--presets,
  .choice[data-mode="custom"] .choice__label-text--custom {
    box-shadow: none;
  }
  .choice[data-mode="presets"] .choice__label-text--presets:hover,
  .choice[data-mode="custom"] .choice__label-text--custom:hover {
    box-shadow: none;
    background: transparent;
    color: var(--color-base);
  }

  .control {
    padding: .25rem 1rem;
    background: transparent;
    border: 0;
    border-radius: .25rem;
    box-shadow:  0 0 0 2px var(--color-base) inset;
    font: inherit;
    text-decoration: none;
    cursor: pointer;
    transition: all var(--transition);
    color: var(--color-base);
  }
  .control:not(:disabled):hover {
    box-shadow: 0 0 0 2px transparent inset;
    background: var(--color-base);
    color: var(--color-text);
  }
  .control:disabled {
    cursor: not-allowed;
    opacity: .5;
    color: var(--color-basetransp);
  }

  .controls__downloads {
    display: none;
    justify-content: center;
  }

  .controls[data-state="loading"] .control--get,
  .controls[data-state="ready"] .control--get {
    display: none;
  }
  .controls[data-state="loading"] .controls__downloads,
  .controls[data-state="ready"] .controls__downloads {
    display: flex;
  }

  .controls__downloads .control {
    opacity: .2;
    pointer-events: none;
  }
  .controls[data-state="ready"] .control {
    opacity: 1;
    pointer-events: auto;
  }

  .theme-switcher {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }

  .disclaimer {
    font-size: .9em;
  }

  .linkslist {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0
  }

  .linkslist__item + .linkslist__item {
    margin-left: 1rem;
  }

  .linkslist__icon {
    display: block;
    width: 1.5em;
    height: 1.5em;
    fill: currentColor;
    transition: opacity var(--transition);
  }

  .linkslist__icon:hover {
    opacity: .75;
  }

  .linkslist__username {
    font-size: 0;
  }
</style>
`;

export const templateMarkup = document.createElement('template');
templateMarkup.innerHTML = `
<svg id="paint-area" class="paint-area">
  <!-- Shape for measuring SVG scaling -->
  <rect id="measure-rect"
    fill="transparent"
    x="0" y="0"
    width="100" height="100"></rect>

  <g id="target-group"></g>
</svg>

<div class="panel panel--top">
  <div class="choice" id="input-symbols-choice" data-mode="presets">
    <label
      class="choice__label choice__label--presets">
      <span
        class="
          choice__label-text
          choice__label-text--presets
          control
        "
        data-value="presets"
        >Presets</span>
      <select
        class="choice__input choice__input--presets"
        id="select-symbols"></select>
    </label>

    <label
      class="choice__label choice__label--custom">
      <span
        class="
          choice__label-text
          choice__label-text--custom
          control
        "
        data-value="custom"
        >My symbols</span>
      <input
        class="choice__input choice__input--custom"
        type="text" id="add-symbols" placeholder="Add emoji or text"/>
    </label>
  </div>
  <select id="select-style"></select>
  <select id="select-font-size"></select>

  <theme-switcher class="theme-switcher"></theme-switcher>
</div>

<div class="panel panel--bottom">
  <button type="button" id="clear" class="control">Clear</button>

  <ul class="linkslist">
    <li class="linkslist__item">
      <a href="https://github.com/yoksel/emoji-brush/" class="linkslist__link"><svg class="linkslist__icon linkslist__icon--github" viewBox="0 0 16 16" width="16" height="16"><path d="M7.999,0.431c-4.285,0-7.76,3.474-7.76,7.761 c0,3.428,2.223,6.337,5.307,7.363c0.388,0.071,0.53-0.168,0.53-0.374c0-0.184-0.007-0.672-0.01-1.32 c-2.159,0.469-2.614-1.04-2.614-1.04c-0.353-0.896-0.862-1.135-0.862-1.135c-0.705-0.481,0.053-0.472,0.053-0.472 c0.779,0.055,1.189,0.8,1.189,0.8c0.692,1.186,1.816,0.843,2.258,0.645c0.071-0.502,0.271-0.843,0.493-1.037 C4.86,11.425,3.049,10.76,3.049,7.786c0-0.847,0.302-1.54,0.799-2.082C3.768,5.507,3.501,4.718,3.924,3.65 c0,0,0.652-0.209,2.134,0.796C6.677,4.273,7.34,4.187,8,4.184c0.659,0.003,1.323,0.089,1.943,0.261 c1.482-1.004,2.132-0.796,2.132-0.796c0.423,1.068,0.157,1.857,0.077,2.054c0.497,0.542,0.798,1.235,0.798,2.082 c0,2.981-1.814,3.637-3.543,3.829c0.279,0.24,0.527,0.713,0.527,1.437c0,1.037-0.01,1.874-0.01,2.129 c0,0.208,0.14,0.449,0.534,0.373c3.081-1.028,5.302-3.935,5.302-7.362C15.76,3.906,12.285,0.431,7.999,0.431z"></path></svg>
      <span class="linkslist__username visuallyhidden">yoksel/emoji-brush/</span></a>
    </li>

    <li class="linkslist__item">
      <a href="https://twitter.com/yoksel_en" class="linkslist__link">
        <svg class="linkslist__icon linkslist__icon--twitter" viewBox="0 0 16 16" width="16" height="16"><path d="M15.969,3.058c-0.586,0.26-1.217,0.436-1.878,0.515c0.675-0.405,1.194-1.045,1.438-1.809c-0.632,0.375-1.332,0.647-2.076,0.793c-0.596-0.636-1.446-1.033-2.387-1.033c-1.806,0-3.27,1.464-3.27,3.27 c0,0.256,0.029,0.506,0.085,0.745C5.163,5.404,2.753,4.102,1.14,2.124C0.859,2.607,0.698,3.168,0.698,3.767 c0,1.134,0.577,2.135,1.455,2.722C1.616,6.472,1.112,6.325,0.671,6.08c0,0.014,0,0.027,0,0.041c0,1.584,1.127,2.906,2.623,3.206 C3.02,9.402,2.731,9.442,2.433,9.442c-0.211,0-0.416-0.021-0.615-0.059c0.416,1.299,1.624,2.245,3.055,2.271 c-1.119,0.877-2.529,1.4-4.061,1.4c-0.264,0-0.524-0.015-0.78-0.046c1.447,0.928,3.166,1.469,5.013,1.469 c6.015,0,9.304-4.983,9.304-9.304c0-0.142-0.003-0.283-0.009-0.423C14.976,4.29,15.531,3.714,15.969,3.058z"></path></svg>
        <span class="linkslist__username visuallyhidden">yoksel_en</span></a>
    </li>
  </ul>

  <div class="disclaimer">
    🛠 Deeply experimental. May be slow or not work on your device or browser. Sorry 💚
  </div>

  <div class="controls">
    <button
      type="button"
      class="control control--get">Get image</button>

    <div class="controls__downloads">
      <a
        class="control control--download-png">Download PNG</a>
    </div>
  </div>
</div>
`;

export const templateGroup = document.createElement('template');
templateGroup.innerHTML = `<path
  id="path-{id}"
  d=""
  stroke-width="{fontSize}"
  fill="none"></path>
<text
  font-size="{fontSize}" class="text">
  <textPath href="#path-{id}" class="text-path"></textPath>
</text>
`;
