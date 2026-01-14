"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [role, setRole] = useState("returnee");

  return (
    <div className="w-full max-w-6xl grid md:grid-cols-2 rounded-2xl shadow overflow-hidden">

      {/* L  */}
        <div className="bg-green-800 text-white p-10 flex flex-col justify-between">

          <div>
            <span className="text-xs bg-green-700 px-3 py-1 ">
              GOVERNMENT SERVICE
            </span>

            <h2 className="text-3xl font-semibold mt-6">
              Secure & Seamless<br />Reintegration
            </h2>

            <p className="mt-4 text-green-100 text-sm">
              Access welfare schemes, financial aid and support services
              designed for Non-Resident Keralites.
            </p>
          </div>

          <div className="bg-green-700/60 rounded-lg p-4 text-sm">
            Need Help? <br />
            Call: 1800 123 456 789
          </div>

        </div>


      {/* RIGHT */}
      <div className="p-10">
        <h2 className="text-2xl font-semibold">Create Account</h2>

        <p className="text-sm mt-1">
          Please select your role and fill in the details
          <br/>
          I am registering as
        </p>

        <div className="grid grid-cols-3 gap-4 mt-6">

  <button
    onClick={() => setRole("returnee")}
    className={`rounded-lg p-4 text-center border
      ${role === "returnee"
        ? "bg-green-700 text-amber-50"
        : "border-gray-200"
      }`}
  >
    <div className="font-medium">Returnee</div>
    <p className="text-xs mt-1">
      Reintegrating to Kerala
    </p>
  </button>

  <button
    onClick={() => setRole("association")}
    className={`rounded-lg p-4 text-center border
      ${role === "association"
        ? " bg-green-700 text-amber-50"
        : "border-gray-200"
      }`}
  >
    <div className="font-medium">Association</div>
    <p className="text-xs mt-1">
      NRI Organization
    </p>
  </button>

  <button
    onClick={() => setRole("volunteer")}
    className={`rounded-lg p-4 text-center border
      ${role === "volunteer"
        ? " bg-green-700 text-amber-50"
        : "border-gray-200"
      }`}
  >
    <div className="font-medium">Volunteer</div>
    <p className="text-xs  mt-1">
      Supporting Welfare
    </p>
  </button>

</div>



        <form className="mt-8 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input className="border p-3 rounded-md" placeholder="First Name" />
            <input className="border p-3 rounded-md" placeholder="Last Name" />
          </div>

          <input className="border p-3 rounded-md w-full" placeholder="Email" />

          <div className="flex">
            <span className="bg-green-700 px-3 py-3 rounded-l-md text-sm text-amber-50">
              +91
            </span>
            <input
              className="border p-3 rounded-r-md w-full"
              placeholder="Mobile Number"
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="border p-3 rounded-md w-full pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="border p-3 rounded-md w-full pr-10"
            />
            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button className="w-full bg-green-700 text-amber-50 py-3 rounded-md">
            Create Account
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-green-700 font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
