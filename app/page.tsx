import Image from "next/image";
import Link from "next/link";
import AddToCart from "./Add/page";

export default function Home() {
  return (
    <main>
      <div className="text-xl text-gray-50 bg-red-400 p-5 border-2 rounded-2xl">
        <Link href={'/users'}>users</Link>
        <AddToCart/>
        <button className="btn btn-primary">hello</button>
      </div>
    </main>
  );
}
