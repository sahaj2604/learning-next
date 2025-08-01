import Image from "next/image";
import Link from "next/link";
import AddToCart from "./Add/page";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session=await getServerSession(authOptions)
  return (
    <main>
      <Image src={}/>
    </main>
  );
}
