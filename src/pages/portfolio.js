import * as React from 'react'
import Footer from '../components/footer'
import Navigation from '../components/navigation'

const PortfolioPage = () => {
  return (
    <main className="bg-black text-white">
      {/* Navigation */}
      <Navigation></Navigation>

      {/* Smiley */}
      <span className="absolute text-[#CDDE91] text-[300px] -rotate-45 mt-[-80px] ml-[-30px]">
        ☺
      </span>

      {/* Header */}
      <div className="grid lg:grid-cols-12 pt-[180px] pb-[200px] px-[100px] flex items-center">
        {/* Hello */}
        <div className="col-span-2"></div>
        <div className="lg:col-span-8">
          <p className="monospace text-[12px] uppercase">About The Project</p>
          <p className="text-[28px] font-light pt-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            finibus mauris elit, a accumsan dolor cursus quis. Cras quis justo
            nec nibh hendrerit tempus a id ante. Nam lectus augue, ultricies sit
            amet velit quis, gravida tincidunt orci.
          </p>
          <p className="mt-[40px] text-[12px] uppercase">
            <a className="mr-[12px]">UI/UX Design</a> ☻
            <a className="ml-[12px]">Front End Development</a>
          </p>
        </div>

        <div className="col-span-2"></div>
      </div>

      {/* Flower */}
      <span className="absolute text-[#CDDE91] text-[120px] -rotate-45 mt-[-200px] ml-[1200px]">
        ❋
      </span>

      {/* Skills */}
      <div className="bg-white text-black rounded-t-[40px] px-[100px] py-[200px]"></div>

      {/* Footer */}
      <Footer></Footer>
    </main>
  )
}

export default PortfolioPage

export const Head = () => <title>Hanim</title>
