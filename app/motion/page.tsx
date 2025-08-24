"use client";
import Lenis from "@studio-freight/lenis";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import DescriptionText from "@/components/Description/desc";
import Description from "@/components/description";
import Footer from "@/components/footer";
import Intro from "@/components/intro";
import Preloader from "@/components/Preloader/preloader";
import Section from "@/components/section";
import ZoomParallax from "@/components/zoomParallax";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="bg-white">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Intro />
      <Description />
      <Section />
      <ZoomParallax />
      <DescriptionText />
      <div className="h-screen"></div>
      <Footer />
    </main>
  );
}
