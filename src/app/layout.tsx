import type { Metadata } from "next";
import "./globals.css";
import { ProductProvider } from "./context/ProductContext";

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
      <body>
        <ProductProvider>{children}</ProductProvider>
      </body>
    </html>
  );
}
