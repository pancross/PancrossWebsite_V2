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
 */
const PortfolioLayout = ({ children }: PortfolioLayoutProps) => {
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
    </>
  );
};

export default PortfolioLayout;

