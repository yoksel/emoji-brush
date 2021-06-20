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
      double: true,
      mirrored: true
    }
  },
  'mirrored-offset': {
    name: 'mirrored-offset',
    props: {
      double: true,
      mirrored: true,
      startOffset: true
    }
  },
  'mirrored-offset-between': {
    name: 'mirrored-offset-between',
    props: {
      double: true,
      mirrored: true,
      startOffsetBetween: true
    }
  },
  'waves': {
    name: 'waves',
    props: {
      waves: true
    }
  },
  'mirrored-random': {
    name: 'mirrored-random',
    props: {
      double: true,
      mirrored: true,
      scattered: true,
      startOffsetBetween: true
    }
  },
  'grow-random': {
    name: 'grow-random',
    props: {
      grow: true,
      double: true,
      mirrored: false,
      scattered: true,
      startOffsetBetween: true
    }
  },
  'grow-random-sparse': {
    name: 'grow-random-sparse',
    props: {
      grow: true,
      sparse: 0.5,
      waves: true,
      double: true,
      mirrored: false,
      scattered: true,
      startOffsetBetween: true
    }
  },
};

export default lineStyles;
