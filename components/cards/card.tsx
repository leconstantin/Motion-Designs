"use client";
import {
  type MotionValue,
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import type { TProject } from "@/config/data";
import styles from "./style.module.scss";

const Card = ({
  title,
  description,
  src,
  link,
  color,
  progress,
  range,
  targetScale,
  i,
}: TProject & {
  i: number;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}) => {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      className="sticky flex items-center justify-center h-screen top-0"
      ref={container}
    >
      <motion.div
        className="flex flex-col relative -top-1/4 h-[500px] w-[1000px] p-12 rounded-xl origin-top"
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        <h2 className="text-4xl font-bold text-center m-0">{title}</h2>
        <div className="flex w-full h-full mt-[50px] gap-[50px]">
          <div className="w-1/2 relative top-[10%]">
            <p className="text-[16px] leading-[1.5]">{description}</p>
            <span className=" flex items-center gap-[5px]">
              <a href={link} target="_blank" className="text-sm cursor-pointer">
                See more
              </a>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>See more</title>
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>

          <div className="relative w-[60%] h-full overflow-hidden rounded-xl">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <Image
                fill
                src={`/images/${src}`}
                alt="image"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
