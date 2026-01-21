import {
  MapPin,
  CreditCard,
  Plane,
  Heart,
  Calendar,
  Users,
} from "lucide-react";
import imageTrip from "../../assets/images/sc.jpg";
import chooseDestination from "../../assets/chooseDestination.jsx";
import makePayment from "../../assets/paymentIcon.jsx";
import reachAirport from "../../assets/airportIcon.jsx";
import Building from "../../assets/building.jsx";
import Leaf from "../../assets/leaf.jsx";
import SendIcon from "../../assets/sendIcon.jsx";
import tripRemo from "../../assets/images/image-4.png";
import Map from "../../assets/mapIcon.jsx";
const steps = [
  {
    icon: chooseDestination,
    title: "Choose Destination",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    color: "bg-jadoo-yellow",
    iconColor: "text-primary-foreground",
  },
  {
    icon: makePayment,
    title: "Make Payment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    color: "bg-jadoo-red",
    iconColor: "text-primary-foreground",
  },
  {
    icon: reachAirport,
    title: "Reach Airport on Selected Date",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    color: "bg-jadoo-purple",
    iconColor: "text-primary-foreground",
  },
];

const BookingSteps = () => {
  return (
    <section className="py-20 font-poppins " id="bookings">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Steps */}
          <div>
            <span className="text-[#5E6282] font-semibold text-lg uppercase tracking-wider">
              Easy and Fast
            </span>
            <h2 className="mt-2 text-3xl max-w-[370px] md:text-4xl font-volkhov font-bold text-foreground leading-tight">
              Book Your Next Trip In 3 Easy Steps
            </h2>

            <div className="mt-10 space-y-8">
              {steps.map((step) => (
                <div key={step.title} className="flex   gap-6">
                  <div
                    className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                  >
                    <step.icon className={`w-6 h-6 ${step.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#5E6282] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-[#5E6282]">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Trip Card Preview */}
          <div className="relative">
            {/* Main Card */}
            <div className="bg-background rounded-3xl shadow-2xl p-6 max-w-sm mx-auto">
              <img
                src={imageTrip}
                alt="Trip to Greece"
                className="w-full h-48 object-cover rounded-2xl mb-6"
              />
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Trip To Greece
              </h3>
              <div className="flex items-center  text-muted-foreground text-sm mb-4">
                <span className="text-[#84829A] ">14-29 June</span>
                <span className="mx-2 text-[#84829A]">|</span>
                <span className="text-[#84829A]">by Robbin joseph</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Leaf className="w-4 h-4" />
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Map className="w-4 h-4" />
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <SendIcon className="w-4 h-4" />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground text-sm">
                    24 people going
                  </span>
                </div>
                <Heart className="w-5 h-5 text-[#4152CA] cursor-pointer hover:scale-110 transition-transform" />
              </div>
            </div>

            {/* Floating Mini Card */}
            <div className="absolute w-60 bottom-12 -right-6 lg:right-0 bg-white rounded-2xl shadow-xl p-2 flex items-center gap-4">
              <div className=" bg-white rounded-full flex items-center justify-center p-1.5 ">
                <img
                  src={tripRemo}
                  alt="Trip to Rome"
                  className="w-12 h-12 rounded-full -mt-12"
                />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Ongoing</p>
                <p className="text-[#080809] font-semibold">Trip to Rome</p>

                <p className="mt-1 text-sm">
                  <span className="text-[#8A79DF] font-semibold">40%</span>
                  <span className="text-[#080809] font-semibold ml-1">
                    completed
                  </span>
                </p>
                <div className="mt-2 w-full bg-[#F5F5F5] rounded-full h-1.5">
                  <div className="bg-[#8A79DF] h-1.5 rounded-full w-2/5" />
                </div>

                {/* Progress bar */}
                <div className="mt-2 w-full h-1 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-2/5 bg-blue rounded-full" />
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 right-10 w-16 h-16 bg-jadoo-yellow/30 rounded-full blur-xl" />
            <div className="absolute bottom-20 -left-8 w-20 h-20 bg-jadoo-purple/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSteps;
