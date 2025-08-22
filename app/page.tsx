"use client";
import Lenis from "lenis";
import { useEffect } from "react";
import Description from "@/components/description";
import Footer from "@/components/footer";
import Intro from "@/components/intro";
import Section from "@/components/section";

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
    <main>
      <Intro />
      <Description />
      <Section />
      <div className="h-screen"></div>
      <Footer />
    </main>
  );
}
