import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full mx-auto relative text-dark-400">
      <Navbar/>
      <Header/>
      {/* <Gallery/> */}
    </div>
  );
}
