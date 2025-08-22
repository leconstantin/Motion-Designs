"use client";
import { motion, useScroll } from "motion/react";
import { useRef } from "react";
import styles from "./style.module.scss";

export default function Paragraph({ paragraph }: { paragraph: string }) {
  const container = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  return (
    <motion.p
      ref={container}
      className={styles.paragraph}
      style={{ opacity: scrollYProgress }}
    >
      {paragraph}
    </motion.p>
  );
}
