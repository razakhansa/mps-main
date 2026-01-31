import Image from "next/image";

const logos = [
  "/assets/logo-isuzu.png.png",
  "/assets/logo-porsche.png.png",
  "/assets/logo-dacia.png.png",
  "/assets/logo-peugeot.png.png",
  "/assets/logo-honda.png.png",
  "/assets/logo-tesla.png.png",
];

export default function Clients() {
  return (
    <div className="w-full flex justify-center items-center py-3">
      <div className=" flex justify-around items-center w-[80%] gap-2 cursor-pointer my-6">
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt="brand logo"
            width={161}
            height={46}
            className="object-contain"
          />
        ))}
      </div>
    </div>
  );
}
