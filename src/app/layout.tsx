import type { Metadata } from "next";
import { Keania_One, Livvic } from "next/font/google";
import "./globals.css";
import "./styles/style.css";

const livvic_init = Livvic({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-livvic",
});

const keania_one_init = Keania_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-keania_one",
});

export const metadata: Metadata = {
  title: "Coin Guard",
  description: "Unlock the Future of Crypto Security with Coingaurd",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${livvic_init.variable} ${keania_one_init.variable}`}>
        <main className="livvic">{children}</main>
      </body>
    </html>
  );
}
