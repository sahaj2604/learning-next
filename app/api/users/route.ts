import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import schema from "../products/schema";

export async function GET(request:NextRequest){
    const users=await prisma.user.findMany()
    return NextResponse.json(users)
}
export async function POST(request:NextRequest){
    const body=await request.json()
    const user=await prisma.user.findUnique({where:{email:body.email}})
    if(user)return NextResponse.json({message:'user already exist'},{status:400})
    const newuser=await prisma.user.create({
        data:{
            name:body.name,
            email:body.email
        }
    })
    return NextResponse.json(newuser)
}