"use client";

import { 
  Search, 
  Leaf, 
  BarChart3, 
  DollarSign, 
  TrendingUp, 
  Scale 
} from "lucide-react";

const services = [
  {
    title: "Emekli Kredi Danışmanlığı",
    description: "Emeklilere özel kredi çözümleriyle, bankalar arasındaki en uygun faiz oranlarını ve ödeme planlarını karşılaştırıyoruz. DM Finans, kredi onay sürecini hızlandırarak finansal hedeflerinize en kısa sürede ulaşmanızı sağlar.",
    icon: Search
  },
  {
    title: "Finansal Analiz ve Uygunluk Raporu", 
    description: "Kredi başvurusu öncesinde gelir, borç ve ödeme gücü analizleri yaparak finansal uygunluk raporu oluşturuyoruz. Bu rapor sayesinde başvurularınız daha güçlü hale gelir, reddedilme riski azalır.",
    icon: Leaf
  },
  {
    title: "Banka Aracılık ve Başvuru Yönetimi",
    description: "Bankalarla doğrudan iletişime geçerek başvuru sürecinizi sizin adınıza takip ediyoruz. Her adımda şeffaf bilgi akışı sağlayarak süreci güvenle yönetiyoruz.",
    icon: BarChart3
  },
  {
    title: "Kredi Notu İyileştirme Danışmanlığı",
    description: "Kredi notu düşük olan müşteriler için stratejik analiz yapıyor, borç planlaması ve ödeme takvimi oluşturarak not artışını hedefliyoruz. DM Finans ile krediye yeniden erişim fırsatını yakalayın.",
    icon: DollarSign
  },
  {
    title: "Emeklilere Özel Finansal Planlama",
    description: "Emekli maaşınız, mevcut borçlarınız ve yaşam standartlarınız analiz edilerek sürdürülebilir bir finans planı hazırlanır. Amaç: Aylık bütçenizi zorlamadan finansal rahatlık sağlamak.",
    icon: TrendingUp
  },
  {
    title: "Yasal ve Mevzuat Uyum Danışmanlığı",
    description: "Kredi süreçlerinde mevzuata uygunluk, sözleşme incelemesi ve hukuki bilgilendirme hizmeti sunarak sizi olası risklerden koruyoruz.",
    icon: Scale
  }
];

export default function WhatWeDo() {
  return (
    <section className="py-12 sm:py-16 md:py-20" style={{ backgroundColor: '#f7fafc' }}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="flex items-center" style={{ marginBottom: '11px' }}>
            <h2 className="text-xs font-bold" style={{ color: '#1e3453' }}>
              NELER YAPIYORUZ ?
            </h2>
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
        </div>
        
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              style={{
                borderRadius: '12px',
                backgroundColor: 'white',
                padding: '1.5rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
              }}
            >
              <div 
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6"
                style={{ backgroundColor: '#F3F4F6' }}
              >
                <service.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" style={{ color: '#0A2342' }} />
              </div>
              
              <h3 
                className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center"
                style={{ color: '#0A2342' }}
              >
                {service.title}
              </h3>
              
              <p 
                className="text-sm sm:text-base text-center leading-relaxed"
                style={{ color: '#6B7280' }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
