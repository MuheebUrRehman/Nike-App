"use client";
import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

export interface Product {
  image: string;
  productName: string;
  description: string;
  price: number;
  quantity: number;
  colors: string[];
  status: string;
}

export interface CartContextType {
  cart: Product[];
  addToCart: (product: Omit<Product, "quantity">) => void;
  removeFromCart: (productName: string) => void;
  increaseQuantity: (productName: string) => void;
  decreaseQuantity: (productName: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Product[]>(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  });

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Error saving cart to localStorage:", error);
    }
  }, [cart]);

  const addToCart = (product: Omit<Product, "quantity">) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.productName === product.productName
      );
      if (existingProductIndex !== -1) {
        toast.success("Quantity increased! 📈");
      } else {
        toast.success("Item added to cart! 🛍️");
      }

      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          quantity: updatedCart[existingProductIndex].quantity + 1,
        };
        return updatedCart;
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productName: string) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.productName !== productName)
    );
  };

  const increaseQuantity = (productName: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.productName === productName
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (productName: string) => {
    setCart((prevCart) =>
      prevCart.reduce((acc, item) => {
        if (item.productName === productName) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, [] as Product[])
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
