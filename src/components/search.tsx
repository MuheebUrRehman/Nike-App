import React from "react";

const Search = () => {
  return (
    <div className="md:w-[70%] w-[100%] h-[40px] bg-[#F5F5F5] rounded-[100px] flex items-center justify-between gap-3 overflow-hidden px-2">
      <div className="h-[36px] flex justify-center items-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_20)">
            <path
              d="M13.962 16.296C12.916 16.9224 11.7192 17.2521 10.5 17.25C9.6134 17.2512 8.7353 17.0772 7.91618 16.7379C7.09707 16.3986 6.35308 15.9008 5.72701 15.273C5.09924 14.6469 4.6014 13.9029 4.26212 13.0838C3.92284 12.2647 3.7488 11.3866 3.75001 10.5C3.75001 8.63601 4.50501 6.94901 5.72701 5.72701C6.35308 5.09924 7.09707 4.6014 7.91618 4.26212C8.7353 3.92284 9.6134 3.7488 10.5 3.75001C12.364 3.75001 14.051 4.50501 15.273 5.72701C15.9008 6.35308 16.3986 7.09707 16.7379 7.91618C17.0772 8.7353 17.2512 9.6134 17.25 10.5C17.2517 11.6974 16.9338 12.8736 16.329 13.907C15.812 14.789 15.895 15.895 16.618 16.618L20.471 20.471"
              stroke="#111111"
              strokeWidth="1.5"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_20">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search"
        className="font-medium text-[#CCCCCC] w-[100%] bg-transparent"
      />
    </div>
  );
};

export default Search;
