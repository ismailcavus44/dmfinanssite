const minis = [
  { t:"Borç Analizi", d:"Tüm alacakları sınıflandırır, risk ve öncelik sırası çıkarırız." },
  { t:"Yapılandırma", d:"Bankalarla gerçekçi vadeler ve taksit stratejisi oluştururuz." },
  { t:"Kredi Puanı", d:"Hatalı kayıtları tespit eder, puan artışı için plan sunarız." },
];

export default function ServiceMiniSections(){
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          {minis.map(m=>(
            <div key={m.t} className="text-center group">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{m.t}</h3>
              <p className="text-gray-600 leading-relaxed">{m.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


