import '../styles/main.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import Project from 'pages/Project';
import Home from 'pages/Home';
import Projects from 'pages/Projects';
import Contacts from 'pages/Contacts';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/project" element={<Project />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
