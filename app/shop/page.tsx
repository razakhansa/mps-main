// app/components/WhyChooseUs.tsx

import InventoryPart from "@/components/InventoryPart";
import Image from "next/image";
import Benefits from "@/components/Benefits";
import ToolbarFilter from "@/components/Toolbar";

export default function Shop() {
  const data = Array.from({ length: 10 }, (_, i) => i + 1);
  return ( 
    <div className="flex flex-col bg-white">
      <Benefits />
      <ToolbarFilter/>
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
