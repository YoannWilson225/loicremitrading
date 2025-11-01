'use client';

import { useState, useEffect, useRef } from 'react';

type Stat = { number: number; suffix: string; label: string };

// Icônes (SVG inline, pas de dépendance)
const IconUsers = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconBadge = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M7 21l5-5 5 5V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2z" />
  </svg>
);

const IconClock = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 3" />
  </svg>
);

const IconHeadset = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M4 12a8 8 0 0 1 16 0v6a3 3 0 0 1-3 3h-2" />
    <path d="M4 18v-6" />
    <rect x="2" y="12" width="4" height="6" rx="1" />
    <rect x="18" y="12" width="4" height="6" rx="1" />
    <path d="M9 21h3" />
  </svg>
);

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLElement | null>(null);

  const stats: Stat[] = [
    { number: 500, suffix: "+",  label: "Étudiants formés" },
    { number: 95,  suffix: "%",  label: "Taux de réussite" },
    { number: 5,   suffix: "+",  label: "Années d’expérience" },
    { number: 24,  suffix: "/7", label: "Support disponible" },
  ];

  // Associe une icône à chaque item (même ordre)
  const icons = [IconUsers, IconBadge, IconClock, IconHeadset];

  // Animation de comptage
  const animateCount = (target: number, index: number, duration: number) => {
    const start = performance.now();
    const startValue = 0;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuart);

      setCounts(prev => {
        const next = [...prev];
        next[index] = currentValue;
        return next;
      });

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  // Observer pour déclencher l’animation au scroll
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Démarrer les animations avec un léger décalage entre cartes
          stats.forEach((stat, index) => {
            setTimeout(() => animateCount(stat.number, index, 2000), index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isVisible, stats]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden py-16 md:py-20"
    >
      {/* Fond dégradé comme sur la maquette */}
      {/* <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#10192a] via-[#10192a] to-[#10192a]" /> */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0f4cd0] via-[#001a45] to-[#db0000]/100
         dark:from-[#0c1320] dark:via-[#0c1320] dark:to-[#580016]
          motion-safe:transition-[background-image] duration-500"
      />



      {/* <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#001a45]/100 via-[#001a45]/100 to-[#fb0202d3]" /> */}
      {/* Grille légère pour donner du relief */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-20
        [background-image:linear-gradient(to_right,rgba(255,255,255,.08)_1px,transparent_1px),
                           linear-gradient(to_bottom,rgba(255,255,255,.08)_1px,transparent_1px)]
        [background-size:24px_24px]"
      />

      <div className="mx-auto max-w-6xl px-4 text-center text-white">
        {/* Titre / sous-titre (facultatif) */}
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          LOÏC RÉMY TRADING <span className="font-semibold">en chiffres</span>
        </h2>
        <p className="mt-2 text-sm md:text-base text-white/80">
          Une communauté grandissante de traders qui réussissent
        </p>

        {/* Cartes de stats */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="rounded-2xl border border-white/15 bg-white/10 p-6
                           backdrop-blur-md text-center
                           shadow-[0_1px_0_0_rgba(255,255,255,0.15),0_12px_30px_-12px_rgba(0,0,0,0.5)]
                           transition hover:bg-white/15"
              >
                {/* Badge icône */}
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center
                                rounded-2xl border border-white/30 bg-white/10 text-white shadow-sm
                                backdrop-blur">
                  <Icon />
                </div>

                <div className="text-4xl md:text-5xl font-extrabold leading-none">
                  {counts[index]}
                  <span className="align-baseline text-3xl md:text-4xl">{stat.suffix}</span>
                </div>
                <div className="mt-2 text-sm md:text-base text-white/85">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lueur douce en bas */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-1/2 h-48 w-[80%]
                   -translate-x-1/2 rounded-[999px] bg-white/20 blur-3xl"
      />
    </section>
  );
}
