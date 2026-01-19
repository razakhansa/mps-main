import DiscountBanner from "@/components/DiscountBanner";
"use client";

import Faq from "@/components/FAQ";
import LoginForm from "@/components/LoginForm";
import CatalogBar from "@/components/CatalogBar";
import Faq from "@/components/FAQ";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center  font-sans">
      <main className="flex min-h-screen w-full  flex-col items-center justify-between bg-white  sm:items-start">
        <CatalogBar />
        <Navbar />
        <Faq />
        <DiscountBanner/>
        <LoginForm/>
      </main>
    </div>
  );
}
