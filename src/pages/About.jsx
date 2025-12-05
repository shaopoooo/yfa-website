import React from 'react';
import { History, Target, Award, Flag, Network, Users } from 'lucide-react';

const About = () => {
  // 資料來源
  const milestones = [
    { 
      year: '1997', 
      title: '公司創立', 
      desc: '妍發科技正式成立',
      descEn: 'Y-FA was Established in August 1997'
    },
    { 
      year: '2005', 
      title: '品質管理認證', 
      desc: '通過ISO 9001及ISO 14001',
      descEn: 'Passed ISO 9001 and ISO 14001 in 2005'
    },
    { 
      year: '2007', 
      title: '公益活動', 
      desc: '獲頒桃園縣政府之熱心教育獎',
      descEn: 'Received the Taoyuan County Government’s Enthusiastic Education Award in 2007.'
    },
    { 
      year: '2008', 
      title: '取得成就', 
      desc: '獲頒經濟部第11屆小巨人獎',
      descEn: 'Won the 11th Little Giant Award from the Ministry of Economic Affairs in 2008.'
    },
    { 
      year: '2013', 
      title: '技術擴展', 
      desc: 'NFC事業部推出微型貼片卡',
      descEn: 'NFC division launched micro patch card in 2013.' 
    },
    { 
      year: '2014', 
      title: '技術擴展', 
      desc: 'NFC事業部完成第一代智慧手環',
      descEn: 'NFC Division completed the first generation of smart bracelets in 2014.' 
    },
    { 
      year: '2017', 
      title: '政府合作', 
      desc: '植物工廠通過桃園市府SBIR，計畫編號106023',
      descEn: 'The plant factory passed the SBIR of Taoyuan City Government, project number 106023 in 2017.' 
    },
    { 
      year: '2017', 
      title: '成立分公司', 
      desc: '成立雲南長耕農業科技分公司',
      descEn: 'Established YUNNAN EVER PLOUGHING AGRICULTURAL TECHNOLOGY INC. in 2017' 
    },
    { 
      year: '2022', 
      title: '技術擴展', 
      desc: '與合作夥伴共同建立晶片封裝測試產線',
      descEn: 'Setup the wafer/IC package and testing production ability in 2022.' 
    },
  ];

  const boardMembers = [
    {
      title: "董事長",
      name: "呂維泓",
      representative: "虹發投資股份有限公司",
      concurrent: ["虹發投資股份有限公司董事長"]
    },
    {
      title: "董事",
      name: "張永輝",
      representative: "興復興微波通運股份有限公司(上櫃4909)",
      concurrent: [] 
    },
    {
      title: "董事",
      name: "呂惟倩",
      representative: "",
      concurrent: ["虹發投資股份有限公司董事"]
    },
    {
      title: "董事",
      name: "孫貽謀",
      representative: "",
      concurrent: ["崧虹科技股份有限公司董事長", "優你康光學股份有限公司前董事"]
    },
    {
      title: "監察人",
      name: "林仲志",
      representative: "",
      concurrent: ["長庚大學資訊工程系正教授兼系主任"]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 overflow-x-hidden relative">
      
      {/* 1. Header Hero - 保持 padding 避免遮擋 */}
      <div className="relative pt-24 pb-32 px-4 md:px-24 text-center overflow-hidden bg-white border-b border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent pointer-events-none"></div>
        <div className="relative z-10">
            <div className="inline-flex p-4 bg-blue-600/10 rounded-full mb-6 ring-1 ring-blue-600/20">
                <History className="w-10 h-10 text-blue-700" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">關於妍發</h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            成立於 1997 年，從專業 FPC 製造跨足智慧農業。
            <br/>二十餘年來，我們始終堅持品質與創新。
            </p>
        </div>
      </div>

      {/* 2. 詳細介紹 (企業故事) - ID: intro */}
      <div id="intro" className="max-w-5xl mx-auto px-4 md:px-24 -mt-16 mb-24 relative z-20">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12 shadow-xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 border-l-4 border-blue-600 pl-4 flex items-baseline flex-wrap gap-3">
            關於妍發 <span className="text-slate-400 text-xl font-normal font-sans">About Y-FA</span>
          </h2>

          <div className="space-y-8">
            <div className="text-slate-700 leading-8 text-lg text-justify break-words space-y-4">
              <p>
                妍發科技成立於1997年，原來主要營運於電子電路、科技代工等相關業務，包含軟板設計製造、NFC設計製造、電子產品整合設計等，並取得國際品牌大廠供應商認證。之後因應客戶需求與技術能力提升，跨入光電系統軟硬體整合開發與應用，並與生技、農業專家合作，本著藥食同源的理念，利用自身的光電整合技術投入智慧植物栽培領域，進行各種藥用植物的栽培、種植、萃取等，於2015年正式成立子品牌，窩心菜鋪，導入優良農作物與採集規範(GACP)及電子商務銷售系統。
              </p>
              <p>
                並因應藥用植物的成功培育基礎，規劃跨入藥物萃取技術研究，故於2019年成立組織培養與萃取純化實驗室，生產天麻種苗與萃取天麻素等研究開發。 近年來因為自駕車、IOT、5G等趨勢，新世代半導體晶片的需求大增，公司正積極規劃進行下世代SiC、GaN的製程參與、設計開發或者代理銷售等事業佈局，期望可以開創公司更進一步的營運提升。
              </p>
            </div>

            <div className="w-full h-px bg-slate-100"></div>

            <div className="text-slate-500 leading-7 text-left break-words space-y-4 font-light">
              <p>
                Yanfa Technology was established in 1997, mainly engaged in circuit design、OEM、ODM and computer-related businesses. Yanfa had passed the qualification by International Brand customers. Then Yanfa started the optical-electronic system business based the improved technology and customers’ requirement.
              </p>
              <p>
                 Based on the concept of medicine and food homology, Yanfa cooperated with biotechnology and agriculture experts to invest the smart plant cultivation with Import Good Crops and Collection Practices (GACP) and e-commerce sales system in 2014. Relying on years of experience in the electronics industry, a sub-brand was officially established in 2015, Warm-heart vegetable shop.
              </p>
              <p>
                 In 2019, a tissue culture and extraction purification laboratory was established to produce gastrodia elata seedlings, and the finished product was processed and developed. In the same year, it passed the GACP inspection and expanded the technology greenhouse, using netted melon and fruit cucumber as the main crops.
              </p>
              <p>
                 The new technical development in autonomous industry, IOT application and 5G communication speed up the next-generation semi-conductor progress. Yanfa will make some strategy to build SiC and GaN related design, manufacturing processes or products agent business to create another glory period.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2.5 組織架構 (圖表) - ID: org */}
      <div id="org" className="max-w-6xl mx-auto px-4 md:px-24 mb-24">
        <div className="text-center mb-12">
           <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
              <Network className="w-6 h-6 text-blue-700" />
           </div>
           <h2 className="text-3xl font-bold text-slate-900 mb-2">組織架構</h2>
           <p className="text-slate-500">Organization Structure</p>
        </div>
        
        <div className="flex flex-col items-center w-full">
            {/* Level 1: Chairman Area */}
            <div className="flex flex-row items-center justify-center w-full relative">
                 <div className="hidden md:flex flex-row items-center absolute right-[calc(50%+9rem)]">
                    <div className="flex flex-col gap-6">
                        <div className="bg-white border border-slate-300 rounded-lg p-3 w-40 text-center z-10 shadow-sm hover:border-blue-500 hover:shadow-md transition-all">
                            <div className="font-bold text-slate-800">稽核室</div>
                            <div className="text-xs text-slate-500">Auditing</div>
                        </div>
                        <div className="bg-white border border-slate-300 rounded-lg p-3 w-40 text-center z-10 shadow-sm hover:border-blue-500 hover:shadow-md transition-all">
                            <div className="font-bold text-slate-800">中國事業單位</div>
                            <div className="text-xs text-slate-500">China BU</div>
                        </div>
                    </div>
                    <div className="relative w-8 h-[130px]"> 
                        <div className="absolute top-[35px] left-0 w-full h-0.5 bg-slate-300"></div>
                        <div className="absolute bottom-[35px] left-0 w-full h-0.5 bg-slate-300"></div>
                        <div className="absolute top-[35px] bottom-[35px] right-0 w-0.5 bg-slate-300"></div>
                        <div className="absolute top-1/2 right-[-2rem] w-8 h-0.5 bg-slate-300 -translate-y-1/2"></div>
                    </div>
                 </div>
                 <div className="bg-white border-2 border-blue-600 rounded-xl p-4 w-64 text-center shadow-lg relative z-10">
                     <div className="font-bold text-lg text-slate-900">董事長</div>
                     <div className="text-sm text-blue-600 font-medium">Chairman</div>
                 </div>
            </div>
            
            <div className="h-16 md:h-40 w-0.5 bg-slate-300"></div>

            {/* Level 2: General Manager Area */}
            <div className="flex flex-row items-center justify-center w-full relative">
                <div className="hidden md:flex flex-row items-center absolute right-[calc(50%+9rem)]">
                    <div className="flex flex-col gap-6">
                        <div className="bg-white border border-slate-300 rounded-lg p-3 w-40 text-center z-10 shadow-sm hover:border-blue-500 hover:shadow-md transition-all">
                            <div className="font-bold text-slate-800">技術與創新開發部</div>
                            <div className="text-xs text-slate-500">Tech & Innovation</div>
                        </div>
                        <div className="bg-white border border-slate-300 rounded-lg p-3 w-40 text-center z-10 shadow-sm hover:border-blue-500 hover:shadow-md transition-all">
                            <div className="font-bold text-slate-800">品保部</div>
                            <div className="text-xs text-slate-500">Quality Assurance</div>
                        </div>
                    </div>
                    <div className="relative w-8 h-[130px]"> 
                        <div className="absolute top-[35px] left-0 w-full h-0.5 bg-slate-300"></div>
                        <div className="absolute bottom-[35px] left-0 w-full h-0.5 bg-slate-300"></div>
                        <div className="absolute top-[35px] bottom-[35px] right-0 w-0.5 bg-slate-300"></div>
                        <div className="absolute top-1/2 right-[-2rem] w-8 h-0.5 bg-slate-300 -translate-y-1/2"></div>
                    </div>
                 </div>
                <div className="bg-white border border-slate-300 rounded-xl p-4 w-64 text-center relative z-10 shadow-sm">
                    <div className="font-bold text-lg text-slate-900">總經理</div>
                    <div className="text-sm text-slate-500">General Manager</div>
                </div>
            </div>
            
            <div className="h-16 md:h-40 w-0.5 bg-slate-300"></div>
            
            <div className="w-[80%] md:w-[600px] h-0.5 bg-slate-300 relative mb-8 hidden md:block">
                <div className="absolute left-0 top-0 h-4 w-0.5 bg-slate-300"></div>
                <div className="absolute left-[33.3%] top-0 h-4 w-0.5 bg-slate-300"></div>
                <div className="absolute right-[33.3%] top-0 h-4 w-0.5 bg-slate-300"></div>
                <div className="absolute right-0 top-0 h-4 w-0.5 bg-slate-300"></div>
            </div>

            {/* Level 3: Departments Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full max-w-6xl">
                 <div className="md:hidden flex flex-col gap-6 w-full items-center mb-8 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                     <div className="text-sm text-blue-600 font-bold mb-2">管理與稽核單位</div>
                     <div className="w-full flex flex-col gap-2">
                        <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg w-full text-center">
                            <div className="font-bold text-slate-800">稽核室</div>
                            <div className="text-xs text-slate-500">Auditing</div>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg w-full text-center">
                            <div className="font-bold text-slate-800">中國事業單位</div>
                            <div className="text-xs text-slate-500">China BU</div>
                        </div>
                     </div>
                     <div className="h-px w-full bg-slate-200"></div>
                     <div className="w-full flex flex-col gap-2">
                        <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg w-full text-center">
                            <div className="font-bold text-slate-800">技術創新部</div>
                            <div className="text-xs text-slate-500">Tech & Innov.</div>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg w-full text-center">
                            <div className="font-bold text-slate-800">品保部</div>
                            <div className="text-xs text-slate-500">QA</div>
                        </div>
                     </div>
                </div>

                <div className="flex flex-col items-center">
                    <div className="bg-white hover:border-blue-500 border border-slate-300 p-4 rounded-lg w-full text-center transition-all h-full flex flex-col justify-center shadow-sm hover:shadow-md">
                        <div className="font-bold text-blue-700">電子事業處</div>
                        <div className="text-xs text-slate-500 mt-1">Electronics Div.</div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-white hover:border-blue-500 border border-slate-300 p-4 rounded-lg w-full text-center transition-all h-full flex flex-col justify-center shadow-sm hover:shadow-md">
                        <div className="font-bold text-blue-700">光電事業處</div>
                        <div className="text-xs text-slate-500 mt-1">Opto-electronics</div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-white hover:border-blue-500 border border-slate-300 p-4 rounded-lg w-full text-center transition-all h-full flex flex-col justify-center shadow-sm hover:shadow-md">
                        <div className="font-bold text-blue-700">生技事業處</div>
                        <div className="text-xs text-slate-500 mt-1">Biotech Div.</div>
                    </div>
                </div>
                 <div className="flex flex-col items-center">
                    <div className="bg-white hover:border-blue-500 border border-slate-300 p-4 rounded-lg w-full text-center transition-all h-full flex flex-col justify-center shadow-sm hover:shadow-md">
                        <div className="font-bold text-slate-800">總管理部</div>
                        <div className="text-xs text-slate-500 mt-1">General Admin.</div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* 2.6 董事會成員 (卡片式) - ID: board, 增加 md:px-24 */}
      <div id="board" className="max-w-4xl mx-auto px-4 md:px-24 mb-24">
        <div className="text-center mb-8">
           <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
              <Users className="w-6 h-6 text-blue-700" />
           </div>
           <h2 className="text-2xl font-bold text-slate-900 mb-2">董事會成員</h2>
           <p className="text-slate-500">Board Members</p>
         </div>

        <div className="space-y-6">
            {boardMembers.map((member, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md hover:border-blue-300 transition duration-300">
                <div className="flex flex-col md:flex-row gap-6 md:items-center">
                  <div className="md:w-1/4 md:border-r md:border-slate-200 pr-6">
                    <div className="text-xs text-blue-600 font-bold tracking-wider uppercase mb-1">職稱</div>
                    <div className="text-2xl font-bold text-slate-800">{member.title}</div>
                  </div>
                  <div className="md:w-3/4 space-y-3">
                    <div className="text-xl text-slate-700 font-medium">{member.name}</div>
                    <div className="flex flex-col gap-2 text-sm text-slate-500">
                       {member.representative && (
                       <div className="flex items-center gap-2">
                         <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                         法人代表：{member.representative}
                       </div>
                        )}
                       {member.concurrent && member.concurrent.length > 0 && member.concurrent.map((concurrent, idx) => (
                         <div key={idx} className="flex items-center gap-2 italic text-slate-400">
                           <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                           兼任：{concurrent}
                         </div>
                       ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* 3. 核心價值 */}
      <div className="max-w-6xl mx-auto px-4 md:px-24 mb-24 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-1">
             <Target className="w-8 h-8 text-blue-600 mb-3" />
             <h3 className="text-lg font-bold text-slate-900">FPC 專業製造</h3>
             <p className="text-slate-600 text-sm mt-2">專注於軟硬結合板與多層軟板技術，服務全球電子大廠。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-1">
             <Flag className="w-8 h-8 text-green-600 mb-3" />
             <h3 className="text-lg font-bold text-slate-900">綠色科技農業</h3>
             <p className="text-slate-600 text-sm mt-2">2015年成立生技事業群，以科技力量推動環保無毒種植。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-1">
             <Award className="w-8 h-8 text-indigo-600 mb-3" />
             <h3 className="text-lg font-bold text-slate-900">智慧應用整合</h3>
             <p className="text-slate-600 text-sm mt-2">結合 RFID 與環控技術，提供跨領域的創新解決方案。</p>
          </div>
      </div>

      {/* 4. 歷史沿革 Timeline - ID: milestones, 增加 md:px-24 */}
      <div id="milestones" className="max-w-6xl mx-auto px-4 md:px-24 pb-32">
        <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">歷史沿革 Milestones</h2>
        
        {/* Mobile Timeline */}
        <div className="md:hidden space-y-8 pl-2">
           {milestones.map((item, idx) => (
             <div key={idx} className="flex gap-5 relative">
                <div className="flex flex-col items-center">
                   <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 ring-4 ring-slate-100 z-10"></div>
                   {idx !== milestones.length - 1 && <div className="w-0.5 bg-slate-300 flex-grow my-1 absolute top-3 bottom-[-32px] left-[5px]"></div>}
                </div>
                <div className="pb-2">
                   <span className="text-blue-700 font-bold text-xl block mb-1">{item.year}</span>
                   <h3 className="text-slate-800 font-bold text-lg mb-2">{item.title}</h3>
                   <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                   {item.descEn && <p className="text-slate-400 text-xs mt-1 italic leading-relaxed">{item.descEn}</p>}
                </div>
             </div>
           ))}
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          {milestones.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={index} className="grid grid-cols-9 gap-4 h-full group">
                <div className="col-span-4 text-right flex flex-col justify-start pr-12 pb-16">
                  {isLeft ? (
                    <div className="transform transition duration-500 hover:-translate-x-2">
                      <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-mono tracking-tighter block mb-3">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                      <p className="text-slate-600 text-base leading-relaxed">{item.desc}</p>
                      {item.descEn && <p className="text-slate-400 text-sm mt-2 italic font-light">{item.descEn}</p>}
                    </div>
                  ) : null}
                </div>

                {/* 中間軸線 */}
                <div className="col-span-1 flex flex-col items-center relative">
                  <div className="w-4 h-4 bg-white border-4 border-blue-600 rounded-full z-10 mt-5 group-hover:scale-125 transition duration-300 shadow-md"></div>
                  {index !== milestones.length - 1 && (
                    <div className="w-0.5 bg-slate-300 absolute top-9 bottom-[-20px]"></div>
                  )}
                </div>

                {/* 右側區塊 */}
                <div className="col-span-4 text-left flex flex-col justify-start pl-12 pb-16">
                  {!isLeft ? (
                    <div className="transform transition duration-500 hover:translate-x-2">
                       <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-mono tracking-tighter block mb-3">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                      <p className="text-slate-600 text-base leading-relaxed">{item.desc}</p>
                      {item.descEn && <p className="text-slate-400 text-sm mt-2 italic font-light">{item.descEn}</p>}
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default About;