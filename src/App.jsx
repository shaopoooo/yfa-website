// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
// import Business from './pages/Business'; // Business 元件現在已無路由使用，可視情況移除
import News from './pages/News';
import Investor from './pages/Investor'; 
import Contact from './pages/Contact';
import About from './pages/About';
import Electronics from './pages/Electronics';
import Opto from './pages/Opto';
import Biotech from './pages/Biotech'; // 1. 引入 Biotech

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/opto" element={<Opto />} />
          <Route path="/biotech" element={<Biotech />} />
          <Route path="/news" element={<News />} />
          <Route path="/investor" element={<Investor />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;