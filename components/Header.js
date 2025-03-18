import Image from "next/image";
import asset1 from "@/public/assets/asset1.jpg";

export default function Header() {
  return (
    <div className="header-container h-full w-full relative pt-20 flex gap-6">
      <div className="w-1/12 relative">
        <ul className="flex flex-col gap-4 font-semibold text-xl">
          <li>INTRO</li>
          <li>ABOUT</li>
          <li>FEATURED</li>
        </ul>
      </div>
      <div className="w-11/12 relative mt-10">
        <div className="text-[200px] flex-center flex-col leading-[190px] tracking-[-16px]">
          <div>
            LUXURY *
          </div >
          <div className="flex-center gap-4 " >COLECTI<div className="w-[200px] h-[130px] relative rounded-full overflow-hidden ml-2">
              <Image src={asset1} alt="asset1" fill className="object-cover" />
            </div>NS</div>
        </div>
      </div>
    </div>
  );
}
