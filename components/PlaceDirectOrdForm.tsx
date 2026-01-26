import Image from "next/image";

export default function PlaceDirectOrdForm() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <form className="w-full max-w-[912px] rounded-3xl bg-white p-6 shadow-2xl font-inter">
        <h2 className="mb-10 text-xl font-medium text-[#333]">
          Place Direct Order
        </h2>

        {/* PO Number */}
        <label className="mb-2 block text-sm font-medium text-[#212529]">
          PO Number <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className="mb-4 w-full rounded-md border border-[#d0d7e2] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#6b6763]"
        />

        {/* Notes */}
        <label className="mb-2 block text-sm font-medium text-[#212529]">
          Notes{" "}
          <span className="text-xs italic text-[#8a8a8a]">(Optional)</span>
        </label>
        <input
          type="text"
          className="mb-4 w-full rounded-md border border-[#d0d7e2] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#6b6763]"
        />

        {/* Upload */}
        <label className="mb-2 block text-sm font-medium text-[#212529]">
          Upload a File
        </label>

        <div className="mb-6 rounded-lg border-2 border-dashed border-[#d0d7e2] px-6 py-8 text-center font-lexend">
          <button
            type="button"
            className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#6b6763] cursor-pointer"
          >
            <Image
              src="/assets/upload.png"
              alt="upload"
              width={20}
              height={20}
            />
          </button>

          <p className="mb-1 text-sm font-light text-[#111217]">
            Drag & Drop or{" "}
            <span className="cursor-pointer text-[#726D69]">choose file</span>{" "}
            to upload
          </p>

          <small className="text-xs text-[#A4A5AB]">
            Supported formats : Jpeg, png
          </small>
        </div>

        {/* Submit */}
        <button className="w-full rounded-lg bg-[#6b6763] py-3 text-sm font-semibold text-white transition hover:bg-[#5a5653]">
          Submit
        </button>
      </form>
    </div>
  );
}
