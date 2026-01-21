import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background pt-24 pb-8">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Top Footer */}
        <div className="flex">
            
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold text-foreground">
              Jadoo<span className="text-primary">.</span>
            </h2>

            <p className="mt-4 text-muted-foreground max-w-xs text-sm leading-relaxed">
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-foreground mb-5">Company</h4>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>About</li>
              <li>Careers</li>
              <li>Mobile</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-5">Contact</h4>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>Help/FAQ</li>
              <li>Press</li>
              <li>Affilates</li>
            </ul>
          </div>
              <div>     
            <h4 className="font-bold text-foreground mb-5">More</h4>
            <ul className="space-y-3 text-muted-foreground text-sm mb-6">
              <li>Airlinefees</li>
              <li>Airline</li>
              <li>Low fare tips</li>
            </ul>
           </div>
        </div>
          {/* More + Social + App */}
          <div className="flex flex-col">
        
            {/* Social Icons */}
            <div className="flex gap-4 mb-6">
              <div className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center">
                <Facebook className="text-black" size={16} />
              </div>
              <div className="w-9 h-9 rounded-full  bg-gradient-to-r from-[#FF946D] to-[#FF7D68] flex items-center justify-center text-white">
                <Instagram size={16} />
              </div>
              <div className="w-9 h-9 rounded-full bg-white  shadow flex items-center justify-center">
                <Twitter size={16} className="text-black"/>
              </div>
            </div>
            <div className="flex-col">       
            <p className="text-muted-foreground text-sm mb-3">
              Discover our app
            </p>
            {/* App */}
            <div className="flex gap-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                className="h-9"
                alt="Google Play"
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                className="h-9"
                alt="App Store"
              />
            </div>
             </div>
          </div>
</div>
        {/* Bottom */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm">
            All rights reserved@jadoo.co
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
