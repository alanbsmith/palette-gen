import { darken, rgba } from 'polished';

// common colors
const chrome000 = '#FFFFFF';
const chrome500 = '#7A7A7A';
const chrome600 = '#595959';
const chrome800 = '#353535';
const chrome900 = '#232323';
const blue = '#2196F3';
const deepPurple = '#673AB7';

const theme = {
  colors: {
    // ui colors
    background: '#fafafa',
    link: blue,
    linkHover: darken(0.2, blue),
    linkVisited: darken(0.2, deepPurple),
    text: chrome800,
    textLight: chrome500,
    overlay: rgba(chrome900, 0.85),
    shadow: rgba(chrome600, 0.4),
    shadowLight: rgba(chrome600, 0.2),

    // material ui grayscale
    chrome000,
    chrome100: '#EEE',
    chrome200: '#DDD',
    chrome300: '#BCBCBC',
    chrome400: '#9B9B9B',
    chrome500,
    chrome600,
    chrome700: '#474747',
    chrome800,
    chrome900,
  },
  dimensions: {
    baseFontSize: 16,
    baseGrid: 8,
  },
  fonts: {
    primary: 'Open Sans',
    primaryFallback: 'Helvetica, Arial, sans-serif',
  },
};

export default theme;
