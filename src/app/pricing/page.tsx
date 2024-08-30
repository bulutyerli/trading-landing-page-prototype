import Pricing from '../components/Pricing';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | UAlgo',
  description:
    'Explore UAlgo’s pricing plans to find the perfect fit for your trading needs. Compare features and choose the plan that best suits your requirements.',
};

export default function PricingPage() {
  return <Pricing />;
}
