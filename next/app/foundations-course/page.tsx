import type { Metadata } from 'next';

/*
 * Phase 6 placeholder for the gated Foundations course area.
 * For now it simply links out to the existing external course host. The future
 * Supabase-Auth login wall (users can NEVER see another user's data — RLS scoped to
 * auth.uid()) is documented in CLAUDE.md and lands in a later pass.
 * TODO(raquel): approve adding a nav slot for this; not linked from the global Header yet.
 */

export const metadata: Metadata = {
  title: 'Foundations Course — ai.moms™',
  description: 'Access your ai.moms™ Foundations course.',
  alternates: { canonical: '/foundations-course' },
  robots: { index: false, follow: true },
};

const COURSE_URL = 'https://aimomsfoundationscourse.netlify.app';

export default function FoundationsCoursePage() {
  return (
    <div
      style={{
        minHeight: 'calc(100vh - 56px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 24px',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: 460 }}>
        <div
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize: 11,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'var(--pink)',
            marginBottom: 16,
          }}
        >
          Members
        </div>
        <h1
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(1.8em, 5vw, 2.6em)',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            color: 'var(--navy)',
            marginBottom: 14,
          }}
        >
          Your course lives here.
        </h1>
        <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--gray-600)', marginBottom: 28 }}>
          Already enrolled in the ai.moms&#8482; Foundations course? Head to your course
          dashboard to keep building your Aime.
        </p>
        <a
          href={COURSE_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            background: 'var(--pink)',
            color: '#fff',
            padding: '14px 30px',
            borderRadius: 12,
            fontFamily: "'Be Vietnam Pro', sans-serif",
            fontSize: '0.95em',
            fontWeight: 700,
            textDecoration: 'none',
          }}
        >
          Go to my course →
        </a>
      </div>
    </div>
  );
}
