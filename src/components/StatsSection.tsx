import { useEffect, useState, useRef } from "react";

const stats = [
  { number: 500, suffix: "+", label: "All Time Clients" },
  { number: 120, suffix: "", label: "Clients This Year" },
  { number: 350, suffix: "+", label: "Projects Completed" },
  { number: 98, suffix: "%", label: "Success Rate" },
];

const useCountUp = (end: number, duration: number = 2000, shouldStart: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, shouldStart]);

  return count;
};

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-hero-bg relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 border border-white rounded-full" />
        <div className="absolute bottom-0 right-0 w-64 h-64 border border-white rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              stat={stat}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatItem = ({
  stat,
  index,
  isVisible,
}: {
  stat: { number: number; suffix: string; label: string };
  index: number;
  isVisible: boolean;
}) => {
  const count = useCountUp(stat.number, 2000 + index * 200, isVisible);

  return (
    <div className="text-center">
      <div className="flex items-baseline justify-center gap-1">
        <span className="text-xs text-accent-red font-semibold mr-2">
          0{index + 1}
        </span>
        <span className="stat-number">
          {count}
          {stat.suffix}
        </span>
      </div>
      <p className="text-text-muted-light mt-2 font-medium">{stat.label}</p>
    </div>
  );
};

export default StatsSection;
