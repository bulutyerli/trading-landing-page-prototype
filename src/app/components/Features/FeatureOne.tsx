import ImageSlider from '../ImageSlider';

export default function FeatureOne() {
  const images = [
    {
      src: '/feature/masterpattern.png',
      alt: 'UAlgo Master Pattern',
    },
    {
      src: '/feature/oscillator-signalsoverlays.png',
      alt: 'UAlgo Oscillator Signals Overlays',
    },
    {
      src: '/feature/smartmoneyconcepts.png',
      alt: 'UAlgo Smart Money Concepts',
    },
  ];
  return (
    <div className="w-full flex items-center justify-center md:justify-start z-0">
      <div className="md:-mr-60 lg:-mr-40 2xl:-mr-20 w-full">
        <div className="rounded-3xl overflow-hidden bg-black h-40 sm:h-52 md:h-60 xl:h-96 md:min-w-[500px] xl:min-w-[800px] relative bg-transparent">
          <ImageSlider images={images} />
        </div>
      </div>
    </div>
  );
}
