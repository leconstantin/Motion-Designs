"use client";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import ZoomParallax from "@/components/zoomParallax";

export default function Index() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="">
      <ZoomParallax />
      <div className="h-screen bg-blue-400"></div>
    </main>
  );
}
