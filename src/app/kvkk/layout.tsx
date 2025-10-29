import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KVKK",
  description: "DMFinans KVKK Aydınlatma Metni ve kişisel verilerin korunmasına ilişkin bilgilendirme.",
};

export default function KvkkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}



