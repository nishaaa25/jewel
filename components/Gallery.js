"use client";
import { gallery } from "@/constants";
import asset5 from "@/public/assets/asset5.jpg";
import Image from "next/image";
import { useState } from "react";

function GalleryItem({
  imgUrl,
  title,
  subtext,
  updateActiveImage,
  index,
  category,
}) {
  return (
    <div className="gallery-item-wrapper relative">
      <div />
      <div className="gallery-item w-[100%] h-[100%] relative ">
        <div className="gallery-item-info absolute bottom-[10%] z-1 text-grey-400">
          <h2 className="gallery-item-title leading-[6vw] font-semibold text-[6vw] ">
            {title}
          </h2>
          <h6 className="gallery-item-subtext relative leading-[6vw] text-[6vw] ">
            {subtext}
          </h6>
          <p className="gallery-item-category relative leading-6 text-2xl font-semibold mt-6">
            {category}
          </p>
        </div>
        <div
          className="gallery-item-image"
          style={{ backgroundImage: `url(${imgUrl})` }}
        ></div>
      </div>
      <div />
    </div>
  );
}

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(1);

  return (
    <section className="section-wrapper gallery-wrap bg-dark-400  mx-[-5vw] pt-[10vh] relative no-scrollbar overflow-x-scroll">
      <div className="gallery h-[100vh] py-[10vh] w-[400%] flex flex-wrap relative">
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
