/* eslint-disable @next/next/no-img-element */
"use client"
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaTwitter } from "react-icons/fa";

import codeforces from "../assets/logo/codeforces.webp";
import leetcode from "../assets/logo/leetcode.png";

const Footer = () => {
  return (
    <section className="h-64 flex flex-col items-center gap-y-[160px]">
      <div>
        <ul className="flex justify-center space-x-4 md:space-x-6">
          <li>
            <a href="https://github.com/mohammadimrans0">
              <span className="flex flex-col justify-center items-center">
                <FaGithub className="text-[#0A66C2] w-8 h-8 lg:w-16 lg:h-12" />
                <p>Github</p>
              </span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mohammadimrans0/">
              <span className="flex flex-col justify-center items-center">
                <BsLinkedin className="text-[#0A66C2]  w-8 h-8 lg:w-16 lg:h-12" />
                <p>LinkedIn</p>
              </span>
            </a>
          </li>

          <li>
            <a href="https://twitter.com/mohammadimrans0">
              <span className="flex flex-col justify-center items-center">
                <FaTwitter className="text-[#00acee]  w-8 h-8 lg:w-16 lg:h-12" />
                <p>Twitter</p>
              </span>
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/mohammadimran_9/">
              <span className="flex flex-col justify-center items-center">
                {/* <Image
                  src={codeforces}
                  alt="codeforces"
                  width={16}
                  height={12}
                  className=" w-8 h-8 lg:w-16 lg:h-12 rounded-xl"
                /> */}
                <img
                  src={codeforces.src}
                  alt="codeforces"
                  className=" w-8 h-8 lg:w-16 lg:h-12 rounded-xl"
                />
                <p>CodeForces</p>
              </span>
            </a>
          </li>
          <li>
            <a href="https://leetcode.com/mohammadimrans0/">
              <span className="flex flex-col justify-center items-center">
                {/* <Image
                  src={leetcode}
                  alt="leetcode"
                  width={16}
                  height={12}
                  className=" w-8 h-8 lg:w-16 lg:h-12 rounded-xl"
                /> */}
                <img
                  src={leetcode.src}
                  alt="LeetCode"
                  className=" w-8 h-8 lg:w-16 lg:h-12 rounded-xl"
                />
                <p>LeetCode</p>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
