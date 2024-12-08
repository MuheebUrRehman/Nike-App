import Image from "next/image";
import Link from "next/link";
export default function Feature() {
  return (
    <section className="w-screen">
      <div className="w-[95%] mx-auto">
        <h2 className="font-medium text-[23px] mb-4 ">Featured</h2>
        <Image
          src="/feature1.jpeg"
          width={1344}
          height={700}
          alt="Picture of the author"
          layout="responsive"
        />
        
        <div className="flex flex-col items-center gap-3 my-6 ">
          <h3 className="font-medium text-[54px] text-center ">
            STEP INTO WHAT FEELS GOOD
          </h3>
          <h3 className="">
            Cause everyone should know the feeling of running in that perfect
            pair.
          </h3>

          <Link
            href="/products"
            className="px-5 py-2 bg-[#111111] rounded-[30px] text-white"
          >
            Find Your Shoe
          </Link>
        </div>
      </div>
    </section>
  );
}
