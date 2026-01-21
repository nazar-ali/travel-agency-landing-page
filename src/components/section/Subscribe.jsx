import { Send } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="subscription">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative bg-[#DFD7F9]  rounded-3xl 
  rounded-tl-[120px] 
  p-8 md:p-12 lg:p-16 overflow-hidden">
          {/* Decorative Circles */}
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-jadoo-purple/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-jadoo-purple/30 rounded-full blur-3xl" />
          <div className="absolute top-10 right-20 w-8 h-8 bg-jadoo-purple rounded-full opacity-50" />
          <div className="absolute bottom-20 left-32 w-4 h-4 bg-primary rounded-full opacity-70" />

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold text-[#5E6282] leading-tight">
              Subscribe to get information, latest news and other interesting
              offers about Jadoo
            </h2>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full h-14 pl-12 pr-4 rounded-xl bg-white border-0 shadow-md text-foreground placeholder:text-muted-foreground"
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                  ✉
                </span>
              </div>
              <button className="h-14 px-8 bg-gradient-to-r from-[#FF946D] to-[#FF7D68] hover:opacity-90 text-white rounded-xl font-sm shadow-lg">
                Subscribe
              </button>
            </div>
          </div>

        
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
