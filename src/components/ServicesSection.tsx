import { TrendingUp, Shield, Users, BarChart3, Target, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: TrendingUp,
    number: "01",
    title: "Strategic Advisory",
    description: "Navigate complex business challenges with expert guidance and proven strategies.",
  },
  {
    icon: BarChart3,
    number: "02",
    title: "Financial Consulting",
    description: "Optimize your financial performance and achieve sustainable profitability.",
  },
  {
    icon: Shield,
    number: "03",
    title: "Risk Management",
    description: "Identify and mitigate risks to protect your business assets and reputation.",
  },
  {
    icon: Users,
    number: "04",
    title: "Human Capital",
    description: "Build high-performing teams and develop leadership capabilities.",
  },
  {
    icon: Target,
    number: "05",
    title: "Market Analysis",
    description: "Gain competitive insights and identify growth opportunities in your market.",
  },
  {
    icon: Briefcase,
    number: "06",
    title: "M&A Advisory",
    description: "Expert guidance through mergers, acquisitions, and strategic partnerships.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-section-light">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle">What We Do</p>
          <h2 className="section-title text-foreground">Services We Provide</h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.number}
              className="group relative p-8 bg-card hover:bg-hero-bg transition-all duration-500 border-0 shadow-sm hover:shadow-xl cursor-pointer overflow-hidden"
            >
              {/* Number Background */}
              <span className="absolute top-4 right-4 text-8xl font-serif font-bold text-muted/30 group-hover:text-white/10 transition-colors">
                {service.number}
              </span>

              {/* Content */}
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-sm bg-primary/10 group-hover:bg-primary flex items-center justify-center mb-6 transition-all duration-500">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-xl font-serif font-semibold mb-3 text-foreground group-hover:text-text-light transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground group-hover:text-text-muted-light transition-colors mb-4">
                  {service.description}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                >
                  Learn More
                  <span className="text-lg">→</span>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
