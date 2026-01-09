import Image from "next/image";

export default function Commitment() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-semibold text-center mb-12">
          Our Commitment
        </h2>
        <h6 className=" font-extralight text-center mb-12">
            The Kerala Pravasi Mission supports returnees in rebuilding their lives and settling confidently in Kerala.
        </h6>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <Image
            src="/assets/images/commit.png"
            alt="Commitment"
            width={600}
            height={400}
            className="rounded-lg w-full"
          />

          {/* Text */}
          <p className="white leading-relaxed">
            Pravasi Mission is dedicated to supporting Keralite returnees in their journey of reintegration and self-reliance. We provide a wide range of services, including skill development, business support, welfare assistance, and guidance on government schemes. By connecting returnees with local authorities, volunteers, and resources across all 14. districts, we aim to ensure a smooth transition, sustainable livelihood, and long-term well-being.
          </p>

        </div>
      </div>
    </section>
  );
}
