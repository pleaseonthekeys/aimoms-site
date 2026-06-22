'use client';

import { useEffect, useState } from 'react';
import { trackFbq } from './TrackedLink';

/** Fixed side tab ("WHAT'S YOUR SCORE?") that fades in after scrolling, linking to the quiz. */
export default function FloatingQuizCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 998,
        transition: 'opacity 0.3s ease',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <a
        href="/quiz"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackFbq('ViewContent', { content_name: 'Quiz Click' })}
        style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
          filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.15))',
        }}
      >
        <div
          style={{
            background: '#ff63d8',
            color: '#fff',
            padding: '14px 10px',
            borderRadius: '10px 0 0 10px',
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            fontFamily: "'Outfit',sans-serif",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            lineHeight: 1,
          }}
        >
          WHAT&apos;S YOUR SCORE?
        </div>
      </a>
    </div>
  );
}
