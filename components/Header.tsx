'use client';

import { motion } from 'framer-motion';

import ThemeSwitcher from '@/components/ThemeSwitcher';
import LocaleSwitcher from '@/components/LocaleSwitcher';

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
        className="fixed top-0 left-1/2 h-[3.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.5rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      />

      <nav className="flex fixed top-[0.25rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.75rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[23rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
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
                    ? 'flex w-full items-center justify-center py-2 px-2 sm:px-4 hover:text-gray-950 transition dark:hover:text-gray-300 dark:text-gray-200 text-gray-950'
                    : 'flex w-full items-center justify-center py-2 px-2 sm-px-4 hover:text-gray-950 transition dark:hover:text-gray-300 dark:text-gray-500'
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
            className="h-3/4 flex items-center justify-center relative px-1 py-2"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <LocaleSwitcher />
          </motion.li>
          <motion.li
            className="h-3/4 flex items-center justify-center relative px-1 py-2"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <ThemeSwitcher />
          </motion.li>
        </ul>
      </nav>
    </header>
  );
}
