import Image from "next/image";

export default function NonCatalogCart() {
  return (
    <div className="max-w-[800px] mx-auto mt-5">
      {/* Title */}
      <h2 className="h-12 text-[20px] font-medium flex items-center text-[#212529] border-y border-gray-300">
        Non Catalog Items
      </h2>

      {/* Header */}
      <div className="h-10 flex justify-between items-end pb-2.5 border-b border-gray-300">
        <span className="text-[12px] font-medium text-slate-500">
          Product Name
        </span>
        <span className="text-[12px] font-medium text-slate-500 mr-[35px]">
          Quantity
        </span>
      </div>

      {/* Cart Items */}
      {[
        { img: "assets/1459.svg", name: "Rotor" },
        { img: "assets/1459.svg", name: "Rotor" },
        { img: "assets/1461.svg", name: "Rotor" },
      ].map((item, i) => (
        <div
          key={i}
          className="h-20 flex justify-between items-center py-[15px] border-b border-gray-200"
        >
          {/* Product */}
          <div className="w-[115px] flex items-center gap-[15px]">
            <div className="w-14 h-14 border border-gray-300 rounded-md relative">
              <Image
                src={item.img}
                alt=""
                fill
                className="object-contain rounded-md"
              />
            </div>
            <span className="text-[13px] font-medium text-[#212529]">
              {item.name}
            </span>
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-2">
            <div className="w-[72px] h-8 flex items-center justify-center border border-slate-200 rounded-lg bg-white">
              <button className="px-1 text-sm cursor-pointer">-</button>
              <span className="min-w-[18px] text-center text-sm">1</span>
              <button className="px-1 text-sm cursor-pointer">+</button>
            </div>

            <button className="w-5 h-5 border border-gray-300 rounded text-sm cursor-pointer">
              ×
            </button>
          </div>
        </div>
      ))}

      {/* Actions */}
      <div className="flex justify-between mt-5">
        <button className="w-[226px] h-[42px] border border-[#726D69] rounded-lg text-[#726D69] bg-white cursor-pointer">
          Add Non-Catalog Item
        </button>

        <button className="px-4 py-2 bg-slate-200 border border-gray-300 rounded-md text-sm cursor-pointer">
          Clear All
        </button>
      </div>
    </div>
  );
}
