import "../styles/main.css"
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Home from "pages/Home";
import Projects from "pages/Projects";

export const App = () => {
  return (
    <div>

      <Navbar />

      <Home />

      <Projects />

      <Footer />

    </div>
  );
};
