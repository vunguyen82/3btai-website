import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Import Inter font
import "./globals.css";

const inter = Inter({ subsets: ["latin"] }); // Initialize Inter font

export const metadata: Metadata = {
  title: "3BTAI - Drive Demand. Boost Revenue. Optimize Costs.",
  description: "3BTAI is an Artificial Intelligence solutions provider that helps businesses of all sizes to grow, improve sales, and optimize operations.",
  icons: {
    icon: '/logo-square.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}