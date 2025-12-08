import Image from "next/image";

/**
 * About 컴포넌트
 * 
 * 회사 소개 섹션을 제공합니다.
 * - 회사 비전과 가치 소개
 * - 회사 이미지와 텍스트 콘텐츠
 * - 반응형 레이아웃 (모바일/데스크톱)
 */
const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        {/* 그리드 레이아웃: 모바일에서는 세로, 데스크톱에서는 가로 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 왼쪽 이미지 영역 */}
          <div className="order-1 lg:order-1 w-[600px] h-[600px]">
            <div className="grid grid-cols-2 gap-4">
              {/* 상단 왼쪽: accent color 박스 */}
              <div className="border-2 border-[#ffc451] rounded-lg aspect-square relative">
                  <h2 className="!text-[#ffc451] font-bold text-2xl md:text-3xl leading-tight font-pretendard pt-49  pl-7">
                    ABOUT<br />US
                  </h2>
              </div>
              
              {/* 상단 오른쪽: 이미지 1 */}
              <div className="rounded-lg overflow-hidden relative aspect-square bg-gray-200">
                <Image
                  src="/assets/img_about/righttop.png"
                  className="w-full h-full object-cover"
                  alt="판크로스 회사 소개 이미지 1"
                  fill
                />
              </div>
              
              {/* 하단: 이미지 (2열 차지하는 직사각형) */}
              <div className="col-span-2 rounded-lg overflow-hidden relative aspect-[2/1] bg-gray-200">
                <Image
                  src="/assets/img_about/bottom.png"
                  className="w-full h-full object-cover"
                  alt="판크로스 회사 소개 이미지"
                  fill
                />
              </div>
            </div>
          </div>

          {/* 오른쪽 텍스트 콘텐츠 영역 */}
          <div className="order-2 lg:order-2 flex flex-col justify-center">
            <div>
              {/* 회사 비전 문구 */}
              <h3 className="font-bold text-[28px] md:text-[36px] text-heading mb-6 leading-tight font-pretendard">
                "신뢰와 혁신으로 고객과 함께 성장합니다"
              </h3>

              {/* 회사 소개 본문 */}
              <div className="text-default text-[16px] leading-[26px] text-gray-600 space-y-4">
                <p>
                  판크로스는 2018년에 설립된 식음료(F&B) 전문 기업으로, <br />혁신적인
                  기술과 창의성을 기반으로 한 새로운 기준을 제시하며 고객의 신뢰를 얻어왔습니다.
                </p>
                <p>
                  우리의 핵심 가치는 "고객 중심의 정직한 접근"과 "지속 가능한 성장"입니다.
                </p>
                <p>
                  판크로스는 식음료 개발 밎 제조, 브랜드 협업, 글로벌 확장, <br />외식
                  프렌차이즈 운영 등 다양한 사업 분야에서 전문성을 발휘하며 최상의 결과를 만들어냅니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
