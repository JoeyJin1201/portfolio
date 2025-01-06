'use client';

import { LuLanguages } from 'react-icons/lu';
import { useLocale } from 'next-intl';

import { setUserLocale } from '@/services/locale';

export default function ThemeSwitch() {
  const locale = useLocale();

  const toggleLocale = () => {
    setUserLocale(locale === 'en' ? 'zh' : 'en');
  };

  return (
    <button
      type="button"
      className="w-[2rem] h-[2rem] rounded-full flex items-center justify-center"
      onClick={toggleLocale}
    >
      <LuLanguages />
    </button>
  );
}
