import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "TwoFoldd Creative",
  description: "TwoFoldd Creative - a web development agency based in Navi Mumbai.",
  icons: {
    icon: "/favicon-32x32.png",            
    shortcut: "/favicon-32x32.png",       
    apple: "/favicon-32x32.png",  
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
