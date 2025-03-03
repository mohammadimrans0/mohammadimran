"use client"

import { useRef } from "react";
import Image from "next/image";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "@/utils/variants";
import Link from "next/link";

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
    <section id="contact" className="mt-24">
      <div className="container mx-auto">
        <div className="flex justify-center mb-16">
          <h2 className="text-4xl mx-auto text-center">
            Contact Me
          </h2>
        </div>
        <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-16">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col items-center lg:items-end lg:mr-16 gap-6"
          >
            <div className="flex flex-col items-center gap-y-3 border border-solid border-green-500 w-64 rounded-xl px-16 py-4 bg-[#171f38]">
              <div className="">
                <Image
                  src="/assets/logo/gmail.png"
                  alt="gmail"
                  height={16}
                  width={16}
                  className="w-16 "
                />
              </div>
              <Link
                href="mailto:mohammadimrans09t@gmail.com"
                target="_blank"
                className="underline hover:text-blue-500"
              >
                send an email
              </Link>
            </div>
            <div className="flex flex-col items-center gap-y-3 border border-solid border-green-500 w-64 rounded-xl px-16 py-4 bg-[#171f38]">
              <div className="">
                <Image
                  src="/assets/logo/telegram.png"
                  alt="telegram"
                  height={16}
                  width={16}
                  className="w-16"
                />
              </div>
              <Link href="https://t.me/mohammadimrans0" target="_blank" className="underline hover:text-blue-500">
                send a DM
              </Link>
            </div>
            <div className="flex flex-col items-center gap-y-3 border border-solid border-green-500 w-64 rounded-xl px-16 py-4 bg-[#171f38]">
              <div className="">
                <Image
                  src="/assets/logo/whatsapp.png"
                  alt="telegram"
                  height={16}
                  width={16}
                  className="w-16 rounded-full"
                />
              </div>
              <Link href="https://t.me/mohammadimrans0" target="_blank" className="underline hover:text-blue-500">
                send a DM
              </Link>
            </div>
          </motion.div>
          <motion.form
            ref={form as any}
            onSubmit={sendEmail}
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center lg:text-start"
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
