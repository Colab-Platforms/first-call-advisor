import { useState } from "react";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-consulting.jpg";

const heroTabs = [
  { number: "01", title: "Strategic Advisory" },
  { number: "02", title: "Financial Planning" },
  { number: "03", title: "Risk Assessment" },
  { number: "04", title: "Growth Strategy" },
];

const heroSlides = [
  {
    subtitle: "Your First Call For",
    title: "Strategic Business Solutions",
    description: "We help organizations navigate complex challenges and achieve sustainable growth through expert advisory services.",
  },
  {
    subtitle: "Expert Guidance In",
    title: "Financial Excellence",
    description: "Transform your financial strategy with our proven methodologies and industry-leading expertise.",
  },
  {
    subtitle: "Comprehensive",
    title: "Risk Management",
    description: "Identify, assess, and mitigate risks to protect your business and ensure long-term stability.",
  },
  {
    subtitle: "Accelerating Your",
    title: "Business Growth",
    description: "Unlock new opportunities and scale your business with our strategic growth consulting services.",
  },
];

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="home" className="hero-section">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Business consulting team"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 pt-20 pb-8 min-h-[calc(100vh-180px)] flex flex-col justify-center">
        <div className="max-w-3xl">
          <p className="text-accent-red text-sm uppercase tracking-[0.3em] font-medium mb-4 animate-fade-in">
            {heroSlides[activeTab].subtitle}
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-text-light leading-tight mb-6 animate-slide-up">
            {heroSlides[activeTab].title}
          </h1>
          <p className="text-text-muted-light text-lg md:text-xl mb-10 max-w-xl animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {heroSlides[activeTab].description}
          </p>
          <a
            href="#about"
            className="inline-flex items-center gap-3 text-text-light font-medium hover:text-accent-red transition-colors group animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <span>Learn More About Us</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>

      {/* Hero Tabs */}
      <div className="relative z-20 container mx-auto px-6 pb-8">
        <div className="flex flex-col sm:flex-row">
          {heroTabs.map((tab, index) => (
            <button
              key={tab.number}
              className={`hero-tab ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              <span className="hero-tab-number">{tab.number}</span>
              <span className={`hero-tab-title ${activeTab === index ? "text-text-light" : "text-text-muted-light"}`}>
                {tab.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
