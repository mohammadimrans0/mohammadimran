"use client"

import Link from "next/link";

const Header = () => {
  return (
    <header className="py-5 px-2">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo  */}
          <div>
            <Link href="/">
              <h1 className="text-5xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 inline-block text-transparent bg-clip-text">
                Imran
              </h1>
            </Link>
          </div>
          {/* button  */}
          <div className="flex items-center space-x-6">
            <Link href={"/blogs"}>
              <h1 className="hover:text-green-500">Blogs</h1>            
            </Link>
            <Link href="#contact">
              <button className="btn btn-sm">{"Let's work"}</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
