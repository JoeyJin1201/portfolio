'use client';

import { motion } from 'framer-motion';

import SectionHeading from '@/components/SectionHeading';

import skills from '@/data/skills';

import useSectionInView from '@/hooks/useSectionInView';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function MySkills() {
  const { ref } = useSectionInView('Skills');

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[48rem] scroll-mt-28 text-center sm:pt-8 sm:pb-16"
    >
      <SectionHeading>My Skills 🛠️</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 sm:gap-6">
        {skills.map((skill, index) => (
          <motion.li
            key={skill.name}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={index}
            className="bg-white borderBlack rounded-xl px-3 py-3 dark:bg-white/10 dark:text-white/80 flex gap-x-2 justify-center items-center"
          >
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons${skill.image}`}
              alt=""
              width={32}
              height={32}
            />
            {skill.name}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
