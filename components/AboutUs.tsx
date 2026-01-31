import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center">
      <div
        className="relative w-full h-[400px] flex items-center justify-center bg-center bg-cover"
        style={{ backgroundImage: "url('./assets/section.svg')" }}
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 text-center text-white">
          <h2 className="text-[57px] font-medium mb-[8px]">
            About LoomParts Pro
          </h2>
          <p className="text-[40px] font-normal opacity-90">
            Your trusted partner in loom spare parts since 1995
          </p>
        </div>
      </div>

      <section className="max-w-[1000px] my-[80px] flex gap-[60px] items-center px-[20px]">
        <div className="flex-1">
          <h2 className="text-[30px] font-medium mb-[20px]">Our Story</h2>

          <p className="text-[16px] font-normal leading-[1.7] mb-[16px] text-[#555]">
            For over 28 years, LoomParts Pro has been at the forefront of
            providing high-quality spare parts for textile looms. What started
            as a small family business has grown into a leading supplier serving
            manufacturers across the globe.
          </p>

          <p className="text-[16px] font-normal leading-[1.7] mb-[16px] text-[#555]">
            We understand that downtime in textile manufacturing can be costly.
            That's why we've built our reputation on reliability, quality, and
            exceptional customer service.
          </p>

          <p className="text-[16px] font-normal leading-[1.7] text-[#555]">
            With our deep industry expertise and commitment to excellence, we
            help keep your looms running smoothly and your production on
            schedule.
          </p>
        </div>

        <div className="flex-1">
          <Image
            src="/assets/fallback.png"
            alt="Loom Machine"
            width={500}
            height={400}
            className="w-full rounded-[12px] object-cover"
          />
        </div>
      </section>

      <section className="w-[80%] bg-[#F8FAFC] py-[80px] px-[20px]">
        <h2 className="text-center text-[30px] font-medium mb-[50px] text-[#0A0A0A]">
          Why Choose Us
        </h2>

        <div className="max-w-[1000px] mx-auto grid grid-cols-3 gap-[30px]">
          {[
            {
              title: "Quality Assured",
              text: "All our spare parts meet or exceed OEM specifications.",
              icon: "./assets/quality.svg",
            },
            {
              title: "Industry Expertise",
              text: "Nearly three decades of experience across all loom models.",
              icon: "./assets/expertise.svg",
            },
            {
              title: "Customer First",
              text: "Personalized service, fast shipping, and full support.",
              icon: "./assets/customer.svg",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white px-[30px] py-[40px] rounded-[12px] shadow
                         shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1)]"
            >
              <div className="w-[48px] h-[48px] bg-[#eef2f6] rounded-[10px] flex items-center justify-center mb-[20px]">
                <Image src={item.icon} alt="" width={24} height={24} />
              </div>

              <h3 className="text-[20px] font-medium mb-[12px] text-[#0A0A0A]">
                {item.title}
              </h3>

              <p className="text-[#4A5565] leading-[1.6]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-[1200px] my-[60px] px-[20px] grid grid-cols-4 text-center">
        {[
          ["28+", "Years in Business"],
          ["5000+", "Parts in Stock"],
          ["800+", "Happy Clients"],
          ["24/7", "Customer Support"],
        ].map(([num, label], i) => (
          <div key={i}>
            <h3 className="text-[#726D69] text-[36px] font-medium mb-[8px]">
              {num}
            </h3>
            <p className="text-[#777] text-[14px]">{label}</p>
          </div>
        ))}
      </section>
    </section>
  );
}
