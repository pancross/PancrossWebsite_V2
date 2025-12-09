/**
 * 포트폴리오 브랜드 데이터
 * 
 * 모든 브랜드 포트폴리오 정보를 중앙에서 관리합니다.
 */
export interface PortfolioItem {
  /** 브랜드 ID (URL slug) */
  id: string;
  /** 브랜드 이름 */
  title: string;
  /** 브랜드 설명 */
  desc: string;
  /** 이미지 경로 (public/assets 기준) */
  img: string;
}

/** 브랜드 포트폴리오 목록 */
export const portfolioItems: PortfolioItem[] = [
  {
    id: "red",
    title: "부산빨간어묵포차",
    desc: "정통 길거리 음식의 새로운 기준",
    img: "image_J/빨간어묵포차/emart.hanam.jpg",
  },
  {
    id: "the",
    title: "더 어",
    desc: "프리미엄 어묵의 새로운 미식 경험",
    img: "image_J/brandP/the uh/1.jpg",
  },
  {
    id: "ocean",
    title: "바다해어묵",
    desc: "바다의 신선함을 담은 고품질 어묵",
    img: "image_J/brandP/ocean/KakaoTalk_20250115_105712067_02.jpg",
  },
  {
    id: "cro",
    title: "크로붕",
    desc: "크로플과 붕어빵의 특별한 만남",
    img: "image_J/brandP/croboong/1.jpg",
  },
  {
    id: "hanmari",
    title: "한마리뚝닭",
    desc: "수비드로 완성된 전기구이 치킨의 새로운 기준",
    img: "image_J/brandP/hanmari/1.jpg",
  },
  {
    id: "epo",
    title: "이포어묵",
    desc: "전통과 품격이 담긴 수제 어묵",
    img: "image_J/brandP/epo/2.jpg",
  },
];

/**
 * 브랜드 ID로 포트폴리오 항목 찾기
 */
export const getPortfolioItemById = (id: string): PortfolioItem | undefined => {
  return portfolioItems.find((item) => item.id === id);
};

