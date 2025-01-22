import Link from "next/link";
import Image from "next/image";

export default function CartSec() {
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
            <div className="flex gap-6">
              <Image width={180} height={90} alt="gear" src="/cart1.jpeg" />
              <div className="flex justify-between w-full flex-col md:flex-row">
                <div className="flex flex-col  justify-between">
                  <h1>Nike Dri-FIT ADV TechKnit Ultra</h1>
                  <h1 className="text-[#757575]">
                    Men's Short-Sleeve Running Top
                  </h1>
                  <h1 className="text-[#757575]">Ashen Slate/Cobalt Bliss</h1>
                  <div className="text-[#757575] flex gap-14">
                    <h2>Size L</h2>
                    <h2>Quantity 1</h2>
                  </div>
                  <div className="flex gap-4">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.294 4.64064C18.618 4.64064 19.862 5.15664 20.798 6.09164C21.7262 7.02156 22.2475 8.28176 22.2475 9.59564C22.2475 10.9095 21.7262 12.1697 20.798 13.0996L12.5 21.3986L4.20096 13.0996C3.27307 12.1698 2.75195 10.9098 2.75195 9.59614C2.75195 8.2825 3.27307 7.02252 4.20096 6.09264C4.65999 5.63094 5.20604 5.26488 5.80751 5.01564C6.40897 4.7664 7.0539 4.63894 7.70496 4.64064C9.02896 4.64064 10.273 5.15664 11.209 6.09164L11.969 6.85164L12.5 7.38264L13.03 6.85164L13.79 6.09164C14.2492 5.63026 14.7953 5.26446 15.3967 5.01541C15.9982 4.76636 16.643 4.63898 17.294 4.64064Z"
                        stroke="#111111"
                        stroke-width="1.5"
                      />
                    </svg>
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.75 8.39062V20.3906M10.25 8.39062V20.3906M5.75 6.89062V20.3906C5.75 21.6306 6.76 22.6406 8 22.6406H17C18.24 22.6406 19.25 21.6306 19.25 20.3906V6.14062M19.25 6.14062H22M19.25 6.14062H21.5M9.5 3.14062H14.75C15.58 3.14062 16.25 3.81063 16.25 4.64062C16.25 5.47062 15.58 6.14062 14.75 6.14062H3.5"
                        stroke="#111111"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                      />
                    </svg>
                  </div>
                </div>
                <h3>MRP: ₹ 3 895.00</h3>
              </div>
            </div>
            <div className="flex gap-6">
              <Image width={180} height={90} alt="gear" src="/cart1.jpeg" />
              <div className="flex justify-between w-full flex-col md:flex-row">
                <div className="flex flex-col  justify-between">
                  <h1>Nike Dri-FIT ADV TechKnit Ultra</h1>
                  <h1 className="text-[#757575]">
                    Men's Short-Sleeve Running Top
                  </h1>
                  <h1 className="text-[#757575]">Ashen Slate/Cobalt Bliss</h1>
                  <div className="text-[#757575] flex gap-14">
                    <h2>Size L</h2>
                    <h2>Quantity 1</h2>
                  </div>
                  <div className="flex gap-4">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.294 4.64064C18.618 4.64064 19.862 5.15664 20.798 6.09164C21.7262 7.02156 22.2475 8.28176 22.2475 9.59564C22.2475 10.9095 21.7262 12.1697 20.798 13.0996L12.5 21.3986L4.20096 13.0996C3.27307 12.1698 2.75195 10.9098 2.75195 9.59614C2.75195 8.2825 3.27307 7.02252 4.20096 6.09264C4.65999 5.63094 5.20604 5.26488 5.80751 5.01564C6.40897 4.7664 7.0539 4.63894 7.70496 4.64064C9.02896 4.64064 10.273 5.15664 11.209 6.09164L11.969 6.85164L12.5 7.38264L13.03 6.85164L13.79 6.09164C14.2492 5.63026 14.7953 5.26446 15.3967 5.01541C15.9982 4.76636 16.643 4.63898 17.294 4.64064Z"
                        stroke="#111111"
                        stroke-width="1.5"
                      />
                    </svg>
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.75 8.39062V20.3906M10.25 8.39062V20.3906M5.75 6.89062V20.3906C5.75 21.6306 6.76 22.6406 8 22.6406H17C18.24 22.6406 19.25 21.6306 19.25 20.3906V6.14062M19.25 6.14062H22M19.25 6.14062H21.5M9.5 3.14062H14.75C15.58 3.14062 16.25 3.81063 16.25 4.64062C16.25 5.47062 15.58 6.14062 14.75 6.14062H3.5"
                        stroke="#111111"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                      />
                    </svg>
                  </div>
                </div>
                <h3>MRP: ₹ 3 895.00</h3>
              </div>
            </div>
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
