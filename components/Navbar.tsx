import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full h-[176px] font-inter">
      {/* Top Bar */}
      <div className="h-[40px] bg-[#eff4f7] flex items-center justify-between px-[60px] text-[13px] text-[#666]">
        <div className="flex gap-[15px]">
          <Link href="#">About Us</Link>
          <Link href="#">FAQ</Link>
          {/* <Link href="#">Order Tracking</Link> */}
        </div>
        <div>{/* PKR */}</div>
      </div>

      {/* Header */}
      <div className="h-[76px] flex items-center justify-center bg-[#eff4f7] border border-[#d4dee2]">
        <div className="flex items-center justify-between w-full px-[60px]">
          {/* Logo */}
          <Link href="#">
            <Image src="/assets/Logo.png" alt="Logo" width={162} height={36} />
          </Link>

          {/* Search Box */}
          <div className="relative w-[770px] h-[46px]">
            <input
              type="text"
              placeholder="Search popular products..."
              className="w-full h-full px-[16px] pr-[45px] rounded-[10px] border border-[#ddd] outline-none"
            />
            <button className="absolute right-[18px] top-1/2 -translate-y-1/2">
              <Image
                src="/assets/search.svg"
                alt="Search"
                width={22}
                height={22}
              />
            </button>
          </div>

          {/* Header Icons */}
          <div className="flex items-center gap-[20px]">
            {/* Account */}
            <Link href={"/login"}>
              <div className="flex items-center gap-[8px]">
                <div className="w-[46px] h-[46px] bg-[#e2eaed] border border-[#d4dee2] rounded-full flex items-center justify-center">
                  <button>
                    <Image
                      src="/assets/user-icon.svg"
                      alt="User"
                      width={24}
                      height={24}
                    />
                  </button>
                </div>
                <p className="text-[13px] font-bold text-[#333] leading-tight">
                  <span className="text-[11px] text-[#76797a]">Sign in</span>
                  <br />
                  Account
                </p>
              </div>
            </Link>

            {/* Wishlist */}
            <div className="relative">
              <div className="w-[46px] h-[46px] bg-[#e2eaed] border border-[#d4dee2] rounded-full flex items-center justify-center">
                <Image
                  src="/assets/fav-heart.svg"
                  alt="Wishlist"
                  width={24}
                  height={24}
                />
              </div>
              <span className="absolute -top-[5px] -right-[4px] w-[19px] h-[19px] bg-red-500 text-white text-[11px] rounded-full flex items-center justify-center">
                0
              </span>
            </div>

            {/* Cart */}
            <div className="relative">
              <div className="w-[46px] h-[46px] bg-[#e2eaed] border border-[#d4dee2] rounded-full flex items-center justify-center">
                <Image
                  src="/assets/cart-icon.svg"
                  alt="Cart"
                  width={24}
                  height={24}
                />
              </div>
              <span className="absolute -top-[5px] -right-[4px] w-[19px] h-[19px] bg-red-500 text-white text-[11px] rounded-full flex items-center justify-center">
                0
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="w-full border-b border-[#d4dee2] flex items-center">
        <nav className="w-[800px] h-[60px] flex items-center gap-[35px] ml-[60px] text-[15px] font-bold">
          {/* Categories */}
          <div className="flex items-center gap-[10px]">
            <button>
              <Image
                src="/assets/category.svg"
                alt="Category"
                width={22}
                height={22}
              />
            </button>
            <span>All Categories</span>
          </div>

          <span className="w-[1px] h-[16px] bg-[#d4dee2]" />

          {/* Links */}
          <ul className="flex gap-[20px]">
            <li>
              <Link href="#" className="hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-500">
                Gears
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-500">
                Bearings
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-500">
                Motors
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-500">
                Hydraulics
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-500">
                Electrical
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-500">
                More
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-500">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
