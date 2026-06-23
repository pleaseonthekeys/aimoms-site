'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { STRIPE_LINKS, PRICES } from '@/lib/commerce';
import { trackFbq } from './TrackedLink';

type Option = { text: string; score: number };
type Question = { category: string; question: string; options: Option[] };
type Result = {
  range: string;
  title: string;
  emoji: string;
  hoursWeek: number;
  hoursSaved: number;
  summary: string;
  tip: string;
};

const QUESTIONS: Question[] = [
  { category: 'Mental Load', question: 'How often are you the one who remembers appointments, school events, and family commitments?', options: [
    { text: 'Rarely — this is well-managed in my household', score: 1 },
    { text: 'Sometimes — but I catch what falls through', score: 2 },
    { text: 'Usually me', score: 3 },
    { text: "Always me — if I forget it, it doesn't happen", score: 4 },
  ] },
  { category: 'Meal Management', question: "When it comes to meals (planning, shopping, cooking, cleanup) — what's your role?", options: [
    { text: 'This is well-distributed in my household', score: 1 },
    { text: 'I plan, but others help execute', score: 2 },
    { text: 'I handle most of it with occasional help', score: 3 },
    { text: "I'm the entire food chain — plan to plate to cleanup", score: 4 },
  ] },
  { category: 'Schedule Coordination', question: 'Who coordinates pickups, dropoffs, playdates, and activity logistics?', options: [
    { text: 'This is handled by multiple people', score: 1 },
    { text: 'I coordinate but delegate the driving', score: 2 },
    { text: "I'm the dispatcher AND often the driver", score: 3 },
    { text: 'I manage every moving piece — I AM the family GPS', score: 4 },
  ] },
  { category: 'Household Operations', question: 'Who notices when supplies are low, the house needs cleaning, or something needs fixing?', options: [
    { text: 'Multiple people notice and act on it', score: 1 },
    { text: 'I notice first but it gets handled', score: 2 },
    { text: 'I notice AND initiate — others help if asked', score: 3 },
    { text: "If I don't see it and do it, we live in chaos", score: 4 },
  ] },
  { category: 'Emotional Labor', question: 'Who manages the emotional temperature of the family — checking in, smoothing conflicts, remembering what each person needs?', options: [
    { text: 'Multiple people in my house are tuned in', score: 1 },
    { text: 'I do more of this but I get some help', score: 2 },
    { text: 'This is primarily my job', score: 3 },
    { text: "I'm the family therapist, mediator, and mood reader", score: 4 },
  ] },
  { category: 'Decision Fatigue', question: 'How many micro-decisions do you make for your family each day?', options: [
    { text: 'A few — others handle their own or I have help', score: 1 },
    { text: 'More than my fair share, but manageable', score: 2 },
    { text: "Dozens — I'm the default decision-maker", score: 3 },
    { text: "I've lost count — I decide EVERYTHING", score: 4 },
  ] },
  { category: 'Admin & Paperwork', question: 'Who handles forms, insurance, school communications, doctor appointments, and family admin?', options: [
    { text: 'Well-distributed across my household', score: 1 },
    { text: 'Mostly me but someone else handles a few categories', score: 2 },
    { text: 'Almost entirely me', score: 3 },
    { text: "I am the family's Chief Administrative Officer", score: 4 },
  ] },
  { category: 'Self-Care Impact', question: 'How often do you sacrifice your own time (exercise, hobbies, rest) because family logistics take priority?', options: [
    { text: 'Rarely — I protect my time well', score: 1 },
    { text: 'Sometimes — but I usually get some me-time', score: 2 },
    { text: 'Often — my needs come last', score: 3 },
    { text: "Always — I can't remember the last time I did something just for me", score: 4 },
  ] },
];

