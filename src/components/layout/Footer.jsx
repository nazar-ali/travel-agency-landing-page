import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const companyLinks = [
    { name: "About", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Mobile", href: "#" },
  ];

  const contactLinks = [
    { name: "Help/FAQ", href: "#" },
    { name: "Press", href: "#" },
    { name: "Affiliates", href: "#" },
  ];

  const moreLinks = [
    { name: "Airlinefees", href: "#" },
    { name: "Airline", href: "#" },
    { name: "Low fare tips", href: "#" },
  ];

  return (
    <footer className="bg-background pt-20 pb-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Logo & Social */}
          <div className="lg:col-span-2">
            <a href="/" className="text-3xl font-bold text-foreground">
              Jadoo<span className="text-primary">.</span>
            </a>

            <p className="mt-4 text-muted-foreground max-w-xs">
              Book your trip in minute, get full Control for much longer.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background shadow-md flex items-center justify-center hover:shadow-lg transition-shadow group"
              >
                <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-jadoo-pink flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <Instagram className="w-5 h-5 text-background" />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background shadow-md flex items-center justify-center hover:shadow-lg transition-shadow group"
              >
                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-foreground font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              {contactLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div>
            <h4 className="text-foreground font-bold text-lg mb-4">More</h4>
            <ul className="space-y-3">
              {moreLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* App Downloads */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-muted-foreground text-sm">Discover our app</p>

          <div className="flex gap-3">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-10"
              />
            </a>

            <a href="#" className="hover:opacity-80 transition-opacity">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on App Store"
                className="h-10"
              />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            All rights reserved @ jadoo.co
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
