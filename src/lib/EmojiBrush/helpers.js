const ignoredUnicodeModifiers = {
  65038: 1, // &#xFE0E, text modifier
  65039: 1, // &#xFE0F, emoji modifier
};

export const getStep = ({from, to}) => {
  const moveX = Math.abs(to.x - from.x);
  const moveY = Math.abs(to.y - from.y);
  return Math.max(moveX,moveY);
};

export const pointsToStr = (pointsList) => {
  return pointsList
    .map(({x, y}) => `${x},${y}`)
    .join(' ');
};

// Return scale value if svg was resized
export const getScale = (measurePath) => {
  const width = measurePath.getAttribute('width');
  const rect = measurePath.getBoundingClientRect();

  return width / rect.width;
};

export const getSymbolsList = (str) => {
  const list = [];

  for (let char of str) {
    let unicodeNum = char.codePointAt();
    // Ignore emoji modifiers
    // fix problem for emoji like this ⭐️
    // for..of can't handle it like one symbol
    if(!char || ignoredUnicodeModifiers[unicodeNum]) {
      continue;
    }

    // Add emoji modifier to every symbol
    list.push(`${char}&#xFE0F`);
  }

  return list;
};

export const fillSelect = ({elem, currentValue, list}) => {
  list.forEach(item => {
    const value = item.name ? item.name : item;
    const selected = value === currentValue ? 'selected' : '';
    elem.insertAdjacentHTML('beforeEnd',`<option value="${value}" ${selected}>${value}</option>`);
  })
};

export const fillTemplate = ({tmpl, data}) => {
  if(!tmpl || !data) {
    return;
  }

  return tmpl.replace(/{([^"]{1,})}/gm, (match, str) => {
    if (data[str] !== undefined) {
      return data[str];
    }
    return '';
  });
}

export const getEmojiStrLength = (str) => {
  let counter = 0;

  for (let char of str) {
    let unicodeNum = char.codePointAt();

    if(!char || ignoredUnicodeModifiers[unicodeNum]) {
      continue;
    }

    counter++;
  }

  return counter;
};
