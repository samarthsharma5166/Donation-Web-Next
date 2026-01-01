import React from 'react'
import SectionHeader from './SectionHeader'
import { ThreeDCardDemo } from './ThreeDCardDemo'
import axios from 'axios'
import { baseUrl } from '@/helper/constant'


type AimSectionProps = {
  searchParams?: Record<string, string | string[]>;
};

const BlogsSection = async ({ searchParams }: AimSectionProps) => {
  const blogs = await axios.get(`${baseUrl}/api/blog?page=${1}&limit=${6}`);
  const lang = (searchParams)?.lang === "hn" ? "hn" : "en";
  return (
    <div className='py-8'>
      <SectionHeader heading={lang === "hn" ? "नवीनतम ब्लॉग" : "Latest Blogs"} />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 container px-4 mx-auto sm:px-0'>
              {blogs.data.blogs?.map((blog: any) => (
                <ThreeDCardDemo id={blog.id} key={blog.id} src={`https://www.madhavamfoundation.com/images/${blog.coverImage}`} heading={blog.title} subHeading={blog.body} />
              ))}

        </div>
    </div>
  )
}

export default BlogsSection