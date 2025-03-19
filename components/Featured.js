import Image from "next/image";
import asset2 from "@/public/assets/asset2.jpg";
import asset6 from "@/public/assets/asset6.jpg";
import asset8 from "@/public/assets/asset8.jpg";

export default function Featured() {
  return (
    <section className="flex w-11/12 mx-auto h-[125vh] gap-20 relative overflow-x-hidden my-10">
      <div className="w-[27%] relative h-[60vh] transform translate-y-[35vh]">
        <span className="absolute z-1 font-semibold top-[-7vh] text-3xl">
          01
        </span>
        <Image src={asset2} alt="asset5" fill className="object-cover" />
      </div>
      <div className="w-[48%] relative h-full">
        <span className="absolute z-1 font-semibold text-[8vh] leading-[8vh] top-[-2vh] right-4">
          02
        </span>
        <Image src={asset6} alt="asset5" fill className="object-cover z-0" />
      </div>
      <div className="w-[23%] relative h-[35vh] self-end">
        <span className="absolute z-1 font-semibold top-[-7vh] text-3xl">
          03
        </span>
        <div className="absolute top-[-50vh] text-[8vh] leading-[8vh] font-semibold left-[-7vw] text-center">
            <p>SHOP NOW</p>
            <p > 30% OFF</p>
         </div>
        <Image src={asset8} alt="asset5" fill className="object-cover" />
      </div>
    </section>
  );
}
