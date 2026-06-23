'use client';

import { useRef, useState } from 'react';

export default function NewsletterForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSubmitting(true);

    let done = false;
    const go = () => {
      if (done) return;
      done = true;
      window.location.href = '/newsletter-success';
    };

    // Safety net: redirect even if capture is slow/unavailable.
    setTimeout(go, 2500);

    // TODO(phase4): point this at the real /api/forms route (Supabase + Resend).
    const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString();
    fetch('/api/forms/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    })
      .then(go)
      .catch(go);
  };

  return (
    <form ref={formRef} name="newsletter" onSubmit={handleSubmit} noValidate className="sub-form">
      <input type="hidden" name="form-name" value="newsletter" />

      <p className="hp-field">
        <label>
          Don&apos;t fill this out if you&apos;re human:{' '}
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="name-row">
        <input type="text" name="first-name" required placeholder="First Name" className="sub-input" />
        <input type="text" name="last-name" required placeholder="Last Name" className="sub-input" />
      </div>
      <input type="email" name="email" required placeholder="Your email" className="sub-input email-input" />
      <button type="submit" className="sub-submit" disabled={submitting}>
        {submitting ? 'Subscribing…' : 'Subscribe'}
      </button>
    </form>
  );
}
