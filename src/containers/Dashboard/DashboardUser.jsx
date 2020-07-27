import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Bar, Doughnut } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import avatarUser from '../../assets/static/img_avatar.png';

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
        backgroundColor: 'rgba(117, 175, 91, 0.5)',
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
    doughnut: [
      {
        label: 'Bar dataset',
        data: [10, 20, 40, 30],
        backgroundColor: [
          'rgba(255, 0, 0, 0.5)',
          'rgba(255, 255, 0, 0.5)',
          'rgba(117, 175, 91, 0.5)',
          'rgba(0, 0, 255, 0.5)',
        ],
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
  const [title, setTitle] = useState('Horas de campo por día');
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
      <Header avatar={avatarUser} redirect='/home-user' />
      <main className='banner'>
        <div className='container dashboard'>
          <section className='dashboard__options'>
            <ul className='dashboard__options--list-group'>
              <Link to='/dashboard-user?graphic=bar'>
                <li className='list' onClick={() => changeGraphic('bar', 'Horas de campo por día')}>
                  Horas en campo por día
                  <FontAwesomeIcon icon={faChevronRight} />
                </li>
              </Link>
              <Link to='/dashboard-user?graphic=doughnut'>
                <li className='list' onClick={() => changeGraphic('doughnut', 'Porcentaje de trabajo de campo')}>
                  Porcentaje de trabajo de campo
                  <FontAwesomeIcon icon={faChevronRight} />
                </li>
              </Link>
              <Link to='/dashboard-user?graphic=doubleBar'>
                <li className='list' onClick={() => changeGraphic('doubleBar', 'Horas extra')}>
                  Horas extra
                  <FontAwesomeIcon icon={faChevronRight} />
                </li>
              </Link>
              <Link to='/dashboard-user?graphic=barStacked'>
                <li className='list' onClick={() => changeGraphic('barStacked', 'Sumatoria plantas visitadas')}>
                  Plantas visitadas
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
              { chartType === 'doughnut' && <Doughnut data={chartData} options={chartOptions} /> }
              { chartType === 'doubleBar' && <Bar data={chartData} options={chartOptions} /> }
              { chartType === 'barStacked' && <Bar data={chartData} options={chartOptions} /> }
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>

  );
};

export default Dashboard;
