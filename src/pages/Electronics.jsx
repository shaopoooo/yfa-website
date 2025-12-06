// src/pages/Electronics.jsx
import React from 'react';
import { Layers, Smartphone, Cpu, ShieldCheck, Zap, ArrowRight, CheckCircle2, Settings, Ruler, Award } from 'lucide-react';

// 引入認證圖片
import iso9001Img from '../assets/TSO9001.d3f0c23e.jpg';
import iso14001Img from '../assets/ISO1400.09e74c97.jpg';

const Electronics = () => {
  // FPC 產品細節資料
  const fpcProducts = [
    {
      id: 1,
      title: "單面軟板 (Single Sided FPC)",
      desc: "最基本的軟板結構，由一層銅箔與絕緣基材(PI/PET)組成。具有極佳的可撓性與輕薄特性，適用於動態彎曲或空間極度受限的產品設計。",
      features: ["極致輕薄", "高動態彎曲性", "成本效益高"],
      applications: "觸控面板、薄膜開關、計算機、消費性電子連接線",
      icon: <Layers className="w-10 h-10 text-blue-500" />
    },
    {
      id: 2,
      title: "雙面軟板 (Double Sided FPC)",
      desc: "雙層導電銅箔結構，透過電鍍導通孔 (PTH) 連接上下層線路。提供更複雜的線路設計空間，同時保有良好的撓曲性。",
      features: ["高線路密度", "雙面導通", "設計彈性佳"],
      applications: "智慧型手機、數位相機、筆記型電腦、硬碟",
      icon: <Layers className="w-10 h-10 text-blue-600" />
    },
    {
      id: 3,
      title: "多層軟板 (Multi-layer FPC)",
      desc: "由三層或以上的導電層組成，適合高度精密、高密度的電子產品。雖然撓曲性較單雙面板稍低，但能大幅節省佈線空間。",
      features: ["超高線路密度", "EMI遮蔽效果佳", "節省組裝空間"],
      applications: "高階通訊設備、醫療儀器、航太電子、精密儀表",
      icon: <Cpu className="w-10 h-10 text-indigo-600" />
    },
    {
      id: 4,
      title: "軟硬結合板 (Rigid-Flex PCB)",
      desc: "結合了硬板(Rigid PCB)的支撐性與軟板(FPC)的可撓性。解決了連接器接觸不良的問題，並提供更穩定的訊號傳輸。",
      features: ["3D立體組裝", "高可靠度", "減少連接器使用"],
      applications: "穿戴式裝置、TWS耳機、高階鏡頭模組、車用電子",
      icon: <Smartphone className="w-10 h-10 text-purple-600" />
    },
    {
      id: 5,
      title: "單銅雙做板 (Single Sided Double Access)",
      desc: "雙面可接通軟性電路板是一種有單層導電層但可以被加工成特定功能的雙面導通線路，但要加以利用此電路板要求專門的加工程序，因而限制了其應用面。",
      features: ["單層導電層", "雙面導通功能", "需特殊加工程序"],
      applications: "特定功能需求、特殊機構設計",
      icon: <Layers className="w-10 h-10 text-cyan-600" />
    }
  ];

  // 製程能力資料
  const processCapabilities = [
    {
      category: "金手指規格 & 公差 (Gold Finger)",
      icon: <Ruler className="w-5 h-5 text-blue-600" />,
      items: [
        { label: "線寬 Line Width", value: "+/- 20%" },
        { label: "外型尺寸 Dimensions", value: "+/- 0.05mm" },
        { label: "金手指裸露長度 Exposed Length", value: "+/- 0.30mm" },
        { label: "補強貼合公差 Reinforcement Fit", value: "+/- 0.30mm" },
      ]
    },
    {
      category: "孔徑規格 & 公差 (Aperture)",
      icon: <Settings className="w-5 h-5 text-blue-600" />,
      items: [
        { label: "孔徑 Aperture", value: "Min 0.20mm" },
        { label: "公差 Tolerances", value: "Min 0.20mm" },
      ]
    },
    {
      category: "防焊規格 & 公差 (Solder Mask)",
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
      items: [
        { label: "裸露至線距離 Bare to Line", value: "Min 0.07mm" },
        { label: "裸露至焊電距離 Bare to Welding", value: "Min 0.07mm" },
        { label: "隔焊距離 Welding Distance", value: "Min 0.10mm" },
      ]
    },
    {
      category: "溢膠控制 (Glue Overflow)",
      icon: <Layers className="w-5 h-5 text-blue-600" />,
      items: [
        { label: "保膠溢膠量 Glue Overflow", value: "Max 0.15mm" },
        { label: "結合開窗溢膠量 Combined Overflow", value: "Max 0.15mm" },
      ]
    },
    {
      category: "厚度 & 鑽孔 (Thickness & Drilling)",
      icon: <Ruler className="w-5 h-5 text-blue-600" />,
      items: [
        { label: "金手指區域厚度 Gold Finger Area", value: "+/- 0.03mm" },
        { label: "FPC 厚度 Thickness", value: "+/- 0.05mm" },
        { label: "電鍍/非電鍍導孔 Plated/Non-plated Vias", value: "+/- 0.05mm" },
      ]
    },
    {
      category: "網印 & 表面處理 (Screen & Surface)",
      icon: <Settings className="w-5 h-5 text-blue-600" />,
      items: [
        { label: "網印偏移公差 Offset Tolerance", value: "+/- 0.3mm" },
        { label: "網印線寬 Line Width", value: "Min 0.15mm" },
        { label: "化金 Immersion Gold", value: 'Max Au:8u" Ni:80~360u"' },
        { label: "電鍍金 Gold Plating", value: 'Max Au:30u" Ni:80~360u"' },
      ]
    }
  ];

  // 認證資料
  const certifications = [
    {
      id: "iso9001",
      title: "ISO 9001:2015",
      desc: "品質管理系統認證 (Quality Management System)",
      image: iso9001Img
    },
    {
      id: "iso14001",
      title: "ISO 14001:2015",
      desc: "環境管理系統認證 (Environmental Management System)",
      image: iso14001Img
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      
      {/* 1. Hero Section */}
      <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-40">
           <img 
             src="https://images.unsplash.com/photo-1550009158-9ebf6d538c64?auto=format&fit=crop&q=80&w=2000" 
             alt="FPC Flexible Printed Circuit Background" 
             className="w-full h-full object-cover"
           />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-blue-900/50"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            <Zap size={14} /> Electronics Division
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            FPC 軟性印刷電路板 <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              驅動輕薄科技的核心
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10">
            妍發科技擁有超過 20 年的 FPC 製造經驗，提供從單面板到軟硬結合板的全方位解決方案，
            協助客戶實現產品輕量化與微型化的設計需求。
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#products" className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold transition flex items-center gap-2">
              瀏覽產品 <ArrowRight size={18} />
            </a>
            <a href="#capabilities" className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg font-bold transition backdrop-blur-sm">
              製程能力
            </a>
          </div>
        </div>
      </div>

      {/* 2. FPC Product Showcase */}
      <div id="products" className="py-24 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">主要產品系列</h2>
          <p className="text-slate-500 text-lg">FPC Product Series</p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {fpcProducts.map((item) => (
            <div key={item.id} className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
               <div className="relative z-10">
                 <div className="mb-6 bg-white shadow-md w-16 h-16 rounded-xl flex items-center justify-center border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                   {item.icon}
                 </div>
                 <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">
                   {item.title}
                 </h3>
                 <p className="text-slate-600 leading-7 mb-6 border-b border-slate-100 pb-6">
                   {item.desc}
                 </p>
                 <div className="grid md:grid-cols-2 gap-y-4 gap-x-2">
                    <div className="space-y-2">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">特點 Features</span>
                        <ul className="space-y-1">
                            {item.features.map((feat, idx) => (
                                <li key={idx} className="flex items-center text-sm text-slate-700">
                                    <CheckCircle2 size={14} className="text-green-500 mr-2 flex-shrink-0" /> {feat}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">應用 Applications</span>
                        <p className="text-sm text-slate-700 leading-relaxed">
                            {item.applications}
                        </p>
                    </div>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2.5 Process Capabilities Section */}
      <div id="capabilities" className="py-24 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">軟板製程能力</h2>
            <p className="text-slate-500 text-lg">FPC Process Capability</p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processCapabilities.map((cap, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    {cap.icon}
                  </div>
                  <h3 className="font-bold text-slate-800">{cap.category}</h3>
                </div>
                <div className="space-y-3">
                  {cap.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-start text-sm">
                      <span className="text-slate-500 pr-2">{item.label}</span>
                      <span className="text-slate-900 font-medium text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2.6 Certifications Section (Added ID for Sidebar) */}
      <div id="certifications" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
           <div className="text-center mb-16">
             <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-full mb-4">
                <Award className="w-8 h-8 text-blue-600" />
             </div>
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">品質與環境認證</h2>
             <p className="text-slate-500 text-lg">Quality & Environmental Certification</p>
           </div>

           <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {certifications.map((cert) => (
                <div key={cert.id} className="flex flex-col items-center">
                   <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-md">
                      <div className="aspect-[3/4] overflow-hidden rounded-lg bg-slate-50 border border-slate-100 relative group cursor-pointer">
                         <img 
                           src={cert.image} 
                           alt={cert.title} 
                           className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500" 
                         />
                      </div>
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">{cert.title}</h3>
                   <p className="text-slate-500 text-center max-w-sm">{cert.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* 4. Call to Action */}
      <div className="py-20 bg-blue-600 text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">尋找客製化的電路板解決方案？</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              無論是特殊的軟硬結合板設計，或是 FPC 產品客製化，我們的工程團隊隨時準備為您服務。
          </p>
          <a href="/contact" className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:shadow-lg hover:scale-105 transition duration-300">
              立即聯絡我們
          </a>
      </div>

    </div>
  );
};

export default Electronics;