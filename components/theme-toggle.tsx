"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      onClick={() =>
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }
      className="p-2 rounded-md transition
        hover:bg-gray-100 dark:hover:bg-gray-800"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <Sun size={18} className="text-yellow-500" />
      ) : (
        <Moon size={18} className="text-gray-700 dark:text-gray-200" />
      )}
    </button>
  );
}
