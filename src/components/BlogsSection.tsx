import React from 'react'
import SectionHeader from './SectionHeader'
import { ThreeDCardDemo } from './ThreeDCardDemo'
import axios from 'axios'

const BlogsSection = async() => {
  const blogs = await axios.get(`${process.env.BASE_URL}/api/blog?page=${1}&limit=${6}`);
  return (
    <div className='py-8'>
        <SectionHeader heading="Latest Blogs" />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 container px-4 mx-auto sm:px-0'>
              {blogs.data.blogs.map((blog: any) => (
                <ThreeDCardDemo id={blog.id} key={blog.id} src={`/uploads/${blog.coverImage}`} heading={blog.title} subHeading={blog.body} />
              ))}

        </div>
    </div>
  )
}

export default BlogsSection