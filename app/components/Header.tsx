import React from 'react';
import Link from "next/link";

/**
 *  Header 컴포넌트
 *
 * 설명:
 * - 사이트의 상단 네비게이션 바(헤더)를 렌더링합니다
 * - 일반적으로 사이트 로고, 네비게이션 링크, 검색바나 사용자 프로필 아이콘
 *
 * 작성자: masterhyuns
 * 작성일: 2024. 9. 17.
 */
const Header = () => <header className="bg-white shadow-md fixed w-full top-0 z-50">
    <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" className="text-lg font-bold">
            CJ Clone
        </Link>
        <nav className="space-x-6">
            <Link href="/about">회사소개</Link>
            <Link href="/products">제품</Link>
            <Link href="/services">서비스</Link>
        </nav>
    </div>
</header>

export default Header
