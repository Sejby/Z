"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/posts",
    title: "Posts",
  },
  {
    href: "/dashboard",
    title: "Dashboard",
  },
];

export default function Header() {
  const pathname = usePathname();
  const session = useSession();

  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      <Link href={"/"}>
        <h1 className="p-2 font-bold text-xl">Servario</h1>
      </Link>
      <nav>
        <ul className="flex gap-x-5 text-[14px]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={
                  pathname === link.href
                    ? "text-gray-900 font-bold"
                    : "text-gray-500"
                }
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <span>
        {session.data ? (
          <button onClick={() => signOut()}>Sign out</button>
        ) : (
          <Link href={"/login"}>Sign in</Link>
        )}
      </span>
    </header>
  );
}
