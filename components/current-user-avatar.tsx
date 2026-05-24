import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { createClient } from '@/lib/supabase/server';

export const CurrentUserAvatar = async ()  => {

  const supabase = await createClient()
  const { data } = await supabase.auth.getClaims()

  const user = data?.claims.user_metadata

  const profileImage = user?.avatar_url ?? null
  const name = user?.full_name ?? '?'

  const initials = name
    ?.split(' ')
    ?.map((word: string) => word[0])
    ?.join('')
    ?.toUpperCase()

  return (
    <Avatar>
      {profileImage && <AvatarImage src={profileImage} alt={initials} />}
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  )
}
