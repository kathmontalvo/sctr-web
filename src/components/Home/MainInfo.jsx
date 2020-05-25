import React from 'react';

const MainInfo = ({ children }) => (
  <main className='main-user'>
    <div className='container'>
      {children}
    </div>
  </main>
);

export default MainInfo;
