import type { Metadata } from "next";
import "./globals.css";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";
import AosInit from "@/components/common/AosInit";

/**
 * 메타데이터 설정
 * SEO 및 브라우저 표시 정보를 정의합니다.
 */
export const metadata: Metadata = {
  title: "판크로스",
  description: "판크로스: 혁신과 창의성으로 이끄는 F&B 전문 기업",
  icons: {
    icon: "/assets/img/pancross_icon.png",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

/**
 * RootLayout 컴포넌트
 * 
 * Next.js 앱의 루트 레이아웃입니다.
 * - 전역 CSS 및 라이브러리 스타일 import
 * - AOS 애니메이션 초기화
 * - HTML 기본 구조 설정
 */
const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="ko">
      <body className="antialiased">
        {/* AOS 애니메이션 초기화 */}
        <AosInit />
        
        {/* 페이지 콘텐츠 */}
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
