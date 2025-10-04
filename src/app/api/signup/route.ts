import { prisma } from "@/db/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt"

export  async function POST(req:NextRequest) {
    try {
        const body = await req.json();
        const hashPass = await bcrypt.hash(body.password,10);
        const user = await prisma.admin.create({
            data:{
                ...body,
                password:hashPass
            }
        })
        return NextResponse.json({
            success:true,
            message:"user created successfully"
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success:false,
            message:"something went wrong"
        })
    }
}