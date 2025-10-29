const posts = [
  { t:"İcra Dosyası Kapanış Rehberi", s:"Adım adım süreç ve dikkat edilecekler.", href:"/blog" },
  { t:"Kredi Puanı Nasıl Artar?", s:"Hızlı ve kalıcı yöntemler.", href:"/blog" },
  { t:"Borç Yapılandırmada Pazarlık", s:"İndirim ve vade teknikleri.", href:"/blog" },
];

export default function BlogTeaser(){
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kütüphane</h2>
          <p className="text-xl text-gray-600 mb-8">Finansal bilgi birikimimizi sizinle paylaşıyoruz</p>
          <a href="/blog" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium no-underline">
            Tüm Yazıları Gör
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map(p=>(
            <article key={p.t} className="group">
              <div className="bg-white rounded-2xl p-8 h-full flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">{p.t}</div>
                <p className="text-gray-600 mb-6 flex-1 leading-relaxed">{p.s}</p>
                <a href={p.href} className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium no-underline group-hover:translate-x-1 transition-all">
                  Oku
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


