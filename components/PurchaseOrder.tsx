import Image from "next/image";

export default function PurchaseOrder() {
  return (
    <div className="max-w-[1200px] mx-auto p-4 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 font-inter">
      {/* LEFT SECTION */}
      <div>
        {/* Alert */}
        <div className="flex items-center gap-3 h-[46px] bg-[#e7f6ec] text-[#1b7f3b] border border-[#bfe5cd] rounded-md px-4 text-sm mb-4">
          <Image src="/assets/Icon.svg" alt="icon" width={20} height={20} />
          <p>
            Your Purchase Order has been successfully uploaded and is ready to
            submit!
          </p>
        </div>

        {/* PO Card */}
        <div className="bg-white border border-black/10 rounded-lg p-4 mb-4">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-medium">PO #123456789</h2>
            <span className="bg-[#dcfce7] text-[#137333] text-xs font-medium px-3 py-1 rounded-full">
              Ready to Submit
            </span>
          </div>

          <p className="mt-2 text-base text-[#717182]">
            Uploaded on January 9, 2026 at 2:45 PM
          </p>

          {/* Preview */}
          <div className="border border-gray-200 rounded-md p-6 my-3 flex flex-col items-center gap-4">
            <Image
              src="/assets/Container (1).png"
              alt="PO Preview"
              width={600}
              height={400}
              className="w-full rounded"
            />

            <div className="flex flex-col items-center gap-3 text-sm">
              <span className="text-[#4a5565]">
                purchase_order_123456789.pdf • 2.4 MB
              </span>

              <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-50 cursor-pointer">
                <Image
                  src="/assets/download.svg"
                  alt="download"
                  width={16}
                  height={16}
                />
                Download PO
              </button>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-[#f9fafb] rounded-xl p-5 mt-3">
            <h4 className="text-lg font-semibold text-[#101828] mb-2">
              Order Summary
            </h4>

            <div className="flex justify-between text-sm">
              <p className="text-[#4a5565]">
                Number of Items <br />
                <span className="font-medium text-[#101828]">5 items</span>
              </p>

              <p className="text-[#4a5565] text-right">
                Total Amount <br />
                <span className="text-lg font-semibold text-[#101828]">
                  $12,450.00
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="bg-[#0067b20d] border border-black/10 rounded-2xl p-4">
          <h3 className="text-lg font-medium mb-4">Important Notes</h3>

          <div className="flex gap-4">
            <Image
              src="/assets/notes-imp.svg"
              alt="note"
              width={20}
              height={20}
            />
            <p className="text-sm text-[#4a5565] leading-5">
              Please review your Purchase Order carefully before submitting.
              Once submitted, this PO will be sent for approval and processing.
              You will receive a confirmation email once the order has been
              processed.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="space-y-4">
        {/* Actions */}
        <div className="bg-white rounded-lg p-4">
          <h4 className="text-lg font-medium mb-3">Actions</h4>

          <button className="w-full h-[42px] bg-[#726d69] text-white font-semibold rounded-lg mb-2 cursor-pointer">
            Generate Order
          </button>

          <button className="w-full h-[42px] border border-[#726d69] text-[#726d69] font-semibold rounded-lg cursor-pointer">
            Cancel
          </button>
        </div>

        {/* Details */}
        <div className="bg-white border border-black/10 rounded-lg p-4">
          <h4 className="text-lg font-medium mb-6">Document Details</h4>

          <p className="text-sm text-[#4a5565] mb-4">
            PO Number <br />
            <span className="text-[#101828]">123456789</span>
          </p>

          <p className="text-sm text-[#4a5565] mb-4">
            Status <br />
            <span className="inline-block border border-[#fee685] text-[#d97706] text-xs font-medium px-4 py-1 rounded-lg">
              Pending Submission
            </span>
          </p>

          <p className="text-sm text-[#4a5565] mb-4">
            Uploaded By <br />
            <span className="text-[#101828]">Current User</span>
          </p>

          <p className="text-sm text-[#4a5565]">
            Document Type <br />
            <span className="text-[#101828]">Direct Purchase Order</span>
          </p>
        </div>
      </div>
    </div>
  );
}
