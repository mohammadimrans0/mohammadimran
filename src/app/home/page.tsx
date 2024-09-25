import Header from "./header";
import Banner from "./banner";
import About from "./about";
import Skill from "./skill";
import Services from "./services";
import Portfolio from "./portfolio";
import Reviews from "./reviews";
import Contact from "./contact";
import Nav from "./nav";
import Footer from "./footer";
export default function Home() {
  return (
    <div>
      <h1 className="bg-[#0e1533] bg-no-repeat bg-cover overflow-hidden">
        <Header />
        <Banner />
        <Nav />
        <About />
        <Skill />
        <Services />
        <Portfolio />
        <Reviews />
        <Contact />
        <Footer />
      </h1>
    </div>
  );
}
