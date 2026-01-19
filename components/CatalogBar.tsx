import InventoryPart from "./InventoryPart";

const products = [
  {
    sku: "LM-BRG-001",
    name: "High Speed Loom Bearing",
    price: 1000,
    user_id: 1,
    categor_id: 1,
    inStock: true,
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9c1f41",
  },
  {
    sku: "LM-MTR-002",
    name: "Textile Loom Drive Motor",
    price: 500,
    user_id: 2,
    categor_id: 1,
    inStock: false,
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
  },
  {
    sku: "LM-GER-003",
    name: "Precision Gear Assembly",
    price: 300,
    user_id: 3,
    categor_id: 2,
    inStock: true,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
  },
  {
    sku: "LM-BLT-004",
    name: "Industrial Timing Belt",
    price: 100,
    user_id: 1,
    categor_id: 1,
    inStock: true,
    image: "https://images.unsplash.com/photo-1597008641621-3d47a6d58f25",
  },
  {
    sku: "LM-SNS-005",
    name: "Loom Tension Sensor",
    price: 50,
    user_id: 2,
    categor_id: 2,
    inStock: false,
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
  },
  {
    sku: "LM-CTL-006",
    name: "Electronic Control Panel",
    price: 20,
    user_id: 3,
    categor_id: 3,
    inStock: true,
    image: "https://images.unsplash.com/photo-1581091870627-3b2b6c1f8f2d",
  },
  // {
  //   sku: "LM-SFT-007",
  //   name: "Hardened Steel Loom Shaft",
  //   price: 800,
  //   user_id: 1,
  //   categor_id: 1,
  //   inStock: true,
  //   image: "https://images.unsplash.com/photo-1581090700225-7d8f3c1b1b31",
  // },
  // {
  //   sku: "LM-PUL-008",
  //   name: "Heavy Duty Pulley Wheel",
  //   price: 80,
  //   user_id: 2,
  //   categor_id: 2,
  //   inStock: true,
  //   image: "https://images.unsplash.com/photo-1581092334497-0c9caa1a8a5b",
  // },
  // {
  //   sku: "LM-ENC-009",
  //   name: "Rotary Encoder for Loom",
  //   price: 120,
  //   user_id: 3,
  //   categor_id: 3,
  //   inStock: false,
  //   image: "https://images.unsplash.com/photo-1581092580486-4f1b2c8a8f1a",
  // },
];

export default function CatalogBar() {
  return (
    <div className="w-full">
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
      <div className="flex flex-wrap justify-center items-center gap-2 mt-2.5">
        {products.map((product, index) => (
          <InventoryPart
            key={index}
            sku={product.sku}
            name={product.name}
            inStock={product.inStock}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}
