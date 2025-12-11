"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * Red 컴포넌트
 * 
 * 부산빨간어묵포차 브랜드 상세 페이지를 제공합니다.
 * - 브랜드 소개 및 이미지
 * - 브랜드 정보 (분류, 입점지, 주요메뉴)
 * - 브랜드 철학 및 설명
 * - 이미지 캐러셀 기능
 */
const Red = () => {
  // 이미지 목록
  const images = [
    "/assets/image_J/brandP/red/emart.hanam.jpg",
    // 추후 추가 이미지가 있으면 여기에 추가
    // "/assets/image_J/brandP/red/1.jpg",
    // "/assets/image_J/brandP/red/2.jpg",
    // "/assets/image_J/brandP/red/3.jpg",
    // "/assets/image_J/brandP/red/4.jpg",
  ];

  // 현재 선택된 이미지 인덱스
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Title Section - Header 높이만큼 상단 여백 추가 */}
      <section className="py-12 pt-[150px] bg-white">
        <div className="container">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#151515] mb-4 font-pretendard">
              부산빨간어묵포차
            </h1>
            <p className="text-lg text-[#444444] max-w-4xl mx-auto leading-relaxed">
              부산빨간어묵포차는 부산 부평 깡통시장의 전통을 현대적으로 재해석하여, 옛 추억의 맛과 현대인의 입맛을 동시에 만족시키는 정통 길거리 음식 브랜드입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <div className="bg-[#f8f9fa] py-5">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link href="/" className="text-[#ffc451] hover:text-[#ffd670] transition-colors">
                  Home
                </Link>
              </li>
              <li className="before:content-['/'] before:px-2 before:text-[#6c757d]">
                <span className="text-[#6c757d]">부산빨간어묵포차</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="section py-12">
        <div className="container">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Large Image with Carousel */}
            <div className="relative">
              <div className="relative w-full h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={images[currentImageIndex]}
                  alt="부산빨간어묵포차 매장 이미지"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Carousel Indicators - 이미지 아래에 배치 */}
              <div className="flex justify-center gap-2 mt-4">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? "bg-[#ffc451] w-6"
                        : "bg-[#dee2e6] hover:bg-[#adb5bd]"
                    }`}
                    aria-label={`이미지 ${index + 1}로 이동`}
                  />
                ))}
              </div>
            </div>

            {/* Right: Brand Information and Description */}
            <div className="flex flex-col gap-6 pr-[30px]">
              {/* Brand Information Box */}
              <div className="bg-white border border-[#e9ecef] rounded-lg pl-[30px] pr-0 pt-[30px] pb-[30px] shadow-md">
                <h2 className="text-2xl font-bold text-[#151515] mb-0 font-pretendard block">
                  브랜드 정보
                </h2>
                
                <div className="space-y-0 mt-[30px] block">
                  <p className="flex items-center gap-2 mb-0 block">
                    <span className="text-[#6c757d] text-sm font-medium">브랜드 분류:</span>
                    <span className="text-[#151515] text-base">분식</span>
                  </p>
                  
                  <p className="flex items-center gap-2 mb-0 mt-[30px] block">
                    <span className="text-[#6c757d] text-sm font-medium">입점지:</span>
                    <span className="text-[#151515] text-base">이마트, 이마트 에브리데이</span>
                  </p>
                  
                  <p className="flex items-center gap-2 mb-0 mt-[30px] block">
                    <span className="text-[#6c757d] text-sm font-medium">주요메뉴:</span>
                    <span className="text-[#151515] text-base">좋은어묵, 빨간어묵, 물떡</span>
                  </p>
                </div>
              </div>

              {/* Description Section */}
              <div>
                <h2 className="text-2xl font-bold text-[#151515] mb-6 font-pretendard">
                  전통과 현대가 만나는 정통 길거리 음식의 새로운 기준
                </h2>
                <div className="text-[#444444] text-base leading-[28px] space-y-4">
                  <p>
                    부산빨간어묵포차는 부산 부평 깡통시장의 전통을 현대적으로 재해석한 길거리 음식 브랜드입니다. 옛 추억의 맛을 기반으로 현대인의 입맛을 고려한 메뉴를 개발하여 세대와 취향을 초월한 미식 경험을 제공합니다.
                  </p>
                  <p>
                    이 브랜드는 어육함량이 높은 고급 어묵과 특제 간장 소스를 사용하여, 깊고 풍부한 풍미를 선사하며, 길거리 음식의 가치를 한 단계 높였습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Red;
