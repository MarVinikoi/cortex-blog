import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins, Roboto } from "@next/font/google";
import { ThemeProvider } from "@/components/themeProvider"
import "./globals.css";
import Nav from "./navbar";



const geistSans = localFont({
  src: "./assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const lilitafont = localFont({
  src: "./assets/fonts/LilitaOne-Regular.ttf",
  variable: "--font-lilita",
  weight: "100 900",
})

const kumarfont = localFont({
  src: "./assets/fonts/KumarOneOutline-Regular.ttf",
  variable: "--font-kumar",
  weight: "100 900",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['400', '700'],
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: "Cortex.",
  description: "Created by Marcos Vinícius.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={"light"}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-50 dark:bg-slate-950 dark:text-white`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          <Nav></Nav>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
