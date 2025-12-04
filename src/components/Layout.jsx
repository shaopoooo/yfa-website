// src/components/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 頂部導航 */}
      <Navbar />
      
      {/* 中間內容區域 (會隨頁面切換變動) */}
      <main className="flex-grow">
        {children}
      </main>
      
      {/* 底部頁尾 */}
      <Footer />
    </div>
  );
};

export default Layout;