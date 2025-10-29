"use client";

import Schema from "@/components/seo/Schema";

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Emekli Kredi Danışmanlığı",
      description: "Emeklilere özel kredi çözümleriyle bankalardan en uygun faiz oranlarını ve ödeme planlarını bulmanıza yardımcı oluyoruz. Kredi başvurularınızı analiz ediyor, onay sürecini hızlandırıyoruz.",
      image: "/images/service1.jpg",
      href: "/services/emekli-kredi"
    },
    {
      id: 2,
      title: "Finansal Analiz ve Uygunluk Raporu",
      description: "Gelir, kredi notu, borç yükü ve ödeme gücü gibi tüm finansal verilerinizi detaylı analiz ederek başvurularınız için uygunluk raporu hazırlıyoruz. Bu sayede kredi başvurularınız güçlü ve doğru temellere dayanır.",
      image: "/images/service2.jpg",
      href: "/services/finansal-analiz"
    },
    {
      id: 3,
      title: "Banka İş Birliği ve Başvuru Yönetimi",
      description: "Türkiye'nin önde gelen bankalarıyla iş birliği yaparak kredi başvuru sürecinizi sizin adınıza yönetiyoruz. Hangi bankadan daha yüksek onay ihtimaliniz olduğunu belirleyip, başvurularınızı doğru yönlendiriyoruz.",
      image: "/images/service3.jpg",
      href: "/services/banka-isbirligi"
    },
    {
      id: 4,
      title: "Kredi Notu İyileştirme Danışmanlığı",
      description: "Kredi notu düşük olan müşterilerimiz için detaylı borç analizi ve ödeme planı oluşturuyoruz. Hedefimiz: krediye yeniden erişiminizi sağlamak ve finansal güveninizi yeniden inşa etmek.",
      image: "/images/service4.jpg",
      href: "/services/kredi-notu"
    },
    {
      id: 5,
      title: "Bütçe Planlama ve Finansal Rehberlik",
      description: "Gelirinizi ve giderlerinizi dengeleyen, sürdürülebilir bir bütçe planı oluşturuyoruz. Amacımız, kredinizi öderken yaşam standardınızı korumanız.",
      image: "/images/service5.jpg",
      href: "/services/butce-planlama"
    },
    {
      id: 6,
      title: "Yasal Mevzuat ve Hak Danışmanlığı",
      description: "Kredi süreçlerinde imzaladığınız belgelerin yasal kapsamını açıklıyor, haklarınız hakkında sizi bilgilendiriyoruz. Her adımda mevzuata tam uyumla hareket ediyoruz.",
      image: "/images/service6.jpg",
      href: "/services/yasal-mevzuat"
    }
  ];

  return (
    <>
      <Schema
        type="ProfessionalService"
        data={{
          name: "Hizmetlerimiz | DMFinans",
          description: "Bağımsız denetim, sürdürülebilirlik, yönetim danışmanlığı ve finansal danışmanlık hizmetleri.",
          areaServed: "Türkiye"
        }}
      />
      
      <div className="min-h-screen bg-white">
        <main className="relative flex flex-col lg:flex-row">
          {/* Mobil Hero (sadece mobilde görünür) */}
          <section className="lg:hidden relative h-[50vh] overflow-hidden">
            <div 
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: "url('/images/hizmet-sayfa.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0) 100%)'
              }}
            />
            <h2 className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-extrabold drop-shadow-md text-3xl text-center whitespace-nowrap">
              Bağımsız Denetim Hizmetleri
            </h2>
          </section>
          {/* Sol sticky wrapper */}
          <div className="hidden lg:block relative w-[880px] shrink-0">
            <div className="sticky top-[65px] h-[calc(100vh-65px-1px)] overflow-hidden rounded-none lg:rounded-r-2xl">
              {/* Arka Plan Görseli */}
              <div 
                className="absolute inset-0 w-full h-full"
                style={{
                  backgroundImage: "url('/images/hizmet-sayfa.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  objectFit: 'cover'
                }}
              />
              {/* Overlay Gradient */}
              <div 
                className="absolute inset-0 w-full h-full"
                style={{
                  background: 'linear-gradient(to bottom, rgba(11,11,11,0.25) 0%, rgba(11,11,11,0) 100%)'
                }}
              />
              {/* Sol Üst Marka */}
              <div 
                className="absolute top-8 left-8 z-10 text-white"
                style={{
                  opacity: 0.7,
                  letterSpacing: '0.2em',
                  fontSize: '12px',
                  fontFamily: 'Manrope, sans-serif'
                }}
              >
                DMFİNANS
              </div>
              {/* Sol Alt Büyük Başlık */}
              <h2 
                className="absolute bottom-8 left-6 text-white font-extrabold drop-shadow-md"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3.75rem)',
                  fontFamily: 'Manrope, sans-serif',
                  lineHeight: '1.1'
                }}
              >
                Emeklilere Özel Kredi<br />
                Danışmanlık Hizmetleri
              </h2>
            </div>
          </div>

          {/* Sağ scroll alanı */}
          <section className="ml-0 lg:ml-[48px] w-full flex-1 lg:max-w-[718px] px-6 lg:px-10 pt-6 pb-12 lg:py-16 flex flex-col">
            <div className="space-y-6 lg:space-y-7">
                
                {/* Sayfa Başlığı */}
                <div className="mt-[40px] mb-8">
                  <h1 
                    className="font-extrabold leading-tight mb-4"
                    style={{
                      fontSize: 'clamp(2.5rem, 4vw, 2.75rem)',
                      fontFamily: 'Manrope, sans-serif',
                      lineHeight: '1.1'
                    }}
                  >
                    Finansal Hizmetlerimiz
                  </h1>
                  
                  <p 
                    className="leading-7"
                    style={{
                      color: '#525252',
                      fontSize: '16px',
                      fontFamily: 'Manrope, sans-serif',
                      maxWidth: '68ch'
                    }}
                  >
                    Günümüz finansal sisteminde krediye erişim, doğru analiz ve profesyonel yönlendirme gerektirir. DM Finans, bireylerin ve özellikle emeklilerin finansal durumunu detaylı şekilde inceleyerek en uygun kredi çözümlerine ulaşmalarını sağlar.
                  </p>
                </div>

                {/* Hizmet Kartları */}
                <div className="space-y-6">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className="bg-white border border-gray-200 rounded-2xl transition-all duration-200"
                      style={{
                        borderRadius: '16px',
                        width: '100%',
                        padding: '18px 36px 18px 18px',
                        minHeight: '280px'
                      }}
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-0 h-full">
                        {/* Görsel */}
                        <div className="w-full">
                          <div 
                            className="w-full lg:w-[280px] h-[215px] overflow-hidden"
                            style={{
                              borderRadius: '6px',
                              padding: '9px'
                            }}
                          >
                            <img
                              src={"https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=60"}
                              alt={service.title}
                              className="w-full h-full object-cover"
                              style={{
                                borderRadius: '6px'
                              }}
                            />
                          </div>
                        </div>
                        
                        {/* İçerik */}
                        <div className="flex flex-col justify-between pl-5 h-full">
                          <div className="flex-1">
                            <h3 
                              className="font-semibold mb-2"
                              style={{
                                fontSize: '20px',
                                fontFamily: 'Manrope, sans-serif'
                              }}
                            >
                              {service.title}
                            </h3>
                            
                            <p 
                              className="text-gray-600 leading-6"
                              style={{
                                fontSize: '14px',
                                fontFamily: 'Manrope, sans-serif',
                                lineHeight: '1.5'
                              }}
                            >
                              {service.description}
                            </p>
                          </div>
                          
                          {/* CTA Butonu */}
                          <div className="mt-4">
                            <a
                              href={service.href}
                              className="inline-flex items-center justify-center px-3 py-2 bg-white border border-gray-300 text-gray-500 font-medium uppercase tracking-wide rounded-[6px] hover:bg-gray-50 hover:border-gray-400 transition-colors"
                              style={{
                                fontSize: '13px',
                                letterSpacing: '0.06em',
                                fontFamily: 'Manrope, sans-serif',
                                width: 'fit-content'
                              }}
                            >
                              Detaylı Bilgi
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}