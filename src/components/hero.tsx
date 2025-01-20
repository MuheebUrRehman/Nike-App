import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="w-screen">
      <div className="w-[95%] mx-auto ">
        <div className="flex justify-center items-center">
          <Image
            src="/hero1.png"
            width={1344}
            height={700}
            alt="Picture of the author"
            layout="responsive"
            priority={true}
            loading="eager"
          />
        </div>
        <div className="flex flex-col items-center my-10 gap-3">
          <div>
            <h4 className="font-medium text-[15px] text-center">First Look</h4>
            <h1 className="font-medium text-[56px] uppercase text-center">
              Nike Air Max Pulse
            </h1>
          </div>
          <h5 className="text-[15px] w-[50%] text-center">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
            Pulse —designed to push you past your limits and help you go to the
            max.
          </h5>
          <div className="flex gap-[6px] ">
            <button className="px-5 py-2 bg-[#111111] rounded-[30px] text-white">
              Notify Me
            </button>

            <Link
              href={"/productdetiel/nike-air-force-1-mid-07"}
              className="px-5 py-2 bg-[#111111] rounded-[30px] text-white"
            >
              Shop Air Max
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
