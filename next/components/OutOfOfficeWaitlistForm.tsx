'use client';

import { useRef, useState } from 'react';
import { trackFbq } from './TrackedLink';

function formatPhone(value: string): string {
  const v = value.replace(/\D/g, '').substring(0, 10);
  let f = '';
  if (v.length > 0) f = '(' + v.substring(0, 3);
  if (v.length >= 4) f += ') ' + v.substring(3, 6);
  if (v.length >= 7) f += '-' + v.substring(6, 10);
  return f;
}

export default function OutOfOfficeWaitlistForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const [phone, setPhone] = useState('');
  const [success, setSuccess] = useState(false);

  const showSuccess = () => {
    setSuccess(true);
    // Fire pixel — waitlist signup as Lead event
    trackFbq('Lead', { content_name: 'Out of Office Weekends Waitlist' });
    // Scroll the success state into view
    setTimeout(() => {
      successRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 0);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    // Basic validation
    const firstName = (form.elements.namedItem('first_name') as HTMLInputElement).value.trim();
    const lastName = (form.elements.namedItem('last_name') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
    const phoneVal = (form.elements.namedItem('phone') as HTMLInputElement).value.trim();
    if (!firstName || !lastName || !email || !phoneVal) {
      alert('Please fill in all fields.');
      return;
    }

    let done = false;
    const go = () => {
      if (done) return;
      done = true;
      showSuccess();
    };

    // Safety net: show success even if capture is slow/unavailable.
    setTimeout(go, 2500);

    // TODO(phase4): point this at the real /api/forms route (Supabase + Resend).
    const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString();
    fetch('/api/forms/outofoffice-waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    })
      .then(go)
      .catch(go);
  };

  return (
    <div className="form-wrap">
      {!success && (
        <div id="form-state-default">
          <div className="form-card">
            <h2>Add me to the waitlist.</h2>
            <p className="form-sub">
              First access to dates, locations, and pricing. No spam. We&rsquo;ll reach out when we have
              something real to share.
            </p>

            <form ref={formRef} name="outofoffice-waitlist" id="waitlist-form" onSubmit={handleSubmit} noValidate>
              <input type="hidden" name="form-name" value="outofoffice-waitlist" />
              <p className="bot-field"><label>Don&rsquo;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>

              <div className="field-row">
                <div className="field">
                  <label className="field-label" htmlFor="first_name">First name</label>
                  <input type="text" id="first_name" name="first_name" required autoComplete="given-name" />
                </div>
                <div className="field">
                  <label className="field-label" htmlFor="last_name">Last name</label>
                  <input type="text" id="last_name" name="last_name" required autoComplete="family-name" />
                </div>
              </div>

              <div className="field">
                <label className="field-label" htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required autoComplete="email" />
              </div>

              <div className="field">
                <label className="field-label" htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  autoComplete="tel"
                  maxLength={14}
                  inputMode="numeric"
                  value={phone}
                  onChange={(e) => setPhone(formatPhone(e.target.value))}
                />
              </div>

              <button type="submit" className="submit-btn">Join the waitlist &rarr;</button>
              <p className="submit-note">No commitment. No payment. Just your name on the list.</p>
            </form>
          </div>
        </div>
      )}

      {/* SUCCESS STATE — shown after form submit */}
      {success && (
        <div ref={successRef} id="form-state-success" className="form-success show">
          <div className="kicker"><span className="dot" /> You&rsquo;re on the list</div>
          <h2>See you in Fall 2026.</h2>
          <p>
            We&rsquo;ll be in touch when dates and locations are confirmed. In the meantime, keep an eye on{' '}
            <a href="mailto:hello@aimoms.ai" style={{ color: 'var(--pink)', textDecoration: 'underline' }}>hello@aimoms.ai</a>{' '}
            &mdash; that&rsquo;s where the first announcements will come from.
          </p>
        </div>
      )}
    </div>
  );
}
