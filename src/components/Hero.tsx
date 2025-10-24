'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const texts = [
      'cercle des élites',
      'traders qui réussissent',
      '1% des meilleurs',
      'élite du trading'
    ];

    const timeout = setTimeout(() => {
      const current = texts[textIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, textIndex]);

  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#A49C91]/20 dark:bg-gray-900">
      {/* Background avec la nouvelle couleur */}
      <div className="absolute inset-0 bg-[#A49C91]/15 dark:bg-[#A49C91]/5"></div>
      
      {/* Effet de grille subtile */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,92,217,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,92,217,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fadeInLeft">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-gray-900 dark:text-white">Rejoignez les </span>
              <span className="text-[#005CD9] dark:text-blue-400">1%</span>
              <br />
              <span className="text-gray-900 dark:text-white">qui réussissent en trading</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Apprenez le trading avec une méthode simple et professionnelle. Plus de 1000 traders formés avec succès.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#formations" 
                className="bg-[#005CD9] hover:bg-[#0047a3] text-white px-8 py-4 rounded-full text-center font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Découvrir nos formations
              </a>
              <a 
                href="#about" 
                className="border-2 border-[#005CD9] text-[#005CD9] dark:text-blue-400 dark:border-blue-400 hover:bg-[#005CD9] hover:text-white dark:hover:bg-blue-500 px-8 py-4 rounded-full text-center font-semibold transition-all"
              >
                En savoir plus
              </a>
            </div>

            <div className="flex gap-8 pt-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md card-hover animate-fadeInUp animate-delay-200">
                <div className="text-4xl font-bold text-[#005CD9] dark:text-blue-400">+1000</div>
                <div className="text-gray-600 dark:text-gray-400">Étudiants formés</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md card-hover animate-fadeInUp animate-delay-300">
                <div className="text-4xl font-bold text-[#005CD9] dark:text-blue-400">5+</div>
                <div className="text-gray-600 dark:text-gray-400">Années d&apos;expérience</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fadeInRight">
            <div className="relative z-10 animate-float">
              <Image
                src="/assets/loicremy.JPG"
                alt="Loïc Rémy Yao"
                width={600}
                height={600}
                className="rounded-3xl shadow-2xl"
              />
            </div>
            {/* Effets de halo autour de l'image */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-[#005CD9]/20 dark:bg-[#005CD9]/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-[#A49C91]/30 dark:bg-[#A49C91]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}