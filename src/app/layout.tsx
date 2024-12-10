import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'glightbox/dist/css/glightbox.css';

import TopBar from "./components/TopBar";


import type { Metadata } from "next";
import {Jost} from 'next/font/google';
import "./globals.css";
import Header from './components/Header';

const jost = Jost({
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-Jost",
  style: 'normal',
  weight: ['400','500','600','700','800','900'],
});


export const metadata: Metadata = {
  title: "SKIT Food Walk",
  description: "Invitation to the SKIT Food Walk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>
      <TopBar/>
      <Header />
        {children}
      </body>
      {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" 
      crossOrigin="anonymous"></script> */}
    </html>
  );
}
