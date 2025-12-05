"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

export default function Clients() {
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
          loop={true}
          speed={600}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          slidesPerView="auto"
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            type: "bullets",
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 80,
            },
            992: {
              slidesPerView: 6,
              spaceBetween: 120,
            },
          }}
          className="init-swiper pb-10"
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <div className="relative w-full h-[100px] flex items-center justify-center px-4">
                 <Image
                    src={`/assets/image_J/협력사 로고/${client}`}
                    alt={`Client ${index}`}
                    width={150}
                    height={80}
                    className="img-fluid object-contain opacity-50 hover:opacity-100 hover:filter-none grayscale transition-all duration-300"
                    style={{ maxHeight: '80px', width: 'auto' }}
                  />
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination mt-5 !bottom-0"></div>
        </Swiper>
      </div>
    </section>
  );
}
