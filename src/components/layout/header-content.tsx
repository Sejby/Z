"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { Session } from "next-auth";

const publicNavLinks = [{ href: "/", title: "Home" }];
const privateNavLinks = [{ href: "/dashboard", title: "Dashboard" }];

interface HeaderContentProps {
  session: Session | null;
}

export default function HeaderContent({ session }: HeaderContentProps) {
  const pathname = usePathname();
  const currentNavLinks = session ? privateNavLinks : publicNavLinks;

  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      <Link href={session ? "/dashboard" : "/"}>
        <h1 className="p-2 font-bold text-xl">Servario</h1>
      </Link>
      <nav>
        <ul className="flex gap-x-5 text-[14px]">
          {currentNavLinks.map((link) => (
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
        {session ? (
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="hover:text-gray-700 transition-colors"
          >
            Sign out
          </button>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </span>
    </header>
  );
}
