"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Who can use Pravasi Mission services?",
    a: "Pravasi Mission services are available to eligible Non-Resident Keralites and returnees seeking support for reintegration, livelihood, and welfare",
  },
  {
    q: "What type of support is available through Pravasi Mission?",
    a: "-------------",
  },
  {
    q: "How do I apply for schemes and services?",
    a: "-------------------",
  },
  {
    q: "How will I know if I am eligible for a scheme?",
    a: "-------------",
  },
  {
    q: "Who can I contact for support or queries?",
    a: "-------------",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 ">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-3xl font-semibold text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Got questions? We have got the answers you need
        </p>

        <div className="mt-10 space-y-4">
          {faqs.map((item, index) => (
            <div key={index} className="border rounded-lg">
              <button
                className="w-full text-left p-5 flex justify-between items-center"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span className="font-medium">{item.q}</span>
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 ">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
