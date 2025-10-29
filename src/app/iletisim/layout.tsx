import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim | DMFinans",
  description: "DMFinans ile iletişime geçin. Finansal danışmanlık ve borç yönetimi hizmetleri için bizimle iletişime geçin.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}