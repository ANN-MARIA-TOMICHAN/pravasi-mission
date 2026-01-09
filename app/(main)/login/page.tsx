"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
   const [role,setRole] = useState("returnee");
    const [showPassword, setShowPassword] = useState(false);
  return (
    <main className="min-h-screen flex items-center justify-center px-6">

      <div className="w-full max-w-6xl rounded-2xl shadow grid md:grid-cols-2 overflow-hidden">

        {/* L*/}
        <div className="bg-green-800 text-white p-10 flex flex-col justify-between">

          <div>
            <span className="text-xs bg-green-700 px-3 py-1 rounded-full">
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

        {/* R */}
        <div className="p-10">

          <h2 className="text-2xl font-semibold">
            Login to your account
          </h2>

          
          <div className="flex gap-3 mt-6">
                <button
                    onClick={() => setRole("returnee")}
                    className={`px-5 py-2 rounded-md text-sm border
                    ${role === "returnee"
                        ? "bg-green-700 text-white"
                        : "bg-white text-gray-700"
                    }`}
                >
                    Returnee
                </button>

                <button
                    onClick={() => setRole("district")}
                    className={`px-5 py-2 rounded-md text-sm border
                    ${role === "district"
                        ? "bg-green-700 text-white"
                        : "bg-white text-gray-700"
                    }`}
                >
                    District
                </button>

                <button
                    onClick={() => setRole("state")}
                    className={`px-5 py-2 rounded-md text-sm border
                    ${role === "state"
                        ? "bg-green-700 text-white"
                        : "bg-white text-gray-700"
                    }`}
                >
                    State
                </button>

                </div>

          
          <form className="mt-8 space-y-5">

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border p-3 rounded-md"
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

            <div className="text-right">
              <a href="\forgot-password" className="text-sm text-green-700">
                Forgot password?
              </a>
            </div>

            <button
              type="button"
              className="w-full bg-green-700 text-white py-3 rounded-md font-medium"
            >
              Login
            </button>

          </form>

        </div>

      </div>

    </main>
  );
}
