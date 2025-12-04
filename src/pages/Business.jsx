import React from 'react';
import { businessData } from '../data/mockData';
import { Box, CheckCircle2 } from 'lucide-react';

const Business = ({ type }) => {
  const data = businessData[type];
  if (!data) return <div className="pt-32 text-center text-slate-500">Loading...</div>;

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      
      {/* 內頁 Hero */}
      <div className="pt-40 pb-20 px-4 max-w-7xl mx-auto bg-white border-b border-slate-200">
        <p className="text-blue-600 font-bold tracking-widest uppercase mb-4 text-sm flex items-center gap-2">
            <span className="w-8 h-0.5 bg-blue-600"></span>
            Business Unit
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">{data.title}</h1>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
           <div className="text-lg text-slate-600 leading-8">
             <p className="mb-8">{data.desc}</p>
             <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <p className="text-blue-900 font-medium italic">
                  「我們致力於技術創新，為客戶提供最具競爭力的 {data.title} 解決方案。」
                </p>
             </div>
           </div>
           
           <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-900/5">
             <img src={data.image} alt={data.title} className="w-full h-80 object-cover hover:scale-105 transition duration-700" />
           </div>
        </div>
      </div>

      {/* 產品展示區 */}
      <div className="bg-slate-50 py-24">
         <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 flex items-center">
              <div className="p-2 bg-blue-600 rounded-lg mr-4 shadow-lg shadow-blue-500/30">
                  <Box className="text-white w-6 h-6"/> 
              </div>
              主要產品系列
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
               {data.products.map((prod, idx) => (
                 <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 group">
                    <div className="text-blue-100 text-6xl font-black absolute top-4 right-6 pointer-events-none select-none">
                        0{idx + 1}
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            {prod.name}
                        </h3>
                        <p className="text-slate-600 text-sm leading-6 mb-6">
                        {prod.detail}
                        </p>
                    </div>
                    <div className="w-full h-[1px] bg-slate-100 group-hover:bg-blue-100 transition-colors"></div>
                 </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
};

export default Business;