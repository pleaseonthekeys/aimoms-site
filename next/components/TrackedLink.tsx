'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';

/**
 * A link that fires a Facebook Pixel event on click, then navigates.
 * Used for the commerce CTAs (Register / Reserve / checkout) so ad attribution
 * (InitiateCheckout / ViewContent) is preserved exactly as on the static site.
 */
export function trackFbq(event: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', event, params);
  }
}

type TrackedLinkProps = {
  href: string;
  event: string;
  params?: Record<string, unknown>;
  className?: string;
  target?: string;
  rel?: string;
  children: ReactNode;
};

export default function TrackedLink({
  href,
  event,
  params,
  className,
  target,
  rel,
  children,
}: TrackedLinkProps) {
  const onClick = () => trackFbq(event, params);
  const isInternal = href.startsWith('/');

  if (isInternal) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className} target={target} rel={rel} onClick={onClick}>
      {children}
    </a>
  );
}
