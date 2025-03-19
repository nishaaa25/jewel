"use client";
import { gallery } from "@/constants";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import cn from "classnames";
import useOnScreen from "@/hooks/useOnScreen";

gsap.registerPlugin(ScrollTrigger);

function GalleryItem({ imgUrl, title, subtext, updateActiveImage, index, category }) {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index, updateActiveImage]);

  return (
    <div className={cn("gallery-item-wrapper relative", { 'is-inview': onScreen })} ref={ref}>
      <div/>
      <div className="gallery-item w-[100%] h-[100%] relative">
        <div className="gallery-item-info absolute bottom-[10%] z-1 text-grey-400">
          <h2 className="gallery-item-title leading-[7vw] font-semibold text-[7vw] ">{title}</h2>
          <h6 className="gallery-item-subtext relative leading-[7vw] text-[7vw] ">{subtext}</h6>
          <p className="gallery-item-category relative leading-6 text-2xl font-semibold mt-6">{category}</p>
        </div>
        <div className="gallery-item-image" style={{ backgroundImage: `url(${imgUrl})` }}></div>
      </div>
      <div/>
    </div>
  );
}

export default function Gallery() {
  const ref = useRef();
  const [activeImage, setActiveImage] = useState(1);

  useGSAP(() => {
    const sections = gsap.utils.toArray(".gallery-item-wrapper");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: "top top",
        snap: 1 / (sections.length - 1),
        end: () => `+=${ref.current.offsetWidth}`,
        pin: true,
        scrub: 1,
      },
    });
  }, []);

  return (
    <section className="section-wrapper gallery-wrap bg-dark-400 mx-[-5vw] pt-[10vh] relative overflow-hidden"
      data-scroll-section>
      <div className="gallery h-[100vh] py-[10vh] pl-[5vw] w-[400%] flex flex-wrap relative" ref={ref}>
        <div className="gallery-counter absolute top-[10%] left-[10vw] z-1 leading-4 font-semibold text-2xl flex text-grey-400">
          <span>{activeImage}</span>
          <div className=" bg-white w-[6.25vw] mx-[10px] my-2 h-[1px]"></div>
          <span>{gallery.length}</span>
        </div>
        {gallery.map((item, index) => (
          <GalleryItem
            key={item.imgUrl}
            index={index}
            {...item}
            updateActiveImage={(index) => setActiveImage(index + 1)}
          />
        ))}
      </div>
    </section>
  );
}
