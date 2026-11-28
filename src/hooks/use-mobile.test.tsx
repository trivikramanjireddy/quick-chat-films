import { act, renderHook } from '@testing-library/react';
import { afterEach, expect, it, vi } from 'vitest';
import { useIsMobile } from './use-mobile';

afterEach(() => vi.restoreAllMocks());

it('updates mobile state across the existing 768px breakpoint and cleans up its listener', () => {
  let change: (() => void) | undefined;
  const removeEventListener = vi.fn();
  vi.spyOn(window, 'matchMedia').mockImplementation(() => ({
    matches: true,
    media: '(max-width: 767px)',
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn((_event, listener) => { change = listener as () => void; }),
    removeEventListener,
    dispatchEvent: vi.fn(),
  }));
  vi.spyOn(window, 'innerWidth', 'get').mockReturnValue(767);
  const { result, unmount } = renderHook(() => useIsMobile());
  expect(result.current).toBe(true);
  vi.spyOn(window, 'innerWidth', 'get').mockReturnValue(768);
  act(() => change?.());
  expect(result.current).toBe(false);
  unmount();
  expect(removeEventListener).toHaveBeenCalledWith('change', change);
});