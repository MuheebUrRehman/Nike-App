import React from "react";
import Link from "next/link";

const CartIcon = () => {
  return (
    <div className="flex items-center">
      <Link href="/cart" aria-label="Cart">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_29)">
            <path
              d="M8.25 8.25V6C8.25 5.403 8.487 4.831 8.909 4.409C9.331 3.987 9.903 3.75 10.5 3.75H13.5C14.097 3.75 14.67 3.987 15.091 4.409C15.513 4.831 15.75 5.403 15.75 6C15.75 6.597 15.513 7.169 15.091 7.591C14.67 8.013 14.097 8.25 13.5 8.25H3.75V16.5C3.75 17.495 4.145 18.448 4.848 19.152C5.552 19.855 6.505 20.25 7.5 20.25H16.5C17.495 20.25 18.448 19.855 19.152 19.152C19.855 18.448 20.25 17.495 20.25 16.5V8.25H17.5"
              stroke="#111111"
              strokeWidth="1.5"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_29">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Link>
    </div>
  );
};

export default CartIcon;
