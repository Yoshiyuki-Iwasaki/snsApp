// hooks/useCounter.spec.ts
import { renderHook, act } from '@testing-library/react-hooks';
import { useAddPost } from './useAddPost';

describe('useCounterのテスト', () => {
  const inputChange = {
    content: 'testtest',
  };
  const { result } = renderHook(() => useAddPost(inputChange));

  test('countの初期値は0になっている', () => {
    // expect(result.current.count).toBe(0);
  });

  test('incrementを呼ぶと、countが期待通りの値に変更される', () => {
    // expect(result.current.count).toBe(0);
    // act(() => {
    //   result.current.increment();
    // });
    // expect(result.current.count).toBe(1);
  });
});
