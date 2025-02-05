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
      </Routes>
    </Router>

  );
}

export default App;
