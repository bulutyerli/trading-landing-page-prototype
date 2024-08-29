import FeatureOne from './components/Features/FeatureOne';
import FeatureThree from './components/Features/FeatureThree';
import FeatureTwo from './components/Features/FeatureTwo';
import FeatureWrapper from './components/Features/FeatureWrapper';
import Features from './components/Features/FeatureWrapper';
import Hero from './components/Hero';
import Pricing from './components/Pricing';

export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className="container mx-auto px-6 space-y-32 mb-32 -mt-96">
        <FeatureWrapper
          buttonText="Level Up Your Charts"
          buttonColor="from-beige-200 via-cyan-500 to-cobalt-700 blur"
          title1="The most powerful tools, "
          title2="all in one place"
          textColor="from-sky-500 via-cyan-500 to-beige-200"
          feature="PRO TOOLKITS"
          mainText="Trade automated price action, advanced signals, and spot reversals with money flow. Our world renowned toolkits bring discretionary analysis to the next level directly on your TradingView® charts."
          bg='bg-[url("/bg1.png")]'
          even={true}
        >
          <FeatureOne />
        </FeatureWrapper>
        <FeatureWrapper
          buttonText="Unlock Access"
          buttonColor="from-orange-500 via-pink-500 blur to-purple-500 blur"
          title1="Easily find "
          title2="high probability setups"
          textColor="from-orange-500 via-pink-500 via-80% to-purple-500"
          feature="Screeners & Alerts"
          mainText="Access professional-grade screeners that integrate seamlessly with LuxAlgo toolkits. Screen for any setup, filter out the noise, and simplify your analysis."
          bg='bg-[url("/bg2.png")]'
          even={false}
        >
          <FeatureTwo />
        </FeatureWrapper>
        <FeatureWrapper
          buttonText="Get Access Now"
          buttonColor="from-cyan-500 via-purple-500 blur to-pink-500 blur"
          title1="Easily build "
          title2="powerful strategies"
          textColor="from-orange-500 via-pink-500 via-80% to-purple-500"
          feature="Next-Gen Backtesting"
          mainText="Our Backtesting System™ unites signals, price action, AI, and the rest of TA in a slick, end-to-end solution to help you build & test your trading strategies."
          bg='bg-[url("/bg3.png")]'
          even={true}
        >
          <FeatureThree />
        </FeatureWrapper>
      </div>
      <Pricing />
    </main>
  );
}
