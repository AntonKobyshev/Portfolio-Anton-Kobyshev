import './style.css';
import linkedin from 'img/icons/linkedIn.svg';
import github from 'img/icons/gitHub.svg';
import telegram from 'img/icons/telegram.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="#!">
                <img src={telegram} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={linkedin} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
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
