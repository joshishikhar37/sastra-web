import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";


import React from "react";
import AdminNav from "@/components/adminNAV";

const poppins = Poppins({ subsets: ["latin"], weight: "200" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const imageUrl = "/image/BG.jpg";

  return (
    <html className="!scroll-smooth  md:scroll-auto">
      <head>
        <title>Sastra Admin</title>
      </head>
      <body className={poppins.className}>
        <div className=" flex ">
          <AdminNav />
          <div className="w-[100%]">
            <h1 className="bg-sky-900/90 flex justify-center pt-[8%] font-bold text-white text-3xl">
              ADMIN PANEL
            </h1>
            <main>{children}</main>
          </div>
        </div>
       
      </body>
    </html>
  );
}
