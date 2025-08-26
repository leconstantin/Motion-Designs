import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import Background from "@/public/images/2.jpg";

export default function Intro() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "120vh"]);
  // you can change 120vh to see different results

  return (
    <div className="h-screen  overflow-hidden ">
      <motion.div style={{ y }} className="relative h-full" ref={container}>
        <Image
          src={Background}
          fill
          alt="image"
          style={{ objectFit: "cover" }}
        />
      </motion.div>
    </div>
  );
}
