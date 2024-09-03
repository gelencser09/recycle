import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recycle!",
  description: "Helps you recycle with AI support",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>
          <div className="flex justify-center gap-3">
            <main className="mx-5 w-100 md:w-2/4 xl:w-1/4 min-h-screen flex flex-col justify-center gap-3">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
