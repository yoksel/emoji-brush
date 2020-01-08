export const templateMarkup = document.createElement('template');
templateMarkup.innerHTML = `<style>
  :host {
    display: block;
    min-width: 500px;
    min-height: 500px;

    --font-size: 32px;
    font: inherit;
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: var(--font-size);
    user-select: none;
  }

  path {
    stroke: transparent;
    stroke-width: 10px;
    stroke-opacity: .35;
    fill: none;
    transition: stroke .15s;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  path:hover {
    stroke: var(--color-hover);
    cursor: pointer;
  }

  text,
  textPath,
  .current-path {
    pointer-events: none;
  }

  .panel {
    position: absolute;
    top: 1rem;
    left: 1rem;
  }

  SELECT {
    line-height: 2rem;
    height: 2rem;
    max-width: 200px;
    font: inherit;
  }

  .highlight {
    stroke: var(--color-focus);
    stroke-opacity: .65;
  }

  .highlight:hover {
    stroke: var(--color-focushover);
  }

  #clear {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    line-height: 2rem;
    height: 2rem;
    font: inherit;
  }

  .control {
    padding: .25rem 1rem;
    background: var(--color-base);
    border: 0;
    border-radius: .25rem;
    font: inherit;
    cursor: pointer;
    transition: all var(--transition);
    box-shadow: 0 0 0 2px transparent inset;
    color: var(--color-text);
  }
  .control:not(:disabled):hover {
    background: transparent;
    box-shadow:  0 0 0 2px var(--color-base) inset;
    color: var(--color-base);
  }
  .control:disabled {
    cursor: not-allowed;
    opacity: .5;
    color: var(--color-texttransp);
  }
</style>

<svg id="paint-area">
  <!-- Shape for measuring SVG scaling -->
  <rect id="measure-rect"
    fill="transparent"
    x="0" y="0"
    width="100" height="100"></rect>

  <g id="target-group"></g>
</svg>

<div class="panel">
  <select id="select-symbols"></select>
  <select id="select-style"></select>
  <select id="select-font-size"></select>
</div>

<button type="button" id="clear" class="control">Clear</button>
`;

export const templateGroup = document.createElement('template');
templateGroup.innerHTML = `<path
  id="path-{id}" d=""
  style="stroke-width: {fontSize}"></path>
  <text style="font-size: {fontSize}" dy=".35em">
    <textPath href="#path-{id}"></textPath>
  </text>
`;
