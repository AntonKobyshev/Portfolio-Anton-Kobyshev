import "../styles/main.css"
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Home from "pages/Home";

export const App = () => {
  return (
    <div>

      <Navbar />

      <Home />

      <Footer />

    </div>
  );
};
