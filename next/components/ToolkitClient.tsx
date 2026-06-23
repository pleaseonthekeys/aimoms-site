'use client';

import { useState } from 'react';

/* Score rows for a tool card: [label, percent-width, number] */
type Score = [string, number, number];

type Card = {
  name: React.ReactNode;
  price: string;
  tagline: React.ReactNode;
  badge?: { label: string; cls: string };
  scores?: Score[];
  scoreOverall?: { num: string; tier: string };
  review?: React.ReactNode;
  reviewMuted?: boolean;
  reviewPending?: boolean;
  link?: string;
  soon?: string;
  builtLine?: boolean; // ai.moms micro-tool "Free to use · Built on Claude · No signup needed"
  aimoms?: boolean; // blue header gradient
};

type Section = {
  cat: string;
  label: React.ReactNode;
  labelHasEmoji?: boolean;
  note?: string;
  intro?: string; // for the ai.moms section
  cards: Card[];
};

const TM = () => <sup>&#8482;</sup>;

const ScoreBlock = ({ overall, tier, scores }: { overall: string; tier: string; scores: Score[] }) => (
  <div className="score-block">
    <div className="score-overall">
      <span className={`score-overall-num ${tier}`}>{overall}</span>
      <span className="score-overall-label">Score</span>
    </div>
    <div className="score-bars">
      {scores.map(([label, width, num]) => (
        <div className="score-row" key={label}>
          <span className="score-row-label">{label}</span>
          <div className="score-bar-track"><div className="score-bar-fill" style={{ width: `${width}%` }} /></div>
          <span className="score-row-num">{num}</span>
        </div>
      ))}
    </div>
  </div>
);

const builtLine = (
  <p className="card-builtline">
    <span className="dot">&middot;</span> Free to use &nbsp;<span className="dot">&middot;</span> Built on Claude &nbsp;<span className="dot">&middot;</span> No signup needed
  </p>
);

const ToolCard = ({ card }: { card: Card }) => (
  <div className="tk-card">
    <div className={`card-header${card.aimoms ? ' h-aimoms' : ''}`}>
      {card.badge && <span className={`badge ${card.badge.cls}`}>{card.badge.label}</span>}
      <div className="card-name">{card.name}</div>
      <div className="card-price">{card.price}</div>
    </div>
    <div className="card-body">
      <p className="card-tagline">{card.tagline}</p>
      {card.builtLine && builtLine}
      {card.scoreOverall && card.scores && (
        <ScoreBlock overall={card.scoreOverall.num} tier={card.scoreOverall.tier} scores={card.scores} />
      )}
      {card.reviewPending && <div className="card-review-pending">Full review and scoring coming soon</div>}
      {card.review && (
        <p className={`card-review${card.reviewMuted ? ' muted' : ''}`}>{card.review}</p>
      )}
      <div className="card-link-wrap">
        {card.link ? (
          <a href={card.link} target="_blank" rel="noopener noreferrer" className="card-link">Visit Site &#8594;</a>
        ) : (
          <span className="card-soon">{card.soon}</span>
        )}
      </div>
    </div>
  </div>
);

