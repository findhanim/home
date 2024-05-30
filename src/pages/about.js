import * as React from "react";
// Components
import Footer from "../components/footer";
import Navigation from "../components/navigation";
// Assets
import Beige from "../assets/me.jpg";
import Resume from "../assets/Nazreen-Hanim.pdf";

const AboutPage = () => {
  return (
    <main className="bg-black text-white">
      {/* Navigation */}
      <Navigation></Navigation>

      {/* Header */}
      <div className="grid lg:grid-cols-12 lg:pt-[50px] py-[100px] lg:px-[100px] px-[40px] flex items-center">
        {/* Hello */}
        <div className="lg:col-span-5 col-span-12 mt-[10px]">
          <p className="monospace text-[12px] uppercase">Who am i again ?</p>
          <p className="text-[40px] font-light pt-[30px] leading-[55px]">
            A unicorn who's passionate in blending artistic vision with
            innovative solution
          </p>
          {/* <button
            href={Resume}
            className="mt-[32px] py-[12px] px-[40px] border rounded-[50px] text-[12px] uppercase hover:bg-gradient-to-r from-white to-[#CDDE90] hover:text-black hover:border-black font-bold"
          >
            Click For Resume
          </button> */}
        </div>

        <div className="col-span-2"></div>

        {/* Experience */}
        <div className="col-span-5 flex items-center lg:px-[0px] px-[40px]">
          <div className="text-[400px] mt-[-60px] font-bold serif italic">
            4
          </div>
          <div className="mt-[250px]">
            <p className="text-[80px] italic font-bold">+</p>
            <br />
            <p className="mt-[-30px] text-[12px] monospace uppercase">
              Years of experiences <br />
              in the field
            </p>
          </div>
        </div>
      </div>
      {/* Intro Blurp */}
      <div className="grid lg:grid-cols-12 lg:px-[100px] px-[40px] pb-[150px]">
        <div className="col-span-3 w-[200px] h-[220px] bg-[#CDDE91] rounded-t-[120px] rounded-b-[10px]">
          <div className="overflow-hidden col-span-3 w-[180px] h-[200px] bg-[#CDDE91] rounded-t-[150px] rounded-b-[10px] border border-[#171717] m-[10px]">
            <img className="object-cover h-full w-full" alt="img" src={Beige} />
          </div>
        </div>
        <div className="flex items-end lg:items-start col-span-3 monospace text-[12px] leading-[22px] uppercase">
          A little blurp
          <br /> regarding the latter
        </div>
        <div className="lg:mt-[0px] mt-[50px] col-span-6 text-[28px] leading-[44px] font-light">
          2019, marks the year of me start delivering my skill set and versatile
          services professionally, from conceptual ideation to production.
          <br />
          <br />
          These days, i spend most of my 9 to 5 leading the design system
          development for an on-going project, while actively contributed to the
          front-end development and technical design thinking.
        </div>
      </div>
      {/* Skills */}
      <div className="bg-white text-black rounded-t-[40px] py-[100px] lg:px-[100px] px-[40px]">
        {/* Flower */}
        <span
          // id="flower2"
          className="flex lg:block hidden justify-end absolute text-[#CDDE91] text-[280px] rotate-12 mt-[-280px] ml-[1030px]"
        >
          &#10042;
        </span>

        <p className="monospace text-[20px] font-bold mb-[80px]">
          Skills In The Field <sup>03</sup>
        </p>
        {/* Skill 1 */}
        <div className="grid lg:grid-cols-2 border-t-2 py-[50px]">
          <div className="text-[30px] pb-[20px] lg:py-[40px] font-semibold">
            UI/UX + Prototyping
          </div>
          <div className="flex grid grid-cols-1 items-center justify-end">
            <i className="text-[12px] monospace uppercase mt-[10px] lg:mt-[0px]">
              Tools and technologies
            </i>
            <p className="text-[16px] leading-[24px mt-[12px] lg:mt-[-30px]">
              Figma, Adobe XD, Photoshop, Illustrator
            </p>
          </div>
        </div>
        {/* Skill 2 */}
        <div className="grid lg:grid-cols-2 border-y-2 py-[50px]">
          <div className="text-[30px] pb-[20px] lg:py-[40px] font-semibold">
            Design System Development
          </div>
          <div className="flex grid grid-cols-1 items-center justify-end">
            <i className="text-[12px] monospace uppercase mt-[10px] lg:mt-[0px]">
              Tools and technologies
            </i>
            <p className="text-[16px] leading-[24px mt-[12px] lg:mt-[-30px]">
              NativeBase, Bootstrap, Tailwind, Animate.CSS
            </p>
          </div>
        </div>
        {/* Skill 3 */}
        <div className="grid lg:grid-cols-2 border-b-2 py-[50px]">
          <div className="text-[30px] pb-[20px] lg:py-[40px] font-semibold">
            Front End Development
          </div>
          <div className="flex grid grid-cols-1 items-center justify-end">
            <i className="text-[12px] monospace uppercase mt-[10px] lg:mt-[0px]">
              Tools and technologies
            </i>
            <p className="text-[16px] leading-[24px mt-[12px] lg:mt-[-30px]">
              React Native, Gatsby.js, Angular, Javascript, HTML + CSS
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer></Footer>
    </main>
  );
};

export default AboutPage;

export const Head = () => <title>Hanim J.</title>;