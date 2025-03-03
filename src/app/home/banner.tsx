"use client"
import Link from "next/link";
// icons
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "@/utils/variants";
import Image from "next/image";
import imran1 from "@/app/assets/me/imran1.jpg";

const Banner = () => {
  return (
    <div className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text  */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              Mohammad <span>Imran</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Day Dreamer",
                  3000,
                  "Programmer",
                  3000,
                  "Problem Solver",
                  3000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              I build static or dynamic and user-friendly responsive websites.
              From crafting visually stunning front-end designs to optimizing
              back-end functionality, I bring a range of technical skills and
              creativity to each project to ensure a seamless user experience
              for your customer.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <Link href="https://docs.google.com/document/d/1TcsC47_THJ1naWtD6brE1jtY6rOburUAD1q1WtipYUY/edit?usp=sharing" target="_blank">
                <button className="btn btn-lg">CV / Resume</button>
              </Link>
              <Link href="#portfolio" className="text-xl">
                My Portfolio
              </Link>
            </motion.div>
            {/* social  */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <Link href="https://github.com/mohammadimrans0" target="_blank">
                <FaGithub className="text-3xl text-sky-500" />
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=100072489623342" target="_blank">
                <FaFacebook className="text-3xl text-sky-500" />
              </Link>
              <Link href="https://www.linkedin.com/in/mohammadimrans0/" target="_blank">
                <FaLinkedin className="text-3xl text-sky-500" />
              </Link>
            </motion.div>
          </div>
          {/* image  */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 w-full"
          >
            <div className="w-[550px] border border-solid rounded-full bg-green-500">
              <Image
                src={imran1}
                alt="me"
                height={0}
                width={0}
                className="w-[500px] h-[500px] rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
