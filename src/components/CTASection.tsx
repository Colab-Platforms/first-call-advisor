import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="why-us" className="py-24 bg-accent-red relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/80 text-sm uppercase tracking-[0.3em] font-medium mb-4">
            Ready To Transform Your Business?
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Let's Build Your Success Story Together
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Schedule a free consultation with our expert advisors and discover how we can help 
            you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-accent-red hover:bg-white/90 px-8 py-6 font-semibold text-sm uppercase tracking-wider rounded-sm transition-all">
              Schedule Consultation
            </Button>
            <Button 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white hover:text-accent-red px-8 py-6 font-semibold text-sm uppercase tracking-wider rounded-sm transition-all bg-transparent"
            >
              View Our Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
