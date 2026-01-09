import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <Link href="/"
          className="text-xl text-black font-semibold cursor-pointer"
        >
          Pravasi Mission
        </Link>


        <div className="hidden md:flex gap-8 text-gray-600">
          <Link href="#" className="hover:text-green-700">
            About
          </Link>
          <Link href="#" className="hover:text-green-700">
            Services
          </Link>
          <Link href="#" className="hover:text-green-700">
            Schemes
          </Link>
          <Link href="#" className="hover:text-green-700">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-gray-700 hover:text-green-700 font-medium"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="bg-green-700 text-white px-5 py-2 rounded-md hover:bg-green-800 "
          >
            Sign Up
          </Link>
        </div>

      </div>
    </nav>
  );
}
