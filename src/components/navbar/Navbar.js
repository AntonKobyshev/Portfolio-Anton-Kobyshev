import './style.css';
import { NavLink } from 'react-router-dom';
import BtnDarkMode from 'components/btnDarkMode/BtnDarkMode';

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

< BtnDarkMode />

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
