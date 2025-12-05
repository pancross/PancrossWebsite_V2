import type { Metadata } from "next";
import "./globals.css";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";
import AosInit from "@/components/AosInit";

export const metadata: Metadata = {
  title: "판크로스",
  description: "판크로스: 혁신과 창의성으로 이끄는 F&B 전문 기업",
  icons: {
    icon: "/assets/img/pancross_icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <AosInit />
        {children}
      </body>
    </html>
  );
}