const sections: Section[] = [
  {
    cat: 'AIMOMS',
    label: <>&#9733; ai.moms<sup>&#8482;</sup> Micro-Tools</>,
    labelHasEmoji: true,
    intro: 'Free AI-powered tools built specifically for the invisible load of motherhood. No signup needed — just open and use.',
    cards: [
      {
        name: <>SafeSitter<TM /></>, price: 'Free', aimoms: true, builtLine: true,
        badge: { label: 'Coming Soon', cls: 'badge-soon' },
        tagline: 'Vet any babysitter in minutes. Public records, social media sweep, interview checklist, and an AI safety report — all in one place.',
        review: <><strong>What it does:</strong> Enter your sitter&apos;s name and social handles. SafeSitter&trade; instantly generates clickable search links to the national sex offender registry, court records, Google News, and all major social platforms — then walks you through an interview checklist and produces an AI safety assessment plus a ready-to-read reference call script.</>,
        soon: 'Coming Soon',
      },
      {
        name: <>Meal Planner<TM /></>, price: 'Free', aimoms: true, builtLine: true,
        badge: { label: 'Coming Soon', cls: 'badge-soon' },
        tagline: 'Family meal plan in 60 seconds. Picky eaters, allergies, busy weeknights — handled.',
        review: <><strong>What it does:</strong> Input your family&apos;s preferences, dietary needs, and what&apos;s in your fridge. Get a full week of dinners, a sorted grocery list, and prep instructions. Built on Claude AI.</>,
        soon: 'Coming Soon',
      },
      {
        name: <>Camp Finder<TM /></>, price: 'Free', aimoms: true, builtLine: true,
        badge: { label: 'Coming Soon', cls: 'badge-soon' },
        tagline: 'Find the perfect summer camp. AI-matched by interest, location, age, and budget.',
        review: <><strong>What it does:</strong> Answer a few questions about your child and get curated camp recommendations with registration links, pricing, and a comparison checklist. Covers day camps, sleepaway, specialty, and STEM.</>,
        soon: 'Coming Soon',
      },
      {
        name: <>The Mom Decoder<TM /></>, price: 'Free', aimoms: true, builtLine: true,
        badge: { label: 'Coming Soon', cls: 'badge-soon' },
        tagline: 'Paste any confusing school email, insurance form, or pediatrician note. Get plain English + action items.',
        review: 'Decodes school communications, medical jargon, and legal documents into clear action items. No more reading the same email four times.',
        reviewMuted: true,
        soon: 'Coming Spring 2026',
      },
      {
        name: <>School Year Planner<TM /></>, price: 'Free', aimoms: true, builtLine: true,
        badge: { label: 'Coming Soon', cls: 'badge-soon' },
        tagline: 'Back-to-school command center. Supplies, schedules, teacher info, and activity signups — organized.',
        review: 'AI-generated back-to-school checklist, supply lists by grade, and a printable first-week schedule.',
        reviewMuted: true,
        soon: 'Coming August 2026',
      },
      {
        name: <>Homework Helper<TM /></>, price: 'Free', aimoms: true, builtLine: true,
        badge: { label: 'Coming Soon', cls: 'badge-soon' },
        tagline: 'Stop doing your kid’s homework. Start teaching them how to think.',
        review: 'AI that coaches kids through problems with Socratic questioning instead of just giving answers. Ages 6–18.',
        reviewMuted: true,
        soon: 'Coming Fall 2026',
      },
    ],
  },
  {
    cat: 'BIG_PLATFORMS',
    label: 'The Big Platforms',
    note: 'The foundational AI platforms every mom should know. Sorted by overall mom-relevance score.',
    cards: [
      {
        name: 'Claude', price: 'Free / $20 mo', badge: { label: 'Our #1 Pick', cls: 'badge-top' },
        tagline: 'Your thinking partner. Best for nuanced conversations, hard decisions, and real context-keeping.',
        scoreOverall: { num: '9.4', tier: 'score-9' },
        scores: [['⚡ Ease', 90, 9], ['⏱ Time', 100, 10], ['👨‍👩‍👧 Family', 90, 9], ['💰 Value', 100, 10]],
        review: <><strong>What we think:</strong> Our #1 pick. Best for the hard stuff — parenting dilemmas, medical questions, school advocacy letters. Projects give it permanent memory of your family. The primary AI powering our course.</>,
        link: 'https://claude.ai',
      },
      {
        name: 'NotebookLM', price: 'Free',
        tagline: 'Upload any document and have a full conversation with it. School handbooks, IEPs, insurance policies.',
        scoreOverall: { num: '9.1', tier: 'score-9' },
        scores: [['⚡ Ease', 90, 9], ['⏱ Time', 90, 9], ['👨‍👩‍👧 Family', 90, 9], ['💰 Value', 100, 10]],
        review: <><strong>What we think:</strong> Completely free and mind-blowing. Upload school handbooks, medical records, work docs — ask anything. Audio Overview turns your documents into a podcast you can listen to on the go.</>,
        link: 'https://notebooklm.google.com',
      },
      {
        name: 'Perplexity', price: 'Free / $20 mo', badge: { label: '#1 for Research', cls: 'badge-top' },
        tagline: 'AI research that replaces Google. Real answers with sources you can actually verify.',
        scoreOverall: { num: '8.8', tier: 'score-8' },
        scores: [['⚡ Ease', 100, 10], ['⏱ Time', 90, 9], ['👨‍👩‍👧 Family', 80, 8], ['💰 Value', 80, 8]],
        review: <><strong>What we think:</strong> Stop Googling everything. Medical questions, product comparisons, school options — it synthesizes sources and cites everything. Collections keep your family research organized by topic.</>,
        link: 'https://perplexity.ai',
      },
      {
        name: 'ChatGPT', price: 'Free / $20 mo',
        tagline: 'The most versatile AI platform. Custom GPTs, image generation, voice mode, and document analysis.',
        scoreOverall: { num: '8.6', tier: 'score-8' },
        scores: [['⚡ Ease', 90, 9], ['⏱ Time', 90, 9], ['👨‍👩‍👧 Family', 80, 8], ['💰 Value', 80, 8]],
        review: <><strong>What we think:</strong> Still the most widely used AI and the best for Custom GPTs — personalized assistants loaded with your family&apos;s details. Free tier gets you started; Plus unlocks Custom GPTs and image generation.</>,
        link: 'https://chatgpt.com',
      },
      {
        name: 'Gemini', price: 'Free / $20 mo',
        tagline: 'Google’s AI. Lives inside Gmail, Docs, Sheets, and Calendar — where you already work.',
        scoreOverall: { num: '8.0', tier: 'score-8' },
        scores: [['⚡ Ease', 90, 9], ['⏱ Time', 80, 8], ['👨‍👩‍👧 Family', 70, 7], ['💰 Value', 80, 8]],
        review: <><strong>What we think:</strong> The power is the integration. Summarize emails, build spreadsheets in plain English, get meeting summaries in Google Meet. If you live in Google Workspace, Gemini is a natural upgrade.</>,
        link: 'https://gemini.google.com',
      },
      {
        name: 'Meta AI', price: 'Free',
        tagline: 'Built into WhatsApp, Instagram, and Facebook. AI where you already spend your time.',
        scoreOverall: { num: '6.8', tier: 'score-6' },
        scores: [['⚡ Ease', 100, 10], ['⏱ Time', 60, 6], ['👨‍👩‍👧 Family', 60, 6], ['💰 Value', 60, 6]],
        review: <><strong>What we think:</strong> Zero friction — it&apos;s right in the apps you&apos;re already in. Good for quick questions mid-conversation. Not a substitute for deeper AI work. The convenience is real; the depth isn&apos;t there yet.</>,
        link: 'https://ai.meta.com',
      },
      {
        name: 'Grok', price: 'Free / X Premium',
        tagline: 'xAI’s model with real-time access to X/Twitter data and breaking news.',
        scoreOverall: { num: '6.3', tier: 'score-6' },
        scores: [['⚡ Ease', 80, 8], ['⏱ Time', 60, 6], ['👨‍👩‍👧 Family', 50, 5], ['💰 Value', 60, 6]],
        review: <><strong>What we think:</strong> Strength is real-time info from live X posts. Not built for family life, but useful when you need to know what&apos;s happening right now. Still maturing — check back in 6 months.</>,
        link: 'https://x.ai/grok',
      },
      {
        name: 'Copilot', price: 'Free / Microsoft 365', badge: { label: 'Review Coming', cls: 'badge-new' },
        tagline: 'Microsoft’s AI built into Word, Excel, Outlook, and Teams.',
        reviewPending: true,
        review: 'If your work or kids’ school runs Microsoft 365, this is a powerful upgrade. Drafts emails, summarizes Word docs, builds Excel formulas in plain English. Review pending.',
        link: 'https://copilot.microsoft.com',
      },
    ],
  },
  {
    cat: 'PRODUCTIVITY',
    label: 'Productivity & Voice',
    note: 'Tools that give you back time at work and at home. Sorted by overall score.',
    cards: [
      {
        name: 'Wispr Flow', price: '$10 mo', badge: { label: 'We Use Daily', cls: 'badge-top' },
        tagline: 'AI voice-to-text that works everywhere on your computer. Talk instead of type.',
        scoreOverall: { num: '9.5', tier: 'score-9' },
        scores: [['⚡ Ease', 100, 10], ['⏱ Time', 100, 10], ['👨‍👩‍👧 Family', 90, 9], ['💰 Value', 90, 9]],
        review: <><strong>What we think:</strong> Changed how we work. Talk naturally, get clean formatted text anywhere — emails, Claude, Notion, anywhere on your screen. Perfect for the mom with thoughts but no free hands. We use it every single day.</>,
        link: 'https://wispr.ai',
      },
      {
        name: 'Granola', price: 'Freemium',
        tagline: 'AI meeting notes. Listens and creates perfect structured summaries automatically.',
        scoreOverall: { num: '9.0', tier: 'score-9' },
        scores: [['⚡ Ease', 100, 10], ['⏱ Time', 100, 10], ['👨‍👩‍👧 Family', 70, 7], ['💰 Value', 90, 9]],
        review: <><strong>What we think:</strong> Join a meeting, let Granola listen, walk away with perfect structured notes. No more frantic scribbling. Works with Zoom, Google Meet, and Teams. Also great for school meetings and IEP calls.</>,
        link: 'https://granola.so',
      },
      {
        name: 'Reclaim.ai', price: 'Freemium',
        tagline: 'AI calendar assistant that auto-schedules tasks, habits, focus time, and real breaks.',
        scoreOverall: { num: '8.5', tier: 'score-8' },
        scores: [['⚡ Ease', 80, 8], ['⏱ Time', 90, 9], ['👨‍👩‍👧 Family', 80, 8], ['💰 Value', 90, 9]],
        review: <><strong>What we think:</strong> Protects time for exercise, deep work, and real lunch breaks — then reschedules automatically when conflicts arise. For the mom whose calendar owns her, Reclaim fights back.</>,
        link: 'https://reclaim.ai',
      },
      {
        name: 'Notion AI', price: '$16 mo',
        tagline: 'AI second brain. Documents, databases, and notes — all searchable and AI-enhanced.',
        scoreOverall: { num: '8.3', tier: 'score-8' },
        scores: [['⚡ Ease', 70, 7], ['⏱ Time', 90, 9], ['👨‍👩‍👧 Family', 80, 8], ['💰 Value', 90, 9]],
        review: <><strong>What we think:</strong> Build your family command center — babysitter contacts, school info, medical records, all in one searchable place. Ask Notion AI a question and it finds the answer from everything you&apos;ve saved.</>,
        link: 'https://www.notion.so/product/ai',
      },
      {
        name: 'Otter.ai', price: 'Freemium',
        tagline: 'AI transcription and meeting assistant. Real-time notes, summaries, and action items.',
        scoreOverall: { num: '8.0', tier: 'score-8' },
        scores: [['⚡ Ease', 90, 9], ['⏱ Time', 80, 8], ['👨‍👩‍👧 Family', 70, 7], ['💰 Value', 80, 8]],
        review: <><strong>What we think:</strong> Great for work meetings, but we also use it for pediatrician appointments and school conferences. Never miss a detail when someone&apos;s talking fast. Free tier is genuinely generous.</>,
        link: 'https://otter.ai',
      },
      {
        name: 'Todoist', price: 'Freemium',
        tagline: 'Smart task manager with AI natural language input and smart scheduling.',
        scoreOverall: { num: '7.8', tier: 'score-7' },
        scores: [['⚡ Ease', 100, 10], ['⏱ Time', 80, 8], ['👨‍👩‍👧 Family', 60, 6], ['💰 Value', 80, 8]],
        review: <><strong>What we think:</strong> Type &quot;buy birthday present for Saturday&quot; and it creates the task with the right due date. AI understands how you naturally talk about tasks. Best starting task manager for the non-techy mom.</>,
        link: 'https://todoist.com',
      },
      {
        name: 'Motion', price: '$34 mo',
        tagline: 'AI project manager that builds and rebuilds your entire schedule automatically every day.',
        scoreOverall: { num: '7.5', tier: 'score-7' },
        scores: [['⚡ Ease', 60, 6], ['⏱ Time', 90, 9], ['👨‍👩‍👧 Family', 70, 7], ['💰 Value', 80, 8]],
        review: <><strong>What we think:</strong> Combines calendar, tasks, and project management and auto-reschedules everything when something runs long. Steeper learning curve and price — for the seriously overwhelmed working mom.</>,
        link: 'https://usemotion.com',
      },
      {
        name: 'Superhuman', price: '$25 mo',
        tagline: 'AI email client. Blazing fast with smart triage, drafting, and follow-up reminders.',
        scoreOverall: { num: '7.3', tier: 'score-7' },
        scores: [['⚡ Ease', 70, 7], ['⏱ Time', 90, 9], ['👨‍👩‍👧 Family', 50, 5], ['💰 Value', 80, 8]],
        review: <><strong>What we think:</strong> Genuinely transformative if email is drowning you. AI auto-triages your inbox, drafts replies, and reminds you to follow up. The $25/mo price and learning curve are real — but so is the payoff.</>,
        link: 'https://superhuman.com',
      },
    ],
  },
  {
    cat: 'FAMILY',
    label: 'Family & Scheduling',
    note: 'Apps built to tame the chaos of running a household. Sorted by overall score.',
    cards: [
      {
        name: 'Bumo', price: 'Free', badge: { label: 'Founder Pick', cls: 'badge-top' },
        tagline: 'Book childcare, camps, and activities on demand. The Airbnb for childcare — 17,000+ providers.',
        scoreOverall: { num: '9.2', tier: 'score-9' },
        scores: [['⚡ Ease', 90, 9], ['⏱ Time', 100, 10], ['👨‍👩‍👧 Family', 100, 10], ['💰 Value', 80, 8]],
        review: <><strong>What we think:</strong> Founded by moms, backed by $10M, already the largest instantly bookable childcare platform in the US. The upcoming AI assistant Bennie will make finding care as easy as texting a friend.</>,
        link: 'https://book.bumo.com',
      },
      {
        name: 'Jam', price: 'Free trial / then paid',
        tagline: 'Family calendar built by moms. Forward school emails, events auto-populate instantly.',
        scoreOverall: { num: '8.8', tier: 'score-8' },
        scores: [['⚡ Ease', 100, 10], ['⏱ Time', 90, 9], ['👨‍👩‍👧 Family', 90, 9], ['💰 Value', 70, 7]],
        review: <><strong>What we think:</strong> Forward your school newsletter to Jam, dates appear on your shared family calendar automatically. Built by moms who get the problem. Simple, effective, and completely free.</>,
        link: 'https://www.jamfamilycalendar.com',
      },
      {
        name: 'Aviva', price: 'Free',
        tagline: 'AI family calendar that scans your email and auto-creates events. Zero manual entry.',
        scoreOverall: { num: '8.5', tier: 'score-8' },
        scores: [['⚡ Ease', 90, 9], ['⏱ Time', 90, 9], ['👨‍👩‍👧 Family', 80, 8], ['💰 Value', 70, 7]],
        review: <><strong>What we think:</strong> Finds events buried in your inbox and calendars them automatically. For the mom who misses things because she never opened the email — this is your fix.</>,
        link: 'https://www.withaviva.com',
      },
      {
        name: 'Ohai', price: 'Free trial / $9.99 mo',
        tagline: 'AI home manager with smart shopping lists, tasks, and a daily morning brief.',
        scoreOverall: { num: '8.3', tier: 'score-8' },
        scores: [['⚡ Ease', 80, 8], ['⏱ Time', 90, 9], ['👨‍👩‍👧 Family', 80, 8], ['💰 Value', 80, 8]],
        review: <><strong>What we think:</strong> The morning summary of what&apos;s on your plate is genuinely useful. Shopping AI learns your family&apos;s patterns over time. A solid all-rounder that keeps improving.</>,
        link: 'https://ohai.ai',
      },
      {
        name: 'Honeydew', price: 'Freemium',
        tagline: 'AI family assistant with voice and photo input. Snap a school flyer, event gets added.',
        scoreOverall: { num: '8.0', tier: 'score-8' },
        scores: [['⚡ Ease', 90, 9], ['⏱ Time', 80, 8], ['👨‍👩‍👧 Family', 80, 8], ['💰 Value', 70, 7]],
        review: <><strong>What we think:</strong> Photograph a school flyer and the event gets added automatically. Voice and photo input make it feel natural and fast. Impressive feature count for a newer app.</>,
        link: 'https://www.gethoneydew.app',
      },
      {
        name: 'Cozi', price: 'Free / $29.99 yr',
        tagline: 'The OG family organizer. Shared calendar, to-do lists, and meal planning — all in one.',
        scoreOverall: { num: '7.8', tier: 'score-7' },
        scores: [['⚡ Ease', 100, 10], ['⏱ Time', 70, 7], ['👨‍👩‍👧 Family', 90, 9], ['💰 Value', 50, 5]],
        review: <><strong>What we think:</strong> Still reliable and loved by millions of families. Color-coded by family member, shared grocery lists, and a great agenda view. The AI features are basic, but the core product works and everyone can use it.</>,
        link: 'https://www.cozi.com',
      },
      {
        name: 'Hiava', price: 'Free', badge: { label: 'New', cls: 'badge-new' },
        tagline: 'AI-powered family life platform designed to reduce the mental load of parenting.',
        scoreOverall: { num: '7.5', tier: 'score-7' },
        scores: [['⚡ Ease', 80, 8], ['⏱ Time', 70, 7], ['👨‍👩‍👧 Family', 80, 8], ['💰 Value', 70, 7]],
        review: <><strong>What we think:</strong> A newer entrant built squarely around reducing mental load — right in our wheelhouse. Covers family tasks, schedules, and coordination with an AI layer that learns how your household operates. One to watch.</>,
        link: 'https://hiava.xyz',
      },
      {
        name: 'FamilyWall', price: 'Free / $4.99 mo',
        tagline: 'All-in-one family hub: calendar, tasks, messages, location sharing, and memories.',
        scoreOverall: { num: '7.3', tier: 'score-7' },
        scores: [['⚡ Ease', 80, 8], ['⏱ Time', 70, 7], ['👨‍👩‍👧 Family', 80, 8], ['💰 Value', 60, 6]],
        review: <><strong>What we think:</strong> Good for families who want everything in one place. Location sharing for kids, private messaging, and a family photo wall all in one app. Especially useful for extended family coordination.</>,
        link: 'https://www.familywall.com',
      },
      {
        name: 'Skylight Cal', price: '$99 yr',
        tagline: 'AI-connected touchscreen family command center for your kitchen wall.',
        scoreOverall: { num: '7.0', tier: 'score-7' },
        scores: [['⚡ Ease', 80, 8], ['⏱ Time', 70, 7], ['👨‍👩‍👧 Family', 80, 8], ['💰 Value', 50, 5]],
        review: <><strong>What we think:</strong> The physical calendar your family will actually look at. Syncs with Google Calendar. Kids can check off chores. The AI features are still evolving but the hardware is genuinely excellent. Worth it if your family is visual.</>,
        link: 'https://www.skylightframe.com',
      },
      {
        name: 'Milo', price: 'Freemium',
        tagline: 'AI collaborator for managing the invisible load of running a family.',
        scoreOverall: { num: '6.5', tier: 'score-6' },
        scores: [['⚡ Ease', 70, 7], ['⏱ Time', 60, 6], ['👨‍👩‍👧 Family', 80, 8], ['💰 Value', 50, 5]],
        review: <><strong>What we think:</strong> They understand the invisible load problem — which earns immediate points. The product is still finding its footing. Mission is right, execution needs work. Worth revisiting as it matures.</>,
        link: 'https://www.joinmilo.com',
      },
    ],
  },
  {
    cat: 'MEAL',
    label: 'Meal & Nutrition',
    note: 'From weekly planning to what’s-in-the-fridge moments. Sorted by overall score.',
    cards: [
      {
        name: 'Ollie', price: 'Freemium', badge: { label: 'Top Pick', cls: 'badge-top' },
        tagline: 'AI meal planner that learns your family. Auto grocery lists organized by store aisle.',
        scoreOverall: { num: '9.3', tier: 'score-9' },
        scores: [['⚡ Ease', 90, 9], ['⏱ Time', 100, 10], ['👨‍👩‍👧 Family', 100, 10], ['💰 Value', 80, 8]],
        review: <><strong>What we think:</strong> The one. Learns what your family actually eats, builds plans around your schedule, and generates grocery lists organized by store section. Meal planning as a conversation, not a chore.</>,
        link: 'https://ollie.ai',
      },
      {
        name: 'Samsung Food', price: 'Free / $60 yr',
        tagline: 'AI meal planner with 160K+ recipes, personalized plans, and grocery delivery. Formerly Whisk.',
        scoreOverall: { num: '8.3', tier: 'score-8' },
        scores: [['⚡ Ease', 80, 8], ['⏱ Time', 80, 8], ['👨‍👩‍👧 Family', 80, 8], ['💰 Value', 90, 9]],
        review: <><strong>What we think:</strong> Massive recipe library and solid AI meal planning. Shared grocery lists work well for families. Less mom-specific than Ollie but more sheer volume. Free tier is very generous — worth trying first.</>,
        link: 'https://samsungfood.com',
      },
      {
        name: 'Hungryroot', price: 'From $69 wk',
        tagline: 'AI grocery and meal kit service. Plans your week and delivers all the ingredients.',
        scoreOverall: { num: '8.0', tier: 'score-8' },
        scores: [['⚡ Ease', 90, 9], ['⏱ Time', 90, 9], ['👨‍👩‍👧 Family', 80, 8], ['💰 Value', 50, 5]],
        review: <><strong>What we think:</strong> AI learns your taste profile and automatically fills your weekly cart. The overlap between meal planning and grocery delivery is a genuine time-saver — though the cost adds up quickly for larger families.</>,
        link: 'https://www.hungryroot.com',
      },
      {
        name: 'Cronometer', price: 'Free / $9.99 mo',
        tagline: 'Precision nutrition tracking. Know exactly what your family is eating and what’s missing.',
        scoreOverall: { num: '7.5', tier: 'score-7' },
        scores: [['⚡ Ease', 60, 6], ['⏱ Time', 70, 7], ['👨‍👩‍👧 Family', 80, 8], ['💰 Value', 90, 9]],
        review: <><strong>What we think:</strong> The gold standard for nutrition tracking — especially families with dietary needs, kids with allergies, or postpartum moms tracking iron and folate. More detailed than MyFitnessPal. Not casual, but powerful.</>,
        link: 'https://cronometer.com',
      },
    ],
  },
  {
    cat: 'KIDS',
    label: 'Kids & Education',
    note: 'AI tools for learning, safety, and raising capable kids. Sorted by overall score.',
    cards: [
      {
        name: 'Bark', price: '$14 mo', badge: { label: 'Top Pick', cls: 'badge-top' },
        tagline: 'AI child safety monitor. Alerts you to cyberbullying, predators, and mental health concerns across 30+ apps.',
        scoreOverall: { num: '9.5', tier: 'score-9' },
        scores: [['⚡ Ease', 90, 9], ['⏱ Time', 100, 10], ['👨‍👩‍👧 Family', 100, 10], ['💰 Value', 90, 9]],
        review: <><strong>What we think:</strong> Monitors 30+ platforms without reading every message — AI alerts you only when something concerning is detected. Respects kids&apos; privacy while keeping them genuinely safe. Worth every cent.</>,
        link: 'https://www.bark.us',
      },
      {
        name: 'Goally', price: '$9.99 mo', badge: { label: 'Top Pick', cls: 'badge-top' },
        tagline: 'Visual routine app for kids with ADHD, autism, and executive function challenges.',
        scoreOverall: { num: '9.2', tier: 'score-9' },
        scores: [['⚡ Ease', 90, 9], ['⏱ Time', 100, 10], ['👨‍👩‍👧 Family', 100, 10], ['💰 Value', 80, 8]],
        review: <><strong>What we think:</strong> AI-built visual schedules that reduce morning meltdowns and after-school battles. Works for all kids but genuinely life-changing for neurodiverse families. Therapist recommended, mom-loved.</>,
        link: 'https://getgoally.com',
      },
      {
        name: 'Khanmigo', price: 'Free for students',
        tagline: 'Khan Academy’s AI tutor. Guides kids through problems without just giving the answer.',
        scoreOverall: { num: '9.0', tier: 'score-9' },
        scores: [['⚡ Ease', 90, 9], ['⏱ Time', 90, 9], ['👨‍👩‍👧 Family', 90, 9], ['💰 Value', 90, 9]],
        review: <><strong>What we think:</strong> The right way to use AI for homework — asks questions instead of providing answers, building real understanding. Works across all grades and subjects. Parents get progress insights. Free and exceptional.</>,
        link: 'https://www.khanacademy.org/khanmigo',
      },
      {
        name: 'Synthesis', price: '$35 mo',
        tagline: 'AI-powered math tutor that adapts in real time to how your child thinks. Originally built for SpaceX.',
        scoreOverall: { num: '8.8', tier: 'score-8' },
        scores: [['⚡ Ease', 80, 8], ['⏱ Time', 90, 9], ['👨‍👩‍👧 Family', 90, 9], ['💰 Value', 80, 8]],
        review: <><strong>What we think:</strong> Built at SpaceX&apos;s Ad Astra school and now available to everyone. Personalized math curriculum that adjusts in real time. Worth every penny for math-anxious kids or any child who needs a different pace.</>,
        link: 'https://www.synthesis.com',
      },
      {
        name: 'Readability', price: '$9.99 mo',
        tagline: 'AI reading tutor that listens to your child read aloud and gives real-time coaching.',
        scoreOverall: { num: '8.5', tier: 'score-8' },
        scores: [['⚡ Ease', 90, 9], ['⏱ Time', 80, 8], ['👨‍👩‍👧 Family', 90, 9], ['💰 Value', 80, 8]],
        review: <><strong>What we think:</strong> For early readers, this is remarkable. It listens as your child reads aloud, catches mispronunciations, and adapts difficulty level. Parent dashboard shows real progress over time. One of the most parent-friendly EdTech apps we&apos;ve seen.</>,
        link: 'https://www.readability.com',
      },
      {
        name: 'IXL Learning', price: '$9.95 mo',
        tagline: 'AI-adaptive practice across math, ELA, science, and social studies. K–12.',
        scoreOverall: { num: '8.3', tier: 'score-8' },
        scores: [['⚡ Ease', 80, 8], ['⏱ Time', 80, 8], ['👨‍👩‍👧 Family', 90, 9], ['💰 Value', 80, 8]],
        review: <><strong>What we think:</strong> Used by 14 million students. AI adjusts difficulty in real time, identifies gaps, and gives parents detailed progress reports. Aligns with state standards. Trusted by teachers and parents alike.</>,
        link: 'https://www.ixl.com',
      },
      {
        name: 'Duolingo', price: 'Free / $7 mo',
        tagline: 'AI language learning for the whole family. 40+ languages, 5 minutes a day.',
        scoreOverall: { num: '8.0', tier: 'score-8' },
        scores: [['⚡ Ease', 100, 10], ['⏱ Time', 60, 6], ['👨‍👩‍👧 Family', 80, 8], ['💰 Value', 90, 9]],
        review: <><strong>What we think:</strong> Now deeply AI-powered with personalized lesson paths and an AI conversation partner. Family plan lets everyone learn together. Great for bilingual households, pre-trip prep, or kids learning a second language.</>,
        link: 'https://www.duolingo.com',
      },
      {
        name: 'Bedtimestory.ai', price: 'Freemium', badge: { label: 'New', cls: 'badge-new' },
        tagline: 'AI bedtime stories personalized with your child’s name, interests, and the values you want to reinforce.',
        scoreOverall: { num: '7.8', tier: 'score-7' },
        scores: [['⚡ Ease', 100, 10], ['⏱ Time', 70, 7], ['👨‍👩‍👧 Family', 90, 9], ['💰 Value', 50, 5]],
        review: <><strong>What we think:</strong> Kids light up when they&apos;re the hero of the story. Choose themes — courage, kindness, processing a big change — and get a custom story in seconds. Wonderful for anxious bedtimes or helping kids work through emotions.</>,
        link: 'https://www.bedtimestory.ai',
      },
    ],
  },
  {
    cat: 'HEALTH',
    label: 'Health & Wellness',
    note: 'AI tools that take care of the person taking care of everyone else. Sorted by overall score.',
    cards: [
      {
        name: 'Oura Ring', price: '$299 + $5.99 mo', badge: { label: 'Top Pick', cls: 'badge-top' },
        tagline: 'AI-powered smart ring tracking sleep, recovery, readiness, and hormonal cycles.',
        scoreOverall: { num: '9.3', tier: 'score-9' },
        scores: [['⚡ Ease', 90, 9], ['⏱ Time', 90, 9], ['👨‍👩‍👧 Family', 90, 9], ['💰 Value', 100, 10]],
        review: <><strong>What we think:</strong> Especially powerful for women. Tracks cycle phases and shows how they affect your energy and readiness. The AI Advisor explains your data in plain English. Our top wellness hardware pick for moms.</>,
        link: 'https://ouraring.com',
      },
      {
        name: 'Hinge Health', price: 'Often employer-covered', badge: { label: 'Top Pick', cls: 'badge-top' },
        tagline: 'AI physical therapy for back pain, knee pain, and joint issues. No office visit required.',
        scoreOverall: { num: '9.0', tier: 'score-9' },
        scores: [['⚡ Ease', 90, 9], ['⏱ Time', 90, 9], ['👨‍👩‍👧 Family', 80, 8], ['💰 Value', 100, 10]],
        review: <><strong>What we think:</strong> If your employer offers it — use it immediately. AI-guided PT exercises on your schedule. For moms with postpartum back pain or decades of carrying children. Often 100% covered by insurance.</>,
        link: 'https://www.hingehealth.com',
      },
      {
        name: 'WHOOP', price: '$30 mo (hardware included)',
        tagline: 'AI health coach that tracks sleep, recovery, and stress. Tells you what your body actually needs.',
        scoreOverall: { num: '8.8', tier: 'score-8' },
        scores: [['⚡ Ease', 80, 8], ['⏱ Time', 90, 9], ['👨‍👩‍👧 Family', 80, 8], ['💰 Value', 100, 10]],
        review: <><strong>What we think:</strong> The AI Coach answers questions about your own data. &quot;Why am I exhausted?&quot; gets a science-backed answer. For moms running on empty, this replaces guesswork with actual data about what your body needs.</>,
        link: 'https://www.whoop.com',
      },
      {
        name: 'Calm', price: '$69.99 yr',
        tagline: 'Meditation, sleep stories, and mental wellness for the whole family.',
        scoreOverall: { num: '8.3', tier: 'score-8' },
        scores: [['⚡ Ease', 100, 10], ['⏱ Time', 80, 8], ['👨‍👩‍👧 Family', 80, 8], ['💰 Value', 70, 7]],
        review: <><strong>What we think:</strong> Gold standard for sleep and stress management. The kids&apos; section is excellent — age-appropriate mindfulness your whole family can use. Even 5 minutes makes a real difference when you&apos;re running on nothing.</>,
        link: 'https://www.calm.com',
      },
      {
        name: 'Noom', price: 'From $70 mo',
        tagline: 'AI wellness program that addresses the psychology of eating alongside the nutrition.',
        scoreOverall: { num: '7.8', tier: 'score-7' },
        scores: [['⚡ Ease', 80, 8], ['⏱ Time', 70, 7], ['👨‍👩‍👧 Family', 60, 6], ['💰 Value', 100, 10]],
        review: <><strong>What we think:</strong> Approaches health through behavioral psychology — the why behind eating patterns. AI coach daily check-ins keep you accountable without shame. Good for postpartum and high-stress periods. Pricey but committed.</>,
        link: 'https://www.noom.com',
      },
      {
        name: 'Woebot', price: 'Free',
        tagline: 'AI mental health companion using clinically-validated CBT techniques. Available at 2am.',
        scoreOverall: { num: '7.5', tier: 'score-7' },
        scores: [['⚡ Ease', 100, 10], ['⏱ Time', 70, 7], ['👨‍👩‍👧 Family', 50, 5], ['💰 Value', 80, 8]],
        review: <><strong>What we think:</strong> Not a replacement for therapy — a supplement for the 2am spiral when your therapist isn&apos;t available. Built on Stanford-validated CBT techniques. Free, private, and genuinely helpful for anxious moments.</>,
        link: 'https://woebothealth.com',
      },
    ],
  },
  {
    cat: 'CREATIVE',
    label: 'Creative & Visual',
    note: 'AI tools for content, design, and preserving family memories. Sorted by overall score.',
    cards: [
      {
        name: 'Canva AI', price: 'Free / $15 mo', badge: { label: 'Top Pick', cls: 'badge-top' },
        tagline: 'AI design platform. Create anything from birthday invites to professional presentations — in minutes.',
        scoreOverall: { num: '9.5', tier: 'score-9' },
        scores: [['⚡ Ease', 100, 10], ['⏱ Time', 100, 10], ['👨‍👩‍👧 Family', 90, 9], ['💰 Value', 90, 9]],
        review: <><strong>What we think:</strong> Magic Design generates full presentations from a prompt. Magic Write drafts copy. Magic Media creates images and videos. The most versatile creative tool for the non-designer who needs to look polished and professional.</>,
        link: 'https://www.canva.com/ai-image-generator/',
      },
      {
        name: 'Adobe Firefly', price: 'Freemium / Adobe CC',
        tagline: 'Adobe’s AI image and video generator. Built into Photoshop and Illustrator — commercially safe.',
        scoreOverall: { num: '8.8', tier: 'score-8' },
        scores: [['⚡ Ease', 80, 8], ['⏱ Time', 90, 9], ['👨‍👩‍👧 Family', 80, 8], ['💰 Value', 100, 10]],
        review: <><strong>What we think:</strong> Generative Fill in Photoshop is the most practical AI photo tool Adobe has ever shipped. Remove backgrounds, extend images, fix photos from the wrong angle. Great for moms creating content or managing memories.</>,
        link: 'https://firefly.adobe.com',
      },
      {
        name: 'Midjourney', price: '$10 mo',
        tagline: 'The gold standard AI image generator. Photorealistic to fine art — all from text prompts.',
        scoreOverall: { num: '8.3', tier: 'score-8' },
        scores: [['⚡ Ease', 60, 6], ['⏱ Time', 90, 9], ['👨‍👩‍👧 Family', 90, 9], ['💰 Value', 90, 9]],
        review: <><strong>What we think:</strong> For printable wall art, custom storybook illustrations for kids, or professional-looking content imagery. The quality still leads the industry — but there is a learning curve to prompting well.</>,
        link: 'https://www.midjourney.com',
      },
      {
        name: 'Motif', price: 'From $14 book',
        tagline: 'AI photo book creator. Upload your photos, get a beautifully designed book in minutes.',
        scoreOverall: { num: '8.0', tier: 'score-8' },
        scores: [['⚡ Ease', 90, 9], ['⏱ Time', 90, 9], ['👨‍👩‍👧 Family', 100, 10], ['💰 Value', 50, 5]],
        review: <><strong>What we think:</strong> AI selects your best photos, designs the layouts, and suggests captions. The family photo books you keep meaning to make — done in 20 minutes. Softcover books start at $13.99; hardcover from $29.99. Gorgeous print quality.</>,
        link: 'https://www.motifphotos.com',
      },
      {
        name: 'Descript', price: 'Freemium / $24 mo',
        tagline: 'AI video and podcast editor. Edit video like a Word doc — just delete the words you don’t want.',
        scoreOverall: { num: '7.8', tier: 'score-7' },
        scores: [['⚡ Ease', 70, 7], ['⏱ Time', 90, 9], ['👨‍👩‍👧 Family', 60, 6], ['💰 Value', 80, 8]],
        review: <><strong>What we think:</strong> For moms building content businesses — this is how you edit video without learning video editing. Transcribes your footage, you delete the words you don&apos;t want, it edits the video. Genuinely magical if you create content.</>,
        link: 'https://www.descript.com',
      },
    ],
  },
  {
    cat: 'FINANCE',
    label: 'Money & Finance',
    note: 'AI tools to get your family’s finances working for you. Sorted by overall score.',
    cards: [
      {
        name: 'Greenlight', price: '$5.99 mo', badge: { label: 'Top Pick', cls: 'badge-top' },
        tagline: 'AI-assisted kids’ debit card and financial education. Teach money while they spend it.',
        scoreOverall: { num: '9.3', tier: 'score-9' },
        scores: [['⚡ Ease', 90, 9], ['⏱ Time', 90, 9], ['👨‍👩‍👧 Family', 100, 10], ['💰 Value', 90, 9]],
        review: <><strong>What we think:</strong> The best way to teach kids about money in real time. Give chores, pay allowance digitally, set savings goals, even invest real stocks. Parents approve every purchase. Financial literacy that actually sticks.</>,
        link: 'https://greenlight.com',
      },
      {
        name: 'Copilot Money', price: '$13 mo',
        tagline: 'AI-powered personal finance with smart budgets, spending insights, and net worth tracking.',
        scoreOverall: { num: '9.0', tier: 'score-9' },
        scores: [['⚡ Ease', 90, 9], ['⏱ Time', 90, 9], ['👨‍👩‍👧 Family', 80, 8], ['💰 Value', 100, 10]],
        review: <><strong>What we think:</strong> The Mint replacement we actually like. Beautiful interface, AI detects unusual spending, and budget categories that make sense for real families. The best personal finance app available right now.</>,
        link: 'https://copilot.money',
      },
      {
        name: 'Monarch Money', price: '$14.99 mo',
        tagline: 'Collaborative household finances. Both partners see everything in one place — no more money surprises.',
        scoreOverall: { num: '8.3', tier: 'score-8' },
        scores: [['⚡ Ease', 80, 8], ['⏱ Time', 80, 8], ['👨‍👩‍👧 Family', 90, 9], ['💰 Value', 80, 8]],
        review: <><strong>What we think:</strong> Built specifically for couples managing household finances together. AI-powered spending insights surface patterns you didn&apos;t notice. The shared financial dashboard finally gets both partners on the same page.</>,
        link: 'https://www.monarchmoney.com',
      },
      {
        name: 'YNAB', price: '$14.99 mo',
        tagline: 'Zero-based budgeting with AI-assisted categorization. Every dollar has a job.',
        scoreOverall: { num: '8.0', tier: 'score-8' },
        scores: [['⚡ Ease', 60, 6], ['⏱ Time', 80, 8], ['👨‍👩‍👧 Family', 90, 9], ['💰 Value', 90, 9]],
        review: <><strong>What we think:</strong> The gold standard for family budgets. The &quot;every dollar has a job&quot; philosophy genuinely changes spending behavior. Steep learning curve but massive payoff. AI now handles most of the boring categorization work.</>,
        link: 'https://www.ynab.com',
      },
    ],
  },
  {
    cat: 'HOME',
    label: 'Home & Errands',
    note: 'AI tools that handle the household to-do list so you don’t have to. Sorted by overall score.',
    cards: [
      {
        name: 'Instacart AI', price: '$9.99 mo', badge: { label: 'Top Pick', cls: 'badge-top' },
        tagline: 'AI grocery assistant that builds lists from recipes and auto-adds your staples.',
        scoreOverall: { num: '9.0', tier: 'score-9' },
        scores: [['⚡ Ease', 100, 10], ['⏱ Time', 100, 10], ['👨‍👩‍👧 Family', 90, 9], ['💰 Value', 70, 7]],
        review: <><strong>What we think:</strong> Caper AI asks what you&apos;re cooking and builds your shopping list automatically. &quot;Ask Instacart&quot; suggests recipes based on what&apos;s on sale at your local store. The time savings are genuinely real — and addictive.</>,
        link: 'https://www.instacart.com',
      },
      {
        name: 'Homey', price: 'Freemium',
        tagline: 'AI-powered chore chart and allowance system. Kids actually engage because it’s gamified.',
        scoreOverall: { num: '8.8', tier: 'score-8' },
        scores: [['⚡ Ease', 90, 9], ['⏱ Time', 90, 9], ['👨‍👩‍👧 Family', 100, 10], ['💰 Value', 70, 7]],
        review: <><strong>What we think:</strong> Assign chores, track completions with photo confirmation, and manage allowance all in one place. Kids stay motivated because it gamifies responsibilities. One of the best chore systems we&apos;ve found for families.</>,
        link: 'https://www.homeyapp.net',
      },
      {
        name: 'TaskRabbit', price: 'Pay per task',
        tagline: 'Hire local help for anything: furniture assembly, home repairs, cleaning, moving help.',
        scoreOverall: { num: '8.5', tier: 'score-8' },
        scores: [['⚡ Ease', 90, 9], ['⏱ Time', 100, 10], ['👨‍👩‍👧 Family', 80, 8], ['💰 Value', 70, 7]],
        review: <><strong>What we think:</strong> The AI matching has gotten very good at finding the right tasker for the right job quickly. Stop putting off that furniture assembly or home project — it&apos;s done in hours and costs less than the stress of DIY.</>,
        link: 'https://www.taskrabbit.com',
      },
      {
        name: 'Thumbtack', price: 'Free to search',
        tagline: 'AI-powered home services marketplace. Find and book vetted local pros for any home project.',
        scoreOverall: { num: '8.3', tier: 'score-8' },
        scores: [['⚡ Ease', 90, 9], ['⏱ Time', 90, 9], ['👨‍👩‍👧 Family', 70, 7], ['💰 Value', 80, 8]],
        review: <><strong>What we think:</strong> Describe your project and get matched with vetted local pros instantly. The AI cost estimator tells you what&apos;s fair before you reach out. Excellent for first-time homeowners or anyone who doesn&apos;t know what things should cost.</>,
        link: 'https://www.thumbtack.com',
      },
      {
        name: 'Myne', price: 'Free / $49.99 yr',
        tagline: 'AI home inventory tracker. Snap a photo, AI identifies the item, estimates its value, and catalogs everything.',
        scoreOverall: { num: '7.8', tier: 'score-7' },
        scores: [['⚡ Ease', 90, 9], ['⏱ Time', 80, 8], ['👨‍👩‍👧 Family', 60, 6], ['💰 Value', 80, 8]],
        review: <><strong>What we think:</strong> Photograph your belongings and the AI identifies what it is, categorizes it, and estimates the replacement value. Invaluable for insurance claims, moving, and knowing what you actually own. Free tier covers most households.</>,
        link: 'https://getmyne.app',
      },
    ],
  },
  {
    cat: 'TRAVEL',
    label: 'Travel & Activities',
    note: 'Plan family trips and adventures without the research rabbit hole. Sorted by overall score.',
    cards: [
      {
        name: 'Wanderlog', price: 'Free / $4.99 mo', badge: { label: 'Top Pick', cls: 'badge-top' },
        tagline: 'AI trip planner that turns inspiration into full family itineraries. Collaborative and shareable.',
        scoreOverall: { num: '9.3', tier: 'score-9' },
        scores: [['⚡ Ease', 90, 9], ['⏱ Time', 100, 10], ['👨‍👩‍👧 Family', 100, 10], ['💰 Value', 80, 8]],
        review: <><strong>What we think:</strong> AI generates full itineraries from destination + days + interests. Hotel confirmations import automatically. Share the plan with your partner, family, or grandparents who are joining. We used this to plan our France trip.</>,
        link: 'https://wanderlog.com',
      },
      {
        name: 'Airbnb', price: 'Free to search', badge: { label: 'New AI Features', cls: 'badge-new' },
        tagline: 'AI search that actually understands "5 bedrooms, pool, near beach, kid-friendly" — and delivers.',
        scoreOverall: { num: '9.0', tier: 'score-9' },
        scores: [['⚡ Ease', 100, 10], ['⏱ Time', 90, 9], ['👨‍👩‍👧 Family', 90, 9], ['💰 Value', 80, 8]],
        review: <><strong>What we think:</strong> The new AI search understands complex family needs. Filter by cribs, high chairs, pool fences, and proximity to family attractions. AI summarizes host reviews by topic so you don&apos;t read 200 reviews to find the one about noise.</>,
        link: 'https://www.airbnb.com',
      },
      {
        name: 'TripIt', price: 'Free / $49 yr',
        tagline: 'Forward any travel confirmation email and it builds your complete master itinerary automatically.',
        scoreOverall: { num: '8.5', tier: 'score-8' },
        scores: [['⚡ Ease', 100, 10], ['⏱ Time', 90, 9], ['👨‍👩‍👧 Family', 80, 8], ['💰 Value', 70, 7]],
        review: <><strong>What we think:</strong> Forward flights, hotels, restaurants — it assembles your full trip plan automatically. Pro version adds flight alerts, seat tracking, and refund notifications. The organizational layer that makes family travel sane.</>,
        link: 'https://www.tripit.com',
      },
      {
        name: 'Roadtrippers', price: 'Freemium / $8.99 mo',
        tagline: 'AI road trip planner. Discovers hidden gems, quirky stops, and family adventures along any route.',
        scoreOverall: { num: '8.3', tier: 'score-8' },
        scores: [['⚡ Ease', 90, 9], ['⏱ Time', 90, 9], ['👨‍👩‍👧 Family', 90, 9], ['💰 Value', 60, 6]],
        review: <><strong>What we think:</strong> Enter your route and it surfaces the world&apos;s largest roadside attraction database with AI suggestions. The family-friendly filter is genuinely useful. Kids love the unexpected stops — and so do we.</>,
        link: 'https://roadtrippers.com',
      },
      {
        name: 'Komoot', price: 'Free / $5 mo',
        tagline: 'AI outdoor adventure planner for hiking, biking, and family nature days.',
        scoreOverall: { num: '7.8', tier: 'score-7' },
        scores: [['⚡ Ease', 80, 8], ['⏱ Time', 80, 8], ['👨‍👩‍👧 Family', 80, 8], ['💰 Value', 70, 7]],
        review: <><strong>What we think:</strong> Find kid-appropriate hikes and bike trails with AI-suggested routes based on fitness level and stroller or carrier compatibility. Planning a nature day doesn&apos;t have to mean an hour of research.</>,
        link: 'https://www.komoot.com',
      },
    ],
  },
];

