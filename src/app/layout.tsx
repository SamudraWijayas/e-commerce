import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://store.jokindes.com"), // ganti kalau sudah deploy

  title: {
    default: "NdesStore - Belanja Online Terpercaya",
    template: "%s | NdesStore",
  },

  description:
    "NdesStore menyediakan berbagai produk fashion seperti jersey bola, pakaian, sepatu, dan tas dengan kualitas terbaik dan harga terjangkau.",

  keywords: [
    "ndesstore",
    "jersey bola",
    "fashion pria",
    "fashion wanita",
    "sepatu",
    "tas",
    "toko online",
  ],

  authors: [{ name: "NdesStore" }],

  openGraph: {
    title: "NdesStore - Belanja Online Terpercaya",
    description:
      "Temukan berbagai produk fashion terbaik di NdesStore dengan harga bersaing dan kualitas premium.",
    url: "https://store.jokindes.com",
    siteName: "NdesStore",
    images: [
      {
        url: "/opengraph-image.png", // pastikan ada di public
        width: 1200,
        height: 630,
        alt: "NdesStore Banner",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "NdesStore - Belanja Online Terpercaya",
    description:
      "Belanja jersey, pakaian, sepatu, dan tas terbaik hanya di NdesStore.",
    images: ["/opengraph-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
