'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { reviews } from '../data/reviews';

export default function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidePlay, setSlidePlay] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);
  const reviewSlider = [...reviews, ...reviews, ...reviews];
  const reviewCount = reviewSlider.length;

  useEffect(() => {
    if (slidePlay) {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => prevSlide + 1);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [slidePlay]);

  useEffect(() => {
    if (!sliderRef.current) return;

    if (currentSlide >= reviewCount * 2) {
      setTimeout(() => {
        if (!sliderRef.current) return;
        sliderRef.current.style.transition = 'none';
        setCurrentSlide(reviewCount);
      }, 500);
    } else if (currentSlide < 0) {
      setTimeout(() => {
        if (!sliderRef.current) return;
        sliderRef.current.style.transition = 'none';
        setCurrentSlide(reviewCount - 1);
      }, 500);
    } else {
      sliderRef.current.style.transition = 'transform 0.5s ease-in-out';
    }
  }, [currentSlide, reviewCount]);

  const transformValue = `translateX(-${(currentSlide * 300) / reviewCount}%)`;

  const handlePrevClick = () => {
    setSlidePlay(false);
    setCurrentSlide((prevSlide) =>
      prevSlide <= 0 ? reviewCount * 2 - 1 : prevSlide - 1
    );
  };

  const handleNextClick = () => {
    setSlidePlay(false);
    setCurrentSlide((prevSlide) =>
      prevSlide >= reviewCount * 2 - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="py-8 lg:py-16 space-y-8 lg:space-y-16 bg-slate-50 overflow-hidden w-full">
      <div className="px-8 lg:px-16 gap-4 lg:gap-16 flex flex-col lg:flex-row items-center lg:items-end justify-between">
        <div className="text-4xl lg:text-7xl font-semibold text-center lg:text-left">
          <span className="text-black">Real Traders,</span>
          <span className="whitespace-nowrap">
            <span className="bg-gradient-to-r text-transparent bg-clip-text from-green-500 to-green-800">
              {' '}
              Real Stories
            </span>
          </span>
        </div>
        <div className="text-black flex gap-3">
          <button
            onClick={handlePrevClick}
            className="px-6 h-12 flex items-center rounded-full border-2 border-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.081l-5.5-5.25a.75.75 0 0 1 0-1.081l5.5-5.25a.75.75 0 1 1 1.04 1.081L5.612 9.25H16.25a.75.75 0 0 1 0 1.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            onClick={handleNextClick}
            className="px-6 h-12 flex items-center rounded-full border-2 border-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 0 0 .75-.75h10.638l-4.158-3.96a.75.75 0 0 0 1.04-1.081l5.5 5.25a.75.75 0 0 0 0 1.081l-5.5 5.25a.75.75 0 0 0-1.04-1.081l4.158-3.96H3.75a.75.75 0 0 0 0-1.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          ref={sliderRef}
          className="flex transition-transform ease-in-out"
          style={{ transform: transformValue }}
        >
          {reviewSlider.map((review, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-3xl p-6 sm:p-10 shadow-xl h-full shadow-slate-300 mr-10 text-black flex-shrink-0 w-[350px] lg:w-[500px] mb-10"
            >
              <div className="text-2xl lg:text-4xl font-semibold mb-4 lg:mb-6">
                {review.title}
              </div>
              <div className="text-lg lg:text-2xl mb-4 lg:mb-6">
                {review.review}
              </div>
              <div className="flex-grow mb-4 lg:mb-6">
                <Image
                  className="w-1/2"
                  src={'/reviews/trustpilot_five_stars.png'}
                  alt="trust pilot"
                  width={500}
                  height={500}
                />
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-slate-950 w-8 h-8 sm:h-16 sm:w-16 rounded-lg">
                  <Image
                    src={review.imageSrc}
                    className="rounded-lg"
                    alt={review.name}
                    width={300}
                    height={300}
                  />
                </div>
                <div className="text-md sm:text-2xl font-semibold">
                  {review.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
