// app/components/WhyChooseUs.tsx

import InventoryPart from "@/components/InventoryPart";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Shop() {
  const data = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <div className="flex flex-col">
      <WhyChooseUs />
      <div className="flex flex-wrap gap-5 items-center justify-items-start">
        {data.map((item) => (
          <InventoryPart
            key={item}
            sku={`SKU-${item}`}
            name={`Product ${item}`}
            inStock={true}
          />
        ))}
      </div>
    </div>
  );
}
