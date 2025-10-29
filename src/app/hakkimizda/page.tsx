"use client";

import Schema from "@/components/seo/Schema";

export default function AboutPage() {
  return (
    <>
      <Schema
        type="ProfessionalService"
        data={{
          name: "DMFinans",
          description: "Finansal danışmanlık ve borç yönetimi.",
          areaServed: "Türkiye"
        }}
      />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[50vh] md:min-h-[65vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/danismanlik.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll'
        }}
      >
        {/* Overlay */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundColor: 'rgba(0,0,0,0.4)'
          }}
        />
        
        {/* Başlık Bloğu */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          {/* Küçük Başlık */}
          <div 
            className="text-white font-medium uppercase"
            style={{
              fontSize: '14px',
              letterSpacing: '3px',
              fontFamily: 'Manrope, sans-serif'
            }}
          >
            DMFİNANS
          </div>
          
          {/* Büyük Başlık */}
          <h1 
            className="text-white font-bold mt-2"
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontFamily: 'Manrope, sans-serif'
            }}
          >
            Hakkımızda
          </h1>
        </div>
      </section>

      {/* İçerik Kartı */}
      <div 
        className="relative -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-14"
      >
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div 
            className="bg-white p-6 md:p-10"
            style={{ borderRadius: '6px' }}
          >
            {/* Küçük Başlık */}
            <div 
              className="text-center mb-6"
              style={{
                fontSize: '12px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#777',
                fontFamily: 'Manrope, sans-serif'
              }}
            >
              DM FİNANS
            </div>
            
            {/* Metin Paragrafları */}
            <div className="text-center space-y-4">
              <p 
                className="leading-relaxed"
                style={{
                  fontSize: '16px',
                  lineHeight: '1.8',
                  color: '#444',
                  fontFamily: 'Manrope, sans-serif'
                }}
              >
                DM Finans, bireylerin ve özellikle emeklilerin finansal ihtiyaçlarına çözüm üretmek amacıyla kurulmuş profesyonel bir finans danışmanlık platformudur. Krediye erişimde yaşanan zorlukları ortadan kaldırmak, kişiye özel finansal analizlerle en uygun kredi seçeneklerini sunmak ve süreci baştan sona güvenle yönetmek bizim işimizdir. Finans sektöründe uzun yıllardır görev yapan uzman kadromuz, her müşterinin finansal durumunu detaylı bir şekilde analiz ederek en doğru stratejiyi belirler. Gelir, kredi notu, mevcut borç yükü ve ödeme gücü gibi veriler; özel analiz sistemlerimizle değerlendirilir ve kredi onay oranınızı artıracak planlar hazırlanır.
              </p>
              
              <p 
                className="leading-relaxed"
                style={{
                  fontSize: '16px',
                  lineHeight: '1.8',
                  color: '#444',
                  fontFamily: 'Manrope, sans-serif'
                }}
              >
                DM Finans, bankalarla doğrudan iş birliği içinde çalışır. Bu sayede, sadece yönlendirme değil, aktif süreç yönetimi sağlar — doğru başvuru, doğru banka ve uygun faiz oranı hedefiyle hareket eder. Her adımda şeffaflık, gizlilik ve mevzuata tam uyum ilkelerini esas alırız. Misyonumuz, müşterilerimizin finansal güvenliğini sağlam temeller üzerine inşa etmektir. Vizyonumuz ise, Türkiye'de kredi danışmanlığı ve finansal analiz denildiğinde akla gelen ilk güvenilir marka olmaktır. DM Finans ile çalıştığınızda yalnızca bir danışmanlık hizmeti almazsınız; size özel planlanmış bir finansal yol haritasına, profesyonel rehberliğe ve uzun vadeli ekonomik istikrara sahip olursunuz.
              </p>
            </div>
            
            {/* İletişime Geç Butonu */}
            <div className="text-center mt-8">
              <a
                href="/iletisim"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#2563EB] text-white font-semibold rounded-lg hover:bg-[#1d4ed8] transition-colors"
                style={{ 
                  borderRadius: '6px',
                  fontSize: '16px'
                }}
              >
                İletişime Geç
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Alt Boşluk */}
      <div 
        className="w-full"
        style={{
          height: '100px',
          background: 'linear-gradient(to bottom, #f8f9fa, #ffffff)'
        }}
      />
    </>
  );
}