const filters: { key: string; label: React.ReactNode }[] = [
  { key: 'ALL', label: 'All Tools' },
  { key: 'AIMOMS', label: <>&#11088; ai.moms<sup>&#8482;</sup> Tools</> },
  { key: 'BIG_PLATFORMS', label: 'Big Platforms' },
  { key: 'PRODUCTIVITY', label: 'Productivity & Voice' },
  { key: 'FAMILY', label: 'Family & Scheduling' },
  { key: 'MEAL', label: 'Meal & Nutrition' },
  { key: 'KIDS', label: 'Kids & Education' },
  { key: 'HEALTH', label: 'Health & Wellness' },
  { key: 'CREATIVE', label: 'Creative & Visual' },
  { key: 'FINANCE', label: 'Money & Finance' },
  { key: 'HOME', label: 'Home & Errands' },
  { key: 'TRAVEL', label: 'Travel & Activities' },
];

export default function ToolkitClient() {
  const [active, setActive] = useState('ALL');

  return (
    <>
      {/* FILTER BAR */}
      <section className="tk-filter-bar">
        <div className="tk-filters">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              className={`tk-btn${active === f.key ? ' active' : ''}`}
              onClick={() => setActive(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      <div className="tk-sections">
        {sections.map((sec) => (
          <div
            key={sec.cat}
            className={`tk-section${active !== 'ALL' && active !== sec.cat ? ' hidden' : ''}`}
          >
            <div className="sec-header">
              <div className="sec-header-row">
                <div>
                  <div className={`sec-label${sec.labelHasEmoji ? ' has-emoji' : ''}`}>{sec.label}</div>
                  <div className="sec-bar" />
                </div>
              </div>
              {sec.intro && <p className="sec-intro">{sec.intro}</p>}
              {sec.note && <p className="sec-note">{sec.note}</p>}
            </div>
            <div className="tk-grid">
              {sec.cards.map((card, i) => (
                <ToolCard card={card} key={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
