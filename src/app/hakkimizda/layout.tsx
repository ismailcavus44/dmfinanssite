import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda | DMFinans",
  description: "DMFinans hakkında bilgi alın. Finansal danışmanlık ve borç yönetimi alanında uzman ekibimizle tanışın.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

