import { NextRequest, NextResponse } from "next/server";
import  schema  from "./schema";


export function GET(request:NextRequest) {
    return NextResponse.json([{id:1,name:'milk',price:4.99},{id:2,name:'bread',price:5.99}])
}
export async function POST(request:NextRequest) {
    const body=await request.json();
    const validation=schema.safeParse(body)
    if(!validation.success)return NextResponse.json(validation.error.issues,{status:400});
    return NextResponse.json([validation.data])
}