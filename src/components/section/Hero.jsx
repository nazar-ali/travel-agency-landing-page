import { Play } from "lucide-react";
import travelImg from "../../assets/images/travel.png";
import Plan from "../../assets/plan.jsx";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            <span className="text-[#DF6951] font-bold text-lg tracking-wider uppercase">
              Best Destinations around the world
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-volkhov font-bold text-[#181E4B] leading-tight">
              Travel, enjoy
              and live a new and full life
            </h1>

            <p className="mt-8 text-[#5E6282] text-lg leading-relaxed max-w-lg">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Recent arrival off,
              hold up.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <button className="bg-[#F1A501] cursor-pointer hover:bg-primary/90 text-white px-8 py-4 text-base font-medium rounded-xl shadow-lg shadow-primary/30 transition">
                Find out more
              </button>

              <button className="flex items-center gap-4 group">
                <span className="w-14 h-14 cursor-pointer rounded-full bg-[#DF6951] shadow-lg shadow-jadoo-red/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Play className="w-5 h-5 text-white fill-white ml-1" />
                </span>
                <span className="text-[#686D77]  font-medium group-hover:text-foreground transition-colors">
                  Play Demo
                </span>
              </button>
            </div>
          </div>

          {/* Right Image */}
         <div className="relative">
  {/* Main Image */}
  <img
    src={travelImg}
    alt="Traveler with backpack"
    className="w-full max-w-lg mx-auto rounded-3xl object-cover relative z-10"
  />

  {/* Floating Elements */}
  <div className="absolute top-12 left-32 w-24 h-24 bg-jadoo-yellow rounded-2xl z-20 flex items-center justify-center">
    <Plan />
  </div>

  <div className="absolute top-20 right-10 w-24 h-24 bg-jadoo-purple rounded-xl z-20 flex items-center justify-center">
    <Plan />
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
