import Image from 'next/image';

export default function FeatureTwo() {
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
      <div className="md:-ml-60 lg:-ml-40 2xl:-ml-20 px-10">
        <div className="border-2 rounded-2xl overflow-hidden border-slate-700">
          <Image
            className="object-cover w-full"
            src={images[0].src}
            alt={images[0].alt}
            width={600}
            height={600}
          ></Image>
        </div>
        <div className="flex justify-between">
          <div className="w-1/2 -mt-10 -ml-10 z-10">
            <div className="border-2 rounded-2xl overflow-hidden border-slate-700">
              <Image
                className="object-cover w-full"
                src={images[1].src}
                alt={images[1].alt}
                width={600}
                height={600}
              ></Image>
            </div>
          </div>
          <div className="w-2/5 -mt-10 -mr-10 z-10">
            <div className="border-2 rounded-2xl overflow-hidden border-slate-700">
              <Image
                className="object-cove w-full"
                src={images[2].src}
                alt={images[2].alt}
                width={600}
                height={600}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
