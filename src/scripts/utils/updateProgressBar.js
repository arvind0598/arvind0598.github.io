import { VIEWPORT_HEIGHT, VIEWPORT_TOTAL_HEIGHT } from '../constants';

const updateProgressBar = (progressBar) => {
  const scrolledHeight = document.documentElement.scrollTop;
  progressBar.setAttribute('value', (scrolledHeight + VIEWPORT_HEIGHT) / VIEWPORT_TOTAL_HEIGHT);
};

export default updateProgressBar;
