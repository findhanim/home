import * as React from 'react'
import Footer from '../components/footer'
import Navigation from '../components/navigation'

const AboutPage = () => {
  return (
    <main className="bg-black text-white">
      {/* Navigation */}
      <Navigation></Navigation>

      {/* Header */}
      <div className="grid lg:grid-cols-12 lg:pt-[50px] py-[100px] lg:px-[100px] px-[40px] flex items-center">
        {/* Smiley */}
        <span className="absolute lg:block hidden text-[#CDDE91] text-[100px] rotate-45 mt-[-370px] ml-[-30px]">
          ☺
        </span>

        {/* Hello */}
        <div className="lg:col-span-5 col-span-12">
          <p className="monospace text-[12px] uppercase">
            Let's get to know me
          </p>
          <p className="text-[28px] font-light pt-[30px]">
            <b className="font-bold text-[#CDDE91]">Nazreen Hanim</b> — UI/UX
            designer and front end developer based in Malaysia.
          </p>
          <button className="mt-[32px] py-[12px] px-[40px] border rounded-[50px] text-[12px] uppercase hover:bg-gradient-to-r from-white to-[#CDDE90] hover:text-black hover:border-black font-bold">
            Click For Resume
          </button>
        </div>

        <div className="col-span-2"></div>

        {/* Experience */}
        <div className="col-span-5 flex items-center lg:px-[0px] px-[40px]">
          <div className="text-[400px] mt-[-60px] font-bold serif italic">
            3
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
        <div className="col-span-3 w-[150px] h-[150px] bg-[#CDDE91] rounded-[100px]">
          <div className="col-span-3 w-[130px] h-[130px] bg-[#CDDE91] rounded-[100px] border border-[#171717] m-[10px]"></div>
        </div>
        <div className="flex items-end lg:items-start col-span-3 monospace text-[12px] leading-[22px] uppercase">
          A little blurp
          <br /> regarding the latter
        </div>
        <div className="lg:mt-[0px] mt-[50px] col-span-6 text-[28px] leading-[44px] font-light">
          I have been fiddling with user interface design and development on and
          off since 2010, with Blogger and Tumblr as my platforms of choice.
          <br />
          <br />
          2019, marks the year of me start delivering my skill set and versatile
          services professionally, from conceptual ideation to production in
          both creative and technical areas.
        </div>
      </div>
      {/* Skills */}
      <div className="bg-white text-black rounded-t-[40px] py-[100px] lg:px-[100px] px-[40px]">
        {/* Flower */}
        <span className="flex lg:block hidden justify-end absolute text-[#CDDE91] text-[300px] rotate-12 mt-[-320px] ml-[1030px]">
          ✺
        </span>

        <p className="monospace text-[20px] font-bold mb-[80px]">
          Skills In The Field <sup>03</sup>
        </p>
        {/* Skill 1 */}
        <div className="grid lg:grid-cols-2 border-y-2 py-[50px]">
          <div className="text-[30px] pb-[20px] lg:py-[40px] font-semibold">
            UI/UX Design
          </div>
          <div className="flex grid grid-cols-1 items-center justify-end">
            <i className="text-[12px] monospace uppercase mt-[10px] lg:mt-[0px]">
              Tools and technologies
            </i>
            <p className="text-[16px] leading-[24px mt-[12px] lg:mt-[-30px]">
              Figma, Adobe XD, Invision, Adobe Photoshop, Adobe Illustrator,
              WordPress, Webflow
            </p>
          </div>
        </div>

        {/* Skill 2 */}
        <div className="grid lg:grid-cols-2 border-b-2 py-[50px]">
          <div className="text-[30px] pb-[20px] lg:py-[40px] font-semibold">
            Front End Development
          </div>
          <div className="flex grid grid-cols-1 items-center justify-end">
            <i className="text-[12px] monospace uppercase mt-[10px] lg:mt-[0px]">
              Tools and technologies
            </i>
            <p className="text-[16px] leading-[24px mt-[12px] lg:mt-[-30px]">
              Bootstrap, Tailwind, Animate.CSS, GatsbyJS, Angular, NextJS,
              Ionic, React Native, Strapi CMS
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer></Footer>
    </main>
  )
}

export default AboutPage

export const Head = () => <title>Hanim</title>
