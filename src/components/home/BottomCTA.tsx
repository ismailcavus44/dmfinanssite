import CTAButton from "@/components/ui/CTAButton";

export default function BottomCTA(){
  return (
    <section className="bg-primary-50">
      <div className="container mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <div className="font-semibold">Hazır mısınız?</div>
          <p className="text-gray-600">Ön görüşme randevunuzu hemen alın.</p>
        </div>
        <CTAButton href="/iletisim" label="Ücretsiz Ön Görüşme"/>
      </div>
    </section>
  );
}




