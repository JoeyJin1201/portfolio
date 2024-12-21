'use client';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { v4 as uuid } from 'uuid';

import SectionHeading from '@/components/SectionHeading';

import { useTheme } from '@/context/ThemeContext';

import experiences from '@/data/experiences';

import useSectionInView from '@/hooks/useSectionInView';

import 'react-vertical-timeline-component/style.min.css';

export default function MyExperiences() {
  const { ref } = useSectionInView('Experiences');

  const { theme } = useTheme();

  return (
    <section
      ref={ref}
      className="max-w-[64em] w-[100%] scroll-mt-12 mb-12 sm:mb-24"
    >
      <SectionHeading>My Experiences 🌟</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiences.map((item) => (
          <VerticalTimelineElement
            key={uuid()}
            contentStyle={{
              background:
                theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
              boxShadow: 'none',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              textAlign: 'left',
              padding: '1.25rem',
            }}
            contentArrowStyle={{
              borderRight:
                theme === 'light'
                  ? '0.4rem solid #9ca3af'
                  : '0.4rem solid rgba(255, 255, 255, 0.5)',
            }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              background:
                theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.15)',
              fontSize: '1.5rem',
            }}
          >
            <h3 className="text-xl font-semibold text-center capitalize">
              {item.title}
            </h3>
            <p className="text-lg font-normal text-center !mt-0">
              {item.company}
            </p>
            <div className="!mt-2 font-normal text-gray-700 dark:text-white/75">
              <ul className="list-disc pl-4 mt-2 font-normal text-gray-700 dark:text-white/75">
                {item.description?.map((desc) => (
                  <li key={uuid()} className="mb-2 text-justify">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
