"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";

export default function Home() {
  const firstText = useRef<HTMLParagraphElement>(null);
  const secondText = useRef<HTMLParagraphElement>(null);
  const slider = useRef<HTMLDivElement>(null);
  const xPercent = useRef(0);
  const direction = useRef(-1);

  const animate = useCallback(() => {
    if (xPercent.current < -100) {
      xPercent.current = 0;
    } else if (xPercent.current > 0) {
      xPercent.current = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent.current });
    gsap.set(secondText.current, { xPercent: xPercent.current });
    requestAnimationFrame(animate);
    xPercent.current += 0.1 * direction.current;
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => {
          direction.current = e.direction * -1;
        },
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, [animate]);

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
