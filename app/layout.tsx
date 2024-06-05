import '@radix-ui/themes/styles.css';
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./navbar";
import { Theme, ThemePanel } from '@radix-ui/themes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TrackPro",
  description: "An issue/bug tracking app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme accentColor="blue" radius="small">
          <Navbar />
            <main className="p-5">
                {children}
            </main>
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
