import React from 'react';

import '../styles/pages/landing.css';

import imgLogo from '../images/logo.svg';

import { TiArrowRightThick } from 'react-icons/ti';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={imgLogo} alt="happy" />
        <main>
          <h1>Leve felicidade para o mundo!</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças</p>
        </main>
        <div className="location">
          <strong>Juazeiro do Norte</strong>
          <span>Ceará</span>
        </div>
        <Link to="/orphanages" className="enter-app" title="Entrar">
          <TiArrowRightThick size={26} color="rgba(0,0,0,0.6)" />
        </Link>
      </div>
    </div>
  );
}

export default Landing;