import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Premium services exceeding expectations",
  "Expert team with 25+ years of experience",
  "Tailored solutions for your business needs",
  "Transparent communication and reporting",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="section-subtitle">Complete Honesty & Transparency</p>
            <h2 className="section-title text-foreground mb-6">
              Our Vision and Values
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At First Call Advisory, we believe in building lasting partnerships through trust, 
              expertise, and unwavering commitment to our clients' success. Our team of seasoned 
              professionals brings decades of experience across diverse industries.
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button className="btn-primary">Learn More About Us</Button>
          </div>

          {/* Stats Card */}
          <div className="relative">
            <div className="bg-hero-bg rounded-sm p-10 relative overflow-hidden">
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-bl-full" />
              
              <div className="relative z-10">
                <p className="text-text-muted-light text-sm uppercase tracking-wider mb-2">
                  Big Name Customers
                </p>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-text-light mb-6">
                  Serving 50% Of Global 2000 Companies
                </h3>
                <p className="text-text-muted-light leading-relaxed mb-8">
                  More than 25 years of experience working in the industry has enabled us 
                  to build our services and solutions in strategy, consulting, and digital 
                  transformation.
                </p>
                <a href="#" className="text-accent-primary font-medium inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <span>→</span>
                </a>
              </div>
            </div>

            {/* Floating accent */}
            {/* <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary rounded-sm hidden lg:block" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
