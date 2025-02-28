"use client";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { products } from "@/app/type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function ProdSec(data: products) {
  const img = urlFor(data.image).format("webp").url();
  const { addToCart } = useCart();

  return (
    <section className="w-screen">
      <div className="flex md:flex-row justify-around flex-col items-center w-[95%] mx-auto mt-12 mb-52">
        <div className="w-[325px] h-[325px] md:w-[653px] md:h-[653px]">
          <Image src={img} width={653} height={653} alt={data.productName} />
        </div>
        <div className="flex flex-col gap-9 w-[80%] mt-10 md:w-[30%] md:m-0">
          <h1 className="text-5xl font-medium">{data.productName}</h1>
          <p>{data.description}</p>
          <h3 className="font-medium text-4xl">₹ {data.price}</h3>
          <button
            aria-label="Add To Cart"
            onClick={() => {
              addToCart({
                image: img,
                productName: data.productName,
                description: data.description,
                price: data.price,
                status: data.status,
                colors: data.colors,
              });
            }}
            className="px-5 py-2 rounded-3xl w-[50%] bg-black text-white flex justify-center items-center gap-2"
          >
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="text-white text-2xl"
            />
            Add To Cart
          </button>
        </div>
      </div>
    </section>
  );
}
