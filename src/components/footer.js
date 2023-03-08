import React from 'react'

export default function Footer({ children }) {
  return (
    <main className="grid lg:grid-cols-2 p-[100px]">
      {/* Back To Top */}
      <div className="">
        <div className="bg-[#222] w-[200px] h-[200px] rounded-[200px]">
          <p className="text-[#CDDE91] rotate-90 pl-[80px] pt-[5px] text-[100px]">
            ➺
          </p>
        </div>
      </div>

      {/* Contact */}
      <div>
        <p className="text-[28px] font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus
          mauris elit, a accumsan dolor cursus.
        </p>
        {/* Email */}
        <p className="monospace text-[12px] uppercase mt-[70px]">Email Me</p>
        <p className="text-[20px] mt-[6px]">hanimjayy@gmail.com</p>

        {/* Email */}
        <p className="monospace text-[12px] uppercase mt-[70px]">Find Me On</p>
        <p className="grid grid-cols-4 text-[20px] mt-[6px]">
          <a href="#">Codepen</a>
          <a href="#">Behance</a>
          <a href="#">Dribbble</a>
          <a href="#">LinkedIn</a>
        </p>
      </div>
    </main>
  )
}
