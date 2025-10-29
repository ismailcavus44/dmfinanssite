const stats = [
  { v:"%92", l:"Memnuniyet" },
  { v:"1.200+", l:"Tamamlanan Analiz" },
  { v:"14 gün", l:"Ortalama Plan Sunumu" },
];

export default function KPIStats(){
  return (
    <section className="py-20 bg-primary-600">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Rakamlarla DMFinans</h2>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">Başarılarımız konuşuyor</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {stats.map(s=>(
            <div key={s.l} className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="text-5xl md:text-6xl font-bold text-white mb-4 group-hover:scale-110 transition-transform">{s.v}</div>
                <div className="text-primary-100 text-lg font-medium">{s.l}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


