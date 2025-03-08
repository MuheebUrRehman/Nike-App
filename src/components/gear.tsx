/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function Gear() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  return (
    <section className="w-screen">
      <div className="w-[95%] mx-auto my-14">
        <h1 className="font-medium text-[23px]">Gear Up</h1>
        <div className="flex justify-around flex-col md:flex-row items-center ">
          <div>
            <div>
              <div className="flex justify-end gap-3 items-center">
                <h4 className="font-medium text-[15px]">Shop</h4>
                <button
                  onClick={scrollLeft}
                  aria-label="previous button"
                  className="w-12 h-12 bg-[#F5F5F5] rounded-full flex justify-center items-center cursor-pointer active:bg-[#E5E5E5]"
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button
                  onClick={scrollRight}
                  aria-label="next button"
                  className="w-12 h-12 bg-[#F5F5F5] rounded-full flex justify-center items-center cursor-pointer active:bg-[#E5E5E5]"
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Image
                  src="/gear1.png"
                  width={300}
                  height={300}
                  alt="Picture of the author"
                />
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <h3 className="font-medium text-[15px]">
                      Nike Dri-FIT ADV TechKnit Ultra
                    </h3>
                    <h5 className="text-[#757575] text-[15px]">
                      Men's Short-Sleeve
                    </h5>
                    <h5 className="text-[#757575] text-[15px]">Running Top</h5>
                  </div>
                  <h3 className=" font-medium text-[15px]">₹ 3 895</h3>
                </div>
              </div>
              <div>
                <Image
                  src="/gear2.png"
                  width={300}
                  height={300}
                  alt="Picture of the author"
                />
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <h3 className="font-medium text-[15px]">
                      Nike Dri-FIT ADV TechKnit Ultra
                    </h3>
                    <h5 className="text-[#757575] text-[15px]">
                      Men's Short-Sleeve
                    </h5>
                    <h5 className="text-[#757575] text-[15px]">Running Top</h5>
                  </div>
                  <h3 className=" font-medium text-[15px]">₹ 3 895</h3>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="flex justify-end gap-3 items-center">
                <h4 className="font-medium text-[15px]">Shop</h4>
                <button
                  onClick={scrollLeft}
                  aria-label="previous button"
                  className="w-12 h-12 bg-[#F5F5F5] rounded-full flex justify-center items-center cursor-pointer active:bg-[#E5E5E5]"
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button
                  onClick={scrollRight}
                  aria-label="next button"
                  className="w-12 h-12 bg-[#F5F5F5] rounded-full flex justify-center items-center cursor-pointer active:bg-[#E5E5E5]"
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <div>
                <Image
                  src="/gear3.png"
                  width={300}
                  height={300}
                  alt="Picture of the author"
                />
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <h3 className="font-medium text-[15px]">
                      Nike Dri-FIT ADV TechKnit Ultra
                    </h3>
                    <h5 className="text-[#757575] text-[15px]">
                      Men's Short-Sleeve
                    </h5>
                    <h5 className="text-[#757575] text-[15px]">Running Top</h5>
                  </div>
                  <h3 className=" font-medium text-[15px]">₹ 3 895</h3>
                </div>
              </div>
              <div>
                <Image
                  src="/gear4.png"
                  width={300}
                  height={300}
                  alt="Picture of the author"
                />
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <h3 className="font-medium text-[15px]">
                      Nike Dri-FIT ADV TechKnit Ultra
                    </h3>
                    <h5 className="text-[#757575] text-[15px]">
                      Men's Short-Sleeve
                    </h5>
                    <h5 className="text-[#757575] text-[15px]">Running Top</h5>
                  </div>
                  <h3 className=" font-medium text-[15px]">₹ 3 895</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
