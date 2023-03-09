import * as React from 'react'
import Footer from '../components/footer'

const HomePage = () => {
  return (
    <main className="bg-black text-white">
      {/* Header */}
      <div className="py-[150px] flex justify-center text-[#CDDE91] text-[300px]">
        ☺
      </div>

      {/* Projects Involved List */}
      <div className="bg-white text-black rounded-t-[40px] p-[100px]">
        <p className="monospace text-[20px] font-bold mb-[80px]">
          Selected Projects Involved <sup>05</sup>
        </p>
        <div className="grid lg:grid-cols-2 border-y-2">
          <p className="flex text-[40px] uppercase py-[50px]">
            <b>Don't Waste</b>
            <i className="serif ml-[10px] mt-[-2.5px]">Mistakes</i>
          </p>
          <p className="flex items-center justify-end monospace text-[12px] font-bold uppercase">
            Read more ➚
          </p>
        </div>
      </div>

      {/* Playground List */}
      <div className="p-[100px]">
        <p className="monospace text-[20px] font-bold mb-[80px]">
          Something From The Playground <sup>03</sup>
        </p>
        <div className="grid lg:grid-cols-3">
          <div className="bg-white mr-[50px] rounded-t-[200px] rounded-b-[20px] h-[450px]"></div>
          <div className="bg-white mr-[50px] rounded-b-[200px] rounded-t-[20px] h-[450px]"></div>
          <div className="bg-white mr-[50px] rounded-t-[200px] rounded-b-[20px] h-[450px]"></div>
        </div>
      </div>

      {/* Footer */}
      <Footer></Footer>
    </main>
  )
}

export default HomePage

export const Head = () => <title>Hanim</title>
