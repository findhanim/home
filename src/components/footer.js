import React, { useState, useEffect } from "react";

const Footer = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  return (
    <main className="lg:pt-[150px] pt-[100px] pb-[40px] text-black lg:px-[60px] px-[24px]">
      {/* Flower */}
      <div className="flex justify-center lg:text-[100px] text-[60px] text-[#304CD2] lg:mb-[100px] mb-[50px]">
        &#10045;
      </div>
      {/* Collab? */}
      <div className="grid lg:grid-cols-12 grid-cols-6">
        <div className="lg:col-span-6 col-span-6"></div>
        <div className="lg:col-span-5 col-span-6 text-[18px] leading-[26px] uppercase lg:text-right">
          Let's collaborate if you want sprinkles of magic and wizardry in your
          upcoming project.
        </div>
      </div>
      <div className="grid lg:grid-cols-12 grid-cols-6 lg:text-[22px] text-[18px] lg:mt-[100px] mt-[50px]">
        <div className="lg:col-span-1"></div>
        <div className="lg:col-span-10 col-span-6">Say hello at,</div>
      </div>
      {/* Email */}
      <div className="grid lg:grid-cols-12 grid-cols-6 flex lg:justify-center lg:mb-[220px] mb-[100px]">
        <div className="lg:col-span-1"></div>
        <div className="lg:col-span-8 col-span-6 xl:text-[50px] md:text-[30px] text-[24px] font-medium">
          <a
            href="mailto:work.nazreenhanim@gmail.com"
            className="border-b-[4px] border-[#304CD2] pb-[6px]"
          >
            work.nazreenhanim<srf>@gmail.com</srf>
          </a>
        </div>
        <div className="lg:col-span-1"></div>
      </div>
      {/* Credit */}
      <div className="grid lg:grid-cols-12 md:grid-cols-8 grid-cols-6 text-[16px]">
        <div className="lg:col-span-4 md:col-span-4 col-span-6 lg:mb-[0px] mb-[20px]">
          Made with love by <b>HANIM</b>{" "}
          <b className="text-[#304CD2]">&#9786;</b>
        </div>
        {/* Links */}
        <div
          id="link"
          className="lg:col-span-4 md:col-span-4 col-span-6 text-black flex justify-between"
        >
          <a
            href="https://www.linkedin.com/in/nazreenhanim"
            target="_blank"
            rel="noreferrer"
            data-replace="LinkedIn"
          >
            <span>LinkedIn</span>
          </a>
          <a
            href="https://dribbble.com/nazreenhanim"
            target="_blank"
            rel="noreferrer"
            data-replace="Dribbble"
          >
            <span>Dribbble</span>
          </a>
          <a
            href="https://www.behance.net/nazreenhanim"
            target="_blank"
            rel="noreferrer"
            data-replace="Behance"
          >
            <span>Behance</span>
          </a>
          <a
            href="https://codepen.io/nazreenhanim"
            target="_blank"
            rel="noreferrer"
            data-replace="Codepen"
          >
            <span>Codepen</span>
          </a>
        </div>
        {/* Top button */}
        <div className="top-button lg:col-span-4 md:col-span-8 col-span-6 text-black flex justify-end lg:mt-[0px] mt-[50px]">
          <span
            onClick={handleClick}
            aria-label="to top"
            component="span"
            className="border-b border-black pb-[4px]"
          >
            Back to top &#8593;
          </span>
        </div>
      </div>
    </main>
  );
};

export default Footer;