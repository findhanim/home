import * as React from "react";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import { Link } from "gatsby";
import shot1 from "../content/images/beige/beige-1.png";
import Beige from "../content/images/beige/beige-1.png";
import shot3 from "../content/images/boxyshapes-1.png";

const IndexPage = () => {
  return (
    <main className="bg-black text-white">
      {/* Navigation */}
      <Navigation></Navigation>

      {/* Header */}
      <div
        data-aos="flip-left"
        data-aos-duration="800"
        className="pt-[100px] pb-[150px] flex justify-center text-[#CDDE91] text-[300px]"
      >
        &#9786;
      </div>

      {/* Projects Involved List */}
      <div
        id="portfolio"
        className="bg-white text-black rounded-t-[40px] py-[100px]"
      >
        <p className="monospace text-[20px] font-bold mb-[80px] lg:px-[100px] px-[40px]">
          Selected Projects Showcase <sup>03</sup>
        </p>
        {/* Portfolio Prisma */}
        <Link to="/portfolio/prisma">
          <div
            id="project-list"
            className="grid lg:grid-cols-2 border-t border-[#bbb] lg:px-[100px] px-[40px] hover:bg-gradient-to-r from-white to-[#CDDE90]"
          >
            <p className="flex text-[30px] lg:text-[40px] uppercase py-[50px] lg:py-[70px]">
              <b>Prisma</b>
            </p>
            <p className="hidden lg:flex flex items-center justify-end monospace text-[12px] font-bold uppercase">
              Read more ➚
            </p>
          </div>
          {/* Screenshot Prisma */}
          <img
            className="project-hover hidden lg:block"
            alt="img"
            src={shot1}
          />
        </Link>

        {/* Portfolio Retro */}
        <Link to="/portfolio/retrospective">
          <div
            id="project-list"
            className="grid lg:grid-cols-2 border-t border-[#bbb] lg:px-[100px] px-[40px] hover:bg-gradient-to-r from-white to-[#CDDE90]"
          >
            <p className="flex text-[30px] lg:text-[40px] uppercase py-[50px] lg:py-[70px]">
              <b>Retrospective</b>
            </p>
            <p className="hidden lg:flex flex items-center justify-end monospace text-[12px] font-bold uppercase">
              Read more ➚
            </p>
          </div>
          {/* Screenshot Retro */}
          <img
            className="project-hover hidden lg:block"
            alt="img"
            src={shot1}
          />
        </Link>

        {/* Portfolio Beige */}
        <Link to="/portfolio/beige">
          <div
            id="project-list"
            className="grid lg:grid-cols-2 border-t border-[#bbb] lg:px-[100px] px-[40px] hover:bg-gradient-to-r from-white to-[#CDDE90]"
          >
            <p className="flex text-[30px] lg:text-[40px] uppercase py-[50px] lg:py-[70px]">
              <b>Beige</b>
            </p>
            <p className="hidden lg:flex flex items-center justify-end monospace text-[12px] font-bold uppercase">
              Read more ➚
            </p>
          </div>
          {/* Screenshot Beige */}
          <img
            className="project-hover hidden lg:block"
            alt="img"
            src={Beige}
          />
        </Link>

        {/* Portfolio BoxyShapes */}
        <Link to="/portfolio/boxyshapes">
          <div
            id="project-list"
            className="grid lg:grid-cols-2 border-y border-[#bbb] lg:px-[100px] px-[40px] hover:bg-gradient-to-r from-white to-[#CDDE90]"
          >
            <p className="flex text-[30px] lg:text-[40px] uppercase py-[50px] lg:py-[70px]">
              <b>BoxyShapes</b>
            </p>
            <p className="hidden lg:flex flex items-center justify-end monospace text-[12px] font-bold uppercase">
              Read more ➚
            </p>
          </div>
          {/* Screenshot BoxyShapes */}
          <img
            className="project-hover hidden lg:block"
            alt="img"
            src={shot3}
          />
        </Link>
      </div>

      {/* Playground List */}
      <div className="py-[100px] lg:px-[100px] px-[40px]">
        <p className="monospace text-[20px] font-bold mb-[80px]">
          Upcoming and Internal Projects <sup>03</sup>
        </p>
        <div className="grid lg:grid-cols-3">
          <div className="bg-white lg:mb-[0px] mb-[30px] lg:mr-[50px] rounded-t-[200px] rounded-b-[20px] h-[450px]"></div>
          <div className="bg-white lg:mb-[0px] mb-[30px] lg:mr-[50px] rounded-b-[200px] rounded-t-[20px] h-[450px]"></div>
          <div className="bg-white lg:mb-[0px] mb-[30px] lg:mr-[50px] rounded-t-[200px] rounded-b-[20px] h-[450px]"></div>
        </div>
      </div>

      {/* Footer */}
      <Footer></Footer>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Hanim J.</title>;
