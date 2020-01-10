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
  'double-rotated': {
    name: 'double-rotated',
    props: {
      // double: true,
      offsetted: true,
      // rotated: true,
      // startOffset: true
    }
  },
  // 'double-rotated-offset-between': {
  //   name: 'double-rotated-offset-between',
  //   props: {
  //     double: true,
  //     offsetted: true,
  //     rotated: true,
  //     startOffsetBetween: true
  //   }
  // },
  // todo
  'waves': {
    name: 'waves',
    props: {
      // double: true,
      // mirrored: true,
      // startOffset: true,
      waves: true
    }
  },
  // todo
  // 'scattered': {
  //   name: 'scattered',
  //   props: {
  //     // mirrored: true,
  //     // startOffset: true,
  //     // scattered: true,
  //     // rotated: true
  //   }
  // }
};

export default lineStyles;
