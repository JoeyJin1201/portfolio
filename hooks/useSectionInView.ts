import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { useActiveSectionContext } from '@/context/ActiveSectionContext';

import type { SectionName } from '@/lib/types';

const useSectionInView = (sectionName: SectionName, threshold = 0.25) => {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
};

export default useSectionInView;
