import { client } from "@/sanity/lib/client";
import { products } from "@/app/type";
import BestProductCard from "./bestproductcard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default async function Best() {
  const query = `*[_type == 'product'] | order(_updatedAt asc){productName,category,price,inventory,colors,status,image,description,"slug": slug.current}`;
  const data: products[] = await client.fetch(query);

  return (
    <section className="w-screen">
      <div className="md:w-[95%] mx-auto w-6/12 my-10">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-[22px]">Best of Air Max</h3>
          <div className="flex justify-center gap-3 items-center">
            <h4 className="font-medium text-[15px]">Shop</h4>
          </div>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="flex gap-4">
            {data.map((product, index) => (
              <CarouselItem key={index} className="basis-full md:basis-1/3">
                <BestProductCard {...product} />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-3 mt-5">
            <CarouselPrevious className="w-12 h-12 bg-[#F5F5F5] rounded-[24px] flex justify-center items-center">
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
                  strokeWidth="1.5"
                />
              </svg>
            </CarouselPrevious>

            <CarouselNext className="w-12 h-12 bg-[#E5E5E5] rounded-[24px] flex justify-center items-center">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M8.83301 18.9662L15.799 12.0002L8.83301 5.0332"
                    stroke="#111111"
                    strokeWidth="1.5"
                  />
                </g>
              </svg>
            </CarouselNext>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
