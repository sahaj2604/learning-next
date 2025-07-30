import { NextRequest, NextResponse } from "next/server";
import  schema  from "./schema";
import { prisma } from "@/prisma/client";


export async function GET(request:NextRequest) {
    const products=await prisma.product.findMany();
    return NextResponse.json(products)
}
export async function POST(request:NextRequest) {
    const body=await request.json();
    const newproduct=await prisma.product.create({data:{name:body.name,price:body.price}});
    return NextResponse.json(newproduct);
}
export async function PUT(request:NextRequest,{params}:{params:{id:string}}) {
    const body=await request.json();
    const product=await prisma.product.findUnique({where:{id:parseInt(params.id)}})
    if(!product)return NextResponse.json({message:"not found"},{status:400})
    const newproduct=await prisma.product.update({where:{id:parseInt(params.id)},data:{name:body.name,price:body.price}});
    return NextResponse.json(newproduct);
}
export async function DELETE(request:NextRequest) {
    const body=await request.json();
    const user=await prisma.product.create({data:{name:body.name,price:body.price}});
    return NextResponse.json(user);
}

