import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'

import {
    SidebarInset,
    SidebarTrigger,
} from "@/components/ui/sidebar"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"

export default async function ProtectedPage() {
  const supabase = await createClient()

  const { data: userData, error: userError } = await supabase.auth.getUser()

  if (userError || !userData?.user) {
      return
  }

  const userEventsQuery = supabase
  .from('event_users')
  .select(`
      event_id,
      events( id, name )
  `)
  .eq('user_id', userData.user.id)

  /* type UserEvents = QueryData<typeof userEventsQuery> */
  type UserEvents = {
  event_id: string,
  events: {
      id: string,
      name: string
    }
  }[]

  const { data , error } = await userEventsQuery
  if (error) throw error
  const userEvents: UserEvents = data as unknown as UserEvents

  return (
    <SidebarInset>
        <header className="sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-vertical:h-4 data-vertical:self-auto"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>October 2024</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-5">
            {userEvents?.map((event, i) => (
              <div key={i} className="aspect-square rounded-xl bg-muted/50 font-semibold text-muted-foreground flex items-center justify-center p-4 text-center">
                <p>{event.events.name}</p>
              </div>
            ))}
          </div>
        </div>
      </SidebarInset>
    )
}
