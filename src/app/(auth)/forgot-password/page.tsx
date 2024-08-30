import ForgotPasswordForm from '@/app/components/Forms/ForgotPasswordForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Forgot Password | UAlgo',
  description:
    'Forgot your UAlgo password? Enter your email address, and we’ll send you instructions to reset it and regain access to your account.',
};

export default function ForgetPasswordPage() {
  return (
    <>
      <h2 className="text-2xl text-center">Forgot Your Password?</h2>
      <p className="text-xs text-slate-500 text-center w-1/2">
        Enter your email address and we will send you instructions to reset your
        password.
      </p>
      <ForgotPasswordForm />
    </>
  );
}
