import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Main from './pages/Main';
import Navbar from './components/Navbar';
import About from './pages/About';
import Blog from './pages/Blog';

function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>

  );
}

export default App;
