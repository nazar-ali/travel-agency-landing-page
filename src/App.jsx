import Navbar from "./components/layout/Navbar.jsx";
import Hero from "./components/section/Hero.jsx";
import Services from "./components/section/Services.jsx";
import Destinations from "./components/section/Destination.jsx";
// import BookingSteps from "./components/BookingSteps";
// import Partners from "./components/Partners";
// import Subscribe from "./components/Subscribe";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
    <div className="w-full min-h-screen flex justify-center bg-white">
      {/* Page Container */}
      <div className="w-full max-w-[1440px]">
      <Navbar />
      <Hero />
      <Services />
      <Destinations />
      {/* <BookingSteps /> */}
      {/* <Partners /> */}
      {/* <Subscribe /> */}
      <Footer />
      </div>
      </div>
    </>
  );
}

export default App;
