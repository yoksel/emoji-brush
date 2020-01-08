const lineStyles = {
  'linear': {
    name: 'linear',
    props: {}
  },
  'linear-rotated': {
    name: 'linear-rotated',
    props: {
      rotated: true
    }
  },
  'mirrored': {
    name: 'mirrored',
    props: {
      mirrored: true
    }
  },
  'mirrored-offset': {
    name: 'mirrored-offset',
    props: {
      mirrored: true,
      startOffset: true
    }
  },
  'mirrored-offset-between': {
    name: 'mirrored-offset-between',
    props: {
      mirrored: true,
      startOffsetBetween: true
    }
  },
  // todo
  'waves': {
    name: 'waves',
    props: {
      mirrored: true,
      startOffset: true,
      rotated: true,
      waves: true
    }
  },
  // todo
  'scattered': {
    name: 'scattered',
    props: {
      // mirrored: true,
      // startOffset: true,
      // scattered: true,
      // rotated: true
    }
  }
};

export default lineStyles;
