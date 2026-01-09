"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Image from "next/image";
import {
  LayoutDashboard,
  FileText,
  Folder,
  User,
  HelpCircle,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
      const pathname = usePathname();
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col justify-between">

      <div>
        {/* Logo */}
        <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-700 flex flex-col items-center text-center gap-2">
          <Image
            src="/assets/images/govt.jfif"
            alt="Government Logo"
            width={50}
            height={50}
          />
          <div className="text-sm font-semibold leading-snug text-gray-800 dark:text-gray-100">
            Kerala Pravasi Reintegration & <br />
            Empowerment Platform
          </div>
        </div>

        {/* Menu */}
        <nav className="mt-4 px-4">
          <ul className="space-y-1">

            <Link href="/dashboard/returnee">
              <li
                className={`flex items-center gap-3 px-4 py-2 rounded-md cursor-pointer
                  ${
                    pathname === "/dashboard/returnee"
                      ? "bg-green-50 text-green-700 font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
              >
                <LayoutDashboard size={18} />
                Dashboard
              </li>
            </Link>

{/* _ aan not - sredhikanam */}
            <Link href="/dashboard/returnee/recommended_schemes">
              <li
                className={`flex items-center gap-3 px-4 py-2 rounded-md cursor-pointer
                  ${
                    pathname === "/dashboard/returnee/recommended_schemes"
                      ? "bg-green-50 text-green-700 font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
              >
                <Folder size={18} />
                Recommended Schemes
              </li>
            </Link>


            <Link href="/dashboard/returnee/applications">
              <li
                className={`flex items-center gap-3 px-4 py-2 rounded-md cursor-pointer
                  ${
                    pathname === "/dashboard/returnee/recommended-schemes"
                      ? "bg-green-50 text-green-700 font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
              >
                <FileText size={18} />
                Applications
              </li>
            </Link>

            <Link href="/dashboard/returnee/documents">
              <li
                className={`flex items-center gap-3 px-4 py-2 rounded-md cursor-pointer
                  ${
                    pathname === "/dashboard/returnee/recommended-schemes"
                      ? "bg-green-50 text-green-700 font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
              >
                <FileText size={18} />
                Documents
              </li>
            </Link>
            
            <Link href="/dashboard/returnee/profile">
              <li
                className={`flex items-center gap-3 px-4 py-2 rounded-md cursor-pointer
                  ${
                    pathname === "/dashboard/returnee/recommended-schemes"
                      ? "bg-green-50 text-green-700 font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
              >
                <User size={18} />
                Profile
              </li>
            </Link>

            <Link href="/dashboard/returnee/support">
              <li
                className={`flex items-center gap-3 px-4 py-2 rounded-md cursor-pointer
                  ${
                    pathname === "/dashboard/returnee/support"
                      ? "bg-green-50 text-green-700 font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
              >
                <HelpCircle size={18} />
                Support
              </li>
            </Link>


          </ul>
        </nav>
      </div>

      <div className="px-4 py-4 border-t border-gray-200 dark:border-gray-700">
        <button className="flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 font-medium rounded-md w-full">
          <LogOut size={18} />
          Logout
        </button>
      </div>

    </aside>
  );
}
