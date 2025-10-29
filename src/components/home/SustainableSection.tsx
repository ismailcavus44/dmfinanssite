export default function SustainableSection() {
  return (
    <section className="bg-[#F7FAFC] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Sol: Metin */}
          <div className="flex flex-col justify-start w-full lg:w-1/2">
            <div className="text-[12px] font-semibold tracking-[0.14em] uppercase mb-4" style={{ color: '#1e3453' }}>
              DM FİNANS
            </div>

            <h2 className="text-[#0A2540] font-medium tracking-[-0.01em] leading-[1.15]
                           text-2xl sm:text-3xl md:text-4xl lg:text-[56px] mb-6"
                style={{ fontWeight: 500 }}>
              Emekliler İçin
              <br className="hidden sm:block" />
              Finansal Çözümler
            </h2>

            <div className="text-base sm:text-lg leading-[1.8] text-slate-600">
              <p className="mb-4">
                <span className="font-semibold">DM FİNANS</span>, emeklilerin finansal ihtiyaçlarını doğru analiz ederek en uygun kredi seçeneklerine ulaşmalarını sağlar. Uzman ekibimiz, her başvuruyu kişiye özel finansal analizden geçirir, bankalarla koordineli çalışarak kredi onay sürecini hızlandırır.
              </p>
              <p>
                Gelir durumu, kredi notu ve ödeme gücü dikkate alınarak yapılan detaylı değerlendirmelerle; hem krediye erişimi kolaylaştırıyor hem de sürdürülebilir finansal planlama sağlıyoruz. <span className="font-semibold">DM Finans</span> olarak hedefimiz, emeklilerin finansal güvenliğini güçlendirerek geleceğe huzurla bakmalarını sağlamaktır.
              </p>
            </div>
          </div>

          {/* Sağ: Görsel */}
          <div className="w-full lg:w-1/2 flex items-start">
            <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[388px] rounded-xl shadow-[0_8px_24px_rgba(16,24,40,0.08)] border border-[#E2E8F0] overflow-hidden mt-20">
              <img
                src="/images/hizmetler1.png"
                alt="Sürdürülebilir yönetim ve finansal çözümler - Modern ofis binası"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



