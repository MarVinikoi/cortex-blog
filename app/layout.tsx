import type { Metadata } from "next";
import { ThemeProvider } from "@/components/themeProvider"
import "./globals.css";
import Nav from "../components/navbar";
import localFont from "next/font/local";
import {Poppins} from "next/font/google"

const geistMono = localFont({
    src: "./assets/fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
  });

const poppins = Poppins(
  {
    subsets: ['latin'],
    display: 'swap',
    weight: ['200', '300', '400', '500', '600', '700']
  }
)
  
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
	<html lang="en" className={"dark"} suppressHydrationWarning>
		<body
			className="antialiased bg-neutral-50 dark:bg-slate-950 dark:text-white"
		>
			<ThemeProvider attribute="class" enableSystem={true} defaultTheme="dark" disableTransitionOnChange>
			<Nav></Nav>
			{children}
			</ThemeProvider>
		</body>
	</html>
);
}
