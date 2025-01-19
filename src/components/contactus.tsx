import Link from "next/link";
import Image from "next/image";

export default function ContactUs() {
  return (
    <section className="w-screen">
      <div className="w-[95%] mx-auto">
        <div className="h-[110px] flex flex-col items-center mx-auto justify-between ">
          <h2 className="text-3xl">GET HELP</h2>
          <div className=" w-1/3 h-14 bg-[#F5F5F5] rounded-lg flex items-center justify-between gap-3 overflow-hidden px-2">
            <input
              type="text"
              placeholder="What can we help you with?"
              className="font-medium text-[#757575] w-[100%] bg-transparent"
            />
            <div className=" h-[36px] flex justify-center items-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.9388 14.2176L12.1563 11.4576C13.2364 10.1109 13.7594 8.40152 13.6179 6.68103C13.4764 4.96053 12.6811 3.35964 11.3954 2.20753C10.1098 1.05543 8.43166 0.439683 6.70599 0.486903C4.98033 0.534124 3.33834 1.24072 2.11766 2.46141C0.896972 3.68209 0.190374 5.32408 0.143153 7.04974C0.0959329 8.77541 0.71168 10.4536 1.86378 11.7392C3.01589 13.0248 4.61678 13.8201 6.33728 13.9617C8.05777 14.1032 9.76711 13.5801 11.1138 12.5001L13.8738 15.2601C13.9435 15.3303 14.0265 15.3861 14.1179 15.4242C14.2093 15.4623 14.3073 15.4819 14.4063 15.4819C14.5053 15.4819 14.6033 15.4623 14.6947 15.4242C14.7861 15.3861 14.8691 15.3303 14.9388 15.2601C15.074 15.1202 15.1495 14.9333 15.1495 14.7388C15.1495 14.5443 15.074 14.3574 14.9388 14.2176ZM6.9063 12.5001C5.86795 12.5001 4.85291 12.1921 3.98956 11.6153C3.1262 11.0384 2.45329 10.2185 2.05593 9.25914C1.65857 8.29983 1.55461 7.24423 1.75718 6.22583C1.95975 5.20743 2.45976 4.27197 3.19399 3.53774C3.92822 2.80351 4.86368 2.3035 5.88208 2.10093C6.90048 1.89836 7.95608 2.00232 8.91539 2.39968C9.8747 2.79704 10.6946 3.46995 11.2715 4.33331C11.8484 5.19666 12.1563 6.2117 12.1563 7.25005C12.1563 8.64244 11.6032 9.97779 10.6186 10.9624C9.63404 11.9469 8.29869 12.5001 6.9063 12.5001Z"
                  fill="#757575"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-3/4">
            <div className="flex flex-col gap-5 my-10">
              <h1 className="text-3xl">
                WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
              </h1>
              <p>
                We want to make buying your favourite Nike shoes and gear online
                fast and easy, and we accept the following payment options:
              </p>
              <div className="ml-7 flex flex-col gap-5">
                <p>
                  Visa, Mastercard, Diners Club, Discover, American Express,
                  Visa Electron, Maestro
                </p>
                <p>
                  If you enter your PAN information at checkout, you'll be able
                  to pay for your order with PayTM or a local credit or debit
                  card.
                </p>
                <p>Apple Pay</p>
              </div>
              <p>
                <Link href={""} className="font-semibold underline">
                  Nike Members
                </Link>{" "}
                can store multiple debit or credit cards in their profile for
                faster checkout. If you're not already a Member, join us today.
              </p>
              <div className="flex w-64 justify-between ">
                <button className="px-5 py-2 bg-[#111111] rounded-[30px] text-white">
                  JOIN US
                </button>
                <button className="px-5 py-2 bg-[#111111] rounded-[30px] text-white">
                  SHOP NIKE
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-5 my-10">
              <h1 className="text-xl">FAQs</h1>
              <div>
                <p className="text-xl">
                  Does my card need international purchases enabled?
                </p>
                <p>
                  Yes, we recommend asking your bank to enable international
                  purchases on your card. You will be notified at checkout if
                  international purchases need to be enabled.
                </p>
              </div>
              <p>
                Please note, some banks may charge{" "}
                <Link href={""} className="underline font-semibold">
                  a small transaction fee
                </Link>{" "}
                for international orders.
              </p>
              <div>
                <p className="text-xl">
                  Can I pay for my order with multiple methods?
                </p>
                <p>
                  No, payment for Nike orders can't be split between multiple
                  payment methods.
                </p>
              </div>
              <div>
                <p className="text-xl">
                  What payment method is accepted for SNKRS orders?
                </p>
                <p>
                  You can use any accepted credit card to pay for your SNKRS
                  order.
                </p>
              </div>
              <div>
                <p className="text-xl">
                  Why don't I see Apple Pay as an option?
                </p>
                <p>
                  To see Apple Pay as an option in the Nike App or on Nike.com,
                  you'll need to use a compatible Apple device running the
                  latest OS, be signed in to your iCloud account and have a
                  supported card in your Wallet. Additionally, you'll need to
                  use Safari to use Apple Pay on Nike.com.
                </p>
              </div>
            </div>
            <div className="my-10">
              <h3>Was this answer helpful?</h3>
              <div className="flex">
                <svg
                  width="31"
                  height="30"
                  viewBox="0 0 31 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.025 15.375C10.525 14.575 11.025 13.75 11.525 12.9L11.975 12.3C12.925 10.95 13.5125 10.125 13.7375 9.825C13.9625 9.525 14.325 8.875 14.825 7.875L15.125 7.275C15.175 7.225 15.225 7.025 15.275 6.675C15.375 5.825 15.525 5.2 15.725 4.8C15.975 4.1 16.375 3.75 16.925 3.75C17.675 3.75 18.225 4.025 18.575 4.575C18.875 5.075 19.025 5.65 19.025 6.3C19.025 6.85 18.75 7.85 18.2 9.3L17.9 10.125C17.8 10.475 17.725 10.95 17.675 11.55L17.525 12.3H20.15L20.975 12.375C21.575 12.425 22.1 12.525 22.55 12.675C23.2 12.825 23.65 13.05 23.9 13.35C24.2 13.75 24.375 14.175 24.425 14.625C24.475 14.925 24.475 15.325 24.425 15.825L23.525 23.325C23.375 24.575 22.775 25.425 21.725 25.875C21.125 26.125 20.35 26.25 19.4 26.25H6.125V15.375H10.025Z"
                    fill="#111111"
                  />
                </svg>
                <svg
                  width="31"
                  height="30"
                  viewBox="0 0 31 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_3845)">
                    <path
                      d="M11.525 17.025L10.025 14.625H6.125V3.75H19.4L20 3.825C20.45 3.875 20.9 3.975 21.35 4.125C21.9 4.325 22.35 4.6 22.7 4.95C23.15 5.45 23.425 6.025 23.525 6.675L24.425 14.1C24.475 14.6 24.475 15 24.425 15.3C24.375 15.8 24.1875 16.2625 23.8625 16.6875C23.5375 17.1125 22.975 17.375 22.175 17.475C21.775 17.575 21.1 17.625 20.15 17.625H17.525L17.675 18.45C17.725 19.05 17.8 19.5 17.9 19.8L18.2 20.7C18.75 22.15 19.025 23.15 19.025 23.7C19.025 24.35 18.875 24.925 18.575 25.425C18.225 25.975 17.675 26.25 16.925 26.25C16.375 26.25 15.975 25.9 15.725 25.2C15.525 24.8 15.375 24.175 15.275 23.325C15.225 22.925 15.175 22.7 15.125 22.65L14.825 21.975C14.325 21.025 13.95 20.3875 13.7 20.0625C13.45 19.7375 12.825 18.875 11.825 17.475L11.525 17.025Z"
                      fill="#111111"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_3845">
                      <rect
                        width="30"
                        height="30"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="text-[#757575] my-2">RELATED</h3>
              <div className="ml-8 flex flex-col gap-3">
                <Link href={""} className="underline font-semibold">
                  WHAT ARE NIKE'S DELIVERY OPTIONS?
                </Link>
                <Link href={""} className="underline font-semibold">
                  HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
                </Link>
              </div>
            </div>
          </div>
          <div className="border-l-2 w-1/4 flex flex-col items-center gap-9">
            <h1 className="text-2xl text-center">CONTACT US</h1>
            <div className="flex flex-col items-center text-center ">
              <Image
                src="/contact1.png"
                width={64}
                height={64}
                alt="contactus"
                className=" my-4"
              />
              <h3 className="font-semibold">000 800 919 0566</h3>
              <p>Products & Orders: 24 hours a day,</p>
              <p>7 days a week</p>
              <p>Company Info & Enquiries: 07:30 -</p>
              <p>16:30, Monday - Friday</p>
            </div>
            <div className="flex flex-col items-center ">
              <Image
                src="/contact2.png"
                width={64}
                height={64}
                alt="contactus"
                className=" my-4"
              />
              <h3 className="font-semibold">24 hours a day</h3>
              <p>7 days a week</p>
            </div>
            <div className="flex flex-col items-center ">
              <Image
                src="/contact2.png"
                width={64}
                height={64}
                alt="contactus"
                className=" my-4"
              />
              <h3 className="font-semibold">24 hours a day</h3>
              <p>7 days a week</p>
            </div>
            <div className="flex flex-col items-center ">
              <Image
                src="/contact2.png"
                width={64}
                height={64}
                alt="contactus"
                className=" my-4"
              />
              <h3 className="font-semibold">24 hours a day</h3>
              <p>7 days a week</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
