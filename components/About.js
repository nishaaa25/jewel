import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function About() {
  return (
    <div
      className="w-10/12 mx-auto relative my-30 about-section"
      data-scroll-section
    >
      <h2 className="text-2xl uppercase font-semibold">Our Story</h2>
      <p
        className="text-[4vw] leading-[4vw] about-text mt-6 text-black opacity-80 font-medium "
        id="about-text"
        data-scroll
      >
        At Sera, we craft timeless jewelry that celebrates your unique style and
        special moments. Our pieces blend elegance with exceptional
        craftsmanship, using only the finest materials. From delicate everyday
        wear to bold statement designs, each creation a story. From delicate
        everyday wear to bold statement tells a story. Whether you&apos;re
        searching for the perfect gift , we are here to add a touch of sparkle
        to your journey.
      </p>
    </div>
  );
}
