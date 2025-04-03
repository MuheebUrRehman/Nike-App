"use client";
import Link from "next/link";
import Search from "./search";
import { useState } from "react";
import CartIcon from "./CartIcon";
import WishlistIcon from "./Wishlist";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-screen bg-white shadow">
      <div className="w-[95%] mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" aria-label="Home" className="w-[80px]">
            <svg
              width="79"
              height="79"
              viewBox="0 0 79 79"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_32)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M68.9262 28.7725L25.8854 47.0298C22.302 48.5502 19.2874 49.3087 16.8581 49.3087C14.1248 49.3087 12.1336 48.3442 10.9108 46.4184C9.32501 43.9335 10.0182 39.9381 12.7385 35.7203C14.3536 33.2551 16.4069 30.9925 18.4079 28.828C17.9371 29.5931 13.7815 36.5083 18.3262 39.7648C19.2253 40.4187 20.5037 40.7391 22.0764 40.7391C23.3384 40.7391 24.7869 40.5332 26.3792 40.1179L68.9262 28.7725Z"
                  fill="#111111"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_32">
                  <rect
                    width="78.47"
                    height="78.47"
                    fill="white"
                    transform="translate(0.264648 0.264648)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>
        <div className="hidden md:flex md:w-[40%] justify-between text-lg font-medium ">
          <Link href="#">New &amp; Featured</Link>
          <Link href="#">Men</Link>
          <Link href="#">Women</Link>
          <Link href="#">Kids</Link>
          <Link href="#">Sales</Link>
          <Link href="#">SNKRS</Link>
        </div>
        <div className="flex items-center gap-6">
          <Search />
          <WishlistIcon />
          <CartIcon />
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white shadow p-4 space-y-4">
          <Link href="#" onClick={() => setMobileMenuOpen(false)}>
            New &amp; Featured
          </Link>
          <Link href="#" onClick={() => setMobileMenuOpen(false)}>
            Men
          </Link>
          <Link href="#" onClick={() => setMobileMenuOpen(false)}>
            Women
          </Link>
          <Link href="#" onClick={() => setMobileMenuOpen(false)}>
            Kids
          </Link>
          <Link href="#" onClick={() => setMobileMenuOpen(false)}>
            Sales
          </Link>
          <Link href="#" onClick={() => setMobileMenuOpen(false)}>
            SNKRS
          </Link>
        </div>
      )}
    </nav>
  );
}
