/* eslint-disable no-undef */
import getChartConfig from './utils/chartConfig';
import deriveCGPA from './utils/deriveCGPA';
import attachHamburgerClickListeners from './utils/toggleHamburger';
import { GPA_DATA, SEM_DATA } from './constants';

const gpaChartContext = document.getElementById('gpa-chart').getContext('2d');
const landingSection = document.getElementById('landing-section');
const navbarSection = document.getElementById('navbar-main');

const CGPA_DATA = deriveCGPA(GPA_DATA);

let chartReference = null;

const gpaChartConfig = getChartConfig(SEM_DATA, GPA_DATA, CGPA_DATA);

// NOTE: AOS has a bug which prevents out for custom events from firing
// Hence until fixed will simply fire based on toggle
// https://github.com/michalsnik/aos/issues/473

let isChartVisible = false;

const createGPAChart = () => {
  chartReference = new Chart(gpaChartContext, gpaChartConfig);
};

const doChartAnimation = () => {
  if (isChartVisible) chartReference.destroy();
  else createGPAChart();
  isChartVisible = !isChartVisible;
};

const toggleNavbarDepth = () => {
  navbarSection.classList.toggle('has-material-shadow-2');
};

window.onload = () => {
  AOS.init();
  Chart.defaults.global.animation.easing = 'easeInOutSine';
  Chart.defaults.global.animation.duration = 1500;
  document.addEventListener('aos:in:animate-gpa-chart', doChartAnimation);
  document.addEventListener('aos:out:animate-gpa-chart', doChartAnimation);
  new IntersectionObserver(toggleNavbarDepth).observe(landingSection);
  attachHamburgerClickListeners();
};
