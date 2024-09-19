import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { Button } from '@/components/ui/button'
import { signOut } from '@/actions/login'

export default async function PrivatePage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return (
    <div className="space-y-4">
      <p>Hello {data.user.email}</p>
      <form action={signOut}>
        <Button type="submit">Sign Out</Button>
      </form>
    </div>
  )
}