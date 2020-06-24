import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import avatarPlant from '../../assets/static/antamina.png';

import '../../assets/styles/Dashboard.scss';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Dashboard = () => {
  const datasets = {
    bar: [
      {
        label: 'Bar dataset',
        data: [10, 20, 40, 30],
        // this dataset is drawn below
        backgroundColor: 'rgba(117, 175, 91, 0.3)',
        borderColor: '#75af5b',
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
    'bar-2': [
      {
        label: 'Bar dataset',
        data: [10, 20, 40, 30],
        backgroundColor: 'rgba(0, 0, 255, 0.3)',
        borderColor: 'rgba(0, 0, 255, 1)',
      },
      {
        label: 'Line Dataset',
        data: [10, 20, 40, 30],
        type: 'line',
        // this dataset is drawn on top
        order: 2,
      },
    ],
    doubleBar: [{
      label: 'Dataset 1',
      backgroundColor: 'rgba(0, 0, 255, 0.5)',
      borderColor: 'rgba(0, 0, 255, 1)',
      borderWidth: 1,
      data: [10, 20, 40, 30],
    }, {
      label: 'Dataset 2',
      backgroundColor: 'rgba(117, 175, 91, 0.2)',
      borderColor: '#75af5b',
      borderWidth: 1,
      data: [10, 20, 40, 30],
    }],
    barStacked: [
      {
        label: 'Dataset 1',
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        borderColor: 'rgba(255, 0, 0, 1)',
        stack: 'Stack 0',
        data: [10, 20, 40, 30],
      }, {
        label: 'Dataset 2',
        backgroundColor: 'rgba(0, 0, 255, 0.5)',
        borderColor: 'rgba(0, 0, 255, 1)',
        stack: 'Stack 0',
        data: [10, 20, 40, 30],
      }, {
        label: 'Dataset 3',
        backgroundColor: 'rgba(117, 175, 91, 0.5)',
        borderColor: '#75af5b',
        stack: 'Stack 0',
        data: [10, 20, 40, 30],
      },
    ],
  };

  const query = useQuery();
  const graphicName = query.get('graphic');
  const [title, setTitle] = useState('Promedio de horas trabajadas');
  const [chartType, setChartType] = useState(graphicName);
  const [chartData, setChartData] = useState({
    datasets: datasets[query.get('graphic')],
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
  });

  const [chartOptions, setChartOptions] = useState({
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: true,
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
  });

  const changeGraphic = (chartType, title) => {
    setTitle(title);
    setChartType(chartType);
    chartData.datasets = datasets[chartType];
    console.log(graphicName);
  };

  return (
    <div className='dashboard-app'>
      <Header avatar={avatarPlant} redirect='/home-plant' />
      <main className='banner'>
        <div className='container dashboard'>
          <section className='dashboard__options'>
            <ul className='dashboard__options--list-group'>
              <Link to='/dashboard-plant?graphic=bar'>
                <li className='list' onClick={() => changeGraphic('bar', 'Sumatoria de personas que registran ingreso a planta')}>
                  Sumatoria de personas que registran ingreso a planta
                  <FontAwesomeIcon icon={faChevronRight} />
                </li>
              </Link>
              <Link to='/dashboard-plant?graphic=bar-2'>
                <li className='list' onClick={() => changeGraphic('bar-2', 'Sumatoria de empresas terceras en planta')}>
                  Sumatoria de empresas terceras en planta
                  <FontAwesomeIcon icon={faChevronRight} />
                </li>
              </Link>
            </ul>
          </section>
          <section className='dashboard__graphic'>
            <div className='dashboard__graphic--container'>
              <div className='dashboard__graphic--top'>
                <h3 className='dashboard__graphic--top_title'>{title}</h3>
                <div className='dashboard__graphic--top_input-group'>
                  <input type='date' />
                  <input type='date' />
                </div>
              </div>
              { chartType === 'bar' && <Bar data={chartData} options={chartOptions} /> }
              { chartType === 'bar-2' && <Bar data={chartData} options={chartOptions} /> }
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>

  );
};

export default Dashboard;
