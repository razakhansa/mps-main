import DiscountBanner from "@/components/DiscountBanner";
import CatalogBar from "@/components/CatalogBar";
import Faq from "@/components/FAQ";
import HeroSection from "@/components/HeroSection";
import PurchaseOrder from "@/components/PurchaseOrder";
import Clients from "@/components/Clients";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center  font-sans">
      <main className="flex min-h-screen w-full  flex-col items-center justify-between bg-white  sm:items-start">
        <HeroSection />
        <CatalogBar />
        <Clients />
        <Faq />
        <DiscountBanner />
        <PurchaseOrder />
      </main>
    </div>
  );
}
