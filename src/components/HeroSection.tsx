import { useState } from "react";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-consulting.jpg";

const heroTabs = [
  { number: "01 ", title: " Strategic Advisory" },
  { number: "02 ", title: " Financial Planning" },
  { number: "03 ", title: " Risk Assessment" },
  { number: "04 ", title: " Growth Strategy" },
];

const heroSlides = [
  {
    subtitle: "Your First Call For",
    title: "Strategic Business Solutions",
    description: "We help organizations navigate complex challenges and achieve sustainable growth through expert advisory services.",
    img:"https://images.pexels.com/photos/6285113/pexels-photo-6285113.jpeg",
  },
  {
    subtitle: "Expert Guidance In",
    title: "Financial Excellence",
    description: "Transform your financial strategy with our proven methodologies and industry-leading expertise.",
    img:"https://images.pexels.com/photos/8761561/pexels-photo-8761561.jpeg"
  },
  {
    subtitle: "Comprehensive",
    title: "Risk Management",
    description: "Identify, assess, and mitigate risks to protect your business and ensure long-term stability.",
    img:"https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg"
  },
  {
    subtitle: "Accelerating Your",
    title: "Business Growth",
    description: "Unlock new opportunities and scale your business with our strategic growth consulting services.",
    img:heroImage
  },
];

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="home" className="hero-section">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroSlides[activeTab].img ? heroSlides[activeTab].img : heroImage}
          alt="Business consulting team"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 md:px-6 lg:px-8 pt-8 md:pt-16 pb-6 md:pb-8 min-h-[calc(100vh-200px)] md:min-h-[calc(100vh-180px)] flex flex-col justify-center">
        <div className="max-w-3xl -ml-1 md:-ml-2">
          <p className="text-accent-primary text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] font-medium mb-3 md:mb-4 animate-fade-in">
            {heroSlides[activeTab].subtitle}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-text-light leading-tight mb-4 md:mb-6 animate-slide-up">
            {heroSlides[activeTab].title}
          </h1>
          <p className="text-text-muted-light text-base md:text-lg lg:text-xl mb-6 md:mb-10 max-w-xl animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {heroSlides[activeTab].description}
          </p>
          <a
            href="#about"
            className="inline-flex items-center gap-2 md:gap-3 text-text-light font-medium hover:text-accent-primary transition-colors group animate-slide-up text-sm md:text-base"
            style={{ animationDelay: "0.4s" }}
          >
            <span>Learn More About Us</span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>

      {/* Hero Tabs */}
      <div className="relative z-20 container mx-auto px-4 md:px-6 lg:px-8 pb-6 md:pb-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-0">
          {heroTabs.map((tab, index) => (
            <button
              key={tab.number}
              className={`hero-tab ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              <span className="hero-tab-number text-xs">{tab.number}</span>
              <span className={`hero-tab-title text-xs sm:text-sm ${activeTab === index ? "text-text-light" : "text-text-muted-light"}`}>
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
