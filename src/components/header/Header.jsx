import './style.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <br />
            <em>Anton Kobyshev</em>
          </strong>
          <br />I am a fullstack developer
        </h1>
        <div className="header__text">
          <p>with a passion to create.</p>
        </div>
        <div className="links">
          <Link to="/projects">
            <button className="btn">Go to Projects</button>
          </Link>
          <a
            href="https://drive.google.com/file/d/1MLtCq15eL_XeS43IOKtmn8Ks2oGpHbD0/view?usp=sharing"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
