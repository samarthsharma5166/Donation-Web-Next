"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { toast } from 'sonner'
import { useRouter } from "next/navigation";
import { axiosInstance } from '@/helper'

interface FormData {
    userName: string,
    password: string
}
const page = () => {
     const {
            register,
            handleSubmit
        } = useForm<FormData>()
        const [loading,setLoading] = useState(false);
        const navigate = useRouter();
        async function onSubmit(data: FormData) {
            setLoading(true)
            console.log(data)
            const res = await axiosInstance.post("/login",data);
            console.log(res)
            if(res.data.success){
                toast.success(res.data.message);
                localStorage.setItem("token", res.data.token);
                navigate.push("/admin");
            }
            else{
                toast.success(res.data.message);
            }
            setLoading(false);
        }
  return (
      <div className='w-screen h-screen flex items-center justify-center bg-amber-200'>
          <Card className="w-full max-w-sm">
              <CardHeader>
                  <CardTitle>Login to your dashboard</CardTitle>
                  <CardDescription>
                      Enter your username below to login to your account
                  </CardDescription>
              </CardHeader>
              <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="flex flex-col gap-6">
                          <div className="grid gap-2">
                              <Label htmlFor="email">Username</Label>
                              <Input
                                  {...register("userName")}
                                  id="email"
                                  type="text"
                                  placeholder="Enter your username"
                                  required
                              />
                          </div>
                          <div className="grid gap-2">
                              <div className="flex items-center">
                                  <Label htmlFor="password">Password</Label>
                              </div>
                              <Input {...register("password")} id="password" placeholder='••••••' type="password" required />
                          </div>
                  <Button disabled={loading} type="submit" className="w-full">
                      {loading? "Loading..." : "Login"}
                  </Button>
                      </div>
                  </form>
              </CardContent>
              <CardFooter className="flex-col gap-2">
              </CardFooter>
          </Card>
      </div>
  )
}

export default page