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
    company: 'HS',
    description: ['desc0', 'desc1', 'desc2', 'desc3', 'desc4'],
    icon: <FaBoltLightning />,
    date: '2019 - 2020',
  },
  {
    title: 'Front-end Engineer',
    company: 'YJ',
    description: ['desc0', 'desc1', 'desc2', 'desc3', 'desc4'],
    icon: <FaVuejs />,
    date: '2020 - 2022',
  },
  {
    title: 'Front-end Engineer',
    company: 'WT',
    description: [
      'desc0',
      'desc1',
      'desc2',
      'desc3',
      'desc4',
      'desc5',
      'desc6',
    ],
    icon: <FaReact />,
    date: '2022 - Present',
  },
] as Experience[];
