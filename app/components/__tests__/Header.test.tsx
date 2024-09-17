// app/components/__tests__/Header.test.tsx
// 자동 임포트 기능 덕분에 더 이상 import React from 'react';를
// 명시적으로 작성하지 않아도 동작하지만, Jest 테스트 환경에서는
// 여전히 React를 명시적으로 임포트 해 주어야 함
// app/components/__tests__/Header.test.tsx
import React from 'react';
import Header from '../Header';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';  // jest-dom 임포트

describe('Header', () => {
    it('헤더가 제대로 렌더링 되는지 확인합니다', () => {
        // Header 컴포넌트 렌더링
        render(<Header />);

        // "CJ Clone" 텍스트가 존재하는지 확인
        const logo = screen.getByText('CJ Clone');
        expect(logo).toBeInTheDocument();

        // "회사소개", "제품", "서비스" 링크가 존재하는지 확인
        const aboutLink = screen.getByText('회사소개');
        const productsLink = screen.getByText('제품');
        const servicesLink = screen.getByText('서비스');

        expect(aboutLink).toBeInTheDocument();
        expect(productsLink).toBeInTheDocument();
        expect(servicesLink).toBeInTheDocument();

        // 링크의 href 속성 확인
        expect(aboutLink).toHaveAttribute('href', '/about');
        expect(productsLink).toHaveAttribute('href', '/products');
        expect(servicesLink).toHaveAttribute('href', '/services');
    });
});
