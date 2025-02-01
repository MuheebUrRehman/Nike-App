"use client";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faTrash as solidTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CartSec() {
  const [isMounted, setIsMounted] = useState(false);
  const { cart, removeFromCart } = useCart();

  useEffect(() => {
    setIsMounted(true); // Set to true after mounting to avoid hydration issues
  }, []);

  if (!isMounted) return null; // Prevent rendering until mounted

  return (
    <section className="w-screen">
      <div className="w-[90%] mx-auto my-10 flex justify-between">
        <div className="w-[70%]">
          <div className="bg-[#F7F7F7] p-5 flex gap-1 flex-col">
            <h1 className="text-sm">Free Delivery</h1>
            <div className="text-xs flex gap-4">
              <h3>Applies to orders of ₹ 14 000.00 or more.</h3>
              <Link href={""} className="underline ">
                View details
              </Link>
            </div>
          </div>
          <h1 className="text-2xl my-4">Bag</h1>
          <div className="flex flex-col gap-10 my-6">
            {cart.length > 0 ? (
              cart.map((item) => (
                <div key={item.productName} className="flex gap-6">
                  <Image
                    width={180}
                    height={90}
                    alt={item.productName}
                    src={item.image}
                  />
                  <div className="flex justify-between w-full flex-col md:flex-row">
                    <div className="flex flex-col justify-between">
                      <h1>{item.productName}</h1>
                      <h1 className="text-[#757575]">{item.description}</h1>
                      <div className="text-[#757575] flex gap-14">
                        <h2>Quantity: {item.quantity}</h2>
                      </div>
                      <div className="flex gap-4">
                        <FontAwesomeIcon
                          icon={regularHeart}
                          className="text-black text-2xl cursor-pointer"
                        />
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
        <div className="w-[28%] flex flex-col gap-4">
          <h1 className="text-2xl">Summary</h1>
          <div className="flex justify-between">
            <h3>Subtotal</h3>
            <h3>₹ 20 890.00</h3>
          </div>
          <div className="flex justify-between">
            <h3>Estimated Delivery & Handling</h3>
            <h3>Free</h3>
          </div>
          <div className="flex justify-between py-4 border-y-2">
            <h3>Total</h3>
            <h3>₹ 20 890.00</h3>
          </div>
          <button
            aria-label="Member Checkout"
            className="px-5 py-5 bg-[#111111] rounded-[30px] text-white"
          >
            Member Checkout
          </button>
        </div>
      </div>
    </section>
  );
}
