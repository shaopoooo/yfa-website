import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Menu } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('');
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false); // 預設收縮

  // 定義關於我們頁面的導覽項目
  const aboutMenuItems = [
    { id: 'intro', label: '關於妍發' },
    { id: 'org', label: '組織架構' },
    { id: 'board', label: '董事會成員' },
    { id: 'milestones', label: '歷史沿革' },
  ];

  // 根據目前路徑決定顯示哪組選單，若無對應則不顯示
  // 未來可以在此擴充其他頁面的選單 (如 /electronics)
  const getMenuItems = () => {
    switch (location.pathname) {
      case '/about':
        return aboutMenuItems;
      default:
        return null;
    }
  };

  const menuItems = getMenuItems();

  // 處理點擊捲動
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // 監聽捲動 (僅在該頁面有選單時執行)
  useEffect(() => {
    if (!menuItems) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -50% 0px' }
    );

    menuItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [menuItems, location.pathname]); // 路徑改變時重新綁定

  // 如果目前頁面沒有設定選單，則不渲染
  if (!menuItems) return null;

  return (
    <div 
      className={`fixed left-4 top-28 hidden md:flex flex-col gap-2 z-[100] bg-white/95 backdrop-blur-xl p-2 rounded-2xl border border-slate-200/80 shadow-2xl transition-all duration-500 ease-spring ${
        isSidebarExpanded ? 'w-48' : 'w-16'
      }`}
    >
      {/* 縮放切換按鈕 */}
      <div className="flex justify-end px-1 mb-2">
          <button 
          onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 border border-slate-200 text-slate-400 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300 shadow-sm mx-auto"
          title={isSidebarExpanded ? "收起選單" : "展開選單"}
          >
          {isSidebarExpanded ? <ChevronLeft size={16} /> : <Menu size={16} />}
          </button>
      </div>

      {/* 選單項目 */}
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className={`group flex items-center p-2 rounded-xl transition-all duration-300 relative overflow-hidden ${
            activeSection === item.id 
              ? 'bg-blue-50 text-blue-700' 
              : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
          } ${isSidebarExpanded ? 'justify-start gap-3 px-3' : 'justify-center'}`}
        >
          {/* 作用中指標線 */}
          {activeSection === item.id && isSidebarExpanded && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-500 rounded-r-full"></div>
          )}

          {/* 指示點 */}
          <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 flex-shrink-0 border-2 ${
            activeSection === item.id 
              ? 'bg-blue-600 border-blue-600 scale-110' 
              : 'bg-transparent border-slate-300 group-hover:border-slate-400'
          }`}></div>

          {/* 文字標籤 */}
          <span className={`text-sm font-medium transition-all duration-500 whitespace-nowrap overflow-hidden ${
            isSidebarExpanded ? 'opacity-100 max-w-[10rem] translate-x-0' : 'opacity-0 max-w-0 -translate-x-4'
          }`}>
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default Sidebar;