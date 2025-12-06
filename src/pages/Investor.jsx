// src/pages/Investor.jsx
import React from 'react';
import { Megaphone, Phone, Mail, MapPin } from 'lucide-react';

const Investor = () => {
  // 1. 重大公告資料
  const announcements = [
    { 
      date: "2022/09/15", 
      title: "本公司跨足半導體事業，日前已簽約「電源保護IC」之代理。",
      type: "營運快訊"
    },
    { 
      date: "2022/09/05", 
      title: "因應公司策略發展與公開發行準備，股務作業調整中。2022/9/19~9/30停止過戶，預計10月起改由公司自辦。",
      type: "股務公告"
    },
  ];

  // 2. 股務聯絡資訊
  const stockContact = {
    company: "妍發科技股份有限公司 (Y-FA Technology INC.)",
    tel: "(03) 352-9818",
    email: "yfa.lu@msa.hinet.net",
    address: "Number 2, Lane 131, Luzhu St., Luzhu Dist., Taoyuan City 338009 , Taiwan (R.O.C.)"
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Hero Title */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">投資人專區</h1>
          <p className="text-slate-400">Investor Relations</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        
        {/* Section 1: 重大公告 (Announcements) */}
        <div>
          <div className="flex items-center mb-8">
             <div className="p-3 bg-blue-100 rounded-full mr-4">
               <Megaphone className="w-6 h-6 text-blue-600" />
             </div>
             <h2 className="text-2xl font-bold text-slate-800">重大訊息公告</h2>
          </div>
          
          <div className="grid gap-6">
            {announcements.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow">
                 <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="md:w-48 flex-shrink-0">
                       <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-2 inline-block">
                         {item.type}
                       </span>
                       <div className="text-slate-500 text-sm">{item.date}</div>
                    </div>
                    <div className="flex-grow">
                       <h3 className="text-lg font-medium text-slate-800 leading-relaxed">
                         {item.title}
                       </h3>
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: 股務聯絡資訊 (Contact Info) */}
        <div className="bg-slate-800 text-white rounded-2xl p-8 md:p-12">
           <h2 className="text-2xl font-bold mb-8 text-center md:text-left border-b border-slate-700 pb-4">
             股務代理與聯絡資訊
           </h2>
           <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                 <h3 className="text-xl font-bold text-blue-400">{stockContact.company}</h3>
                 <p className="text-slate-300 leading-relaxed">
                   若您有任何股票過戶、股權相關問題，歡迎透過以下方式聯繫我們的股務單位。
                 </p>
              </div>
              <div className="space-y-4 text-sm md:text-base">
                 <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-blue-400 mt-1" />
                    <div>
                       <span className="block text-slate-400 text-xs uppercase tracking-wider">Telephone</span>
                       {stockContact.tel}
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-blue-400 mt-1" />
                    <div>
                       <span className="block text-slate-400 text-xs uppercase tracking-wider">Email</span>
                       <a href={`mailto:${stockContact.email}`} className="hover:text-blue-300 transition-colors">
                         {stockContact.email}
                       </a>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                    <div>
                       <span className="block text-slate-400 text-xs uppercase tracking-wider">Address</span>
                       {stockContact.address}
                    </div>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Investor;