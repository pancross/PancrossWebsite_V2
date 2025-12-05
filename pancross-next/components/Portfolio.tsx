"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  const lightboxRef = useRef<any>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    import("glightbox").then(({ default: GLightbox }) => {
      import("glightbox/dist/css/glightbox.min.css");
      const instance = GLightbox({
        selector: ".glightbox",
      });
      lightboxRef.current = instance;
      cleanup = () => instance.destroy();
    });

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  const items = [
    {
      title: "부산빨간어묵포차",
      desc: "정통 길거리 음식의 새로운 기준",
      img: "빨간어묵포차/emart.hanam.jpg",
      link: "#",
    },
    {
      title: "더 어",
      desc: "프리미엄 어묵의 새로운 미식 경험",
      img: "brandP/the uh/1.jpg",
      link: "#",
    },
    {
      title: "바다해어묵",
      desc: "바다의 신선함을 담은 고품질 어묵",
      img: "brandP/ocean/KakaoTalk_20250115_105712067_02.jpg",
      link: "#",
    },
    {
      title: "크로붕",
      desc: "크로플과 붕어빵의 특별한 만남",
      img: "brandP/croboong/1.jpg",
      link: "#",
    },
    {
      title: "한마리뚝닭",
      desc: "수비드로 완성된 전기구이 치킨의 새로운 기준",
      img: "brandP/hanmari/1.jpg",
      link: "#",
    },
    {
      title: "이포어묵",
      desc: "전통과 품격이 담긴 수제 어묵",
      img: "brandP/epo/2.jpg",
      link: "#",
    },
  ];

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>브랜드 찾기</h2>
          <p>Brand Portfolio</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="200">
          {items.map((item, index) => (
            <div key={index} className="portfolio-item relative overflow-hidden group h-[300px]">
              <Image
                src={`/assets/image_J/${item.img}`}
                alt={item.title}
                fill
                className="object-cover transition-all duration-300 group-hover:scale-110"
              />
              <div className="portfolio-info opacity-0 absolute left-[12px] right-[12px] bottom-[-100%] z-[3] transition-all duration-500 bg-white/90 p-[15px] group-hover:opacity-100 group-hover:bottom-0">
                <h4 className="text-[18px] font-semibold pe-[50px] text-heading m-0 font-pretendard">
                  {item.title}
                </h4>
                <p className="text-default/70 text-[14px] mb-0 pe-[50px]">
                  {item.desc}
                </p>
                <a
                  href={`/assets/image_J/${item.img}`}
                  title={item.title}
                  data-gallery="portfolio-gallery-app"
                  className="glightbox preview-link absolute right-[50px] text-[24px] top-[calc(50%-14px)] text-default/70 hover:text-accent transition-colors duration-300"
                >
                  <i className="bi bi-zoom-in"></i>
                </a>
                <Link
                  href={item.link}
                  title="More Details"
                  className="details-link absolute right-[14px] text-[28px] top-[calc(50%-14px)] text-default/70 hover:text-accent transition-colors duration-300"
                >
                  <i className="bi bi-link-45deg"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
