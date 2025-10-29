export default function TrustBanner(){
  return (
    <section className="bg-primary-50">
      <div className="container mx-auto px-4 py-12 md:py-16 text-center">
        <p className="text-sm uppercase tracking-wide text-primary-700">Güven</p>
        <h3 className="text-xl md:text-2xl font-semibold mt-2">Güvenilir çözüm ortağınız</h3>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
          <div className="h-10 w-28 rounded-xl bg-white border" />
          <div className="h-10 w-28 rounded-xl bg-white border" />
          <div className="h-10 w-28 rounded-xl bg-white border" />
        </div>
      </div>
    </section>
  );
}




