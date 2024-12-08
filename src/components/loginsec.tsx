import Link from "next/link";
export default function LoginSec() {
  return (
    <section className="w-screen">
      <div className="flex flex-col w-[70%] sm:w-[24%] gap-4 items-center mx-auto my-10">
        <div>
          <img src="\loginsec1.png" alt="" className="w-[100%]" />
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
          className="
                border-[#E5E5E5] border-[0.5px] w-full p-2  rounded"
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
            Terms of Use
          </Link>
          .
        </h3>

        <button className="bg-black text-white py-2 px-5 w-full rounded text-xs">
          SIGN IN
        </button>
        <div className="flex gap-2">
          <p className="text-xs text-[#8D8D8D]">Not a Member?</p>
          <Link href="" className="text-xs underline">
            Join Us.
          </Link>
        </div>
      </div>
    </section>
  );
}
