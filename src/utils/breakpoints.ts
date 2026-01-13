export const breakpoints = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
  largeDesktop: 1440,
} as const;

export const isMobile = (width: number): boolean => width < breakpoints.tablet;
export const isTablet = (width: number): boolean =>
  width >= breakpoints.tablet && width < breakpoints.desktop;
export const isDesktop = (width: number): boolean => width >= breakpoints.desktop;
