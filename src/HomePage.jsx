import React from 'react';
import { useHistory } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const history = useHistory();

  return (
    <div className="homepage">
        <span className='yazi1'>Teknolojik Yemekler</span>
        <span className='yazi2'>KOD ACIKTIRIR PİZZA, DOYURUR</span>
      <button onClick={() => history.push('/order')}>ACIKTIM</button>
    </div>
  );
}

export default HomePage;
