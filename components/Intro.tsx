'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import useSectionInView from '@/hooks/useSectionInView';

export default function About() {
  const { ref } = useSectionInView('About', 0.5);

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src="/joey.jpeg"
              alt="Joey portrait"
              width="256"
              height="256"
              quality="95"
              priority
              className="h-48 w-48 rounded-full object-cover border-[0.25rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span>Hello World!</span>
        <br />
        <span>
          I'm <span className="font-bold">Joey,</span>
        </span>
        <br />
        <span>
          a <span className="font-bold">frontend developer</span>.
        </span>
        <br />
        <span>I enjoy building things.</span>
        <br />
        <span>Let's create something extraordinary! 💻✨</span>
      </motion.h1>
    </section>
  );
}
