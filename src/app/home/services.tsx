"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const Services = () => {
  const [services, setServices] = useState<
    { id: number; img: string; title: string; description: string }[]
  >([]);

  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    fetch("/assets/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // GSAP stacking animation
  useEffect(() => {
    if (cardsRef.current.length > 0) {
      gsap.fromTo(
        cardsRef.current,
        {
          y: 100,
          opacity: 0,
          rotate: 10,
        },
        {
          y: 0,
          opacity: 1,
          rotate: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        }
      );
    }
  }, [services]);

  return (
    <section className="my-20" id="services">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex justify-center mb-8">
          <h2 className="text-5xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 inline-block text-transparent bg-clip-text ">
            My Services
          </h2>
        </div>

        {/* Short intro */}
        <div className="w-full h-auto flex flex-col items-center justify-center">
          <div className="text-2xl text-white font-medium mt-[10px] text-center mb-[15px]">
            From sleek websites to powerful apps, I craft digital solutions that
          </div>
          <div className="cursive text-xl text-gray-200 mb-10 mt-[10px] text-center">
            help you grow and succeed.
          </div>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-x-10 gap-y-12">
          {services.map((service, i) => (
            <div
              key={service.id}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              className="relative w-[330px] h-[420px] border border-green-500 flex flex-col items-center gap-y-4 p-5 rounded-xl bg-[#171f38] shadow-lg hover:shadow-green-500/30 transition-shadow duration-300"
            >
              <Image
                src={service.img}
                alt={service.title}
                width={300}
                height={200}
                className="w-full h-[200px] object-cover rounded-md"
              />
              <h2 className="text-green-400 text-2xl font-semibold mt-2">
                {service.title}
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
