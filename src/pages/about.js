import * as React from 'react'
import Footer from '../components/footer'

const AboutPage = () => {
  return (
    <main className="bg-black text-white">
      {/* Header */}
      <div className="grid lg:grid-cols-12 pt-[50px] pb-[100px] px-[100px] flex items-center">
        {/* Smiley */}
        <span className="absolute text-[#CDDE91] text-[100px] rotate-45 mt-[-350px] ml-[-30px]">
          ☺
        </span>

        {/* Hello */}
        <div className="lg:col-span-5">
          <p className="monospace text-[12px] uppercase">
            Hi, you can call me <b className="text-[#CDDE91]">Hanim</b>
          </p>
          <p className="text-[28px] font-light pt-[30px]">
            A UI/UX designer and front end developer based in Malaysia.
          </p>
          <button className="mt-[24px] py-[12px] px-[24px] border rounded-[50px] text-[12px] uppercase">
            Click For Resume
          </button>
        </div>

        <div className="col-span-2"></div>

        {/* Experience */}
        <div className="col-span-5 flex items-center">
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
      <div className="grid grid-cols-12 px-[100px] pb-[150px]">
        <div className="col-span-3 w-[150px] h-[150px] bg-[#CDDE91] rounded-[100px]">
          <div className="col-span-3 w-[130px] h-[130px] bg-[#CDDE91] rounded-[100px] border border-[#171717] m-[10px]"></div>
        </div>
        <div className="col-span-3 monospace text-[12px] leading-[22px] uppercase">
          A little blurp
          <br /> regarding the latter
        </div>
        <div className="col-span-6 text-[28px] leading-[44px] font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus
          mauris elit, a accumsan dolor cursus quis. Cras quis justo nec nibh
          hendrerit tempus a id ante. Nam lectus augue, ultricies sit amet velit
          quis, gravida tincidunt orci. Vivamus et velit vel lorem posuere
          tempus. <br />
          <br />
          Phasellus at velit in dolor euismod placerat. Nunc non magna eros.
          Donec vitae justo at sapien eleifend scelerisque.
        </div>
      </div>

      {/* Skills */}
      <div className="bg-white text-black rounded-t-[40px] p-[100px]">
        {/* Flower */}
        <span className="flex justify-end absolute text-[#CDDE91] text-[300px] rotate-12 mt-[-320px] ml-[1030px]">
          ✺
        </span>

        <p className="monospace text-[20px] font-bold mb-[80px]">
          Skills In The Field <sup>03</sup>
        </p>
        {/* Skill 1 */}
        <div className="grid lg:grid-cols-12 border-y-2 py-[50px]">
          <p className="flex col-span-8 text-[30px] py-[50px] font-semibold">
            Front End Development
          </p>
          <p className="flex col-span-4 items-center justify-end text-[16px] leading-[24px]">
            Nam lectus augue, ultricies sit amet velit quis, gravida tincidunt
            orci. Vivamus et velit vel lorem posuere tempus.
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer></Footer>
    </main>
  )
}

export default AboutPage

export const Head = () => <title>Hanim</title>
