'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ImageSlider({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative">
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`absolute top-0 w-full h-full transition-opacity duration-1000 ease-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            className="rounded-3xl w-full h-auto object-cover border-2 border-slate-700"
            src={image.src}
            alt={image.alt}
            width={1000}
            height={1000}
          />
        </div>
      ))}
    </div>
  );
}
