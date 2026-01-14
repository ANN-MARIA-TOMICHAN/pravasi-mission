"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

export default function ApplicationDetailsPage() {
  const { applicationId } = useParams();

  return (
    <div className="space-y-6 max-w-5xl mx-auto px-4 sm:px-0">

      
      <div>
        <h1 className="text-xl font-semibold text-gray-900">
          Scheme Application Details
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Based on your NRK profile, here are the welfare programs you match with
        </p>
      </div>

      
      <div className="bg-white border rounded-lg p-6 text-sm">

        <h2 className="text-sm font-semibold mb-4">
          Scheme Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <Info label="Application Number" value={applicationId as string} />
          <Info label="Scheme Name" value="Reintegration Support" />

          <Info
            label="Description"
            value="This scheme provides financial assistance and training opportunities to help returnees reintegrate into Kerala society and find suitable employment."
          />

          <Info
            label="Eligibility"
            value="Returnees from abroad who have been residents of Kerala for at least 5 years."
          />

          <Info
            label="Benefits"
            value="Financial aid for skill development, entrepreneurship support, and job placement assistance."
          />

          <Info label="Name" value="Priya Sharma" />
          <Info label="Date of Birth" value="15th May 1993" />
          <Info label="Email" value="priya.sharma@email.com" />
          <Info label="Phone" value="+91 9876543210" />
          <Info label="Current Employment Status" value="Unemployed" />
          <Info label="Skills" value="Java, Python, SQL" />

        </div>
      </div>

      
      <div className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">

        <Image
          src="/assets/images/duk.png"
          alt="DUK"
          width={120}
          height={40}
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
        />
      </div>

    </div>
  );
}


function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-xs text-green-700">{label}</p>
      <p className="font-medium text-gray-800 mt-0.5">
        {value}
      </p>
    </div>
  );
}
