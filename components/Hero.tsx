export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/images/hero.png')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Empowering Returnees,<br />Building Futures
        </h1>

        <p className="mt-4 max-w-xl text-gray-200">
          The Kerala Pravasi Mission helps returnees access guidance, services, and schemes for a smooth transition and a stable life in Kerala.
          Get Started
          </p>

        <button className="mt-6 bg-green-700 px-6 py-3 rounded-md">
          Get Started
        </button>
      </div>
    </section>
  );
}
