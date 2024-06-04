import React, { useEffect } from "react";
// Components
import Footer from "../components/footer";
import Navigation from "../components/navigation";
// Assets
import Acnh from "../assets/images/acnh.jpg";
import Matcha from "../assets/images/matcha.jpg";
import Funko from "../assets/images/funko.jpg";
// Resume
import Resume from "../assets/Nazreen-Hanim.pdf";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#F6F6F6] text-black">
      {/* Navigation */}
      <Navigation></Navigation>

      {/* Intro */}
      <div className="grid lg:grid-cols-12 grid-cols-6 lg:pb-[200px] pb-[100px] lg:px-[60px] px-[24px]">
        <span className="heading font-medium lg:col-span-12 col-span-6 lg:my-[100px] mt-[60px] mb-[30px] lg:text-[80px] text-[40px]">
          Hi, I'm <b>Hanim</b> <b className="text-[#304CD2]">&#9786;</b>
        </span>
        <div className="col-span-3 mb-[80px]">
          <a href={Resume} target="_blank" rel="noreferrer">
            <span className="text-[18px] font-medium uppercase border-b border-black pb-[4px]">
              Click For Resume
            </span>
            <span> &#8599;</span>
          </a>
        </div>
        {/* Avatar */}
        {/* <div className="lg:col-span-2 md:col-span-2 col-span-3 h-60 bg-[#CDDE91] rounded-t-[120px] rounded-b-[10px] mb-[50px]">
          <div className="overflow-hidden lg:col-span-2 md:col-span-2 col-span-4 h-60 bg-[#CDDE91] rounded-t-[150px] rounded-b-[10px] border border-[#171717] m-[10px]">
            <img
              className="object-cover h-full w-full"
              alt="img"
              src={Avatar}
            />
          </div>
        </div> */}
        <div className="col-span-2"></div>
        {/* Details */}
        <div className="col-span-6">
          <span className="lg:text-[26px] text-[22px] font-light lg:leading-[40px]">
            2019, marks the year I started delivering my skill set and{" "}
            <b className="text-[#304CD2]">versatile services</b> professionally.
            Along these journey, collaborating with various teams and projects
            has shaped my approach and broadened my perspective.
            <br />
            <br />
            With extensive experience in{" "}
            <b className="text-[#304CD2]">UI/UX technologies</b>, honing the
            skill set of utilizing prototyping tools, also translating the
            visuals into functional applications.
            <br />
            <br />
            These days, I spend most of my 9 to 5 focused on building{" "}
            <b className="text-[#304CD2]">design systems</b> which combine
            technical needs with artistic vision that improve development
            process and user experience. I believe in{" "}
            <b className="text-[#304CD2]">
              merging creativity with functionality
            </b>{" "}
            to deliver the best solutions.
          </span>
        </div>
      </div>

      {/* Skills */}
      <div className="bg-white grid lg:grid-cols-12 lg:py-[150px] py-[100px] lg:px-[60px] px-[24px]">
        <div className="lg:col-span-2 col-span-6 text-[18px] uppercase mb-[50px]">
          <b>(Skills)</b>
          <br />
          <i>In The Field</i>
        </div>
        <div className="col-span-2"></div>
        {/* Skills */}
        <div className="col-span-7">
          {/* UI/UX */}
          <div className="grid grid lg:grid-cols-7 pb-[50px]">
            <span className="col-span-3 text-[18px] font-bold lg:mb-[0px] mb-[20px]">
              UI/UX + Prototyping
            </span>
            <span className="col-span-4 lg:text-[16px] text-[18px] leading-[26px]">
              Figma, Adobe XD, Adobe Photoshop, Adobe Illustrator
            </span>
          </div>
          {/* Design System */}
          <div className="grid grid lg:grid-cols-7 border-y-2 py-[50px]">
            <span className="col-span-3 text-[18px] font-bold lg:mb-[0px] mb-[20px]">
              Design System
            </span>
            <span className="col-span-4 lg:text-[16px] text-[18px] leading-[26px]">
              NativeBase, Bootstrap, Tailwind, Animate.CSS
            </span>
          </div>
          {/* Front End */}
          <div className="grid grid lg:grid-cols-7 pt-[50px]">
            <span className="col-span-3 text-[18px] font-bold lg:mb-[0px] mb-[20px]">
              Front End Development
            </span>
            <span className="col-span-4 lg:text-[16px] text-[18px] leading-[26px]">
              React Native, Gatsby.js, Angular, Javascript, HTML + CSS
            </span>
          </div>
        </div>
      </div>

      {/* Misc */}
      <div className="grid lg:grid-cols-12 grid-cols-6 gap-4 gap-y-4 lg:pt-[150px] pt-[100px] lg:px-[60px] px-[24px]">
        <span className="heading col-span-12 lg:text-[60px] text-[35px] lg:leading-[70px] leading-[50px] uppercase font-medium lg:mb-[40px] mb-[30px]">
          <srf>Other</srf> <b>Sides</b> Of Me
        </span>
        {/* Top row */}
        <div className="lg:col-span-6 col-span-12 mb-[20px]">
          <div className="overflow-hidden bg-white rounded-[10px] h-96 mb-[10px]">
            <img className="object-cover h-full w-full" alt="img" src={Acnh} />
          </div>
          <span className="text-[16px]">A sweet ascape to ACNH</span>
        </div>
        <div className="lg:col-span-3 col-span-12 mb-[20px]">
          <div className="overflow-hidden bg-white rounded-[10px] h-96 mb-[10px]">
            <img
              className="object-cover h-full w-full"
              alt="img"
              src={Matcha}
            />
          </div>
          <span className="text-[16px]">Matcha all day, everyday</span>
        </div>
        <div className="lg:col-span-3 col-span-12">
          <div className="overflow-hidden bg-white rounded-[10px] h-96 mb-[10px]">
            <img className="object-cover h-full w-full" alt="img" src={Funko} />
          </div>
          <span className="text-[16px]">Fantasies and funkos</span>
        </div>
      </div>

      {/* Footer */}
      <Footer></Footer>
    </main>
  );
};

export default AboutPage;

export const Head = () => <title>Hanim J.</title>;