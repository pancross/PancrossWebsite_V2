import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="footer dark-background bg-black text-default text-[14px]">
      <div className="footer-top py-[50px] bg-[#151515]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="footer-about">
              <Link href="/" className="logo flex items-center mb-2.5">
                <span className="sitename text-[26px] font-bold tracking-[1px] font-heading text-white font-pretendard">
                  PANCROSS
                </span>
              </Link>
              <div className="footer-contact pt-3 text-white">
                <p className="mb-1">(주)판크로스 ㅣ 사업자등록번호 228-81-04374 ㅣ 대표이사 : 강금조</p>
                <p className="mb-1">주소 : 경기도 성남시 분당구 판교동 618-5번지, B01호 ㅣ 팩스 031-702-8868</p>
                <p className="mb-1">본사 대표전화 및 가맹 상담 031-8017-1155 ㅣ Email : pancross9791@pancross.co.kr</p>
                <p className="mb-1">고객센터 : 031-8017-1155 ㅣ 제휴문의 : pancross9791@pancross.co.kr</p>
                <p className="mb-1">COPYRIGHT © 2018 PANCROSS KOREA CO.,LTD ALL RIGHTS RESERVED</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
