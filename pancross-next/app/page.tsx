import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollTop from "@/components/common/ScrollTop";
import Hero from "@/features/landing/components/Hero";
import About from "@/features/landing/components/About";
import Clients from "@/features/landing/components/Clients";
import Services from "@/features/landing/components/Services";
import Portfolio from "@/features/landing/components/Portfolio";
import Stats from "@/features/landing/components/Stats";
import Contact from "@/features/landing/components/Contact";

/**
 * Home 컴포넌트
 * 
 * 메인 페이지를 구성합니다.
 * - 모든 섹션 컴포넌트를 순서대로 배치
 * - 헤더, 메인 콘텐츠, 푸터 구조
 * - 스크롤 탑 버튼
 */
const Home = () => {
  return (
    <>
      {/* 상단 네비게이션 헤더 */}
      <Header />
      
      {/* 메인 콘텐츠 영역 */}
      <main className="main">
        {/* 히어로 섹션 (메인 비주얼) */}
        <Hero />
        
        {/* 회사 소개 섹션 */}
        <About />
        
        {/* 협력사 섹션 */}
        <Clients />
        
        {/* 서비스 섹션 */}
        <Services />
        
        {/* 포트폴리오 섹션 */}
        <Portfolio />
        
        {/* 통계 섹션 */}
        <Stats />
        
        {/* 문의 섹션 */}
        <Contact />
      </main>
      
      {/* 하단 푸터 */}
      <Footer />
      
      {/* 페이지 상단으로 이동 버튼 */}
      <ScrollTop />
    </>
  );
};

export default Home;
