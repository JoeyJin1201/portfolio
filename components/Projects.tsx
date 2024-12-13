'use client';

import React from 'react';

import useSectionInView from '@/hooks/useSectionInView';
import { projectsData } from '@/lib/data';

import Project from './Project';
import SectionHeading from './SectionHeading';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project) => (
          <React.Fragment key={project.id}>
            <Project
              id={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageUrl={project.imageUrl}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