const RESULTS: Record<'low' | 'medium' | 'high', Result> = {
  low: { range: '8-14', title: 'The Balanced Operator', emoji: '✨', hoursWeek: 8, hoursSaved: 5, summary: "You've got a solid system going. Your invisible load is managed well — but even you could benefit from AI automating the repetitive parts.", tip: "Even at your level, AI can give you back ~5 hours every week. That's 260 hours a year — enough to read 26 books, train for a half marathon, or just breathe." },
  medium: { range: '15-22', title: 'The Quiet Carrier', emoji: '🎒', hoursWeek: 16, hoursSaved: 10, summary: "You're carrying more than your share — and you probably don't realize how much of it lives rent-free in your head. The mental tabs you keep open are costing you energy, sleep, and joy.", tip: 'AI can give you back ~10 hours every week. That\'s 520 hours a year — the equivalent of 13 full work weeks. Time to rediscover the person you were before you became Chief Everything Officer.' },
  high: { range: '23-32', title: 'Chief Everything Officer', emoji: '🔥', hoursWeek: 22, hoursSaved: 15, summary: "You are running an entire operation solo. You're the CEO, COO, CFO, and intern of your household — and it's not sustainable. The invisible load you're carrying would burn anyone out.", tip: "AI can give you back ~15 hours every week. That's 780 hours a year — nearly 20 full work weeks you're losing to invisible work. This isn't about productivity. It's about getting your life back." },
};

function levelFor(total: number): 'low' | 'medium' | 'high' {
  return total <= 14 ? 'low' : total <= 22 ? 'medium' : 'high';
}

