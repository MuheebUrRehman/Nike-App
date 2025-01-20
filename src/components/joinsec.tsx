import Link from "next/link";
import Image from "next/image";

export default function JoinSec() {
  return (
    <section className="w-screen">
      <div className="flex flex-col w-[60%] sm:w-[40%] md:w-[24%] gap-4 items-center mx-auto my-10">
        <div>
          <Image
            src="/loginsec1.png"
            width={53}
            height={19}
            alt="Picture of the author"
            layout="responsive"
          />
        </div>
        <h1 className="text-lg font-bold text-center ">BECOME A NIKE MEMBER</h1>
        <p className="text-[#8D8D8D] text-sm text-center">
          Create your Nike Member profile and get first access to the very best
          of Nike products, inspiration and community.
        </p>
        <input
          type="email"
          placeholder="Email address"
          className="border-[#E5E5E5] border-[0.5px] w-full p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="
                  border-[#E5E5E5] border-[0.5px] w-full p-2 rounded"
        />
        <input
          type="text"
          placeholder="First Name"
          className="
                  border-[#E5E5E5] border-[0.5px] w-full p-2 rounded"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="
                  border-[#E5E5E5] border-[0.5px] w-full p-2 rounded"
        />
        <input
          type="text"
          placeholder="Date of Birth"
          className="
                  border-[#E5E5E5] border-[0.5px] w-full p-2 rounded"
        />
        <p className="text-[#8D8D8D] text-xs">
          Get a Nike Member Reward every year on your Birthday.
        </p>
        <input
          type="text"
          placeholder="India"
          className="
                  border-[#E5E5E5] border-[0.5px] w-full p-2 rounded"
        />
        <div className="flex gap-5">
          <input
            type="text"
            placeholder="Male"
            className="
                  border-[#E5E5E5] border-[0.5px] w-full p-2 rounded"
          />{" "}
          <input
            type="text"
            placeholder="Female"
            className="
                border-[#E5E5E5] border-[0.5px] w-full p-2 rounded"
          />
        </div>
        <div className="flex gap-6 items-center">
          <input type="checkbox" className="scale-150" />
          <label htmlFor="" className="text-[#8D8D8D] text-xs">
            Sign up for emails to get updates from Nike on products, offers and
            your Member benefits
          </label>
        </div>
        <h3 className="text-center text-xs text-[#8D8D8D]">
          By creating an account, you agree to Nike's Privacy Policy and Terms
          of Use.
        </h3>
        <button
          type="submit"
          className="bg-black text-white py-2 px-5 w-full rounded text-xs"
        >
          JOIN US
        </button>
        <div className="flex gap-2">
          <p className="text-xs text-[#8D8D8D]">Already a Member? </p>
          <Link href="/login" className="text-xs underline">
            Sign In.
          </Link>
        </div>
      </div>
    </section>
  );
}
