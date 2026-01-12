// app/components/EmailSubscription.tsx

import PrimaryButton from "./PrimaryButton";

export default function EmailSubscription() {
  return (
    <section className="w-full h-[221px] bg-[#EFF4F7] flex items-center justify-center font-[Inter]">
      <div className="w-[80%] flex items-center justify-between break-words">
        {/* Content */}
        <div className="w-[35%] h-[108px] flex flex-col justify-around">
          <h1 className="text-[30px] font-semibold">Join our VIP Club!</h1>
          <p className="text-[15px] text-slate-500">
            Whether you're welcoming new contacts or sharing the latest news,
            you can make your business look good in justa few clicks
          </p>
        </div>

        {/* Input */}
        <div className="relative h-[108px] flex flex-col justify-around">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-[520px] rounded-[10px] border border-slate-300 px-2.5 py-[15px] text-sm outline-none"
            />

            {/* <button
              type="button"
            >
              Subscribe
            </button> */}
            <PrimaryButton
              // onClick={}
              text="Subscribe"
              className="absolute right-[69px] top-2 px-4 !py-3"
            />
          </div>

          <p className="w-[95%] text-[15px] leading-[25px] text-slate-500">
            By subscribing you agree to our{" "}
            <a href="#" className="text-black no-underline">
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="#" className="text-black no-underline">
              Privacy & Cookies Policy.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
