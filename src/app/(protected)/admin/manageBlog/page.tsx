"use client"
import BlogModal from '@/components/BlogModal'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { IoAddCircle } from 'react-icons/io5'
import { toast } from 'sonner'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { ThreeDCardDemo } from '@/components/ThreeDCardDemo'
import { Loader2 } from "lucide-react"
import { baseUrl, ImageUrl } from '@/helper/constant'
import { axiosInstance } from '@/helper'

interface FormData {
  title: string;
  description: string;
  file: FileList;
}

const Page = () => {
  const [modelOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleModelClick = useCallback(() => {
    setModalOpen((prev) => !prev)
  }, [])

  const handleSubmit = useCallback(async (data: FormData) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      if (data.file && data.file.length > 0) {
        formData.append("file", data.file[0]);
      }

      const res = await axiosInstance.post("/blog", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data.success) {
        toast.success("Blog created successfully");
        loadBlogs(currentPage);
      }
      setModalOpen(false);
    } catch (err) {
      toast.error("Something went wrong");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [currentPage]);

  async function fetchBlogs(page = 1, limit = 9) {
    try {
      const res = await axiosInstance.get(`/blog?page=${page}&limit=${limit}`);
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

  return (
    <div className="w-full px-4 md:px-8 py-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 shadow-sm">
        <h1 className="text-3xl font-bold text-gray-800">📚 Manage Blog</h1>
        <Button onClick={handleModelClick} className="hidden md:block">
          + Add Blog
        </Button>
      </div>

      {modelOpen && (
        <BlogModal handleModelClick={handleModelClick} submit={handleSubmit} />
      )}

      {/* Blog List */}
      {/* Blog List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <div className="col-span-full flex justify-center items-center py-10">
            <Loader2 className="animate-spin text-gray-500 w-8 h-8" />
            <span className="ml-2 text-gray-600">Loading blogs...</span>
          </div>
        ) : blogs.length > 0 ? (
          blogs.map((blog) => (
            <div
              key={blog.id}
              className="relative group bg-white shadow-md rounded-xl overflow-hidden"
            >
              <ThreeDCardDemo
                id={blog.id}
                src={`${baseUrl}/uploads/${blog.coverImage}`}
                heading={blog.title}
                subHeading={blog.body}
              />

              {/* Action Buttons */}
              <div className="flex justify-end gap-2 p-3 border-t bg-gray-50">
                {/* <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setModalOpen(true);
                    console.log("Edit blog:", blog.id);
                  }}
                >
                  ✏️ Edit
                </Button> */}
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={async () => {
                    if (!confirm("Are you sure you want to delete this blog?")) return;
                    try {
                      setLoading(true);
                      const res = await axiosInstance.delete(`/blog/${blog.id}`);
                      if (res.data.success) {
                        toast.success("Blog deleted successfully");
                        loadBlogs(currentPage);
                      }
                    } catch (error) {
                      toast.error("Failed to delete blog");
                      console.error(error);
                    } finally {
                      setLoading(false);
                    }
                  }}
                >
                  🗑️ Delete
                </Button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 py-10">
            No blogs available.
          </p>
        )}
      </div>

      {/* Pagination */}
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

      {/* Floating Action Button */}
      <button
        onClick={handleModelClick}
        className="fixed bottom-6 right-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-4 shadow-lg transition-transform transform hover:scale-105 focus:ring-4 focus:ring-indigo-300"
      >
        <IoAddCircle size={40} />
      </button>
    </div>
  )
}

export default Page
