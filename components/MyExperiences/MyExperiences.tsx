'use client';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { useTranslations } from 'next-intl';

import SectionHeading from '@/components/SectionHeading';

import { useTheme } from '@/context/ThemeContext';

import experiences from '@/data/experiences';

import useSectionInView from '@/hooks/useSectionInView';

import 'react-vertical-timeline-component/style.min.css';

export default function MyExperiences() {
  const t = useTranslations('EXPERIENCES');

  const { ref } = useSectionInView('Experiences');

  const { theme } = useTheme();

  return (
    <section ref={ref} className="max-w-[64em] w-[100%] scroll-mt-28 mb-28">
      <SectionHeading>My Experiences 🌟</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiences.map((experience) => (
          <VerticalTimelineElement
            key={experience.company}
            contentStyle={{
              background:
                theme === 'light' ? '#f3f4f5' : 'rgba(255, 255, 255, 0.05)',
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
            date={experience.date}
            icon={experience.icon}
            iconStyle={{
              background:
                theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.15)',
            }}
          >
            <h3 className="text-xl font-semibold text-center capitalize">
              {experience.title}
            </h3>
            <p className="text-lg font-normal text-center !mt-0">
              {t(`${experience.company}.company`)}
            </p>
            <div className="!mt-2 font-normal text-gray-700 dark:text-white/75">
              <ul className="list-disc pl-4 mt-2 font-normal text-gray-700 dark:text-white/75">
                {experience.description.map((desc) => (
                  <li
                    key={`${experience}-${desc}`}
                    className="mb-2 text-justify break-all"
                  >
                    {t(`${experience.company}.${desc}`)}
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
