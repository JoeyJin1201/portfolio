import ecoImg from '@/public/eco.png';
import fitImg from '@/public/fit.png';
import grasImg from '@/public/gras.png';
import grwImg from '@/public/grw.png';
import jmmImg from '@/public/jmm.png';
import jobsImg from '@/public/jobs.png';
import secretImg from '@/public/secret.webp';
import whImg from '@/public/wh.png';

export default [
  {
    title: 'JMMcleaning',
    description:
      '清潔服務網站，提供流暢的使用者體驗與 SEO 優化，並以簡潔響應式設計展現前端技術應用。',
    tags: ['Nuxtjs', 'Vuex', 'Tailwind CSS', 'SEO'],
    imageUrl: jmmImg,
  },
  {
    title: 'Halt Parking',
    description:
      '智能停車柱管理系統，重構原有 VM 架構為 Nginx 和 Docker Compose 解決方案，大幅提升系統穩定性並降低維運成本。',
    tags: ['Vue', 'Nginx', 'Docker Compose'],
    imageUrl: secretImg,
  },
  {
    title: 'White Horse',
    description:
      'AR 應用支援戲劇展演，透過 Vue 整合 AR SDK 基於 GPS 座標呈現模型，解決跨平台裝置的兼容性挑戰，並確保系統穩定運行。',
    tags: ['Vue', 'AR SDK', 'GPS', 'Docker Compose', 'AWS ECS'],
    imageUrl: whImg,
  },
  {
    title: 'FitGlasses',
    description:
      '線上 AR 眼鏡試戴系統，採用 Nuxt.js 提升 SEO 與使用者體驗，並以 Docker Compose 部署於 AWS ECS，確保兼容性與高性能。',
    tags: ['Nuxt.js', 'SSR', 'Docker Compose', 'AWS ECS', 'AR'],
    imageUrl: fitImg,
  },
  {
    title: 'HRrecruit',
    description:
      '招聘平台，強調直觀的介面設計與高效的狀態管理，展現了前端技術在實際專案中的應用能力。',
    tags: ['React', 'Redux', 'styled-components', 'AntD', 'webpack'],
    imageUrl: jobsImg,
  },
  {
    title: 'HRecosystem',
    description:
      '內部招聘網站，聚焦於高效的人才管理流程與直觀的使用者界面，展現了前端技術在內部系統中的應用能力。',
    tags: ['React', 'styled-components', 'AntD', 'webpack'],
    imageUrl: ecoImg,
  },
  {
    title: 'GRW',
    description:
      '全球招聘網站，專注於 SEO 優化與高效的介面設計，展示了在現代前端技術中的實踐經驗。',
    tags: ['Next.js', 'AntD', 'SEO'],
    imageUrl: grwImg,
  },
  {
    title: 'Global Remote Audit System',
    description:
      '內部法遵系統，專注於製作各類互動圖表與直觀的使用者介面，展現數據可視化與前端技術的應用能力。',
    tags: ['TypeScript', 'React', 'styled-components', 'AntD', 'webpack'],
    imageUrl: grasImg,
  },
];
