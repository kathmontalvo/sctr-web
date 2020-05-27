import React, { useEffect, createElement } from 'react';
import Chart from 'chart.js';

const Graphic = () => {
  const createChart = () => {
    const ctx = document.getElementById('main-chart');
    const newChart = new Chart(ctx, {
      type: 'bar',
      data: {
        datasets: [
          {
            label: 'Bar Dataset',
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
          display: false,
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
  return <canvas id='main-chart' />;
};

export default Graphic;
