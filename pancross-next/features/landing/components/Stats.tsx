"use client";

import Image from "next/image";
import CountUp from "react-countup";

/**
 * Stats 컴포넌트
 * 
 * 통계 및 성과 섹션을 제공합니다.
 * - 주요 통계 수치 표시
 * - CountUp 애니메이션 효과
 * - 이미지와 통계 정보 나란히 배치
 * - 반응형 레이아웃
 */
const Stats = () => {
  // ==================== 통계 데이터 ====================
  /** 통계 항목 목록 */
  const stats = [
    {
      end: 287,
      duration: 1,
      title: "프로젝트 진행",
      desc: "판크로스는 외식업, F&B 개발, 브랜드 마케팅 등 다양한 분야에서 287건 이상의 프로젝트를 성공적으로 수행하며 전문성을 증명했습니다. 각 프로젝트는 철저한 시장 분석과 고객 맟춤형 솔루션을 통해 실현되었습니다.",
    },
    {
      end: 19,
      duration: 1,
      title: "다양한 전문 분야",
      desc: "단순히 식음료 사업에 국한되지 않고, 판크로스는 브랜딩, 디지털 마케팅, 행사 운영 등 총 19개의 다양한 분야에서 전문 역량을 발휘하며 시장에서의 경쟁력을 확보하였습니다.",
    },
    {
      end: 43,
      duration: 1,
      title: "매 해 평균 프로젝트 진행 수",
      desc: "매년 평균 43건 이상의 프로젝트를 통해 축적된 실전 경험은 판크로스의 전략적 사고와 실행력을 강화합니다. 이는 고객에게 안정적이고 실직적인 성과를 보장합니다.",
    },
    {
      end: 14,
      duration: 1,
      title: "협력사",
      desc: "판크로스는 14개의 주요 협력사와 함께 전문성과 신뢰를 기반으로 성공적인 협업을 이어가고 있습니다. 이를 통해 고객에게 더 나은 품질과 가치를 제공합니다.",
    },
  ];

  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-between">
          {/* 이미지 영역 (왼쪽) */}
          <div className="w-full">
            <Image
              src="/assets/image_J/페이지_이미지/hand-drawing-lamp.jpg"
              alt="판크로스 통계 섹션 이미지"
              width={600}
              height={400}
              className="img-fluid object-cover"
            />
          </div>

          {/* 통계 정보 영역 (오른쪽) */}
          <div className="w-full">
            {/* 섹션 제목 */}
            <h3 className="font-bold text-[28px] mb-3 text-heading leading-tight font-pretendard">
              특수상권 창업으로 낮은 창업 비용 대비 높은 수익률
            </h3>
            
            {/* 섹션 설명 */}
            <p className="text-default text-[16px] leading-[26px]">
              판크로스는 특수상권에서의 성공적인 창업을 위해 전문적인 분석과 맞춤형 솔루션을 제공합니다. 
              고객의 성공을 최우선으로 하며, 창업 비용으로 높은 수익률을 창출할 수 있도록 지원합니다.
            </p>

            {/* 통계 그리드 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="stats-item flex">
                  <div>
                    {/* 통계 수치 (CountUp 애니메이션) */}
                    <span className="font-bold text-[40px] block leading-[40px] text-accent font-pretendard">
                      <CountUp
                        end={stat.end}
                        duration={stat.duration}
                        enableScrollSpy
                        scrollSpyOnce
                        className="text-accent"
                      />
                    </span>
                    
                    {/* 통계 제목 및 설명 */}
                    <p className="pt-[15px] m-0 text-[14px] font-heading text-default/60">
                      <strong className="text-[16px] text-heading block mb-1 font-bold">
                        {stat.title}
                      </strong>
                      {stat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
