"use client";

import { useState } from "react";
import Image from "next/image";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="w-[400px] h-[426px] bg-white flex flex-col justify-around">
      
      <h1 className="text-[32px] font-bold mb-5">
        Log in
      </h1>

      <div className="relative w-[400px] h-[65px] border border-[#E6E6E6] rounded-[10px] flex flex-col justify-around">
        <label className="text-[12px] font-semibold mt-1 ml-3">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full px-3 py-[6px] text-[14px] border-none outline-none placeholder:text-[#9ca3af]"
        />
      </div>

      <div className="relative w-[400px] h-[65px] border border-[#E6E6E6] rounded-[10px] flex flex-col justify-around">
        <label className="text-[12px] font-semibold mt-1 ml-3">
          Password
        </label>

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your email password"
          className="w-full px-3 py-[6px] pr-10 text-[14px] border-none outline-none placeholder:text-[#9ca3af]"
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-[36px] cursor-pointer text-gray-400 select-none"
        >
          {showPassword ? <Image src={"/assets/hide.png"} alt='hide' width={22}  height={24} /> : <Image src={"/assets/visible.png"} alt='hide' width={22}  height={24} />}
        </span>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-[#6b6561] text-white text-[18px] font-bold rounded-[8px] hover:bg-[#5a5552] transition"
      >
        Log in
      </button>
      
      <div className="text-[14px] ml-3 mb-4">
        <a href="#" className="text-[#726D69] underline">
          Forgot your password?
        </a>
      </div>

    </form>
  );
}
