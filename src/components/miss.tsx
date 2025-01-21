import Image from "next/image";
import Link from "next/link";
export default function Miss() {
  return (
    <section>
      <div className="w-[95%] mx-auto">
        <h2 className="font-medium text-[22px] mb-4">Don't Miss</h2>
        <Image
          src="/miss1.png"
          width={1344}
          height={700}
          alt="Picture of the author"
        />
        <div className="flex flex-col items-center  gap-3 my-6">
          <h1 className="font-medium text-[52px] text-center">
            FLIGHT ESSENTIALS
          </h1>
          <h5 className="text-[15px] text-center">
            Your built-to-last, all-week wears—but with style only Jordan Brand
            can deliver.
          </h5>
          <div className="flex gap-[6px]">
            <Link
              href={"/products"}
              className="px-5 py-2 bg-[#111111] rounded-[30px] text-white"
            >
              Shop
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
