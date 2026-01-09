import {Briefcase,Users,TrendingUp,HeartHandshake,} from "lucide-react";

export default function Stats() {
  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl font-semibold text-center mb-12">
          Our Impact So Far
        </h2>

        {/* Top Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
          {stats.map((item, index) => (
            <div key={index}>
              <h3 className="text-3xl md:text-4xl font-bold text-green-800">
                {item.value}
              </h3>
              <p className="mt-2 text-white text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          {services.map((service, index) => {
  const Icon = service.icon;

  return (
    <div
      key={index}
      className="bg-green-50 border border-green-100 p-6 rounded-xl"
    >
      {/* Icon */}
      <div className="w-10 h-10 flex items-center justify-center bg-green-700 rounded-md mb-4">
        <Icon className="text-white w-5 h-5 items " />
      </div>

      <h4 className="font-semibold text-green-800 mb-2">
        {service.title}
      </h4>

      <p className="text-gray-600 text-sm leading-relaxed">
        {service.description}
      </p>
    </div>
  );
})}

        </div>

      </div>
    </section>
  );
}

const stats = [
  { value: "10K+", label: "Returnees Supported" },
  { value: "15+", label: "Schemes & Services" },
  { value: "25K+", label: "Applications Processed" },
  { value: "14", label: "Districts" },
];

const services = [
  {
    title: "Employment & Skill Support",
    description:
      "Career guidance, skill training, and job-linked opportunities.",
    icon: Briefcase,
  },
  {
    title: "Reintegration Support",
    description:
      "Assistance for a smooth return and settling back into life in Kerala.",
    icon: Users,
  },
  {
    title: "Self-Employment Support",
    description:
      "Support to start or grow enterprises, including financial and advisory help.",
    icon: TrendingUp,
  },
  {
    title: "Welfare Support",
    description:
      "Access to eligible welfare schemes, financial aid, and pension benefits.",
    icon: HeartHandshake,
  },
];
