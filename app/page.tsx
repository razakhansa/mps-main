import DiscountBanner from "@/components/DiscountBanner";
import Faq from "@/components/FAQ";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center  font-sans">
      <main className="flex min-h-screen w-full  flex-col items-center justify-between bg-white  sm:items-start">
        <Faq />
        <DiscountBanner/>
      </main>
    </div>
  );
}
