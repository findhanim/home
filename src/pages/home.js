import * as React from 'react'
import Footer from '../components/footer'
import Navigation from '../components/navigation'
import { Link } from 'gatsby'

const HomePage = () => {
  return (
    <main className="bg-black text-white">
      {/* Navigation */}
      <Navigation></Navigation>

      {/* Header */}
      <div
        data-aos="flip-left"
        className="pt-[100px] pb-[150px] flex justify-center text-[#CDDE91] text-[300px]"
      >
        ☺
      </div>

      {/* Projects Involved List */}
      <div
        id="portfolio"
        className="bg-white text-black rounded-t-[40px] py-[100px]"
      >
        <p className="monospace text-[20px] font-bold mb-[80px] lg:px-[100px] px-[40px]">
          Selected Projects Involved <sup>05</sup>
        </p>
        {/* Portfolio One */}
        <Link to="/portfolio/one">
          <div className="grid lg:grid-cols-2 border-y border-[#bbb] lg:px-[100px] px-[40px] hover:bg-gradient-to-r from-white to-[#CDDE90]">
            <p className="flex text-[30px] lg:text-[40px] uppercase py-[50px] lg:py-[70px]">
              <b>Daily UI</b>
              <i className="serif ml-[10px] mt-[-2.5px]">Challenges</i>
            </p>
            <p className="hidden lg:flex flex items-center justify-end monospace text-[12px] font-bold uppercase">
              Read more ➚
            </p>
          </div>
        </Link>
        {/* Portfolio Two */}
        <Link to="/portfolio/two">
          <div className="grid lg:grid-cols-2 border-y border-[#bbb] lg:px-[100px] px-[40px] hover:bg-gradient-to-r from-white to-[#CDDE90]">
            <p className="flex text-[30px] lg:text-[40px] uppercase py-[50px] lg:py-[70px]">
              <b>Beige</b>
            </p>
            <p className="hidden lg:flex flex items-center justify-end monospace text-[12px] font-bold uppercase">
              Read more ➚
            </p>
          </div>
        </Link>
        {/* Portfolio Three */}
        <Link to="/portfolio/three">
          <div className="grid lg:grid-cols-2 border-y border-[#bbb] lg:px-[100px] px-[40px] hover:bg-gradient-to-r from-white to-[#CDDE90]">
            <p className="flex text-[30px] lg:text-[40px] uppercase py-[50px] lg:py-[70px]">
              <b>Boxy</b>
              <i className="serif ml-[10px] mt-[-2.5px]">Shapes</i>
            </p>
            <p className="hidden lg:flex flex items-center justify-end monospace text-[12px] font-bold uppercase">
              Read more ➚
            </p>
          </div>
        </Link>
      </div>

      {/* Playground List */}
      <div className="py-[100px] lg:px-[100px] px-[40px]">
        <p className="monospace text-[20px] font-bold mb-[80px]">
          Something From The Playground <sup>03</sup>
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
  )
}

export default HomePage

export const Head = () => <title>Hanim</title>
