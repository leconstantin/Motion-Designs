import { type MotionValue, motion, useTransform } from "motion/react";
import Image from "next/image";
import Pic2 from "@/public/images/2.jpg";
export const Section2 = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);
  return (
    <motion.div className="relative h-screen" style={{ scale, rotate }}>
      <Image src={Pic2} alt="img" placeholder="blur" fill />
    </motion.div>
  );
};
