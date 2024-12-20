'use client';

import React from 'react';

import SectionHeading from '@/components/SectionHeading';

import projects from '@/data/projects';

import useSectionInView from '@/hooks/useSectionInView';

import Project from './components/Project/Project';

export default function MyProjects() {
  const { ref } = useSectionInView('Projects', 0.5);

  return (
    <section ref={ref} className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projects.map((project) => (
          <Project
            title={project.title}
            description={project.description}
            tags={project.tags}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}
