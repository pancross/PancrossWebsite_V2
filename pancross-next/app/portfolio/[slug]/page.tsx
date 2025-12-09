import { notFound } from "next/navigation";
import { portfolioItems, getPortfolioItemById } from "@/features/landing/constants/portfolio";
import Red from "@/features/landing/components/detailPage/red";
import The from "@/features/landing/components/detailPage/the";
import Ocean from "@/features/landing/components/detailPage/ocean";
import Cro from "@/features/landing/components/detailPage/cro";
import Hanmari from "@/features/landing/components/detailPage/hanmari";
import Epo from "@/features/landing/components/detailPage/epo";

/**
 * 브랜드 상세 페이지 컴포넌트 매핑
 */
const brandComponents: Record<string, React.ComponentType> = {
  red: Red,
  the: The,
  ocean: Ocean,
  cro: Cro,
  hanmari: Hanmari,
  epo: Epo,
};

interface PortfolioDetailPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * 정적 생성: 빌드 시 모든 브랜드 페이지를 미리 생성
 */
export async function generateStaticParams() {
  return portfolioItems.map((item) => ({
    slug: item.id,
  }));
}

/**
 * 포트폴리오 상세 페이지 (동적 라우팅)
 * 
 * `/portfolio/{slug}` 경로로 접근하는 모든 브랜드 상세 페이지를 처리합니다.
 */
const PortfolioDetailPage = async ({ params }: PortfolioDetailPageProps) => {
  const { slug } = await params;
  const portfolioItem = getPortfolioItemById(slug);
  const BrandComponent = brandComponents[slug];

  // 유효하지 않은 브랜드 ID인 경우 404
  if (!portfolioItem || !BrandComponent) {
    notFound();
  }

  return <BrandComponent />;
};

export default PortfolioDetailPage;

