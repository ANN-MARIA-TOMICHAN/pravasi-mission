"use client";

import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";

export default function Navbar() {
  return (
    <nav className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LEFT */}
        <Link href="/" className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Pravasi Mission
        </Link>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          {/* ✅ Theme toggle FIRST */}
          <ThemeToggle />

          <Link
            href="/login"
            className="text-gray-700 dark:text-gray-300 hover:text-green-700"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="bg-green-700 text-white px-5 py-2 rounded-md hover:bg-green-800"
          >
            Sign Up
          </Link>
        </div>

      </div>
    </nav>
  );
}
