import Link from 'next/link';
import ContentTypeA from '@/app/components/Content/TypeA';

export default function Home() {
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
        <div className={'min-w-[960px] max-w-[960px] mx-auto pt-20 pb-20'}>
          <ContentTypeA />
        </div>
      </div>
    </>
  );
}
