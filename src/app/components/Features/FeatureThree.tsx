import Image from 'next/image';

export default function FeatureThree() {
  const images = [
    {
      src: '/feature2/ualgoall.png',
      alt: 'UAlgo',
    },
    {
      src: '/feature2/ualgobacktest.png',
      alt: 'UAlgo Backtest',
    },
  ];
  return (
    <div className="w-full flex items-center justify-center md:justify-start z-0">
      <div className="md:-mr-60 lg:-mr-40 2xl:-mr-20 pl-10">
        <div className="border-2 rounded-2xl overflow-hidden border-slate-700 bg-transparent">
          <Image
            className="w-full object-cover"
            src={images[0].src}
            alt={images[0].alt}
            width={800}
            height={800}
          ></Image>
        </div>
        <div className="flex justify-start">
          <div className="w-3/5 -mt-10 -ml-10 z-10">
            <div className="rounded-2xl overflow-hidden ">
              <Image
                className="w-full object-cover"
                src={images[1].src}
                alt={images[1].alt}
                width={800}
                height={800}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
