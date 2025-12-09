import Link from "next/link";

/**
 * 포트폴리오 상세 페이지 404
 * 
 * 존재하지 않는 브랜드 ID로 접근한 경우 표시됩니다.
 */
const PortfolioNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-8">요청하신 브랜드 페이지를 찾을 수 없습니다.</p>
      <Link
        href="/#portfolio"
        className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
      >
        포트폴리오로 돌아가기
      </Link>
    </div>
  );
};

export default PortfolioNotFound;

