'use client';

import { v4 as uuid } from 'uuid';
import { useTranslations } from 'next-intl';

import SectionHeading from '@/components/SectionHeading';

import projects from '@/data/projects';

import useSectionInView from '@/hooks/useSectionInView';

import Project from './components/Project/Project';

export default function MyProjects() {
  const t = useTranslations('PROJECTS');

  const { ref } = useSectionInView('Projects');

  return (
    <section ref={ref} className="scroll-mt-28 mb-28 sm:mb-56">
      <SectionHeading>My projects 🚀</SectionHeading>
      {projects.map((project) => (
        <Project
          key={uuid()}
          title={project.title}
          description={t(project.description)}
          tags={project.tags}
          imageUrl={project.imageUrl}
        />
      ))}
    </section>
  );
}
