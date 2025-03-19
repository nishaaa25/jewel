import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full relative flex flex-col text-dark-400">
      <Navbar />
      <Header />
      <Featured/>
      <About/>
      <Gallery/>
      <Footer/>
    </div>
  );
}

