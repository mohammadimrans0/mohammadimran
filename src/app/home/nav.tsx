"use client";
// react icons
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Nav = () => {
  const handleClick = (id: string) => {
    gsap.to(window, { duration: 1, scrollTo: { y: id, offsetY: 70 } });
  };

  return (
    <nav className="fixed bottom-2 lg:bottom-4 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        {/* nav inner  */}
        <div className="w-full bg-black/20 h-[50px] lg:h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
          <a
            onClick={() => handleClick("#home")}
            className="cursor-pointer w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] flex items-center justify-center"
          >
            <BiHomeAlt />
          </a>
          <a
            onClick={() => handleClick("#about")}
            className="cursor-pointer w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] flex items-center justify-center"
          >
            <BiUser />
          </a>
          <a
            onClick={() => handleClick("#services")}
            className="cursor-pointer w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] flex items-center justify-center"
          >
            <BsClipboardData />
          </a>
          <a
            onClick={() => handleClick("#portfolio")}
            className="cursor-pointer w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] flex items-center justify-center"
          >
            <BsBriefcase />
          </a>
          <a
            onClick={() => handleClick("#contact")}
            className="cursor-pointer w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] flex items-center justify-center"
          >
            <BsChatSquare />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
