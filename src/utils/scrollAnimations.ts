import { useScroll, useTransform } from 'framer-motion';
import { RefObject } from 'react';

type UseScrollOptions = NonNullable<Parameters<typeof useScroll>[0]>;
type ScrollOffset = UseScrollOptions['offset'];

export const useParallaxScroll = (
  ref: RefObject<HTMLElement>,
  speed: number = 0.5,
  offset: ScrollOffset = ['start end', 'end start'] as const
) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, -speed * 100]);
  return y;
};

export const useFadeOnScroll = (
  ref: RefObject<HTMLElement>,
  offset: ScrollOffset = ['start end', 'end start'] as const
) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  return opacity;
};

export const useScaleOnScroll = (
  ref: RefObject<HTMLElement>,
  offset: ScrollOffset = ['start end', 'end start'] as const
) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.9]);
  return scale;
};

export const useRotateOnScroll = (
  ref: RefObject<HTMLElement>,
  degrees: number = 5,
  offset: ScrollOffset = ['start end', 'end start'] as const
) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-degrees, degrees]);
  return rotate;
};
