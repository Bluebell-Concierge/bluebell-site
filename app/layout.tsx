import type { Metadata } from "next";
import { Noto_Serif, Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";

const poppinsSans = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const playfairSerif = Noto_Serif({
  variable: "--font-playfair-serif",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bluebell Concierge",
  description: "Get your time back with premium Concierge services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Bluebell Concierge" />
      </head>
      <body
        className={`${playfairSerif.variable} ${poppinsSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
