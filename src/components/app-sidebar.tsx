"use client"
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import { HiOutlineDocumentText } from "react-icons/hi";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "./ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { axiosInstance } from "@/helper";

// Menu items.
const items = [
    {
        title: "Manage Blog",
        url: "/admin/manageBlog",
        icon: HiOutlineDocumentText,
    },
    {
        title: "All Payments",
        url: "/admin/payments",
        icon: HiOutlineDocumentText,
    },
]

export function AppSidebar() {
    const router = useRouter();
    return (
        <Sidebar className="bg-white">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarHeader className="font-bold text-lg">Admin Panel</SidebarHeader>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter >
                <Button onClick={()=>{
                    if(typeof window !== "undefined"){
                        localStorage.removeItem("token");
                        router.push("/login")
                    }
                }} className="bg-red-600 text-white hover:bg-red-600 p-4">Logout</Button>
            </SidebarFooter>
        </Sidebar>
    )
}