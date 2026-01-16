// app/components/WhyChooseUs.tsx

import InventoryPart from "@/components/InventoryPart";
import ToolbarFilter from "@/components/Toolbar";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Shop() {
  const data = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <div className="flex flex-col">
      <WhyChooseUs />
      <ToolbarFilter/>
      <div className="flex flex-wrap gap-5 items-center justify-items-start">
        {data.map((item) => (
          <div key={item}>
            <InventoryPart />
          </div>
        ))}
      </div>
    </div>
  );
}
