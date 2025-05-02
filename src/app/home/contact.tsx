"use client";

import Image from "next/image";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "@/utils/variants";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="mt-24">
      <div className="container mx-auto">
        <div className="flex justify-center mb-16">
          <h2 className="text-5xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 inline-block text-transparent bg-clip-text">
            Let&apos;s Talk
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col lg:flex-row items-center gap-6"
          >
            <Link
              href="mailto:mohammadimrans09t@gmail.com"
              target="_blank"
              className=" hover:text-green-500"
            >
              <div className="flex flex-col items-center gap-y-3 border border-solid border-green-500 w-72 rounded-xl px-16 py-6 bg-[#1e1f38]">
                <Image
                  src="/assets/logo/gmail.png"
                  alt="gmail"
                  height={16}
                  width={16}
                  className="w-16 "
                />
                <p>Send an Email</p>
              </div>
            </Link>

            <Link
              href="https://t.me/mohammadimrans0"
              target="_blank"
              className="hover:text-green-500"
            >
              <div className="flex flex-col items-center gap-y-3 border border-solid border-green-500 w-72 rounded-xl px-16 py-4 bg-[#1e1f38]">
                <Image
                  src="/assets/logo/telegram.png"
                  alt="telegram"
                  height={16}
                  width={16}
                  className="w-16"
                />
                <p>Give a Knock</p>
              </div>
            </Link>

            <Link
              href="https://t.me/mohammadimrans0"
              target="_blank"
              className="hover:text-green-500"
            >
              <div className="flex flex-col items-center gap-y-3 border border-solid border-green-500 w-72 rounded-xl px-16 py-4 bg-[#1e1f38]">
                <Image
                  src="/assets/logo/whatsapp.png"
                  alt="telegram"
                  height={16}
                  width={16}
                  className="w-16 rounded-full"
                />
                <p>Send a DM</p>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
