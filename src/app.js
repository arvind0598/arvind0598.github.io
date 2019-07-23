/* eslint-disable no-undef */
import './styles/index.scss';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Chart from 'chart.js';

/**
 * ELEMENT REFERENCES
 */

const mainProgressBar = document.getElementById('main-progress-bar');
const primaryColorElements = document.querySelectorAll('.is-primary');
const gpaChartContext = document.getElementById('gpa-chart').getContext('2d');

/**
 * CONSTANTS
 */

const VIEWPORT_TOTAL_HEIGHT = document.documentElement.scrollHeight;
const VIEWPORT_HEIGHT = window.innerHeight;
const COOL_COLORS = ['#22a39f', '#84bcda', '#ecc30b', '#f37748', '#d56062'];
const GPA_DATA = [8.14, 8.23, 9.14, 8.58, 8.41, 8.65];
const SEM_DATA = ['I', 'II', 'III', 'IV', 'V', 'VI'];

/**
 * DERIVED VALUES
 */

const deriveCGPA = (gpaArr) => {
  let sumGPA = 0;
  const cgpaArr = [];
  gpaArr.forEach((gpa, i) => {
    sumGPA += gpa;
    cgpaArr.push(parseFloat((sumGPA / (i + 1)).toFixed(2), 10));
  });
  return cgpaArr;
};

const CGPA_DATA = deriveCGPA(GPA_DATA);

/**
 * EVENT LISTENERS
 */

const updateProgressBar = () => {
  const scrolledHeight = document.documentElement.scrollTop;
  mainProgressBar.setAttribute('value', (scrolledHeight + VIEWPORT_HEIGHT) / VIEWPORT_TOTAL_HEIGHT);
};

let currColor = 1;
const changePrimaryColor = () => {
  // eslint-disable-next-line no-param-reassign
  primaryColorElements.forEach((node) => { node.style.backgroundColor = COOL_COLORS[currColor]; });
  currColor = (currColor + 1) % COOL_COLORS.length;
};

const createGPAChart = () => (
  new Chart(gpaChartContext, {
    type: 'line',
    data: {
      labels: SEM_DATA,
      datasets: [
        {
          label: 'GPA',
          data: GPA_DATA,
          backgroundColor: 'rgba(74,20,140,0.2)',
          borderColor: 'rgba(18,0,94,1)',
        },
        {
          label: 'CGPA',
          data: CGPA_DATA,
          backgroundColor: 'rgba(255,23,68,0.4)',
          borderColor: 'rgba(255,23,68,1)',
        },
      ],
    },
    options: {
      legend: {
        display: true,
        position: 'bottom',
      },
      layout: {
        padding: 30,
      },
      scales: {
        yAxes: [{
          ticks: {
            // min: 7.0,
            // max: 10.0,
          },
        }],
      },
    },
  })
);

window.onload = () => {
  // document.addEventListener('scroll', updateProgressBar);
  primaryColorElements.forEach(node => node.addEventListener('dblclick', changePrimaryColor));
  AOS.init();
  Chart.defaults.global.animation.easing = 'easeInOutSine';
  Chart.defaults.global.animation.duration = 1500;
  document.addEventListener('aos:in:animate-gpa-chart', createGPAChart);
};
