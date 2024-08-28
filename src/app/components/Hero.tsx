import Link from 'next/link';
import ImageSlider from './ImageSlider';
import ColoredButton from './ColoredButton';

export default function Hero() {
  const heroImages = [
    {
      src: '/hero-images/signalsoverlays.png',
      alt: 'UAlgo Signal Overlays',
    },
    {
      src: '/hero-images/smartmoneyconcepts.png',
      alt: 'UAlgo Smart Money Concepts',
    },
    {
      src: '/hero-images/uoscillatorpro.png',
      alt: 'UAlgo Uoscillator Pro',
    },
  ];

  return (
    <section className="pt-32 pb-[150px] sm:pb-[250px] md:pb-[400px] lg:pb-[500px] bg-[url('/bg1.png')] bg-cover md:bg-stretch bg-no-repeat bg-center md:bg-[right_-200px_center]">
      <div className="container mx-auto px-6 space-y-8 sm:space-y-16 py-32">
        <div className="text-center space-y-10 my-8 sm:my-16 text-balance">
          <h1 className="max-w-prose mx-auto font-semibold text-5xl sm:text-7xl xl:text-8xl py-2">
            Supercharge your trading strategy
          </h1>
          <div className="mx-auto xl:w-4/5">
            <p className="max-w-prose mx-auto text-lg sm:text-2xl">
              Unlock the most powerful trading tools, signals, and alerts used
              by 100,000+ people globally.
            </p>
          </div>
          <ColoredButton
            text="Get 30 Days Risk Free"
            className="from-sky-500 via-purple-500 blur to-orange-500"
          />
        </div>
      </div>
      <div className="mb-32">
        <div className="flex justify-center">
          <div className="w-full h-auto container 2xl:max-w-7xl mx-auto px-6 md:px-12 relative">
            <ImageSlider images={heroImages} />
          </div>
        </div>
      </div>
    </section>
  );
}
