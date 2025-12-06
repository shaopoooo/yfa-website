// src/pages/News.jsx
import React from 'react';
import { ExternalLink } from 'lucide-react';

// 1. 定義並匯出 newsData，供此頁面與 Home 頁面使用
export const newsData = [
  { 
    id: 1, 
    date: "2022-04-27", 
    title: "日本羅姆攜手台達電 研發氮化鎵功率元件", 
    category: "產業趨勢", 
    link: "https://news.cnyes.com/news/id/4859663" 
  },
  { 
    id: 2, 
    date: "2021-06-24", 
    title: "GaN如何重新定義電源轉換？(How GaN is redefining power conversion)", 
    category: "技術新知", 
    link: "https://www.eettaiwan.com/20210624ta31-how-gan-integrated-circuits-are-redefining-power-conversion/" 
  },
  { 
    id: 3, 
    date: "2021-03-02", 
    title: "氮化鎵功率元件打造小尺寸電源供應器", 
    category: "技術新知", 
    link: "https://www.edntaiwan.com/20210302np01/" 
  },
  { 
    id: 4, 
    date: "2020-11-29", 
    title: "電源管理需求緊到不行，台積電出馬買機台衝刺GaN快充", 
    category: "產業趨勢", 
    link: "https://tw.appledaily.com/property/20201129/2KYAYY2AZFCF7EOGWN6T52NWPY/" 
  },
  { 
    id: 5, 
    date: "2020-07-01", 
    title: "隨著功率消耗需求大增，氮化鎵技術世代已來臨", 
    category: "技術新知", 
    link: "https://www.appliedmaterials.com/zh-hant/nanochip/nanochip-fab-solutions/july-2020/gan-technology-is-coming-of-age-as-power-consumption-grows" 
  },
  { 
    id: 6, 
    date: "2019-12-25", 
    title: "妍發科技植物工廠導入GACP規範 保護消費者健康", 
    category: "企業動態", 
    link: "https://ctee.com.tw/industrynews/196020.html" 
  },
  { 
    id: 7, 
    date: "2018-11-20", 
    title: "經濟部技術處開源應用技術人才培育計畫扮推手 妍發科技為新農業代表", 
    category: "企業榮譽", 
    link: "https://www.ithome.com.tw/pr/127125" 
  },
  { 
    id: 8, 
    date: "2010-12-17", 
    title: "經濟部中小企業處 小巨人獎第十一屆得主", 
    category: "企業榮譽", 
    link: "https://award.moeasmea.gov.tw/article-rsa-784-1269" 
  },
  { 
    id: 9, 
    date: "2007-11-04", 
    title: "妍發科技 再捐百萬獎學金", 
    category: "公益活動", 
    link: "http://163.30.70.136/sjjh_news/donation.htm" 
  },
  { 
    id: 10, 
    date: "產業觀點", 
    title: "擴產、降本同步走！愛思強MOCVD技術助推SiC/GaN產業化", 
    category: "產業趨勢", 
    link: "https://twgreatdaily.com/508304638_266510-sh.html" 
  }
];

const News = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="pt-20 text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-slate-900">媒體報導與公告</h1>
        <p className="text-slate-500">Media Reports & Announcements</p>
      </div>
      
      <div className="space-y-6 max-w-4xl mx-auto">
        {newsData.map((news) => (
          <a 
            key={news.id} 
            href={news.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition group"
          >
            <div className="md:w-32 flex-shrink-0 flex flex-col items-center justify-center bg-slate-50 rounded text-slate-600 p-2 border border-slate-100 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
              {news.date.includes('-') ? (
                <>
                  <span className="text-2xl font-bold">{news.date.split('-')[2]}</span>
                  <span className="text-sm">{news.date.split('-')[0]}/{news.date.split('-')[1]}</span>
                </>
              ) : (
                <span className="font-bold text-sm">{news.date}</span>
              )}
            </div>
            
            <div className="flex-grow">
              <div className="flex justify-between items-start">
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full mb-2 group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors">
                  {news.category}
                </span>
                <ExternalLink size={16} className="text-gray-300 group-hover:text-blue-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors">{news.title}</h3>
              <p className="text-gray-500 text-sm line-clamp-1">
                點擊查看完整報導內容...
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default News;