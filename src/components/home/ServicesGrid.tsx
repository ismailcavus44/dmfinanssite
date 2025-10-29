const items = [
  { t:"Borç Analizi", d:"Gelir-gider dengenize göre plan.", href:"/services" },
  { t:"İcra Dosyası Yönetimi", d:"Strateji, pazarlık, takvim.", href:"/services" },
  { t:"Yapılandırma", d:"Sürdürülebilir ödeme planları.", href:"/services" },
  { t:"Kredi Puanı İyileştirme", d:"Rapor analizi ve aksiyon.", href:"/services" },
  { t:"Bütçe & Raporlama", d:"Nakit akışı görünürlüğü.", href:"/services" },
  { t:"Mevzuat & Uyum", d:"Risk ve süreç kontrolü.", href:"/services" },
];

export default function ServicesGrid(){
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Çözümlerimiz</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Size en uygun çözümü buluyoruz</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map(i=>(
            <div key={i.t} className="group">
              <div className="bg-white rounded-2xl p-8 h-full flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">{i.t}</div>
                <p className="text-gray-600 mb-6 flex-1 leading-relaxed">{i.d}</p>
                <a href={i.href} className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium no-underline group-hover:translate-x-1 transition-all">
                  Detaylı İncele 
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


