"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function WhiteLogo() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Sadece anasayfa, hakkımızda ve iletişim sayfalarında göster
  const shouldShow = pathname === "/" || pathname === "/hakkimizda" || pathname === "/iletisim";

  useEffect(() => {
    if (!shouldShow) {
      setIsVisible(false);
      return;
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    // İlk yüklemede scroll pozisyonunu kontrol et
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [shouldShow]);

  // Header görünürken beyaz logo gizli, header gizliyken beyaz logo görünür
  useEffect(() => {
    if (shouldShow) {
      setIsVisible(!isScrolled);
    }
  }, [isScrolled, shouldShow]);

  if (!shouldShow || !isVisible) {
    return null;
  }

  return (
    <div className="fixed top-2 left-0 right-0 z-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between" style={{ height: '65px' }}>
          <Link href="/" className="flex items-center no-underline group">
            <img 
              src="/images/dm-beyaz.png" 
              alt="DM Finans" 
              className="h-12 w-auto"
              style={{ maxHeight: '55px' }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
