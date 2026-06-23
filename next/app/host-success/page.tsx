import type { Metadata } from 'next';
import Link from 'next/link';
import '../host-success.css';

export const metadata: Metadata = {
  title: 'Request Submitted — ai.moms™',
  description: 'Your mom-hosted experience host request is in.',
  alternates: { canonical: '/host-success' },
  robots: { index: false, follow: true },
};

export default function HostSuccessPage() {
  return (
    <div className="page-host-success">
      <section className="confirm-section">
        <div className="confirm-inner">
          <h1 className="confirm-title">
            Request submitted.<br />
            <span className="italic-accent">You&rsquo;re all set.</span>
          </h1>
          <p className="confirm-sub">
            Your mom-hosted experience host request is in. We&rsquo;ll be in touch to lock in your date.
          </p>
          <p className="confirm-accent">Start thinking about the guest list.</p>
          <Link href="/experiences" className="btn btn-navy">&larr; Back to Experiences</Link>
        </div>
      </section>
    </div>
  );
}
