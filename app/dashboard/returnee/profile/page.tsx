"use client";

import { ThemeProvider } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export default function ViewProfilePage() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-white dark:bg-[#111827] rounded-xl shadow">
        <ThemeProvider/>
        <div className="flex items-center gap-4">
          <Image
            src="/avatar.png"
            alt="Profile"
            width={64}
            height={64}
            className="rounded-full"
          />
          <div>
            <h1 className="text-lg font-semibold text-gray-800">
              Priya Sharma
            </h1>
            <p className="text-sm text-green-700">ID: 1234567890</p>
          </div>
        </div>

        <Section title="Basic Details">
          <Row label="Name" value="Priya Sharma" />
          <Row label="Date of Birth" value="15th May 1993" />
          <Row label="Age" value="30" />
          <Row label="Gender" value="Female" />
          <Row label="Marital Status" value="Married" />
          <Row label="Nationality" value="Indian" />
        </Section>

        <Section title="Contact Details">
          <Row label="Email" value="priya.sharma@email.com" />
          <Row label="Phone" value="+91 9876543210" />
          <Row label="Address" value="123, Main Street" />
          <Row label="City" value="Kochi" />
          <Row label="State" value="Kerala" />
          <Row label="Postal Code" value="682001" />
        </Section>

        <Section title="Employment Details">
          <Row label="Occupation" value="Software Engineer" />
          <Row label="Previous Employer" value="Tech Solutions Inc." />
          <Row label="Current Status" value="Unemployed" />
          <Row label="Skills" value="Java, Python, SQL" />
        </Section>

        <Section title="Educational Background">
          <Row label="Highest Qualification" value="Master’s in Computer Science" />
          <Row label="Institution" value="University of Technology" />
          <Row label="Year of Passing" value="2018" />
          <Row label="Certifications" value="Certified Java Developer" />
        </Section>

        <div className="flex justify-end">
          <Link href="/dashboard/returnee/profile/edit">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-md">
              Edit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}


function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-semibold text-gray-700 mb-4">{title}</h2>
      <div className="grid grid-cols-2 gap-y-3 text-sm">{children}</div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <>
      <p className="text-green-700">{label}</p>
      <p className="text-gray-800">{value}</p>
    </>
  );
}