export default function QuizApp() {
  const [screen, setScreen] = useState<'intro' | 'quiz' | 'result' | 'final'>('intro');
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [total, setTotal] = useState(0);
  const [level, setLevel] = useState<'low' | 'medium' | 'high'>('low');
  const [gaugePct, setGaugePct] = useState(0);
  const [finalEmail, setFinalEmail] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const result = RESULTS[level];

  const startQuiz = () => {
    setScreen('quiz');
    trackFbq('ViewContent', { content_name: 'quiz-started' });
  };

  const selectAnswer = (score: number) => {
    setAnswers((prev) => ({ ...prev, [currentQ]: score }));
    setTimeout(() => {
      if (currentQ < QUESTIONS.length - 1) {
        setCurrentQ((q) => q + 1);
      } else {
        showResult({ ...answers, [currentQ]: score });
      }
    }, 300);
  };

  const goBack = () => {
    if (currentQ > 0) setCurrentQ((q) => q - 1);
  };

  const showResult = (finalAnswers: Record<number, number>) => {
    const sum = Object.values(finalAnswers).reduce((a, b) => a + b, 0);
    setTotal(sum);
    setLevel(levelFor(sum));
    setScreen('result');
    trackFbq('ViewContent', { content_name: 'quiz-result', value: sum });
  };

  // Animate the score gauge once the result screen is shown.
  useEffect(() => {
    if (screen !== 'result') {
      setGaugePct(0);
      return;
    }
    const pct = (total / 32) * 100;
    const t = setTimeout(() => setGaugePct(pct), 100);
    return () => clearTimeout(t);
  }, [screen, total]);

  const handleQuizSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const email = (form.elements.namedItem('email') as HTMLInputElement | null)?.value || '';

    trackFbq('Lead', { content_name: 'Quiz Completed' });

    // TODO(phase4): point this at the real /api/forms/quiz-leads route (Supabase + Resend).
    const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString();
    fetch('/api/forms/quiz-leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    })
      .then(() => {
        trackFbq('Lead', { content_name: 'quiz-lead' });
        setFinalEmail(email);
        setScreen('final');
      })
      .catch(() => {
        alert('Something went wrong — please try again.');
      });
  };

  // Derived time-impact figures for the result screen.
  const hoursWeek = result.hoursWeek;
  const hoursYear = hoursWeek * 52;
  const savedYear = result.hoursSaved * 52;
  const workWeeks = Math.round(hoursYear / 40);
  const timeMessages: Record<'low' | 'medium' | 'high', string> = {
    low: `That's ${workWeeks} full work weeks per year spent on invisible work. AI can give you back 260 hours — enough time to rediscover the things you love.`,
    medium: `That's ${workWeeks} full work weeks per year. You're working two jobs — your career and your household. AI can give you back 520 hours to rediscover yourself.`,
    high: `That's ${workWeeks} full work weeks per year — nearly half a year of full-time work, invisible and unrecognized. AI can give you back 780 hours. Enough to change everything.`,
  };

  const CIRC = 534; // 2πr, r=85
  const dash = `${gaugePct * 5.34} ${CIRC - gaugePct * 5.34}`;

  const q = QUESTIONS[currentQ];

  return (
    <>
      {/* INTRO */}
      <div className={`screen${screen === 'intro' ? ' active' : ''}`}>
        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 28, fontWeight: 700, marginBottom: 24 }}>
            <span style={{ color: 'var(--pink)' }}>ai</span> moms<span style={{ fontSize: 12, verticalAlign: 'super' }}>™</span>
          </div>
          <div style={{ width: 50, height: 2, background: 'var(--pink)', margin: '0 auto 28px' }} />
          <div style={{ fontSize: 11, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--pink)', fontWeight: 600, marginBottom: 16 }}>2-MINUTE QUIZ</div>
          <h1 className="quiz-h1" style={{ fontFamily: "'Outfit',sans-serif", fontSize: 32, fontWeight: 800, color: 'var(--dark)', lineHeight: 1.2, margin: '0 0 14px' }}>
            What&apos;s Your<br />Invisible Load Score?
          </h1>
          <p style={{ color: 'var(--text-mid)', fontSize: 15, lineHeight: 1.6, maxWidth: 420, margin: '0 auto 8px' }}>
            8 quick questions to uncover how much of your family&apos;s mental load you&apos;re carrying — and what to do about it.
          </p>
          <p style={{ color: 'var(--text-light)', fontSize: 13, marginBottom: 36 }}>Takes 2 minutes</p>
          <button className="btn-pink" onClick={startQuiz}>Take the Quiz →</button>
          <div style={{ marginTop: 36, paddingTop: 20, borderTop: '1px solid #E5E7EB' }}>
            <p style={{ fontSize: 12, color: 'var(--text-light)' }}>From the course helping moms Retire from Chief Everything Officer™</p>
            <p style={{ fontSize: 11, color: 'var(--text-light)', marginTop: 8 }}>
              <Link href="/terms" style={{ color: 'var(--text-light)', textDecoration: 'none' }}>Terms</Link>
              {' · '}
              <Link href="/privacy" style={{ color: 'var(--text-light)', textDecoration: 'none' }}>Privacy</Link>
            </p>
          </div>
        </div>
      </div>

      {/* QUIZ */}
      <div className={`screen${screen === 'quiz' ? ' active' : ''}`}>
        <div className="card">
          <div className="progress-track"><div className="progress-fill" style={{ width: `${(currentQ / QUESTIONS.length) * 100}%` }} /></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
            <span style={{ fontSize: 12, color: 'var(--text-light)' }}>Question {currentQ + 1} of {QUESTIONS.length}</span>
            <span style={{ fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--pink)', fontWeight: 600 }}>{q.category}</span>
          </div>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: 'var(--dark)', lineHeight: 1.4, margin: '0 0 24px' }}>{q.question}</h2>
          <div>
            {q.options.map((opt) => (
              <button
                key={opt.text}
                className={`option-btn${answers[currentQ] === opt.score ? ' selected' : ''}`}
                onClick={() => selectAnswer(opt.score)}
              >
                {opt.text}
              </button>
            ))}
          </div>
          {currentQ > 0 && (
            <button onClick={goBack} style={{ marginTop: 16, background: 'none', border: 'none', color: 'var(--text-light)', cursor: 'pointer', fontSize: 13, padding: '8px 0', fontFamily: "'Be Vietnam Pro',sans-serif" }}>← Back</button>
          )}
        </div>
      </div>

      {/* RESULT */}
      <div className={`screen${screen === 'result' ? ' active' : ''}`}>
        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{result.emoji}</div>
          <div style={{ fontSize: 11, letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, marginBottom: 16, color: 'var(--pink)' }}>YOUR RESULT</div>

          {/* Score gauge */}
          <div style={{ position: 'relative', width: 180, height: 180, margin: '0 auto 20px' }}>
            <svg viewBox="0 0 200 200" style={{ transform: 'rotate(-90deg)' }}>
              <circle cx="100" cy="100" r="85" fill="none" stroke="#E5E7EB" strokeWidth="10" />
              <circle cx="100" cy="100" r="85" fill="none" stroke="var(--pink)" strokeWidth="10" strokeDasharray={dash} strokeLinecap="round" style={{ transition: 'stroke-dasharray 1.5s ease' }} />
            </svg>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
              <div style={{ fontSize: 40, fontWeight: 800, color: 'var(--dark)', lineHeight: 1 }}>{total}</div>
              <div style={{ fontSize: 12, color: 'var(--text-light)', marginTop: 4 }}>out of 32</div>
            </div>
          </div>

          {/* TIME IMPACT */}
          <div style={{ background: 'linear-gradient(135deg,#060d26,#1a2340)', borderRadius: 16, padding: 24, marginBottom: 24, textAlign: 'center', color: '#fff' }}>
            <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ff63d8', marginBottom: 8 }}>WHAT YOUR SCORE MEANS</div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap', marginBottom: 16 }}>
              <div>
                <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 900, fontSize: 36, color: '#ff63d8', lineHeight: 1 }}>{hoursWeek}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>hrs/week lost</div>
              </div>
              <div>
                <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 900, fontSize: 36, color: '#fff', lineHeight: 1 }}>{hoursYear.toLocaleString()}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>hrs/year lost</div>
              </div>
              <div>
                <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 900, fontSize: 36, color: '#ff63d8', lineHeight: 1 }}>{savedYear.toLocaleString()}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>hrs AI gives back</div>
              </div>
            </div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, maxWidth: 380, margin: '0 auto' }}>{timeMessages[level]}</div>
          </div>

          <h2 style={{ fontSize: 24, fontWeight: 800, color: 'var(--dark)', margin: '0 0 8px' }}>{result.title}</h2>
          <p style={{ color: 'var(--text-mid)', fontSize: 14, lineHeight: 1.6, maxWidth: 440, margin: '0 auto 20px' }}>{result.summary}</p>

          <div style={{ background: 'var(--gray)', borderLeft: '4px solid var(--pink)', padding: 16, marginBottom: 24, textAlign: 'left' }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--dark)', marginBottom: 4 }}>💡 What this means:</div>
            <p style={{ fontSize: 13, color: 'var(--text-mid)', lineHeight: 1.6, margin: 0 }}>{result.tip}</p>
          </div>

          {/* Direct course CTA */}
          <div style={{ background: 'var(--dark)', padding: 24, textAlign: 'center', marginBottom: 16 }}>
            <h3 style={{ color: 'var(--white)', fontSize: 16, fontWeight: 700, margin: '0 0 6px' }}>Ready to fix this?</h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.6, margin: '0 0 4px' }}>
              The ai moms™ on-demand course teaches you to build Aime — your AI Chief Everything Officer who already knows your family.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, margin: '0 0 4px' }}>Build your AI family management team and get those hours back.</p>
            <p style={{ color: 'var(--pink)', fontSize: 11, fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', margin: '12px 0 4px' }}>Founding Member Pricing</p>
            <p style={{ fontSize: 28, fontWeight: 700, color: 'var(--white)', margin: '0 0 2px' }}>${PRICES.foundations}</p>
            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', margin: '0 0 16px' }}>Standard pricing: ${PRICES.foundationsStandard}</p>
            <p style={{ fontSize: 13, margin: '0 0 16px' }}>
              <Link href="/foundations" style={{ color: 'var(--pink)', textDecoration: 'underline', fontWeight: 500 }}>See full course details →</Link>
            </p>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
              {/* Stripe Payment Links — verbatim from commerce.ts; preserve InitiateCheckout events. */}
              <a
                href={STRIPE_LINKS.foundationsPayInFull}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pink"
                style={{ textDecoration: 'none', padding: '12px 24px', fontSize: 13 }}
                onClick={() => trackFbq('InitiateCheckout', { content_name: 'pay-full', value: PRICES.foundations, currency: 'USD' })}
              >
                Pay in Full — ${PRICES.foundations}
              </a>
              <a
                href={STRIPE_LINKS.foundationsTwoPay}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', padding: '12px 24px', fontSize: 13, background: 'none', border: '1px solid rgba(255,255,255,0.2)', color: 'var(--white)', fontWeight: 600, fontFamily: "'Be Vietnam Pro',sans-serif" }}
                onClick={() => trackFbq('InitiateCheckout', { content_name: 'pay-split', value: PRICES.foundationsTwoPay * 2, currency: 'USD' })}
              >
                Two Payments — ${PRICES.foundationsTwoPay}
              </a>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <p style={{ fontSize: 13, color: 'var(--text-light)' }}>or</p>
          </div>

          {/* Email capture for guide */}
          <div style={{ background: 'var(--dark)', padding: 24, textAlign: 'center' }}>
            <h3 style={{ color: 'var(--white)', fontSize: 16, fontWeight: 700, margin: '0 0 6px' }}>Not ready yet? Start with the free guide.</h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, margin: '0 0 16px' }}>Learn the one framework that changes how you use AI — then decide.</p>
            <form ref={formRef} name="quiz-leads" onSubmit={handleQuizSubmit}>
              <input type="hidden" name="form-name" value="quiz-leads" />
              <input type="hidden" name="score" value={total} />
              <input type="hidden" name="result" value={result.title} />
              <p style={{ display: 'none' }}><input name="bot-field" tabIndex={-1} autoComplete="off" /></p>
              <div style={{ display: 'flex', gap: 8 }} className="email-row">
                <input type="text" name="name" placeholder="First name" required className="email-input" style={{ marginBottom: 8 }} />
                <input type="email" name="email" placeholder="your@email.com" required className="email-input" />
                <button type="submit" className="btn-pink" style={{ padding: '13px 18px', fontSize: 14, whiteSpace: 'nowrap' }}>Send it →</button>
              </div>
            </form>
            <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.2)', textAlign: 'center', lineHeight: 1.5, marginTop: 8 }}>
              By signing up, you agree to receive emails from ai moms™. Unsubscribe anytime.
            </p>
          </div>

          <div style={{ textAlign: 'center', marginTop: 16 }}>
            <p style={{ fontSize: 11, color: 'var(--text-light)' }}>
              <Link href="/terms" style={{ color: 'var(--text-light)', textDecoration: 'none' }}>Terms</Link>
              {' · '}
              <Link href="/privacy" style={{ color: 'var(--text-light)', textDecoration: 'none' }}>Privacy</Link>
            </p>
          </div>
        </div>
      </div>

      {/* FINAL */}
      <div className={`screen${screen === 'final' ? ' active' : ''}`}>
        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: 'var(--dark)', margin: '0 0 12px' }}>Check your inbox!</h2>
          <p style={{ color: 'var(--text-mid)', fontSize: 15, lineHeight: 1.6, maxWidth: 400, margin: '0 auto 28px' }}>
            Your AI Transformation Guide is on the way to <strong>{finalEmail}</strong>.
          </p>

          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <a href="https://aimomsguide.netlify.app" target="_blank" rel="noopener noreferrer" className="btn-pink" style={{ textDecoration: 'none', display: 'inline-block', padding: '16px 40px', fontSize: 15 }}>
              Read the Free Guide Now →
            </a>
          </div>

          <div style={{ background: 'var(--gray)', borderLeft: '4px solid var(--pink)', padding: 20, marginBottom: 24, textAlign: 'left' }}>
            <h3 style={{ color: 'var(--dark)', fontSize: 15, fontWeight: 700, margin: '0 0 10px' }}>Already ready to go further?</h3>
            <p style={{ color: 'var(--text-mid)', fontSize: 13, lineHeight: 1.6, margin: '0 0 12px' }}>
              The <strong>ai moms™ on-demand course</strong> teaches you to build Aime — your AI Chief Everything Officer who already knows your family. Build your AI family management team and get those hours back.
            </p>
            <p style={{ fontSize: 12, color: 'var(--pink)', fontWeight: 600, margin: '0 0 4px' }}>Founding Member Pricing: ${PRICES.foundations} (standard ${PRICES.foundationsStandard})</p>
            <p style={{ fontSize: 12, color: 'var(--text-light)', margin: 0 }}>45+ video lessons · On your schedule · 60-day access</p>
          </div>

          <Link href="/foundations" className="btn-dark" style={{ textDecoration: 'none', padding: '12px 28px', fontSize: 13 }}>
            Learn More at aimoms.ai →
          </Link>

          <div style={{ marginTop: 28, paddingTop: 16, borderTop: '1px solid #E5E7EB' }}>
            <p style={{ fontSize: 11, color: 'var(--text-light)', letterSpacing: '1px' }}>ai moms™ — retire from chief everything officer™</p>
            <p style={{ fontSize: 11, color: 'var(--text-light)', marginTop: 4 }}>
              <Link href="/terms" style={{ color: 'var(--text-light)', textDecoration: 'none' }}>Terms</Link>
              {' · '}
              <Link href="/privacy" style={{ color: 'var(--text-light)', textDecoration: 'none' }}>Privacy</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
