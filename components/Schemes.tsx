import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const schemes = [
  {
    title: "Krishi Samridhi",
    desc: "Support for agricultural ventures and sustainable farming practices",
    img: "/assets/images/1_1.png",
  },
  {
    title: "Udyam Vikas",
    desc: "Assistance for establishing and growing small businesses and enterprises",
    img: "/assets/images/1_2.png",
  },
  {
    title: "Kaushal Kendra",
    desc: "Skill development programs to enhance employability and career prospects",
    img: "/assets/images/1_3.png",
  },
];

export default function Schemes() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-semibold tracking-widest text-green-700">
              OUR SERVICES
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold mt-2">
              Schemes You Can Benefit From
            </h2>

            <p className="mt-3 max-w-xl text-gray-600">
              Featured schemes that support your return, livelihood, and well-being in Kerala.
            </p>
          </div>

          <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-100 transition">
            Explore All Services
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Schemes Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {schemes.map((item, index) => (
            <div
              key={index}
              className="border rounded-xl overflow-hidden hover:shadow-md transition"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={400}
                height={250}
                className="w-full object-cover"
              />

              <div className="p-5">
                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
