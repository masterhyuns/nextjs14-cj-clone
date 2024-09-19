'use client';
import styled, { keyframes } from 'styled-components';
import { FC, ReactNode } from 'react';
export interface ContentTypeBProps {
  image: string;
  title: string;
  number: string;
  desc: ReactNode;
}
const ContentTypeB: FC<{ items: ContentTypeBProps[] }> = ({ items }) => {
  return (
    <Container className={`animate-slideup-1/2`}>
      {items.map((item, idx) => (
        <Content key={idx}>
          <Header>
            <a href="/"></a>
            <img src={'/images/about_1.jpg'} alt={'1'} />
          </Header>
          <Body className={'animate-slideup-1'}>
            <p className={'flex flex-col'}>
              <span className={'title'}>{item.title}</span>
              <span className={'number'}>{item.number}</span>
            </p>
          </Body>
          <Footer className={'slideup-1'}>{item.desc}</Footer>
        </Content>
      ))}
    </Container>
  );
};

export default ContentTypeB;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2px;
`;
const Content = styled.div`
  position: relative;
`;
const Header = styled.div``;
const Body = styled.div`
  position: relative;
  margin-top: -30px;

  display: flex;
  align-items: end;
  flex-direction: column;
  p {
    background-color: rgba(255, 255, 255, 0.9);
    padding: 15px 30px;
  }
  .title {
    font-size: 16px;
    color: #ef151e;
    font-weight: 500;
  }
  .number {
    position: relative;
    font-size: 84px;
    color: #8f8377;
    font-weight: 700;
    &:before {
      content: '';
      position: absolute;
      top: 100%;
      left: 0;
      margin-top: -2px;
      width: 20px;
      height: 4px;
      background-color: #ef151e;
    }
  }
`;
const Footer = styled.div`
  margin-top: 10px;
  text-align: left;
  padding: 0 25px;
  color: #666;
  line-height: 20px;
  font-weight: 500;
`;
