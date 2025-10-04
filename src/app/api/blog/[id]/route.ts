import { prisma } from "@/db/db";
import { NextResponse } from "next/server";

export async function DELETE(req: Request, { params }:{ params: Promise<{ id: string }> }) {
  try {
    const {id} = await params;
    const ids = Number(id);
    if (!ids) {
      return NextResponse.json({ success: false, message: "Blog id is required" });
    }

    const blog = await prisma.blog.findUnique({ where: { id:ids } });
    if (!blog) {
      return NextResponse.json({ success: false, message: "Blog not found" });
    }

    await prisma.blog.delete({ where: { id:ids } });
    return NextResponse.json({ success: true, message: "Blog deleted successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Something went wrong" });
  }
}


export async function GET(req: Request, { params }:{ params: Promise<{ id: string }> }) {
  try {
    const {id} = await params;
    const ids = Number(id);
    if (!ids) {
      return NextResponse.json({ success: false, message: "Blog id is required" });
    }

    const blog = await prisma.blog.findUnique({ where: { id:ids } });
    if (!blog) {
      return NextResponse.json({ success: false, message: "Blog not found" });
    }

    return NextResponse.json({ success: true, data: blog });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Something went wrong" });
  }
}