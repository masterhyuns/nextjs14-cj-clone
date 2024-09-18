'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronUp,
  faChevronDown,
  faGlobe,
  faMagnifyingGlass,
  faX,
} from '@fortawesome/free-solid-svg-icons';
import { useOverlay } from '@/app/contexts/OverlayContext';
import { Header as S } from '@/app/components/Header.style';
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

const Header = () => {
  const [isDark, setDark] = useState(true);
  const [isCookieShow, setCookieShow] = useState(false);
  const [isSearchShow, setSearchShow] = useState(false);
  const { showOverlay, hideOverlay } = useOverlay();
  /**
   * Scroll Event
   */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setDark(false); // 스크롤이 50px 이상일 때 배경색 변경
      } else {
        setDark(true); // 스크롤이 50px 이하일 때 배경색을 투명으로
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // 컴포넌트 언마운트 시 이벤트 리스너 제거
    };
  }, []);
  /**
   * 쿠키 설정
   */
  const handleCookie = () => {
    setCookieShow(false);
  };

  /**
   * 검색바 OPEN
   */
  const handleSearchOn = () => {
    setSearchShow(true);
    showOverlay();
  };
  /**
   * 검색바 CLOSE
   */
  const handleSearchOff = () => {
    setSearchShow(false);
    hideOverlay();
  };

  /**
   * Cookie 초기화
   */
  useEffect(() => {
    setCookieShow(true);
  }, []);

  return (
    <S.Container>
      <S.Header $dark={isDark}>
        <div className="flex justify-between items-center px-5">
          <div className="logo">
            <Link href={'/'}>
              <span
                className={`font-extrabold text-2xl ${isDark ? 'text-white' : 'text-black'}`}
              >
                TJ CheilJedang
              </span>
            </Link>
          </div>
          <nav className="nav">
            <ul
              className={`flex space-x-8 text-lg font-extrabold  ${isDark ? 'text-white' : 'text-black'}`}
            >
              <li>
                <Link href="/about">
                  <span>ABOUT US</span>
                </Link>
              </li>
              <li>
                <Link href="/brands">
                  <span>BRANDS</span>
                </Link>
              </li>
              <li>
                <Link href="/sustainability">
                  <span>SUSTAINABILITY</span>
                </Link>
              </li>
              <li>
                <Link href="/investors">
                  <span>INVESTORS</span>
                </Link>
              </li>
              <li>
                <Link href="/newsroom">
                  <span>NEWSROOM</span>
                </Link>
              </li>
              <li>
                <Link href="/support">
                  <span>SUPPORT</span>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="right-icons">
            <ul className={'flex'}>
              <li>
                <Link href={'/global'} title={'Global Communication Channel'}>
                  <i
                    className={`icon top-global-communication ${isDark ? 'dark' : ''}`}
                  >
                    <FontAwesomeIcon icon={faGlobe} className={`text-xl`} />
                    <em>Global Communication Channel</em>
                  </i>
                </Link>
              </li>
              <li>
                <Link href={''}>
                  <i className={`icon top-language  ${isDark ? 'dark' : ''}`}>
                    <span className={'font-bold not-italic'}>Kr</span>
                    <FontAwesomeIcon icon={faChevronDown} />
                    <em>Language</em>
                  </i>
                </Link>
                <div></div>
              </li>
              <li>
                <button onClick={handleSearchOn}>
                  <i className={`icon top-search  ${isDark ? 'dark' : ''}`}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <em>Search</em>
                  </i>
                </button>
                <div></div>
              </li>
            </ul>
          </div>
        </div>
      </S.Header>
      <S.SearchLayer $search={isSearchShow}>
        <div className={'content'}>
          <input
            type="text"
            className={'focus:outline-none focus:ring-2 focus:ring-red-500'}
            placeholder={'검색어를 입력해주세요.'}
          />
          <button className={'search'}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <button className={'close'} onClick={handleSearchOff}>
          <FontAwesomeIcon icon={faX} />
        </button>
      </S.SearchLayer>
      <S.CookieLayer $cookie={isCookieShow}>
        <div className={'content'}>
          <div className={`flex justify-start flex-col w-[60%] gap-2`}>
            <span className={'font-bold text-lg'}>쿠키 사용</span>
            <p className={`font-normal leading-normal `}>
              당사는 트래픽 분석 및 본 사이트의 올바른 작동과, 탐색 경험 개선을
              통한 개인화된 웹사이트 이용 경험 제공을 위해 쿠키를 사용합니다.
              모든 쿠키를 허용 혹은 거부할 수 있으며,{' '}
              <a href="/cookie" className="text-red-500 underline font-bold">
                <span>쿠키 설정</span>
              </a>
              에서 당사가 쿠키를 사용하는 방법을 확인하고 보다 구체적인 설정을
              할 수 있습니다.
            </p>
          </div>
          <div className={'flex gap-2'}>
            <button className={'cookie-btn accept'} onClick={handleCookie}>
              허용
            </button>
            <button className={'cookie-btn'} onClick={handleCookie}>
              거부
            </button>
          </div>
        </div>
      </S.CookieLayer>
    </S.Container>
  );
};

export default Header;
