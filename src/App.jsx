import Navbar from "./components/layout/Navbar.jsx";
import Hero from "./components/section/Hero.jsx";
import Services from "./components/section/Services.jsx";
import Destinations from "./components/section/Destination.jsx";
import BookingSteps from "./components/section/BookingSteps.jsx";
import Partners from "./components/section/Partner.jsx";
import Subscribe from "./components/section/Subscribe.jsx";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
    <div className="pl-[148px] pr-[148px] pt-[48px] flex justify-center bg-white">
      <div className="">
      <Navbar />
      <Hero />
      <Services />
      <Destinations />
      <BookingSteps />
      <Partners />
      <Subscribe />
      <Footer />
      </div>
      </div>
    </>
  );
}

export default App;
