export default function CatalogBar() {
  return (
    <div className="w-full h-[51.8px] flex items-center justify-center border-b border-[#e5e5e5] px-[12px]">

      <div className="w-[80%] flex items-center justify-between font-inter mx-auto">

        {/* Left Section */}
        <div className="flex items-center gap-[28px]">
          <span className="text-[24px] font-bold text-[#0F172A]">
            Catalog
          </span>

          <div className="flex gap-[8px]">
            <button className="px-[14px] py-[6px] rounded-full border border-[#7aa7ff] bg-[#eaf2ff] text-[14px] cursor-pointer">
              All
            </button>

            <button className="px-[14px] py-[6px] rounded-full border border-[#d0d7de] bg-white text-[14px] cursor-pointer">
              Gears
            </button>

            <button className="px-[14px] py-[6px] rounded-full border border-[#d0d7de] bg-white text-[14px] cursor-pointer">
              Motors
            </button>
          </div>
        </div>

        {/* View All Button */}
        <button className="bg-[#6b6b6b] text-white border-none px-[14px] py-[8px] rounded-[6px] text-[14px] cursor-pointer">
          View All
        </button>

      </div>
    </div>
  );
}
