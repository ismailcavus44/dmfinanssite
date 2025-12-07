"use client";

import { useState } from "react";
import Link from "next/link";
import Schema from "@/components/seo/Schema";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    retirementStatus: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showRetirementOptions, setShowRetirementOptions] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Emeklilik durumu kontrolü
    if (showRetirementOptions && !formData.retirementStatus) {
      alert('Lütfen emeklilik durumunuzu seçin.');
      return;
    }
    
    setIsSubmitting(true);
    
    // Form submission logic here
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Mesajınız başarıyla gönderildi!');
    }, 2000);
  };

  return (
    <>
      <Schema
        type="ContactPage"
        data={{
          name: "İletişim | DMFinans",
          url: "https://www.dmfinans.com.tr/contact",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+905332988824",
            contactType: "customer service",
            areaServed: "TR",
            availableLanguage: ["tr"]
          }
        }}
      />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[50vh] md:min-h-[65vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/hizmetler1.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll'
        }}
      >
        {/* Overlay */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'linear-gradient(180deg, rgba(10,17,29,.65) 0%, rgba(10,17,29,.45) 40%, rgba(10,17,29,.35) 100%)'
          }}
        />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          {/* Mini Title */}
          <div className="text-xs md:text-sm font-semibold tracking-[.25em] text-[#E8EEF7]/85 mb-4">
            İLETİŞİM
          </div>
          
          {/* Main Title */}
          <h1 
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-0"
            style={{ 
              textShadow: '0 2px 12px rgba(0,0,0,.25)',
              lineHeight: '1.2'
            }}
          >
            İletişime Geçin
          </h1>
        </div>
      </section>

      {/* Content Card */}
      <div 
        className="relative -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-14"
      >
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div 
            className="bg-white p-6 md:p-10"
            style={{ borderRadius: '6px' }}
          >
            {/* Card Header */}
            <div className="text-center mb-8">
              <div className="text-xs md:text-sm font-semibold tracking-[.2em] text-gray-500 uppercase">
                İLETİŞİM
              </div>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Form Section (2/3 on desktop) */}
              <div className="lg:col-span-2">
                <div className="border border-gray-100 bg-white p-6 md:p-8" style={{ borderRadius: '6px' }}>
                  <div className="text-xs md:text-sm font-semibold tracking-[.2em] text-gray-500 uppercase mb-4">
                    İLETİŞİM
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm text-gray-600 font-medium mb-1.5">
                          Ad
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Ad"
                          className="w-full h-12 px-4 text-[15px] bg-[#F9FAFB] border border-[#E5E7EB] placeholder-[#9CA3AF] focus:border-[#2151F5] focus:ring-4 focus:ring-[#2151F5]/10 focus:outline-none transition-all"
                          style={{ borderRadius: '6px' }}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm text-gray-600 font-medium mb-1.5">
                          Soyad
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Soyad"
                          className="w-full h-12 px-4 text-[15px] bg-[#F9FAFB] border border-[#E5E7EB] placeholder-[#9CA3AF] focus:border-[#2151F5] focus:ring-4 focus:ring-[#2151F5]/10 focus:outline-none transition-all"
                          style={{ borderRadius: '6px' }}
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm text-gray-600 font-medium mb-1.5">
                        E-Posta
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="ornek@email.com"
                        className="w-full h-12 px-4 text-[15px] bg-[#F9FAFB] border border-[#E5E7EB] placeholder-[#9CA3AF] focus:border-[#2151F5] focus:ring-4 focus:ring-[#2151F5]/10 focus:outline-none transition-all"
                        style={{ borderRadius: '6px' }}
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm text-gray-600 font-medium mb-1.5">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+90 (5__) ___ __ __"
                        className="w-full h-12 px-4 text-[15px] bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl placeholder-[#9CA3AF] focus:border-[#2151F5] focus:ring-4 focus:ring-[#2151F5]/10 focus:outline-none transition-all"
                        required
                      />
                    </div>

                    {/* Retirement Status */}
                    <div>
                      <div className="flex items-start gap-3 mb-3">
                        <input
                          type="checkbox"
                          id="retirementCheckbox"
                          checked={showRetirementOptions}
                          onChange={(e) => {
                            setShowRetirementOptions(e.target.checked);
                            if (!e.target.checked) {
                              setFormData(prev => ({ ...prev, retirementStatus: '' }));
                            }
                          }}
                          className="mt-1 w-4 h-4 text-[#2151F5] bg-[#F9FAFB] border-[#E5E7EB] rounded focus:ring-[#2151F5] focus:ring-2"
                        />
                        <label htmlFor="retirementCheckbox" className="text-sm text-gray-600 font-medium cursor-pointer">
                          Emeklilik durumunuzu belirtin <span className="text-red-500">*</span>
                        </label>
                      </div>
                      
                      {showRetirementOptions && (
                        <div className="ml-7 space-y-2">
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              id="retired"
                              name="retirementStatus"
                              value="emekliyim"
                              checked={formData.retirementStatus === 'emekliyim'}
                              onChange={(e) => setFormData(prev => ({ ...prev, retirementStatus: e.target.value }))}
                              className="w-4 h-4 text-[#2151F5] bg-[#F9FAFB] border-[#E5E7EB] focus:ring-[#2151F5] focus:ring-2"
                              required={showRetirementOptions}
                            />
                            <label htmlFor="retired" className="text-sm text-gray-700 cursor-pointer">
                              Emekliyim
                            </label>
                          </div>
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              id="notRetired"
                              name="retirementStatus"
                              value="emekli-değilim"
                              checked={formData.retirementStatus === 'emekli-değilim'}
                              onChange={(e) => setFormData(prev => ({ ...prev, retirementStatus: e.target.value }))}
                              className="w-4 h-4 text-[#2151F5] bg-[#F9FAFB] border-[#E5E7EB] focus:ring-[#2151F5] focus:ring-2"
                              required={showRetirementOptions}
                            />
                            <label htmlFor="notRetired" className="text-sm text-gray-700 cursor-pointer">
                              Emekli değilim
                            </label>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm text-gray-600 font-medium mb-1.5">
                        Mesajınız
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Mesajınızı buraya yazın..."
                        rows={6}
                        className="w-full px-4 py-3 text-[15px] bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl placeholder-[#9CA3AF] focus:border-[#2151F5] focus:ring-4 focus:ring-[#2151F5]/10 focus:outline-none transition-all resize-none"
                        style={{ minHeight: '140px' }}
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="h-10 px-6 bg-[#2151F5] text-white font-semibold shadow-[0_8px_20px_rgba(33,81,245,.25)] hover:bg-[#1644e6] active:translate-y-[1px] disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center"
                      style={{ borderRadius: '6px' }}
                      aria-busy={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        'Gönder'
                      )}
                    </button>
                  </form>
                </div>
              </div>

              {/* Contact Info Section (1/3 on desktop) */}
              <div className="lg:col-span-1">
                <div className="flex items-center mb-3">
                  <h3 className="text-xs font-bold" style={{ color: '#6B7280' }}>
                    İLETİŞİM BİLGİLERİ
                  </h3>
                  <div
                    className="ml-[11px] flex-1"
                    style={{
                      height: '0.4px',
                      backgroundColor: 'rgba(0,0,0,0.1)',
                      width: '100%',
                      borderRadius: '0.2px'
                    }}
                  ></div>
                </div>
                
                <div className="space-y-4">
                  {/* Email Card */}
                  <a 
                    href="mailto:info@dmfinans.com.tr"
                    className="block bg-white border border-gray-100 shadow-sm p-4 md:p-5 hover:shadow-md transition-shadow"
                    style={{ borderRadius: '6px' }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="text-xs uppercase tracking-wide text-gray-400 mb-1">
                          E-posta
                        </div>
                        <div className="text-[15px] md:text-base text-gray-800">
                          info@dmfinans.com.tr
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#F3F4F6] flex items-center justify-center hover:bg-[#E5E7EB] transition-colors">
                        <svg className="w-4 h-4 text-[#9CA3AF] hover:text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </a>

                  {/* Phone Card */}
                  <a 
                    href="tel:+905069171422"
                    className="block bg-white border border-gray-100 shadow-sm p-4 md:p-5 hover:shadow-md transition-shadow"
                    style={{ borderRadius: '6px' }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="text-xs uppercase tracking-wide text-gray-400 mb-1">
                          Telefon
                        </div>
                        <div className="text-[15px] md:text-base text-gray-800">
                          0506 917 14 22
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#F3F4F6] flex items-center justify-center hover:bg-[#E5E7EB] transition-colors">
                        <svg className="w-4 h-4 text-[#9CA3AF] hover:text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </a>

                  {/* Address Card */}
                  <a 
                    href="https://maps.google.com/?q=Korkutreis+Mah.+Cihan+Sk.,+No:12/8+Çankaya/Ankara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white border border-gray-100 shadow-sm p-4 md:p-5 hover:shadow-md transition-shadow"
                    style={{ borderRadius: '6px' }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="text-xs uppercase tracking-wide text-gray-400 mb-1">
                          Adres
                        </div>
                        <div className="text-[15px] md:text-base text-gray-800">
                          Korkutreis Mah. Cihan Sk.,<br />
                          No:12/8 Çankaya/Ankara
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#F3F4F6] flex items-center justify-center hover:bg-[#E5E7EB] transition-colors">
                        <svg className="w-4 h-4 text-[#9CA3AF] hover:text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-[30px]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div 
            className="w-full mx-auto overflow-hidden"
            style={{ 
              width: '1088px',
              height: '430px',
              borderRadius: '6px'
            }}
          >
            <iframe
              title="DMFinans Ofis Konumu"
              className="w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.6379962377723!2d32.85067157648892!3d39.927116685292674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34e56119af40d%3A0x3d81ae8454c3109d!2zRG0gRmluYW5zYWwgRGFuxLHFn21hbmzEsWs!5e0!3m2!1str!2str!4v1761689059728!5m2!1str!2str"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* FullScreenHero Section */}
      <section className="relative flex items-center justify-center overflow-hidden h-96 sm:h-[500px] md:h-[600px] mt-[90px]">
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


      {/* Bottom Spacing */}
      <div className="pb-16 md:pb-24" style={{ backgroundColor: '#ffffff' }} />
    </>
  );
}