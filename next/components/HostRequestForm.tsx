'use client';

import { useRef, useState } from 'react';
import { trackFbq } from './TrackedLink';

export default function HostRequestForm() {
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
      window.location.href = '/host-success';
    };

    trackFbq('Lead', { content_name: 'Host Request' });

    // Safety net: redirect even if capture is slow/unavailable.
    setTimeout(go, 2500);

    // TODO(phase4): point this at the real /api/forms route (Supabase + Resend).
    const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString();
    fetch('/api/forms/host-request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    })
      .then(go)
      .catch(go);
  };

  return (
    <form ref={formRef} name="host-request" onSubmit={handleSubmit} noValidate>
      <input type="hidden" name="form-name" value="host-request" />
      <p className="hp-field">
        <label>Don&#8217;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
      </p>

      {/* About You */}
      <div className="form-group">
        <div className="group-heading">About You</div>

        <div className="row-keep two-col">
          <div className="field-wrap">
            <label className="field" htmlFor="first-name">First Name</label>
            <input type="text" name="first-name" id="first-name" required />
          </div>
          <div className="field-wrap">
            <label className="field" htmlFor="last-name">Last Name</label>
            <input type="text" name="last-name" id="last-name" required />
          </div>
        </div>

        <div className="field-wrap">
          <label className="field" htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>

        <div className="field-wrap">
          <label className="field" htmlFor="phone">Phone <span className="opt">(for scheduling)</span></label>
          <input type="tel" name="phone" id="phone" required />
        </div>

        <div className="field-wrap">
          <label className="field" htmlFor="instagram">Instagram Handle <span className="opt">(optional)</span></label>
          <input type="text" name="instagram" id="instagram" placeholder="@yourhandle" />
        </div>
      </div>

      {/* Your Home */}
      <div className="form-group">
        <div className="group-heading">Your Home</div>

        <div className="row-keep two-one">
          <div className="field-wrap">
            <label className="field" htmlFor="city">City / Town</label>
            <input type="text" name="city" id="city" required />
          </div>
          <div className="field-wrap">
            <label className="field" htmlFor="state">State</label>
            <input type="text" name="state" id="state" required maxLength={2} placeholder="NY" />
          </div>
        </div>

        <div className="field-wrap">
          <label className="field" htmlFor="zip">Zip Code</label>
          <input type="text" name="zip" id="zip" required maxLength={10} />
        </div>

        <div className="field-wrap">
          <label className="field" htmlFor="space">Tell us about your space <span className="opt">(optional)</span></label>
          <textarea name="space" id="space" placeholder="Living room, kitchen island, backyard&#8230; how do you usually gather your mom friends?" />
        </div>
      </div>

      {/* Your Crew */}
      <div className="form-group">
        <div className="group-heading">Your Crew</div>

        <div className="field-wrap">
          <label className="field" htmlFor="guest-count">How many mom friends are you looking to invite?</label>
          <select name="guest-count" id="guest-count" required defaultValue="">
            <option value="">Select&#8230;</option>
            <option value="6-8">6&#8211;8 (a tight crew)</option>
            <option value="8-12">8&#8211;12 (the sweet spot)</option>
            <option value="12-15">12&#8211;15 (full house)</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>

        <div className="field-wrap">
          <label className="field" htmlFor="crew">Tell us about your crew <span className="opt">(optional)</span></label>
          <textarea name="crew" id="crew" placeholder="Working moms, stay-at-home moms, school pickup friends, neighbors, book club&#8230; who&#8217;s in the WhatsApp chat?" />
        </div>
      </div>

      {/* Timing */}
      <div className="form-group">
        <div className="group-heading">Timing</div>

        <div className="field-wrap">
          <label className="field" htmlFor="timeline">When are you hoping to host?</label>
          <select name="timeline" id="timeline" required defaultValue="">
            <option value="">Select&#8230;</option>
            <option value="ASAP">As soon as possible</option>
            <option value="next-month">Within the next month</option>
            <option value="1-2-months">1&#8211;2 months out</option>
            <option value="3-plus-months">3+ months out</option>
            <option value="flexible">I&#8217;m flexible &#8212; tell me what works</option>
          </select>
        </div>

        <div className="field-wrap">
          <label className="field">Best night of the week <span className="opt">(check all that apply)</span></label>
          <div className="check-grid">
            <label className="check-item"><input type="checkbox" name="nights[]" value="Monday" /><span>Monday</span></label>
            <label className="check-item"><input type="checkbox" name="nights[]" value="Tuesday" /><span>Tuesday</span></label>
            <label className="check-item"><input type="checkbox" name="nights[]" value="Wednesday" /><span>Wednesday</span></label>
            <label className="check-item"><input type="checkbox" name="nights[]" value="Thursday" /><span>Thursday</span></label>
            <label className="check-item"><input type="checkbox" name="nights[]" value="Friday" /><span>Friday</span></label>
            <label className="check-item"><input type="checkbox" name="nights[]" value="Weekend" /><span>Weekend</span></label>
          </div>
        </div>
      </div>

      {/* The Vibe */}
      <div className="form-group">
        <div className="group-heading">The Vibe</div>

        <div className="field-wrap">
          <label className="field" htmlFor="why">Why do you want to host? <span className="opt">(optional but we love hearing this)</span></label>
          <textarea name="why" id="why" placeholder="What got you excited about hosting? What do you want your friends to walk away with?" />
        </div>

        <div className="field-wrap">
          <label className="field" htmlFor="referral">How did you hear about us?</label>
          <select name="referral" id="referral" defaultValue="">
            <option value="">Select&#8230;</option>
            <option value="Instagram">Instagram</option>
            <option value="TikTok">TikTok</option>
            <option value="Friend">A friend told me</option>
            <option value="Newsletter">The Edit / newsletter</option>
            <option value="Press">Press / article</option>
            <option value="Search">Google search</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <button type="submit" className="submit-btn" disabled={submitting}>
        {submitting ? 'Sending…' : 'Send My Request →'}
      </button>
      <p className="submit-fine">
        By submitting, you agree to be contacted about hosting a mom-hosted experience.<br />
        We&#8217;ll never share your info.
      </p>
    </form>
  );
}
