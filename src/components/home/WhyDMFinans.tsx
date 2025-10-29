import CTAButton from "@/components/ui/CTAButton";

export default function WhyDMFinans(){
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Neden DMFinans?</h2>
              <p className="text-xl text-gray-600 mb-8">Finansal özgürlüğünüze giden yolda güvenilir ortağınız</p>
            </div>
            <div className="space-y-6">
              {[
                "Şeffaf süreç ve net maliyet",
                "Gerçekçi ve uygulanabilir planlar", 
                "Ölçülebilir sonuç odaklı yaklaşım",
                "Türkiye geneli danışmanlık"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hazır mısınız?</h3>
              <p className="text-gray-600 mb-8 text-lg">Sizin için en uygun çözümü birlikte belirleyelim. Kısa bir ön görüşme ile yol haritası çıkaralım.</p>
              <CTAButton href="/iletisim" label="Ücretsiz Ön Görüşme"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


