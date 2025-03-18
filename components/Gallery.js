import asset5 from "@/public/assets/asset5.webp";
import Image from "next/image";

export default function Gallery() {
  return (
    <section className="w-full h-[60vh] relative flex-center mt-24 overflow-hidden">
      <div className="w-1/3 h-full relative">
        <Image src={asset5} alt="alt" fill className="object-cover" />
      </div>
      <div className="w-1/3 h-full relative">
        <Image src={asset5} alt="alt" fill className="object-cover" />
      </div>
      <div className="w-1/3 h-full relative">
        <Image src={asset5} alt="alt" fill className="object-cover" />
      </div>
    </section>
  );
}
