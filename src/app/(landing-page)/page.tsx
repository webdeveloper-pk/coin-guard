"use client";

import Image from "next/image";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./_components/header";
import Hero from "./_components/hero";
import About from "./_components/about";
import Footer from "./_components/footer";
import Tokenomics from "./_components/tokenomics";
import Working from "./_components/working";
import BgEllipse1 from "@/public/bg-ellipse1.png";
import BgEllipse2 from "@/public/bg-ellipse2.png";
import Roadmap from "./_components/roadmap";

export default function Home() {
  React.useEffect(() => {
    AOS.init({
      // duration: 1000,
      // easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <div>
      <div className="relative w-full">
        {/* bubbles */}
        <div className="bubbles">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>
        <div className="absolute left-0 top-[-80px] md:top-[-90px] 2xl:top-[-100px] w-full h-full">
          <Image
            src={BgEllipse1}
            alt="ellipse-1"
            className="w-full h-full lg:h-auto"
          />
        </div>
        <Header />
        <Hero />
      </div>
      <div className="relative w-full">
        <div className="absolute left-0 top-[-100px] md:top-[-150px] 2xl:top-[-300px] w-full h-full">
          <Image
            src={BgEllipse2}
            alt="ellipse-2"
            className="w-full h-full lg:h-auto"
          />
        </div>
        <About />
        <Working />
        <Tokenomics />
      </div>
      <Roadmap />
      <Footer />
    </div>
  );
}
