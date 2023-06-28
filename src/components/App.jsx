import '../styles/main.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import Project from 'pages/Project';
import Home from 'pages/Home';
import Projects from 'pages/Projects';
import Contacts from 'pages/Contacts';
import ScrollToTop from 'utils/scrollToTop';

function App() {
  return (
    <div className="App">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
