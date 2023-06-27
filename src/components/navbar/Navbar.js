import './style.css';
import sun from 'img/icons/sun.svg';
import moon from 'img/icons/moon.svg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const activeLink = "nav-list__link nav-list__link--active"
  const nonActiveLink = "nav-list__link"

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>Fullstack</strong> developer
          </NavLink>

          <button className="dark-mode-btn">
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
          </button>

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink to="/" className={({isActive}) => isActive ? activeLink : nonActiveLink}>
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/projects" className={({isActive}) => isActive ? activeLink : nonActiveLink}>
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/contacts" className={({isActive}) => isActive ? activeLink : nonActiveLink}>
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
