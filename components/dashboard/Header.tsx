"use client";

import { Search, Bell, ShoppingCart, Sun, Moon } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const { setTheme, resolvedTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-3 flex items-center justify-between">

      
      <div className="relative ">
        <input
          type="text"
          placeholder='Search (ctrl + "/" to focus)'
          className="w-full bg-gray-100 dark:bg-gray-800 text-sm px-4 py-2 rounded-md pr-10
                     text-gray-800 dark:text-gray-100 placeholder-gray-500
                     focus:outline-none focus:ring-1 focus:ring-green-600"
        />
        <Search
          size={18}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
        />
      </div>

      
      <div className="flex items-center gap-4">

        <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
          <ShoppingCart size={18} className="text-gray-600 dark:text-gray-300" />
        </button>

        <div className="relative">
          <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
            <Bell size={18} className="text-gray-600 dark:text-gray-300" />
          </button>
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </div>

        
        <button
          onClick={toggleLanguage}
          className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-green-700"
        >
          {language === "en" ? "EN" : "മലയാളം"}
        </button>

        
        <button
            onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
            {resolvedTheme === "dark" ? (
                <Sun size={18} className="text-gray-600 dark:text-gray-300" />
            ) : (
                <Moon size={18} className="text-gray-600" />
            )}
        </button>


        <Image
          src="/assets/images/profile.png"
          alt="Profile"
          width={32}
          height={32}
          className="rounded-full cursor-pointer"
        />
      </div>

    </header>
  );
}
