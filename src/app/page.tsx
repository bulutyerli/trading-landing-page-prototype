import Features from './components/Features';
import Hero from './components/Hero';

export default function Home() {
  const featureImagesOne = [
    {
      src: '/feature1/masterpattern.png',
      alt: 'UAlgo Master Pattern',
    },
    {
      src: '/feature1/oscillator-signalsoverlays.png',
      alt: 'UAlgo Oscillator Signals Overlays',
    },
    {
      src: '/feature1/smartmoneyconcepts.png',
      alt: 'UAlgo Smart Money Concepts',
    },
  ];

  return (
    <main>
      <Hero />
      <div className="container mx-auto px-6 space-y-32 mb-32">
        <Features
          buttonText="Level Up Your Charts"
          buttonColor="from-beige-200 via-cyan-500 to-cobalt-700 blur"
          title1="The most powerful tools, "
          title2="all in one place"
          textColor="from-sky-500 via-cyan-500 to-beige-200"
          feature="PRO TOOLKITS"
          mainText="Trade automated price action, advanced signals, and spot reversals with money flow. Our world renowned toolkits bring discretionary analysis to the next level directly on your TradingView® charts."
          images={featureImagesOne}
          bg='bg-[url("/bg1.png")]'
        />
      </div>
    </main>
  );
}
