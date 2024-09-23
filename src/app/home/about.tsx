"use client"
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "@/utils/variants";

const About = () => {
  return (
    <section id="about" className="container mx-auto my-24">
      <div className="flex justify-center mb-20">
        <h2 className="text-4xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 inline-block text-transparent bg-clip-text mx-auto text-center h-12">
          About Me
        </h2>
      </div>

      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="grid gird-clos-1 justify-items-center">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 border-solid border-4 md:border-8 rounded-full w-20 md:w-32 h-20 md:h-32 flex items-center justify-center text-3xl md:text-4xl mb-4">
              <div>2+</div>
            </div>
            <p className="text-sm md:text-base ">years</p>
            <p className="text-sm md:text-base text-orange-400">Experience</p>
          </div>
          <div className="text-sm md:text-base grid gird-clos-1 justify-items-center">
            <div className="bg-gradient-to-r from-pink-500 to-yellow-500 border-solid border-4 md:border-8 rounded-full w-20 md:w-32 h-20 md:h-32 flex items-center justify-center text-3xl md:text-4xl mb-4">
              20+
            </div>
            <p className="text-sm md:text-base ">completed</p>
            <p className="text-sm md:text-base text-orange-400">Projects</p>
          </div>
          <div className="text-sm md:text-base grid gird-clos-1 justify-items-center">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 border-solid border-4 md:border-8 rounded-full w-20 md:w-32 h-20 md:h-32 flex items-center justify-center text-3xl md:text-4xl mb-4">
              150+
            </div>
            <p className="text-sm md:text-base ">problems</p>
            <p className="text-sm md:text-base text-orange-400">Solved</p>
          </div>
        </div>
        <p className="my-8 ">
          I am a self-taught software developer with over 2+ years of
          experience. My expertise primarily revolves around constructing
          front-end websites using React.js & Next.js, developing mobile app
          user interfaces with React Native, and employing Node.js, Django
          alongside MySQL, PostgreSQL and MongoDB to implement dynamic
          functionality. Currently, I am dedicated to broadening my skill in
          Competitive Programming, aiming to enhance my capabilities and tackle
          a more diverse range of projects.
        </p>
        <div className="text-center lg:p-4">
          <a href="#contact">
            <button className="btn btn-lg">Contact me</button>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
