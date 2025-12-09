"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

/**
 * Contact 컴포넌트
 * 
 * 문의 폼과 연락처 정보를 제공하는 섹션입니다.
 * - EmailJS를 통한 이메일 전송
 * - 개인정보 동의 필수 확인
 * - Google Maps 지도 표시
 * - 반응형 레이아웃
 */
const Contact = () => {
  // ==================== State 관리 ====================
  /** 폼 참조 */
  const form = useRef<HTMLFormElement>(null);
  
  /** 이메일 전송 중 로딩 상태 */
  const [loading, setLoading] = useState(false);

  // ==================== 브랜드 목록 ====================
  /** 문의 가능한 브랜드 목록 */
  const brandOptions = [
    { value: "부산빨간어묵포차", label: "부산빨간어묵포차" },
    { value: "한마리뚝닭", label: "한마리뚝닭" },
    { value: "이포어묵", label: "이포어묵" },
    { value: "바다해어묵", label: "바다해어묵" },
    { value: "더 어", label: "더 어" },
    { value: "크로붕", label: "크로붕" },
    { value: "붕어애빠지다", label: "붕어애빠지다" },
  ];

  // ==================== Event Handlers ====================
  /**
   * 폼 제출 핸들러
   * - 개인정보 동의 확인
   * - 현재 시간 자동 입력
   * - EmailJS를 통한 이메일 전송
   */
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    // 개인정보 동의 체크
    const formData = new FormData(form.current);
    const privacy = formData.get("privacy");

    if (privacy !== "agree") {
      alert("개인정보에 동의하지 않으면 문의하실 수 없습니다.");
      return;
    }

    setLoading(true);

    // 현재 시간 설정
    const now = new Date().toLocaleString();
    const timeInput = form.current.querySelector(
      'input[name="send_time"]'
    ) as HTMLInputElement;
    if (timeInput) timeInput.value = now;

    // EmailJS를 통한 이메일 전송
    emailjs
      .sendForm(
        "service_kep7xwj",      // EmailJS 서비스 ID
        "template_xjg9wru",     // EmailJS 템플릿 ID
        form.current,
        "e3BGJB2gYc-NPvfS9"     // EmailJS 공개 키
      )
      .then(
        () => {
          setLoading(false);
          alert("문의가 성공적으로 발송되었습니다!");
          form.current?.reset();
        },
        (error) => {
          setLoading(false);
          console.error("FAILED...", error);
          alert("문의 발송에 실패했습니다. 다시 시도해주세요.");
        }
      );
  };

  // ==================== Render ====================
  return (
    <section id="contact" className="contact section">
      <div className="container" data-aos="fade-up">
        {/* 섹션 제목 */}
        <div className="services-title">
          <h2>Contact</h2>
          <p>Contact Us</p>
        </div>

        {/* Google Maps 지도 */}
        <div className="mb-8 w-full" data-aos="fade-up" data-aos-delay="100">
          <iframe
            style={{ border: 0, width: "100%", height: "270px" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50719.49878158562!2d127.01326984863282!3d37.39057310000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b592d2b718c75%3A0x82e89e8f8e8af044!2zKOyjvCntjJDtgazroZzsiqQg67O47KCQ!5e0!3m2!1sen!2skr!4v1736354116366!5m2!1sen!2skr"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="판크로스 위치"
          ></iframe>
        </div>

        {/* 연락처 정보 및 문의 폼 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" data-aos="fade-up" data-aos-delay="200">
          {/* 연락처 정보 영역 (왼쪽) */}
          <div className="lg:col-span-4">
            {/* 주소 정보 */}
            <div className="info-item flex items-center mb-10" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-geo-alt flex-shrink-0 text-contrast bg-accent text-[20px] w-[44px] h-[44px] flex justify-center items-center rounded transition-all duration-300 me-[15px]"></i>
              <div>
                <h3 className="text-[18px] font-bold mb-[5px] text-heading font-pretendard">주소</h3>
                <p className="text-[14px] text-default m-0">경기도 성남시 분당구 판교동 618-5번지, B01호</p>
              </div>
            </div>

            {/* 전화번호 정보 */}
            <div className="info-item flex items-center mb-10" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-telephone flex-shrink-0 text-contrast bg-accent text-[20px] w-[44px] h-[44px] flex justify-center items-center rounded transition-all duration-300 me-[15px]"></i>
              <div>
                <h3 className="text-[18px] font-bold mb-[5px] text-heading font-pretendard">전화번호</h3>
                <p className="text-[14px] text-default m-0">031-8017-1155</p>
              </div>
            </div>

            {/* 이메일 정보 */}
            <div className="info-item flex items-center mb-10" data-aos="fade-up" data-aos-delay="500">
              <i className="bi bi-envelope flex-shrink-0 text-contrast bg-accent text-[20px] w-[44px] h-[44px] flex justify-center items-center rounded transition-all duration-300 me-[15px]"></i>
              <div>
                <h3 className="text-[18px] font-bold mb-[5px] text-heading font-pretendard">이메일</h3>
                <p className="text-[14px] text-default m-0">pancross9791@pancross.co.kr</p>
              </div>
            </div>
          </div>

          {/* 문의 폼 영역 (오른쪽) */}
          <div className="lg:col-span-8">
            <form ref={form} onSubmit={sendEmail} className="php-email-form h-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 브랜드 선택 */}
                <div className="md:col-span-2">
                  <label htmlFor="brand" className="form-label block mb-2 text-default font-semibold text-[14px]">
                    브랜드 선택
                  </label>
                  <select
                    id="brand"
                    name="brand"
                    className="form-control w-full p-[10px_15px] border border-default/20 rounded-none text-[14px] bg-white focus:border-accent focus:outline-none"
                    required
                  >
                    <option value="">브랜드를 선택해주세요</option>
                    {brandOptions.map((brand) => (
                      <option key={brand.value} value={brand.value}>
                        {brand.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 이름 입력 */}
                <div>
                  <label htmlFor="cname" className="form-label block mb-2 text-default font-semibold text-[14px]">
                    이름
                  </label>
                  <input
                    type="text"
                    id="cname"
                    name="to_name"
                    className="form-control w-full p-[10px_15px] border border-default/20 rounded-none text-[14px] focus:border-accent focus:outline-none"
                    placeholder="이름을 입력해주세요"
                    required
                  />
                </div>

                {/* 전화번호 입력 */}
                <div>
                  <label htmlFor="phone" className="form-label block mb-2 text-default font-semibold text-[14px]">
                    전화번호
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-control w-full p-[10px_15px] border border-default/20 rounded-none text-[14px] focus:border-accent focus:outline-none"
                    placeholder="전화번호를 입력해주세요"
                    required
                  />
                </div>

                {/* 이메일 입력 */}
                <div className="md:col-span-2">
                  <label htmlFor="email" className="form-label block mb-2 text-default font-semibold text-[14px]">
                    이메일
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="to_email"
                    className="form-control w-full p-[10px_15px] border border-default/20 rounded-none text-[14px] focus:border-accent focus:outline-none"
                    placeholder="이메일을 입력해주세요"
                    required
                  />
                </div>

                {/* 창업희망지역 입력 */}
                <div className="md:col-span-2">
                  <label htmlFor="location" className="form-label block mb-2 text-default font-semibold text-[14px]">
                    창업희망지역
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    className="form-control w-full p-[10px_15px] border border-default/20 rounded-none text-[14px] focus:border-accent focus:outline-none"
                    placeholder="창업희망지역을 입력해주세요"
                  />
                </div>

                {/* 입점희망점포 입력 */}
                <div className="md:col-span-2">
                  <label htmlFor="store" className="form-label block mb-2 text-default font-semibold text-[14px]">
                    입점희망점포
                  </label>
                  <input
                    type="text"
                    id="store"
                    name="store"
                    className="form-control w-full p-[10px_15px] border border-default/20 rounded-none text-[14px] focus:border-accent focus:outline-none"
                    placeholder="입점희망점포를 입력해주세요"
                  />
                </div>

                {/* 추가입력정보 입력 */}
                <div className="md:col-span-2">
                  <label htmlFor="message" className="form-label block mb-2 text-default font-semibold text-[14px]">
                    추가입력정보
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="form-control w-full p-[10px_15px] border border-default/20 rounded-none text-[14px] focus:border-accent focus:outline-none"
                    placeholder="추가 정보를 입력해주세요"
                  ></textarea>
                </div>

                {/* 개인정보 동의 */}
                <div className="md:col-span-2">
                  <div className="privacy-box p-4 border border-default/20 rounded-none bg-white">
                    <p className="font-bold mb-2 text-[14px]">개인정보를 보호를 위한 이용자 동의서</p>
                    <p className="text-[14px] text-default mb-4 leading-relaxed">
                      판코로스 창업문의 및 설명회 신청 관련 개인정보 수집내용(필수)
                      <br />
                      1. 개인정보의 수집 및 이용 목적
                      <br />
                      - 판코로스 브랜드 창업 문의에 대한 원활한 상담
                      <br />
                      - 판코로스 창업 관련 정보 안내
                      <br />
                      2. 수집하는 개인정보 항목
                      <br />
                      - 이름, 휴대전화번호, 이메일, 창업희망지역, 점포소유여부(문의 시, 점포주소지)
                      <br />
                      3. 개인정보 보유 및 이용기간
                      <br />
                      - 이용 목적 달성 후, 내부규정에 따라 보관 및 지원(해당 시)
                      <br />
                      ※ 거부하실 경우 개인정보 수집이 불가능하여 창업상담 서비스 이용이 제한될 수 있습니다.
                    </p>
                    <div className="flex gap-4">
                      <label className="flex items-center cursor-pointer">
                        <input type="radio" name="privacy" value="agree" className="me-2" required /> 동의합니다
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input type="radio" name="privacy" value="disagree" className="me-2" /> 동의하지 않습니다
                      </label>
                    </div>
                  </div>
                </div>

                {/* 제출 버튼 */}
                <div className="md:col-span-2 text-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className="submitBtn bg-accent text-contrast border-0 py-[10px] px-[30px] transition-all duration-300 rounded-[4px] hover:bg-transparent hover:border-2 hover:border-accent hover:text-default disabled:opacity-50"
                  >
                    {loading ? "전송 중..." : "문의하기"}
                  </button>
                </div>
              </div>
              
              {/* 전송 시간 숨김 필드 */}
              <input type="hidden" name="send_time" id="send_time" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
