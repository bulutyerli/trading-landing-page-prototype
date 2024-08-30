'use client';

import Image from 'next/image';
import { reviews } from '../data/reviews';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import { useRef } from 'react';

export default function Reviews() {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      (swiperRef.current as any).swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      (swiperRef.current as any).swiper.slideNext();
    }
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
            onClick={handlePrev}
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
            onClick={handleNext}
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
      <div>
        <div>
          <Swiper
            ref={swiperRef}
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={0}
            loop={true}
            slidesPerView={'auto'}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={review.id}>
                <div className="flex flex-col bg-white rounded-3xl p-6 sm:p-10 shadow-xl h-full shadow-slate-300 mr-10 text-black flex-shrink-0 w-[300px] lg:w-[500px] mb-10">
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
