import ColoredButton from '../ColoredButton';
import FadeIn from '../FadeIn';

export default function FeatureWrapper({
  buttonText,
  buttonColor,
  mainText,
  title1,
  title2,
  feature,
  textColor,
  bg,
  children,
  even,
}: {
  buttonText: string;
  buttonColor: string;
  mainText: string;
  title1: string;
  title2: string;
  feature: string;
  textColor: string;
  bg: string;
  even: boolean;
  children: React.ReactNode;
}) {
  return (
    <FadeIn>
      <section className="transition-opacity duration-1000 ease-in-out opacity-100">
        <div
          className={`border border-slate-700 bg-slate-900 rounded-2xl overflow-hidden p-6 py-12 sm:p-8 lg:p-24 lg:py-40 flex flex-col gap-8 relative items-center bg-cover bg-no-repeat bg-[bottom_-200px_center]  ${
            even
              ? 'md:flex-row lg:bg-[right_-250px_top_-100px]'
              : 'md:flex-row-reverse lg:bg-[left_-250px_top_-100px]'
          } ${bg}`}
        >
          <div className="w-full lg:w-4/5 space-y-6 lg:space-y-8 z-10">
            <div>
              <div className="text-xs lg:text-sm uppercase text-slate-300">
                {feature}
              </div>
            </div>
            <div className="text-2xl md:text-4xl lg:text-5xl leading-none font-semibold">
              {title1}
              <span
                className={`bg-gradient-to-r text-transparent bg-clip-text ${textColor}`}
              >
                {title2}
              </span>
            </div>
            <div className="text-base md:text-lg lg:text-xl leading-snug mb-6">
              {mainText}
            </div>
            <div className="w-full flex items-center justify-center md:justify-start z-0">
              <ColoredButton
                text={buttonText}
                className={buttonColor}
                href="/pricing"
              />
            </div>
          </div>
          {children}
        </div>
      </section>
    </FadeIn>
  );
}
