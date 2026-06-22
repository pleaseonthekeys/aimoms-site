import type { Metadata } from 'next';
import PurchasePixel from '@/components/PurchasePixel';
import { PRICES } from '@/lib/commerce';
import '../foundations-thank-you.css';

export const metadata: Metadata = {
  title: "You're enrolled — Welcome to the Foundations Course | ai.moms™",
  description: 'Welcome to the ai.moms™ Foundations Course. Your course login link is on the way.',
  alternates: { canonical: '/foundations-thank-you' },
  robots: { index: false, follow: true },
};

export default function FoundationsThankYouPage() {
  return (
    <div className="page-foundations-thank-you">
      {/* Stripe success_url lands here → fire the Purchase pixel. */}
      <PurchasePixel contentName="Foundations Course" value={PRICES.foundations} />

      <section className="confirm-section">
        <div className="confirm-inner">
          <div className="confirm-kicker">You&apos;re in</div>
          <h1 className="confirm-title">Welcome to the Foundations Course.</h1>
          <p className="confirm-sub">
            You&rsquo;re officially enrolled in the ai.moms™ Foundations Course.{' '}
            <strong>We&rsquo;re so glad you&rsquo;re here.</strong>
          </p>

          <div className="date-block">
            <div className="date-label">Your course access</div>
            <div className="date-headline">Instant access.</div>
            <p className="date-sub">Self-paced. Your course is yours to revisit as often as you want.</p>
          </div>

          <div className="next-block">
            <div className="next-label">What happens next</div>
            <div className="next-headline">Three things, <span style={{ color: 'var(--pink)' }}>in order.</span></div>
            <ol className="next-list">
              <li><span className="num">1</span><span><strong>Check your inbox.</strong> A welcome email from <a href="mailto:hello@aimoms.ai">hello@aimoms.ai</a> arrives in a few minutes.</span></li>
              <li><span className="num">2</span><span><strong>Click the link &amp; set your password.</strong> You&rsquo;re in.</span></li>
              <li><span className="num">3</span><span><strong>Start with Module 01.</strong> Bite-size lessons. No rush.</span></li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}
