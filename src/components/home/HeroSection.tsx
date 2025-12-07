"use client";
import CTAButton from "@/components/ui/CTAButton";
import Link from "next/link";
import { useState } from "react";

const slides = [
  {
    id: 1,
    title: "Emeklilere Özel Kredi Danışmanlığı",
    eyebrow: "DM FİNANS",
    backgroundImage: "/images/hero-gorsel.png",
    backgroundPosition: "center 30%"
  },
  {
    id: 2,
    title: "Ön Ödemesiz Borç Kapatma Hizmeti",
    eyebrow: "FİNANSAL ANALİZ HİZMETİ",
    backgroundImage: "/images/hero-gorsel-2.png",
    backgroundPosition: "center center"
  }
];

export default function HeroSection(){
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section 
      className="relative min-h-screen flex items-center transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url('${slides[currentSlide].backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: slides[currentSlide].backgroundPosition,
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* İçerik */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-16 w-full">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Sol taraf - Metin içeriği */}
            <div className="text-center lg:text-left">
              {/* Eyebrow */}
              <div className="text-[12px] font-semibold tracking-[0.14em] uppercase text-white/75 mb-4 transition-all duration-500">
                {slides[currentSlide].eyebrow}
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white transition-all duration-500">
                {slides[currentSlide].title}
              </h1>
              
              <div className="mt-6 sm:mt-8 flex flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <Link
                  href="/iletisim"
                  className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-lg transition-all duration-200 hover:bg-gray-50 no-underline"
                  style={{
                    backgroundColor: 'white',
                    color: '#1e3453',
                    borderRadius: '6px'
                  }}
                >
                  İLETİŞİM
                </Link>
              </div>
            </div>
            
            {/* Sağ taraf - Navigasyon */}
            <div className="relative hidden lg:block">
                  {/* Dikey Navigasyon */}
                  <div className="absolute bottom-0 right-0 transform translate-y-96 translate-x-8">
                    <div className="rounded-lg shadow-lg overflow-hidden" style={{ backgroundColor: '#dbeaff' }}>
                  {/* Üst Ok */}
                  <button
                    onClick={nextSlide}
                    className="w-12 h-12 flex items-center justify-center hover:bg-gray-50 transition-colors border-b border-gray-200 cursor-pointer"
                  >
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  {/* Alt Ok */}
                  <button
                    onClick={prevSlide}
                    className="w-12 h-12 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          <div className="lg:hidden flex justify-center mt-8">
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 flex items-center justify-center rounded-lg transition-colors cursor-pointer"
                style={{ backgroundColor: '#dbeaff' }}
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 flex items-center justify-center rounded-lg transition-colors cursor-pointer"
                style={{ backgroundColor: '#dbeaff' }}
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


