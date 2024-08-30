import SignUpForm from '@/app/components/Forms/SignUpForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UAlgo Sign Up | Access Powerful Trading Tools',
  description:
    'Join UAlgo today and unlock advanced trading tools, real-time signals, and actionable alerts. Sign up now to elevate your trading experience.',
};

export default function SignUpPage() {
  return (
    <>
      <h2 className="text-2xl text-center">Create your UAlgo account</h2>
      <SignUpForm />
    </>
  );
}
