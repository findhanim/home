import React from "react";

export default function Navigation({ children }) {
  return (
    <main className="grid grid-cols-6 lg:grid-cols-12 text-black text-[16px] pt-[30px] lg:px-[60px] px-[24px]">
      <div className="lg:col-span-2 col-span-2">
        {/* Home */}
        <a href="/" className="font-bold">
          HANIM <b className="text-[#304CD2]">&#9786;</b>
        </a>
      </div>
      {/* Navigation */}
      <div
        id="link"
        className="lg:col-span-7 col-span-4 flex lg:justify-start justify-end"
      >
        <a href="/#portfolio" data-replace="Portfolio">
          <span className="mr-[30px]">Portfolio</span>
        </a>
        <a href="/about" data-replace="About">
          <span>About</span>
        </a>
      </div>
      {/* Email */}
      <div className="hidden lg:block lg:col-span-3 text-right">
        <a href="mailto:work.nazreenhanim@gmail.com">
          <span className="border-b border-black pb-[4px]">
            work.nazreenhanim@gmail.com
          </span>
        </a>
      </div>
    </main>
  );
}