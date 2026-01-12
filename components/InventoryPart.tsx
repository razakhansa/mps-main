import Image from "next/image";
import PrimaryButton from "./PrimaryButton";

export default function InventoryPart() {
  return (
    <div className="w-full h-screen flex items-center justify-center font-[Inter] break-words">
      <div className="relative w-[230px] h-[362px] flex flex-col justify-between rounded-lg">
        {/* Product Image */}
        <Image
          src="/assets/0707.png"
          alt="Inventory part"
          width={230}
          height={230}
          className="w-[230px] h-[230px] object-cover"
          priority
        />

        {/* Icon */}
        <div className="absolute right-5 top-6">
          <Image
            src="/assets/Vector.png"
            alt="Wishlist"
            width={20}
            height={20}
            className="transition duration-200 ease-in-out hover:[filter:brightness(0)_saturate(100%)_invert(17%)_sepia(96%)_saturate(7480%)_hue-rotate(358deg)]"
          />
        </div>

        {/* Content */}
        <div className="w-[230px] h-[118.38px] flex flex-col justify-between">
          <div className="w-[230px] h-[68.38px] flex flex-col justify-between">
            <div className="flex justify-between text-xs tracking-[1px]">
              <h4>
                <span className="text-slate-500">SKU:</span> CS05GWQ3
              </h4>

              <span className="text-emerald-600 font-medium text-xs mr-[5px]">
                In Stock
              </span>
            </div>

            <h4 className="text-sm mb-2.5">Rotor</h4>
          </div>
          <PrimaryButton text="Add to Cart" />
        </div>
      </div>
    </div>
  );
}
