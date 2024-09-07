import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/ui/components/navbar";
import { Flowbite, ThemeModeScript } from "flowbite-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recycle!",
  description: "Helps you recycle with AI support",
  formatDetection: {
    email: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body className={inter.className}>
        <Flowbite>
          <div className="min-h-screen">
            <Header />
            <main className="flex justify-center">
              <div className="w-100 m-3 md:w-2/4 md:mt-14 xl:w-1/4">
                {children}
              </div>
            </main>
          </div>
        </Flowbite>
      </body>
    </html>
  );
}
