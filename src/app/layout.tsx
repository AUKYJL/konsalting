import type { Metadata } from "next";
import { Bebas_Neue, Rubik } from "next/font/google";
import localFont from "next/font/local";
import Head from "next/head";

import "./globals.css";

const RubikMonoOne = Rubik({
  variable: "--font-rubik-mono-one",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const BebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

const PTRootUI = localFont({
  variable: "--font-pt-root-ui",
  src: [
    {
      path: "./fonts/PTRootUI/regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/PTRootUI/medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/PTRootUI/bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body
        className={`${PTRootUI.variable} ${RubikMonoOne.variable} ${BebasNeue.variable} font-ptr antialiased`}
      >
        <div className="min-h-screen overflow-hidden">{children}</div>
      </body>
    </html>
  );
}
