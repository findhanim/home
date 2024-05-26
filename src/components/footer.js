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
    <main className="grid lg:grid-cols-2 py-[100px] lg:px-[100px] px-[40px]">
      {/* Back To Top */}
      <div className="mb-[70px]">
        <div className="top-button hidden lg:block bg-[#222] w-[200px] h-[200px] rounded-[200px]">
          <p
            onClick={handleClick}
            aria-label="to top"
            component="span"
            className="text-[#CDDE91] -rotate-90 pl-[40px] pt-[5px] text-[100px]"
          >
            &#10170;
          </p>
        </div>
      </div>

      {/* Contact */}
      <div>
        <p className="text-[28px] font-light">
          Let's collaborate if you want sprinkles of magic and wizardry in your
          upcoming project.
        </p>
        {/* Email */}
        <p className="monospace text-[#CDDE91] text-[12px] uppercase mt-[70px]">
          Email Me
        </p>
        <a
          href="mailto:>work.nazreenhanim@gmail.com"
          className="text-[20px] mt-[6px]"
        >
          work.nazreenhanim@gmail.com
        </a>

        {/* Email */}
        <p className="monospace text-[#CDDE91] text-[12px] uppercase mt-[70px]">
          Find Me On
        </p>
        <p
          id="link"
          className="grid lg:grid-cols-4 grid-cols-2 text-[20px] mt-[6px]"
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
            href="https://codepen.io/nazreenhanim"
            target="_blank"
            rel="noreferrer"
            data-replace="Codepen"
          >
            <span>Codepen</span>
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
        </p>
      </div>
    </main>
  );
};

export default Footer;