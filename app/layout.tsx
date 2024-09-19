// app/layout.tsx
import { notoSansKR } from './fonts';
import './globals.css';
import '../styles/custom.css';
import Header from '@/app/components/Header';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { OverlayProvider } from '@/app/contexts/OverlayContext';
import Overlay from '@/app/components/Overlay';
import StyledComponentsRegistry from '@/lib/registry';

config.autoAddCss = false; // Font Awesome 기본 CSS 자동 추가 방지

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  {
    /*
        notoSansKR.variable:
        notoSansKR 폰트를 선언할 때 variable 속성을 설정하면, Next.js가 해당 폰트에 대한 CSS 변수를 자동으로 생성
        antialiased: 이 클래스는 텍스트의 안티앨리어싱 처리를 적용하기 위해 사용하는 TailwindCSS의 유틸리티 클래스입니다.
        **antialiased**는 텍스트의 경계선이 더 부드럽고 선명하게 보이도록 처리해 줍니다.
      */
  }
  return (
    <html lang="ko" className={'no-touch'}>
      <head>
        <meta charSet="UTF-8" />
        <title>TJ CheilJedang</title>
      </head>
      <body
        className={`${notoSansKR.variable} relative antialiased bg-gray-50 text-black w-screen`}
      >
        <StyledComponentsRegistry>
          {/* OverlayProvider로 전체 애플리케이션을 감쌈 */}
          <OverlayProvider>
            <Overlay />
            <Header />
            {children}
          </OverlayProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
