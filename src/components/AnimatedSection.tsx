import React from 'react';
import { useScrollAnimation, animationVariants } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: keyof typeof animationVariants;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  threshold?: number;
  rootMargin?: string;
}

const AnimatedSection = ({
  children,
  animation = 'fadeInUp',
  delay = 0,
  className = '',
  as: Component = 'div',
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold, rootMargin });
  const variant = animationVariants[animation];

  const animationClasses = cn(
    variant.initial,
    isVisible && variant.animate,
    variant.transition,
    delay > 0 && `delay-[${delay}ms]`,
    className
  );

  return React.createElement(
    Component,
    {
      ref,
      className: animationClasses,
    },
    children
  );
};

export default AnimatedSection;