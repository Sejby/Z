"use client";

import Link from "next/link";

export default function LoginLink() {
  return (
    <Link
      href="/login"
      className="relative w-full text-center inline-block p-3 px-6 py-3 bg-green-700 text-white rounded-md font-semibold transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-102 hover:bg-gray-600 shadow-lg hover:shadow-xl"
    >
      Přihlásit se
      <span className="absolute inset-0 w-full h-full rounded-md bg-gradient-to-r from-green-500 to-lime-300 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-30"></span>
    </Link>
  );
}
