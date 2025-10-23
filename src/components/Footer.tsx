'use client';

import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'} text-${theme === 'dark' ? 'white' : 'gray-900'} py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-white dark:bg-gray-800 p-3 shadow-lg border-2 border-[#005CD9] mb-4">
            <Image
                src={theme === 'dark' ? '/assets/logoblack.JPG' : '/assets/logowhite.JPG'}
              alt="Loïc Rémy Trading"
                width={80}
              height={80}
                className="w-full h-full object-contain"
            />
            </div>
            <p className={`text-${theme === 'dark' ? 'gray-400' : 'gray-600'} mb-4`}>
              Faites partie des 1%, rejoignez le cercle des élites. 
              Plus de 1000 traders formés avec succès.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/17MoY6fJV3/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className={`text-${theme === 'dark' ? 'gray-400' : 'gray-600'} hover:text-${theme === 'dark' ? 'white' : 'gray-900'} transition-colors`} aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/loic_remy_yao?igsh=a2NsZmFkam4xMmhq&utm_source=qr" target="_blank" rel="noopener noreferrer" className={`text-${theme === 'dark' ? 'gray-400' : 'gray-600'} hover:text-${theme === 'dark' ? 'white' : 'gray-900'} transition-colors`} aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://t.me/loicremy06" target="_blank" rel="noopener noreferrer" className={`text-${theme === 'dark' ? 'gray-400' : 'gray-600'} hover:text-${theme === 'dark' ? 'white' : 'gray-900'} transition-colors`} aria-label="Telegram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
              <a href="www.tiktok.com/@loicremy06" target="_blank" rel="noopener noreferrer" className={`text-${theme === 'dark' ? 'gray-400' : 'gray-600'} hover:text-${theme === 'dark' ? 'white' : 'gray-900'} transition-colors`} aria-label="TikTok">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
              <a href="https://snapchat.com/t/0h7yiTAW" target="_blank" rel="noopener noreferrer" className={`text-${theme === 'dark' ? 'gray-400' : 'gray-600'} hover:text-${theme === 'dark' ? 'white' : 'gray-900'} transition-colors`} aria-label="Snapchat">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.421.074-.539.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.14-.052-.211 0-.251.192-.469.435-.509 3.266-.539 4.732-3.879 4.792-4.029l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className={`font-bold text-lg mb-4 text-${theme === 'dark' ? 'white' : 'gray-900'}`}>Liens rapides</h4>
            <ul className={`space-y-2 text-${theme === 'dark' ? 'gray-400' : 'gray-600'}`}>
              <li><a href="#about" className={`hover:text-${theme === 'dark' ? 'white' : 'gray-900'} transition-colors`}>À propos</a></li>
              <li><a href="#formations" className={`hover:text-${theme === 'dark' ? 'white' : 'gray-900'} transition-colors`}>Formations</a></li>
              <li><a href="#contact" className={`hover:text-${theme === 'dark' ? 'white' : 'gray-900'} transition-colors`}>Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className={`font-bold text-lg mb-4 text-${theme === 'dark' ? 'white' : 'gray-900'}`}>Contact</h4>
            <ul className={`space-y-2 text-${theme === 'dark' ? 'gray-400' : 'gray-600'}`}>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                contact@loicremytrading.com
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +225 XX XX XX XX XX
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                9:00 – 20:00 GMT
              </li>
            </ul>
          </div>
        </div>

        <div className={`border-t ${theme === 'dark' ? 'border-gray-800' : 'border-gray-300'} pt-8 text-center text-${theme === 'dark' ? 'gray-400' : 'gray-600'}`}>
          <p>© {new Date().getFullYear()} Loïc Rémy Trading. Tous droits réservés.</p>
          <p className="text-sm mt-2">
            Développé avec passion pour la communauté des traders
          </p>
        </div>
      </div>
    </footer>
  );
}

