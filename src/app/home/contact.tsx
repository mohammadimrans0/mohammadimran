/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useRef } from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "@/utils/variants";
// image
import gmail from "../assets/logo/gmail.png";
import telegram from "../assets/logo/telegram.png";
// gmail plugin
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

    const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hkf4r2k",
        "template_dv5rehs",
        form.current as any,
        "h7eXOCc7FpVeuLEK_"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="section">
      <div className="container mx-auto mt-16">
        <div className="flex justify-center mb-20">
          <h2 className="text-4xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 inline-block text-transparent bg-clip-text mx-auto text-center h-12">
            Contact Me
          </h2>
        </div>
        <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-16">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col items-center lg:items-end lg:mr-16 -mt-12 lg:mt-8 gap-6"
          >
            <div className="flex flex-col items-center gap-y-3 border border-solid border-green-500 w-[265px] md:w-72 lg:w-80 rounded-xl px-16 py-4 lg:p-8 bg-[#171f38]">
              <div className="">
                {/* <Image
                  src={gmail}
                  alt="gmail"
                  height={16}
                  width={16}
                  className="w-16 md:w-20"
                /> */}
                <img
                  src={gmail.src}
                  alt="gmail"
                  className="w-16 md:w-20"
                />
              </div>
              <h4 className="text-md">Email</h4>
              <a
                href="mailto:mohammadimrans09t@gmail.com"
                className="underline"
              >
                send an email
              </a>
            </div>
            <div className="flex flex-col items-center gap-y-3 border border-solid border-green-500 w-[265px] md:w-72 lg:w-80 rounded-xl px-16 py-4 lg:p-8 bg-[#171f38]">
              <div className="">
                {/* <Image
                  src={telegram}
                  alt="telegram"
                  height={16}
                  width={16}
                  className="w-16 md:w-20"
                /> */}
                <img
                  src={telegram.src}
                  alt="telegram"
                  className="w-16 md:w-20"
                />
              </div>
              <h4 className="text-md">Telegram</h4>
              <a href="https://t.me/mohammadimrans0" className="underline">
                send a message
              </a>
            </div>
          </motion.div>
          <motion.form
            ref={form as any}
            onSubmit={sendEmail}
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center lg:text-start md:mt-0 lg:mt-8"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-8 mb-8 w-72 md:w-80 lg:w-[420px] h-16 bg-transparent border border-solid border-green-500"
            />
            <br />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-8 mb-8 w-72 md:w-80 lg:w-[420px] h-16 bg-transparent border border-solid border-green-500"
            />
            <br />
            <textarea
              name="message"
              placeholder="Your Message"
              className="p-8 mb-12 w-72 md:w-80 lg:w-[420px] h-36 bg-transparent border border-solid border-green-500"
            ></textarea>
            <br />
            <button type="submit" className="btn btn-lg">
              Send me
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
