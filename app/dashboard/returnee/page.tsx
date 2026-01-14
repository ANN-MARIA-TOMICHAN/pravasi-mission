"use client";

import { useLanguage } from "@/context/LanguageContext";
import { FileText, Briefcase, Layers, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function ReturneeDashboardPage() {
  const { language } = useLanguage();

  return (
    <div className="space-y-6">

      {/* melcow */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          {language === "en"
            ? "Welcome back, Sophia Patel"
            : "തിരികെ സ്വാഗതം, സോഫിയ പാട്ടേൽ"}
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {language === "en"
            ? "Here is what's happening with your applications today"
            : "നിങ്ങളുടെ അപേക്ഷകളിലെ പുതിയ വിവരങ്ങൾ"}
        </p>
      </div>

      
<div
  className="relative rounded-xl overflow-hidden bg-cover bg-center"
  style={{
    backgroundImage: "url('/assets/images/dash1.png')",
  }}
>
  
  <div className="absolute inset-0 " />

  <div className="relative z-10 p-6 flex flex-col gap-4 text-white">

    <div className="flex flex-col md:flex-row justify-between gap-4">
      
      <div>
        <p className="text-sm opacity-90">Welcome User</p>
        <h2 className="text-small mt-1">
          21 Returnees
          <br/>
          are registered
          <br/>
          from your state
        </h2>
        <p className="text-sm opacity-80 mt-2 max-w-xl">
          You are almost there, add your employment history to unlock
          personalized job recommendations and faster processing.
        </p>
      </div>

      
      <div className="flex items-start gap-3">
        <button className="border border-white/70 px-4 py-1 rounded-md text-sm hover:bg-white/10">
          Join Malayalee Communities
        </button>
      </div>
    </div>

    
    <div className="flex items-center gap-3">
      <div className="flex-1 h-1.5  rounded-bl-full">
        <div className="h-full w-1/3 bg-green-700 rounded-full" />
      </div>
      <button className="bg-green-700 hover:bg-green-900 text-white px-5 py-1.5 rounded-md text-sm font-medium">
        Complete Profile
      </button>
    </div>

  </div>
</div>


      
      
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm flex gap-3">
    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
      <FileText className="text-green-600" size={20} />
    </div>
    <div>
      <p className="text-sm text-gray-500">Pending Applications</p>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
        2935
      </h3>
    </div>
  </div>

  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm flex gap-3">
    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
      <Briefcase className="text-blue-600" size={20} />
    </div>
    <div>
      <p className="text-sm text-gray-500">New Job Matches</p>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
        29
      </h3>
    </div>
  </div>

  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm flex gap-3">
    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
      <Layers className="text-purple-600" size={20} />
    </div>
    <div>
      <p className="text-sm text-gray-500">Total Applications</p>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
        23
      </h3>
    </div>
  </div>

  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm flex gap-3">
    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
      <CheckCircle className="text-orange-600" size={20} />
    </div>
    <div>
      <p className="text-sm text-gray-500">Approved</p>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
        2
      </h3>
    </div>
  </div>

</div>


            
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            Recommended Schemes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 dark:text-gray-100">
                NDPREM Business Loan
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                NORKA Department Project for Returned Employees
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-500">
                  Up to 30 Lakhs subsidy
                </span>
                <Link href="/dashboard/returnee/recommended_schemes/apply">
                  <button className="bg-green-800 hover:bg-green-900 text-white px-4 py-1.5 rounded-md text-sm transition">
                    Apply Now
                  </button>
                </Link>

              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 dark:text-gray-100">
                NDPREM Business Loan
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                NORKA Department Project for Returned Employees
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-500">
                  Up to 30 Lakhs subsidy
                </span>
                <Link href="/dashboard/returnee/recommended_schemes/apply">
                  <button className="bg-green-800 hover:bg-green-900 text-white px-4 py-1.5 rounded-md text-sm transition">
                    Apply Now
                  </button>
                </Link>

              </div>
            </div>

          </div>
        </div>

                
        <div className="bg-green-800 text-white p-5 rounded-lg">
          <h3 className="font-semibold">Govt Announcements</h3>

          <ul className="mt-4 space-y-3 text-sm">
            <li>
              Today<br />
              New subsidy rates announced for women entrepreneurs under NDPREM
              scheme.
            </li>
            <li>
              Yesterday<br />
              Special job fair for returnees in Kochi on Nov 15th. Register now.
            </li>
          </ul>

          <button className="mt-4 underline text-sm">
            Read all news
          </button>
        </div>
</div>   


<div className="mt-10 border-t pt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">

  
  <Image
    src="/assets/images/duk.png"
    alt="DUK"
    width={120}
    height={40}
    className="object-contain"
  />

  
  <p className="text-center">
    Designed, Developed and Implemented by Centre for Digital Innovation and
    Product Development (CDIPD) <br />
    A Centre of Excellence Established by Digital University Kerala
  </p>

  
  <Image
    src="/assets/images/cdipd.png"
    alt="CDIPD"
    width={120}
    height={40}
    className="object-contain"
  />

</div>



      </div>


  );
}
