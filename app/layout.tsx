import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../src/index.css";
import { ClientProviders } from "./client-providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Zero to One Builds",
  description: "Building innovative solutions from zero to one",
  openGraph: {
    title: "Portfolio - Zero to One Builds",
    description: "Building innovative solutions from zero to one",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vishag T – AI Product Manager | Zero to One Builds",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Zero to One Builds",
    description: "Building innovative solutions from zero to one",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
