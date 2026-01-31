// app/components/WhyChooseUs.tsx

import Image from "next/image";

export default function Benefits() {
  return (
    <>
    <div className="w-full font-[Inter] bg-white">
      <h1 className="flex items-center justify-center w-full h-[149px] border-b border-slate-200 font-semibold text-[48px] text-[#212529] bg-white">
        Shop
      </h1>

      <div className="w-full flex justify-center mt-2.5 bg-white">
        <div className="flex justify-center w-full max-w-6xl">
          {/* Item 1 */}
          <div className="w-1/3 h-[100px] px-2.5 flex items-center justify-center gap-2.5">
            <Image
              src="/assets/iconbox.svg"
              alt="Original Products"
              width={60}
              height={60}
            />
            <div className="leading-6">
              <h3 className="text-[16px] font-semibold">Original Products</h3>
              <p className="text-[12px] font-normal">
                Vestibulum ante ipsum primis in faucibus.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="w-1/3 h-[100px] px-2.5 flex items-center justify-center gap-2.5 border-l border-slate-200">
            <Image
              src="/assets/iconbox2.svg"
              alt="Affordable Rates"
              width={60}
              height={60}
            />
            <div className="leading-6">
              <h3 className="text-[16px] font-semibold">Affordable Rates</h3>
              <p className="text-[12px] font-normal">
                Vestibulum ante ipsum primis in faucibus.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="w-1/3 h-[100px] px-2.5 flex items-center justify-center gap-2.5 border-l border-slate-200">
            <Image
              src="/assets/iconbox3.svg"
              alt="Wide Variety"
              width={60}
              height={60}
            />
            <div className="leading-6">
              <h3 className="text-[16px] font-semibold">Wide variety</h3>
              <p className="text-[12px] font-normal">
                Vestibulum ante ipsum primis in faucibus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    
      </>
  );
}
