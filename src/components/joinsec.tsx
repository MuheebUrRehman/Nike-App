"use client";
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const nameRegex = /^[A-Za-z]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

const joinSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .regex(
      passwordRegex,
      "Password must be at least 8 characters and include at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character"
    ),
  firstName: z
    .string()
    .nonempty("First Name is required")
    .regex(nameRegex, "First Name must contain only letters"),
  lastName: z
    .string()
    .nonempty("Last Name is required")
    .regex(nameRegex, "Last Name must contain only letters"),
  dateOfBirth: z.string().nonempty("Date of Birth is required"),
  country: z.string().nonempty("Country is required"),
  male: z.string().optional(),
  female: z.string().optional(),
  subscribe: z.boolean().optional(),
});

type JoinFormData = z.infer<typeof joinSchema>;

export default function JoinSec() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JoinFormData>({
    resolver: zodResolver(joinSchema),
  });

  const onSubmit = (data: JoinFormData) => {
    console.log(data);
    // You can add further submission logic here.
  };

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
        <h1 className="text-lg font-bold text-center ">BECOME A NIKE MEMBER</h1>
        <p className="text-[#8D8D8D] text-sm text-center">
          Create your Nike Member profile and get first access to the very best
          of Nike products, inspiration and community.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="mb-2">
            <input
              type="email"
              placeholder="Email address"
              className="border-[#E5E5E5] border-[0.5px] w-full p-2 rounded"
              {...register("email")}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-2">
            <input
              type="password"
              placeholder="Password"
              className="border-[#E5E5E5] border-[0.5px] w-full p-2 rounded"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password.message}</p>
            )}
          </div>
          <div className="mb-2">
            <input
              type="text"
              placeholder="First Name"
              className="border-[#E5E5E5] border-[0.5px] w-full p-2 rounded"
              {...register("firstName")}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs">{errors.firstName.message}</p>
            )}
          </div>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Last Name"
              className="border-[#E5E5E5] border-[0.5px] w-full p-2 rounded"
              {...register("lastName")}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs">{errors.lastName.message}</p>
            )}
          </div>
          <div className="mb-2">
            <input
              type="date"
              placeholder="Date of Birth"
              className="border-[#E5E5E5] border-[0.5px] w-full p-2 rounded"
              {...register("dateOfBirth")}
            />
            {errors.dateOfBirth && (
              <p className="text-red-500 text-xs">
                {errors.dateOfBirth.message}
              </p>
            )}
          </div>
          <div className="mb-2">
            <input
              type="text"
              placeholder="India"
              className="border-[#E5E5E5] border-[0.5px] w-full p-2 rounded"
              {...register("country")}
            />
            {errors.country && (
              <p className="text-red-500 text-xs">{errors.country.message}</p>
            )}
          </div>
          <div className="mb-2 flex gap-5">
            <div className="w-full">
              <input
                type="text"
                placeholder="Male"
                className="border-[#E5E5E5] border-[0.5px] w-full p-2 rounded"
                {...register("male")}
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="Female"
                className="border-[#E5E5E5] border-[0.5px] w-full p-2 rounded"
                {...register("female")}
              />
            </div>
          </div>
          <div className="flex gap-6 items-center mb-2">
            <input
              type="checkbox"
              className="scale-150"
              {...register("subscribe")}
            />
            <label htmlFor="" className="text-[#8D8D8D] text-xs">
              Sign up for emails to get updates from Nike on products, offers
              and your Member benefits
            </label>
          </div>
          <h3 className="text-center text-xs text-[#8D8D8D]">
            By creating an account, you agree to Nike's Privacy Policy and Terms
            of Use.
          </h3>
          <button
            aria-label="join us"
            type="submit"
            className="bg-black text-white py-2 px-5 w-full rounded text-xs"
          >
            JOIN US
          </button>
        </form>
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
