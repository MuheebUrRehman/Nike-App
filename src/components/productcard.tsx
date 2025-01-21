import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { products } from "@/app/type";
import Link from "next/link";

export default function ProductCard(data: products) {
  const img = urlFor(data.image).format("webp").url();
  return (
    <div>
      <Image
        src={img}
        width={592}
        height={592}
        alt="product1"
        quality={75}
      />
      <div>
        <h3 className="font-medium text-[15px] text-[#9E3500]">Just In</h3>
        <Link
          href={`/productdetiel/${data.slug}`}
          className="font-medium text-[15px] "
        >
          {data.productName}
        </Link>
        <h3 className="text-[#757575] text-[15px] ">{data.category}</h3>
        <h3 className="text-[#757575] text-[15px] ">{data.colors}</h3>
        <h3 className="font-medium text-[1F5px] ">MRP : ₹ {data.price}</h3>
      </div>
    </div>
  );
}
