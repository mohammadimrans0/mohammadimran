"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/assets/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section className="my-10" id="services">
      <div className="container mx-auto">
        <div className="flex justify-center mb-12">
          <h2 className="text-4xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 inline-block text-transparent bg-clip-text mx-auto text-center h-12">
            What I do
          </h2>
        </div>

        <div>
          <h1 className="">
            My expert services are designed to help you achieve your goals
            efficiently and effectively. I offer a range of tailored solutions
            that are specifically crafted to meet your unique needs, whether
            you&apos;re looking to build a stunning website, optimize your online
            presence, or create engaging content. As an experienced developer, I
            am dedicated to providing you with the highest quality service and
            support, helping you to succeed in today&apos;s competitive digital
            landscape.
          </h1>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-x-20 gap-y-16">
          {services.map((service: { id: number; img: string; title: string; description: string }) => (
            <div
              key={service.id}
              className="w-[300px] md:w-[350px] h-[415px] md:h-[450px] border border-solid border-green-500 flex flex-col items-center gap-y-4 p-4 rounded-xl bg-[#171f38]"
              >
                  <Image
                  src={service.img}
                  alt="img"
                  width={300}
                  height={200}
                  className="w-[300px] md:w-[350px] h-[200px] md:h-[220px] rounded-md"
                  />
              {/* <img
                src={service.img}
                alt="img"
                className="w-[300px] md:w-[350px] h-[200px] md:h-[220px] rounded-md"
              /> */}
              <h2 className="text-orange-500 text-xl md:text-3xl">
                {service.title}
              </h2>
              <p className="text-start text-sm md:text-base">
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
