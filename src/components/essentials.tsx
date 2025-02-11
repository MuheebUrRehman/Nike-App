/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Essentials() {
  return (
    <section className="w-screen">
      <div className="w-[95%] mx-auto flex flex-col gap-3">
        <h2 className="font-medium text-2xl ">The Essentials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="relative">
            <Image
              src="/essential1.png"
              width={440}
              height={540}
              alt="Picture of the author"
            />
            <button
              aria-label="mens"
              className="absolute bottom-10 left-10 py-2 px-5 rounded-3xl bg-white"
            >
              Men's
            </button>
          </div>
          <div className="relative ">
            <Image
              src="/essential2.png"
              width={440}
              height={540}
              alt="Picture of the author"
            />
            <button
              aria-label="womens"
              className="absolute bottom-10 left-10 py-2 px-5 rounded-3xl bg-white"
            >
              Women's
            </button>
          </div>
          <div className="relative ">
            <Image
              src="/essential3.png"
              width={440}
              height={540}
              alt="Picture of the author"
            />
            <button
              aria-label="kids"
              className="absolute bottom-10 left-10 py-2 px-5 rounded-3xl bg-white"
            >
              Kids'
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
