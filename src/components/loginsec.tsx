import Link from "next/link";
import Image from "next/image";

export default function LoginSec() {
  return (
    <section className="w-screen">
      <div className="flex flex-col w-[60%] sm:w-[40%] md:w-[24%] gap-4 items-center mx-auto my-10">
        <div>
          <Image
            src="/loginsec1.png"
            width={53}
            height={19}
            alt="Picture of the author"
          />
        </div>
        <h1 className="text-lg font-bold text-center w-[50%]">
          YOUR ACCOUNT FOR EVERYTHING NIKE
        </h1>
        <input
          type="email"
          placeholder="Email address"
          className="
                border-[#E5E5E5] border-[0.5px] w-full p-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="border-[#E5E5E5] border-[0.5px] w-full p-2 rounded"
        />
        <div className="flex justify-between w-full">
          <div className="flex gap-3 items-center">
            <input type="checkbox" className="scale-150" />
            <label htmlFor="" className="text-xs text-[#8D8D8D]">
              Keep me signed in
            </label>
          </div>
          <h3 className="text-xs text-[#BCBCBC]">Forgotten your password?</h3>
        </div>
        <h3 className="text-center text-[#8D8D8D] text-xs w-[80%]">
          By logging in, you agree to Nike's
          <Link href="" className="underline decoration-[#8D8D8D]">
            {" "}
            Privacy Policy{" "}
          </Link>
          and
          <Link href="" className="underline decoration-[#8D8D8D]">
            {" "}
            Terms of Use.
          </Link>
        </h3>
        <button
          aria-label="sign up"
          className="bg-black text-white py-2 px-5 w-full rounded text-xs"
        >
          SIGN IN
        </button>
        <div className="flex gap-2">
          <p className="text-xs text-[#8D8D8D]">Not a Member?</p>
          <Link href="/join" className="text-xs underline">
            Join Us.
          </Link>
        </div>
      </div>
    </section>
  );
}
