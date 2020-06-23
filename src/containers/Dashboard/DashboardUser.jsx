import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import avatarUser from '../../assets/static/img_avatar.png';
import Graphic from '../../components/Graphic';

import '../../assets/styles/Dashboard.scss';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Header avatar={avatarUser} />
      <main className='banner'>
        <div className='container'>
          <section className='graphic-group'>
            <div className='graphic'>
              <Graphic name='first' />
            </div>
            <div className='graphic'>
              <Graphic name='second' />
            </div>
          </section>
          <section className='graphic-group'>
            <div className='graphic'>
              <Graphic name='third' />
            </div>
            <div className='graphic'>
              <Graphic name='cuatro' />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>

  );
};

export default Dashboard;
