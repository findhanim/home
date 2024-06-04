import React, { useEffect } from "react";
// Components
import Footer from "../components/footer";
import Navigation from "../components/navigation";
// Assets
import Prisma from "../content/images/prisma-0.png";
import Pryce from "../content/images/pryce-0.png";
import WeCelcom from "../content/images/we@celcom-0.png";
import Beige from "../content/images/beige-0.png";
import BoxyShapes from "../content/images/boxyshapes-0.png";

const IndexPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#F6F6F6] text-black">
      {/* Navigation */}
      <Navigation></Navigation>

      {/* Header */}
      <div className="lg:px-[60px] px-[24px] flex justify-between">
        {/* Title */}
        <div className="grid lg:grid-cols-12 grid-cols-6 lg:pt-[80px] pt-[60px]">
          <span className="heading font-medium lg:col-span-7 col-span-6 lg:text-[70px] text-[40px] lg:leading-[75px] leading-[45px]">
            A <span className="text-[#304CD2]">&#10045;</span>{" "}
            <srf>Technical</srf> <br />
            <u>
              <b>Design</b>
            </u>{" "}
            <span className="text-[#304CD2]">Thinker</span>
            <span className="lg:text-[60px] text-[35px]">&#8599;</span>
          </span>
          <div className="lg:col-span-7 col-span-6"></div>
          <div className="lg:col-span-4 col-span-6 lg:mt-[200px] mt-[50px] lg:text-right">
            <span className="text-[18px] leading-[26px] uppercase">
              Also a unicorn who's passionate in blending artistic vision with
              innovative solution to craft better experiences.
            </span>
          </div>
        </div>
      </div>

      {/* Header image */}
      <div className="grid lg:grid-cols-12 grid-cols-6 lg:px-[60px] px-[24px] lg:py-[150px] pt-[150px] pb-[100px]">
        <div className="lg:col-span-12 col-span-6 text-[18px] uppercase mb-[20px]">
          <b>(Selected)</b> Project <i>Highlight</i>
        </div>
        <div className="img-hover lg:col-span-11 col-span-6 rounded-[10px]">
          <a href="/portfolio/prisma">
            <img alt="img" src={Prisma} />
          </a>
        </div>
        <div className="lg:col-span-1 hidden lg:block"></div>
        <div className="lg:col-span-2 col-span-6 text-[18px] font-semibold uppercase mt-[30px] mb-[10px]">
          Prisma
        </div>
        <div className="lg:col-span-2"></div>
        <div className="lg:col-span-5 col-span-6 lg:text-[16px] text-[18px] lg:mt-[30px]">
          A centralised design system library, ensuring consistency in design
          and development.
        </div>
      </div>

      {/* Quote of the day */}
      <div className="grid lg:grid-cols-12 grid-cols-6 lg:pt-[50px] lg:pb-[200px] pb-[100px] lg:px-[60px] px-[24px]">
        <span className="lg:col-span-1"></span>
        <span className="lg:col-span-6 col-span-6 lg:text-[26px] text-[22px] font-light lg:leading-[40px]">
          Always believe in design solutions that prioritize user experience,
          efficiency, and research-backed decisions, seamlessly aligning with
          development needs for effective and credible outcomes.
        </span>
        {/* Dingbat */}
        <div className="z-0 absolute text-[#304CD2] lg:text-[220px] text-[150px] -rotate-12 lg:right-[150px] right-[20px] lg:mt-[-80px] mt-[150px]">
          &#10042;
        </div>
      </div>

      {/* Principles */}
      <div className="bg-white grid lg:grid-cols-12 lg:py-[150px] py-[100px] lg:px-[60px] px-[24px]">
        <div className="lg:col-span-2 col-span-6 uppercase text-[18px] mb-[50px]">
          <b>(Work)</b> <br />
          <i>Principles</i>
        </div>
        <div className="col-span-2"></div>
        {/* Skills */}
        <div className="col-span-7">
          {/* 1 */}
          <div className="grid grid lg:grid-cols-7 pb-[50px]">
            <span className="col-span-3 text-[18px] font-bold lg:mb-[0px] mb-[20px]">
              See the big picture
            </span>
            <span className="col-span-4 lg:text-[16px] text-[18px] leading-[26px]">
              Focus on the end-to-end user experience to create cohesive and
              effective design solution.
            </span>
          </div>
          {/* 2 */}
          <div className="grid grid lg:grid-cols-7 border-t-2 py-[50px]">
            <span className="col-span-3 text-[18px] font-bold lg:mb-[0px] mb-[20px]">
              Functionality over aesthetic
            </span>
            <span className="col-span-4 lg:text-[16px] text-[18px] leading-[26px]">
              Prioritize usability and efficiency over visual appeal to ensure
              user-centric solution meet functional need.
            </span>
          </div>
          {/* 3 */}
          <div className="grid grid lg:grid-cols-7 border-t-2 py-[50px]">
            <span className="col-span-3 text-[18px] font-bold lg:mb-[0px] mb-[20px]">
              Justify with facts
            </span>
            <span className="col-span-4 lg:text-[16px] text-[18px] leading-[26px]">
              Support decision with research and evidence to ensure credibility
              and effectiveness, not just assumption or opinion.
            </span>
          </div>
          {/* 4 */}
          <div className="grid grid lg:grid-cols-7 border-t-2 pt-[50px]">
            <span className="col-span-3 text-[18px] font-bold lg:mb-[0px] mb-[20px]">
              “Reverse engineer”
            </span>
            <span className="col-span-4 lg:text-[16px] text-[18px] leading-[26px]">
              Understanding potential development requirements, enabling design
              to align seamlessly with envisioned functionality and structure.
            </span>
          </div>
        </div>
      </div>

      {/* Selected Projects List */}
      <div
        id="portfolio"
        className="lg:pt-[150px] pt-[100px]  lg:px-[60px] px-[24px]"
      >
        <span className="heading lg:text-[60px] text-[36px] uppercase">
          <b>Selected</b> <srf>Projects</srf>
        </span>
        {/* Prisma */}
        <div className="lg:pt-[50px] pt-[30px]">
          <div className="img-hover rounded-[10px]">
            <a href="/portfolio/prisma">
              <img alt="img" src={Prisma} />
            </a>
          </div>
          <div className="grid lg:grid-cols-12 grid-cols-6 lg:mt-[40px] mt-[20px]">
            <span className="lg:col-span-2 col-span-6 text-[20px] font-semibold mb-[10px]">
              Prisma
            </span>
            <span className="lg:col-span-2"></span>
            <span className="lg:col-span-5 col-span-6 lg:text-[16px] text-[18px]">
              A centralised design system library, ensuring consistency in
              design and development.
            </span>
          </div>
        </div>
        {/* Pryce */}
        <div className="lg:pt-[100px] pt-[50px]">
          <div className="img-hover rounded-[10px]">
            <a href="/portfolio/pryce">
              <img alt="img" src={Pryce} />
            </a>
          </div>

          <div className="grid lg:grid-cols-12 grid-cols-6 lg:mt-[40px] mt-[20px]">
            <span className="lg:col-span-2 col-span-6 text-[20px] font-semibold mb-[10px]">
              Pryce
            </span>
            <span className="lg:col-span-2"></span>
            <span className="lg:col-span-5 col-span-6 lg:text-[16px] text-[18px]">
              Providing selections of device plans with detailed pricing and
              clear, concise options.
            </span>
          </div>
        </div>
        {/* We@Celcom */}
        <div className="lg:pt-[100px] pt-[50px]">
          <div className="img-hover rounded-[10px]">
            <a href="/portfolio/we-celcom">
              <img alt="img" src={WeCelcom} />
            </a>
          </div>

          <div className="grid lg:grid-cols-12 grid-cols-6 lg:mt-[40px] mt-[20px]">
            <span className="lg:col-span-2 col-span-6 text-[20px] font-semibold mb-[10px]">
              We@Celcom
            </span>
            <span className="lg:col-span-2"></span>
            <span className="lg:col-span-5 col-span-6 lg:text-[16px] text-[18px]">
              All-in-one concept that streamlines communication, virtual events,
              announcements and staff attendance.
            </span>
          </div>
        </div>
        {/* Beige */}
        <div className="lg:pt-[100px] pt-[50px]">
          <div className="img-hover rounded-[10px]">
            <a href="/portfolio/beige">
              <img alt="img" src={Beige} />
            </a>
          </div>

          <div className="grid lg:grid-cols-12 grid-cols-6 lg:mt-[40px] mt-[20px]">
            <span className="lg:col-span-2 col-span-6 text-[20px] font-semibold mb-[10px]">
              Beige
            </span>
            <span className="lg:col-span-2"></span>
            <span className="lg:col-span-5 col-span-6 lg:text-[16px] text-[18px]">
              Free to use Tumblr theme offers a minimal and youthful look,
              perfect for showcasing content in a modern, fun way.
            </span>
          </div>
        </div>
        {/* BoxyShapes */}
        <div className="lg:pt-[100px] pt-[50px]">
          <div className="img-hover rounded-[10px]">
            <a href="/portfolio/boxyshapes">
              <img alt="img" src={BoxyShapes} />
            </a>
          </div>

          <div className="grid lg:grid-cols-12 grid-cols-6 lg:mt-[40px] mt-[20px]">
            <span className="lg:col-span-2 col-span-6 text-[20px] font-semibold mb-[10px]">
              BoxyShapes
            </span>
            <span className="lg:col-span-2"></span>
            <span className="lg:col-span-5 col-span-6 lg:text-[16px] text-[18px]">
              Making basic geometry lesson more fun through interactive
              adventure with augmented reality approach.
            </span>
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