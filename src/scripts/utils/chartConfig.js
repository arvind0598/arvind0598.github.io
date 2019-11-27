import Color from './Color';

const getColors = () => {
  const landingSection = document.getElementById('landing-section');
  const colorGradient = getComputedStyle(landingSection).backgroundImage;
  const colorExtractRegex = /rgba?\(\s?\d+,\s?\d+,\s?\d+\)/g;
  const colorsArray = colorGradient.match(colorExtractRegex);
  return colorsArray.slice(0, 2);
};

const getChartConfig = (SEM_DATA, GPA_DATA, CGPA_DATA) => {
  const [primaryColor, secondaryColor] = getColors().map((x) => new Color(x));
  return {
    type: 'line',
    data: {
      labels: SEM_DATA,
      datasets: [
        {
          label: 'GPA',
          data: GPA_DATA,
          backgroundColor: primaryColor.getString(0.5),
          borderColor: primaryColor.getString(1),
        },
        {
          label: 'CGPA',
          data: CGPA_DATA,
          backgroundColor: secondaryColor.getString(0.8),
          borderColor: secondaryColor.getString(1),
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
  };
};

export default getChartConfig;
