// app/layout.tsx
import { notoSansKR } from "./fonts";
import "./globals.css";
import Header from "@/app/components/Header";

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="ko">
      {/*
        notoSansKR.variable:
        notoSansKR 폰트를 선언할 때 variable 속성을 설정하면, Next.js가 해당 폰트에 대한 CSS 변수를 자동으로 생성
        antialiased: 이 클래스는 텍스트의 안티앨리어싱 처리를 적용하기 위해 사용하는 TailwindCSS의 유틸리티 클래스입니다.
        **antialiased**는 텍스트의 경계선이 더 부드럽고 선명하게 보이도록 처리해 줍니다.
      */}
      <body className={`${notoSansKR.variable} antialiased bg-gray-50 text-black`}>
      <Header/>
      {children}
      </body>
      </html>
  );
}
