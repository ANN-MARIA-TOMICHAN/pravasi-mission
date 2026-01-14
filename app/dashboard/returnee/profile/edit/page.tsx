"use client";

export default function EditProfilePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <div className="bg-white rounded-xl shadow-sm p-6 space-y-10">

        <div>
          <h1 className="text-lg font-semibold text-gray-800">Profile</h1>
          <p className="text-sm text-green-700 mt-1">
            Please enter your basic identification exactly as it appears on your
            passport. This will be used to verify your identity.
          </p>
        </div>

        <Section title="Basic Identification">
          <p className="text-sm text-green-700 max-w-2xl">
            Please enter your basic identification exactly as it appears on your
            passport. This will be used to verify your identity.
          </p>

          <hr className="border-gray-200 my-5" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="First Name" />
            <Input label="Last Name" />

            <Input label="Father's / Guardian's Name" />
            <Input label="Date of Birth" type="date" />

            <Select
              label="Gender"
              options={["Male", "Female", "Other"]}
            />

            <Input label="Nationality" />
            <Input label="Passport Number" />
            <Input label="Mobile Number" />

            <FileInput label="Upload Document" full />
          </div>
        </Section>

        <Section title="Contact Details">
          <p className="text-sm text-green-700">
            Please enter your contact details.
          </p>

          <hr className="border-gray-200 my-5" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Address Line 1" />
            <Input label="Address Line 2" />
            <Input label="State" />
            <Input label="District" />
            <Input label="Pincode" />
          </div>
        </Section>

        <Section title="Employment Details">
          <p className="text-sm text-green-700">
            Please enter your details.
          </p>

          <hr className="border-gray-200 my-5" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Employment Status" />
            <Input label="Skills" />
            <Input label="State" />
            <Input label="District" />

            <FileInput label="Upload Experience Certificate" full />
          </div>
        </Section>

        <div className="flex justify-end">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-2 rounded-md text-sm">
            Save
          </button>
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
    <section className="space-y-2">
      <h2 className="text-base font-semibold text-gray-800">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Input({
  label,
  type = "text",
}: {
  label: string;
  type?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-700">{label}</label>
      <input
        type={type}
        className="border border-gray-300 rounded-md px-3 py-2 text-sm
          focus:outline-none focus:ring-1 focus:ring-green-600"
      />
    </div>
  );
}

function Select({
  label,
  options,
}: {
  label: string;
  options: string[];
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-700">{label}</label>
      <select
        className="border border-gray-300 rounded-md px-3 py-2 text-sm
          focus:outline-none focus:ring-1 focus:ring-green-600"
      >
        <option value="">Select</option>
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

function FileInput({
  label,
  full = false,
}: {
  label: string;
  full?: boolean;
}) {
  return (
    <div className={`flex flex-col gap-1 ${full ? "md:col-span-2" : ""}`}>
      <label className="text-sm text-gray-700">{label}</label>
      <input
        type="file"
        className="
          w-full text-sm
          border border-gray-300 rounded-md
          bg-white text-gray-700
          px-3 py-2
          file:mr-3
          file:rounded-md
          file:border-0
          file:bg-green-200
          file:text-gray-700
          file:px-4
          file:py-1.5
          file:text-sm
          cursor-pointer
        "
      />
    </div>
  );
}
