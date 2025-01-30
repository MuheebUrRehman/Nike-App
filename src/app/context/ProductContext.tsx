"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

interface ProductContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get initial query from URL
  const initialQuery = searchParams.get("search") || "";
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  useEffect(() => {
    // Sync URL with search query
    if (searchQuery.trim() !== "") {
      const params = new URLSearchParams();
      params.set("search", searchQuery);
      router.replace(`/products?${params.toString()}`);
    }
  }, [searchQuery, router]);

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
