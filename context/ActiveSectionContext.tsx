'use client';

import React, { createContext, useContext, useMemo, useState } from 'react';

import type { SectionName } from '@/lib/types';

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>('Home');
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  // 使用 useMemo 優化 value 的對象
  const contextValue = useMemo(
    () => ({
      activeSection,
      setActiveSection,
      timeOfLastClick,
      setTimeOfLastClick,
    }),
    [activeSection, timeOfLastClick], // 只有這兩個依賴改變時，才會重新構建對象
  );

  return (
    <ActiveSectionContext.Provider value={contextValue}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      'useActiveSectionContext must be used within an ActiveSectionContextProvider',
    );
  }

  return context;
}
