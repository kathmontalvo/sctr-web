import React from 'react';

const MainInfo = ({ children, classes }) => (
  <main className='main-user'>
    <div className={`container ${classes}`}>
      {children}
    </div>
  </main>
);

export default MainInfo;
