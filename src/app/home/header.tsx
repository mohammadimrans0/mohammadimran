"use client"

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo  */}
          <div>
            <a href="/">
              <h1 className="text-5xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 inline-block text-transparent bg-clip-text ">
                Imran
              </h1>
            </a>
          </div>
          {/* button  */}
          <div>
            <a href="#contact">
              <button className="btn btn-sm">{"Let's work"}</button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
