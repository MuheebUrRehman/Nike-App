import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { products } from "@/app/type";
import Link from "next/link";

export default function BestProductCard(data: products) {
  const img = urlFor(data.image).format("webp").url();
  
  return (
    <div>
      <Image
        width={441}
        height={441}
        src={img}
        alt=""
        quality={75}
      />
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h3 className="font-medium text-[15px]">{data.productName}</h3>
          <h5 className="text-[#757575] text-[15px]">{data.category}</h5>
        </div>
        <h3 className=" font-medium text-[15px]">₹ {data.price}</h3>
      </div>
    </div>
  );
}
