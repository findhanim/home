import * as React from "react";
import { Link } from "gatsby";
// Components
import Footer from "../components/footer";
import Navigation from "../components/navigation";
// Assets
import Retro from "../content/images/retrospective-0.png";
import Prisma from "../content/images/prisma-0.png";
import Beige from "../content/images/beige-1.png";
import BoxyShapes from "../content/images/boxyshapes-1.png";
import Avatar from "../assets/me.jpg";

const IndexPage = () => {
  return (
    <main className="bg-black text-white">
      {/* Navigation */}
      <Navigation></Navigation>

      {/* Header */}
      <div className="py-[180px] flex flex-col">
        {/* Intro */}
        <div className="flex justify-center">
          <p className="monospace uppercase text-[#FFFFFF] lg:text-[24px] text-[18px]">
            Hi, you can call me <i className="text-[#CDDE91]">{"["}</i>...Hanim
            <i className="text-[#CDDE91]">{" ]"}</i>
          </p>
        </div>
        <div className="flex justify-center">
          <p className="uppercase text-[#FFFFFF] lg:text-[80px] text-[42px] lg:mt-[0px] mt-[18px]">
            A <i className="monospace font-bold text-[#CDDE91]">Technical</i>
          </p>
        </div>
        <div className="flex justify-center lg:mt-[-30px]">
          <p className="uppercase text-[#FFFFFF] lg:text-[80px] text-[42px]">
            <b className="text-[#CDDE91]">Design</b> Thinker
          </p>
        </div>
        {/* Avatar */}
        {/* <div className="flex justify-center ">
          <div className="w-[140px] h-[150px] bg-[#CDDE91] rounded-t-[120px] rounded-b-[10px]">
            <div className="overflow-hidden col-span-3 w-[120px] h-[130px] bg-[#CDDE91] rounded-t-[150px] rounded-b-[10px] border border-[#171717] m-[10px]">
              <img
                className="object-cover h-full w-full"
                alt="img"
                src={Avatar}
              />
            </div>
          </div>
        </div> */}
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
            src={Prisma}
          />
        </Link>

        {/* Portfolio Pryce */}
        <Link to="/portfolio/next-gen">
          <div
            id="project-list"
            className="grid lg:grid-cols-2 border-t border-[#bbb] lg:px-[100px] px-[40px] hover:bg-gradient-to-r from-white to-[#CDDE90]"
          >
            <p className="flex text-[30px] lg:text-[40px] uppercase py-[50px] lg:py-[70px]">
              <b>Next-Gen</b>
            </p>
            <p className="hidden lg:flex flex items-center justify-end monospace text-[12px] font-bold uppercase">
              Read more ➚
            </p>
          </div>
          {/* Screenshot Retro */}
          <img
            className="project-hover hidden lg:block"
            alt="img"
            src={Retro}
          />
        </Link>

        {/* Portfolio Pryce */}
        <Link to="/portfolio/pryce">
          <div
            id="project-list"
            className="grid lg:grid-cols-2 border-t border-[#bbb] lg:px-[100px] px-[40px] hover:bg-gradient-to-r from-white to-[#CDDE90]"
          >
            <p className="flex text-[30px] lg:text-[40px] uppercase py-[50px] lg:py-[70px]">
              <b>Pryce</b>
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
        <Link to="/portfolio/beige">
          <div
            id="project-list"
            className="grid lg:grid-cols-2 border-y border-[#bbb] lg:px-[100px] px-[40px] hover:bg-gradient-to-r from-white to-[#CDDE90]"
          >
            <p className="flex text-[30px] lg:text-[40px] uppercase py-[50px] lg:py-[70px]">
              <b>Beige</b>
            </p>
            <p className="hidden lg:flex flex items-center justify-end monospace text-[12px] font-bold uppercase">
              Read more ➚
            </p>
          </div>
          {/* Screenshot BoxyShapes */}
          <img
            className="project-hover hidden lg:block"
            alt="img"
            src={BoxyShapes}
          />
        </Link>
      </div>

      {/* Playground List */}
      <div className="py-[100px] lg:px-[100px] px-[40px]">
        <p className="monospace text-[20px] font-bold mb-[80px]">
          Concept Explorations <sup>03</sup>
        </p>
        <div className="grid lg:grid-cols-3 lg:justify-between justify-center">
          {/* Etc 1 */}
          <div className="bg-[#CDDE91] lg:mb-[0px] mb-[30px] rounded-t-[200px] rounded-b-[20px] w-[350px] h-[450px]">
            <div className="overflow-hidden bg-[#8F8F8F] border border-[black] rounded-t-[200px] rounded-b-[15px] w-[320px] h-[420px] m-[15px]">
              <img
                className="object-cover h-full w-full"
                alt="img"
                src={Beige}
              />
            </div>
          </div>
          {/* Etc 2 */}
          <div className="bg-[#8F8F8F] lg:mb-[0px] mb-[30px] rounded-b-[200px] rounded-t-[20px] w-[350px] h-[450px]">
            <div className="overflow-hidden bg-[#8F8F8F] border border-[black] rounded-b-[200px] rounded-t-[15px] w-[320px] h-[420px] m-[15px]">
              <img
                className="object-cover h-full w-full"
                alt="img"
                src={Beige}
              />
            </div>
          </div>
          {/* Etc 3 */}
          <div className="bg-[#CDDE91] lg:mb-[0px] mb-[30px] rounded-t-[200px] rounded-b-[20px] w-[350px] h-[450px]">
            <div className="overflow-hidden bg-[#8F8F8F] border border-[#171717] rounded-t-[200px] rounded-b-[15px] w-[320px] h-[420px] m-[15px]">
              <img
                className="object-cover h-full w-full"
                alt="img"
                src={Beige}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer></Footer>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Hanim J.</title>;