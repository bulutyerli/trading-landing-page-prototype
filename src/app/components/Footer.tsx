import Image from 'next/image';
import Link from 'next/link';
import { FaXTwitter, FaDiscord, FaYoutube } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="container mx-auto px-6 pt-16 pb-8 sm:pt-32 sm:pb-16 relative">
      <div className="space-y-12">
        <div className="flex flex-col lg:flex-row gap-12 ">
          <div className="w-1/3 space-y-6">
            <div className="flex items-center gap-6">
              <Link
                className="w-[135px] h-[30px] lg:w-[180px] lg:h-[40px]"
                href={'/'}
              >
                <Image
                  src={'/mainlogo.png'}
                  alt="UAlgo Logo"
                  width={300}
                  height={300}
                ></Image>
              </Link>
            </div>
            <div className="flex items-center gap-6 text-xl pt-2 pl-2">
              <Link
                href="https://www.youtube.com"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </Link>
              <Link
                href="https://www.x.com"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </Link>
              <Link
                href="https://discord.com/invite/kyQkKxUQkW"
                aria-label="Discord"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord />
              </Link>
            </div>
          </div>
        </div>
        <div className="leading-5 text-xs space-y-3">
          <p>
            Trading is risky and many will lose money in connection with trading
            activities. All content on this site is not intended to, and should
            not be, construed as financial advice. Decisions to buy, sell, hold
            or trade in securities, commodities and other markets involve risk
            and are best made based on the advice of qualified financial
            professionals. Past performance does not guarantee future results.
          </p>
          <p>
            Hypothetical or Simulated performance results have certain
            limitations. Unlike an actual performance record, simulated results
            do not represent actual trading. Also, since the trades have not
            been executed, the results may have under-or-over compensated for
            the impact, if any, of certain market factors, including, but not
            limited to, lack of liquidity. Simulated trading programs in general
            are designed with the benefit of hindsight, and are based on
            historical information. No representation is being made that any
            account will or is likely to achieve profit or losses similar to
            those shown.
          </p>
          <p>
            Testimonials appearing on this website may not be representative of
            other clients or customers and is not a guarantee of future
            performance or success.
          </p>
          <p>
            As a provider of technical analysis tools for charting platforms, we
            do not have access to the personal trading accounts or brokerage
            statements of our customers. As a result, we have no reason to
            believe our customers perform better or worse than traders as a
            whole based on any content or tool we provide.
          </p>
          <p>
            Charts used on this site are by TradingView in which the majority of
            our tools are built on. TradingView® is a registered trademark of
            TradingView, Inc.
          </p>
          <p>© 2024 UAlgo Global, LLC.</p>
        </div>
      </div>
    </footer>
  );
}
