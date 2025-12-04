import React from 'react';
import { ArrowRight, Cpu, Sprout, Zap, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { newsData } from '../data/mockData';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* 1. Hero Section */}
      <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white">
        {/* 背景裝飾 */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-100/50 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>

        <div className="relative z-10 text-center max-w-5xl px-6 mt-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            Future Technology
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-8 leading-tight">
            打造 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">未來產業</span> 的<br/>
            關鍵基石
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            從 FPC 軟板工藝到智慧植物工廠。<br/>
            Y-FA 妍發科技，以跨界創新定義產業新標準。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2 group">
              開始合作 <ArrowRight className="group-hover:translate-x-1 transition-transform"/>
            </Link>
            <Link to="/electronics" className="px-8 py-4 border border-slate-300 text-slate-600 rounded-full font-bold text-lg hover:border-blue-600 hover:text-blue-600 transition-colors bg-white/50 backdrop-blur-sm">
              探索技術
            </Link>
          </div>
        </div>
      </div>

      {/* 2. 核心領域 */}
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
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform" alt="Opto"/>
            <div className="absolute bottom-0 left-0 p-8 z-20"><h3 className="text-xl font-bold text-white">光電事業</h3></div>
          </Link>

          <Link to="/biotech" className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent z-10"></div>
            <img src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform" alt="Bio"/>
            <div className="absolute bottom-0 left-0 p-8 z-20"><h3 className="text-xl font-bold text-white">生技農業</h3></div>
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