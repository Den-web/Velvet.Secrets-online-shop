export const getResponsiveImageSrc = (
  isDesktop: boolean,
  desktopSrc: string,
  mobileSrc: string,
): string => {
  return isDesktop ? desktopSrc : mobileSrc;
};

export const getResponsiveImageSrcAdvanced = (
  breakpoints: { isDesktop: boolean; isTablet: boolean },
  sources: { desktop: string; tablet: string; mobile: string },
): string => {
  if (breakpoints.isDesktop) return sources.desktop;
  if (breakpoints.isTablet) return sources.tablet;
  return sources.mobile;
};
