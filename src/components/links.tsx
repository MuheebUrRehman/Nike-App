/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function Links() {
  return (
    <section className="w-screen">
      <div className="w-[70%] mx-auto grid grid-cols-2 gap-4 md:grid-cols-4 my-12">
        <div className="font-medium text-[15px] flex flex-col gap-3">
          <h3>Icons</h3>
          <Link href="" className="text-[#757575] font-medium text-[15px]">
            Air Force 1
          </Link>
          <Link href="" className="text-[#757575] font-medium text-[15px]">
            Huarache
          </Link>
          <Link href="" className="text-[#757575] font-medium text-[15px]">
            Air Max 90
          </Link>
          <Link href="" className="text-[#757575] font-medium text-[15px]">
            Air Max 95
          </Link>
        </div>
        <div className="font-medium text-[15px] flex flex-col gap-3">
          <h3>Shoes</h3>
          <h4 className="text-[#757575] font-medium text-[15px]">All Shoes</h4>
          <h4 className="text-[#757575] font-medium text-[15px]">
            Custom Shoes
          </h4>
          <h4 className="text-[#757575] font-medium text-[15px]">
            Jordan Shoes
          </h4>
          <h4 className="text-[#757575] font-medium text-[15px]">
            Running Shoes
          </h4>
        </div>
        <div className="font-medium text-[15px] flex flex-col gap-3">
          <h3>Clothing</h3>
          <h4 className="text-[#757575] font-medium text-[15px]">
            All Clothing
          </h4>
          <h4 className="text-[#757575] font-medium text-[15px]">
            Modest Wear
          </h4>
          <h4 className="text-[#757575] font-medium text-[15px]">
            Hoodies & Pullovers
          </h4>
          <h4 className="text-[#757575] font-medium text-[15px]">
            Shirts & Tops
          </h4>
        </div>
        <div className="font-medium text-[15px] flex flex-col gap-3">
          <h3>Kids'</h3>
          <h4 className="text-[#757575] font-medium text-[15px]">
            Infant & Toddler Shoes
          </h4>
          <h4 className="text-[#757575] font-medium text-[15px]">
            Kids' Shoes
          </h4>
          <h4 className="text-[#757575] font-medium text-[15px]">
            Kids' Jordan Shoes
          </h4>
          <h4 className="text-[#757575] font-medium text-[15px]">
            Kids' Basketball Shoes
          </h4>
        </div>
      </div>
    </section>
  );
}
