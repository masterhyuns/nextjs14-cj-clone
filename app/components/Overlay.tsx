'use client';
import { useOverlay } from '@/app/contexts/OverlayContext';

/**
 * Overlay 컴포넌트
 *
 * 설명:
 * - 전체 화면 Overlay Component
 *
 * 사용 방법:
 * const { showOverlay, hideOverlay } = useOverlay();
 * <button onClick={showOverlay}>Show Overlay</button>
 * 작성자: masterhyuns
 * 작성일: 2024. 9. 18.
 */
const Overlay = () => {
  // isOverlayVisible 상태를 가져와서, 보여줄지 말지 결정
  const { isOverlayVisible } = useOverlay();

  // isOverlayVisible 상태에 따라 className에 show 클래스를 추가하여 visibility와 opacity를 변경
  return (
    <div className={`overlay ${isOverlayVisible ? 'show' : ''}`}>
      {/* overlay 내부에 원하는 내용을 넣을 수 있음 */}
    </div>
  );
};

export default Overlay;
