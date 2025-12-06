// src/pages/Opto.jsx
import React from 'react';
import { Cpu, Zap, FileText, Download, Layers, Monitor, PenTool, ArrowRight, FileDown } from 'lucide-react';

const Opto = () => {
  // 核心 IC 產品資料
  const icProducts = [
    {
      id: 'gan-die',
      title: "GaN FET Power IC (Die)",
      type: "裸晶 (Die)",
      desc: "採用新世代氮化鎵 (GaN) 製程，提供極低的導通電阻與高切換頻率。裸晶形式適合高度整合的封裝需求，實現極致的功率密度。",
      features: ["High Switching Frequency", "Low On-Resistance", "Compact Die Size"],
      action: "打開 PDF 規格書",
      icon: <Cpu className="w-10 h-10 text-blue-500" />
    },
    {
      id: 'gan-package',
      title: "GaN FET Power IC (Package)",
      type: "封裝晶片 (Package)",
      desc: "標準封裝的 GaN 功率元件，具備優異的散熱性能與可靠度。適用於各類高效率電源供應器與快充應用。",
      features: ["Standard Package", "High Thermal Performance", "Easy Integration"],
      action: "展示 PDF 介紹",
      icon: <Layers className="w-10 h-10 text-indigo-500" />
    }
  ];

  // 設計與平台服務資料
  const designServices = [
    {
      title: "ODM/OEM Platform Design",
      desc: "提供從晶片選型到系統整合的完整設計平台，加速客戶產品上市時間。",
      icon: <PenTool className="w-6 h-6 text-purple-600" />
    },
    {
      title: "Industrial Power AD Board",
      desc: "專為工業級電源應用設計的類比/數位轉換控制板，具備高抗干擾與穩定性。",
      icon: <Zap className="w-6 h-6 text-yellow-600" />
    },
    {
      title: "Type-C Docking / Multi-Display",
      desc: "針對消費性電子的控制板規劃，支援 Type-C 擴充塢與數位多螢幕顯示應用。",
      icon: <Monitor className="w-6 h-6 text-cyan-600" />
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      
      {/* 1. Hero Section */}
      <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-40">
           <img 
             src="https://images.unsplash.com/photo-1555664424-778a69032054?auto=format&fit=crop&q=80&w=2000" 
             alt="Semiconductor Wafer Background" 
             className="w-full h-full object-cover"
           />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-blue-900/40"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            <Cpu size={14} /> IC Solutions Division
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            新世代 IC 解決方案 <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              GaN/SiC 功率與電源管理
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10">
            因應消費產品升級與半導體材料革新，我們致力於開發新世代 GaN/SiC 功率元件與高效能電源管理晶片，滿足多元的電源供應需求。
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#products" className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold transition flex items-center gap-2">
              瀏覽晶片產品 <ArrowRight size={18} />
            </a>
            <a href="#solutions" className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg font-bold transition backdrop-blur-sm">
              設計解決方案
            </a>
          </div>
        </div>
      </div>

      {/* 2. GaN Power IC Section (ID: products) */}
      <div id="products" className="py-24 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          {/* 修改標題以統一命名 */}
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">GaN 晶片產品</h2>
          <p className="text-slate-500 text-lg">GaN FET Power IC Series</p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {icProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
               <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-blue-50 rounded-xl">
                    {product.icon}
                  </div>
                  <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                    {product.type}
                  </span>
               </div>
               
               <h3 className="text-2xl font-bold text-slate-900 mb-4">{product.title}</h3>
               <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                 {product.desc}
               </p>

               <div className="mb-8">
                 <h4 className="text-sm font-bold text-slate-400 uppercase mb-3">Key Features</h4>
                 <ul className="space-y-2">
                   {product.features.map((feat, idx) => (
                     <li key={idx} className="flex items-center text-slate-700 text-sm">
                       <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                       {feat}
                     </li>
                   ))}
                 </ul>
               </div>

               <button className="w-full py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition flex items-center justify-center gap-2 group">
                 <FileText size={18} />
                 {product.action}
                 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Design & Solutions Platform (ID: solutions) */}
      <div id="solutions" className="bg-slate-900 py-24 text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
         
         <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <div className="mb-16">
               <h2 className="text-3xl md:text-4xl font-bold mb-4">全方位設計規劃服務</h2>
               <p className="text-slate-400 text-lg">Comprehensive Design & Planning Solutions</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {designServices.map((service, idx) => (
                 <div key={idx} className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition duration-300 backdrop-blur-sm">
                    <div className="mb-6 inline-block p-3 bg-slate-700/50 rounded-lg text-blue-400">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                    <p className="text-slate-400 leading-relaxed">
                      {service.desc}
                    </p>
                 </div>
               ))}
            </div>
         </div>
      </div>

      {/* 4. Resources & Request */}
      <div className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
           <div className="inline-flex p-4 bg-green-50 rounded-full mb-6">
              <Download className="w-8 h-8 text-green-600" />
           </div>
           <h2 className="text-3xl font-bold text-slate-900 mb-4">需要樣品進行測試？</h2>
           <p className="text-slate-600 mb-8 max-w-xl mx-auto">
             我們提供完整的客戶樣品申請服務。請下載需求表，填寫後聯絡我們的業務團隊，我們將盡快為您安排。
           </p>
           
           <a 
             href="https://view.officeapps.live.com/op/view.aspx?src=http%3A%2F%2Fwww.yfa.com.tw%2Fimg%2F%E5%AE%A2%E6%88%B6%E9%9C%80%E6%B1%82%E8%A1%A8(Power-IC).docx"
             target="_blank"
             rel="noreferrer"
             className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-green-500/30 transition hover:-translate-y-1"
           >
              <FileDown className="mr-2" />
              下載客戶樣品需求表 (Word)
           </a>
        </div>
      </div>

    </div>
  );
};

export default Opto;