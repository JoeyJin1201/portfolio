'use client';

import { LuMoon, LuSun } from 'react-icons/lu';

import { useTheme } from '@/context/ThemeContext';

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className="w-[2rem] h-[2rem] rounded-full flex items-center justify-center"
      onClick={toggleTheme}
    >
      {theme === 'light' ? <LuSun /> : <LuMoon />}
    </button>
  );
}
