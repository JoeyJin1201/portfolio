'use client';

import React from 'react';
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
    <section ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Experiences 🌟</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiences.map((item) => (
          <React.Fragment key={uuid()}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
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
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.company}</p>
              <div className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                <ul className="list-none mt-2 font-normal text-gray-700 dark:text-white/75">
                  {item.description?.map((desc) => (
                    <li key={uuid()} className="-indent-6 pl-6 mb-2">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
