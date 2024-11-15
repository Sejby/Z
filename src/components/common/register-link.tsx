"use client";

import Link from "next/link";

export default function RegisterLink() {
  return (
    <Link
      href="/register"
      className="relative inline-block w-full text-center p-3 px-6 py-3 bg-gray-700 text-white rounded-md font-semibold transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-102 hover:bg-gray-600 shadow-lg hover:shadow-xl"
    >
      Registrovat se
      <span className="absolute inset-0 w-full h-full rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-30"></span>
    </Link>
  );
}
