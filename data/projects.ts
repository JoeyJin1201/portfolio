import ecoImg from '@/public/eco.png';
import grasImg from '@/public/gras.png';
import grwImg from '@/public/grw.png';
import jmmImg from '@/public/jmm.png';
import jobsImg from '@/public/jobs.png';

export default [
  {
    title: 'JMMcleaning',
    description: '形象網站',
    tags: ['Nuxtjs', 'vuex', 'tailwindcss'],
    imageUrl: jmmImg,
  },
  {
    title: 'HRrecruit',
    description: '緯創招募網站',
    tags: ['React', 'redux', 'webpack', 'styled-components', 'Antd'],
    imageUrl: jobsImg,
  },
  {
    title: 'HRecosystem',
    description: '內部招募雇用流程網站',
    tags: ['React', 'webpack', 'styled-components', 'Antd'],
    imageUrl: ecoImg,
  },
  {
    title: 'GRW',
    description: '緯創全球招募網站',
    tags: ['Next.js', 'Antd'],
    imageUrl: grwImg,
  },
  {
    title: 'Global Remote Audit System',
    description: '內部法遵系統',
    tags: ['TypeScript', 'React', 'webpack', 'styled-components', 'Antd'],
    imageUrl: grasImg,
  },
];
