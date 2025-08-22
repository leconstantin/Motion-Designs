"use client";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import ParagraphCharacter from "@/components/text/character";
import Paragraph from "@/components/text/paragraph";
import ParagraphWord from "@/components/text/word";

const paragraph =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";
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
    <main className="min-h-[200vh] bg-black">
      <div className="h-screen bg-black"></div>
      <Paragraph paragraph={paragraph} />
      <div className="h-screen bg-black"></div>
      <ParagraphWord paragraph={paragraph} />
      <div className="h-screen bg-black"></div>
      <ParagraphCharacter paragraph={paragraph} />
      <div className="h-screen bg-black"></div>
    </main>
  );
}
