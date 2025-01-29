import Link from "next/link";
import Search from "./search";

export default function Navbar() {
  return (
    <nav className="w-screen">
      <div className="w-[95%] flex items-center justify-between mx-auto">
        <Link href="/" className="w-[10%]">
          <svg
            width="79"
            height="79"
            viewBox="0 0 79 79"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_32)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
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
        <div className="flex w-[40%] md:w-[50%] lg:w-[40%] justify-center md:justify-between text-lg font-medium flex-col items-center md:flex-row">
          <Link href="#">New & featured</Link>
          <Link href="#">Men</Link>
          <Link href="#">Women</Link>
          <Link href="#">Kids</Link>
          <Link href="#">Sales</Link>
          <Link href="#">SNKRS</Link>
        </div>
        <div className="flex justify-between md:w-[25%] w-[40%]  items-center">
          <div className="w-[70%] h-[40px] bg-[#F5F5F5] rounded-[100px] flex items-center justify-between gap-3 overflow-hidden px-2">
            <div className=" h-[36px] flex justify-center items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_20)">
                  <path
                    d="M13.962 16.296C12.916 16.9224 11.7192 17.2521 10.5 17.25C9.6134 17.2512 8.7353 17.0772 7.91618 16.7379C7.09707 16.3986 6.35308 15.9008 5.72701 15.273C5.09924 14.6469 4.6014 13.9029 4.26212 13.0838C3.92284 12.2647 3.7488 11.3866 3.75001 10.5C3.75001 8.63601 4.50501 6.94901 5.72701 5.72701C6.35308 5.09924 7.09707 4.6014 7.91618 4.26212C8.7353 3.92284 9.6134 3.7488 10.5 3.75001C12.364 3.75001 14.051 4.50501 15.273 5.72701C15.9008 6.35308 16.3986 7.09707 16.7379 7.91618C17.0772 8.7353 17.2512 9.6134 17.25 10.5C17.2517 11.6974 16.9338 12.8736 16.329 13.907C15.812 14.789 15.895 15.895 16.618 16.618L20.471 20.471"
                    stroke="#111111"
                    stroke-width="1.5"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_20">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <Search />
          </div>
          <div className="flex justify-center items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_25)">
                <path
                  d="M16.794 3.75002C18.118 3.75002 19.362 4.26602 20.298 5.20102C21.2262 6.13093 21.7475 7.39113 21.7475 8.70502C21.7475 10.0189 21.2262 11.2791 20.298 12.209L12 20.508L3.70096 12.209C2.77307 11.2791 2.25195 10.0192 2.25195 8.70552C2.25195 7.39188 2.77307 6.13189 3.70096 5.20202C4.15999 4.74032 4.70604 4.37425 5.30751 4.12501C5.90897 3.87578 6.5539 3.74832 7.20496 3.75002C8.52896 3.75002 9.77296 4.26602 10.709 5.20102L11.469 5.96102L12 6.49202L12.53 5.96102L13.29 5.20102C13.7492 4.73963 14.2953 4.37384 14.8967 4.12478C15.4982 3.87573 16.143 3.74835 16.794 3.75002Z"
                  stroke="#111111"
                  stroke-width="1.5"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_25">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex justify-center items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_29)">
                <path
                  d="M8.25 8.25V6C8.25 5.40326 8.48705 4.83097 8.90901 4.40901C9.33097 3.98705 9.90326 3.75 10.5 3.75H13.5C14.0967 3.75 14.669 3.98705 15.091 4.40901C15.5129 4.83097 15.75 5.40326 15.75 6C15.75 6.59674 15.5129 7.16903 15.091 7.59099C14.669 8.01295 14.0967 8.25 13.5 8.25H3.75V16.5C3.75 17.4946 4.14509 18.4484 4.84835 19.1517C5.55161 19.8549 6.50544 20.25 7.5 20.25H16.5C17.4946 20.25 18.4484 19.8549 19.1517 19.1517C19.8549 18.4484 20.25 17.4946 20.25 16.5V8.25H17.5"
                  stroke="#111111"
                  stroke-width="1.5"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_29">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
}
