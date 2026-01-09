"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import {useState} from "react";

export default function RecommendedSchemesPage() {
    const [activeFilter,setActiveFilter] = useState("oneEligiblity");
  const { language } = useLanguage();
const filters = [
  { key: "oneEligibility", label: "One Eligibility" },
  { key: "highMatch", label: "High Match" },
  { key: "financialAid", label: "Financial Aid" },
  { key: "skill", label: "Skill Development" },
  { key: "housing", label: "Housing" },
];

  return (
    <div className="space-y-6">

    
      <div>
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            {language === "en" ? "Recommended Schemes" : "ശുപാർശ ചെയ്യുന്ന പദ്ധതികൾ"}
        </h1>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {language === "en"
            ? "Based on your NRK profile, here are the welfare programs you match with"
            : "നിങ്ങളുടെ എൻആർകെ പ്രൊഫൈൽ അടിസ്ഥാനമാക്കി തിരഞ്ഞെടുക്കപ്പെട്ട ക്ഷേമ പദ്ധതികൾ"}
        </p>

      </div>


<div className="flex flex-wrap gap-3">

  {filters.map((filter) => {
    const isActive = activeFilter === filter.key;

    return (
      <button
        key={filter.key}
        onClick={() => setActiveFilter(filter.key)}
        className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition
          ${
            isActive
              ? "bg-green-700 text-white"
              : "border border-gray-300 text-gray-700 hover:bg-gray-100"
          }`}
      >
        {isActive && <span>✓</span>}
        {filter.label}
      </button>
    );
  })}

</div>
{/* click a filyter it turns green and tick appears on active filter */}
            
<div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm">

 
  <div className="relative h-40">
    <Image
      src="/assets/images/scheme1.jfif"
      alt="Scheme"
      fill
      className="object-cover"
    />

    <span className="absolute top-3 left-3 bg-green-700 text-white text-xs px-3 py-1 rounded-full">
      90% Match
    </span>
  </div>

 
  <div className="p-4 space-y-2">
    <h3 className="font-semibold text-gray-800 dark:text-gray-100">
      NDPREM Entrepreneurship Support
    </h3>

    <p className="text-sm text-gray-500">
      Financial assistance for starting new ventures. Includes subsidy up to 15%
    </p>
  </div>

  
  <div className="px-4 pb-4 space-y-3">
    <div className="text-xs text-gray-500 flex items-center gap-1">
      📅 Max Benefit: 30 Lakhs
    </div>

    <div className="flex gap-2">
      <button className="flex-1 bg-green-700 hover:bg-green-800 text-white text-sm py-2 rounded-md">
        Check Eligibility
      </button>

      <button className="px-3 py-2 border rounded-md hover:bg-gray-100">
        👁
      </button>
    </div>
  </div>

</div>


        <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm">

  <div className="relative h-40">
    <Image
      src="/assets/images/scheme2.jfif"
      alt="Scheme"
      fill
      className="object-cover"
    />

    <span className="absolute top-3 left-3 bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
      Eligible
    </span>
  </div>

  <div className="p-4 space-y-2">
    <h3 className="font-semibold text-gray-800 dark:text-gray-100">
      Santhvana Relief Fund
    </h3>

    <p className="text-sm text-gray-500">
      Financial assistance for starting new ventures. Includes subsidy up to 15%
    </p>
  </div>

  <div className="px-4 pb-4 space-y-3">
    <div className="text-xs text-green-700">
      Deadline Rolling
    </div>

    <button className="w-full bg-green-700 hover:bg-green-800 text-white text-sm py-2 rounded-md">
      Apply Now
    </button>
  </div>

</div>
<div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm">

  <div className="relative h-40">
    <Image
      src="/assets/images/scheme3.jfif"
      alt="Scheme"
      fill
      className="object-cover"
    />

    <span className="absolute top-3 left-3 bg-green-700 text-white text-xs px-3 py-1 rounded-full">
      85% Match
    </span>
  </div>

  <div className="p-4 space-y-2">
    <h3 className="font-semibold text-gray-800 dark:text-gray-100">
      NDPREM Entrepreneurship Support
    </h3>

    <p className="text-sm text-gray-500">
      Financial assistance for starting new ventures. Includes subsidy up to 15%
    </p>
  </div>

  <div className="px-4 pb-4 space-y-3">
    <div className="text-xs text-green-700">
      Deadline Rolling
    </div>

    <button className="w-full bg-green-700 hover:bg-green-800 text-white text-sm py-2 rounded-md">
      Apply Now
    </button>
  </div>

</div>
</div>
  )};