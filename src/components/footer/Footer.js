import './style.css';
import linkedin from './linkedIn.svg';
import github from './gitHub.svg';
import telegram from './telegram.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://t.me/Dweep23" target='_blank' rel='noreferrer'>
                <img src={telegram} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://www.linkedin.com/in/antonkobyshev/" target='_blank' rel='noreferrer'>
                <img src={linkedin} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://github.com/AntonKobyshev" target='_blank' rel='noreferrer'>
                <img src={github} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2023 all rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
