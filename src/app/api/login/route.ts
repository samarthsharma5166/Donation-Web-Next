import type { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken'
import { prisma } from '@/db/db';
import bcrypt from 'bcrypt'
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const user = await prisma.admin.findFirst({
      where: {
        userName:body.userName
      }
    });
    if(!user){
      return NextResponse.json({success:false, message: 'User not found' });
    }
    const hashPass = await bcrypt.compare(body.password,user.password);
    if(!hashPass){
      return NextResponse.json({success:false, message: 'Incorrect password' });
    }

   const token = jwt.sign(
      { userId: user.id, email: user.userName }, 
      process.env.JWT_SECRET as string,
    );
    
    const res =  NextResponse.json({success:true, message: 'User logged in successfully' });
    res.cookies.set('token', token,{
      httpOnly:true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
    });
    return res;
  } catch (error) {
    return NextResponse.json({
            success:false,
            message:"something went wrong"
        })
  }
}