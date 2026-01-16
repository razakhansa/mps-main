"use client";

import Faq from "@/components/FAQ";
import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center  font-sans">
      <main className="flex min-h-screen w-full  flex-col items-center justify-between bg-white  sm:items-start">
        <Faq />
        <LoginForm/>
      </main>
    </div>
  );
}
