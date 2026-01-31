export default function NonCatalogItemForm() {
  return (
    <div className="max-w-[912px] h-[508px] font-inter">
      <h2 className="mb-5 text-[#212529] text-[20px] font-medium">
        Adding Non Catalog Items
      </h2>

      <form className="grid grid-cols-2 gap-5">
        {/* Part Name */}
        <div>
          <label className="block text-[14px] font-medium mb-1.5 text-[#212529]">
            Part Name <span className="text-[#212529]">*</span>
          </label>
          <input
            type="text"
            required
            className="w-full p-3 border border-[#cfd8e3] rounded-[6px] text-[14px] focus:outline-none focus:border-[#CBD5E1]"
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-[14px] font-medium mb-1.5 text-[#212529]">
            Quantity <span className="text-[#212529]">*</span>
          </label>
          <input
            type="number"
            required
            className="w-full p-3 border border-[#cfd8e3] rounded-[6px] text-[14px] focus:outline-none focus:border-[#CBD5E1]"
          />
        </div>

        {/* Unit */}
        <div>
          <label className="block text-[14px] font-medium mb-1.5 text-[#212529]">
            Unit <span className="text-[#212529]">*</span>
          </label>
          <input
            type="text"
            required
            className="w-full p-3 border border-[#cfd8e3] rounded-[6px] text-[14px] focus:outline-none focus:border-[#CBD5E1]"
          />
        </div>

        {/* SKU */}
        <div>
          <label className="block text-[14px] font-medium mb-1.5 text-[#212529]">
            SKU <span className="italic text-[13px] text-[#94A3B8]">(Optional)</span>
          </label>
          <input
            type="text"
            className="w-full p-3 border border-[#cfd8e3] rounded-[6px] text-[14px] focus:outline-none focus:border-[#CBD5E1]"
          />
        </div>

        {/* Brand */}
        <div>
          <label className="block text-[14px] font-medium mb-1.5 text-[#212529]">
            Brand <span className="italic text-[13px] text-[#94A3B8]">(Optional)</span>
          </label>
          <input
            type="text"
            className="w-full p-3 border border-[#cfd8e3] rounded-[6px] text-[14px] focus:outline-none focus:border-[#CBD5E1]"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-[14px] font-medium mb-1.5 text-[#212529]">
            Category <span className="italic text-[13px] text-[#94A3B8]">(Optional)</span>
          </label>
          <input
            type="text"
            className="w-full p-3 border border-[#cfd8e3] rounded-[6px] text-[14px] focus:outline-none focus:border-[#CBD5E1]"
          />
        </div>

        {/* Notes */}
        <div className="col-span-2">
          <label className="block text-[14px] font-medium mb-1.5 text-[#212529]">
            Notes <span className="italic text-[13px] text-[#94A3B8]">(Optional)</span>
          </label>
          <input
            type="text"
            className="w-full p-3 border border-[#cfd8e3] rounded-[6px] text-[14px] focus:outline-none focus:border-[#CBD5E1]"
          />
        </div>

        {/* Button */}
        <div className="col-span-2">
          <button
            type="submit"
            className="w-full py-[14px] bg-[#726D69] rounded-[8px] text-white text-[16px] hover:opacity-90 transition"
          >
            Add to cart
          </button>
        </div>
      </form>
    </div>
  );
}
