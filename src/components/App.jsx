import "../styles/main.css"
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Home from "pages/Home";
import Projects from "pages/Projects";
import Contacts from "pages/Contacts";

export const App = () => {
  return (
    <div>

      <Navbar />

      <Home />

      <Projects />

      <Contacts />

      <Footer />

    </div>
  );
};
