import { ProductProvider } from "../context/ProductContext";
import { CartProvider } from "../context/CartContext";
import "../lib/fontAwesome";
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

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
          <ProductProvider>{children}</ProductProvider>
          <Toaster position="bottom-right" />
        </CartProvider>
      </body>
    </html>
  );
}
