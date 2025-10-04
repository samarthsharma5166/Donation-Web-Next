"use client";
import React, { useRef, useState } from 'react'
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
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner';

interface FormData {
  name: string;
  userName: string;
  password: string;
}
const page = () => {
    const {
        register,
        handleSubmit
    } = useForm<FormData>()
    const [loading,setLoading] = useState(false);
    async function onSubmit(data: FormData) {
        setLoading(true)
        console.log(data)
        const res = await axios.post("/api/signup",data);
        if(res.data.success){
            toast.success(res.data.message);
        }
        setLoading(false);
    }
    return (
      <div className='w-screen h-screen flex items-center justify-center bg-amber-200'>
          <Card className="w-full max-w-sm">
              <CardHeader>
                  <CardTitle>Signup</CardTitle>
                  <CardDescription>
                      Enter your username below to login to your account
                  </CardDescription>
                  <CardAction>
                      <Button variant="link">Sign Up</Button>
                  </CardAction>
              </CardHeader>
              <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="flex flex-col gap-6">
                          <div className="grid gap-2">
                              <Label htmlFor="name">Name</Label>
                              <Input
                                  {...register("name")}
                                  id="name"
                                  type="text"
                                  placeholder="Enter your name"
                                  required
                              />
                          </div>
                            <div className="grid gap-2">
                                <Label htmlFor="userName">Username</Label>
                                <Input
                                    {...register("userName")}
                                    id="userName"
                                    type="text"
                                    placeholder="Enter your name"
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
                    {loading? "Loading..." : "Signup"}
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