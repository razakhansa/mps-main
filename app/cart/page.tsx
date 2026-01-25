import CartList from "@/components/CartList";
import NonCatalogCart from "@/components/NonCatalogCart";
import React from "react";

function page() {
  return (
    <div className="w-full h-auto my-4">
      <CartList />
      <NonCatalogCart />
    </div>
  );
}

export default page;
