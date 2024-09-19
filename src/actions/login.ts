'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function login(loginData: { email: string, password: string }) {
  const supabase = createClient()

  const data = {
    email: loginData.email as string,
    password: loginData.password as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/private', 'layout')
  redirect('/private')
}

export async function signup(signupData: { email: string, password: string }) {
  const supabase = createClient()

  const data = {
    email: signupData.email as string,
    password: signupData.password as string,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/auth/success', 'layout')
  redirect('/auth/success')
}

export async function signOut() {
  const supabase = createClient()

  await supabase.auth.signOut()

  revalidatePath('/', 'layout')
  redirect('/')
}