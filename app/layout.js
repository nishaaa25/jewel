import { Cormorant_Garamond, Open_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const garamond = Cormorant_Garamond({
  variable: "--font-garamond",
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${garamond.variable} ${openSans.variable} w-screen min-h-screen relative antialiased`}
      >
        <CustomCursor/>
        {children}
      </body>
    </html>
  );
}
