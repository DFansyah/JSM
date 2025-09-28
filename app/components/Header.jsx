// Ganti 'use-client' menjadi 'use client' (dengan spasi)
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 dark:bg-dark/80 backdrop-blur-sm shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Wrapper utama header */}
        <div className="flex items-center justify-between h-20">
          {/* SISI KIRI: Logo dan Judul */}
          <Link href="/" className="flex items-center gap-3 overflow-hidden">
            <div className="relative w-14 h-14 rounded-md overflow-hidden flex-shrink-0">
              <Image
                src="/icon.jpg"
                alt="Logo Jasa Sedot Mampet"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <span className="text-lg sm:text-xl font-bold text-dark dark:text-white whitespace-nowrap">
              Jasa Sedot Mampet
            </span>
          </Link>

          {/* SISI KANAN: Navigasi dan Tombol */}
          <div className="flex items-center gap-4">
            {/* Navigasi Desktop */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-primary">Beranda</a>
              <a href="#why-us" className="text-gray-600 dark:text-gray-300 hover:text-primary">Mengapa Kami</a>
              <a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-primary">Layanan</a>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="bg-primary text-white font-semibold px-5 py-2 rounded-full hover:bg-primary-dark">
                Hubungi Kami
              </a>
            </nav>
            {/* Tombol Mobile */}
            <div className="flex items-center gap-2">
              <ThemeSwitcher />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-dark dark:text-white md:hidden"
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Menu Dropdown Mobile */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
          <nav className="flex flex-col py-4 gap-4 border-t border-gray-200 dark:border-slate-800">
            <a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-primary">Beranda</a>
            <a href="#why-us" className="text-gray-600 dark:text-gray-300 hover:text-primary">Mengapa Kami</a>
            <a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-primary">Layanan</a>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="bg-primary text-white font-semibold px-5 py-2 rounded-full hover:bg-primary-dark text-center mt-2">
              Hubungi Kami
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}