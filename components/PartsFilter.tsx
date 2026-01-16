'use client'
export default function PartsFilter() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-gray-900">
          Find the Right Parts Faster
        </h2>
        <p className=" mt-3 text-sm text-gray-500">
          Having the right automotive parts and car accessories will help you
          to boost your travel comfort and go on the <br />long-distance journey
          comfortably that you have been planning.
        </p>
        <div className="mt-10 rounded-xl bg-gray-100 p-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_1fr_1fr_150px]">
            <div className="flex items-center rounded-lg bg-white px-4 py-3">
              <span className="mr-3 flex justify-center items-center text-[9px] text-gray-400 bg-[#E2E8F0] w-[22px] h-[18px] rounded-full font-[600]">1</span>
              <select className="w-full bg-transparent text-sm text-gray-600 outline-none">
                <option>Select Category</option>
                <option>Engine</option>
                <option>Brakes</option>
                <option>Suspension</option>
              </select>
            </div>
            <div className="flex items-center rounded-lg bg-white px-4 py-3">
              <span className="mr-3 flex justify-center items-center text-[9px] text-gray-400 bg-[#E2E8F0] w-[22px] h-[18px] rounded-full font-[600]">2</span>
              <select className="w-full bg-transparent text-sm text-gray-600 outline-none">
                <option>Select Brand</option>
                <option>Toyota</option>
                <option>Honda</option>
                <option>BMW</option>
              </select>
            </div>
            <div className="flex items-center rounded-lg bg-white px-4 py-3">
              <span className="mr-3 flex justify-center items-center text-[9px] text-gray-400 bg-[#E2E8F0] w-[22px] h-[18px] rounded-full font-[600]">3</span>
              <select className="w-full bg-transparent text-sm text-gray-600 outline-none">
                <option>Select Year</option>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
              </select>
            </div>
            <button className=" rounded-lg bg-gray-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800">
              Find Parts
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}