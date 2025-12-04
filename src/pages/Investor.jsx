// src/pages/Investor.jsx
import React from 'react';
import { FileText, Download } from 'lucide-react';
import { financialData } from '../data/mockData';

const Investor = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">投資人專區</h1>
        <p className="text-gray-600">公開透明的財務資訊，保障投資人權益</p>
      </div>

      {/* 財務報表 Table */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden max-w-4xl mx-auto">
        <div className="bg-blue-600 text-white p-4">
          <h2 className="text-xl font-bold flex items-center">
            <FileText className="mr-2"/> 財務報告下載
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-4 text-gray-600 font-semibold">年度</th>
                <th className="p-4 text-gray-600 font-semibold">季度</th>
                <th className="p-4 text-gray-600 font-semibold">文件名稱</th>
                <th className="p-4 text-gray-600 font-semibold text-right">下載</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {financialData.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="p-4">{item.year}</td>
                  <td className="p-4"><span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">{item.quarter}</span></td>
                  <td className="p-4 font-medium text-gray-800">{item.doc}</td>
                  <td className="p-4 text-right">
                    <button className="text-blue-600 hover:bg-blue-50 p-2 rounded-full transition">
                      <Download size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Investor;