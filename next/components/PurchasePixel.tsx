'use client';

import { useEffect } from 'react';
import { trackFbq } from './TrackedLink';

/**
 * Fires a Meta Pixel "Purchase" event on mount. Used on the post-Stripe *-thank-you
 * pages (Stripe's success_url lands here), exactly as the static site did.
 */
export default function PurchasePixel({
  contentName,
  value,
  currency = 'USD',
}: {
  contentName: string;
  value: number;
  currency?: string;
}) {
  useEffect(() => {
    trackFbq('Purchase', { content_name: contentName, value, currency });
  }, [contentName, value, currency]);

  return null;
}
