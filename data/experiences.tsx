import React from 'react';
import { FaBoltLightning, FaReact, FaVuejs } from 'react-icons/fa6';

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
    icon: <FaBoltLightning />,
    date: '2019 - 2020',
  },
  {
    title: 'Front-end Engineer',
    company: '雅匠科技股份有限公司',
    description: [
      '與美國團隊合作，使用 Vue 開發智能停車柱管理系統，並主導將原有 VM 架構重構為基於 Nginx 和 Docker Compose 的方案，大幅提升系統穩定性並降低維運成本。',
      '開發 AR 應用支援逢甲戲劇社於台中國家歌劇院展演，透過 Vue 整合 AR SDK 並基於 GPS 座標呈現模型，有效解決跨平台裝置在 GPS 權限及相機鏡頭取用的兼容性挑戰。系統部署於 AWS ECS，確保穩定運行。',
      '與香港團隊協作，開發線上 AR 眼鏡試戴系統，採用 Nuxt.js 進行 SSR 提升 SEO 與使用者體驗，並運用 Docker Compose 部署於 AWS ECS，確保系統兼容性與性能表現。',
      '成功解決多項 AR 應用的跨平台技術難題，顯著提升系統穩定性與兼容性。',
      '運用 Docker 技術提升部署效率，減少維運成本並加速團隊開發進度。',
    ],
    icon: <FaVuejs />,
    date: '2020 - 2022',
  },
  {
    title: 'Front-end Engineer',
    company: '緯創資通股份有限公司',
    description: [
      '主導專案技術轉型，使用 React、Next.js、styled-components 與 Ant Design，打造高效、直觀的網頁應用程式。',
      '負責開發 HR 校園招募網站、招募簽核管理系統、海外招募網站，以及緯創全球法遵系統，並強化專案的網路資安規範。',
      '擔任部門前端 TL，負責面試應徵者、管理前端團隊並進行 Code Review，確保代碼品質與團隊效率。',
      '整合公司 LLM 和智能知識庫，推廣並協助導入 ColumbusAI 助手，顯著提升各部門專案效率。',
      '透過 GitLab 平台實現 CI/CD，自動化執行 Jest 測試、ESLint 靜態檢查，並運用 ArgoCD 部署至 Azure AKS，確保應用高效穩定運行。',
      '使用 Jira 進行 Scrum 專案管理，與 PO 及開發團隊密切合作，確保開發進度符合需求與時程。',
      '業餘時間研究並引入 Next.js，設計前端 Start-Kit，幫助不同部門加速專案建置流程，顯著縮短開發時間並降低成本。',
    ],
    icon: <FaReact />,
    date: '2022 - Present',
  },
] as Experience[];
