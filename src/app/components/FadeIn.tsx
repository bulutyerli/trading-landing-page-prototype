'use client';

import { useInView } from 'react-intersection-observer';

export default function FadeIn({ children }: { children: React.ReactNode }) {
  const { ref, inView } = useInView({ threshold: 0.25, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`${
        inView ? 'opacity-100' : 'opacity-0'
      } transition-opacity ease-in duration-1000`}
    >
      {children}
    </div>
  );
}
