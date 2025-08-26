"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {
  const firstText = useRef<HTMLParagraphElement>(null);
  const secondText = useRef<HTMLParagraphElement>(null);
  const slider = useRef<HTMLDivElement>(null);

  let xPercent = 0;
  let direction = -1;

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => {
          direction = e.direction * -1;
        },
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, [slider]);

  return (
    <main className="bg-white relative flex h-screen mb-[100vh] overflow-hidden">
      <Image
        src="/images/1.jpg"
        fill={true}
        alt="background"
        className="object-cover"
      />
      <div className="absolute top-[calc(100vh-300px)]">
        <div ref={slider} className="relative whitespace-nowrap">
          <p
            ref={firstText}
            className="relative m-0 text-white text-7xl lg:text-[230px] pr-[50px] font-medium"
          >
            Welcome in Rwanda -
          </p>
          <p
            ref={secondText}
            className="absolute left-full top-0 m-0 text-7xl text-white lg:text-[230px] pr-[50px] font-medium"
          >
            Welcome in Rwanda -
          </p>
        </div>
      </div>
    </main>
  );
}
