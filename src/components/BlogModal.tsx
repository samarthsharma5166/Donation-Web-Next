import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { SimpleEditor } from './tiptap-templates/simple/simple-editor'
import { Textarea } from './ui/textarea'
import { Card, CardContent, CardHeader } from './ui/card'
import { Button } from './ui/button'
import { IoMdClose } from "react-icons/io";
import { useForm } from 'react-hook-form'

interface BlogModalProps {
   handleModelClick: () => void
  submit: (data: FormData) => Promise<void>
}

interface FormData {
  title: string;
  description: string;
  file: FileList;
}

const BlogModal = ({ handleModelClick ,submit}:BlogModalProps) => {
  const {register,reset,handleSubmit} = useForm<FormData>();
  return (
    <div className='fixed top-0 left-0 w-screen h-screen z-50 bg-black/70 flex justify-center items-center'>
      <Card className=' w-3xl shadow-sm shadow-white rounded-xl bg-white opacity-100'>
       <CardHeader className='text-2xl font-bold'>Add Blog</CardHeader>
       <CardContent>
          <form onSubmit={handleSubmit(submit)} className='space-y-3' action="">
            <div className='space-y-2'>
              <Label htmlFor="title">Title</Label>
              <Input
                {...register('title')}
                id="title"
                type="text"
                placeholder="Enter the title of blog"
                required
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor="username">Content</Label>
              <Textarea
                {...register('description')}
                className='resize-none max-h-80'
                id="username"
                placeholder="Enter the content of blog"
                required
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor="username">Cover Image</Label>
              <Input
              type='file'
                {...register('file')}
                className='resize-none max-h-80'
                id="username"
                placeholder="Enter the content of blog"
                required
              />
            </div>
            <div className='flex gap-4'>
              <Button type='submit' className='bg-gradient-to-br from-indigo-600 to-blue-500'>Add</Button>
              <Button type='button' onClick={handleModelClick}>Cancel</Button>
            </div>
          </form>
       </CardContent>
      </Card>
    </div>
  )
}

export default BlogModal