import React from 'react';
import { ArrowRight, Cpu, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// 將 newsData 直接定義在此處，不再從外部 import，避免路徑錯誤
const newsData = [
  { id: 1, date: "2023-11-20", title: "妍發科技榮獲經濟部技術處開源應用計畫肯定", category: "企業榮譽" },
  { id: 2, date: "2023-09-15", title: "生技事業部擴大植物工廠產能，搶攻藥用植物商機", category: "營運佈局" },
  { id: 3, date: "2023-06-10", title: "參加台北國際電腦展(COMPUTEX)，展示RFID智慧應用", category: "展覽活動" },
  { id: 4, date: "2023-03-22", title: "導入新一代軟硬結合板製程，提升良率與效能", category: "技術研發" },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* 1. Hero Section - 共生圖騰版 (Proposal 1) */}
      <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-50">
        
        {/* === 背景圖騰層 (Totem Layer) === */}
        <div className="absolute inset-0 z-0">
          {/* Proposal 1 Image: 電路板與植物共生
             這張圖片展示了嫩芽從電路板晶片中生長出來，完美象徵「科技賦能農業」。
          */}
          <img 
            src="https://images.unsplash.com/photo-1624916888265-d70c10555496?auto=format&fit=crop&q=80&w=2000" 
            alt="Circuit board with plants growing out - Tech Nature Totem" 
            className="w-full h-full object-cover opacity-20 scale-105" 
            // opacity-20: 設定低透明度，使其作為有質感的背景圖騰，不干擾前方文字
          />
          
          {/* 漸層遮罩：確保圖騰不會干擾文字閱讀，並製造空間深度感 */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/70 via-slate-50/80 to-slate-50"></div>
          
          {/* 紋理疊加 (可選)：增加一點點噪點讓圖騰更有質感 */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-multiply"></div>
        </div>

        {/* 氛圍光暈：使用綠色與藍色呼應圖騰主題 */}
        {/* 右上藍色光暈 (代表科技) */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-[120px] z-0 animate-pulse delay-700"></div>
        {/* 左下綠色光暈 (代表農業/生機) */}
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[120px] z-0 animate-pulse"></div>

        {/* 主要內容區 */}
        <div className="relative z-10 text-center max-w-5xl px-6 mt-16">
          {/* 標籤 */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-200 bg-green-50/80 backdrop-blur-sm text-green-700 text-xs font-bold tracking-widest uppercase mb-8 shadow-sm ring-1 ring-green-500/20">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Eco-Tech Innovation
          </div>
          
          {/* 大標題 */}
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-8 leading-tight drop-shadow-sm">
            科技與自然的 <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-500 to-green-600">完美共生</span>
          </h1>
          
          {/* 副標題 */}
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            以精密 FPC 電路工藝為基石，<br/>
            孕育智慧農業的無限生機。
          </p>
          
          {/* 按鈕群組 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full font-bold text-lg hover:shadow-lg hover:shadow-green-500/30 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group">
              開啟合作 <ArrowRight className="group-hover:translate-x-1 transition-transform"/>
            </Link>
            <Link to="/biotech" className="px-8 py-4 border border-slate-300 text-slate-600 rounded-full font-bold text-lg hover:border-green-600 hover:text-green-600 transition-colors bg-white/60 backdrop-blur-sm">
              了解技術
            </Link>
          </div>
        </div>
      </div>

      {/* 2. 核心領域 (保持原樣) */}
      <div className="py-32 px-4 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16">
           <div>
             <h2 className="text-4xl font-bold text-slate-900 mb-2">核心領域</h2>
             <p className="text-slate-500 font-medium">Core Business Units</p>
           </div>
           <div className="hidden md:block w-1/3 h-[1px] bg-slate-200"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[600px]">
          {/* 大卡片: FPC */}
          <Link to="/electronics" className="md:col-span-2 md:row-span-2 group relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10"></div>
            <img src="https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=1000" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="FPC" />
            <div className="absolute bottom-0 left-0 p-10 z-20">
              <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl inline-block mb-6">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">FPC 電子事業</h3>
              <p className="text-slate-200 max-w-md font-light">先進軟板製程與 RFID 智慧標籤應用。</p>
            </div>
          </Link>

          {/* 小卡片 */}
          <Link to="/opto" className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent z-10"></div>
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform" alt="Opto"/>
            <div className="absolute bottom-0 left-0 p-8 z-20"><h3 className="text-xl font-bold text-white">光電事業</h3></div>
          </Link>

          <Link to="/biotech" className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent z-10"></div>
            <img src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform" alt="Bio"/>
            <div className="absolute bottom-0 left-0 p-8 z-20"><h3 className="text-xl font-bold text-white">生技農業</h3></div>
          </Link>
        </div>
      </div>

      {/* 3. 最新消息摘要 (保持原樣) */}
      <div className="py-24 bg-white border-y border-slate-100">
         <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
               <div><h2 className="text-3xl font-bold text-slate-900 mb-2">最新動態</h2><p className="text-slate-500">Latest News</p></div>
               <Link to="/news" className="text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-1 transition">查看更多 <ChevronRight size={18} /></Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
               {newsData.slice(0,3).map(news => (
                 <div key={news.id} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer group">
                    <div className="text-sm text-slate-400 mb-3">{news.date}</div>
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full mb-4">{news.category}</div>
                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-700 transition-colors line-clamp-2">{news.title}</h3>
                 </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
};

export default Home;