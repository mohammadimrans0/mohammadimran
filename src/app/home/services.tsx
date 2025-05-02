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
          <h2 className="text-5xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 inline-block text-transparent bg-clip-text">
            What I do
          </h2>
        </div>

        <div>
          <h1 className="max-w-5xl mx-auto text-center text-base lg:text-md leading-relaxed px-2">
            I offer a comprehensive range of
            services to help you succeed in the digital world. Whether you need a
            responsive website, a powerful web application, or a robust API, I
            have the skills and experience to deliver high-quality results. I am committed to providing exceptional service and support, ensuring that your project is completed on time and within
            budget. I take pride in my attention to detail and my ability to
            communicate effectively with clients, ensuring that you are always
            informed and involved throughout the development process. With a
            focus on quality and customer satisfaction, I strive to exceed your
            expectations and deliver solutions that drive results.
          </h1>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-x-12 gap-y-12">
          {services.map((service: { id: number; img: string; title: string; description: string }) => (
            <div
              key={service.id}
              className="w-[350px] h-[420px] md:h-[450px] border border-solid border-green-500 flex flex-col items-center gap-y-4 p-4 rounded-xl bg-[#171f38]"
              >
                  <Image
                  src={service.img}
                  alt="img"
                  width={300}
                  height={200}
                  className="w-[300px] md:w-[350px] h-[200px] md:h-[220px] rounded-md"
                  />
              <h2 className="text-green-500 text-3xl">
                {service.title}
              </h2>
              <p className="text-start text-base">
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
