"use client";

export default function CategoryBlockHor() {
  return (
    <div
      style={{
        backgroundImage: "url('/assets/category-block-hor.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right center",
      }}
      className="
        w-[624px] h-[270px] rounded-[8px]
      "
    >
      <div className="p-[32px] max-w-[360px] text-white">
        <span className="block text-[12px] tracking-[1px] opacity-[0.85] mb-[12px]">
          RIDE READY, ALWAYS
        </span>

        <h1 className="text-[32px] leading-[1.2] font-bold mb-[14px]">
          Parts That Work as Hard as You Do
        </h1>

        <p className="text-[15px] opacity-[0.85] mb-[22px]">
          Built tough. Drives long.
        </p>

        <a
          href="#"
          className="
            inline-block bg-white text-black
            px-[18px] py-[10px]
            rounded-[999px]
            text-[14px] font-semibold
            no-underline
          "
        >
          Shop Now
        </a>
      </div>
    </div>
  );
}
