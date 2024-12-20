import Experience from '@/components/MyExperiences/MyExperiences';
import Intro from '@/components/Intro';
import Projects from '@/components/MyProjects/MyProjects';
import SectionDivider from '@/components/SectionDivider';
import Skills from '@/components/MySkills/MySkills';

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <Skills />
      <Projects />
      <Experience />
    </main>
  );
}
