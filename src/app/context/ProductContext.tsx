"use client";
import { createContext, useContext, useState } from "react";

interface ProductContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <ProductContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProductContext() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
}
