"use client";

export default function KvkkPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[280px] w-full overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1920&q=60')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(10,17,29,0.45)" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <div
              className="uppercase tracking-[.25em] mb-2"
              style={{ color: "#E8EEF7", opacity: 0.9, fontSize: 12 }}
            >
              KVKK
            </div>
            <h1
              className="font-extrabold text-white"
              style={{ fontSize: "clamp(28px,4.5vw,44px)", lineHeight: 1.15 }}
            >
              Kişisel Verilerin Korunması Aydınlatma Metni
            </h1>
          </div>
        </div>
      </section>

      {/* Content Card */}
      <section className="-mt-12 pb-16 px-6">
        <div className="mx-auto w-full max-w-[980px] bg-white border border-gray-200" style={{ borderRadius: 6 }}>
          <div className="px-6 sm:px-8 py-8 sm:py-10">
            <p className="text-sm mb-4" style={{ color: "#6B7280", letterSpacing: ".18em" }}>KVKK</p>
            <h2 className="text-2xl font-semibold mb-6" style={{ color: "#0A2342" }}>
              Aydınlatma Metni
            </h2>

            <div className="prose max-w-none" style={{ color: "#374151" }}>
              <p className="mb-4 text-[15px] leading-7">
                DMFinans olarak kişisel verilerinizin güvenliği ve gizliliğini önemsiyoruz. Bu
                aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında
                kişisel verilerinizin işlenme amaçlarını, hukuki sebeplerini, toplanma yöntemlerini ve
                haklarınızı açıklamak amacıyla hazırlanmıştır.
              </p>
              <h3 className="text-lg font-semibold mt-6 mb-2" style={{ color: "#1F2937" }}>İşleme Amaçları</h3>
              <ul className="list-disc pl-5 mb-4 text-[15px] leading-7">
                <li>Hizmetlerimizi sunmak ve geliştirmek</li>
                <li>Müşteri ilişkileri yönetimi ve iletişim</li>
                <li>Yasal yükümlülüklerin yerine getirilmesi</li>
              </ul>
              <h3 className="text-lg font-semibold mt-6 mb-2" style={{ color: "#1F2937" }}>Haklarınız</h3>
              <p className="mb-4 text-[15px] leading-7">
                KVKK kapsamında; kişisel verilerinize erişme, düzeltme, silme, işlemenin sınırlandırılması ve itiraz
                etme gibi haklara sahipsiniz. Talepleriniz için bizimle iletişime geçebilirsiniz: <a href="mailto:info@dmfinans.com.tr" className="underline">info@dmfinans.com.tr</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}



