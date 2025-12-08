"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BiListUl, BiX } from "react-icons/bi";

/**
 * Header 컴포넌트
 * 
 * 사이트 상단 네비게이션 헤더를 제공합니다.
 * - 스크롤 시 배경색 변경
 * - 반응형 모바일 메뉴
 * - 네비게이션 링크 호버 효과
 */
const Header = () => {
  // ==================== State 관리 ====================
  /** 스크롤 여부를 추적하는 상태 (100px 이상 스크롤 시 true) */
  const [scrolled, setScrolled] = useState(false);
  
  /** 모바일 네비게이션 메뉴 활성화 여부 */
  const [mobileNavActive, setMobileNavActive] = useState(false);

  // ==================== 네비게이션 메뉴 데이터 ====================
  /** 메인 네비게이션 메뉴 항목 목록 */
  const navMenuItems = [
    { href: "#about", label: "판크로스" },
    { href: "#services", label: "서비스" },
    { href: "#portfolio", label: "브랜드" },
    { href: "#contact", label: "창업문의" },
    { href: "#store", label: "매장찾기" },
    { href: "#information", label: "고객센터" },
  ];

  // ==================== Side Effects ====================
  /**
   * 스크롤 이벤트 리스너 등록
   * 스크롤 위치에 따라 헤더 배경색을 변경합니다.
   */
  useEffect(() => {
    const handleScroll = () => {
      // 100px 이상 스크롤 시 배경색이 있는 헤더로 전환
      setScrolled(window.scrollY > 100);
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll);
    
    // 컴포넌트 마운트 시 초기 스크롤 위치 확인
    handleScroll();

    // 클린업: 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ==================== Event Handlers ====================
  /**
   * 모바일 네비게이션 메뉴 토글
   * 메뉴 열기/닫기를 전환하고 body에 클래스를 추가/제거합니다.
   */
  const toggleMobileNav = () => {
    setMobileNavActive(!mobileNavActive);
    document.body.classList.toggle("mobile-nav-active");
  };

  /**
   * 모바일 네비게이션 메뉴 닫기
   * 메뉴를 닫고 body에서 클래스를 제거합니다.
   */
  const closeMobileNav = () => {
    setMobileNavActive(false);
    document.body.classList.remove("mobile-nav-active");
  };

  // ==================== Render ====================
  return (
    <header
      id="header"
      className={`header flex items-center fixed top-0 w-full z-[997] transition-all duration-500 ${
        // 스크롤 시: 반투명 검은 배경 + 그림자 + 패딩 축소
        // 스크롤 전: 투명 배경 + 기본 패딩
        scrolled
          ? "bg-black/80 shadow-lg py-[10px]"
          : "bg-transparent py-[20px]"
      }`}
    >
      <div className="container flex items-center justify-between relative">
        {/* ==================== 로고 영역 ==================== */}
        <Link
          href="/"
          className="logo flex items-center me-auto xl:me-0"
          onClick={closeMobileNav}
        >
          {/* 판크로스 로고 SVG (Base64 인코딩된 이미지) */}
          <svg
            width="176"
            height="20"
            viewBox="0 0 176 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="max-h-[36px]"
          >
            <rect width="176" height="20" fill="url(#pattern0_20_69)" />
            <defs>
              <pattern
                id="pattern0_20_69"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_20_69"
                  transform="matrix(0.0026455 0 0 0.0232804 0 -0.000529101)"
                />
              </pattern>
              <image
                id="image0_20_69"
                width="378"
                height="43"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXoAAAArCAYAAAB2BUN2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAC7dJREFUeNrsXf912zgMZvr6f90JTp2g7gRWJogzQZ0J6k4QZwKnE9iZwO4EViawOoHVCeybwCem0JXRE0mAv6Qk+N7ju7ZnCgQFfgRBkBKCwWAwGAwGg8FgMBgMBoPBYDAYDEYfuPCpfD6fc+RPq4uLi4q7e3iAd5hB6cKpLqUs9Ts8RbKPU/3scgD6VmCrRaJ2jOsy0vykhLaUiWSdUujNGD4hzOuyq8vh7A5Zf1GXzLENUweZSw99KVggnmlFgveYyT6py96hL+W7X3URODxTvt+jh300z58F1Hckn1eXjYOtynqjgG1xaccZ6swpbfGQtaPKYrwuot+dw2JH8PiaNqxcyMNR34WDrGyoRC/7OuQ7dNGNiCNm8rQQ/MJz4vm/HT7EBw7KIVC/jIcii8FEH8Xj9hi040REvxka0YMHH/rdHRMQfYM9lWRhUjsEbsfBwTEZOTonTs5ESlmMl4V3A2iDXCauMF6RIcZow9dEukypZBB5cpZ9tq9L6DaljOXKSXqHJXsI++yEfs/BFRm0gxJWkhP/LGAbSt1eF4yhkLJ4X42JPjhmQEomXPkQcEJdlkPoUCCkjcfkaMLPxOpIsl8hdV5FbgtqDwHCTkkmWJA1Cyxry/TIRB9rAJlIyWfQZAnjjeOQm4kennxMwit6UGtqeocJdG7bqqkt0vu/TTHBwpj5FkHWI9MjE30MjHSeNwwq36X414S6LPvKWgCSiUl4fS7pdfYxSkjyDTaGdxxjBalLf5xFWLVJWezRvyK8j/DMS9WTrsuEsKyUZLyORNJy8H1POGnN67LoY2XkOPCf8rbr8kv5twk8axxoSV92vIMrAllNdBMrUecK9Pip2OkVkaAzwzumhBm3rT7/B56dd/xOJJJVCMbbBDZzQ1N35pq2B/WTp4s5Zt0YsxZiZ91AtgkV1nMNrVz0seY3qJRaz3bvulYwRH21IUKpG9HWjh59cbaEf0aQKtlk0sw0v8NmouWWd2yVxWCitxKVa30YfJgDJaFTOUMQ/SYx0VPSKPch9y18iB7q7x2JfkkheUzoi5jGO/Mg+mmifmfyfuNIGaOvHOvliN/8RIYUpon7N1m6JXjlWFnyKoPLVNcOEMJdriE5lP3V+t7YfgT7D5QQ38RD5w04KT52ib2WYgWymPCZ6KPClfAw8flC4FL+UmbfNLgdYP/eUO+tiTxJyVh3hvhp2V7tCfwm/R22PXXfrAmOSa6xR8pEtYFVxMrh2oWSKGsFsjahr3hgvGGib04HOg5kWcdGzM0hEuwmYcjsGwwZ5Im8eqxnWQ0howJCclMIx2BDag+tv1MmbarOD8jfZZoVpsuKRnrbcqw0d/5g9HOV1aSjHnX3FzGY6E0DOIcyhZj4QeCzbkqHZXkBXthJpA/fPCDJPoVXj/Vs+yT5XNmLkCd2N4SVyLYj1ITVuXBYwRQUm2/905oQUjGR/h48b5OevrIEyNohZDGY6P/HDoocxHNBi722vShM6tij5s9aQgyxCUYMCaTw6rH9/OsF2qkk+K74+oeAKy+fkMgzwKRyF0j3KRD+1CDre2BZM8F4VXg/oLY8uwccYocYcixa3iomDHAVyrOV8dy6rbcI7zK2V48NY1QvzEYl4V5rPHKszr9dyNonCaquf1/X/yzCXE0gx4L0tm9g/6DLBicBZclQjuiS5bHSH8N4ls+ftByzQncXPjhIsjQ5/9Ie/tWs8HzbOO2wqXvV9jS/sdqwDJcCp42F/dsAZW+HEiPeXtmZ54vMvT9AGqRajq75zy35C2z6JOWcQKz0ypQpfZ7yg+S8E21yGVmn3PCMecD+OFpur5ylkkXowxnybMLCod4hpD1r7CkPwIM7AqeougVbWQ3lCoSbjhkdE7bJwFNWCyaEMQpkIKPGo/JZ6odaEQX2/IeAqWWl9BhL51DZWdKzr//zRYQ5bToyrQzBDkPKcr6gD5IwpCOETcSolLorZL0MVjpL8fqQwcpqHyIzqm+iP8GyfN02EhE/5/0q8PO+99yXVU96x0QTsvA19HHMOrZP8MkQQ13k1SCXAUKGxpTIlizf0MvUo+83xDFcwNhfOoSg5q94X+Hpmu6XTPTSCD9pUv3yRN5iMMBgL3rsT7RH/8JS6aRnMzfEM1EThoPOV4H7/clG6nJd//Gj+LO5vBVuGTNjpKwbRdbaURbZVuBcRG54Z3dQ1uLvd3oreEdzjUN4D86UbvJKdZHgI4zzplQam1B/U1omuKY/toYxu0gy2gLE6NGHNCJ8KYccr0bG03atOnmPMXpKfHYfelAQPh85gn6aEa4a0N0pk1HjpEhdKM9defbbiBDHRn+f2GInUWVpnn9EfAZxhaln2PeYReC43FJnge0zzG/hfMkx1CdRY3r0d0pplpDSc/8ovRkZpkHkNKe6qiBoGAO8+rXoB5TVBOmrTYH76ATe5lo8v+nU5pHPOp5VEbz6nEAEFPL+aSDwHNkfsi++CMd9HqwskOclC9EW3Wnla0SWTNe4v2vXg32P6oWHJbWhN9EdBs58NsffRWjoQikFlIpgKD6fDOw1fKNMdH0YSCVo8V85INE504onPgps1NiJUTeIHwgil5ZVXHOKGxuuMJ0yvoXJ9AAXr41thC/cDz7NE8pyCStVtn0MILEu29oS3vtruc5hawhjOuH9AJVMOSs/Zd+EvBIAYo13It0dNyp+CPqd6is4ByAH4u/WykAS3gcYvA353QRetcgBi5lsdHqtBSHbSvzZ3JV1HhryUS6EuyUOJtMkkyt9LIlYhhsqpZ9LhWzlbyeECabQjJkYsqief1f/VY71xFv8bq3vGY6XQvRYA/yoCwGB13lEPifY4SkFcmn5LbWHIYmr1r0Q9A20TCFb2wT1OUKbT5i+6pqUYVD8IE6sUteZ52CSXurCYH9jSz/7oEwoqwjwDMzkWek8/bdG9oYVmXM/vBugghijKE1xfsK9N1HCNyD/R0/deB1xWa5bmqcikytNfy9E+nMM1wGcFRe097hSynJ9l5ktRGggc129ryGJcGDo+gbwyWfCezcwBb8GJAbsYZrROcJpUSCf5IYHA/MyItnHIJbHALJjT3Aqbiwbi5NIcrvu0JlE1NNlv0nXL0vEOOtyzr51Zd0Iw62hkLmy7zo929yY2spsWQzI2V1oJrdts4KD7KQjlGXoBuxipgeCjINvWqS65PNJkXNJr+x4xixVemXX6oj4pSSvTzJ6fkqQ8q6ynnRGp/Ahv5YVRHZKWQTbW1mO9q9gfDUbyM0VAbkhNXup1Dmb0g81NpDB/1vq7JmYQr4x8IQupLfQpBwvoE8ONrunyBsk0SM/GUiSQRgExxhE7zIQQ4fCIhHBLCTRE/tpjpjgY+h8xKQwgseViuRHQyN5pV0HF7snfBa0M9/dMFlMNTx2oHIc4v4aCtGT3oemjVYeGlLoBhsSKAjPxKbeRQnfAHq7GgGOw3+BNoQMa2QRmovd05jYYr2g811Andfiz1kQjO2NAve1DP9dam6SHAUOD5pkUcOH15S2KavEG+J+y0k8vyurMvyui2f62kuj6Lb2fdCQiB6bVvlIeCZlUohy2dcArkZ4OmAiD6yJv8fufbAVcT5egr0OYIrUWXpVn4DwXchQ1rkHgkd/ehEmmhB9XcIg104wIOuT8LtOASXLxckQfw5mYSfc5oLAE2Giljp/UYkQNiyLjndZdqzITqK/A44227sD21sjJibrZHVBnHFtKXAn1zuikc9/MkpKJgDhjpNK3dU2pK1p65iWstiJJNRAQ7QnhzZ9Vvo9E3/v/D4pRveUX29qWwj7gDhkFqOPlPvQPysyxqBnpej6C3QtA/Z3Lp7fqa72ddFyYiqQX3nIGrf07JJVKrpWCWwu16zajfpq7n+31Wm+0NXY4z2k4cqNSzX0d6emyGLtT7VlTZ1OXmiNO51jauWUVl8WKTiDwWAwXgRa+wbHt/Rh9Pf8+hkMxhsg+QxWAo23/MPhjACDwWAwGAwGg8FgMBgMBoPBYDAYDAYJ/wkwAJ2P6wowNZriAAAAAElFTkSuQmCC"
              />
            </defs>
          </svg>
        </Link>

        {/* ==================== 메인 네비게이션 메뉴 ==================== */}
        <nav
          id="navmenu"
          className={`navmenu hidden xl:block ${
            mobileNavActive ? "mobile-nav-active" : ""
          }`}
        >
          <ul className="flex m-0 p-0 list-none items-center gap-8">
            {navMenuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="nav-link font-pretendard text-[16px] font-normal flex items-center justify-between whitespace-nowrap transition-all duration-300 py-[18px] px-[15px]"
                  onClick={closeMobileNav}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ==================== 액션 버튼 영역 ==================== */}
        <div className="flex items-center ms-auto xl:ms-0 gap-4">
          {/* 문의하기 버튼 (sm 이상 화면에서 표시) */}
          <Link
            className="btn-getstarted text-white border-2 border-accent px-[30px] py-[8px] rounded-[4px] transition-all duration-300 bg-transparent text-[14px] whitespace-nowrap hidden sm:inline-block ms-[15px]"
            href="#contact"
          >
            문의하기
          </Link>

          {/* 스마트스토어 버튼 (md 이상 화면에서 표시, 새 탭에서 열림) */}
          <Link
            className="btn-getstarted text-white border-2 border-accent px-[30px] py-[8px] rounded-[4px] transition-all duration-300 bg-transparent text-[14px] whitespace-nowrap hidden md:inline-block ms-[15px]"
            href="https://smartstore.naver.com/redfishcakecarriage"
            target="_blank"
            rel="noopener noreferrer"
          >
            스마트스토어
          </Link>
        </div>

        {/* ==================== 모바일 메뉴 토글 버튼 ==================== */}
        <i
          className="mobile-nav-toggle xl:hidden text-white text-[28px] cursor-pointer ms-[10px] z-50 relative flex items-center justify-center"
          onClick={toggleMobileNav}
          aria-label={mobileNavActive ? "메뉴 닫기" : "메뉴 열기"}
        >
          {mobileNavActive ? <BiX /> : <BiListUl />}
        </i>
      </div>

      {/* ==================== 모바일 네비게이션 스타일 ==================== */}
      <style jsx global>{`
        /* 데스크톱 네비게이션 링크 스타일 */
        .nav-link {
          color: #ffffff !important;
          text-decoration: none;
        }
        .nav-link:hover {
          color: #facc15 !important; /* 노란색 (yellow-400) */
          text-decoration: none;
        }

        /* 버튼 hover 스타일 - 배경만 노란색으로 채우기 */
        .header .btn-getstarted {
          background-color: transparent !important;
          color: #ffffff !important;
          border-color: #ffffff !important; /* 기본 흰색 border */
        }
        .header .btn-getstarted.border-accent {
          border-color: #ffc451 !important; /* accent 색상 (노란색) - 스마트스토어 버튼만 */
        }
        .header .btn-getstarted:hover {
          background-color: #ffc451 !important; /* accent 색상 (노란색) */
          color: #ffffff !important; /* 텍스트는 흰색 유지 */
        }
        .header .btn-getstarted.border-accent:hover {
          border-color: #ffc451 !important; /* accent 색상 (노란색) - 스마트스토어 버튼만 */
        }

        /* 모바일 메뉴 활성화 시 body 스크롤 방지 */
        .mobile-nav-active {
          overflow: hidden;
        }

        /* 모바일 메뉴 오버레이 스타일 */
        .mobile-nav-active .navmenu {
          display: block !important;
          position: fixed;
          inset: 0;
          background: rgba(33, 37, 41, 0.8); /* 반투명 어두운 배경 */
          z-index: 9998;
          transition: 0.3s;
        }

        /* 모바일 메뉴 컨테이너 스타일 */
        .mobile-nav-active .navmenu ul {
          position: absolute;
          inset: 60px 20px 20px 20px;
          padding: 10px 0;
          margin: 0;
          border-radius: 6px;
          background-color: #ffffff;
          overflow-y: auto;
          transition: 0.3s;
          display: block;
          flex-direction: column;
          align-items: flex-start;
          gap: 0;
        }

        /* 모바일 메뉴 항목 너비 설정 */
        .mobile-nav-active .navmenu ul li {
          width: 100%;
        }

        /* 모바일 메뉴 링크 기본 스타일 */
        .mobile-nav-active .navmenu ul a {
          color: #212529 !important;
          font-weight: 500;
          font-size: 17px;
          padding: 10px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* 모바일 메뉴 링크 호버 및 활성 상태 */
        .mobile-nav-active .navmenu ul a:hover,
        .mobile-nav-active .navmenu ul .active {
          color: #ffc451 !important; /* 액센트 색상 (노란색) */
        }
      `}</style>
    </header>
  );
};

export default Header;
