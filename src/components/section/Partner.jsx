import logo1 from "../../assets/images/logo-1.png"; // axon
import logo2 from "../../assets/images/logo-2.png"; // jetstar
import logo3 from "../../assets/images/logo-3.png"; // expedia
import logo4 from "../../assets/images/logo-4.png"; // qantas
import logo5 from "../../assets/images/logo-5.png"; // alitalia

const partners = [
  { name: "Axon", logo: logo1 },
  { name: "Jetstar", logo: logo2 },
  { name: "Expedia", logo: logo3, active: true },
  { name: "Qantas", logo: logo4 },
  { name: "Alitalia", logo: logo5 },
];

const Partners = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-center gap-10 lg:gap-16">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className={`flex items-center justify-center transition-all
                ${
                  partner.active
                    ? "bg-white shadow-lg  rounded-xl px-4"
                    : ""
                }`}
            >
              <img
                src={partner.logo}
                width={80}
                hight={48}
                alt={partner.name}
                className="h-10 lg:h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
