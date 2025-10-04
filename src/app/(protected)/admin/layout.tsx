import React from 'react'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
  return (
      <SidebarProvider>
        <section className='flex w-screen '>
        <AppSidebar />
          <main className='flex-1 p-4'>
            {children}
          </main>
        </section>
      </SidebarProvider>
  )
}

export default layout