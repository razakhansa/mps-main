import CartList from "@/components/CartList";
import NonCatalogCart from "@/components/NonCatalogCart";
import NonCatalogItemForm from "@/components/NonCatalogItemForm";
import React from "react";

function page() {
  return (
    <div className="w-full h-auto my-4">
      <CartList />
      <NonCatalogCart />
    <div className="w-full p-8 my-8">
      <NonCatalogItemForm />
    </div>
    </div>
  );
}

export default page;
