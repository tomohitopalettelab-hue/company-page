import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TransitionProvider from "./TransitionProvider";
import NavBar from "./NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Palette Lab";
const description = "Palette Lab | Branding, design, and digital experiences.";

export const metadata: Metadata = {
  title,
  description,
  icons: [{ rel: "icon", url: "/logoonly.png" }],
  openGraph: {
    title,
    description,
  },
  twitter: {
    card: "summary",
    title,
    description,
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
        <NavBar />
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
