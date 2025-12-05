import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar'; // 引入新組件

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* 頂部導航 */}
      <Navbar />
      
      {/* 側邊導覽 (會自動判斷是否顯示) */}
      <Sidebar />
      
      {/* 中間內容區域 */}
      <main className="flex-grow">
        {children}
      </main>
      
      {/* 底部頁尾 */}
      <Footer />
    </div>
  );
};

export default Layout;