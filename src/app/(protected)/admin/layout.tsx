"use client"
import React, { useEffect } from 'react'
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { useRouter } from 'next/navigation'

const AdminLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem("token");
            if (!token) {
                router.push("/login");
            }
        }
    }, [router]);

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

export default AdminLayout