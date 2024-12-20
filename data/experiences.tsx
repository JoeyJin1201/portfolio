import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';

type Experience = {
  title: string;
  company: string;
  description: string[];
  icon: React.ReactNode;
  date: string;
};

export default [
  {
    title: 'Developer Trainee',
    company: 'HexSchool',
    description: [
      '🚀 學習RWD，使用 HTML、CSS、JavaScript、Vue 和 Bootstrap 優化頁面以實現快速響應。',
      '🔄 構建可重複使用的元件，記錄應用程式變更，並參與多個專案和更新的開發工作。',
    ],
    icon: <CgWorkAlt />,
    date: '2019 - 2020',
  },
  {
    title: 'Front-end Engineer',
    company: '雅匠科技股份有限公司',
    description: [
      '🚀 使用 ReactJS、NextJS、TypeScript、ECMAScript6、JavaScript、Tailwind CSS、Material UI、Bootstrap 5、CSS、HTML 和 JSON 等先進的網頁開發技術進行開發。',
      '🔄 熟悉並使用 React 最新版本，包括 React-RouterDom、React-Hooks 等工具。',
      '🔗 參與 REST API 的開發及整合工作。',
      '🔥 使用 FIREBASE 開發動態應用程式。',
      '🧠 專注於構建邏輯以實現跨多種裝置和瀏覽器的最佳效能。',
      '🤝 與開發團隊合作，參與 E-COMMERCE、ERP 管理系統、庫存管理系統等專案的開發工作。',
    ],
    icon: <FaReact />,
    date: '2020 - 2022',
  },
  {
    title: 'Front-end Engineer',
    company: '緯創資通股份有限公司',
    description: [
      '🛠️ 專精於 Next.js、Redux、Bootstrap、NextAuth 以及 Jira Agile 方法論。',
      '🎮 使用 ReactJS、Next.js 和 TypeScript 開發引人入勝的遊戲應用程式。',
      '⚡ 確保應用程式在各種裝置和瀏覽器上的最佳效能。',
      '🤝 合作參與 E-COMMERCE 和 ERP 管理系統的開發。',
      '✅ 實施全面的單元測試以確保程式碼品質穩健。',
      '🔍 運用 Jira Agile 方法論進行高效的專案管理。',
    ],
    icon: <SiNextdotjs />,
    date: '2022 - Present',
  },
] as Experience[];
