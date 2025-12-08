"use client";

import { useEffect } from "react";
import AOS from "aos";

/**
 * AosInit 컴포넌트
 * 
 * AOS (Animate On Scroll) 라이브러리를 초기화합니다.
 * - 스크롤 시 요소에 애니메이션 효과 적용
 * - 한 번만 실행되도록 설정 (once: true)
 * - 부드러운 애니메이션 효과 (ease-in-out)
 */
const AosInit = () => {
  useEffect(() => {
    // AOS 라이브러리 초기화
    AOS.init({
      duration: 600,        // 애니메이션 지속 시간 (밀리초)
      easing: "ease-in-out", // 애니메이션 이징 함수
      once: true,            // 스크롤 시 한 번만 실행
      mirror: false,         // 스크롤 반대 방향으로 다시 애니메이션하지 않음
    });
  }, []);

  // 이 컴포넌트는 UI를 렌더링하지 않음
  return null;
};

export default AosInit;
