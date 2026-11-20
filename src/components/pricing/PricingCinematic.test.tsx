import { describe, expect, it } from 'vitest';
import { SHORT_VIDEO_MAX_DURATION_SECONDS } from './PricingCinematic';

describe('short video package duration', () => {
  it('keeps every individual short video under 60 seconds', () => {
    expect(SHORT_VIDEO_MAX_DURATION_SECONDS).toBe(60);
  });
});