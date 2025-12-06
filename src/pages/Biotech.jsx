// src/pages/Biotech.jsx
import React from 'react';
import { Sprout, Leaf, ShoppingBasket, Factory, Cpu, Share2, ShieldCheck, ArrowRight, FlaskConical, Check, Sun, Activity, CheckCircle } from 'lucide-react';

// 引入上傳的實拍圖片 (請確保圖片已放入 src/assets/ 資料夾)
import clematisImg from '../assets/Clematis.png';
import gastrodiaImg from '../assets/GastrodiaTuber.png';

const Biotech = () => {
  // 1. 藥用植物系列
  const medicinalProducts = [
    {
      id: "clematis",
      name: "金線蓮 (Clematis)",
      desc: "珍貴藥用植物，透過環控技術培育，品質穩定純淨。",
      items: ["金線蓮生品 (Raw Product)", "加工乾燥品 (Dried Product)", "萃取物健康食品 (Extract Health Food)"],
      image: clematisImg // 使用實拍金線蓮圖片
    },
    {
      id: "gastrodia",
      name: "天麻 (Gastrodia elata)",
      desc: "經多年研究開發出之無毒種苗，具高經濟價值。",
      items: ["天麻生品 (Raw Plant)", "加工乾燥品 (Processed Dry)", "萃取物健康食品 (Extract Health Food)"],
      image: gastrodiaImg // 使用實拍天麻圖片
    }
  ];

  // 2. 科技農業概述
  const agriOverview = [
    {
      title: "窩心菜鋪鮮蔬 (Vegetables)",
      desc: "量產型全人工光源植物工廠，全年穩定生產。定期檢測農藥與重金屬，讓消費者買得安心，吃得放心。",
      icon: <Leaf className="w-8 h-8 text-green-500" />
    },
    {
      title: "農業 4.0 水果 (Premium Fruit)",
      desc: "透過智能系統精準控制，克服傳統生長障礙。生產碩大甜美的無毒網紋洋香瓜、水果小黃瓜及玉女番茄。",
      icon: <ShoppingBasket className="w-8 h-8 text-orange-500" />
    },
    {
      title: "機能性產品 (Functional Products)",
      desc: "擁有高精密萃取純化設備，開發一系列中草藥機能產品，並提供有效成分分析檢驗服務。",
      icon: <FlaskConical className="w-8 h-8 text-blue-500" />
    },
    {
      title: "種苗生產 (Seedling Production)",
      desc: "優質種苗是高品質作物的基礎。專業團隊開發出天麻及其他草藥的無毒種苗與組培瓶苗。",
      icon: <Sprout className="w-8 h-8 text-emerald-600" />
    }
  ];

  // 2.5 鮮蔬果物詳細列表
  const freshProduce = [
    {
      category: "科技嚴選水果 (Premium Fruits)",
      items: [
        { 
          name: "無毒網紋洋香瓜", 
          desc: "網紋立體明顯，果肉厚實香甜，口感細緻。採單株單果精心培育，每一顆都達到精品等級。", 
          image: "https://images.unsplash.com/photo-1594453303666-407132152433?auto=format&fit=crop&q=80&w=600"
        },
        { 
          name: "水果小黃瓜", 
          desc: "口感清脆多汁，果皮細緻不苦澀，無須削皮即可直接食用，是夏日清爽無負擔的最佳選擇。", 
          image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&q=80&w=600"
        },
        { 
          name: "玉女番茄", 
          desc: "皮薄多汁，甜度高且風味濃郁，富含茄紅素。透過智能監控生長，確保顆顆飽滿紅潤。", 
          image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&q=80&w=600"
        }
      ]
    },
    {
      category: "水耕生菜系列 (Hydroponic Lettuce)",
      items: [
        { 
          name: "綠火焰萵苣", 
          desc: "葉緣如火焰般捲曲，口感爽脆清甜，水分飽滿，是製作生菜沙拉的視覺與口感亮點。", 
          image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&q=80&w=600"
        },
        { 
          name: "紅火焰萵苣", 
          desc: "葉片帶有漸層紫紅色澤，富含花青素。質地鮮嫩，兼具營養價值與擺盤美觀。", 
          image: "https://images.unsplash.com/photo-1506073881649-4e23be3e9ed0?auto=format&fit=crop&q=80&w=600"
        },
        { 
          name: "奶油萵苣", 
          desc: "葉片圓潤如奶油般柔軟滑順，口感鮮嫩甘甜，無一般蔬菜的苦澀味，適合包肉或生食。", 
          image: "https://images.unsplash.com/photo-1556781488-290c03404286?auto=format&fit=crop&q=80&w=600"
        }
      ]
    }
  ];

  // 3. 技術服務
  const services = [
    {
      title: "整廠輸出",
      en: "Package Plant Export",
      desc: "規劃最優質產線，輔以智能系統，讓種植標準化並引導您成功種植。",
      icon: <Factory className="w-10 h-10 text-slate-700" />
    },
    {
      title: "智能系統",
      en: "Smart System",
      desc: "研發環境監控與養液自動泡製功能，自動循環水系統，實現全自動化管理。",
      icon: <Cpu className="w-10 h-10 text-blue-600" />
    },
    {
      title: "技術移轉",
      en: "Technology Transfer",
      desc: "分享與多方單位合作的智慧結晶，協助您增加產量並最佳化種植流程。",
      icon: <Share2 className="w-10 h-10 text-purple-600" />
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      
      {/* 1. Hero Section (移除 id="medicinal" 避免重複) */}
      <div className="relative pt-32 pb-32 md:pt-48 md:pb-48 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-900/80 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            <Activity size={14} /> Medicinal Plants Series
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            珍貴藥用植物培育 <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              金線蓮與天麻
            </span>
          </h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-2xl leading-relaxed mb-10">
            利用先進環控技術與 GACP 規範，培育高純度、無重金屬殘留的高經濟價值藥用植物，
            提供生技製藥產業最優質的原料來源。
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#medicinal" className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold transition flex items-center gap-2">
              瀏覽藥用植物 <ArrowRight size={18} />
            </a>
            <a href="#produce" className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg font-bold transition backdrop-blur-sm">
              鮮蔬果物
            </a>
          </div>
        </div>
      </div>

      {/* 2. Agri Overview (ID: overview) - 無毒有機與機能性產品 */}
      <div id="overview" className="bg-slate-50 py-24 border-b border-slate-200">
         <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-slate-900 mb-4">無毒有機與機能性產品</h2>
               <p className="text-slate-500">Core Technologies & Products</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {agriOverview.map((item, idx) => (
                 <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:-translate-y-1 transition duration-300">
                    <div className="mb-6 p-4 bg-emerald-50 rounded-full inline-block">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-6">
                      {item.desc}
                    </p>
                 </div>
               ))}
            </div>
         </div>
      </div>

      {/* 3. Medicinal Plants Showcase (ID: medicinal) */}
      <div id="medicinal" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-4 mb-10 border-b border-slate-100 pb-4">
             <div className="p-3 bg-emerald-100 text-emerald-700 rounded-full">
                <Activity size={24} />
             </div>
             <h2 className="text-2xl font-bold text-slate-800">藥用植物系列</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {medicinalProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                 {/* 圖片區塊 */}
                 <div className="rounded-2xl overflow-hidden mb-5 shadow-lg aspect-[4/3] relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
                 </div>
                 
                 {/* 文字區塊 */}
                 <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                   {product.name}
                 </h3>
                 <p className="text-slate-600 leading-relaxed mb-4">
                   {product.desc}
                 </p>
                 
                 {/* 產品細項列表 */}
                 <div className="flex flex-wrap gap-2">
                   {product.items.map((item, idx) => (
                     <span key={idx} className="inline-flex items-center px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full border border-slate-200">
                       <CheckCircle size={12} className="mr-1 text-emerald-500" />
                       {item}
                     </span>
                   ))}
                 </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Fresh Produce Showcase (ID: produce) */}
      <div id="produce" className="py-24 bg-slate-50 border-t border-slate-200">
         <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-20">
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">頂級鮮蔬果物</h2>
               <p className="text-slate-500 text-lg">Premium Fresh Produce</p>
               <div className="w-24 h-1 bg-emerald-500 mx-auto mt-6 rounded-full"></div>
            </div>

            {freshProduce.map((category, index) => (
              <div key={index} className="mb-24 last:mb-0">
                  <div className="flex items-center gap-4 mb-10 border-b border-slate-200 pb-4">
                    <div className="p-3 bg-emerald-100 text-emerald-700 rounded-full">
                        {index === 0 ? <Sun size={24} /> : <Leaf size={24} />}
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800">{category.category}</h2>
                  </div>
                  <div className="grid md:grid-cols-3 gap-8">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="group cursor-pointer">
                          <div className="rounded-2xl overflow-hidden mb-5 shadow-lg aspect-[4/3]">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                            />
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                            {item.name}
                          </h3>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            {item.desc}
                          </p>
                      </div>
                    ))}
                  </div>
              </div>
            ))}
         </div>
      </div>

      {/* 5. Technical Services (ID: services) */}
      <div id="services" className="py-24 bg-white border-t border-slate-200">
         <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">專業技術服務</h2>
                <p className="text-slate-500">Professional Technical Services</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-300">
                    <div className="mb-6 p-4 bg-white shadow-sm rounded-full">
                        {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{service.title}</h3>
                    <span className="text-xs text-emerald-600 font-bold uppercase tracking-wider mb-4 block">{service.en}</span>
                    <p className="text-slate-600 leading-7">
                    {service.desc}
                    </p>
                </div>
                ))}
            </div>
         </div>
      </div>

      {/* 6. GACP Info Section */}
      <div className="bg-emerald-900 text-white py-20 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-[100px]"></div>
         <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
               <div className="inline-flex items-center gap-2 text-emerald-400 font-bold mb-4">
                  <ShieldCheck size={24} /> GACP 規範認證
               </div>
               <h2 className="text-3xl font-bold mb-6">優良農業種植及採收規範</h2>
               <p className="text-emerald-100 leading-8 mb-6 text-justify">
                 藥食同源，最好的藥物是食物。窩心菜鋪秉持食安精神，導入 WHO 整合之 GACP 規範。
                 我們嚴格把關作物生產管理的每一個環節，從優質種植到安全確認，確保作物成分純淨有效，成為亞洲領先符合 GACP 規範的企業。
               </p>
               <div className="flex flex-wrap gap-4">
                  {['優質 High Quality', '安全 Safety', '效用 Utility'].map((tag, i) => (
                    <span key={i} className="flex items-center px-4 py-2 bg-emerald-800/50 rounded-lg border border-emerald-700 text-sm">
                       <Check size={16} className="mr-2 text-emerald-400" /> {tag}
                    </span>
                  ))}
               </div>
            </div>
            <div className="w-full md:w-1/3">
               <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 text-center">
                  <div className="text-6xl font-black text-emerald-400 mb-2">GACP</div>
                  <div className="text-sm text-emerald-200">Good Agricultural<br/>Collection Practices</div>
               </div>
            </div>
         </div>
      </div>

    </div>
  );
};

export default Biotech;