import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Toaster } from 'react-hot-toast';
import { Providers } from '../components/providers';

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Secure Dash",
    template: "%s | Secure Dash",
  },
  description: "Secure and professional dashboard for account management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} antialiased`}>
        <Providers>{children}</Providers>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
