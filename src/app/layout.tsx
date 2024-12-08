import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nike-App",
  description: "shop whatever you want",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
