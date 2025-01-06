import Intro from '@/components/Intro';
import Experience from '@/components/MyExperiences/MyExperiences';
import Projects from '@/components/MyProjects/MyProjects';
import Skills from '@/components/MySkills/MySkills';
import SectionDivider from '@/components/SectionDivider';

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Experience />
    </main>
  );
}
