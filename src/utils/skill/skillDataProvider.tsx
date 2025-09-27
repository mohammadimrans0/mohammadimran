"use client";

import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import gsap from "gsap";

interface imageProps {
  src: string;
  width: number;
  height: number;
  index: number;
}

const SkillDataProvider = ({ src, width, height, index }: imageProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageRef = useRef(null);

  useEffect(() => {
    if (inView) {
      gsap.to(imageRef.current, {
        opacity: 1,
        delay: index * 0.3,
        duration: 0.5,
      });
    }
  }, [inView, index]);

  return (
    <div ref={ref}>
      <Image
        ref={imageRef}
        src={src}
        alt="skill image"
        height={height}
        width={width}
        style={{ opacity: 0 }}
      />
    </div>
  );
};

export default SkillDataProvider;
