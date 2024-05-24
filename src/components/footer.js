import React from 'react'

export default function Footer({ children }) {
  return (
    <main className="grid lg:grid-cols-2 py-[100px] lg:px-[100px] px-[40px]">
      {/* Back To Top */}
      <div className="mb-[70px]">
        <div className="hidden lg:block bg-[#222] w-[200px] h-[200px] rounded-[200px]">
          <p className="text-[#CDDE91] -rotate-90 pl-[40px] pt-[5px] text-[100px]">
            &#10170;
          </p>
        </div>
      </div>

      {/* Contact */}
      <div>
        <p className="text-[28px] font-light">
          Let's collaborate if you want to include sprinkles of magic and 
          wizardry into your upcoming project.
        </p>
        {/* Email */}
        <p className="monospace text-[12px] uppercase mt-[70px]">Email Me</p>
        <a href="mailto:>work.nazreenhanim@gmail.com" className="text-[20px] mt-[6px]">work.nazreenhanim@gmail.com</a>

        {/* Email */}
        <p className="monospace text-[12px] uppercase mt-[70px]">Find Me On</p>
        <p className="grid lg:grid-cols-4 grid-cols-2 text-[20px] mt-[6px]">
          <a href="https://www.linkedin.com/in/nazreenhanim" target="_blank">LinkedIn</a>
          <a href="https://codepen.io/nazreenhanim" target="_blank">Codepen</a>
          <a href="https://dribbble.com/nazreenhanim" target="_blank">Dribbble</a>
          <a href="https://www.behance.net/nazreenhanim" target="_blank">Behance</a>
        </p>
      </div>
    </main>
  )
}
