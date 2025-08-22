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

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    // i want bg from blue yellow to green
    <div className="h-screen   overflow-hidden ">
      {/* <div className="fixed top-0 left-0 flex h-screen w-full">
        <motion.div
          style={{ backgroundColor: "blue" }}
          className="h-screen w-1/3"
        ></motion.div>
        <motion.div
          style={{ backgroundColor: "yellow" }}
          className="h-screen w-1/3"
        ></motion.div>
        <motion.div
          style={{ backgroundColor: "green" }}
          className="h-screen w-1/3"
        ></motion.div>
      </div> */}
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
