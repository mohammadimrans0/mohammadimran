"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useInView } from "react-intersection-observer";

const Portfolio = () => {
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);

  const { ref: leftRef, inView: leftInView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const { ref: rightRef, inView: rightInView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  useEffect(() => {
    if (leftInView) {
      gsap.fromTo(
        leftColumnRef.current,
        { opacity: 0, x: -80 },
        { opacity: 1, x: 0, duration: 1.2, delay: 0.3, ease: "power4.out" }
      );
    }
  }, [leftInView]);

  useEffect(() => {
    if (rightInView) {
      gsap.fromTo(
        rightColumnRef.current,
        { opacity: 0, x: 80 },
        { opacity: 1, x: 0, duration: 1.2, delay: 0.2, ease: "power4.out" }
      );
    }
  }, [rightInView]);

  return (
    <section className="section my-32 px-4" id="portfolio">
      <div className="container mx-auto">
        <div className="flex justify-center mb-16 md:mb-24">
          <h2 className="text-5xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 inline-block text-transparent bg-clip-text">My Portfolio</h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div
            ref={leftColumnRef}
            className="flex-1 flex flex-col gap-y-16 mb-10 lg:mb-0"
          >
            {/* text  */}
            <div ref={leftRef}>
              <h2 className="leading-tight text-accent text-5xl mb-4">
                My Latest <br />
                Work.
              </h2>
              <p className="max-w mb-6 text-xl">
                Presenting my three remarkable projects. As an avid learner, I
                continuously embrace new challenges, pushing boundaries and
                delving deeper into knowledge. With each project, I hone my
                skills and deliver exceptional results.
              </p>
              <Link href="https://github.com/mohammadimrans0" target="_blank">
                <button className="btn btn-sm">View all projects</button>
              </Link>
            </div>
            {/* project-1 -> Lifepage */}

            <Link href="https://lifepage.vercel.app/" target="_blank">
              <div className="group relative overflow-hidden border border-solid border-green-500 rounded-xl">
                {/* overlay  */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 translation-all duration-300"></div>
                {/* img  */}
                <Image
                  src="/assets/project-image/lifepage.png"
                  alt="project-2"
                  height={600}
                  width={600}
                  className="group-hover:scale-125 transition-all duration-500"
                />
                {/* pretitle  */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-green-500 text-3xl">Lifepage</span>
                </div>
                {/* title  */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-2xl text-white">
                    A Social media application
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div
            ref={rightColumnRef}
            className="flex-1 flex flex-col gap-y-12"
          >
            {/* project-2 -> EasyGrocery */}
            <Link href="https://easygrocery.vercel.app/" target="_blank">
              <div ref={rightRef} className="group relative overflow-hidden border border-solid border-green-500 rounded-xl">
                {/* overlay  */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 translation-all duration-300"></div>
                {/* img  */}
                <Image
                  src="/assets/project-image/easygrocery.png"
                  alt="project-1"
                  height={600}
                  width={600}
                  className="group-hover:scale-125 transition-all duration-500"
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-green-500 text-3xl">EasyGrocery</span>
                </div>
                {/* title  */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-2xl text-white">E-Commerce Grocery Shopping Platform</span>
                </div>
              </div>
            </Link>
            {/* project-3  */}
            <Link href="https://vibechat-sz97.onrender.com/" target="_blank">
              <div className="group relative overflow-hidden border border-solid border-green-500 rounded-xl">
                {/* overlay  */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 translation-all duration-300"></div>
                {/* img  */}
                <Image
                  src="/assets/project-image/vibechat.png"
                  alt="project-3"
                  height={600}
                  width={600}
                  className="group-hover:scale-125 transition-all duration-500"
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-green-500 text-3xl">VibeChat</span>
                </div>
                {/* title  */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-2xl text-white">
                    Realtime Chat Application
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
