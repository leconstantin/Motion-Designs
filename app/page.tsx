"use client";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import Description from "@/components/description";
import Footer from "@/components/footer";
import Intro from "@/components/intro";
import Section from "@/components/section";
import ZoomParallax from "@/components/zoomParallax";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="bg-white">
      <Intro />
      <Description />
      <Section />
      <ZoomParallax />
      <div className="h-screen"></div>
      <Footer />
    </main>
  );
}
