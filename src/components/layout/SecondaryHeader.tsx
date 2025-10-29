"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "ANASAYFA" },
  { href: "/hakkimizda", label: "HAKKIMIZDA" },
  { href: "/hizmetlerimiz", label: "HİZMETLERİMİZ" },
  { href: "/iletisim", label: "İLETİŞİM" }
];

export default function SecondaryHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Anasayfa ise bu header'ı gösterme
  if (pathname === "/") {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between" style={{ height: '65px' }}>
          {/* Logo */}
          <Link href="/" className="flex items-center no-underline group">
            <img 
              src="/images/dm-lacivert.png" 
              alt="DM Finans" 
              className="h-12 w-auto"
              style={{ maxHeight: '55px' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {nav.map(i => {
              const isActive = pathname === i.href;
              return (
                <Link 
                  key={i.href} 
                  href={i.href} 
                  className={`font-medium transition-colors duration-200 no-underline px-3 py-2 rounded-md ${
                    isActive 
                      ? 'text-primary-600 bg-primary-50' 
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                  style={{ fontSize: '15px' }}
                >
                  {i.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/iletisim"
              className="no-underline px-6 py-3 text-sm font-semibold"
              style={{
                backgroundColor: '#dbeaff',
                color: '#2563eb',
                borderRadius: '6px',
                display: 'inline-flex',
                alignItems: 'center',
                transition: 'all 0.15s ease-in-out'
              }}
            >
              Ücretsiz Ön Görüşme
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(v => !v)}
            className="lg:hidden p-2 hover:bg-gray-100 transition-colors"
            style={{ borderRadius: '6px' }}
            aria-label="Menüyü aç/kapat"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {open && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-6 space-y-4">
              {nav.map(i => {
                const isActive = pathname === i.href;
                return (
                  <Link 
                    key={i.href} 
                    href={i.href} 
                    onClick={() => setOpen(false)} 
                    className={`block font-medium transition-colors duration-200 no-underline py-2 px-3 rounded-md ${
                      isActive 
                        ? 'text-primary-600 bg-primary-50' 
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                    style={{ fontSize: '15px' }}
                  >
                    {i.label}
                  </Link>
                );
              })}
              <div className="pt-4">
                <Link
                  href="/iletisim"
                  onClick={() => setOpen(false)}
                  className="no-underline w-full text-center py-3"
                  style={{
                    backgroundColor: '#dbeaff',
                    color: '#2563eb',
                    borderRadius: '6px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.15s ease-in-out'
                  }}
                >
                  Ücretsiz Ön Görüşme
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
