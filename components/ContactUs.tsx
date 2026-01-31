import Image from "next/image";

export default function ContactUs() {
  return (
    <div className="w-full font-inter bg-white">
      {/* HERO / ABOUT SECTION */}
      <div
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/section.svg')" }}
      >
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 w-[75%] text-center text-white">
          <h2 className="text-[57px] font-medium mb-2">Get in touch</h2>
          <p className="text-[40px] font-normal opacity-90">
            Have questions about our loom spare parts? We're here to help you
            find the perfect solution.
          </p>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <section className="w-full mt-12">
        <div className="w-[80%] mx-auto flex gap-10 items-start">
          {/* FORM */}
          <div className="flex-1 bg-white">
            <h3 className="text-[30px] font-medium text-black mb-9">
              Send Us a Message
            </h3>

            <form className="flex flex-col gap-4">
              <label className="text-sm font-medium text-[#364153]">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-lg p-3"
              />

              <label className="text-sm font-medium text-[#364153]">
                Email address *
              </label>
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 rounded-lg p-3"
              />

              <label className="text-sm font-medium text-[#364153]">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Phone Number"
                className="border border-gray-300 rounded-lg p-3"
              />

              <label className="text-sm font-medium text-[#364153]">
                Subject *
              </label>
              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-300 rounded-lg p-3"
              />

              <label className="text-sm font-medium text-[#364153]">
                Message *
              </label>
              <textarea
                placeholder="Message"
                className="border border-gray-300 rounded-lg p-3 h-[120px] resize-none"
              />

              <button className="bg-[#6b6b6b] hover:bg-[#555] text-white p-3 rounded-lg">
                Send Message
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="w-[35%] flex flex-col gap-6 bg-white">
            <div>
              <h3 className="text-[30px] font-medium mb-9">
                Contact Information
              </h3>
              <p className="text-base text-[#4A5565] leading-6">
                Reach out to us through any of the following channels. Our team
                is ready to assist you with your loom spare parts needs.
              </p>
            </div>

            <div className="w-[420px] mt-5 space-y-6">
              {/* ITEM */}
              {[
                {
                  icon: "/assets/location.svg",
                  title: "Address",
                  text: "123 Industrial Avenue\nTextile District, TX 75001\nUnited States",
                },
                {
                  icon: "/assets/phone.svg",
                  title: "Phone",
                  text: "Main: +1 (555) 123-4567\nSupport: +1 (555) 123-4568\nToll Free: 1-800-LOOMPARTS",
                },
                {
                  icon: "/assets/mail.svg",
                  title: "Email",
                  text: "Sales: sales@loompartspro.com\nSupport: support@loompartspro.com\nGeneral: info@loompartspro.com",
                },
                {
                  icon: "/assets/hours.svg",
                  title: "Business Hours",
                  text: "Mon - Fri: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM\nSunday: Closed",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Image src={`${item.icon}`} alt="" width={24} height={24} />
                  </div>

                  <div>
                    <h4 className="text-base font-semibold">{item.title}</h4>
                    <p className="text-sm text-gray-600 whitespace-pre-line">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* EMERGENCY */}
            <div className="bg-gray-100 p-5 rounded">
              <strong>Emergency Support</strong>
              <p className="text-sm text-[#4A5565] mt-2">
                For urgent spare parts needs outside business hours, call our
                emergency hotline.
                <br />
                +1 (555) 911-PARTS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISIT */}
      <div className="flex justify-center items-center text-[30px] font-medium mt-12 bg-slate-50 h-[50px]">
        Visit Our Facility
      </div>

      {/* MAP */}
      <section className="h-[386px] bg-[#dfe3e6] flex flex-col items-center justify-center">
        <div className="flex flex-col items-center mb-3">
          <Image src="/assets/location.svg" alt="" width={48} height={48} />
          <p className="text-base text-[#4A5565] mt-2">Map Location</p>
        </div>
        <p className="text-sm text-[#4A5565]">
          123 Industrial Avenue, Textile District, TX 75001
        </p>
      </section>
    </div>
  );
}
