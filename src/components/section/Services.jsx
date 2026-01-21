// import { Satellite, Plane, Mic, Settings } from "lucide-react";
import SatelliteDish from "../../assets/satellite-dish.jsx";
// import { Plane } from "lucide-react";
import RectanglePlan from "../../assets/rectangle-plan.jsx";
import Mic from "../../assets/mic.jsx";
import Settings from "../../assets/setting.jsx";
const services = [
  {
    icon: SatelliteDish,
    title: "Calculated Weather",
    description: "Built Wicket longer admire do barton vanity itself do in it.",
    color: "bg-jadoo-yellow",
    iconColor: "text-jadoo-yellow",
  },
  {
    icon: RectanglePlan,
    title: "Best Flights",
    description: "Engrossed listening. Park gate sell they west hard for the.",
    color: "bg-jadoo-red",
    iconColor: "text-jadoo-red",
  },
  {
    icon: Mic,
    title: "Local Events",
    description:
      "Barton vanity itself do in it. Preferred to men it engrossed listening.",
    color: "bg-jadoo-purple",
    iconColor: "text-jadoo-purple",
  },
  {
    icon: Settings,
    title: "Customization",
    description:
      "We deliver outsourced aviation services for military needs.",
    color: "bg-primary",
    iconColor: "text-primary",
  },
];

const Services = () => {
  return (
    <section className="py-20" id="flights">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[#5E6282] font-semibold text-lg uppercase tracking-wider">
            Category
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-volkhov font-bold text-[#14183E]">
            We Offer Best Services
          </h2>
        </div>

        {/* Services Grid */}
     <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
  {services.map((service, index) => (
    <div
      key={service.title}
      className={`relative rounded-[36px] bg-white px-6 pt-20 pb-10 text-center transition-all duration-300 ${
        index === 1
          ? "shadow-2xl shadow-muted/30"
          : "hover:shadow-xl hover:shadow-muted/20"
      }`}
    >
      {/* Floating Icon */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <div className="w-24 h-24 rounded-3xl bg-white flex items-center justify-center ">
          <service.icon />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-open-sans font-semibold text-[#1E1D4C] mb-4">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-[#5E6282] text-base leading-relaxed px-6">
        {service.description}
      </p>

      {/* Active underline */}
      {index === 1 && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-1.5 bg-jadoo-red rounded-t-full" />
      )}
    </div>
  ))}
</div>


      </div>
    </section>
  );
};

export default Services;
