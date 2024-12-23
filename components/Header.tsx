'use client';

import { motion } from 'framer-motion';

import ThemeSwitch from '@/components/ThemeSwitch';

import { useActiveSectionContext } from '@/context/ActiveSectionContext';

import sections from '@/data/sections';

import { getGlobalRefs } from '@/hooks/useSectionInView';

import { SectionName } from '@/lib/types';

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const handleScrollToSection = (section: SectionName) => {
    const refs = getGlobalRefs();
    const targetRef = refs[section];

    if (targetRef) {
      targetRef.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      setActiveSection(section);
      setTimeOfLastClick(Date.now());
    } else {
      console.error(`No ref found for section: ${section}`);
    }
  };

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[3.25rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      />

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {sections.map((section) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={section}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <button
                type="button"
                className={
                  activeSection === section
                    ? 'flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:hover:text-gray-300 dark:text-gray-200 text-gray-950'
                    : 'flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:hover:text-gray-300 dark:text-gray-500'
                }
                onClick={() => handleScrollToSection(section)}
              >
                {section}

                {section === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            </motion.li>
          ))}
          <motion.li
            className="h-3/4 flex items-center justify-center relative"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <ThemeSwitch />
          </motion.li>
        </ul>
      </nav>
    </header>
  );
}
