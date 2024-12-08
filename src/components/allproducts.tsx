import Image from "next/image";
import Link from "next/link";
export default function AllProducts() {
  return (
    <section className="w-screen">
      <div className="w-[95%] mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="font-medium text-2xl">New (500)</h1>
          <div className="flex gap-5">
            <div className="flex items-center gap-1">
              <h3>Hide Filters</h3>
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_1552)">
                  <path
                    d="M21.5312 8.25H10.5312M5.28125 8.25H3.53125"
                    stroke="#111111"
                    stroke-width="1.5"
                  />
                  <path
                    d="M8.03125 6C7.73578 6 7.44319 6.0582 7.17021 6.17127C6.89723 6.28434 6.64919 6.45008 6.44026 6.65901C6.23133 6.86794 6.06559 7.11598 5.95252 7.38896C5.83945 7.66194 5.78125 7.95453 5.78125 8.25C5.78125 8.54547 5.83945 8.83806 5.95252 9.11104C6.06559 9.38402 6.23133 9.63206 6.44026 9.84099C6.64919 10.0499 6.89723 10.2157 7.17021 10.3287C7.44319 10.4418 7.73578 10.5 8.03125 10.5C8.62799 10.5 9.20028 10.2629 9.62224 9.84099C10.0442 9.41903 10.2812 8.84674 10.2812 8.25C10.2812 7.65326 10.0442 7.08097 9.62224 6.65901C9.20028 6.23705 8.62799 6 8.03125 6Z"
                    stroke="#111111"
                    stroke-width="1.5"
                  />
                  <path
                    d="M3.53125 15.75H14.2812M19.2812 15.75H21.5312"
                    stroke="#111111"
                    stroke-width="1.5"
                  />
                  <path
                    d="M17.0312 13.5C16.4345 13.5 15.8622 13.7371 15.4403 14.159C15.0183 14.581 14.7812 15.1533 14.7812 15.75C14.7812 16.3467 15.0183 16.919 15.4403 17.341C15.8622 17.7629 16.4345 18 17.0312 18C17.628 18 18.2003 17.7629 18.6222 17.341C19.0442 16.919 19.2812 16.3467 19.2812 15.75C19.2812 15.1533 19.0442 14.581 18.6222 14.159C18.2003 13.7371 17.628 13.5 17.0312 13.5Z"
                    stroke="#111111"
                    stroke-width="1.5"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_1552">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.53125)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex items-center gap-1">
              <h3>Sort By</h3>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.3744 3.76303C1.77168 3.37938 2.40476 3.39042 2.78841 3.7877L8.34569 9.54243L6.90699 10.9318L1.34971 5.17703C0.966061 4.77975 0.977121 4.14667 1.3744 3.76303Z"
                  fill="black"
                />
                <path
                  d="M5.6543 9.54199L11.2116 3.78726C11.5952 3.38998 12.2283 3.37894 12.6256 3.76258C13.0229 4.14623 13.0339 4.77931 12.6503 5.17659L7.09299 10.9313L5.6543 9.54199Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex ">
          <aside className="w-[25%] hidden md:block">
            <div>
              <div className="flex flex-col  gap-2 py-10">
                <h3 className="">Shoes</h3>
                <h3>Sports Bras</h3>
                <h3>Tops & T-Shirts</h3>
                <h3>Hoodies & Sweatshirts</h3>
                <h3>Jackets</h3>
                <h3>Trousers & Tights</h3>
                <h3>Shorts</h3>
                <h3>Tracksuits</h3>
                <h3>Jumpsuits & Rompers</h3>
                <h3>Skirts & Dresses</h3>
                <h3>Socks</h3>
                <h3>Accessories & Equipment</h3>
              </div>

              <div className="py-5 border-t-[1px]">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Gender</h3>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5299 10.9554C1.13261 10.5718 1.12156 9.93868 1.5052 9.5414L7.06247 3.78668L8.50116 5.17602L2.9439 10.9307C2.56025 11.328 1.92718 11.3391 1.5299 10.9554Z"
                      fill="black"
                    />
                    <path
                      d="M7.25 3.78711L12.8073 9.54183C13.1909 9.93911 13.1799 10.5722 12.7826 10.9558C12.3853 11.3395 11.7522 11.3284 11.3686 10.9312L5.8113 5.17644L7.25 3.78711Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="flex gap-1 mt-3 ">
                  <input type="checkbox" name="" id="" placeholder="" />
                  <label htmlFor="">Men</label>
                </div>
                <div className="flex gap-1 ">
                  <input type="checkbox" name="" id="" placeholder="" />
                  <label htmlFor="">Women</label>
                </div>
                <div className="flex gap-1 ">
                  <input type="checkbox" name="" id="" placeholder="" />
                  <label htmlFor="">Unisex</label>
                </div>
              </div>

              <div className="py-5 border-t-[1px]">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Kids</h3>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5299 10.9554C1.13261 10.5718 1.12156 9.93868 1.5052 9.5414L7.06247 3.78668L8.50116 5.17602L2.9439 10.9307C2.56025 11.328 1.92718 11.3391 1.5299 10.9554Z"
                      fill="black"
                    />
                    <path
                      d="M7.25 3.78711L12.8073 9.54183C13.1909 9.93911 13.1799 10.5722 12.7826 10.9558C12.3853 11.3395 11.7522 11.3284 11.3686 10.9312L5.8113 5.17644L7.25 3.78711Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="flex gap-1 mt-3 ">
                  <input type="checkbox" name="" id="" placeholder="" />
                  <label htmlFor="">Boys</label>
                </div>
                <div className="flex gap-1 ">
                  <input type="checkbox" name="" id="" placeholder="" />
                  <label htmlFor="">Girls</label>
                </div>
              </div>
              <div className="py-5 border-t-[1px]">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Shop By Price</h3>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5299 10.9554C1.13261 10.5718 1.12156 9.93868 1.5052 9.5414L7.06247 3.78668L8.50116 5.17602L2.9439 10.9307C2.56025 11.328 1.92718 11.3391 1.5299 10.9554Z"
                      fill="black"
                    />
                    <path
                      d="M7.25 3.78711L12.8073 9.54183C13.1909 9.93911 13.1799 10.5722 12.7826 10.9558C12.3853 11.3395 11.7522 11.3284 11.3686 10.9312L5.8113 5.17644L7.25 3.78711Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="flex gap-1 mt-3 ">
                  <input type="checkbox" name="" id="" placeholder="" />
                  <label htmlFor="">Under ₹ 2 500.00</label>
                </div>
                <div className="flex gap-1 ">
                  <input type="checkbox" name="" id="" placeholder="" />
                  <label htmlFor="">₹ 2 501.00 - ₹</label>
                </div>
              </div>
            </div>
          </aside>
          <div className="grid grid-cols-2 md:grid-cols-3 w-[100%] place-content-center gap-3 ml-9 mt-6 border-b-2 border-[#E5E5E5] pb-28">
            <div>
              <Image
                src="/product1.png"
                width={592}
                height={592}
                alt="product1"
                layout="responsive"
              />

              <div>
                <h3 className="font-medium text-[15px] text-[#9E3500]">
                  Just In
                </h3>
                <h3 className="font-medium text-[15px] ">
                  Nike Air Force 1 Mid '07
                </h3>
                <h3 className="text-[#757575] text-[15px] ">Men's Shoes</h3>
                <h3 className="text-[#757575] text-[15px] ">1 Colour</h3>
                <h3 className="font-medium text-[15px] ">MRP : ₹ 10 795.00</h3>
              </div>
            </div>
            <div>
              <Image
                src="/product2.png"
                width={592}
                height={592}
                alt="product1"
                layout="responsive"
              />

              <div>
                <h3 className="font-medium text-[15px] text-[#9E3500]">
                  Just In
                </h3>
                <h3 className="font-medium text-[15px] ">
                  Nike Court Vision Low Next Nature
                </h3>
                <h3 className="text-[#757575] text-[15px] ">Men's Shoes</h3>
                <h3 className="text-[#757575] text-[15px] ">1 Colour</h3>
                <h3 className="font-medium text-[15px] ">MRP : ₹ 4 995.00</h3>
              </div>
            </div>
            <div>
              <Image
                src="/product3.png"
                width={592}
                height={592}
                alt="product1"
                layout="responsive"
              />

              <div>
                <h3 className="font-medium text-[15px] text-[#9E3500]">
                  Just In
                </h3>
                <Link
                  href="/productdetail"
                  className="font-medium text-[15px] "
                >
                  Nike Air Force 1 PLT.AF.ORM
                </Link>
                <h3 className="text-[#757575] text-[15px] ">Men's Shoes</h3>
                <h3 className="text-[#757575] text-[15px] ">1 Colour</h3>
                <h3 className="font-medium text-[15px] ">MRP : ₹ 8 695.00</h3>
              </div>
            </div>
            <div>
              <Image
                src="/product1.png"
                width={592}
                height={592}
                alt="product1"
                layout="responsive"
              />

              <div>
                <h3 className="font-medium text-[15px] text-[#9E3500]">
                  Just In
                </h3>
                <h3 className="font-medium text-[15px] ">
                  Nike Air Force 1 Mid '07
                </h3>
                <h3 className="text-[#757575] text-[15px] ">Men's Shoes</h3>
                <h3 className="text-[#757575] text-[15px] ">1 Colour</h3>
                <h3 className="font-medium text-[15px] ">MRP : ₹ 10 795.00</h3>
              </div>
            </div>
            <div>
              <Image
                src="/product1.png"
                width={592}
                height={592}
                alt="product1"
                layout="responsive"
              />

              <div>
                <h3 className="font-medium text-[15px] text-[#9E3500]">
                  Just In
                </h3>
                <h3 className="font-medium text-[15px] ">
                  Nike Air Force 1 Mid '07
                </h3>
                <h3 className="text-[#757575] text-[15px] ">Men's Shoes</h3>
                <h3 className="text-[#757575] text-[15px] ">1 Colour</h3>
                <h3 className="font-medium text-[15px] ">MRP : ₹ 10 795.00</h3>
              </div>
            </div>
            <div>
              <Image
                src="/product1.png"
                width={592}
                height={592}
                alt="product1"
                layout="responsive"
              />

              <div>
                <h3 className="font-medium text-[15px] text-[#9E3500]">
                  Just In
                </h3>
                <Link
                  href="/productdetail"
                  className="font-medium text-[15px] "
                >
                  Nike Air Force 1 Mid '07
                </Link>
                <h3 className="text-[#757575] text-[15px] ">Men's Shoes</h3>
                <h3 className="text-[#757575] text-[15px] ">1 Colour</h3>
                <h3 className="font-medium text-[15px] ">MRP : ₹ 10 795.00</h3>
              </div>
            </div>
            <div>
              <Image
                src="/product1.png"
                width={592}
                height={592}
                alt="product1"
                layout="responsive"
              />

              <div>
                <h3 className="font-medium text-[15px] text-[#9E3500]">
                  Just In
                </h3>
                <h3 className="font-medium text-[15px] ">
                  Nike Air Force 1 Mid '07
                </h3>
                <h3 className="text-[#757575] text-[15px] ">Men's Shoes</h3>
                <h3 className="text-[#757575] text-[15px] ">1 Colour</h3>
                <h3 className="font-medium text-[15px] ">MRP : ₹ 10 795.00</h3>
              </div>
            </div>
            <div>
              <Image
                src="/product1.png"
                width={592}
                height={592}
                alt="product1"
                layout="responsive"
              />

              <div>
                <h3 className="font-medium text-[15px] text-[#9E3500]">
                  Just In
                </h3>
                <h3 className="font-medium text-[15px] ">
                  Nike Air Force 1 Mid '07
                </h3>
                <h3 className="text-[#757575] text-[15px] ">Men's Shoes</h3>
                <h3 className="text-[#757575] text-[15px] ">1 Colour</h3>
                <h3 className="font-medium text-[15px] ">MRP : ₹ 10 795.00</h3>
              </div>
            </div>
            <div>
              <Image
                src="/product1.png"
                width={592}
                height={592}
                alt="product1"
                layout="responsive"
              />

              <div>
                <h3 className="font-medium text-[15px] text-[#9E3500]">
                  Just In
                </h3>
                <Link
                  href="/productdetail"
                  className="font-medium text-[15px] "
                >
                  Nike Air Force 1 Mid '07
                </Link>
                <h3 className="text-[#757575] text-[15px] ">Men's Shoes</h3>
                <h3 className="text-[#757575] text-[15px] ">1 Colour</h3>
                <h3 className="font-medium text-[15px] ">MRP : ₹ 10 795.00</h3>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[78%] flex flex-col ml-auto my-10">
          <h2 className="font-medium text-xl">Related Categories</h2>
          <div className="flex gap-2 mt-6 flex-wrap ">
            <button className="px-5 py-2 rounded-3xl border-[#CCCCCC] border-[0.5px] text-xs">
              Best Selling Products
            </button>
            <button className="px-5 py-2 rounded-3xl border-[#CCCCCC] border-[0.5px] text-xs">
              Best Shoes
            </button>
            <button className="px-5 py-2 rounded-3xl border-[#CCCCCC] border-[0.5px] text-xs">
              New Basketball Shoes
            </button>
            <button className="px-5 py-2 rounded-3xl border-[#CCCCCC] border-[0.5px] text-xs">
              New Football Shoes
            </button>
            <button className="w-[139px] h-[34px] rounded-3xl border-[#CCCCCC] border-[0.5px] text-xs">
              New Men's Shoes
            </button>
            <button className="px-5 py-2 rounded-3xl border-[#CCCCCC] border-[0.5px] text-xs">
              New Running Shoes
            </button>
            <button className="px-5 py-2 rounded-[20px] border-[#CCCCCC] border-[0.5px] text-xs">
              Best Men's Shoes
            </button>
            <button className="px-5 py-2 rounded-3xl border-[#CCCCCC] border-[0.5px] text-xs">
              New Jordan Shoes
            </button>
            <button className="px-5 py-2 rounded-3xl border-[#CCCCCC] border-[0.5px] text-xs">
              Best Women's Shoes
            </button>
            <button className="px-5 py-2 rounded-3xl border-[#CCCCCC] border-[0.5px] text-xs">
              Best Training & Gym
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
