import { AppSidebar } from "@/components/app-sidebar"

import {
  SidebarProvider
} from "@/components/ui/sidebar"

export default function DashboardLayout(props: LayoutProps<'/dashboard'>) {
  return (
    <SidebarProvider>
      <AppSidebar variant="sidebar" className="top-17.5 h-[calc(100vh-70px)]!" />
      {props.children}
    </SidebarProvider>
  )
}
