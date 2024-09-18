'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

// OverlayContext 타입 정의: isOverlayVisible은 boolean, showOverlay와 hideOverlay는 함수를 가짐
interface OverlayContextType {
  isOverlayVisible: boolean; // 현재 overlay 상태
  showOverlay: () => void; // overlay show
  hideOverlay: () => void; // overlay off
}

// Context 생성: 기본값은 undefined로 설정 (사용할 때 undefined 에러 방지)
const OverlayContext = createContext<OverlayContextType | undefined>(undefined);

// 커스텀 훅을 통해 Context 사용: Context가 없을 경우 에러 발생 처리
export const useOverlay = () => {
  const context = useContext(OverlayContext);
  if (!context) {
    throw new Error('useOverlay must be used within an OverlayProvider');
  }
  return context;
};

// OverlayProvider 컴포넌트: 전역 상태를 제공하는 역할을 수행
export const OverlayProvider = ({ children }: { children: ReactNode }) => {
  // isOverlayVisible 상태: overlay가 보이는지 여부를 관리
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  // overlay를 표시하는 함수
  const showOverlay = () => setOverlayVisible(true);

  // overlay를 숨기는 함수
  const hideOverlay = () => setOverlayVisible(false);

  // children을 감싸서 Context Provider로 제공
  return (
    <OverlayContext.Provider
      value={{ isOverlayVisible, showOverlay, hideOverlay }}
    >
      {children}
    </OverlayContext.Provider>
  );
};
