"use client";

import CTAButton from "@/components/ui/CTAButton";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "1",
    title: "Sizi Tanıyor, Finansal Durumunuzu Analiz Ediyoruz.",
    description: "İlk adımda sizi dinliyor, gelir durumunuzu, kredi geçmişinizi ve mevcut borç yapınızı detaylı analiz ediyoruz. Bu sayede sizin için en uygun kredi türünü ve başvuru stratejisini belirliyoruz."
  },
  {
    number: "2", 
    title: "Bankalara Uygunluk Değerlendirmesi Yapıyoruz.",
    description: "Finansal verilerinizi bankaların güncel kredi politikalarına göre analiz ediyoruz. Hangi bankada onay ihtimalinizin yüksek olduğunu belirleyip doğru yönlendirmeyi yapıyoruz."
  },
  {
    number: "3",
    title: "Kredi Başvurunuzu Sizin Adınıza Yönetiyoruz.",
    description: "Belirlenen stratejiye göre başvuru sürecini sizin adınıza yönetiyor, bankalarla iletişimi takip ediyoruz. Her aşamada sizi bilgilendiriyor, sürecin şeffaf ve hızlı ilerlemesini sağlıyoruz."
  },
  {
    number: "4",
    title: "Onay Sonrası Finansal Planlama Desteği Sunuyoruz.",
    description: "Krediniz onaylandığında, bütçenize uygun geri ödeme planı hazırlıyor ve finansal istikrarınızı koruyacak öneriler sunuyoruz. DM Finans olarak hedefimiz, sadece krediye ulaşmanızı değil, uzun vadede finansal rahatlığa sahip olmanızı sağlamaktır."
  }
];

export default function WhyUs() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Sol Sticky Kart */}
          <div className="lg:sticky lg:h-fit order-2 lg:order-1" style={{ top: '30px' }}>
            <div 
              className="rounded-2xl p-4 sm:p-6 lg:p-8 w-full lg:w-[500px] lg:h-[730px]"
              style={{ 
                backgroundColor: '#f7f8fc',
                border: '0.4px solid rgba(0,0,0,0.1)',
                borderRadius: '5px'
              }}
            >
              {/* Görsel */}
                  <div
                    className="w-full rounded-xl mb-6 overflow-hidden"
                    style={{
                      height: '250px'
                    }}
                  >
                    <img
                      src="/images/neden.png"
                      alt="DMFinans Danışmanlık Hizmetleri"
                      className="w-full h-full object-cover"
                    />
                  </div>
              
              {/* Küçük başlık */}
              <p className="text-sm font-medium mb-2" style={{ color: '#6B7280' }}>
                Neden DMFinans
              </p>
              
              {/* Büyük başlık */}
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#0A2342' }}>
                Neden DM Finans ile Çalışmalısınız?
              </h2>
              
              {/* Açıklama paragrafı */}
              <p className="text-base leading-relaxed mb-8" style={{ color: '#6B7280' }}>
                DM Finans, finansal danışmanlık, kredi analizi ve bütçe planlama alanlarında uzman kadrosuyla her müşterisine kişiye özel çözümler sunar. Amacımız; krediye erişimde yaşanan zorlukları ortadan kaldırmak, doğru stratejiyle en uygun banka ve faiz oranına ulaşmanızı sağlamaktır.
              </p>
              
              {/* CTA Butonu */}
              <CTAButton 
                href="/iletisim" 
                label="Bizimle Tanışın"
                className="w-full"
                style={{
                  backgroundColor: '#2563EB',
                  color: 'white',
                  width: '190px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              />
            </div>
          </div>

          {/* Sağ Timeline */}
          <div className="space-y-6 sm:space-y-8 relative order-1 lg:order-2">
            {/* Çizgi - 1. kutucuğun ortasından başlar */}
            <div 
              className="absolute left-6"
              style={{ 
                width: '0.4px',
                backgroundColor: 'rgba(0,0,0,0.1)',
                top: '120px',
                height: 'calc(100% - 144px)'
              }}
            />
            
            <div className="text-center lg:text-left mb-8 sm:mb-12">
              <div className="flex items-center" style={{ marginBottom: '11px' }}>
                <h3 className="text-xs font-bold" style={{ color: '#1e3453' }}>
                  NASIL ÇALIŞIYORUZ?
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
            </div>

            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className="relative flex items-start"
                ref={(el) => (cardRefs.current[index] = el)}
                data-index={index}
                style={{
                  opacity: visibleCards.includes(index) ? 1 : 0,
                  transform: visibleCards.includes(index) ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.6s ease-out'
                }}
              >
                {/* Sol taraftaki yuvarlak */}
                <div className="flex flex-col items-center mr-4 lg:mr-6 relative z-10">
                  {/* Yuvarlak */}
                  <div 
                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center bg-white border-2"
                    style={{ 
                      backgroundColor: '#E5E7EB',
                      borderColor: '#E5E7EB'
                    }}
                  >
                    <span className="text-base lg:text-lg font-bold" style={{ color: '#0A2342' }}>
                      {step.number}
                    </span>
                  </div>
                </div>
                
                {/* İçerik kartı */}
                <div 
                  className="bg-white relative w-[calc(100%-3rem)] lg:w-[500px] lg:h-[250px] flex items-center"
                  style={{ 
                    border: '0.4px solid rgba(0,0,0,0.1)',
                    borderRadius: '5px',
                    minHeight: '120px',
                    position: 'relative'
                  }}
                >
                  <div className="w-full text-left px-4 sm:px-5 lg:px-6 py-3 sm:py-4 lg:py-5">
                    <h4 className="text-sm lg:text-lg font-semibold mb-2" style={{ color: '#0A2342' }}>
                      {step.title}
                    </h4>
                    <p className="text-xs lg:text-base leading-relaxed" style={{ color: '#6B7280' }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
