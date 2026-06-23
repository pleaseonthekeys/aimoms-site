import type { Metadata } from 'next';
import Link from 'next/link';
import '../newsletter-success.css';

export const metadata: Metadata = {
  title: "You're subscribed. — ai.moms™",
  description: 'Welcome to The Edit.',
  alternates: { canonical: '/newsletter-success' },
  robots: { index: false, follow: true },
};

export default function NewsletterSuccessPage() {
  return (
    <div className="page-newsletter-success">
      <section className="confirm-section">
        <div className="confirm-inner">
          <h1 className="confirm-title">YOU&rsquo;RE SUBSCRIBED!</h1>
          <p className="confirm-sub">
            The Edit lands in your inbox every Friday. The smartest AI content for moms &mdash; zero fluff.
          </p>
          <p className="confirm-accent">See you Friday.</p>
          <Link href="/" className="btn btn-navy">&larr; Back to The Edit</Link>
        </div>
      </section>
    </div>
  );
}
