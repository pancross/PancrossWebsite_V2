"use client";

import { useState, useEffect } from "react";
import { BiArrowToTop } from "react-icons/bi";

/**
 * ScrollTop 컴포넌트
 * 
 * 페이지 상단으로 스크롤하는 버튼을 제공합니다.
 * - 100px 이상 스크롤 시 버튼 표시
 * - 부드러운 스크롤 애니메이션
 * - 고정 위치 (우측 하단)
 */
const ScrollTop = () => {
  // ==================== State 관리 ====================
  /** 버튼 활성화 여부 (100px 이상 스크롤 시 true) */
  const [active, setActive] = useState(false);

  // ==================== Side Effects ====================
  /**
   * 스크롤 이벤트 리스너 등록
   * 스크롤 위치에 따라 버튼 표시/숨김을 제어합니다.
   */
  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    
    // 클린업: 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ==================== Event Handlers ====================
  /**
   * 페이지 상단으로 스크롤
   * 부드러운 스크롤 애니메이션을 사용합니다.
   */
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ==================== Render ====================
  return (
    <a
      href="#"
      id="scroll-top"
      className={`scroll-top fixed right-[15px] bottom-[15px] z-[99999] bg-accent w-[40px] h-[40px] rounded flex items-center justify-center transition-all duration-300 ${
        active ? "opacity-100 visible" : "opacity-0 invisible"
      } hover:bg-accent/80`}
      onClick={scrollToTop}
      aria-label="페이지 상단으로 이동"
    >
      <BiArrowToTop className="text-[24px] text-contrast" />
    </a>
  );
};

export default ScrollTop;
