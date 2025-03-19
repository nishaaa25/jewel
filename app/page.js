"use client";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import { useRef, useState, useEffect } from "react";
import useLocoScroll from "@/hooks/useLocoScroll";
import 'locomotive-scroll/dist/locomotive-scroll.css';


export default function Home() {
  const [preloader, setPreloader] = useState(true);

  useLocoScroll(!preloader);

  const [timer, setTimer] = useState(3);

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);
  return (
    <>
      {preloader ? (
        <div className="preloader-wrapper h-[100vh] w-[100vw] sticky top-0 left-0 right-0 bottom-0 flex-center flex-col bg-black text-cream-200" >
          <h1 className="text-[3vw] leading-[3vw] font-semibold">
            LUXURY SERA
          </h1>
          <h2 className="text-[2vw] leading-[2vw] italic font-bold">
            RIA DO PEIRO
          </h2>
        </div>
      ) : (
        <div className="w-full relative flex flex-col text-dark-400" id="main-container"
        data-scroll-container
        >
          <Navbar />
          <Header />
          <Featured />
          <About />
          <Gallery />
          <Footer />
        </div>
      )}
    </>
  );
}
