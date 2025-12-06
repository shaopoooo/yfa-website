// src/pages/Home.jsx
import React from 'react';
import { ArrowRight, ChevronRight, ExternalLink, Layers, Cpu, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';
import dataTreeBg from '../assets/data-tree-bg.png'; 
import { newsData } from './News';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* 1. Hero Section */}
      <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-50">
        
        {/* 背景層 */}
        <div className="absolute inset-0 z-0">
          <img 
            src={dataTreeBg}
            alt="Data tree with city background" 
            className="w-full h-full object-cover opacity-90 scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/10 via-slate-50/40 to-slate-50"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-multiply"></div>
        </div>

        {/* 氛圍光暈 */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-[120px] z-0 animate-pulse delay-700"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[120px] z-0 animate-pulse"></div>

        {/* 主要內容區 */}
        <div className="relative z-10 text-center max-w-5xl px-6 mt-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-200 bg-green-50/90 backdrop-blur-sm text-green-700 text-xs font-bold tracking-widest uppercase mb-8 shadow-sm ring-1 ring-green-500/20">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Eco-Tech Innovation
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-8 leading-tight drop-shadow-sm">
            科技與自然的 <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-500 to-green-600">完美共生</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-700 max-w-2xl mx-auto mb-12 font-medium leading-relaxed drop-shadow-sm">
            以精密 FPC 電路工藝為基石，<br/>
            孕育智慧農業的無限生機。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full font-bold text-lg hover:shadow-lg hover:shadow-green-500/30 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group">
              開啟合作 <ArrowRight className="group-hover:translate-x-1 transition-transform"/>
            </Link>
            <Link to="/biotech" className="px-8 py-4 border border-slate-300 text-slate-700 rounded-full font-bold text-lg hover:border-green-600 hover:text-green-600 transition-colors bg-white/80 backdrop-blur-md shadow-sm">
              了解技術
            </Link>
          </div>
        </div>
      </div>

      {/* 2. 核心領域 (Core Business Units) - 重新排版：無圖片卡片設計 */}
      <div className="py-24 px-4 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16">
           <div>
             <h2 className="text-4xl font-bold text-slate-900 mb-2">核心領域</h2>
             <p className="text-slate-500 font-medium">Core Business Units</p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 電子事業 Card */}
          <Link to="/electronics" className="group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
              <Layers className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">電子事業</h3>
            <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
              專注於高精密 FPC 軟性印刷電路板製造，提供單雙面、多層板及軟硬結合板製程，並結合 RFID 智慧標籤應用，為客戶提供輕薄、高效的連接解決方案。
            </p>
            <div className="flex items-center text-blue-600 font-bold text-sm tracking-wide pt-4 border-t border-slate-100 mt-auto">
              了解更多 <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* 新世代 IC Card (原光電事業) */}
          <Link to="/opto" className="group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
              <Cpu className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">新世代 IC</h3>
            <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
              因應電源供應需求多元化，致力於 GaN/SiC 功率元件與電源管理晶片的設計開發，提供從裸晶 (Die) 到封裝 (Package) 的全方位 IC 解決方案。
            </p>
            <div className="flex items-center text-indigo-600 font-bold text-sm tracking-wide pt-4 border-t border-slate-100 mt-auto">
              了解更多 <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* 生技農業 Card */}
          <Link to="/biotech" className="group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
              <Sprout className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">生技農業</h3>
            <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
              結合農業 4.0 智能環控技術與 GACP 規範，培育金線蓮、天麻等珍貴藥用植物，並生產無毒安心的頂級鮮蔬果物。
            </p>
            <div className="flex items-center text-emerald-600 font-bold text-sm tracking-wide pt-4 border-t border-slate-100 mt-auto">
              了解更多 <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

        </div>
      </div>

      {/* 3. 最新消息摘要 */}
      <div className="py-24 bg-white border-y border-slate-100">
         <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
               <div><h2 className="text-3xl font-bold text-slate-900 mb-2">最新動態</h2><p className="text-slate-500">Latest News</p></div>
               <Link to="/news" className="text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-1 transition">查看更多 <ChevronRight size={18} /></Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
               {/* 顯示前 3 筆新聞 */}
               {newsData.slice(0,3).map(news => (
                 <a 
                   key={news.id} 
                   href={news.link} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer group flex flex-col h-full"
                 >
                    <div className="flex justify-between items-start mb-3">
                      <div className="text-sm text-slate-400">{news.date}</div>
                      <ExternalLink size={14} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
                    </div>
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full mb-4 w-fit">{news.category}</div>
                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-700 transition-colors line-clamp-2">{news.title}</h3>
                 </a>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
};

export default Home;