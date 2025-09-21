"use client"
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaTwitter } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="h-64 flex flex-col items-center mt-24">
      <div>
        <ul className="flex flex-wrap justify-center space-x-4 md:space-x-6">
          <li>
            <Link href="https://github.com/mohammadimrans0">
              <span className="flex flex-col justify-center items-center">
                <FaGithub className="text-[#0A66C2] w-8 h-8 lg:w-16 lg:h-12" />
                <p>Github</p>
              </span>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/mohammadimrans0/">
              <span className="flex flex-col justify-center items-center">
                <BsLinkedin className="text-[#0A66C2]  w-8 h-8 lg:w-16 lg:h-12" />
                <p>LinkedIn</p>
              </span>
            </Link>
          </li>

          <li>
            <Link href="https://twitter.com/mohammadimrans0">
              <span className="flex flex-col justify-center items-center">
                <FaTwitter className="text-[#00acee]  w-8 h-8 lg:w-16 lg:h-12" />
                <p>Twitter</p>
              </span>
            </Link>
          </li>
          <li>
            <Link href="https://leetcode.com/mohammadimrans0/">
              <span className="flex flex-col justify-center items-center">
                <Image
                  src="/assets/logo/leetcode.png"
                  alt="leetcode"
                  width={16}
                  height={12}
                  className=" w-8 h-8 lg:w-16 lg:h-12 rounded-xl"
                />
                <p>LeetCode</p>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
