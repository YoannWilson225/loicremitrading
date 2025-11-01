'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center 
      bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#EF4444] 
      text-white"
    >
      <div className="flex flex-col items-center space-y-6">
        <div className="animate-spin-slow">
          <Image
            src="/assets/logowhite.JPG"
            alt="Loïc Rémy Trading"
            width={100}
            height={100}
            className="rounded-full border-4 border-white shadow-2xl"
          />
        </div>
        <p className="text-lg font-semibold tracking-wide animate-pulse">
          Chargement en cours...
        </p>
      </div>
    </div>
  );
}
