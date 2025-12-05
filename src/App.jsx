// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Business from './pages/Business';
import News from './pages/News';
import Investor from './pages/Investor'; // 已經引入了
import Contact from './pages/Contact';
import About from './pages/About';

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
          <Route path="/electronics" element={<Business type="electronics" />} />
          <Route path="/opto" element={<Business type="opto" />} />
          <Route path="/biotech" element={<Business type="biotech" />} />
          <Route path="/news" element={<News />} />
          {/* 修改這裡：將佔位 div 改為真正的 Investor 組件 */}
          <Route path="/investor" element={<Investor />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;