import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { useActiveSectionContext } from '@/context/ActiveSectionContext';

import type { SectionName } from '@/lib/types';

// 全局 refs，儲存所有 sections 的 DOM 元素
const globalRefs: Record<string, HTMLDivElement | null> = {};

export const getGlobalRefs = () => globalRefs; // 提供外部訪問的接口

const useSectionInView = (sectionName: SectionName, threshold = 0.25) => {
  const { ref: inViewRef, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  // 實現自動管理的 registerRef
  const registerRef = (element: HTMLDivElement | null) => {
    globalRefs[sectionName] = element; // 註冊到全局 refs
    if (inViewRef) {
      inViewRef(element); // 傳遞給 useInView 的 ref
    }
  };

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref: registerRef, // 返回自動管理的 ref
  };
};

export default useSectionInView;
