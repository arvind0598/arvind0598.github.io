const getChartConfig = (SEM_DATA, GPA_DATA, CGPA_DATA) => ({
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
});

export default getChartConfig;
