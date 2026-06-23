import type { Metadata } from 'next';
import Link from 'next/link';
import '../success.css';

export const metadata: Metadata = {
  title: "You're In! — ai.moms™",
  description: 'Welcome to ai.moms.',
  alternates: { canonical: '/success' },
  robots: { index: false, follow: true },
};

export default function SuccessPage() {
  return (
    <div className="page-success">
      <section className="confirm-section">
        <div className="confirm-inner">
          <h1 className="confirm-title">
            You&rsquo;re <span className="italic-accent">on the list.</span>
          </h1>
          <p className="confirm-sub">
            Thank you for joining us. We&rsquo;ll be in touch soon with everything you need to know.
          </p>
          <p className="confirm-accent">Welcome to the movement.</p>
          <Link href="/" className="btn btn-navy">&larr; Back to Home</Link>
        </div>
      </section>
    </div>
  );
}
