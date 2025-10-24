'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Testimonials() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Générer le tableau des images (54 photos)
  const images = Array.from({ length: 54 }, (_, i) => `/assets/testimonials/photo${i + 1}.jpg`);
  
  const imagesPerSlide = 6;
  const totalSlides = Math.ceil(images.length / imagesPerSlide);

  // Navigation du carousel
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Navigation du modal
  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  // Fermer le modal avec la touche Échap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedImage((prev) => prev !== null ? (prev + 1) % images.length : null);
      } else if (e.key === 'ArrowLeft') {
        setSelectedImage((prev) => prev !== null ? (prev - 1 + images.length) % images.length : null);
      }
    };

    if (selectedImage !== null) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage, images.length]);

  // Auto-play du carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const getCurrentImages = () => {
    const start = currentSlide * imagesPerSlide;
    return images.slice(start, start + imagesPerSlide);
  };

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-red-200 to-gray-50 dark:from-gray-900 dark:via-blue-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInDown">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Résultats de Nos Étudiants
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
            Découvrez les succès de notre communauté
          </p>
          <div className="w-24 h-1 bg-[#005CD9] mx-auto"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Images Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {getCurrentImages().map((image, index) => {
              const actualIndex = currentSlide * imagesPerSlide + index;
              return (
                <div
                  key={actualIndex}
                  className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedImage(actualIndex)}
                >
                  <div className="aspect-square relative">
                    <Image
                      src={image}
                      alt={`Résultat étudiant ${actualIndex + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                  </svg>
                    </div>
                  </div>
                </div>
              );
            })}
              </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
            aria-label="Image précédente"
          >
            <svg className="w-6 h-6 text-[#005CD9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
            aria-label="Image suivante"
          >
            <svg className="w-6 h-6 text-[#005CD9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-8 bg-[#005CD9]' 
                    : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Aller à la diapositive ${index + 1}`}
              />
            ))}
                </div>
              </div>

        {/* Modal Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-95 z-999 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
              aria-label="Fermer"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 p-4 rounded-full transition-all z-50"
              aria-label="Image précédente"
            >
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            {/* Image */}
            <div
              className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedImage]}
                alt={`Résultat étudiant ${selectedImage + 1}`}
                width={1200}
                height={1200}
                className="object-contain w-full h-full rounded-lg"
              />
              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white bg-opacity-50 text-white px-4 py-2 rounded-full">
                {selectedImage + 1} / {images.length}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 p-4 rounded-full transition-all z-50"
              aria-label="Image suivante"
            >
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
        </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fadeInUp animate-delay-500">
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">
            Rejoignez nos étudiants et atteignez vos objectifs de trading !
          </p>
          <a 
            href="#contact"
            className="inline-block bg-[#005CD9] hover:bg-[#0047a3] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Commencer Maintenant
          </a>
        </div>
      </div>
    </section>
  );
}

