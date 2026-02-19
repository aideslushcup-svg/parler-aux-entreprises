'use client';

import { cn } from '@/lib/utils';
import { useMotionValue, animate, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import useMeasure from 'react-use-measure';

// CSS marquee (compositor thread) — not affected by JS scroll throttling on mobile
const CSSMarquee = ({
  texts, gap, duration, className, textClassName,
}: { texts: string[]; gap: number; duration: number; className?: string; textClassName?: string }) => (
  <div className={cn('overflow-hidden', className)}>
    <div
      style={{
        display: 'flex',
        width: 'max-content',
        // Each item has marginRight = gap, so -50% lands exactly on the seam
        animation: `marquee-scroll ${duration}s linear infinite`,
      }}
    >
      {[...texts, ...texts].map((text, i) => (
        <div
          key={i}
          style={{ marginRight: `${gap}px` }}
          className={cn('whitespace-nowrap', textClassName)}
        >
          {text}
        </div>
      ))}
    </div>
  </div>
);

type InfiniteTextCarouselProps = {
  texts: string[];
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  className?: string;
  textClassName?: string;
};

export function InfiniteTextCarousel({
  texts = [
    'Innovation',
    'Excellence',
    'Quality',
    'Performance',
    'Reliability',
    'Success',
  ],
  gap = 48,
  duration = 25,
  durationOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
  textClassName,
}: InfiniteTextCarouselProps) {
  // On mobile (touch devices), use CSS animation — not affected by scroll throttling
  const isTouch = typeof window !== 'undefined' && !window.matchMedia('(hover: hover)').matches;
  if (isTouch) {
    return <CSSMarquee texts={texts} gap={gap} duration={duration} className={className} textClassName={textClassName} />;
  }
  const [currentDuration, setCurrentDuration] = useState(duration);
  const [ref, { width, height }] = useMeasure();
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    let controls;
    const size = direction === 'horizontal' ? width : height;
    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;

    if (isTransitioning) {
      controls = animate(translation, [translation.get(), to], {
        ease: 'linear',
        duration:
          currentDuration * Math.abs((translation.get() - to) / contentSize),
        onComplete: () => {
          setIsTransitioning(false);
          setKey((prevKey) => prevKey + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: 'linear',
        duration: currentDuration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
        onRepeat: () => {
          translation.set(from);
        },
      });
    }

    return controls?.stop;
  }, [
    key,
    translation,
    currentDuration,
    width,
    height,
    gap,
    isTransitioning,
    direction,
    reverse,
  ]);

  const hoverProps = durationOnHover
    ? {
        onHoverStart: () => {
          setIsTransitioning(true);
          setCurrentDuration(durationOnHover);
        },
        onHoverEnd: () => {
          setIsTransitioning(true);
          setCurrentDuration(duration);
        },
      }
    : {};

  return (
    <div className={cn('overflow-hidden', className)}>
      <motion.div
        className='flex w-max'
        style={{
          ...(direction === 'horizontal'
            ? { x: translation }
            : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
        }}
        ref={ref}
        {...hoverProps}
      >
        {texts.map((text, index) => (
          <div
            key={`first-${index}`}
            className={cn(
              'flex items-center justify-center whitespace-nowrap text-4xl font-semibold text-foreground',
              textClassName
            )}
          >
            {text}
          </div>
        ))}
        {texts.map((text, index) => (
          <div
            key={`second-${index}`}
            className={cn(
              'flex items-center justify-center whitespace-nowrap text-4xl font-semibold text-foreground',
              textClassName
            )}
          >
            {text}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
