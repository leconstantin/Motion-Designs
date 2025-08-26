"use client";
import { motion, useScroll } from "motion/react";
import { useRef } from "react";

export default function Paragraph({ paragraph }: { paragraph: string }) {
  const container = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  return (
    <motion.p
      ref={container}
      className="flex text-[60px] leading-16 p-10 max-w-[1280px] flex-wrap text-white"
      style={{ opacity: scrollYProgress }}
    >
      {paragraph}
    </motion.p>
  );
}
