import { useState } from "react";
import Logo from "../../assets/logo.jsx";

const NAV_ITEMS = [
  { label: "Destinations", id: "destinations" },
  { label: "Hotels", id: "hotels" },
  { label: "Flights", id: "flights" },
  { label: "Bookings", id: "bookings" },
];


export default function Navbar() {
  const [open, setOpen] = useState(false);
const handleScroll = (id) => {
  const section = document.getElementById(id);
  section?.scrollIntoView({ behavior: "smooth" });
  setOpen(false); // close mobile menu
};

  return (
    <header className="w-full">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6">

        {/* Logo */}
        <div className="w-[115px] h-[34px] flex items-center">
          <Logo width={115} height={34} className="text-black" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-[15px] text-[#212832] font-medium">
          {NAV_ITEMS.map((item) => (
           <li
  key={item.id}
  onClick={() => handleScroll(item.id)}
  className="cursor-pointer hover:text-black"
>
  {item.label}
</li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6 text-[15px] text-[#212832] font-medium">
          <NavActions />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-6">
          <ul className="flex flex-col gap-4 text-[#212832] font-medium">
            {NAV_ITEMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-4">
            <NavActions mobile />
          </div>
        </div>
      )}
    </header>
  );
}

/* Reusable Actions Component */
function NavActions({ mobile }) {
  return (
    <>
      <button className={mobile ? "text-left" : "hover:text-black"}>
        Login
      </button>

      <button className="border border-[#212832] px-5 py-1.5 rounded-md hover:bg-[#212832] hover:text-white transition">
        Sign up
      </button>

      <button className="flex items-center gap-1 hover:text-black">
        EN <span className="text-xs">▼</span>
      </button>
    </>
  );
}
