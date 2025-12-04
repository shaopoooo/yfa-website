export const companyInfo = {
  name: "妍發科技股份有限公司",
  nameEn: "Y-FA Technology INC.",
  address: "桃園市蘆竹區蘆竹街131巷2號",
  phone: "03-352-9818",
  email: "service@yfa.com.tw",
  mapUrl: "https://www.google.com/maps?q=桃園市蘆竹區蘆竹街131巷2號"
};

export const businessData = {
  electronics: {
    title: "電子事業",
    desc: "擁有超過20年的軟性印刷電路板(FPC)製造經驗，並結合RFID技術提供智慧化解決方案。",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=1000",
    products: [
      { name: "FPC 軟性印刷電路板", detail: "提供單雙面、多層板及軟硬結合板，應用於手機、數位相機與平板電腦等輕薄產品。" },
      { name: "RFID 智慧標籤", detail: "開發 NFC 貼片、電子標籤，應用於門禁管制、資產管理與物流追蹤。" },
      { name: "智慧防盜系統", detail: "結合無線射頻技術，提供賣場商品防盜與嬰兒防盜系統等安全解決方案。" }
    ]
  },
  opto: {
    title: "光電事業",
    desc: "專注於光電顯示應用材料與植物生長照明技術，支援高科技農業與顯示產業發展。",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
    products: [
      { name: "植物生長燈模組", detail: "針對植物工廠需求設計的特殊波長 LED 照明，提升作物生長效率。" },
      { name: "光電觸控材料", detail: "應用於觸控面板與背光模組的關鍵導電與絕緣材料。" },
      { name: "LED 散熱基板", detail: "高導熱金屬基板，解決高功率 LED 照明產品的散熱問題。" }
    ]
  },
  biotech: {
    title: "生技事業",
    desc: "結合科技與農業，打造環控植物工廠，致力於生產無毒、無重金屬殘留的高經濟價值藥用植物。",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=1000",
    products: [
      { name: "藥用植物培育", detail: "利用環控技術培育高純度藥用植物，提供生技製藥產業高品質原料。" },
      { name: "無毒水耕蔬菜", detail: "全環控植物工廠生產，無農藥、無蟲害、低生菌數的安心蔬菜。" },
      { name: "植物履歷溯源系統", detail: "運用 IT 技術建立完整的植物生長履歷，確保從種植到出貨的品質透明化。" }
    ]
  }
};

export const newsData = [
  { id: 1, date: "2023-11-20", title: "妍發科技榮獲經濟部技術處開源應用計畫肯定", category: "企業榮譽" },
  { id: 2, date: "2023-09-15", title: "生技事業部擴大植物工廠產能，搶攻藥用植物商機", category: "營運佈局" },
  { id: 3, date: "2023-06-10", title: "參加台北國際電腦展(COMPUTEX)，展示RFID智慧應用", category: "展覽活動" },
  { id: 4, date: "2023-03-22", title: "導入新一代軟硬結合板製程，提升良率與效能", category: "技術研發" },
];

export const financialData = [
  { year: "112", quarter: "Q3", doc: "112年第三季財務報告書", link: "#" },
  { year: "112", quarter: "Q2", doc: "112年第二季財務報告書", link: "#" },
  { year: "112", quarter: "Q1", doc: "112年第一季財務報告書", link: "#" },
  { year: "111", quarter: "FY", doc: "111年度財務報表(經會計師查核)", link: "#" },
];