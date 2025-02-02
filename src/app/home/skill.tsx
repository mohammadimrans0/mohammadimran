"use client"

import { Backend_skill, Frontend_skill, Full_stack } from "@/utils/skill/skillData";
import SkillDataProvider from "@/utils/skill/skillDataProvider";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/skill/motion";

const Skills = () => {
  return (
    <div className="min-h-[85vh] lg:min-h-[78vh]">
      <div className="flex justify-center">
        <h2 className="text-4xl mx-auto text-center h-16 py-8">
          Skills I Have
        </h2>
      </div>
      <section
        className=" flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-50"
        style={{ transform: "scale(0.9" }}
      >
        <div className="w-full h-auto flex flex-col items-center justify-center">
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="text-2xl text-white font-medium mt-[10px] text-center mb-[15px]"
          >
            Making apps with modern technologies
          </motion.div>
          <motion.div
            variants={slideInFromRight(0.5)}
            className="cursive text-xl text-gray-200 mb-10 mt-[10px] text-center"
          >
            Never miss a task, deadline or idea
          </motion.div>
        </div>

        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Frontend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Backend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Full_stack.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
