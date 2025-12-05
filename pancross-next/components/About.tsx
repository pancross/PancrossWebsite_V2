import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="order-1 lg:order-2">
            <Image
              src="/assets/image_J/페이지_이미지/trust-handshake-business-people-office-deal-welcome-onboarding-b2b-collaboration.jpg"
              className="img-fluid w-full h-auto object-cover"
              alt=""
              width={800}
              height={600}
            />
          </div>
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <div>
              <h3 className="font-bold text-[28px] text-heading mb-4 leading-tight font-pretendard">
                "신뢰와 혁신으로 고객과 함께 성장합니다"
              </h3>
              <br />
              <p className="mb-4 text-default text-[16px] leading-[26px]">
                판크로스는 2018년에 설립된 식음료(F&B) 전문 기업으로, 혁신적인
                기술과 창의성을 기반으로 한 새로운 기준을 제시하며 고객의 신뢰를 얻어왔습니다.
                <br />
                <br />
                우리의 핵심 가치는 "고객 중심의 정직한 접근"과 "지속 가능한 성장"입니다.
                <br />
                <br />
                판크로스는 식음료 개발 밎 제조, 브랜드 협업, 글로벌 확장, 외식
                프렌차이즈 운영 등 다양한 사업 분야에서 전문성을 발휘하며 최상의 결과를 만들어냅니다.
                <br />
                <br />
                특히, 고객의 취향에 맞춘 현지화된 메뉴 개발과 창의적인 행사 운영, 효과적인 브랜딩 및
                마케팅으로 브랜드 가치를 극대화합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
