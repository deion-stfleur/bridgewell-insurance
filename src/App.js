import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Main from './pages/Main';
import Navbar from './components/Navbar';
import About from './pages/About';
import Blog from './pages/Blog';
import Services from './pages/Services';  
import MedicareAssistance from './pages/Medicare-Assistance';
import MedicaidAssitance from './pages/Medicaid-Assistance';
import InHome from './pages/In-Home'
import ScrollToTop from './components/ScrollToTop';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Why from './pages/Why';
import Events from './pages/Events';
import Scroller from './components/Scroller';


function App() {
  return (

    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/Medicare-Assistance" element={<MedicareAssistance />} />
        <Route path="/services/Medicaid-Assistance" element={<MedicaidAssitance />} />
        <Route path="/services/In-Home-Assitance" element={<InHome />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/why-choose-us" element={<Why />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <Scroller />
    </Router>

  );
}

export default App;
