import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const garamond = Cormorant_Garamond({
  variable: "--font-garamond",
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${garamond.variable} w-screen max-w-screen min-h-screen relative antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
