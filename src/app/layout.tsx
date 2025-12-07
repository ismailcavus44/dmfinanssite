import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhiteLogo from "@/components/layout/WhiteLogo";
import MobileCTABar from "@/components/layout/MobileCTABar";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dmfinans.com.tr"),
  title: { default: "DMFinans | Finansal Danışmanlık", template: "%s | DMFinans" },
  description: "Kredi/borç yönetimi, icra dosyası süreçleri ve finansal yeniden yapılandırma için profesyonel danışmanlık.",
  openGraph: {
    type: "website",
    title: "DMFinans | Finansal Danışmanlık",
    description: "Kredi/borç yönetimi, icra dosyası süreçleri ve finansal yeniden yapılandırma.",
    url: "https://www.dmfinans.com.tr",
    siteName: "DMFinans"
  },
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={manrope.variable}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <WhiteLogo />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCTABar />
      </body>
    </html>
  );
}
