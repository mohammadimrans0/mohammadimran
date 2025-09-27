"use client";

import { Backend_skill, Frontend_skill, Full_stack } from "@/utils/skill/skillData";
import SkillDataProvider from "@/utils/skill/skillDataProvider";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Skills = () => {
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      text1Ref.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, delay: 0.5 }
    );
    gsap.fromTo(
      text2Ref.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, delay: 0.5 }
    );
  }, []);

  return (
    <div className="min-h-[85vh] lg:min-h-[78vh] mt-16">
      <div className="flex justify-center">
        <h2 className="text-5xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 inline-block text-transparent bg-clip-text ">
          Skills I Have
        </h2>
      </div>
      <section
        className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-50"
        style={{ transform: "scale(0.9" }}
      >
        <div className="w-full h-auto flex flex-col items-center justify-center">
          <div
            ref={text1Ref}
            className="text-2xl text-white font-medium mt-[10px] text-center mb-[15px]"
          >
            Making apps with modern technologies
          </div>
          <div
            ref={text2Ref}
            className="cursive text-xl text-gray-200 mb-10 mt-[10px] text-center"
          >
            Never miss a task, deadline or idea
          </div>
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
