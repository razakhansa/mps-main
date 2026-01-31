import Image from "next/image";

export default function ActionSection() {
  return (
    <div className="w-[360px] h-[387px] bg-white rounded-lg flex flex-col justify-between font-inter p-4">
      {/* Title */}
      <h3 className="text-[20px] font-medium text-[#212529]">Actions</h3>

      {/* Primary Button */}
      <div>
        <button className="w-full h-[42px] py-3 rounded-lg text-[14px] font-semibold bg-[#7a736e] text-white">
          Request RFQ
        </button>
      </div>

      {/* Outline Button */}
      <div>
        <button className="w-full h-[42px] py-3 rounded-lg text-[14px] font-semibold border border-[#726d69] bg-white cursor-pointer">
          Place Direct Order
        </button>
      </div>

      {/* Light Button */}
      <div>
        <button className="w-full h-[44px] flex items-center justify-center gap-2 rounded-lg text-[14px] font-semibold text-[#726d69] border border-[#726d6933] bg-[#f2f2f2] cursor-pointer">
          <Image src="/assets/edit.png" alt="edit" width={18} height={18} />
          <p className="border-b border-[#726d69]">Create PR</p>
        </button>
      </div>

      {/* Upload Section */}
      <div className="h-[165px] flex flex-col justify-between">
        <p className="text-[14px] font-normal">Upload a File</p>

        <div className="h-[133px] border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center">
          <button className="w-9 h-9 rounded-full bg-[#7a736e] flex items-center justify-center mb-2 cursor-pointer">
            <Image
              src="/assets/upload.png"
              alt="upload"
              width={16}
              height={16}
            />
          </button>

          <p className="text-[14px] font-light text-[#111217]">
            Drag & Drop or <span className="text-[#726D69]">choose file</span>{" "}
            to upload
          </p>

          <span className="text-[11px] font-light text-gray-500 mt-1">
            Supported formats : Jpeg, png
          </span>
        </div>
      </div>
    </div>
  );
}
