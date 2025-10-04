import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { prisma } from "@/db/db";
import jwt from "jsonwebtoken";

const UPLOAD_DIR = path.resolve(process.env.ROOT_PATH ?? "", "public/uploads");

// allowed types and max file size (e.g. 5 MB)
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const body = Object.fromEntries(formData);
    const file = (body.file as File) || null;

    if (!file) {
      return NextResponse.json({
        success: false,
        message: "No file uploaded",
      });
    }

    // ✅ Validate file type
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json({
        success: false,
        message: `Invalid file type. Allowed: ${ALLOWED_TYPES.join(", ")}`,
      });
    }

    // ✅ Validate file size
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({
        success: false,
        message: `File too large. Max size is ${MAX_FILE_SIZE / (1024 * 1024)} MB`,
      });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = file.name;

    if (!fileName) {
      return NextResponse.json({
        success: false,
        message: "Invalid file name",
      });
    }

    if (!fs.existsSync(UPLOAD_DIR)) {
      fs.mkdirSync(UPLOAD_DIR, { recursive: true });
    }

    fs.writeFileSync(path.resolve(UPLOAD_DIR, fileName), buffer);

    // ✅ Auth check
    const token = req.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ success: false, message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      userId: string;
      email: string;
    };

    const blog = await prisma.blog.create({
      data: {
        title: body.title as string,
        body: body.description as string,
        coverImage: fileName,
        authorId: Number(decoded?.userId),
      },
    });

    return NextResponse.json({
      success: true,
      message: "Blog created successfully",
      blog,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong",
    });
  }
}

export async function GET(req:NextRequest) {
    try {
       const page = req.nextUrl.searchParams.get("page") || "1";
       const limit = req.nextUrl.searchParams.get("limit") || "10";
       const pageNumber = parseInt(page as string, 10);
       const limitNumber = parseInt(limit as string, 10);
       const offset = (pageNumber - 1) * limitNumber;

       const blogs = await prisma.blog.findMany({
         skip: offset,
         take: limitNumber,
         orderBy: {
           createdAt: "desc",
         },
         include: {
           author: {
             select: {
               userName: true,
             },
           },
         },
       });
       return NextResponse.json({
         success: true,
         message: "Blogs fetched successfully",
         blogs,
         pageInfo:{
              currentPage: pageNumber,
                perPage: limitNumber,
                totalBlogs: await prisma.blog.count(),
                totalPages: Math.ceil(await prisma.blog.count() / limitNumber),
         }
       });
        
    } catch (error) {
        console.error(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong",
    });
    }
}

