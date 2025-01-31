"use client";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faTrash as solidTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function CartSec() {
  const { cart, removeFromCart } = useCart();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Set to true after mounting to avoid hydration issues
  }, []);

  if (!isMounted) return null; // Prevent rendering until mounted

  return (
    <section className="w-screen">
      <div className="w-[90%] mx-auto my-10 flex justify-between">
        <div className="w-[70%]">
          <h1 className="text-2xl my-4">Bag</h1>
          <div className="flex flex-col gap-10 my-6">
            {cart.length > 0 ? (
              cart.map((item) => (
                <div key={item.productName} className="flex gap-6">
                  <Image width={180} height={90} alt={item.productName} src={item.image} />
                  <div className="flex justify-between w-full flex-col md:flex-row">
                    <div className="flex flex-col justify-between">
                      <h1>{item.productName}</h1>
                      <h1 className="text-[#757575]">{item.description}</h1>
                      <div className="text-[#757575] flex gap-14">
                        <h2>Quantity: {item.quantity}</h2>
                      </div>
                      <div className="flex gap-4">
                        <FontAwesomeIcon icon={regularHeart} className="text-black text-2xl cursor-pointer" />
                        <FontAwesomeIcon
                          icon={solidTrash}
                          className="text-black text-2xl cursor-pointer"
                          onClick={() => removeFromCart(item.productName)}
                        />
                      </div>
                    </div>
                    <h3>MRP: ₹ {item.price * item.quantity}</h3>
                  </div>
                </div>
              ))
            ) : (
              <h2>Your cart is empty 🛒</h2>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
