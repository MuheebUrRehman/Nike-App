import { client } from "@/sanity/lib/client";
import { products } from "@/app/type";
import BestProductCard from "./bestproductcard";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function Best() {
  const [data, setData] = useState<products[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const query = `*[_type == 'product'] | order(_updatedAt asc){productName,category,price,inventory,colors,status,image,description,"slug": slug.current}`;
    const fetchData = async () => {
      const result: products[] = await client.fetch(query);
      setData(result);
    };
    fetchData();
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-screen">
      <div className="md:w-[95%] mx-auto w-[80%] my-10">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-[22px]">Best of Air Max</h3>
          <div className="flex justify-center gap-3 items-center">
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
        <div
          ref={carouselRef}
          className="mt-6 flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {data.map((product, index) => (
            <div key={index} className="flex-shrink-0 md:w-1/3 w-full">
              <BestProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
