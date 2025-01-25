import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import NavBar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const dm_sans = DM_Sans({
  variable: "--font-DM_Sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
const dm_serif = DM_Serif_Display({
  variable: "--font-DM_Serif",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Travel Travel & Tourism",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dm_sans.variable} ${dm_serif.variable} antialiased `}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
