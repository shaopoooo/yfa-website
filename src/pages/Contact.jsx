// src/pages/Contact.jsx
import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  // 使用 State 來管理表單輸入，以便即時組合成 mailto 連結
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '產品諮詢',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. 設定收件信箱 (公司信箱)
    const mailTo = "service@yfa.com.tw";
    
    // 2. 設定副本 (CC) 或 密件副本 (BCC) - 若不需要可留空
    // const cc = "manager@yfa.com.tw"; 
    
    // 3. 組合信件主旨
    const subject = `[官網詢問] ${formData.subject} - 來自 ${formData.name}`;

    // 4. 組合信件內容 (使用 encodeURIComponent 確保特殊符號與換行正常顯示)
    // 注意：在 mailto 中，換行通常會被編碼，這裡我們用樣板字串讓它自動處理
    const bodyRaw = `
您好，我是 ${formData.name}。

我想詢問關於「${formData.subject}」的事項。

【聯絡資訊】
Email：${formData.email}

【詢問內容】
${formData.message}

--------------------------------------------------
此信件由 妍發科技 官網聯絡表單自動生成
`;

    const body = encodeURIComponent(bodyRaw);
    const subjectEncoded = encodeURIComponent(subject);

    // 5. 觸發 Mailto 連結
    // 格式：mailto:收件人?subject=主旨&body=內容
    window.location.href = `mailto:${mailTo}?subject=${subjectEncoded}&body=${body}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 pt-32">
      {/* 左側：聯絡資訊 (維持不變) */}
      <div>
        <h1 className="text-3xl font-bold mb-6 text-slate-900">聯絡我們</h1>
        <p className="text-slate-600 mb-8 leading-relaxed">
          若您對我們的產品有任何疑問，或有 ODM/OEM 合作需求，歡迎填寫右側表單，系統將自動開啟您的郵件軟體進行寄送。
        </p>
        
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 mb-8">
           <h3 className="font-bold text-lg mb-6 text-slate-900 border-b border-slate-200 pb-2">總公司資訊</h3>
           <div className="space-y-4">
             <p className="text-slate-700 flex items-start gap-3">
               <MapPin size={20} className="text-blue-600 mt-1 flex-shrink-0"/> 
               <span>
                 桃園市蘆竹區蘆竹街131巷2號<br/>
                 <span className="text-slate-500 text-sm">Number 2, Lane 131, Luzhu St., Luzhu Dist., Taoyuan City 338009 , Taiwan (R.O.C.)</span>
               </span>
             </p>
             <p className="text-slate-700 flex items-center gap-3">
               <Phone size={20} className="text-blue-600 flex-shrink-0"/> 
               (03) 352-9818
             </p>
             <p className="text-slate-700 flex items-center gap-3">
               <Mail size={20} className="text-blue-600 flex-shrink-0"/> 
               yfa.lu@msa.hinet.net
             </p>
           </div>
        </div>
        
        {/* Google Map */}
        <div className="w-full h-64 bg-slate-200 rounded-2xl overflow-hidden shadow-inner border border-slate-200">
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

      {/* 右側：聯絡表單 (改為觸發 mailto) */}
      <div className="bg-white shadow-xl rounded-2xl p-8 border border-slate-100">
        <h2 className="text-2xl font-bold mb-6 text-slate-900">發送訊息</h2>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">姓名 Name</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" 
              placeholder="您的姓名" 
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" 
              placeholder="example@email.com" 
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">主旨 Subject</label>
            <select 
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-lg p-3 outline-none bg-white focus:ring-2 focus:ring-blue-500 transition"
            >
              <option value="產品諮詢">產品諮詢 (Product Inquiry)</option>
              <option value="投資人關係">投資人關係 (Investor Relations)</option>
              <option value="技術支援">技術支援 (Technical Support)</option>
              <option value="其他合作">其他合作 (Others)</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">訊息內容 Message</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5" 
              required
              className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" 
              placeholder="請輸入您的需求..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition flex items-center justify-center shadow-lg hover:shadow-blue-500/30"
          >
            開啟郵件軟體傳送 <Send size={18} className="ml-2"/>
          </button>
          
          <p className="text-xs text-center text-slate-400 mt-2">
            點擊後將自動喚醒您裝置預設的 Email 程式 (如 Outlook, Mail)
          </p>
        </form>
      </div>
    </div>
  );
};

export default Contact;