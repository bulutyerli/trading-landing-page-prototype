'use client';

import { useInView } from 'react-intersection-observer';
import ColoredButton from './ColoredButton';

export const PriceButton = ({
  text,
  yearly,
  onClick,
}: {
  text: string;
  yearly: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`inline-block px-5 py-1.5 relative transition-all text-balance text-center text-white hover:text-white ${
        !yearly
          ? 'bg-slate-800 hover:bg-slate-700'
          : 'bg-slate-600 hover:bg-slate-500'
      }`}
    >
      {text}
    </button>
  );
};

export default function Pricing() {
  //   const [yearly, setYearly] = useState(true);

  const prices = [
    {
      title: 'Monthly',
      perMonth: '$49.99',
      cycle: ' / mo',
      perYear: '$599.88 / yr',
      saving: 'You save 20% a year',
      includes: 'Package included:',
      popular: false,
      href: '/pricing',
    },
    {
      title: 'Yearly',
      perMonth: '$34.99',
      cycle: ' / mo',
      perYear: '$419.88 / yr',
      saving: 'You save 30% a year',
      popular: true,
      href: '/pricing',
    },
    {
      title: 'Lifetime',
      perMonth: '$699.99',
      cycle: ' / One-Time',
      perYear: '$699.99 / one-time',
      saving: 'Unlimited Access',
      popular: false,
      href: '/pricing',
    },
  ];

  const features = [
    {
      title: 'Smart Money Concepts',
    },
    {
      title: 'Signals & Overlays',
    },
    {
      title: 'Master Pattern',
    },
    {
      title: 'Oscillator Pro',
    },
    {
      title: '24/7 support & active indicator updates',
    },
  ];

  const { ref, inView } = useInView({ threshold: 0.25, triggerOnce: true });

  return (
    <section className="my-32 ">
      <div>
        <div className="bg-[url('/pricebg.png')] bg-stretch bg-no-repeat bg-top">
          <div className="max-w-7xl mx-auto space-y-8 sm:space-y-16">
            <h1 className="px-6 text-4xl sm:text-7xl font-bold text-balance text-center">
              Plans for every style of trading
            </h1>
            {/* <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div className="inline-block ">
                  <div className="flex justify-center items-baseline truncate text-center text-balance rounded-lg cursor-default px-3 py-1 text-white bg-slate-700">
                    <span className="text-xl">
                      Pay yearly and get up to 50% off!
                    </span>
                  </div>
                </div>
                <div className="block absolute -right-3 -bottom-14">
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-sky-500"
                  >
                    <path
                      d="M50.8133 2.07285C50.7516 1.89991 50.727 1.71606 50.741 1.53298C50.7549 1.34991 50.8072 1.1716 50.8945 1.0094C50.9818 0.847203 51.1021 0.704653 51.2479 0.59081C51.3937 0.476967 51.5618 0.39432 51.7414 0.348121C52.1168 0.241717 52.5187 0.281367 52.8647 0.458942C53.2107 0.636517 53.4746 0.938566 53.6023 1.30317L50.8108 2.05411L50.8133 2.07285ZM53.6023 1.30317C55.9823 7.98399 56.3691 15.2066 54.7167 22.11C53.0643 29.0134 49.4423 35.3062 44.2827 40.2382C34.7747 49.5063 20.5885 53.8633 7.52949 48.5362L8.58062 45.9942C20.2335 50.7447 33.1863 46.9705 42.1338 38.2724C46.9379 33.6875 50.3107 27.8341 51.8494 21.4116C53.3881 14.9891 53.0276 8.269 50.8108 2.05411L53.6023 1.30317Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M6.05599 55.9311L12.2405 40.9968L0.289304 44.8026L6.05599 55.9311Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="flex justify-center text-lg">
                <div className="flex border rounded-full divide-x overflow-hidden border-slate-500 divide-slate-500">
                  <PriceButton
                    onClick={() => setYearly(false)}
                    text="Monthly"
                    yearly={!yearly}
                  />
                  <PriceButton
                    onClick={() => setYearly(true)}
                    text="Yearly"
                    yearly={yearly}
                  />
                </div>
              </div>
            </div> */}
            <div className="space-y-8">
              <div>
                <div className="px-6 overflow-x-auto">
                  <div className="grid grid-cols-3 gap-3 sm:gap-6 min-w-[800px]">
                    {prices.map((price) => {
                      return (
                        <div
                          key={price.perMonth}
                          ref={ref}
                          className={`rounded-3xl p-3 pb-6 border flex flex-col relative transition-colors duration-1000 ${
                            price.popular
                              ? `bg-slate-900 text-slate-900 ${
                                  inView && 'bg-white'
                                }`
                              : 'bg-slate-900'
                          }`}
                        >
                          {price.popular && (
                            <div className="absolute top-[80px] -right-[13px]">
                              <div className="bg-green-600 text-white inline-block pl-3 pr-8 py-1.5 rounded shadow-md shadow-black/40">
                                Popular
                              </div>
                              <div className="ml-auto mr-px -mt-px w-0 h-0 border-t-[11px] border-r-[11px] border-transparent border-t-green-600"></div>
                            </div>
                          )}
                          <div className="flex-1">
                            <div className="inline-block w-full">
                              <div className="flex justify-center items-baseline truncate text-center text-balance rounded-lg cursor-default px-4 py-3 text-white bg-slate-700 w-full">
                                <h2 className="text-2xl">{price.title}</h2>
                              </div>
                            </div>
                            <div className="mt-14 flex flex-wrap justify-center items-baseline gap-1">
                              <div className="text-5xl lg:text-6xl">
                                {price.perMonth}
                              </div>
                              <div>{price.cycle}</div>
                            </div>
                            <div className="text-lg text-center text-slate-400 text-balance">
                              {price.perYear}
                            </div>
                            <div className="mt-3 max-w-72 mx-auto px-3">
                              <div className="inline-block w-full">
                                <div
                                  className={`flex justify-center items-baseline truncate text-center text-balance rounded-lg cursor-default px-3 py-2 w-full ${
                                    price.popular
                                      ? 'text-slate-800 bg-slate-200'
                                      : 'text-white bg-slate-700'
                                  }`}
                                >
                                  <span className="text-lg font-bold">
                                    {price.saving}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="mt-6 max-w-72 mx-auto px-3 text-xs font-medium text-center text-balance">
                              Get Access All Premium Tools
                            </div>
                            <div className="mt-6 max-w-72 mx-auto px-3">
                              <div className="text-sm font-bold">
                                Package included:
                              </div>
                              <div className="mt-4">
                                {features.map((feature) => {
                                  return (
                                    <div
                                      key={feature.title}
                                      className="mt-3 flex gap-2 text-xs"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="flex-none w-6 h-6 text-green-500 -mt-1 mb-1"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
                                        />
                                      </svg>

                                      <div className="text-pretty">
                                        {feature.title}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                          <div className="mt-6 max-w-72 mx-auto px-3 w-full">
                            <hr />
                          </div>
                          <div className="mt-6 flex justify-center">
                            <ColoredButton
                              className="from-beige-200 via-cyan-500 blur to-cobalt-700"
                              text="Subscribe"
                              bg={
                                price.popular &&
                                'bg-gradient-to-r from-cobalt-700 to-cyan-500'
                              }
                              href={price.href}
                            />
                          </div>
                          <span className="mt-6 block text-xs text-center text-slate-400">
                            Cancel your subscription anytime
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
