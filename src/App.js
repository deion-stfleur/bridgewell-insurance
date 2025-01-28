import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Main from './pages/Main';
import Navbar from './components/Navbar';
import About from './pages/About';

function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>

  );
}

export default App;
