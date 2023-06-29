import "./style.css"

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Anton</em>
          </strong>
          <br />I am a fullstack developer
        </h1>
        <div className="header__text">
          <p>with a passion to create.</p>
        </div>
        <a href="https://drive.google.com/file/d/1hdITh90hYIGKjUsBFsaEL9N_L7Sw4-pn/view?usp=sharing" className="btn" target='_blank' rel='noreferrer'>
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
