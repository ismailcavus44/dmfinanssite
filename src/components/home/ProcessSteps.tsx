const steps = [
  { n:"01", t:"Analiz", d:"Dosya ve finansal fotoğraf çıkarımı." },
  { n:"02", t:"Plan", d:"Ödeme kapasitesine uygun yol haritası." },
  { n:"03", t:"Müzakere", d:"Alacaklılarla indirim ve vade görüşmeleri." },
  { n:"04", t:"Takip", d:"Planın uygulanması ve izleme." },
];

export default function ProcessSteps(){
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nasıl Çalışıyoruz?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">4 adımda finansal durumunuzu iyileştiriyoruz</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, index)=>(
            <div key={s.n} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto group-hover:scale-110 transition-transform">
                  {s.n}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-200 -z-10"></div>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{s.t}</h3>
              <p className="text-gray-600 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


