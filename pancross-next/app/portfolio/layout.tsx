"use client";

import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollTop from "@/components/common/ScrollTop";

interface PortfolioLayoutProps {
  children: React.ReactNode;
}

/**
 * Portfolio 레이아웃
 * 
 * 포트폴리오 상세 페이지들의 공통 레이아웃입니다.
 * - Header, Footer, ScrollTop을 공통으로 제공
 * - 포트폴리오 페이지에서는 Header가 항상 어두운 배경을 가집니다
 */
const PortfolioLayout = ({ children }: PortfolioLayoutProps) => {
  useEffect(() => {
    // 포트폴리오 페이지에서는 Header가 항상 어두운 배경과 고정 크기를 가지도록 설정
    const header = document.getElementById("header");
    if (header) {
      // 초기 설정
      header.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
      header.style.paddingTop = "10px";
      header.style.paddingBottom = "10px";

      // 스타일 변경 감지 및 고정
      const observer = new MutationObserver(() => {
        // 배경색 고정
        if (header.style.backgroundColor !== "rgba(0, 0, 0, 0.8)") {
          header.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        }
        // 패딩 고정
        if (header.style.paddingTop !== "10px") {
          header.style.paddingTop = "10px";
        }
        if (header.style.paddingBottom !== "10px") {
          header.style.paddingBottom = "10px";
        }
      });

      // 스타일 변경 감지
      observer.observe(header, {
        attributes: true,
        attributeFilter: ["style", "class"],
      });

      // 스크롤 이벤트 오버라이드 - 배경색과 패딩 고정
      const handleScroll = () => {
        header.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        header.style.paddingTop = "10px";
        header.style.paddingBottom = "10px";
      };
      
      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        observer.disconnect();
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <>
      {/* 상단 네비게이션 헤더 */}
      <Header />
      
      {/* 메인 콘텐츠 영역 */}
      <main className="main">
        {children}
      </main>
      
      {/* 하단 푸터 */}
      <Footer />
      
      {/* 페이지 상단으로 이동 버튼 */}
      <ScrollTop />
      
      {/* 포트폴리오 페이지용 스타일 - Header 항상 어두운 배경 및 고정 크기 */}
      <style jsx global>{`
        #header {
          background-color: rgba(0, 0, 0, 0.8) !important;
          padding-top: 10px !important;
          padding-bottom: 10px !important;
        }
      `}</style>
    </>
  );
};

export default PortfolioLayout;

