import Image from "next/image";

/**
 * Hero 컴포넌트
 * 
 * 메인 히어로 섹션을 제공합니다.
 * - 배경 이미지와 오버레이
 * - 메인 타이틀 및 서브타이틀
 * - 주요 서비스 특징 카드
 * - 반응형 레이아웃
 */
const Hero = () => {
  // ==================== 주요 서비스 특징 데이터 ====================
  /** 주요 서비스 특징 목록 */
  const features = [
    {
      title: "특수상권 입점 전문",
      icon: (
        <img 
          src="/assets/icons/department-store_17674387.svg" 
          alt="특수상권 입점 전문" 
          className="mb-3 hero-icon w-[40px] h-[40px]"
        />
      ),  
      delay: 300,
    },
    {
      title: "F&B 개발 및 제조",
      icon: (
        <img 
          src="/assets/icons/graph_9818969.svg" 
          alt="F&B 개발 및 제조" 
          className="mb-3 hero-icon w-[40px] h-[40px]"
        />
      ),
      delay: 400,
    },
    {
      title: "브랜드 마케팅 전략",
      icon: (
        <img 
          src="/assets/icons/goal_7457506.svg" 
          alt="브랜드 마케팅 전략" 
          className="mb-3 hero-icon w-[40px] h-[40px]"
        />
      ),
      delay: 500,
    },
    {
      title: "외식 프렌차이즈 운영",
      icon: (
        <img 
          src="/assets/icons/franchise_3631594.svg" 
          alt="외식 프렌차이즈 운영" 
          className="mb-3 hero-icon w-[40px] h-[40px]"
        />
      ),
      delay: 600,
    },
    {
      title: "특수상권 전문 브랜딩",
      icon: (
        <img 
          src="/assets/icons/branding_10490688.svg" 
          alt="특수상권 전문 브랜딩" 
          className="mb-3 hero-icon w-[40px] h-[40px]"
        />
      ),
      delay: 700,
    },
  ];

  return (
    <section id="hero" className="section dark-background relative w-full min-h-screen flex items-center justify-center pt-[120px] pb-[80px]">
      {/* 배경 이미지 */}
      <Image
        src="/assets/image_J/페이지_이미지/reserved-table-restaurant.jpg"
        alt="판크로스 히어로 배경 이미지"
        fill
        className="object-cover z-0"
        data-aos="fade-in"
        priority
      />
      
      {/* 어두운 오버레이 */}
      <div className="absolute inset-0 bg-black/70 z-[2]"></div>

      {/* 메인 콘텐츠 */}
      <div className="container relative z-[3]" data-aos="fade-up" data-aos-delay="100">
        {/* 타이틀 영역 */}
        <div className="flex justify-center text-center">
          <div className="w-full max-w-[800px] xl:max-w-[1000px]">
            <h2 className="text-[32px] md:text-[56px] font-bold font-pretendard m-0 text-white leading-tight">
              트렌드를 넘어, 가치를 만듭니다
            </h2>
            <p className="mt-[10px] text-[18px] md:text-[24px] text-white/70">
              정교함과 창의성의 완벽한 조화
            </p>
          </div>
        </div>

        {/* 주요 서비스 특징 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-y-4 gap-x-6 mt-12 justify-center" data-aos="fade-up" data-aos-delay="200">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center py-[30px] px-[20px] transition-all duration-300 border border-white/70 h-full hover:border-accent hover:scale-105 w-full"
              data-aos="fade-up"
              data-aos-delay={item.delay}
            >
              {item.icon}
              <h6 className="font-bold m-0 p-0 text-[16px] leading-[26px] text-white font-pretendard">
                {item.title}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
