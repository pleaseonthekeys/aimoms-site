import type { Metadata } from 'next';
import FoundationsRegisterForm from '@/components/FoundationsRegisterForm';
import { PRICES } from '@/lib/commerce';
import '../foundations-register.css';

export const metadata: Metadata = {
  title: 'Register for the Foundations Course — ai.moms™',
  description:
    'Register for the ai.moms™ Foundations Course. $247 founding-member pricing — 6 modules, 44 video lessons, 50+ ready-to-use prompts, on demand.',
  alternates: { canonical: '/foundations-register' },
  robots: { index: false, follow: true },
};

export default function FoundationsRegisterPage() {
  return (
    <div className="page-foundations-register">
      {/* HERO */}
      <section className="hero">
        <div className="container-sm">
          <div className="hero-eyebrow"><span className="dot" /> Foundations Course &middot; Registration</div>
          <h1>You&rsquo;re almost in.</h1>
          <p className="hero-sub">
            Two quick steps: a few details about you, then payment. About <strong>2 minutes</strong> total.
            Then you&rsquo;ll get a welcome email with your course login link.
          </p>
          <div className="hero-price-line">${PRICES.foundations}<span className="pink"> &middot; founding member</span> &middot; instant access</div>
        </div>
      </section>

      {/* FORM */}
      <section className="form-section">
        <div className="container-sm">
          <FoundationsRegisterForm />
        </div>
      </section>
    </div>
  );
}
