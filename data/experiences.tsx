import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';

type Experience = {
  title: string;
  company: string;
  description: React.ReactNode;
  icon: React.ReactNode;
  date: string;
};

export default [
  {
    title: 'Web Developer Trainee',
    company: 'Innovex Academy, Bhubaneswar, India',
    description: (
      <ul className="list-disc mt-1 font-normal text-gray-700 dark:text-white/75">
        <li className="mb-2">
          🚀 Learn and built responsive UI, optimizing pages for fast response
          using HTML, CSS, JavaScript, ReactJS, Bootstrap 5.
        </li>
        <li className="mb-2">
          🔄 Built reusable components, documented application changes, and
          worked on multiple projects and updates.
        </li>
      </ul>
    ),
    icon: <CgWorkAlt />,
    date: '2019 - 2020',
  },
  {
    title: 'Software Developer II',
    company: 'SearchingYard Software Pvt. Ltd., Bhubaneswar, India',
    description: (
      <ul className="list-disc mt-1 font-normal text-gray-700 dark:text-white/75">
        <li className="mb-2">
          🚀 Worked with advanced web development technologies like ReactJS,
          NextJS, TypeScript, ECMAScript6, JavaScript, Tailwind CSS, Material
          UI, Bootstrap 5, CSS, HTML, and JSON.
        </li>
        <li className="mb-2">
          🔄 Worked on updated versions of React, React-RouterDom, React-Hooks,
          and more.
        </li>
        <li className="mb-2">🔗 Worked on REST API and API integration.</li>
        <li className="mb-2">
          🔥 Developed dynamic applications using FIREBASE.
        </li>
        <li className="mb-2">
          🧠 Specialized in building logic for maximum performance across a vast
          array of devices and browsers.
        </li>
        <li className="mb-2">
          🤝 Coordinated with the development team and worked on projects like
          E-COMMERCE, ERP Management System, Inventory Management System, and
          more.
        </li>
      </ul>
    ),
    icon: <FaReact />,
    date: '2020 - 2022',
  },
  {
    title: 'Next.js Developer',
    company: 'AIS Technolabs Pvt Ltd, Ahemadabad, India',
    description: (
      <ul className="list-disc mt-1 font-normal text-gray-700 dark:text-white/75">
        <li className="mb-2">
          🛠️ Specialized in Next.js, Redux, Bootstrap, NextAuth, and Jira Agile
          methodology.
        </li>
        <li className="mb-2">
          🎮 Developed engaging gaming applications using ReactJS,Next.js and
          TypeScript.
        </li>
        <li className="mb-2">
          ⚡ Ensured optimal performance across various devices and browsers.
        </li>
        <li className="mb-2">
          🤝 Collaborated on E-COMMERCE and ERP Management Systems.
        </li>
        <li className="mb-2">
          ✅ Implemented comprehensive unit testing for robust code quality.
        </li>
        <li className="mb-2">
          🔍 Utilized Jira Agile methodology for effective project management.
        </li>
      </ul>
    ),
    icon: <SiNextdotjs />,
    date: '2022 - Present',
  },
] as Experience[];
