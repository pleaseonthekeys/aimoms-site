'use client';

import { useRef, useState } from 'react';

export default function PressForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

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
      setSuccess(true);
    };

    // Safety net: show success even if capture is slow/unavailable.
    setTimeout(go, 2500);

    // TODO(phase4): point this at the real /api/forms route (Supabase + Resend).
    const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString();
    fetch('/api/forms/press', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    })
      .then(go)
      .catch(go);
  };

  if (success) {
    return (
      <div className="press-success">
        <h2>Thank you &mdash; we&rsquo;ve got it.</h2>
        <p>We&rsquo;ll be in touch soon. In the meantime, keep an eye on your inbox.</p>
      </div>
    );
  }

  return (
    <form ref={formRef} name="press" onSubmit={handleSubmit} noValidate>
      <input type="hidden" name="form-name" value="press" />

      <p className="hp-field">
        <label>
          Don&rsquo;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="press-field">
        <label className="press-label">Name</label>
        <input type="text" name="name" required placeholder="Your name" className="press-input" />
      </div>
      <div className="press-field">
        <label className="press-label">Email</label>
        <input type="email" name="email" required placeholder="your@email.com" className="press-input" />
      </div>
      <div className="press-field last">
        <label className="press-label">Your Inquiry</label>
        <textarea
          name="inquiry"
          required
          placeholder="Tell us about your publication, story angle, or how we can help..."
          className="press-textarea"
        />
      </div>
      <button type="submit" className="press-submit" disabled={submitting}>
        {submitting ? 'Submitting…' : 'Submit Inquiry'}
      </button>
    </form>
  );
}
