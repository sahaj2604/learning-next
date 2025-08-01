"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { status, data: session } = useSession();
  if (status === "loading") return null;
  return (
    <div>
      {status === "authenticated" ? (
        <div>
          <div>{session.user?.name}</div>{" "}
          <Link href={"/api/auth/signout"}>Logout</Link>
        </div>
      ) : (
        <Link href={"/api/auth/signin"}>Login</Link>
      )}
    </div>
  );
};

export default Navbar;
