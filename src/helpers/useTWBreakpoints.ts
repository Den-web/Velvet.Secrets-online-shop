import { useState, useEffect } from 'react';

const QUERIES = {
  mobile: '(max-width: 767px)',
  tablet: '(min-width: 768px) and (max-width: 1023px)',
  desktop: '(min-width: 1024px)',
};

export const useTWBreakpoints = () => {
  const [breakpoints, setBreakpoints] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
  });

  useEffect(() => {
    const mobileQuery = window.matchMedia(QUERIES.mobile);
    const tabletQuery = window.matchMedia(QUERIES.tablet);
    const desktopQuery = window.matchMedia(QUERIES.desktop);

    const updateMatches = () => {
      setBreakpoints({
        isMobile: mobileQuery.matches,
        isTablet: tabletQuery.matches,
        isDesktop: desktopQuery.matches,
      });
    };

    updateMatches();

    mobileQuery.addEventListener('change', updateMatches);
    tabletQuery.addEventListener('change', updateMatches);
    desktopQuery.addEventListener('change', updateMatches);

    return () => {
      mobileQuery.removeEventListener('change', updateMatches);
      tabletQuery.removeEventListener('change', updateMatches);
      desktopQuery.removeEventListener('change', updateMatches);
    };
  }, []);

  return breakpoints;
};
