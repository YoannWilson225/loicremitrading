'use client';

import { useState, useEffect, useRef } from 'react';

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    {
      number: 1000,
      suffix: "+",
      label: "Étudiants Formés"
    },
    {
      number: 95,
      suffix: "%",
      label: "Taux de Réussite"
    },
    {
      number: 5,
      suffix: "+",
      label: "Années d'Expérience"
    },
    {
      number: 24,
      suffix: "/7",
      label: "Support Disponible"
    }
  ];

  // Animation de comptage
  const animateCount = (target: number, index: number, duration: number) => {
    const start = performance.now();
    const startValue = 0;
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      
      // Fonction d'easing pour un effet plus naturel
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuart);
      
      setCounts(prev => {
        const newCounts = [...prev];
        newCounts[index] = currentValue;
        return newCounts;
      });
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  };

  // Observer pour détecter quand la section est visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Démarrer les animations avec un délai échelonné
          stats.forEach((stat, index) => {
            setTimeout(() => {
              animateCount(stat.number, index, 2000);
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-2">
                {counts[index]}
                <span className="text-3xl md:text-4xl">{stat.suffix}</span>
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

