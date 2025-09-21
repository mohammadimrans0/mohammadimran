"use client";
import Link from "next/link";
// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "@/utils/variants";

const Banner = () => {
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
          <motion.h1
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-[44px] font-bold leading-[0.9] lg:text-[80px]"
          >
            <span>
              I'm <span className="text-green-400">Imran</span>
            </span>
          </motion.h1>

          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="font-secondary font-semibold uppercase leading-[2]"
          >
            <span className="mr-2 lg:mr-4 text-[28px] lg:text-[60px] text-green-500">A</span>
            <TypeAnimation
              sequence={[
                "Day Dreamer",
                3000,
                "Programmer",
                3000,
                "Explorer",
                3000,
              ]}
              speed={50}
              className="text-[24px] lg:text-[54px]"
              wrapper="span"
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="mb-8 mx-auto px-2 text-white/90"
          >
            I build dynamic and user-friendly custom software solutions. From
            crafting visually stunning front-end designs to optimizing back-end
            functionality, I bring a range of technical skills and creativity to
            each project to ensure a seamless user experience for your customer.
          </motion.p>

          <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
            <Link
              href="https://docs.google.com/document/d/1TcsC47_THJ1naWtD6brE1jtY6rOburUAD1q1WtipYUY/edit?usp=sharing"
              target="_blank"
            >
              <button className="btn btn-sm rounded-full text-white">
                CV / Resume
              </button>
            </Link>
            <Link href="#portfolio">
              <button className="btn-sm rounded-full text-xl border border-1 cursor-pointer hover:border-green-500 transition-all">
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
