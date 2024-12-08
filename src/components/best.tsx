import Image from "next/image";
export default function Best() {
  return (
    <section className="w-screen">
      <div className="w-[95%] mx-auto my-10">
        <div className="flex  justify-between items-center ">
          <h3 className="font-medium text-[22px]">Best of Air Max</h3>
          <div className="flex justify-center gap-3 items-center">
            <h4 className="font-medium text-[15px]">Shop</h4>
            <button className="w-12 h-12 bg-[#F5F5F5] rounded-[24px] flex justify-center items-center">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.509 18.9662L9.54199 12.0002L16.509 5.0332"
                  stroke="#CCCCCC"
                  stroke-width="1.5"
                />
              </svg>
            </button>
            <button className="w-12 h-12 bg-[#E5E5E5] rounded-[24px] flex justify-center items-center">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_84)">
                  <path
                    d="M8.83301 18.9662L15.799 12.0002L8.83301 5.0332"
                    stroke="#111111"
                    stroke-width="1.5"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_84">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.359375)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div>
            <img src="\best1.png" alt="" />
            <div className="flex justify-between">
              <div className="flex flex-col">
                <h3 className="font-medium text-[15px]">Nike Air Max Pulse</h3>
                <h5 className="text-[#757575] text-[15px]">Women's Shoes</h5>
              </div>
              <h3 className=" font-medium text-[15px]">₹ 13 995</h3>
            </div>
          </div>
          <div>
            <img src="\best2.png" alt="" />
            <div className="flex justify-between">
              <div className="flex flex-col">
                <h3 className="font-medium text-[15px]">Nike Air Max Pulse</h3>
                <h5 className="text-[#757575] text-[15px]">Men's Shoes</h5>
              </div>
              <h3 className=" font-medium text-[15px]">₹ 13 995</h3>
            </div>
          </div>
          <div>
            <Image
              src="/best3.png"
              width={441}
              height={441}
              alt="Picture of the author"
              layout="responsive"
            />
            
            <div className="flex justify-between">
              <div className="flex flex-col">
                <h3 className="font-medium text-[15px]">Nike Air Max 97 SE</h3>
                <h5 className="text-[#757575] text-[15px]">Men's Shoes</h5>
              </div>
              <h3 className=" font-medium text-[15px]">₹ 16 995</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
