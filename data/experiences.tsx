import React from 'react';
import { FaReact, FaVuejs } from 'react-icons/fa';
import { RiBatteryChargeLine } from 'react-icons/ri';

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
      '使用 HTML、CSS、Vue 與 Bootstrap 開發響應式網頁，確保各種裝置解析度下的最佳用戶體驗。',
      '參與政府開放 API 整合應用，開發口罩地圖與空氣品質監測等單頁應用程式（SPA），有效解決生活需求並提升使用便利性。',
      '與企業合作開發公司形象網站，增強使用者對品牌資訊與服務內容的了解與信任。',
      '透過 GitHub Pull Request 與團隊協作，實現版本控制與功能維護，持續提升開發效率與代碼品質。',
      '持續學習業界前沿技術，累積實務經驗，致力於成為企業需求的即戰力，為專案貢獻價值。',
    ],
    icon: <RiBatteryChargeLine />,
    date: '2019 - 2020',
  },
  {
    title: 'Front-end Engineer',
    company: '雅匠科技股份有限公司',
    description: [
      '使用 Vue、Nuxt.js、Vuetify 與 Tailwind CSS，開發高效能且具彈性的網頁應用程式，提供優質的用戶體驗。',
      '參與國際專案合作，與美國團隊開發智能停車柱系統、香港團隊打造 VR 試戴平台，並為逢甲大學戲劇社設計 AR 白馬應用，結合科技與創意。',
      '透過公司自建的 GitLab 平台進行 Merge Request 流程管理，與團隊高效協作，確保版本控制與功能穩定性。',
      '以 Trello 管理專案開發時程，與 PM 緊密配合，確保專案按計畫推進。',
      '自主研究並引入 Nuxt.js 技術，運用 Docker 實現容器化部署，將服務成功部署於 AWS EC2，顯著提升系統穩定性與運行效率。',
    ],
    icon: <FaVuejs />,
    date: '2020 - 2022',
  },
  {
    title: 'Front-end Engineer',
    company: '緯創資通股份有限公司',
    description: [
      '使用 React、Next.js、styled-components 與 Ant Design，打造高效且直觀的網頁應用程式。',
      '負責開發 HR 校園招募網站、招募簽核管理系統、海外招募網站，以及緯創全球法遵系統，並主導專案中網路資安強化工作。',
      '擔任部門前端 TL，負責應徵者面試、管理前端團隊並進行 Code Review，確保代碼品質與團隊效率。',
      '整合公司 LLM 和智能知識庫，推廣及協助導入 ColumbusAI 助手，提升各部門專案效率。',
      '透過自建 GitLab 平台實現 CI/CD，自動化執行 Jest 測試、ESLint 靜態檢查，並運用 ArgoCD 監控應用健康度與部署至 Azure AKS。',
      '以 Jira 進行 Scrum 專案管理，與開發團隊及 PO 緊密合作，確保開發進度符合需求與時程。',
      '業餘時間研究並引入 Next.js，設計前端 Start-Kit，為不同部門加速專案建置流程，顯著縮短開發時間。',
    ],
    icon: <FaReact />,
    date: '2022 - Present',
  },
] as Experience[];
