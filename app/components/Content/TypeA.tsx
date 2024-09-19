'use client';
import { FC, ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface ContentTypeAProps {
  bar?: boolean; // Bar 여부
  title: string; // 제목
  children: ReactNode; // 내용
}

const ContentTypeA: FC<ContentTypeAProps> = ({
  bar = false,
  title,
  children,
}) => {
  return (
    <Container className={`animate-slideup-1/2`}>
      {bar && <Bar />}
      <Title>{title}</Title>
      <Desc>{children}</Desc>
      <Button>
        <span>Find out more</span>
        <FontAwesomeIcon icon={faArrowRight} />
      </Button>
    </Container>
  );
};

export default ContentTypeA;

const Container = styled.div`
  position: relative;
  z-index: 30;
  background: #ffffff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;
const Bar = styled.div`
  width: 2px;
  height: 70px;
  background-color: #ef151e;
`;
const Title = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  color: #ef151e;
`;
const Desc = styled.div`
  font-size: 46px;
  font-weight: 400;
  letter-spacing: -1px;
  color: #333;
  line-height: 1.4;
  text-align: center;
`;
const Button = styled.a`
  margin-top: 60px;
  border: 1px solid #ef151e;
  padding: 0 24px 0 20px;
  display: flex;
  gap: 10px;
  align-items: center;
  color: #ef151e;
  background-size: 200% 100%; /* 배경 크기를 2배로 설정 */
  /* 배경 위치가 처음에 왼쪽 밖에 있음 */
  background: #ffffff;
  transition:
    background-position 0.5s ease,
    color 0.5s ease; /* 배경 및 색상 전환 */

  &:hover {
    /* hover 시 배경이 우측으로 채워짐 */
    background: linear-gradient(to right, #ef151e 0%, #ef151e 100%) right bottom;
    color: #fff; /* hover 시 텍스트 색상 변경 */
  }

  &::selection {
    color: #ffffff;
  }

  span {
    position: relative;
    z-index: 1;
    display: inline-block;
    height: 40px;
    line-height: 38px;
    font-size: 16px;
    font-weight: 500;
  }
`;
