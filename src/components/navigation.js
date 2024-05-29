import React from "react";

export default function Navigation({ children }) {
  return (
    <main className="grid grid-cols-6 lg:grid-cols-12">
      <div className="text-[#CDDE91] text-[40px] pt-[28px] leading-[0px] flex justify-end col-span-1 mt-[20px] lg:pl-[80px] pl-[50px]">
        <a href="/" data-replace="&#9786;">
          <span>&#9786;</span>
        </a>
      </div>
      <div className="lg:col-span-8 col-span-2 lg:border-[#CDDE91] lg:border-b lg:mx-[60px]"></div>
      <div
        id="link"
        className="flex justify-between col-span-3 rounded-bl-[30px] bg-white py-[20px] lg:px-[80px] px-[50px] text-black text-[12px] font-bold uppercase"
      >
        <a href="/#portfolio" data-replace="Portfolio">
          <span>Portfolio</span>
        </a>
        <a href="/about" data-replace="About">
          <span>About</span>
        </a>
      </div>
    </main>
  );
}