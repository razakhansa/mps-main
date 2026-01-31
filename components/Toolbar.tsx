'use client'
import Image from 'next/image'
import PartsFilter from './PartsFilter'

export default function ToolbarFilter() {
  return (
    <>
    <div className='w-full flex justify-center bg-white mt-7'>
    <div className="w-[85%] mx-auto max-w-6xl flex justify-between border-t border-gray-200 px-4 pt-7 font-inter">
      {/* Left */}
      <div className="flex items-center gap-[19px] text-gray-400">
        <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-white text-sm bg-gray-600">
          <Image src="/assets/arrow.svg" alt="Filter" width={16} height={16} />
          Filter
        </button>
        <span className="text-sm text-gray-500">
          Showing 1–20 of 60 results
        </span>
      </div>
      {/* Right */}
      <div className="flex items-center gap-2">
        <select className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm outline-none">
          <option>Default sorting</option>
        </select>
        <select className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm outline-none">
          <option>20 items</option>
        </select>
        <button className="rounded-md border border-gray-300 bg-gray-100 px-3 py-1.5 text-sm">
           <Image src="/assets/grid.svg" alt="grid" width={16} height={16} />
        </button>
        <button className="rounded-md border border-gray-300 bg-gray-100 px-3 py-1.5 text-sm">
           <Image src="/assets/flex.svg" alt="Flex" width={16} height={16} />
        </button>
      </div>
    </div>
    </div>
    <PartsFilter/>
    </>
  )
}