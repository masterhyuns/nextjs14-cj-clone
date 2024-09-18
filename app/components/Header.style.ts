import styled, { css } from 'styled-components';

const Container = styled.div`
  position: fixed;
  width: 100vw;
  top: 0;
  height: 82px;
  min-width: 1240px;
  padding-bottom: 2px;
  z-index: 150;
`;

const HeaderTag = styled.header<{ $dark: boolean }>`
  width: 100%;
  height: 100%;
  transition: background-color 0.5s; /* transition-colors duration-500 */
  background-color: ${(props) => (props.$dark ? 'transparent' : 'white')};

  .logo {
    img {
      display: inline-block;
      width: 190px;
      height: 60px;
    }
  }
  .top-global-communication {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    transition: none;

    &.dark {
      color: #fff;
    }
  }

  .top-language {
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
    width: 42px;
    height: 80px;
    transition: none;

    &.dark {
      color: #fff;
    }
  }

  .top-search {
    width: 42px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    &.dark {
      color: #fff;
    }
  }
`;

const SearchLayer = styled.div<{ $search: boolean }>`
  position: fixed;
  box-sizing: content-box;
  width: 100vw;
  height: 82px;
  top: 0;
  background-color: #f3f3f3;
  transition:
    transform 0.5s ease,
    opacity 0.5s ease;
  visibility: hidden;
  z-index: 3000;
  opacity: 0;

  ${(props) =>
    props.$search &&
    css`
      visibility: visible;
      z-index: 3000;
      opacity: 1;
    `}
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    input {
      height: 46px;
      width: 600px;
      padding: 0 20px;
      font-size: 1.2rem;

      &::placeholder {
        opacity: 1;
        color: #888;
        font-weight: 600;
      }
      &::selection {
        background-color: #ef151e;
        color: #ffffff;
      }
    }
    button.search {
      background-color: #ef151e;
      color: #ffffff;
      width: 46px;
      height: 46px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  button.close {
    display: block;
    position: absolute;
    top: 18px;
    right: 86px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    font-size: 1.3rem;
    &::before {
      position: absolute;
      bottom: -24px;
      left: 0;
      width: 40px;
      height: 3px;
      content: '';
      background-color: #ef151e;
    }
  }
`;

const CookieLayer = styled.div<{ $cookie: boolean }>`
  box-shadow: 0 -10px 20px 0 rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100vw;
  bottom: 0;
  z-index: 3000;
  height: 120px;
  min-width: 1240px;
  background: #ffffff;
  visibility: hidden;
  opacity: 0;
  transform: translateY(100%);
  transition:
    transform 0.5s ease,
    opacity 0.5s ease;

  .content {
    margin-left: auto;
    margin-right: auto;
    min-width: 1000px;
    max-width: 1520px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
  ${(props) =>
    props.$cookie &&
    css`
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    `}

  .cookie-btn {
    min-width: 133px;
    height: 45px;
    line-height: 45px;
    color: #fff;
    border-radius: 45px;
    background: #5e5b57;
    padding: 0 36px;
    border: 0 none;
    cursor: pointer;

    &.accept {
      background: #ef151e;
    }

    &::selection {
      background-color: #ef151e;
      color: #ffffff;
    }
  }
`;

export const Header = {
  Container,
  Header: HeaderTag,
  SearchLayer,
  CookieLayer,
};
