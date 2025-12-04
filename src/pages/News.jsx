// src/pages/News.jsx
import React from 'react';
import { newsData } from '../data/mockData';

const News = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-10 text-center">媒體報導與公告</h1>
      <div className="space-y-6 max-w-4xl mx-auto">
        {newsData.map((news) => (
          <div key={news.id} className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="md:w-32 flex-shrink-0 flex flex-col items-center justify-center bg-blue-50 rounded text-blue-800 p-2">
              <span className="text-2xl font-bold">{news.date.split('-')[2]}</span>
              <span className="text-sm">{news.date.split('-')[0]}/{news.date.split('-')[1]}</span>
            </div>
            <div>
              <span className="inline-block px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded-full mb-2">
                {news.category}
              </span>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{news.title}</h3>
              <p className="text-gray-600 line-clamp-2">
                點擊查看關於「{news.title}」的詳細報導內容。此處為新聞摘要預覽...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;