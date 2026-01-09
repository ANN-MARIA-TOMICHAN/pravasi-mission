const projects = [
  {
    title: "Single Access to Support Services",
    desc: "Access multiple support servoces and schemes through one integrated platform",
    img: "/assets/images/2_1.png",
  },
  {
    title: "Guided Support for Returnees",
    desc: "Receive structured guidance to navigate reintegration, employment, and welfare services",
    img: "/assets/images/2_2.png",
  },
  {
    title: "Improved Access to Schemes",
    desc: "Easily discover and apply for eligible government schemes and benefits",
    img: "/assets/images/2_3.png",
  },
  {
    title: "Local-Level Coordination",
    desc: "Support through district offices and local bodies for faster assistance",
    img: "/assets/images/2_4.png",
  },
];

export default function Projects() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-semibold text-center">
          FEATURED PROJECTS 
          <br/>
          More Ways We Support You
        </h2>
        <p className="text-center mt-3">
          Supporting returnees in settling, earning and securing their future in Kerala
        </p>

        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {projects.map((item, index) => (
            <div
              key={index}
              className=" rounded-xl p-6 text-center shadow-sm"
            >
              <img
                src={item.img}
                alt={item.title}
                className="mx-auto h-32"
              />
              <h3 className="mt-4 font-semibold text-lg">
                {item.title}
              </h3>
              <p className=" mt-2 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
