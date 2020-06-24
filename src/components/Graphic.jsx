import React, { useEffect } from 'react';
import Chart from 'chart.js';

let myLineChart;

const Graphic = ({ name = 'main', chartType = 'bar', legend = false, label = 'Bar Dataset' }) => {
  const createChart = () => {
    const ctx = document.getElementById(`${name}-chart`);
    if (typeof myLineChart !== 'undefined') myLineChart.destroy();

    myLineChart = new Chart(ctx, {
      type: chartType,
      data: {
        datasets: [
          {
            label: label,
            data: [10, 20, 40, 30],
            // this dataset is drawn below
            order: 1,
          },
          {
            label: 'Line Dataset',
            data: [10, 20, 40, 30],
            type: 'line',
            // this dataset is drawn on top
            order: 2,
          },
        ],
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: legend,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  };
  useEffect(() => {
    createChart();
  }, []);
  return <canvas id={`${name}-chart`} />;
};

export default Graphic;
export { myLineChart };
