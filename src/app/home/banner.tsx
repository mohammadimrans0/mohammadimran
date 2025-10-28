"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const Banner = () => {
  const h1Ref = useRef(null);
  const divRef = useRef(null);
  const pRef = useRef(null);
  const typeRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      h1Ref.current,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.3, ease: "power4.out" }
    );
    gsap.fromTo(
      divRef.current,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.4, ease: "power4.out" }
    );
    gsap.fromTo(
      pRef.current,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.5, ease: "power4.out" }
    );

    const words = ["Day Dreamer", "Programmer", "Explorer"];
    const mainTimeline = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    words.forEach(word => {
      const timeline = gsap.timeline();
      timeline.to(typeRef.current, { text: word, duration: 2, delay: 2 });
      mainTimeline.add(timeline);
    });
  }, []);

  return (
    <div
      id="home"
      className="relative min-h-[80vh] lg:min-h-[90vh] flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/my-image/imran-front.jpg')" }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* content with glassy effect */}
      <div className="container relative z-10 mx-auto">
        {/* text */}
        <div className="text-center font-secondary lg:text-left mt-[350px] lg:mt-60">
          <h1
            ref={h1Ref}
            className="text-[44px] font-bold leading-[0.9] lg:text-[80px]"
          >
            <span>
              I&apos;m <span className="text-green-400">Imran</span>
            </span>
          </h1>

          <div
            ref={divRef}
            className="font-secondary font-semibold uppercase leading-[2]"
          >
            <span className="mr-2 lg:mr-4 text-[28px] lg:text-[60px] text-green-500">
              A
            </span>
            <span ref={typeRef} className="text-[24px] lg:text-[54px]"></span>
          </div>

          <p ref={pRef} className="mb-8 mx-auto px-2 text-white/90">
            I build dynamic and user-friendly custom software solutions. From
            designing visually stunning UI to optimizing Backend
            functionality, I bring a range of technical skills and creativity to
            each project to ensure a seamless user experience for your customer.
          </p>

          <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
            <Link href="https://t.co/FxJZ5G1R2X" target="_blank">
              <button className="btn btn-sm rounded-full text-white">
                CV / Resume
              </button>
            </Link>
            <Link href="#portfolio">
              <button className="btn-sm rounded-full text-base border border-1 cursor-pointer hover:border-green-500 transition-all">
                My Portfolio
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
