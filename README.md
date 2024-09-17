# CJ Clone

이 프로젝트는 CJ 웹사이트의 클론으로, Next.js와 React를 TypeScript와 함께 사용하여 구현되었습니다. TailwindCSS로 스타일링하고, ESLint를 사용하여 성능 최적화를 추구했습니다.

## 프로젝트 구조

프로젝트는 기본적인 Next.js 구조를 따릅니다:


## 시작하기

이 프로젝트를 로컬에서 실행하려면 다음 단계를 따르세요:

### 사전 요구 사항

Node.js가 설치되어 있어야 합니다. [여기서](https://nodejs.org/) 다운로드할 수 있습니다.

### 설치

1. 레포지토리를 클론합니다:

```bash
git clone https://github.com/masterhyuns/nextjs14-cj-clone.git
cd nextjs14-cj-clone
```

### 사용된 기술 스택

##### Next.js: 서버 사이드 렌더링 및 정적 사이트 생성을 위한 React 프레임워크.
##### React: 사용자 인터페이스를 구축하기 위한 자바스크립트 라이브러리.
##### TypeScript: 확장 가능한 애플리케이션을 위한 정적 타입을 지원하는 자바스크립트.
##### TailwindCSS: 유틸리티 기반 CSS 프레임워크로 스타일링을 쉽게 함.
##### ESLint: 코드 품질을 유지하고 모범 사례를 따르게 돕는 린팅 도구.


### Testing
#### . 필수 라이브러리 설치 (typescript 기준)
```
    npm install --save-dev @testing-library/react @testing-library/jest-dom jest jest-environment-jsdom
    npm install --save-dev @types/jest
    npm install --save-dev @types/testing-library__jest-dom
```
- @testing-library/react : React 컴포넌트를 테스트하기 위한 라이브러리입니다. 실제 브라우저 환경을 시뮬레이션하는 방식으로 컴포넌트가 UI에서 어떻게 동작하는지를 테스트할 수 있게 해줍니다. 사용자 인터페이스의 렌더링 및 상호작용을 확인하기 위한 함수들을 제공.
  주요 함수:
  - render: 컴포넌트를 가상 DOM에 렌더링.
  - screen: 렌더링된 컴포넌트에서 요소를 찾는 다양한 방법을 제공 (예: screen.getByText).
  - fireEvent: 사용자 이벤트(클릭, 입력 등)를 트리거하는 데 사용.
- @testing-library/jest-dom : jest-dom은 Jest와 함께 사용되는 매처를 추가하는 라이브러리
  - 주요 matcher
    - toBeInTheDocument: 요소가 DOM에 존재하는지 확인합니다.
    - toHaveAttribute: 요소가 특정 속성을 가지고 있는지 확인합니다.
    - toHaveTextContent: 요소가 특정 텍스트를 포함하는지 확인합니다.


