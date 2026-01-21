import { Navigation } from "lucide-react";
import image1 from "../../assets/images/image-1.png";
import image2 from "../../assets/images/image-2.jpg";
import image3 from "../../assets/images/image-3.png";  
const destinations = [
  {
    image: image1,
    name: "Rome, Italy",
    price: "$5.42k",
    duration: "10 Days Trip",
  },
  {
    image: image2,
    name: "London, UK",
    price: "$4.2k",
    duration: "12 Days Trip",
  },
  {
    image:  image3,
    name: "Full Europe",
    price: "$15k",
    duration: "28 Days Trip",
  },
];

const Destinations = () => {
  return (
    <section className="py-20" id="destinations">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[#5E6282] font-semibold text-lg uppercase tracking-wider">
            Top Selling
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-volkhov font-bold text-[#14183E]">
            Top Destinations
          </h2>
        </div>

        {/* Destinations Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.name}
              className="group bg-background rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-[#5E6282]">
                    {destination.name}
                  </h3>
                  <span className="text-lg font-semibold text-[#5E6282]">
                    {destination.price}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[#5E6282]">
                  <Navigation className="w-4 h-4 text-[#5E6282]" />
                  <span>{destination.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
