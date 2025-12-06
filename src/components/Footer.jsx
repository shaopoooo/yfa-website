// src/components/Footer.jsx
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const companyInfo = {
  name: "妍發科技股份有限公司",
  nameEn: "Y-FA Technology INC.",
  address: "桃園市蘆竹區蘆竹街131巷2號",
  phone: "03-352-9818",
  email: "service@yfa.com.tw",
  mapUrl: "https://www.google.com/maps?q=桃園市蘆竹區蘆竹街131巷2號"
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* 公司資訊 */}
        <div>
          <h3 className="text-white text-xl font-bold mb-6 flex items-center gap-2">
             <div className="w-2 h-6 bg-blue-500 rounded-full"></div>
             {companyInfo.name}
          </h3>
          <p className="text-sm leading-relaxed mb-6 text-slate-400">
            專注於軟性電路板(FPC)、IC 設計解決方案與科技農業植物工廠。<br/>
            以「穩健、創新、責任」為經營理念，持續為客戶創造價值。
          </p>
        </div>
        
        {/* 快速連結 */}
        <div>
          <h3 className="text-white text-lg font-bold mb-6">快速連結</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="/electronics" className="hover:text-blue-400 transition flex items-center gap-2"><span className="w-1 h-1 bg-slate-500 rounded-full"></span>電子事業 Electronics</a></li>
            {/* 修改名稱：光電事業 -> IC解決方案 */}
            <li><a href="/opto" className="hover:text-blue-400 transition flex items-center gap-2"><span className="w-1 h-1 bg-slate-500 rounded-full"></span>IC解決方案 IC Solutions</a></li>
            <li><a href="/biotech" className="hover:text-blue-400 transition flex items-center gap-2"><span className="w-1 h-1 bg-slate-500 rounded-full"></span>生技農業 Bio-Agriculture</a></li>
            <li><a href="/investor" className="hover:text-blue-400 transition flex items-center gap-2"><span className="w-1 h-1 bg-slate-500 rounded-full"></span>投資人專區 Investor Relations</a></li>
          </ul>
        </div>

        {/* 聯絡我們 */}
        <div>
          <h3 className="text-white text-lg font-bold mb-6">聯絡我們</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start group">
              <MapPin size={18} className="mr-3 mt-0.5 text-blue-500 group-hover:text-white transition flex-shrink-0"/> 
              <a href={companyInfo.mapUrl} target="_blank" rel="noreferrer" className="hover:text-white transition leading-relaxed">
                {companyInfo.address}
              </a>
            </li>
            <li className="flex items-center group">
              <Phone size={18} className="mr-3 text-blue-500 group-hover:text-white transition"/> 
              {companyInfo.phone}
            </li>
            <li className="flex items-center group">
              <Mail size={18} className="mr-3 text-blue-500 group-hover:text-white transition"/> 
              {companyInfo.email}
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-slate-800 pt-8 text-center">
        <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {companyInfo.nameEn} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;