const faqs = [
  { q:"İlk görüşmede ne yapılıyor?", a:"Dosyanız ve finansal durum kısaca analiz edilir, ön plan sunulur." },
  { q:"Ücretlendirme nasıl?", a:"Kapsama göre sabit/katmanlı model; net şekilde bilgilendirme yapılır." },
  { q:"Süreç ne kadar sürer?", a:"Dosya yoğunluğuna göre değişir; plan sunumu genelde 14 gün içinde." },
];

export default function FAQTeaser(){
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sık Sorulan Sorular</h2>
          <p className="text-xl text-gray-600">Merak ettiklerinizin cevapları</p>
        </div>
        <div className="space-y-4">
          {faqs.map(f=>(
            <details key={f.q} className="group">
              <summary className="cursor-pointer p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors font-semibold text-gray-900 list-none">
                <div className="flex items-center justify-between">
                  <span>{f.q}</span>
                  <svg className="w-5 h-5 text-primary-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}


