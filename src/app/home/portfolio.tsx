"use client";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "@/utils/variants";
import Image from "next/image";

const Portfolio = () => {
  return (
    <section className="section my-36" id="portfolio">
      <div className="container mx-auto">
        <div className="flex justify-center mb-16 md:mb-24">
          <h2 className="text-4xl mx-auto text-center">
            My Portfolio
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* text  */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work.
              </h2>
              <p className="max-w-sm mb-6">
                Presenting my three remarkable projects. As an avid learner, I
                continuously embrace new challenges, pushing boundaries and
                delving deeper into knowledge. With each project, I hone my
                skills and deliver exceptional results.
              </p>
              <a href="https://github.com/mohammadimrans0">
                <button className="btn btn-sm">View all projects</button>
              </a>
            </div>
            {/* project-1  */}

            <a href="https://lifepage.vercel.app/">
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
                  <span className="text-gradient text-3xl">Lifepage</span>
                </div>
                {/* title  */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-2xl text-white">A Social media application</span>
                </div>
              </div>
            </a>
            
            
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-16"
          >
            {/* project-2  */}
            <a href="https://furniture-client.vercel.app/">
              <div className="group relative overflow-hidden border border-solid border-green-500 rounded-xl">
                {/* overlay  */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 translation-all duration-300"></div>
                {/* img  */}
                <Image
                  src="https://i.ibb.co/4Mjw00f/e-commerce.png"
                                  alt="project-1"
                                  height={600 }
                                  width={600}
                  className="group-hover:scale-125 transition-all duration-500"
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient text-3xl">EasyGrocery</span>
                </div>
                {/* title  */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-2xl text-white">Project Title</span>
                </div>
              </div>
            </a>
            {/* project-3  */}
            <a href="https://doctors-portal-71692.web.app">
              <div className="group relative overflow-hidden border border-solid border-green-500 rounded-xl">
                {/* overlay  */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 translation-all duration-300"></div>
                {/* img  */}
                <Image
                  src="https://i.ibb.co/k400G2w/Teethnic.png"
                                  alt="project-3"
                                  height={600}
                                  width={600}
                  className="group-hover:scale-125 transition-all duration-500"
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient text-3xl">Teethnic</span>
                </div>
                {/* title  */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-2xl text-white">Hospital Management Application</span>
                </div>
              </div>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;
