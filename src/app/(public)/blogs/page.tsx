"use client";
import Header from '@/components/Header'
import SectionHeader from '@/components/SectionHeader'
import { ThreeDCardDemo } from '@/components/ThreeDCardDemo'
import axios from 'axios'
import { Loader2 } from 'lucide-react'
import React, { Suspense, useCallback, useEffect, useState } from 'react'
import { toast } from 'sonner'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const page = () => {
      const [modelOpen, setModalOpen] = useState(false);
      const [loading, setLoading] = useState(false);
      const [blogs, setBlogs] = useState<any[]>([]);
      const [currentPage, setCurrentPage] = useState(1);
      const [totalPages, setTotalPages] = useState(1);
    async function fetchBlogs(page = 1, limit = 9) {
    try {
        const res = await axios.get(`/api/blog?page=${page}&limit=${limit}`);
        return res.data;
    } catch (error) {
        toast.error("Error fetching blogs");
        console.error(error);
        return { blogs: [], pageInfo: {} };
    }
    }

      const loadBlogs = useCallback(async (page = 1) => {
        setLoading(true);
        const data = await fetchBlogs(page, 9);
        setBlogs(data.blogs);
        setCurrentPage(data.pageInfo.currentPage);
        setTotalPages(data.pageInfo.totalPages);
        setLoading(false);
      }, []);
    
      useEffect(() => {
        loadBlogs(1);
      }, [loadBlogs]);

      console.log(blogs)
  return (
   <Suspense fallback={<div className="flex justify-center items-center h-screen"><Loader2 className="animate-spin text-gray-500 w-8 h-8" /></div>}>
          <Header />
          <div className='py-8'>
            <Button className='fixed z-40 left-4 bottom-4 bg-[#867156] hover:bg-[#8b7e6c] transition-transform duration-300 hover:-translate-y-1 hover:scale-110'>
                                                <Link href={"/donate"}>Donate Now</Link>
                    </Button>
              <SectionHeader heading="Latest Blogs" />
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 container px-4 mx-auto sm:px-0'>
                  {loading ? (
                      <div className="col-span-full flex justify-center items-center py-10">
                          <Loader2 className="animate-spin text-gray-500 w-8 h-8" />
                          <span className="ml-2 text-gray-600">Loading blogs...</span>
                      </div>
                  ) : blogs.length > 0 ? (
                      blogs.map((blog) => (
                              <ThreeDCardDemo
                                  key={blog.id}
                                  id={blog.id}  
                                  src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/${blog.coverImage}`}
                                  heading={blog.title}
                                  subHeading={blog.body}
                              />
                      ))
                  ) : (
                      <p className="col-span-full text-center text-gray-500 py-10">
                          No blogs available.
                      </p>
                  )}

              </div>

                    {totalPages > 1 && (
                      <div className="flex justify-center mt-8">
                        <Pagination>
                          <PaginationContent>
                            <PaginationItem>
                              <PaginationPrevious
                                onClick={() => currentPage > 1 && loadBlogs(currentPage - 1)}
                                className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                              />
                            </PaginationItem>
              
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                              <PaginationItem key={page}>
                                <PaginationLink
                                  isActive={page === currentPage}
                                  onClick={() => loadBlogs(page)}
                                >
                                  {page}
                                </PaginationLink>
                              </PaginationItem>
                            ))}
              
                            <PaginationItem>
                              <PaginationNext
                                onClick={() => currentPage < totalPages && loadBlogs(currentPage + 1)}
                                className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                              />
                            </PaginationItem>
                          </PaginationContent>
                        </Pagination>
                      </div>
                    )}
          </div>
   </Suspense>
  )
}

export default page