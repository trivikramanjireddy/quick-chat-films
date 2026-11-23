import { describe, expect, it } from 'vitest';
import { PACKAGE_PRICING, SHORT_VIDEO_MAX_DURATION_SECONDS } from './PricingCinematic';

describe('short video package duration', () => {
  it('keeps every individual short video under 60 seconds', () => {
    expect(SHORT_VIDEO_MAX_DURATION_SECONDS).toBe(60);
  });
});

describe('short video package pricing', () => {
  it('keeps the flagship mobile starting price at ₹3,999 per video', () => {
    expect(PACKAGE_PRICING.mobile.startingPrice).toBe(3999);
  });

  it('keeps the professional camera starting price at ₹7,999 per video', () => {
    expect(PACKAGE_PRICING.camera.startingPrice).toBe(7999);
  });

  it('keeps the drone and camera starting price at ₹15,999 per video', () => {
    expect(PACKAGE_PRICING.drone.startingPrice).toBe(15999);
  });

  it('keeps the mobile bulk offer reel counts and per-video prices unchanged', () => {
    expect(PACKAGE_PRICING.mobile.offers.map(({ reels, perReel }) => [reels, perReel])).toEqual([
      ['6 Reels', '₹2,750/-'],
      ['8 Reels', '₹2,500/-'],
      ['16 Reels', '₹2,000/-'],
    ]);
  });

  it('keeps the professional camera bulk offer reel counts and per-video prices unchanged', () => {
    expect(PACKAGE_PRICING.camera.offers.map(({ reels, perReel }) => [reels, perReel])).toEqual([
      ['4 Reels', '₹6,000/-'],
      ['8 Reels', '₹5,000/-'],
      ['16 Reels', '₹4,500/-'],
    ]);
  });

  it('keeps the drone and camera bulk offer reel counts and per-video prices unchanged', () => {
    expect(PACKAGE_PRICING.drone.offers.map(({ reels, perReel }) => [reels, perReel])).toEqual([
      ['4 Reels', '₹13,500/-'],
      ['8 Reels', '₹11,250/-'],
      ['16 Reels', '₹10,000/-'],
    ]);
  });
});
