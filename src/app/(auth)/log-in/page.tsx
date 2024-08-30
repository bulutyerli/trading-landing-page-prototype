import LogInForm from '@/app/components/Forms/SignInForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In to UAlgo | Access Advanced Trading Tools',
  description:
    'Sign in to UAlgo to access powerful trading tools, real-time signals, and alerts. Enhance your trading strategy with our advanced features.',
};

export default function LogInPage() {
  return (
    <>
      <h2 className="text-2xl text-center">Log in to your UAlgo account</h2>
      <LogInForm />
    </>
  );
}
