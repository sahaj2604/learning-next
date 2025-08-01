import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import {  z } from "zod";
import bcrypt from 'bcrypt'
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});
export async function POST(req: NextRequest) {
  const body = await req.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.message, { status: 400 });
  const user=await prisma.user.findUnique({where:{email:body.email}})
  if(user)return NextResponse.json({error:"user already exist"},{status:400});
  const hashedPassword=await bcrypt.hash(body.password,10)
  const newUser=await prisma.user.create({data:{email:body.email,hashedPassword}})
  return NextResponse.json({email:newUser.email})
}
