import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
/**
 * Scroll 컴포넌트
 *
 * 설명:
 * - Intersection Observer를 사용하여 특정 요소가 뷰포트에 들어오면 클래스를 추가해 애니메이션을 적용
 *
 * 사용 방법:
 * -<ScrollCard> </ScrollCard>
 *
 * Props:
 * -
 *
 * 작성자: masterhyuns
 * 작성일: 2024. 9. 19.
 */
const ScrollCard: FC<{ children: ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false); // 스크롤 감지 상태
  const containerRef = useRef<HTMLDivElement | null>(null); // Container 참조

  // Intersection Observer 설정
  useEffect(() => {
    // 컴포넌트가 마운트될 때, IntersectionObserver를 사용하여 요소가 뷰포트에 들어오는 것을 감지합니다
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // 요소가 뷰포트에 들어오면 visible 상태를 true로 설정
          }
        });
      },
      { threshold: 0.1 } // 요소의 10%가 뷰포트에 들어왔을 때 감지
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <Container ref={containerRef} className={isVisible ? 'visible' : ''}>
      {children}
    </Container>
  );
};

export default ScrollCard;

const Container = styled.div`
  min-width: 960px;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 5rem;
  padding-bottom: 5rem;
  opacity: 0;
  transform: translateY(50px);
  transition:
    opacity 0.8s ease-out,
    transform 0.8s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
