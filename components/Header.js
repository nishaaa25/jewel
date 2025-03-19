import Image from "next/image";
import asset1 from "@/public/assets/asset1.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Header() {
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.to("#header-text", {
      duration: 1,
      y: 0,
      opacity: 1,
      ease: "power2",
    });

    gsap.to("#header-text-2", {
      duration: 1,
      y: 0,
      opacity: 1,
      delay: 0.2,
      ease: "power2",
    });
  }, []);

  return (
    <div
      className="header-container h-full w-10/12 mx-auto relative py-20"
      data-scroll-section
    >
      <div className="w-full h-[25vh] relative flex items-end">
        <ul className="flex flex-col gap-1 font-semibold text-xl">
          <li>INTRO</li>
          <li>ABOUT</li>
          <li>FEATURED</li>
        </ul>
      </div>
      <div className="w-full relative top-[-70px]">
        <div className="text-[15vw] flex-center font-semibold flex-col leading-[16vw] tracking-[-16px]">
          <p id="header-text">LUXURY *</p>
          <div className="flex-center gap-4" id="header-text-2">
            COLECTI
            <div className="w-[200px] h-[130px] relative rounded-full overflow-hidden ml-2">
              <Image src={asset1} alt="asset1" fill className="object-cover" />
            </div>
            NS
          </div>
        </div>
      </div>
    </div>
  );
}
