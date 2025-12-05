// src/pages/Contact.jsx
import React from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react'; // 建議補上 icons

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
      {/* 聯絡資訊 */}
      <div>
        <h1 className="text-3xl font-bold mb-6">聯絡我們</h1>
        <p className="text-gray-600 mb-8">
          若您對我們的產品有任何疑問，或有合作需求，歡迎填寫右側表單，我們將盡快與您聯繫。
        </p>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
           <h3 className="font-bold text-lg mb-4 text-slate-900">總公司</h3>
           <p className="mb-2 text-gray-700 flex items-center gap-2">
             <MapPin size={18} className="text-blue-600"/> 桃園市蘆竹區蘆竹街131巷2號
           </p>
           <p className="mb-2 text-gray-700 flex items-center gap-2">
             <Phone size={18} className="text-blue-600"/> 03-352-9818
           </p>
           <p className="text-gray-700 flex items-center gap-2">
             <Mail size={18} className="text-blue-600"/> service@yfa.com.tw
           </p>
        </div>
        
        {/* Google Map 嵌入區域 - 已更新 */}
        <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md">
          <iframe 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            scrolling="no" 
            marginHeight="0" 
            marginWidth="0" 
            title="Y-FA Location"
            src="https://maps.google.com/maps?q=桃園市蘆竹區蘆竹街131巷2號&t=&z=15&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>
      </div>

      {/* 聯絡表單 (保持原樣，僅增加 onSubmit 防止刷新) */}
      <div className="bg-white shadow-xl rounded-xl p-8 border border-gray-100">
        <h2 className="text-2xl font-bold mb-6">發送訊息</h2>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {/* ... (表單內容保持不變) ... */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">姓名</label>
            <input type="text" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="您的姓名" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="example@email.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">主旨</label>
            <select className="w-full border border-gray-300 rounded-lg p-3 outline-none bg-white">
              <option>產品諮詢</option>
              <option>投資人關係</option>
              <option>其他合作</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">訊息內容</label>
            <textarea rows="4" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="請輸入您的需求..."></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition flex items-center justify-center">
            送出訊息 <Send size={18} className="ml-2"/>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;