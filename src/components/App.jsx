import "../styles/main.css"
import Navbar from "./navbar/Navbar";
import Header from "./header/Header";
import Footer from "./footer/Footer";

export const App = () => {
  return (
    <div>

      <Navbar />
      <Header />
      

      <main className="section">
        <div className="container">

          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>JavaScript, TypeScript, ReactJS, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn, StyledComponents</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>NodeJS, MongoDB</p>
            </li>
          </ul>

        </div>
      </main>
 
      <Footer />

    </div>
  );
};
