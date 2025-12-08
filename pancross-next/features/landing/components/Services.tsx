import Image from 'next/image';

/**
 * Services 컴포넌트
 * 
 * 제공 서비스 섹션을 표시합니다.
 * - 주요 서비스 목록
 * - 각 서비스별 아이콘 및 설명
 * - 호버 효과
 * - 반응형 그리드 레이아웃
 */
const Services = () => {
  // ==================== 서비스 데이터 ====================
  /** 제공 서비스 목록 */
  const services = [
    {
      title: "특수상권 입점 전문",
      desc: "전략적인 입지 분석과 맞춤형 매장 운영 솔루션을 통해 특수상권에서 최상의 성과를 보장합니다",
      icon: (
        <Image
          src="/assets/icons/department-store_17674387.svg"
          alt="특수상권 입점 전문"
          width={80}
          height={80}
          className="bg-[#ffc451] px-3 py-3 rounded-sm fill-contrast transition-all duration-300"
        />
      ),
      delay: 100,
    },
    {
      title: "F&B 개발 및 제조",
      desc: "고객의 니즈를 반영한 독창적인 레시피와 고품질 재료로 차별화된 메뉴를 제공합니다",
      icon: (
        <Image
          src="/assets/icons/goal_7457506.svg"
          alt="F&B 개발 및 제조"
          width={80}
          height={80}
          className="bg-[#ffc451] px-3 py-3 rounded-sm fill-contrast transition-all duration-300"
        />
      ),
      delay: 200,
    },
    {
      title: "브랜드 마케팅 전략",
      desc: "브랜드의 고유한 아이덴티티를 강화하고 디지털 및 오프라인 마케팅을 통해 고객 충성도를 높입니다",
      icon: (
        <Image
          src="/assets/icons/branding_10490688.svg"
          alt="브랜드 마케팅 전략"
          width={80}
          height={80}
          className="bg-[#ffc451] px-3 py-3 rounded-sm fill-contrast transition-all duration-300"
        />
      ),
      delay: 300,
    },
    {
      title: "외식 프렌차이즈 운영",
      desc: "효율적인 운영 시스템과 트렌드 반영으로 프렌차이즈의 성공적인 확장을 지원합니다",
      icon: (
        <Image
          src="/assets/icons/franchise_3631594.svg"
          alt="외식 프렌차이즈 운영"
          width={80}
          height={80}
          className="bg-[#ffc451] px-3 py-3 rounded-sm fill-contrast transition-all duration-300"
        />
      ),
      delay: 400,
    },
    {
      title: "특수상권 전문 브랜딩",
      desc: "특수상권의 고객층을 분석하여 맞춤형 브랜딩 전략과 디자인 솔루션을 제공합니다",
      icon: (
        <Image
          src="/assets/icons/branding_10490688.svg"
          alt="특수상권 전문 브랜딩"
          width={80}
          height={80}
          className="bg-[#ffc451] px-3 py-3 rounded-sm fill-contrast transition-all duration-300"
        />
      ),
      delay: 500,
    },
    {
      title: "현지화 메뉴 개발 및 전략 제공",
      desc: "지역별 고객의 문화와 트렌드를 반영하여 최적화된 메뉴와 서비스를 기획하고 제공합니다",
      icon: (
        <Image
          src="/assets/icons/graph_9818969.svg"
          alt="현지화 메뉴 개발 및 전략 제공"
          width={80}
          height={80}
          className="bg-[#ffc451] px-3 py-3 rounded-sm fill-contrast transition-all duration-300"
        />
      ),
      delay: 600,
    },
  ];

  return (
    <section id="services" className="services section">
      <div className="container" data-aos="fade-up">
        {/* 섹션 제목 */}
        <div className="services-title">
          <h2>서비스</h2>
          <p>Check our Services</p>
        </div>

        {/* 서비스 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-item bg-surface text-center border border-default/15 py-[80px] px-[20px] h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group"
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              {/* 서비스 아이콘 */}
              <div className="icon bg-accent text-contrast mx-auto w-[64px] h-[64px] rounded flex items-center justify-center mb-5 transition-all duration-300">
                {service.icon}
              </div>
              
              {/* 서비스 제목 */}
              <h3 className="font-bold my-[15px] text-[22px] text-heading">
                {service.title}
              </h3>
              
              {/* 서비스 설명 */}
              <p className="leading-6 text-[14px] mb-0 text-default">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
