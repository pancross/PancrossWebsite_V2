"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

/**
 * Clients 컴포넌트
 * 
 * 협력사 로고를 슬라이더로 표시하는 섹션입니다.
 * - Swiper를 사용한 자동 슬라이드
 * - 반응형 슬라이드 개수 조정
 * - 호버 시 로고 색상 복원 효과
 */
const Clients = () => {
  // 협력사 로고 파일명 목록
  const clients = [
    "EMART-Visualtypo79.png",
    "롯데백화점 로고(영문).png",
    "부산식품.png",
    "신세계건설 CI 로고 국문 좌우조합.png",
    "오크벨리.png",
    "EMART-Visualtypo79.png",
    "이마트에브리데이.png",
    "코엑스.png",
    "현대백화점그룹 로고 국문 상하조합.png",
    "sajoCi.gif",
  ];

  return (
    <section id="clients" className="clients section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}                    // 무한 루프
          speed={600}                    // 슬라이드 전환 속도
          autoplay={{
            delay: 5000,                 // 5초마다 자동 슬라이드
            disableOnInteraction: false,  // 사용자 상호작용 후에도 자동 재생 유지
          }}
          slidesPerView="auto"           // 자동 슬라이드 너비 조정
          pagination={{
            clickable: true,             // 페이지네이션 클릭 가능
            el: ".swiper-pagination",    // 페이지네이션 요소 선택자
            type: "bullets",              // 불릿 타입 페이지네이션
          }}
          // 반응형 브레이크포인트 설정
          breakpoints={{
            320: {   // 모바일 (320px 이상)
              slidesPerView: 2,
              spaceBetween: 40,
            },
            480: {   // 작은 태블릿 (480px 이상)
              slidesPerView: 3,
              spaceBetween: 60,
            },
            640: {   // 태블릿 (640px 이상)
              slidesPerView: 4,
              spaceBetween: 80,
            },
            992: {   // 데스크톱 (992px 이상)
              slidesPerView: 6,
              spaceBetween: 120,
            },
          }}
          className="init-swiper pb-16"
        >
          {/* 협력사 로고 슬라이드 생성 */}
          {clients.map((client, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <div className="relative w-full h-[100px] flex items-center justify-center px-4">
                <Image
                  src={`/assets/image_J/협력사 로고/${client}`}
                  alt={`협력사 로고 ${index + 1}`}
                  width={150}
                  height={80}
                  className="img-fluid object-contain opacity-50 hover:opacity-100 hover:filter-none grayscale transition-all duration-300"
                  style={{ maxHeight: '80px', width: 'auto' }}
                />
              </div>
            </SwiperSlide>
          ))}
          
          {/* 페이지네이션 표시 */}
          <div className="swiper-pagination mt-10 !bottom-0"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
