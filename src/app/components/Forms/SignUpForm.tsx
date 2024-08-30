'use client';

import { signup } from '@/app/actions/auth';
import { type Auth } from '@/app/types/auth.types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export default function SignUpForm() {
  const [signupError, setSignupError] = useState<string | undefined>(undefined);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Auth>();

  const onSubmit: SubmitHandler<Auth> = async (data) => {
    console.log(data);
    const result = await signup(data);
    if (!result.success) {
      setSignupError(result.error);
      reset();
    } else if (result.success) {
      router.refresh();
      router.push('/sign-in');
    }
  };

  const password = watch('password');

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full px-5 sm:w-1/2 sm:px-0 flex flex-col gap-5"
    >
      <div className="relative flex justify-center">
        <div className="relative w-full">
          <input
            type="email"
            id="email"
            className="block rounded-xl px-3 pb-2.5 pt-5 w-full text-sm text-slate-200 bg-transparent border-2 border-slate-700 appearance-none focus:outline-none focus:ring-0 focus:border-cobalt-400 peer"
            placeholder=" "
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Please enter a valid email address',
              },
            })}
          />
          {errors.email && (
            <span className="text-sm text-red-600">{errors.email.message}</span>
          )}

          <label
            htmlFor="email"
            className="absolute text-sm text-slate-500 duration-300 transform -translate-y-4 scale-75 top-4 left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-cobalt-400"
          >
            Email address
          </label>
        </div>
      </div>
      <div className="relative flex justify-center">
        <div className="relative w-full">
          <input
            type="password"
            id="password"
            className="block rounded-xl px-3 pb-2.5 pt-5 w-full text-sm text-slate-200 bg-transparent border-2 border-slate-700 appearance-none focus:outline-none focus:ring-0 focus:border-cobalt-400 peer"
            placeholder=" "
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
          />
          {errors.password && (
            <span className="text-sm text-red-600">
              {errors.password.message}
            </span>
          )}
          <label
            htmlFor="password"
            className="absolute text-sm text-slate-500  duration-300 transform -translate-y-4 scale-75 top-4 left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-cobalt-400"
          >
            Password
          </label>
        </div>
      </div>
      <div className="relative flex justify-center">
        <div className="relative w-full">
          <input
            type="password"
            id="rePassword"
            className="block rounded-xl px-3 pb-2.5 pt-5 w-full text-sm text-slate-200 bg-transparent border-2 border-slate-700 appearance-none focus:outline-none focus:ring-0 focus:border-cobalt-400 peer"
            placeholder=" "
            {...register('rePassword', {
              required: 'Please confirm your password',
              validate: (value) =>
                value === password || 'Passwords do not match',
            })}
          />
          {errors.rePassword && (
            <span className="text-sm text-red-600">
              {errors.rePassword.message}
            </span>
          )}
          <label
            htmlFor="rePassword"
            className="absolute text-sm text-slate-500  duration-300 transform -translate-y-4 scale-75 top-4 left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-cobalt-400"
          >
            Re Enter Password
          </label>
        </div>
      </div>
      {signupError && (
        <span className="text-sm text-red-600">{signupError}</span>
      )}
      <button className="bg-cobalt-400 flex items-center justify-center py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out hover:bg-cobalt-700">
        Continue
      </button>
      <span className="text-sm text-slate-400">
        Already have an account?
        <Link
          href={'/log-in'}
          className="text-cobalt-400 text-sm hover:underline"
        >
          {' '}
          Log in
        </Link>
      </span>
    </form>
  );
}
