import useMediaQuery from "./useMediaQuery";

export function useViewport() {
  const isMobile = useMediaQuery('screen and (min-width: 1px) and (max-width: 513px)');
  const isTablet = useMediaQuery('screen and (min-width: 514px) and (max-width: 1025px)');

  return {
    isMobile,
    isTablet,
    isDesktop: !isMobile && !isTablet
  };
}