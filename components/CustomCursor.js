"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const follower = document.querySelector(".follower");

    const onMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });

      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const onMouseEnter = () => {
      gsap.to(cursor, { scale: 2, backgroundColor: "rgba(0,0,0,0.2)" });
    };

    const onMouseLeave = () => {
      gsap.to(cursor, { scale: 1, backgroundColor: "transparent" });
    };

    window.addEventListener("mousemove", onMouseMove);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <div className="cursor fixed w-5 h-5 border-2 border-black rounded-full pointer-events-none mix-blend-difference z-[9999]" />
      <div className="follower fixed w-10 h-10 bg-black opacity-70 rounded-full pointer-events-none z-[9998]" />
    </>
  );
}
