"use client";

import Link from "next/link";

export default function FullScreenHero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden h-96 sm:h-[500px] md:h-[600px]">
      {/* Arka plan görseli */}
          <div className="absolute inset-0 w-full h-full">
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/images/danismanlik.png')",
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
          </div>

      {/* Gradient overlay + vignette */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(180deg, rgba(9,15,24,0.65) 0%, rgba(9,15,24,0.45) 22%, rgba(9,15,24,0.45) 78%, rgba(9,15,24,0.70) 100%)',
          boxShadow: 'inset 0 0 120px rgba(0,0,0,0.35)'
        }}
      />
      
          {/* İçerik */}
          <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-center text-center h-full">
            <div className="max-w-[980px]">
          {/* Eyebrow */}
            <div className="text-[12px] font-semibold tracking-[0.14em] uppercase text-[#E5E7EB] mb-4">
              DM FİNANS
            </div>
          
          {/* Ana başlık */}
          <h1 className="text-white font-light tracking-[-0.01em] leading-[1.1] text-2xl sm:text-3xl md:text-4xl lg:text-[64px] mb-6 sm:mb-7">
            DM Finans & Danışmanlık<br className="hidden sm:block" />
            Hizmetleri Hakkında
          </h1>
          
          {/* CTA Butonları */}
          <div className="flex flex-row items-center justify-center gap-3 sm:gap-6">
            {/* Birincil buton */}
            <Link
              href="/iletisim"
              className="bg-white text-[#0A2540] px-4 sm:px-7 py-2 sm:py-3 text-xs sm:text-[14px] font-semibold tracking-[0.1em] uppercase shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:bg-[#F3F4F6] hover:shadow-[0_10px_28px_rgba(0,0,0,0.28)] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[#93C5FD] transition-all duration-200 no-underline"
              style={{ borderRadius: '6px' }}
              aria-label="İletişime Geç"
            >
              İLETİŞİM
            </Link>
            
            {/* İkincil buton */}
            <Link
              href="/hakkimizda"
              className="border border-white/35 text-white/90 px-4 sm:px-7 py-2 sm:py-3 text-xs sm:text-[14px] font-semibold tracking-[0.1em] uppercase hover:text-white hover:border-white/55 hover:bg-white/5 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-white/55 transition-all duration-200 no-underline"
              style={{ borderRadius: '6px' }}
              aria-label="Nasıl Çalışıyoruz"
            >
              NASIL ÇALIŞIYORUZ
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

