export default function InventoryCardHorizontal() {
  return (
    <div className="flex justify-between gap-[10px] w-[406.67px] h-[163.8px] font-inter">
      {/* Image Box */}
      <div className="w-[161.86px] h-[161.86px] bg-[#E2E8F0] rounded-[12px] flex items-center justify-center">
        <img
          src="./assets/parts.png"
          alt="Product"
          className="w-full h-[161.86px] rounded-[10px] object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between w-[224.81px] h-[109px] text-[14px] font-medium">
        <h3 className="text-black text-[14px] font-medium leading-[24px]">
          YADA 1080P Roadcam, Full-HD Day or Night, Smart G-sensor
        </h3>

        {/* Info Box */}
        <div className="h-[42px] pt-[10px] border-t border-[#e2e8f0]">
          {/* Progress */}
          <div className="w-full h-[6px] bg-[#ddd] rounded-[99px] overflow-hidden mb-2">
            <div className="w-[43%] h-full bg-gradient-to-r from-[#ff4d6d] to-[#ff758f]" />
          </div>

          {/* Stats */}
          <div className="flex justify-between text-[12px] font-normal">
            <p>
              <span className="text-[#64748b]">Available:</span> 3
            </p>
            <p>
              <span className="text-[#64748b]">Sold:</span> 4
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
