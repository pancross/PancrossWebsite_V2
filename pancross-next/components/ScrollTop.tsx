"use client";

import { useState, useEffect } from "react";
import { BiArrowToTop } from "react-icons/bi";

export default function ScrollTop() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <a
      href="#"
      id="scroll-top"
      className={`scroll-top fixed right-[15px] bottom-[15px] z-[99999] bg-accent w-[40px] h-[40px] rounded flex items-center justify-center transition-all duration-400 ${
        active ? "opacity-100 visible" : "opacity-0 invisible"
      } hover:bg-accent/80`}
      onClick={scrollToTop}
    >
      <BiArrowToTop className="text-[24px] text-contrast" />
    </a>
  );
}

