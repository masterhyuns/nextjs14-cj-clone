'use client';
import Link from 'next/link';
import ContentTypeA from '@/app/components/Content/TypeA';
import ContentTypeB, {
  ContentTypeBProps,
} from '@/app/components/Content/TypeB';
import ScrollCard from '@/app/components/ScrollCard';

export default function Home() {
  const items: ContentTypeBProps[] = [
    {
      image: '/images/about_1.jpg',
      title: 'Brands',
      number: '25',
      desc: (
        <>
          독보적 국내 1위의 25개
          <br />
          식문화 브랜드
        </>
      ),
    },
    {
      image: '/images/about_2.jpg',
      title: 'History',
      number: '1953',
      desc: (
        <>
          70년의 역사, 1953년 대한민국
          <br />
          최초의 설탕 제조업으로부터 출발
        </>
      ),
    },
    {
      image: '/images/about_3.jpg',
      title: 'Global BIO',
      number: 'No.1',
      desc: (
        <>
          50년 이상 축적된 미생물 발효기술을
          <br />
          바탕으로 개발한 핵산, 라이신, 트립토판,
          <br /> 발린 등 Global No.1 BIO 제품
        </>
      ),
    },
  ];
  return (
    <>
      <div className={`fixed w-full h-[834px] top-0 right-0 z-20`}>
        <img
          src="/images/main_slider_01.jpg"
          className={`w-full h-full`}
          alt=""
        />
      </div>
      <div className={`relative mt-[707px] z-30`}>
        <div className="youtube-wrapper">
          <div className={'title'}>
            CJ제일제당의 다양한 유튜브 채널을 즐겨보세요!
          </div>
          <div className="banner-list">
            <ul>
              <li>
                <Link href="/test">
                  <div className="logo"></div>
                  <div className="desc">
                    <strong>CJ제일제당</strong>
                    <strong>제당슈만</strong>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/test">
                  <div className="logo"></div>
                  <div className="desc">
                    <strong>CJ제일제당</strong>
                    <strong>제당슈만</strong>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/test">
                  <div className="logo"></div>
                  <div className="desc">
                    <strong>CJ제일제당</strong>
                    <strong>제당슈만</strong>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={'relative w-full bg-white z-30'}>
        <ScrollCard>
          <ContentTypeA bar title={'ABOUNT'}>
            건강, 즐거운, 편리를 창조하는 <br /> 글로벌 식품·BIO 기업
            CJ제일제당입니다.
          </ContentTypeA>
        </ScrollCard>
        <ScrollCard>
          <ContentTypeB items={items} />
        </ScrollCard>
      </div>
    </>
  );
}
