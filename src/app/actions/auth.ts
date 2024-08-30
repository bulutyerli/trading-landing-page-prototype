'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/app/utils/supabase/server';
import { type Auth } from '../types/auth.types';

export async function login(data: Auth) {
  const supabase = createClient();

  const signInData = {
    email: data.email,
    password: data.password,
  };

  const { data: signInResult, error } = await supabase.auth.signInWithPassword(
    signInData
  );

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath('/', 'layout');
  const user = signInResult.user;

  return { success: true, user };
}

export async function signup(data: Auth) {
  const supabase = createClient();

  const signUpData = {
    email: data.email,
    password: data.password,
  };

  const { error } = await supabase.auth.signUp(signUpData);

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath('/', 'layout');

  return { success: true };
}
