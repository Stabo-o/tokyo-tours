import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tokyo Tours", // 👈 your custom title (shows in browser tab)
  description: "Discover Tokyo through my guided tours.",

  icons: {
    icon: "/favicon.ico", // 👈 place your custom favicon.ico inside /public
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // optional, for iOS devices
  },

  openGraph: {
    title: "Tokyo Tours",
    description: "Discover Tokyo through my guided tours.",
    url: "https://notasalaryman.com", // 👈 replace with your domain
    siteName: "Tokyo Tours",
    images: [
      {
        url: "/og-image.jpg", // 👈 put your image inside /public (1200x630px recommended)
        width: 1200,
        height: 630,
        alt: "Tokyo Tours preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tokyo Tours",
    description: "Discover Tokyo through my guided tours.",
    images: ["/og-image.jpg"], // 👈 same as above
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
