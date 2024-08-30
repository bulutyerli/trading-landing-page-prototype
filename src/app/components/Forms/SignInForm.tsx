'use client';

import Link from 'next/link';
import { login } from '@/app/actions/auth';
import { Auth } from '@/app/types/auth.types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/app/providers/auth-provider';

export default function LogInForm() {
  const { setUser } = useAuthStore((state) => state);
  const [siginInError, setSignInError] = useState<string | undefined>(
    undefined
  );
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Auth>();

  const onSubmit: SubmitHandler<Auth> = async (data) => {
    const result = await login(data);
    if (!result.success) {
      setSignInError(result.error);
      reset();
    } else if (result.success) {
      setUser(result?.user?.email);
      reset();
      router.push('/');
    }
  };
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
            {...register('email', { required: true })}
          />
          {errors.email && (
            <span className="text-sm text-red-600">This field is required</span>
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
            {...register('password', { required: true })}
          />
          {errors.password && (
            <span className="text-sm text-red-600">This field is required</span>
          )}
          <label
            htmlFor="password"
            className="absolute text-sm text-slate-500  duration-300 transform -translate-y-4 scale-75 top-4 left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-cobalt-400"
          >
            Password
          </label>
        </div>
      </div>
      <Link
        href={'/forgot-password'}
        className="text-cobalt-400 text-sm hover:underline"
      >
        Forgot Password?
      </Link>
      {siginInError && (
        <span className="text-sm text-red-600">{siginInError}</span>
      )}
      <button className="bg-cobalt-400 flex items-center justify-center py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out hover:bg-cobalt-700">
        Continue
      </button>
      <span className="text-sm text-slate-400">
        Do not have an account?
        <Link
          href={'/sign-up'}
          className="text-cobalt-400 text-sm hover:underline"
        >
          {' '}
          Sign up
        </Link>
      </span>
    </form>
  );
}
