export default function AllinialGlobal() {
  return (
    <>
      <section className="relative">
        {/* Hero Bant */}
        <div className="relative min-h-[48vh] sm:min-h-[40vh]">
          {/* Arka plan görseli */}
          <div className="absolute inset-0 w-full h-full">
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/images/hizmetler2.png')",
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
          </div>
          
          {/* Overlay */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              background: 'linear-gradient(180deg, rgba(12,20,32,.55) 0%, rgba(12,20,32,.40) 55%, rgba(12,20,32,.55) 100%)',
              boxShadow: 'inset 0 0 120px rgba(0,0,0,.28)'
            }}
          />
          
          {/* Hero İçerik */}
          <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 flex flex-col items-center justify-center text-center h-full">
            {/* Eyebrow */}
            <div className="text-[12px] font-semibold tracking-[.14em] uppercase text-white/75 mb-2 mt-24 sm:mt-0">
              DM FİNANS
            </div>
            
            {/* H1 */}
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.2] font-bold tracking-[-0.01em]">
              Finansal Güvenin ve Tecrübenin Adresi
            </h1>
            
            {/* Alt başlık */}
            <p className="mt-2 text-white/90 text-base sm:text-lg md:text-xl lg:text-[22px] font-normal">
              Deneyim, analiz ve güvenle en doğru finansal çözümleri üretiyoruz.
            </p>
          </div>
        </div>
        
        {/* Örtüşen Beyaz Kart */}
        <div className="relative -mt-14 md:-mt-11 sm:-mt-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              className="mx-auto border-t border-x-0 border-b-0 border-[#EEF2F7] bg-white px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8"
              style={{ borderRadius: '6px' }}
            >
              {/* Kart Başlığı */}
              <h2 className="font-bold leading-snug text-[#0A2540] mb-4 text-xl sm:text-2xl md:text-3xl lg:text-[34px] text-left">
                Uzman Kadromuzla Güvenilir Finansal Danışmanlık
              </h2>
              
              {/* Paragraflar */}
              <div className="text-sm sm:text-base leading-[1.8] text-slate-600 space-y-2 text-left">
                <p>
                  DM Finans, finans sektöründe deneyimli danışmanlarıyla her müşterisine özel çözümler üretir. Kredi değerlendirme, finansal analiz ve bütçe planlama süreçlerinde doğruluk, gizlilik ve şeffaflık ilkesiyle çalışıyoruz. Her müşterimizin finansal durumunu detaylı biçimde analiz ederek; gelir, borç, kredi notu ve ödeme alışkanlıklarını bütüncül şekilde değerlendiriyoruz.
                </p>
                <p>
                  Amacımız, her bireyin finansal hedeflerine en uygun stratejiyle ulaşmasını sağlamak. Bu kapsamda emeklilerden serbest çalışanlara, kamu personelinden özel sektör çalışanlarına kadar geniş bir kitleye profesyonel danışmanlık hizmeti sunuyoruz.
                </p>
              </div>
              
              {/* Görsel Galerisi */}
              <div className="mt-4 sm:mt-6 w-full">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div
                    className="border border-slate-200 shadow-[0_6px_16px_rgba(16,24,40,.06)] overflow-hidden h-48 sm:h-64 md:h-80 lg:h-[375px]"
                    style={{ borderRadius: '6px' }}
                  >
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{
                        backgroundImage: "url('/images/ofis.png')"
                      }}
                    />
                  </div>
                  <div
                    className="border border-slate-200 shadow-[0_6px_16px_rgba(16,24,40,.06)] overflow-hidden h-48 sm:h-64 md:h-80 lg:h-[375px]"
                    style={{ borderRadius: '6px' }}
                  >
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{
                        backgroundImage: "url('/images/emeki.png')"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div style={{ height: '110px' }}></div>
    </>
  );
}
