// app/components/__tests__/Header.test.tsx
import React from 'react'; // React 수동 임포트
import Header from '../Header';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';  // jest-dom 임포트

describe('Header', () => {
    it('헤더가 제대로 렌더링 되는지 확인합니다', () => {
        // 헤더 컴포넌트를 렌더링합니다
        render(<Header />);

        // "CJ Clone" 텍스트가 존재하는지 확인합니다
        const logo = screen.getByText('CJ Clone');
        expect(logo).toBeInTheDocument();

        // "회사소개", "제품", "서비스" 링크가 존재하는지 확인합니다
        const aboutLink = screen.getByText('회사소개');
        const productsLink = screen.getByText('제품');
        const servicesLink = screen.getByText('서비스');

        expect(aboutLink).toBeInTheDocument();
        expect(productsLink).toBeInTheDocument();
        expect(servicesLink).toBeInTheDocument();

        // 링크가 올바른 href 속성을 가지고 있는지 확인합니다
        expect(aboutLink).toHaveAttribute('href', '/about');
        expect(productsLink).toHaveAttribute('href', '/products');
        expect(servicesLink).toHaveAttribute('href', '/services');
    });
});
