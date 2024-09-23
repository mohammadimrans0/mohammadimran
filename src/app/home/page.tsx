import Header from "./header";
import Banner from "./banner";
import About from "./about";
import Skill from "./skill";

export default function Home() {
    return (
      <div>
        <h1 className="bg-[#0e1533] bg-no-repeat bg-cover overflow-hidden">
                <Header />
                <Banner />
                <About />
                <Skill />
        </h1>
      </div>
    );
}