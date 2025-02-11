import { ProductProvider } from "../context/ProductContext";
import { CartProvider } from "../context/CartContext";
import "../lib/fontAwesome";
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <CartProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <ProductProvider>{children}</ProductProvider>
          </Suspense>
          <Toaster position="bottom-right" />
        </CartProvider>
      </body>
    </html>
  );
}
