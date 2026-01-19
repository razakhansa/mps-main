import Image from "next/image";

export default function HeroSection() {
  return (
    <div
      className="w-[624px] h-[580px] flex items-center pl-[40px] overflow-hidden bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/assets/banner-20.jpg.png')" }}
    >
      <div className="w-[624px] h-[580px] mt-[100px] flex flex-col justify-start text-white">
        <span className="text-[12px] tracking-[2px] opacity-70 mb-[16px]">
          FUEL YOUR FIX
        </span>

        <h1 className="text-[48px] w-[600px] font-inter text-white leading-tight mb-[16px]">
          Unleash the Full <br />
          Power of Your Ride
        </h1>

        <p className="text-[16px] leading-[1.6] max-w-[520px] opacity-85 mb-[36px]">
          Discover top-quality auto parts crafted for performance, safety, and a
          perfect fit for your loom.
        </p>

        <button className="w-fit px-[30px] py-[14px] rounded-full bg-white text-black text-[14px] font-semibold hover:opacity-90 transition">
          Shop Now
        </button>
      </div>
    </div>
  );
}
