import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meat_Coin",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <div className="h-15 md:h-22.5" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
