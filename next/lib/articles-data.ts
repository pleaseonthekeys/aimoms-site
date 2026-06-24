// Temporary article data source for the migration (Phase 2). Copied verbatim from the
// static site's articles-data.js. Phase 3 moves all 43 articles into Supabase.
export type ArticleBlock = {
  type: string;
  text?: string;
  src?: string;
  alt?: string;
  label?: string;
};
export type ArticleCta = { type: string; label?: string; href?: string };
export type Article = {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  readTime: string;
  heroImage: string;
  heroAlt: string;
  cta: ArticleCta;
  body: ArticleBlock[];
};

export const ARTICLES: Record<string, Article> = {

  // ═══════════════════════════════════
  // AI 101
  // ═══════════════════════════════════

  "start-here": {
    id: "start-here",
    category: "AI 101",
    title: "New to AI? Start Here — Seriously, Right Here.",
    subtitle: "No jargon. No overwhelm. Just the clearest starting point for mothers who are ready.",
    readTime: "4 min",
    heroImage: "img-unsplash-21.jpg",
    heroAlt: "Woman at kitchen table with laptop and coffee, looking calm and focused",
    cta: { type: "course", label: "Start the Course →", href: "index.html" },
    body: [
      { type: "intro", text: "You keep hearing about AI. Your friends are using it. Your coworkers are using it. And you're still not entirely sure what it even is — or if it's actually worth your time. Here's the honest answer: yes. But only if you start right." },
      { type: "image", src: "/img/articles/photo-1484480974693-6ca0a78fb36b-w800.jpg", alt: "Woman smiling at phone, relaxed and curious" },
      { type: "h2", text: "First: What Is AI, Actually?" },
      { type: "text", text: "AI — artificial intelligence — is software that can understand language, generate text, answer questions, and help you think. The version you care about right now is called a Large Language Model (LLM). The most well-known ones are Claude, ChatGPT, and Gemini. Think of them less like a search engine and more like a very smart, very available assistant who never gets tired and never judges you." },
      { type: "text", text: "You don't type in keywords and get links. You have a conversation. You explain what you need, and it helps you get it done." },
      { type: "pullquote", text: "\"It's not about being tech-savvy. It's about knowing what to ask for.\"" },
      { type: "h2", text: "The One Thing That Makes AI Work For You" },
      { type: "text", text: "The quality of your output depends almost entirely on the quality of your input. This is called a prompt — and learning to write a good one is the single most valuable AI skill you can develop. We teach a framework called RCTF: Role, Context, Task, Format. More on that in our prompting article — but for now, just know: the more specific you are, the better it works." },
      { type: "prompt", label: "Try this right now", text: "Act as a family logistics expert. I'm a working mom with two kids, ages 7 and 10. Help me create a simple weekday morning routine that gets everyone out the door by 7:45am with no yelling. Format it as a checklist by person." },
      { type: "h2", text: "Where to Start (For Real)" },
      { type: "text", text: "Step 1: Go to claude.ai and create a free account. Step 2: Type something you actually need help with today — not a test, a real task. A permission slip. A birthday party idea. A difficult email to your boss. Step 3: See what happens." },
      { type: "text", text: "The mothers who get the most out of AI aren't the most technical. They're the ones who stopped overthinking it and just started talking to it." },
      { type: "h2", text: "What AI Won't Do" },
      { type: "text", text: "It won't replace your judgment. It won't know your kids better than you do (yet). It makes mistakes — especially with facts and dates — so always read what it gives you. Think of it as a brilliant first draft machine, not a final answer machine." },
      { type: "text", text: "That's it. You now know more than most people who claim to be \"using AI.\" Start there." },
    ]
  },

  "ai-tools-comparison": {
    id: "ai-tools-comparison",
    category: "AI 101",
    title: "We Tested the Top AI Tools for 6 Months. Here's What Actually Stuck.",
    subtitle: "ChatGPT got us started. Something else kept us coming back.",
    readTime: "5 min",
    heroImage: "img-unsplash-22.jpg",
    heroAlt: "Woman looking thoughtfully at two open screens",
    cta: { type: "course", label: "See What We Teach →", href: "index.html" },
    body: [
      { type: "intro", text: "When ai.moms started, we were all in on ChatGPT. It was the name everyone knew, the tool everyone recommended. Six months later, the picture looks different. Here's what we actually found when we used all of them — not for demos, but for real family management." },
      { type: "h2", text: "ChatGPT: The Gateway Drug" },
      { type: "text", text: "ChatGPT is where most people start, and for good reason. It's fast, widely supported, and the free version is genuinely useful. It's great for quick tasks — drafting an email, brainstorming gift ideas, summarizing an article. But for sustained, nuanced conversations — the kind where you're actually thinking through something complicated — it can feel shallow. It also forgets context quickly within a conversation." },
      { type: "text", text: "Verdict: A great entry point. Not where you want to live." },
      { type: "image", src: "/img/articles/photo-1522202176988-66273c2fd55f-w800.jpg", alt: "Group of women looking at laptops together, comparing notes" },
      { type: "h2", text: "Gemini: Google's Answer" },
      { type: "text", text: "Gemini integrates with Google Workspace, which is genuinely useful if you live in Google Docs, Gmail, and Calendar. Its web access is helpful for current information. But in our testing, the responses often felt more generic — like it was optimizing for safety over usefulness. The Google integration is its best argument." },
      { type: "text", text: "Verdict: Worth it if you're deep in the Google ecosystem. Otherwise, not the move." },
      { type: "h2", text: "Claude: Where We Landed" },
      { type: "text", text: "Claude reads longer documents without complaining. It remembers the full context of a conversation. It writes in a way that sounds like a human — not a press release. And critically for mothers: it handles nuance well. When you explain that your kid has anxiety about transitions and you need help scripting a conversation, Claude engages with the full complexity of that rather than giving you a generic checklist." },
      { type: "text", text: "It's also — and this matters — less likely to lecture you. It trusts you to be an adult." },
      { type: "pullquote", text: "\"The best AI tool is the one that actually fits how you think. For most moms we've tested with, that's Claude.\"" },
      { type: "h2", text: "The Bottom Line" },
      { type: "text", text: "Start with ChatGPT if you haven't started at all — it's the most familiar. But if you're ready to actually integrate AI into how you run your family and your work, Claude is where we recommend you build. It's what we teach with, and it's what Aime is built on." },
      { type: "text", text: "All three have free tiers. Try them. See which one feels like talking to someone who actually listens." },
    ]
  },

  "what-is-a-prompt": {
    id: "what-is-a-prompt",
    category: "AI 101",
    title: "What Is a Prompt, Really? The One Skill That Changes Everything.",
    subtitle: "How you talk to AI is everything. Here's how to do it right.",
    readTime: "4 min",
    heroImage: "img-unsplash-14.jpg",
    heroAlt: "Woman writing in notebook at desk with warm lamp light",
    cta: { type: "course", label: "Learn the RCTF Method →", href: "index.html" },
    body: [
      { type: "intro", text: "A prompt is simply what you type into an AI tool. But the difference between a bad prompt and a good one is the difference between getting something useless and getting something that saves you an hour. This is the one skill worth actually learning." },
      { type: "h2", text: "The Problem With How Most People Prompt" },
      { type: "text", text: "Most people type something like: \"meal plan ideas.\" And then they wonder why the output feels generic and unhelpful. AI is not a search engine. It can't read your mind. It needs context — the same way a great assistant needs a real brief before they can do great work." },
      { type: "pullquote", text: "\"Vague in. Vague out. Specific in. Useful out.\"" },
      { type: "h2", text: "The RCTF Method" },
      { type: "text", text: "At ai.moms, we teach a framework called RCTF: Role, Context, Task, Format. Every great prompt has these four elements — and once you see it, you can't unsee it." },
      { type: "text", text: "Role: Tell the AI who to be. \"Act as a pediatric nutritionist.\" Context: Tell it what's true about your situation. \"I have two kids, ages 5 and 8. My 5-year-old refuses anything green.\" Task: Tell it exactly what you need. \"Create a 5-day dinner plan they'll both eat.\" Format: Tell it how to give it to you. \"Format it as a simple table with ingredients listed.\"" },
      { type: "prompt", label: "Bad prompt vs. good prompt", text: "❌ \"give me dinner ideas\"\n\n✅ Act as a family meal planning expert. I have two kids ages 5 and 8 — one refuses vegetables, one is allergic to nuts. My partner and I prefer Mediterranean flavors. Give me 5 weeknight dinners that work for everyone, formatted as a table with prep time and main ingredients." },
      { type: "h2", text: "Why This Matters More Than Which Tool You Use" },
      { type: "text", text: "We see mothers switch tools constantly trying to find \"the good one.\" But the truth is a well-prompted request in any tool beats a vague request in the best tool. The skill travels. Whatever AI you're using, whichever one takes over in two years — RCTF works." },
      { type: "h2", text: "One Exercise to Try Today" },
      { type: "text", text: "Think of the last time you Googled something and spent 20 minutes going down a rabbit hole trying to find a useful answer. Now try re-asking that as an RCTF prompt. The difference will convince you faster than anything we could write here." },
    ]
  },

  "25-prompts-spring": {
    id: "25-prompts-spring",
    category: "AI 101",
    title: "25 AI Prompts Every Mother Needs This Spring",
    subtitle: "Copy, paste, customize. Your spring prompt starter kit.",
    readTime: "6 min",
    heroImage: "img-unsplash-1.jpg",
    heroAlt: "Woman smiling at phone with notepad nearby, spring light",
    cta: { type: "course", label: "Get the Full Prompt Library →", href: "index.html" },
    body: [
      { type: "intro", text: "Spring is the invisible load season. End of school, camp planning, field trips, teacher gifts, sports schedules, and somehow Mother's Day lands in the middle of it all. These 25 prompts are organized by what's actually happening right now — copy, paste, and customize for your family." },
      { type: "h2", text: "🌸 End of School Year" },
      { type: "prompt", label: "Teacher gift ideas", text: "Act as a thoughtful gift curator. My child's teacher has been exceptional this year — she's warm, organized, and goes above and beyond. Suggest 5 teacher gift ideas under $30 that feel personal, not generic. My kid is in 3rd grade." },
      { type: "prompt", label: "End-of-year party planning", text: "Act as a party planner. Help me organize a casual end-of-school celebration for 8 kids ages 7-9 in my backyard. Budget is $150. Give me a theme, 4 activities, a simple food list, and a 2-hour timeline." },
      { type: "prompt", label: "Thank you note for teacher", text: "Help me write a heartfelt but not over-the-top thank you note to my child's teacher. My kid's name is [name], the teacher's name is [name]. One specific thing the teacher did that made a difference: [fill in]. Keep it genuine, 4-5 sentences." },
      { type: "h2", text: "☀️ Summer Planning" },
      { type: "prompt", label: "Summer schedule builder", text: "Act as a family logistics coordinator. I have [X] kids ages [X] and [X]. Summer break is [dates]. I have [budget] for camps. Help me build a week-by-week summer schedule that balances structured camps, family time, and downtime. Flag any weeks that look light or chaotic." },
      { type: "prompt", label: "Finding the right camp", text: "Act as a summer camp research expert. My child is [age], loves [interests], and needs [full day / half day]. We're in [location]. What questions should I be asking camps to find the right fit — and what are the red flags to watch for?" },
      { type: "prompt", label: "Summer boredom buster list", text: "Give me 20 activity ideas for a [age]-year-old on a hot summer day at home. Mix screen-free and screen-OK. Include activities that can be done alone and a few that involve a parent for 20 minutes or less. Format as a quick list." },
      { type: "h2", text: "🌸 Mother's Day" },
      { type: "prompt", label: "Draft your own wish list", text: "I never know what to tell people when they ask what I want for Mother's Day. Help me make a list — some practical, some indulgent, at different price points — based on what I actually need: more time, less mental load, and the occasional moment to myself. Ask me 3 questions to personalize it." },
      { type: "prompt", label: "Plan something for yourself", text: "Act as a personal concierge. I'm a mom who wants to do something truly restorative for Mother's Day — not brunch I'll have to help coordinate, not a gift I'll have to find a place for. I have [X hours] and [X budget]. Suggest 3 ideas that are genuinely about me, not my family." },
      { type: "h2", text: "🏡 Home & Family" },
      { type: "prompt", label: "Spring cleaning priority list", text: "Act as a home organization expert. I have [X hours] this weekend to spring clean. My biggest pain points are [list 2-3 areas]. Give me a prioritized action plan with realistic time estimates. Don't include anything that takes longer than 45 minutes per task." },
      { type: "prompt", label: "Kids' activity research", text: "Research [sport/activity] programs for a [age]-year-old in [your town/area]. What should I look for in a program at this age? What questions should I ask before signing up? What are the time and cost commitments I should plan for?" },
      { type: "prompt", label: "Doctor appointment prep", text: "My [age]-year-old has a well-child visit coming up. Act as a pediatric health advisor and give me a list of questions I should bring based on their age and developmental stage. Also remind me what vaccines and screenings are typically due at this age." },
      { type: "h2", text: "💼 Work" },
      { type: "prompt", label: "Performance review self-assessment", text: "Help me write a strong self-assessment for my performance review. My role is [title]. In the past year I accomplished [2-3 achievements]. I want to position myself for [goal]. Tone: confident but not braggy. Format: 3 short paragraphs." },
      { type: "prompt", label: "Difficult email rewrite", text: "I need to send a firm but professional email about [situation]. Here's my draft: [paste draft]. Rewrite it so it's clear, direct, and doesn't leave room for misinterpretation — but doesn't burn any bridges." },
      { type: "prompt", label: "Out-of-office message", text: "Write me an out-of-office message for [dates]. I want it to be professional but have a tiny bit of personality. I'll have limited access. Include who to contact for urgent matters: [name, email]." },
      { type: "h2", text: "🧠 Mental Load" },
      { type: "prompt", label: "Brain dump processor", text: "I'm going to dump everything in my head at you. I need you to organize it into categories: urgent this week, this month, someday, delegate, and delete. Here's everything: [paste your brain dump]." },
      { type: "prompt", label: "Decision I'm stuck on", text: "I need help thinking through a decision: [describe it]. Here are the factors I'm weighing: [list them]. Play devil's advocate. Tell me what I might be missing. Then give me your honest take on what you'd do." },
      { type: "prompt", label: "The conversation I've been avoiding", text: "I need to have a hard conversation with [person] about [topic]. I tend to [avoid conflict / over-explain / get emotional]. Help me prepare what to say — the opening line, the key points, and how to handle it if they get defensive." },
    ]
  },

  "ai-habits": {
    id: "ai-habits",
    category: "AI 101",
    title: "The AI Habits That Will Define the Next Five Years",
    subtitle: "The mothers who use AI well don't have a secret tool. They have the right habits.",
    readTime: "4 min",
    heroImage: "img-mom-5.png",
    heroAlt: "Woman at window with laptop, morning light",
    cta: { type: "course", label: "Build Your AI Practice →", href: "index.html" },
    body: [
      { type: "intro", text: "AI isn't going anywhere. But the mothers who actually get value from it aren't the ones who downloaded every app — they're the ones who built simple, consistent habits around it. Here's what that looks like in practice." },
      { type: "h2", text: "Habit 1: The Daily Brain Dump" },
      { type: "text", text: "Every morning or evening, spend 90 seconds voice-noting or typing everything bouncing around in your head into AI. Not to get answers — just to clear the cache. Ask it to categorize, prioritize, and flag what's truly urgent vs. what just feels urgent at 11pm." },
      { type: "h2", text: "Habit 2: The One-Sentence Rule" },
      { type: "text", text: "Before you Google anything that requires more than one click, try asking AI first. One sentence. No setup required. \"What are the typical side effects of amoxicillin in kids?\" \"What's a good substitute for buttermilk?\" \"How do I write a professional email declining a meeting?\" You'll be shocked how often you get a useful answer in seconds." },
      { type: "image", src: "/img/articles/photo-1484480974693-6ca0a78fb36b-w800.jpg", alt: "Woman speaking into phone while walking, mid-stride" },
      { type: "h2", text: "Habit 3: The Weekly Reset" },
      { type: "text", text: "Sunday evening or Monday morning: open AI and run through your week. What's coming? What needs to be decided? What's on the back burner that you keep meaning to deal with? A 10-minute weekly reset with AI catches things before they become emergencies." },
      { type: "pullquote", text: "\"The goal isn't to use AI more. It's to think less about the things that don't deserve your best thinking.\"" },
      { type: "h2", text: "Habit 4: The Template Library" },
      { type: "text", text: "Every time you ask AI to write something that you know you'll need again — a school absence email, a babysitter briefing, a difficult text to a family member — save it. Over time you build a personal library of prompts and templates that run your life without you having to reinvent them." },
      { type: "h2", text: "Habit 5: Treating It Like a Thinking Partner, Not a Search Engine" },
      { type: "text", text: "This is the shift that separates occasional users from women who say AI changed their life. Start using it to think, not just to produce. \"I'm trying to decide whether to pull my kid from this activity — here's the situation, help me think through it.\" That's when it gets powerful." },
    ]
  },

  // ═══════════════════════════════════
  // HOME
  // ═══════════════════════════════════

  "mothers-day": {
    id: "mothers-day",
    category: "HOME",
    title: "What Every Mom Actually Wants for Mother's Day",
    subtitle: "Not another thing to find a place for on a shelf.",
    readTime: "3 min",
    heroImage: "img-unsplash-23.jpg",
    heroAlt: "Woman sitting peacefully at a table with coffee, unhurried",
    cta: { type: "mothers-day-gift", label: "Give Her Time Back →", href: "#" },
    body: [
      { type: "intro", text: "Every year the same question. Every year the same awkward answer: \"Oh, anything is fine. I don't need anything.\" She means it. But not in the way you think." },
      { type: "text", text: "She doesn't want another candle to find a shelf for. Not a spa day that ends at 3pm, after which she's back to making dinner. Not brunch she'll help coordinate because that's just what she does. She's not being difficult. She genuinely doesn't want more things. She wants the one thing no one has ever actually given her." },
      { type: "pullquote", text: "\"She wants her time back. Not just on Mother's Day — for good.\"" },
      { type: "h2", text: "What She's Actually Carrying" },
      { type: "text", text: "There's a version of this that sounds dramatic until you live it. It's not the tasks — it's the awareness. The constant background processing of who needs what, when, and what happens if she forgets. It runs 24 hours a day. It doesn't stop when she's on vacation. It doesn't stop when she's sick. It is, genuinely, a second job that nobody hired her for and nobody pays her for." },
      { type: "text", text: "The gift she actually wants is structural relief. Not a break from it. Elimination of it." },
      { type: "image", src: "/img/articles/photo-1491975474562-1f4e30bc9468-w800.jpg", alt: "Woman with coffee and planner on a Sunday morning, looking calm and present" },
      { type: "h2", text: "What That Looks Like" },
      { type: "text", text: "It looks like a Sunday morning where she wakes up and the week is already planned. Where the meal decisions have been made. Where she can sit with her coffee and be in the moment instead of running logistics in her head. Where she's present — because the background processing has been handed off." },
      { type: "text", text: "That's not a gift you can wrap. But it is something you can build. And it starts with giving her the tools to build it herself." },
      { type: "h2", text: "The Gift That Actually Means Something This Year" },
      { type: "text", text: "ai.moms exists for this exact reason. We built a course, a set of tools, and a community specifically to help mothers eliminate the invisible load — not manage it better. If you know a mom who's been carrying it all, share this with her. The gift isn't the course. The gift is what happens after." },
      { type: "mothers-day-cta" },
    ]
  },

  "meal-planning": {
    id: "meal-planning",
    category: "HOME",
    title: "Every Way to Use AI for Meal Planning — Ranked",
    subtitle: "One-off prompts, micro-tools, weekly resets. We tested them all.",
    readTime: "6 min",
    heroImage: "img-unsplash-21.jpg",
    heroAlt: "Woman with tablet in bright kitchen, fresh ingredients on counter",
    cta: { type: "tool", label: "Try the Meal Planner Tool →", href: "toolkit.html" },
    body: [
      { type: "intro", text: "\"What's for dinner\" is not a small question. It's actually about 365 questions a year, plus 365 grocery lists, plus the dietary restrictions, plus the kid who suddenly won't eat pasta anymore, plus whatever's already in the fridge. Here's every way AI can take this off your plate — ranked from easiest to most powerful." },
      { type: "h2", text: "Method 1: The One-Off Prompt (Easiest)" },
      { type: "text", text: "Open Claude or ChatGPT. Type what you have, what your constraints are, and what you need. Done in 60 seconds." },
      { type: "prompt", label: "The Fridge Dump prompt", text: "I have: chicken thighs, half a bag of spinach, cherry tomatoes, pasta, parmesan, and garlic. I need to make dinner for 4 people in under 30 minutes. One kid doesn't eat spicy food. Give me the best option and a quick recipe." },
      { type: "text", text: "Best for: moments of desperation. Not great for planning ahead." },
      { type: "h2", text: "Method 2: The Weekly Meal Plan Prompt (Most Popular)" },
      { type: "text", text: "Once a week, give AI your family profile and let it build the whole week for you. The key is to give it real constraints, not generic ones." },
      { type: "prompt", label: "The Weekly Planner prompt", text: "Act as a family meal planning expert. Here's my family: 2 adults (we like Mediterranean and Asian flavors), 2 kids ages 7 and 10 (one is a picky eater who likes plain food, one eats anything). We're vegetarian Monday and Friday. Budget for groceries this week: $180. Time available for cooking: 30 min weeknights, 60 min weekends. Give me a 7-day dinner plan with a consolidated grocery list." },
      { type: "image", src: "/img/articles/photo-1522202176988-66273c2fd55f-w800.jpg", alt: "Colorful healthy family meal on a well-set table" },
      { type: "h2", text: "Method 3: The ai.moms Meal Planner Tool (Fastest)" },
      { type: "text", text: "We built a micro-tool specifically for this. You enter your family profile once, and it generates a weekly plan instantly — no prompting required, no context to re-explain every time. It remembers your preferences, dietary needs, and usual schedule." },
      { type: "text", text: "Best for: moms who want the same result without the setup every week." },
      { type: "h2", text: "Method 4: The Aime Weekly Reset (Most Powerful)" },
      { type: "text", text: "If you're using Aime as your AI Chief Everything Officer™, meal planning becomes part of your weekly reset. Aime knows your family, your schedule, and what's already in your calendar — so the meal plan it generates actually fits your life, not a generic version of it." },
      { type: "text", text: "Best for: moms who want AI to run the whole week, not just one piece of it." },
      { type: "pullquote", text: "\"The goal isn't a perfect meal plan. It's to never have to think about 'what's for dinner' ever again.\"" },
      { type: "h2", text: "The Bottom Line" },
      { type: "text", text: "Start with Method 2 this week. Spend 5 minutes on Sunday. Use the prompt above, customize it for your family, and let AI build your week. Once you've done it a few times, you'll be ready for Method 4 — and that's where the real time savings live." },
    ]
  },

  "family-command-center": {
    id: "family-command-center",
    category: "HOME",
    title: "How to Build a Family Command Center Powered by AI",
    subtitle: "One system. Schedules, meals, logistics, handoffs — all of it.",
    readTime: "5 min",
    heroImage: "img-mom-4.png",
    heroAlt: "Organized family calendar wall, woman reviewing it with coffee",
    cta: { type: "course", label: "We Build This in the Course →", href: "index.html" },
    body: [
      { type: "intro", text: "A family command center isn't a Pinterest project. It's the operating system for your household. Here's what it actually means to build one with AI — and what's possible when it's working." },
      { type: "h2", text: "What a Command Center Actually Is" },
      { type: "text", text: "It's a central place — a Claude project, a shared document, a dedicated AI conversation — where all your family's information lives. Kids' schedules, dietary needs, medical info, school contacts, recurring tasks, weekly rhythms. You build it once, and then AI can help you with anything because it already knows your life." },
      { type: "text", text: "Without it, every AI conversation starts from scratch. With it, you pick up exactly where you left off — and the output is actually relevant to your real situation, not a generic family." },
      { type: "image", src: "/img/articles/photo-1563986768494-4dee2763ff3f-w800.jpg", alt: "Organized, calm home workspace — the feeling of having it together" },
      { type: "h2", text: "The Four Components" },
      { type: "text", text: "Family Profile: Who's in your household, ages, dietary restrictions, allergies, key preferences, anything AI needs to know to give relevant advice without you explaining every time." },
      { type: "text", text: "Weekly Rhythm: Your standard schedule. Recurring commitments, school hours, work hours, activities, who does pickup. When AI knows this, it can flag when a meeting conflicts with pickup, or suggest a meal plan that doesn't require 45 minutes on a Tuesday." },
      { type: "text", text: "The Running List: Everything on the back burner. Calls to make, decisions to revisit, projects to start, things to research. AI helps you process this weekly rather than letting it pile up." },
      { type: "text", text: "Playbooks: Repeatable templates. The babysitter briefing. The morning routine. The school absence email. The grocery order logic. Built once, used forever." },
      { type: "pullquote", text: "\"You build it once. Then AI runs it.\"" },
      { type: "h2", text: "How to Start Today (In 20 Minutes)" },
      { type: "prompt", label: "Family Profile setup prompt", text: "I want to set up a family profile so you can give me relevant, personalized help going forward. I'll share our details — please organize this into a reference document I can save and paste into future conversations.\n\nFamily members: [list everyone, ages]\nDietary needs: [restrictions, preferences]\nTypical weekly schedule: [rough overview]\nKids' schools and key contacts: [info]\nOur biggest recurring pain points: [list them]" },
      { type: "text", text: "Save what it gives you. Paste it at the start of any new AI conversation and watch how different the outputs are." },
    ]
  },

  "voice-memo": {
    id: "voice-memo",
    category: "HOME",
    title: "The Voice Memo Trick That Cleared My Entire Mental Load",
    subtitle: "Talk into your phone. Let AI do the rest.",
    readTime: "3 min",
    heroImage: "img-unsplash-19.jpg",
    heroAlt: "Woman walking outside, phone to mouth, talking",
    cta: { type: "aime", label: "Meet Aime →", href: "aime.html" },
    body: [
      { type: "intro", text: "The mental load doesn't strike at convenient moments. It strikes at 7:12am when you're making lunches, at 3pm pickup when you suddenly remember the form you were supposed to sign, at 10pm when you're finally still and your brain decides to list everything you haven't done." },
      { type: "text", text: "The voice memo trick is the simplest, fastest way to capture all of it before it evaporates — and let AI sort it out so you don't have to." },
      { type: "h2", text: "Here's How It Works" },
      { type: "text", text: "Step 1: When the mental load hits — in the car, on a walk, between meetings — open your phone's voice memo app or Wispr Flow (our recommended tool for this) and just talk. Don't organize. Don't filter. Just say everything that's in your head." },
      { type: "text", text: "\"I need to call the dentist, I forgot to RSVP to Emma's birthday, I want to look into that new after-school program, I should email Ava's teacher about the reading thing, I need to find a plumber, I keep forgetting to order more of those vitamins...\"" },
      { type: "text", text: "Step 2: Transcribe it or copy it. Paste it into Claude with this prompt:" },
      { type: "prompt", label: "The brain dump processor", text: "I just voice-memed my entire mental load. Please organize this into four categories: (1) Do this week, (2) Schedule/research needed, (3) Can delegate or automate, (4) Just wanted to capture — not urgent. Here's everything: [paste transcript]" },
      { type: "image", src: "/img/articles/photo-1522202176988-66273c2fd55f-w800.jpg", alt: "Woman at kitchen table, coffee in hand, looking calm and organized" },
      { type: "h2", text: "Why This Works" },
      { type: "text", text: "Your brain is a terrible to-do list. It's designed for thinking, not storing. Every time you try to hold something in working memory, it's taking up space that could go toward actual thinking. Getting it out — and letting AI organize it — is one of the fastest mental load reductions we've seen." },
      { type: "pullquote", text: "\"I do this in the car every Sunday on the way to the grocery store. By the time I get home, my week is organized.\"" },
      { type: "h2", text: "The Tool That Makes This Even Better" },
      { type: "text", text: "Wispr Flow is a voice-to-text tool that transcribes in real time and works inside any app — including Claude. So you can literally speak your brain dump directly into Claude without a copy-paste step. It's one of the few tools we recommend to every mom in our community, starting week one." },
    ]
  },

  "birthday-party": {
    id: "birthday-party",
    category: "HOME",
    title: "I Planned a Birthday Party in 4 Minutes With AI. Here's the Prompt.",
    subtitle: "Theme, vendors, invites, timeline, dietary restrictions. Done.",
    readTime: "3 min",
    heroImage: "img-unsplash-29.jpg",
    heroAlt: "Beautifully decorated children's birthday party setup",
    cta: { type: "course", label: "Get the Full Prompt Library →", href: "index.html" },
    body: [
      { type: "intro", text: "Birthday party planning used to take me weeks. The theme research, the activity ideas, the food that works for the kid with a nut allergy, the timeline so things don't derail at 2pm. Now it takes one prompt and about 4 minutes." },
      { type: "h2", text: "The Master Birthday Party Prompt" },
      { type: "prompt", label: "Copy this — customize the brackets", text: "Act as a children's party planner. Help me plan a birthday party for my [age]-year-old, [name]. Details:\n- Number of kids: [X]\n- Ages of guests: [range]\n- Location: [backyard / indoor / venue]\n- Budget: [$X]\n- Duration: [X hours]\n- Theme interest: [child's current obsession]\n- Dietary notes: [any allergies or restrictions]\n- Time of day: [afternoon / morning / evening]\n\nPlease give me:\n1. A theme concept with 2-3 decoration ideas\n2. A 30-minute activity schedule\n3. Simple food and cake ideas that work for the ages\n4. An invitation wording draft\n5. A shopping list organized by category\n6. A day-of timeline for setup and execution" },
      { type: "h2", text: "What Comes Back" },
      { type: "text", text: "In about 30 seconds you'll have a fully fleshed party plan. Not generic suggestions — an actual plan with a timeline, a shopping list, activity instructions, and invitation copy. The kind of thing that used to take a Saturday afternoon of Pinterest browsing." },
      { type: "image", src: "/img/articles/photo-1527529482837-4698179dc6ce-w800.jpg", alt: "Kids laughing at a party, streamers and joy everywhere" },
      { type: "h2", text: "The Follow-Up Prompts Worth Having" },
      { type: "prompt", label: "If the theme needs work", text: "My daughter is really into [interest] right now but also loves [other interest]. Can you combine these into a party theme that doesn't require buying a lot of branded merchandise?" },
      { type: "prompt", label: "The thank you notes (after)", text: "Help me write 5 variations of a thank you note from a [age]-year-old for birthday gifts. Keep them short, sweet, and age-appropriate. The child's name is [name]." },
      { type: "pullquote", text: "\"The AI party planner doesn't have opinions about your kid's theme. It just gets it done.\"" },
    ]
  },

  "sunday-reset": {
    id: "sunday-reset",
    category: "HOME",
    title: "Your Sunday Reset, Powered by Aime",
    subtitle: "15 minutes on Sunday that changes everything about Monday.",
    readTime: "4 min",
    heroImage: "img-mom-2.png",
    heroAlt: "Woman with coffee and planner on a Sunday morning, calm and unhurried",
    cta: { type: "aime", label: "Meet Aime →", href: "aime.html" },
    body: [
      { type: "intro", text: "Sunday evening used to be the most anxious time of the week. The mental preparation for Monday, the scramble to remember what was coming, the low-grade dread of feeling behind before it even started. The Sunday reset changed that." },
      { type: "h2", text: "What a Weekly Reset Actually Is" },
      { type: "text", text: "It's a structured 15-minute check-in with AI where you close out last week and set up the next one. Not a planning marathon. Not a productivity system. Just a conversation that gets everything out of your head and into a plan." },
      { type: "h2", text: "The Reset Prompt (Run This Every Sunday)" },
      { type: "prompt", label: "Your weekly reset", text: "It's Sunday evening. Help me do a weekly reset. I'll share what's coming up this week and you help me think through it.\n\nThis week I have: [list your calendar highlights]\nThis week I'm anxious about: [anything on your mind]\nLeftovers from last week I haven't dealt with: [anything unfinished]\nMeals I need to plan for: [which nights you need dinner sorted]\nAny big decisions I need to make: [list them]\n\nPlease:\n1. Prioritize my week\n2. Flag anything that looks like it needs more time than I've given it\n3. Suggest a simple dinner plan for the nights I listed\n4. Give me my 3 most important tasks for Monday morning" },
      { type: "image", src: "/img/articles/photo-1491975474562-1f4e30bc9468-w800.jpg", alt: "Weekly planner open on a table with coffee, calm organized morning" },
      { type: "pullquote", text: "\"Monday doesn't feel like it's happening to me anymore. It feels like something I built.\"" },
      { type: "h2", text: "How Aime Makes This Even Better" },
      { type: "text", text: "Aime — our AI Chief Everything Officer™ — knows your family profile, your weekly rhythm, and what you've been dealing with. So when you run your Sunday reset through Aime, you don't have to explain your life every week. It already knows. The reset is faster, the suggestions are more relevant, and the meal plan it generates actually fits your actual schedule." },
      { type: "text", text: "It's the difference between asking a stranger for directions and asking someone who's been riding shotgun all week." },
    ]
  },

  "kids-dinner": {
    id: "kids-dinner",
    category: "HOME",
    title: "How I Finally Got My Kids to Eat Dinner — With a Little Help From AI",
    subtitle: "Picky eaters, the same four meals, and the dinner standoff. Solved.",
    readTime: "4 min",
    heroImage: "img-unsplash-5.jpg",
    heroAlt: "Mom laughing with kids at the dinner table, everyone eating together",
    cta: { type: "tool", label: "Try the Meal Planner Tool →", href: "toolkit.html" },
    body: [
      { type: "intro", text: "My kid went through a phase where he would only eat five things. Pasta with butter. Quesadillas. Chicken nuggets. Apple slices. And inexplicably, edamame. That was it. Every dinner was a negotiation I was losing." },
      { type: "text", text: "AI didn't fix his palate. But it did help me stop fighting a losing battle — and find the angles that actually worked." },
      { type: "h2", text: "The Picky Eater Reframe Prompt" },
      { type: "prompt", label: "For picky eaters", text: "My [age]-year-old will only eat [list their accepted foods]. I want to gently expand their palate without making dinner a battleground. Give me 5 dinner ideas that are close enough to what they already accept that they might try them — with strategies for introducing each one without pressure." },
      { type: "h2", text: "The Multi-Kid Dinner Problem" },
      { type: "text", text: "The harder challenge: two kids with completely different preferences, two adults with their own, and one meal to make on a Tuesday night in 30 minutes. This is where AI shines — because it can hold all of those constraints simultaneously." },
      { type: "prompt", label: "The everyone-eats-something prompt", text: "I have two kids: [kid 1, age, preferences/restrictions] and [kid 2, age, preferences/restrictions]. My partner and I prefer [your preferences]. I need to make one dinner that works for all of us, in 30 minutes or less, without making separate meals. Give me 5 options and flag which components can be customized by person." },
      { type: "image", src: "/img/articles/photo-1522202176988-66273c2fd55f-w800.jpg", alt: "Mom in kitchen smiling, kids nearby, relaxed dinner prep" },
      { type: "h2", text: "The Longer Game" },
      { type: "text", text: "Build a family food profile in AI once, and stop re-explaining every time. Include every family member's preferences, hard no's, dietary restrictions, and any textures or flavors that are a non-starter. Then every meal planning prompt starts from a place of actually knowing your family." },
      { type: "pullquote", text: "\"The goal isn't a perfect dinner every night. It's to stop spending mental energy on it.\"" },
    ]
  },

  "delegate-to-ai": {
    id: "delegate-to-ai",
    category: "HOME",
    title: "How to Delegate to AI Like You'd Delegate to an EA",
    subtitle: "Stop asking questions. Start giving instructions.",
    readTime: "4 min",
    heroImage: "img-mom-1.png",
    heroAlt: "Confident woman at desk, purposeful expression",
    cta: { type: "course", label: "Learn the Full System →", href: "index.html" },
    body: [
      { type: "intro", text: "The biggest mistake people make with AI is treating it like a search engine. They ask vague questions and get vague answers and conclude that AI isn't that useful. The shift is simple: stop asking. Start delegating." },
      { type: "h2", text: "How You Talk to a Search Engine vs. How You Talk to an EA" },
      { type: "text", text: "Search engine: \"birthday party ideas for 7-year-old.\" You get 47 articles, a listicle from 2019, and a Pinterest board." },
      { type: "text", text: "Executive assistant: \"I need to plan a birthday party for my 7-year-old daughter, Mia. She loves horses and art. We have 10 kids coming, a backyard, and $200. I need a theme, activities, food, and a shopping list. Make it easy to execute for a non-Pinterest mom.\" You get exactly that." },
      { type: "pullquote", text: "\"The more specific your brief, the better your output. This is true of AI exactly as it's true of people.\"" },
      { type: "h2", text: "The 4 Elements of a Good Delegation" },
      { type: "text", text: "Context: What's the situation? Who's involved? What constraints exist? Task: What exactly do you need done — not the goal, the deliverable. Standard: What does good look like? Tone, length, format? Deadline or urgency: Does this need to be quick and dirty or thorough?" },
      { type: "h2", text: "What You Can Delegate Starting Today" },
      { type: "text", text: "Research tasks — compare these three options and give me a recommendation. Communication tasks — draft this email, this text, this note. Decision support — here are my options, here's what I know, help me think through this. Planning tasks — build the schedule, the meal plan, the party timeline. Admin tasks — create the packing list, the babysitter instructions, the school supply list." },
      { type: "prompt", label: "The delegation mindset starter", text: "I'm going to start delegating tasks to you the way I'd delegate to a real assistant. To start: I need [describe the task in full]. Here's all the relevant context: [share everything]. Please complete this and let me know if you need anything clarified." },
      { type: "image", src: "/img/articles/photo-1563986768494-4dee2763ff3f-w800.jpg", alt: "Woman at table with laptop, relaxed and in control" },
      { type: "h2", text: "The Mental Shift" },
      { type: "text", text: "The mothers who get the most from AI aren't more technical. They're more comfortable with delegation. They've given themselves permission to hand things off. If that feels hard — if you find yourself thinking \"it's faster to just do it myself\" — that instinct is worth examining. Because it's the same instinct that put you in charge of everything in the first place." },
    ]
  },

  "3-ai-setups": {
    id: "3-ai-setups",
    category: "HOME",
    title: "The 3 AI Setups Every Mom Should Have Running by Monday",
    subtitle: "Three systems. Twenty minutes. A completely different week.",
    readTime: "5 min",
    heroImage: "img-unsplash-12.jpg",
    heroAlt: "Organized calm home workspace with plants",
    cta: { type: "course", label: "Build All 6 Systems in the Course →", href: "index.html" },
    body: [
      { type: "intro", text: "You don't need 20 AI tools. You need three well-set-up systems that run quietly in the background and handle the majority of your invisible load. Here they are." },
      { type: "h2", text: "Setup 1: Your Family Profile (5 minutes)" },
      { type: "text", text: "This is the foundation. A document that lives in a Claude Project or gets pasted at the start of any AI conversation. It tells AI everything it needs to know about your family — once — so you never have to explain again." },
      { type: "prompt", label: "Build your family profile", text: "Help me create a family profile I can reference in future AI conversations. Ask me the questions you'd need answered to give me highly personalized, relevant help with family management, meal planning, scheduling, and household decisions." },
      { type: "text", text: "Save what it builds. Use it everywhere." },
      { type: "h2", text: "Setup 2: Your Weekly Reset Ritual (10 minutes, once a week)" },
      { type: "text", text: "A standing Sunday or Monday morning check-in with AI where you close last week and open the next one. Takes 10 minutes. Returns 10 hours of mental bandwidth." },
      { type: "text", text: "You don't need a new prompt every week. Build one that works for your life, save it, and run it every Sunday. The one in our Sunday Reset article is a good starting point." },
      { type: "image", src: "/img/articles/photo-1491975474562-1f4e30bc9468-w800.jpg", alt: "Woman with coffee and weekly planner, calm Sunday morning" },
      { type: "h2", text: "Setup 3: Your Template Library (5 minutes to start, grows over time)" },
      { type: "text", text: "Every time you ask AI to write something you'll need again, save the prompt and the output. School absence emails. Babysitter briefing templates. The \"we can't make it to the party\" text. The difficult conversation opener. The performance review self-assessment." },
      { type: "text", text: "Start a note in your phone called \"AI Templates.\" The first time you use each one it takes 3 minutes. Every time after that: 30 seconds." },
      { type: "pullquote", text: "\"Three setups. That's it. The ROI starts immediately.\"" },
      { type: "h2", text: "What These Three Setups Actually Do" },
      { type: "text", text: "They transform AI from something you occasionally use into something that runs your life. The Family Profile means AI gives you relevant answers. The Weekly Reset means nothing falls through the cracks. The Template Library means repeatable tasks stop taking repeatable time. Together they eliminate the majority of the invisible load that's been living in your head." },
    ]
  },

  // ═══════════════════════════════════
  // SEASONAL
  // ═══════════════════════════════════

  "summer-camp-research": {
    id: "summer-camp-research",
    category: "SEASONAL",
    title: "Summer Camp Research Is a Part-Time Job. Here's How to Do It in an Afternoon.",
    subtitle: "Find the right camps, fill the summer schedule, stop toggling between 15 tabs.",
    readTime: "5 min",
    heroImage: "img-unsplash-9.jpg",
    heroAlt: "Kids at summer camp, laughing and playing outdoors in sunshine",
    cta: { type: "tool", label: "Try the Summer Camp Finder →", href: "toolkit.html" },
    body: [
      { type: "intro", text: "Summer camp research is one of those tasks that looks simple and turns into a 6-hour spiral. Fifteen camp websites. Wildly different price points. Programs that are already full. A kid who changes their mind halfway through. Here's how to compress the whole thing into an afternoon." },
      { type: "h2", text: "Step 1: Get Clear on What You Actually Need" },
      { type: "prompt", label: "The camp needs clarifier", text: "Help me figure out exactly what I'm looking for in summer camps before I start researching. My child is [age, interests, personality]. Summer break is [dates]. I need [full day / half day / overnight]. Our budget is [$X per week]. Ask me 5 questions that will help me narrow down the right type of camp before I start searching." },
      { type: "text", text: "This sounds like extra work. It saves 4 hours. Once you know what you're actually looking for, the research becomes targeted instead of exhausting." },
      { type: "h2", text: "Step 2: Research Smarter" },
      { type: "prompt", label: "The camp researcher prompt", text: "I'm looking for summer camps for a [age]-year-old who loves [interests] in [location/region]. We need [full/half/overnight] camps for the weeks of [dates]. Budget is approximately [$X/week]. Can you:\n1. Describe what to look for in a quality camp at this age\n2. Give me the key questions to ask each camp\n3. List the red flags that suggest a camp isn't right for this age group\n4. Suggest how to find local options I might be missing" },
      { type: "image", src: "/img/articles/photo-1516627145497-ae6968895b74-w800.jpg", alt: "Happy kids at summer camp in the sunshine" },
      { type: "h2", text: "Step 3: Build the Summer Calendar" },
      { type: "text", text: "Once you have your camps shortlisted, the next job is building a summer schedule that actually works — no week without coverage, no three-consecutive-weeks of the same thing, no forgetting that grandparents are visiting for two weeks in July." },
      { type: "prompt", label: "The summer planner", text: "Help me build a complete summer schedule. School ends [date], starts again [date]. Camps I'm considering: [list with dates and costs]. Family vacation: [dates]. Grandparent visits or other fixed commitments: [list]. Kids' ages: [X and X]. Budget remaining after camps: [$X]. Build me a week-by-week summer calendar that fills all the weeks, flags any coverage gaps, and tells me the total estimated cost." },
      { type: "pullquote", text: "\"The goal is a summer your kids love and a schedule you don't have to think about anymore.\"" },
      { type: "h2", text: "The Tool That Does Step 1-3 Automatically" },
      { type: "text", text: "Our Summer Camp Finder micro-tool walks you through the needs assessment, helps you search by location and age, and outputs a shortlist you can actually use. It won't replace calling the camps — but it will cut your research time significantly." },
    ]
  },

  "summer-family-trip": {
    id: "summer-family-trip",
    category: "SEASONAL",
    title: "How to Plan a Family Summer Trip in One Afternoon With AI",
    subtitle: "Destination, itinerary, packing lists, restaurants. One session.",
    readTime: "5 min",
    heroImage: "img-unsplash-17.jpg",
    heroAlt: "Mom and daughter at airport with luggage, looking excited",
    cta: { type: "course", label: "Take the Course →", href: "index.html" },
    body: [
      { type: "intro", text: "Family vacation planning is one of the most invisible-load-intensive tasks a mom faces. Research, logistics, everyone's preferences, activities that work for a 5-year-old AND a 12-year-old, the budget that keeps expanding, the backup plan when something goes wrong. Here's how to hand most of it to AI." },
      { type: "h2", text: "Phase 1: Destination Decision (If You Haven't Chosen Yet)" },
      { type: "prompt", label: "Find the right destination", text: "Help us choose a family vacation destination. Family: [adults, kids with ages]. Budget for the trip: [$X]. Available time: [X days]. We're based in [city]. We've already done: [past trips]. Kids are into: [interests]. Adults want: [what you need from a vacation]. Constraints: [flight anxiety, car trips only, heat intolerance, etc.]. Give us 4 options at different price points with pros and cons for our specific family." },
      { type: "h2", text: "Phase 2: The Day-by-Day Itinerary" },
      { type: "prompt", label: "Build the itinerary", text: "We're going to [destination] for [X days] with kids ages [X] and [X]. We like [activity types] and want to avoid [crowds / overscheduling / etc.]. Give me a day-by-day itinerary that balances activities with downtime, includes a mix of things kids and adults will enjoy, and is realistic for the pace of traveling with children. Note: we need at least one rest afternoon built in." },
      { type: "image", src: "/img/articles/photo-1506784983877-45594efa4cbe-w800.jpg", alt: "Family looking at a map together on vacation, excited and connected" },
      { type: "h2", text: "Phase 3: The Logistics Stack" },
      { type: "prompt", label: "Packing list by person", text: "Create a packing list for a [X-day] trip to [destination] in [season] for [family composition]. Organize it by person, then by category (clothing, toiletries, entertainment, documents, gear). Flag anything easy to forget that's hard to buy at the destination." },
      { type: "prompt", label: "Kid-friendly restaurant research", text: "We're visiting [destination] with kids ages [X] and [X]. Give me guidance on how to find restaurants that are genuinely kid-friendly (not just high-chair-available). What neighborhoods should we prioritize? What questions should we ask before booking? And what's the backup plan when a place doesn't work out?" },
      { type: "pullquote", text: "\"The planning used to take longer than the vacation itself. Now it takes an afternoon.\"" },
      { type: "h2", text: "The Thing AI Can't Do (Yet)" },
      { type: "text", text: "It can't know that your 8-year-old hits a wall at 3pm and needs a quiet hour, or that your partner's idea of relaxing and yours are different. Build those into your prompts — the more specific you are about your real family, not a generic one, the better the plan." },
    ]
  },

  "end-of-school": {
    id: "end-of-school",
    category: "SEASONAL",
    title: "End of School Year? AI Can Handle the Entire Last Month.",
    subtitle: "Teacher gifts, parties, summer logistics, transitions. All of it.",
    readTime: "4 min",
    heroImage: "img-unsplash-15.jpg",
    heroAlt: "Children in caps laughing with parents at end-of-school ceremony",
    cta: { type: "course", label: "Take the Course →", href: "index.html" },
    body: [
      { type: "intro", text: "The last month of school is its own invisible load category. Field trips, class parties, teacher appreciation, camp logistics, the end-of-year portfolio you forgot about, and somehow you're supposed to feel sentimental about all of it while also holding it together. AI can't give you the sentimental part. But it can handle almost everything else." },
      { type: "h2", text: "Teacher Appreciation" },
      { type: "prompt", label: "Meaningful teacher gift ideas", text: "My child's teacher has been [describe them — 2-3 genuine qualities]. My budget is [$X]. I want a gift that feels personal, not like a gift card or a mug. My kid is in [grade]. Give me 5 ideas and tell me where to get each one." },
      { type: "prompt", label: "The thank you note that actually says something", text: "Help me write a genuine end-of-year thank you note for my child's teacher. Child's name: [name]. Teacher's name: [name]. One specific thing the teacher did that made a real difference: [describe it]. Tone: warm and specific, not gushing. Length: 5-7 sentences." },
      { type: "h2", text: "Class Party Planning" },
      { type: "prompt", label: "Class party in 5 minutes", text: "I'm helping organize the end-of-year class party for [X] kids in [grade]. Location: [classroom / outdoor space]. Time: [X hours]. Budget: [$X total / $X per family]. Give me a theme, 3 activities appropriate for the age, simple food ideas, and a supply list. Keep it easy to execute with parent volunteers." },
      { type: "image", src: "/img/articles/photo-1527529482837-4698179dc6ce-w800.jpg", alt: "Colorful classroom party with happy kids" },
      { type: "h2", text: "The Summer Transition" },
      { type: "prompt", label: "Setting up summer routines", text: "School ends [date]. I have [X] kids ages [X and X]. I want to avoid the complete schedule collapse that happens every summer. Help me design a loose daily structure that keeps kids from watching screens all day, includes some learning, some outdoor time, and doesn't require me to be their cruise director. Be realistic about what a working parent can actually maintain." },
      { type: "pullquote", text: "\"The end of school is a full event. AI helps you actually be present for it.\"" },
    ]
  },

  "end-of-school-party": {
    id: "end-of-school-party",
    category: "SEASONAL",
    title: "The End-of-School Party Prompt That Does All the Planning for You",
    subtitle: "Class party, neighborhood cookout, grade-wide celebration. One prompt.",
    readTime: "3 min",
    heroImage: "img-unsplash-29.jpg",
    heroAlt: "Colorful party table with decorations, happy summer celebration",
    cta: { type: "course", label: "Get the Full Prompt Library →", href: "index.html" },
    body: [
      { type: "intro", text: "Every June, the class party email goes out and suddenly someone has to organize it. If that someone is you, this is the only prompt you need." },
      { type: "h2", text: "The Complete End-of-Year Party Prompt" },
      { type: "prompt", label: "For the class party organizer", text: "I'm organizing an end-of-year celebration. Help me plan it completely.\n\nDetails:\n- Type: [class party / neighborhood cookout / family celebration]\n- Number of people: [X kids, X adults]\n- Ages of kids: [range]\n- Location: [classroom / backyard / park]\n- Budget: [$X total, or $X per family contribution]\n- Duration: [X hours]\n- Time of day: [morning / afternoon]\n- Any dietary notes: [allergies, restrictions]\n- Level of effort I can manage: [minimal / moderate / I actually enjoy this]\n\nPlease give me:\n1. A theme or vibe that works for the age group\n2. 3-4 activities with instructions\n3. Food and drink menu\n4. A shopping list by store section\n5. Setup timeline for the day of\n6. A simple sign-up list for parent volunteers (if applicable)" },
      { type: "image", src: "/img/articles/photo-1503919545889-aef636e10ad4-w800.jpg", alt: "Kids running and laughing at an outdoor summer party" },
      { type: "h2", text: "The Quick Tweaks" },
      { type: "prompt", label: "If you need to raise money for supplies", text: "I need to collect $X from [X] families for the class party. Write me a short, friendly email asking for contributions via Venmo/Zelle, with a deadline. Include exactly what the money will go toward." },
      { type: "prompt", label: "If you need to recruit volunteers", text: "Write a class-wide message asking for 3-4 parent volunteers to help with the end-of-year party. Include date, time, and what they'd be doing. Friendly, short, clear on the time commitment." },
      { type: "pullquote", text: "\"You didn't sign up to be the party planner. But since you are — you're done in 10 minutes.\"" },
    ]
  },

  "back-to-school": {
    id: "back-to-school",
    category: "SEASONAL",
    title: "How to Automate the School Year — Before It Starts",
    subtitle: "Set it up once. Run the whole year on it.",
    readTime: "5 min",
    heroImage: "img-unsplash-33.jpg",
    heroAlt: "Mom and child looking at school backpack together",
    cta: { type: "course", label: "Build Your Systems in the Course →", href: "index.html" },
    body: [
      { type: "intro", text: "The first week of school is chaos by definition. But almost all of that chaos is predictable — which means most of it can be set up in advance. Here's how to use AI to build the systems before school starts, so you're not scrambling through October." },
      { type: "h2", text: "The School Year Master Setup" },
      { type: "prompt", label: "Build your school year system", text: "Act as a family systems expert. I want to set up a school year command center that runs smoothly without constant effort. My kids: [names, ages, grades, schools]. Help me build:\n1. A recurring weekly schedule template that accounts for school hours, activities, and key weekly tasks\n2. A first-week-of-school checklist for supplies, forms, and logistics\n3. A list of AI prompts I should save for recurring school-year tasks (absence notes, teacher emails, permission slip language, etc.)\n4. A monthly calendar of things I should do proactively (school pictures, report card review, parent-teacher conferences, etc.)" },
      { type: "h2", text: "The Templates Worth Building Now" },
      { type: "prompt", label: "School absence email template", text: "Write me a school absence email template I can customize quickly when my child is sick. Include blanks for: child's name, teacher's name, reason for absence, whether homework should be sent home. Make it appropriate for elementary school. Friendly but efficient." },
      { type: "prompt", label: "The teacher intro email", text: "Write an email I can send to my child's new teacher at the start of the year to introduce ourselves. Include: child's name, one strength, one area they sometimes struggle with, and an open offer to communicate. Keep it to 5-6 sentences. Not over-the-top, just warm and informative." },
      { type: "image", src: "/img/articles/photo-1552664730-d307ca884978-w800.jpg", alt: "Mom walking child to school, holding hands, sunny morning" },
      { type: "pullquote", text: "\"Everything in the school year is predictable. The chaos is optional.\"" },
      { type: "h2", text: "The Supply List Optimizer" },
      { type: "prompt", label: "School supply list processor", text: "Here is my child's school supply list: [paste list]. Help me:\n1. Identify what we probably already have at home\n2. Group the remaining items by store (Target, Amazon, etc.) for efficient shopping\n3. Flag any items that are worth buying in bulk if I have multiple kids\n4. Estimate the total cost based on typical retail prices" },
    ]
  },

  "summer-childcare": {
    id: "summer-childcare",
    category: "SEASONAL",
    title: "Summer Childcare Planning Is a Part-Time Job. AI Can Do It for You.",
    subtitle: "Camps, babysitters, grandparent weeks. The schedule that holds.",
    readTime: "4 min",
    heroImage: "img-unsplash-16.jpg",
    heroAlt: "Mom at kitchen table reviewing summer schedule with kids nearby",
    cta: { type: "aime", label: "Meet Aime →", href: "aime.html" },
    body: [
      { type: "intro", text: "Summer childcare is not one problem. It's eight problems layered on top of each other: finding camps, vetting babysitters, coordinating grandparent visits, covering the weeks nothing is scheduled, and somehow keeping your actual job running through all of it. Here's how to let AI carry the coordination load." },
      { type: "h2", text: "Build the Coverage Map First" },
      { type: "prompt", label: "Summer coverage planner", text: "Summer break runs [start date] to [end date]. My kids are [ages]. I work [full time / part time / from home / in office X days]. Here's what I already have confirmed: [list camps, trips, grandparent dates]. Help me:\n1. Build a week-by-week coverage map showing what's covered and what has gaps\n2. Flag the riskiest weeks (short notice, no backup)\n3. Suggest a prioritized plan to fill the gaps\n4. Estimate the total childcare cost based on the options I have" },
      { type: "h2", text: "Vetting Babysitters and Backup Care" },
      { type: "prompt", label: "Babysitter interview questions", text: "I need to hire a babysitter for summer days when my kids are [ages]. Help me:\n1. Write 8 interview questions that reveal whether someone is truly reliable and good with kids this age\n2. List 3 red flags to watch for in the interview\n3. Create a reference check script — the specific questions to ask former employers\n4. Draft a brief written agreement covering hours, pay rate, phone policy, and expectations" },
      { type: "image", src: "/img/articles/photo-1474552226712-ac0f0961a954-w800.jpg", alt: "Kids playing happily in the garden, supervised and joyful" },
      { type: "h2", text: "The Grandparent Visit Logistics" },
      { type: "prompt", label: "Grandparent visit planner", text: "My in-laws are visiting for [X days] from [date] to [date] and will be helping with childcare. Kids are [ages]. Help me create:\n1. A simple daily schedule for the kids during their visit\n2. A list of age-appropriate activities they can do together in our area\n3. Emergency contacts and medical info document to leave with them\n4. A brief guide to our household routines (nap times, meal preferences, screen time rules)" },
      { type: "pullquote", text: "\"Summer doesn't have to be a coverage crisis. It just needs a plan before June.\"" },
    ]
  },

  // ═══════════════════════════════════
  // MILESTONES
  // ═══════════════════════════════════

  "new-mom": {
    id: "new-mom",
    category: "MILESTONES",
    title: "The New Mom's AI Starter Kit (For the 4th Trimester)",
    subtitle: "Your brain is running on empty. Here's the AI setup that helps.",
    readTime: "4 min",
    heroImage: "img-unsplash-3.jpg",
    heroAlt: "New mom holding her newborn close, exhausted and full of love",
    cta: { type: "email", label: "Join the Community →", href: "subscribe.html" },
    body: [
      { type: "intro", text: "You just had a baby. You haven't slept properly in weeks. You're supposed to be enjoying this, and you are, but you're also holding more information in your head than ever before — feeding schedules, pediatrician guidance, thank-you notes you haven't written, a body that doesn't feel like yours. This is the AI setup for right now." },
      { type: "h2", text: "The 3am Question Answerer" },
      { type: "text", text: "It's 3am. The baby is doing something that seems weird. You don't know if it's normal. You don't want to call the pediatrician at 3am for something that might be nothing. AI is available right now, without judgment." },
      { type: "prompt", label: "The 3am reassurance prompt", text: "I'm a new mom and my [X]-week-old baby is [describe what's happening]. Is this within the range of normal, or should I contact my pediatrician? Give me the honest answer and the specific signs that would make this more urgent." },
      { type: "text", text: "Note: AI is not a medical professional. Use it to help you figure out whether to call — not to replace the call." },
      { type: "h2", text: "Thank You Notes Without the Guilt" },
      { type: "prompt", label: "Thank you notes for baby gifts", text: "Help me write 5 short, genuine thank-you notes for baby gifts. I want them to feel warm but not fake. The baby's name is [name]. Gift ideas to include: [list gifts and givers]. Keep each note to 3-4 sentences." },
      { type: "image", src: "/img/articles/photo-1476703993599-0035a21b17a9-w800.jpg", alt: "Mom and baby in quiet morning light, peaceful" },
      { type: "h2", text: "Pediatrician Appointment Prep" },
      { type: "prompt", label: "Well-baby visit prep", text: "My baby is [X] weeks/months old and has a well-child visit coming up. What developmental milestones should be checked at this age? What vaccines are typically due? What questions should I bring that first-time parents often forget to ask?" },
      { type: "h2", text: "The Postpartum Brain Fog Is Real" },
      { type: "text", text: "Postpartum cognitive changes are documented and real — hormonal shifts, sleep deprivation, and the neurological changes of new parenthood all affect memory and processing. AI doesn't fix that. But it does give you somewhere to offload the mental load so your brain can spend what capacity it has on actually being present." },
      { type: "pullquote", text: "\"You don't have to hold all of this in your head. That's what AI is for right now.\"" },
    ]
  },

  "toddler-years": {
    id: "toddler-years",
    category: "MILESTONES",
    title: "The Toddler Years Are Chaos. AI Is Your Secret Weapon.",
    subtitle: "Sleep regression at 2am. Activity ideas when you've run out. Questions you're embarrassed to Google.",
    readTime: "4 min",
    heroImage: "img-mom-6.png",
    heroAlt: "Latina mom on the floor playing with her toddler, both laughing",
    cta: { type: "course", label: "Take the Course →", href: "index.html" },
    body: [
      { type: "intro", text: "Toddlers are incredible and completely exhausting. They need constant stimulation, they resist everything, they sleep badly and eat worse, and they don't come with an instruction manual. AI isn't a substitute for parenting instinct — but it's remarkably good at the research and planning work that used to eat your naptime." },
      { type: "h2", text: "Activity Ideas When Your Brain Is Empty" },
      { type: "prompt", label: "Toddler activities generator", text: "Give me 15 toddler activity ideas for a [age]-year-old on a rainy afternoon at home. Mix sensory, creative, and movement activities. Include what supplies are needed and roughly how long each one holds their attention. Mark which ones are mess-free." },
      { type: "prompt", label: "Outdoor activities version", text: "Give me 10 outdoor activities for a [age]-year-old that require nothing more than what's available in a typical backyard or neighborhood park. No special equipment needed." },
      { type: "h2", text: "Sleep Questions at 2am" },
      { type: "prompt", label: "Sleep regression research", text: "My [age]-month-old has suddenly started [describe the sleep change]. Is this a recognized developmental phase? What typically causes it? What do pediatric sleep experts generally recommend? And what are the approaches I can try tonight?" },
      { type: "image", src: "/img/articles/photo-1474552226712-ac0f0961a954-w800.jpg", alt: "Mom reading to young child in warm afternoon light" },
      { type: "h2", text: "The Parenting Questions You Don't Know Who to Ask" },
      { type: "text", text: "Toddler years bring questions that feel too small for a pediatrician and too specific for Google. AI handles these well — not as medical advice, but as a starting point for thinking it through." },
      { type: "prompt", label: "The parenting question you've been sitting on", text: "I have a question about my [age]-year-old that I'm not sure who to ask. [Describe the situation or behavior you've noticed]. Is this within normal developmental range? What might be driving it? What are the approaches that child development experts typically recommend?" },
      { type: "pullquote", text: "\"The toddler years are a research sprint. AI compresses the research.\"" },
      { type: "h2", text: "Meal Ideas for the World's Pickiest Eater" },
      { type: "prompt", label: "Toddler food ideas", text: "My [age]-year-old will eat: [list accepted foods]. They refuse: [list rejections]. Give me 7 meal ideas that build on what they already accept, with gentle strategies for introducing new textures and flavors without turning mealtime into a power struggle." },
    ]
  },

  "elementary-school": {
    id: "elementary-school",
    category: "MILESTONES",
    title: "Elementary School Mom: You're Now the Family Logistics Director",
    subtitle: "Playdates, carpools, homework, class parties, teacher emails. Here's your system.",
    readTime: "5 min",
    heroImage: "img-unsplash-13.jpg",
    heroAlt: "Mom walking elementary-age child to school, holding hands",
    cta: { type: "course", label: "Build the Full System →", href: "index.html" },
    body: [
      { type: "intro", text: "Kindergarten through 5th grade is when the invisible load goes from manageable to genuinely complex. The school system has its own calendar, its own communications, its own requests. Activities multiply. Social dynamics start mattering. The logistics require a system." },
      { type: "h2", text: "The Communications Load" },
      { type: "text", text: "Elementary school generates a remarkable amount of communication — school newsletters, teacher emails, event invites, permission slips, fundraiser requests, class parent emails. AI can help you process, respond to, and draft all of it." },
      { type: "prompt", label: "Email to teacher about a concern", text: "I want to reach out to my child's teacher about [the situation]. My child is in [grade], the teacher's name is [name]. I want to be collaborative, not accusatory. Help me draft an email that opens a conversation rather than putting them on the defensive. Key points I want to make: [list 2-3 things]." },
      { type: "prompt", label: "Response to tricky school situation", text: "I received this communication from school: [paste it]. I want to respond in a way that is [firm / collaborative / clarifying / concerned]. Help me draft a response that achieves that without overcomplicating it." },
      { type: "h2", text: "The Social Calendar" },
      { type: "text", text: "Elementary years are peak playdate season. Managing the social calendar — who your kid has had over, whose house they've been to, reciprocating invitations, navigating friendship dynamics — is its own invisible load category." },
      { type: "prompt", label: "Playdate logistics", text: "Help me draft a playdate invitation for my [age]-year-old to invite [friend's name] over on [day]. Include the time, what they'll do (we'll [activity]), and pickup time. Also write the follow-up thank you text for after. Keep both short and friendly." },
      { type: "image", src: "/img/articles/photo-1522202176988-66273c2fd55f-w800.jpg", alt: "Kids doing homework at a kitchen table, mom nearby" },
      { type: "h2", text: "Homework Help Without Doing It For Them" },
      { type: "prompt", label: "Homework helper", text: "My child is in [grade] and is working on [subject/assignment]. They're stuck on [specific concept]. I want to help them understand it without just giving them the answer. Explain [concept] in a way a [age]-year-old can understand, and give me 2-3 questions I can ask to guide them to the answer themselves." },
      { type: "pullquote", text: "\"Elementary school is where the systems matter. Build them now.\"" },
    ]
  },

  "middle-school": {
    id: "middle-school",
    category: "MILESTONES",
    title: "Middle School: When the Emotional Load Gets as Heavy as the Logistics",
    subtitle: "Friend drama, academic pressure, phone boundaries. How to actually be present for it.",
    readTime: "5 min",
    heroImage: "img-unsplash-8.jpg",
    heroAlt: "Mom and teen daughter talking at the kitchen table, honest warm moment",
    cta: { type: "course", label: "Take the Course →", href: "index.html" },
    body: [
      { type: "intro", text: "Middle school is where parenting gets genuinely hard in a different way. The logistics are still there — schedules, activities, school communication — but now there's an emotional layer that requires your full presence. The goal of AI here is to handle the logistics so you can show up for the parts that actually need you." },
      { type: "h2", text: "Managing the Academic Load" },
      { type: "text", text: "Middle school is when academics start mattering in a new way. Multiple teachers, different expectations, the beginning of grades that feel like they count. AI can help you track, prepare, and support." },
      { type: "prompt", label: "Mid-semester check-in", text: "My [grade] student seems to be struggling with [subject or situation]. I want to have a productive conversation with them about it without creating shame or pressure. Give me:\n1. What's developmentally normal for this age in terms of academic motivation\n2. How to open the conversation in a way they won't shut down\n3. Practical strategies that work for middle schoolers\n4. When it might be worth bringing in extra support" },
      { type: "h2", text: "Friend Drama and Social Complexity" },
      { type: "text", text: "Middle school social dynamics are genuinely complex and require nuance. AI won't have all the answers — but it can help you think through how to respond." },
      { type: "prompt", label: "Navigating friend drama", text: "My child came home and told me [describe the situation]. They're feeling [describe how they're feeling]. I want to be supportive without immediately problem-solving or dismissing their feelings. Help me think through: what's age-appropriate here, how to respond tonight, and whether this warrants any action from me as a parent." },
      { type: "image", src: "/img/articles/photo-1522202176988-66273c2fd55f-w800.jpg", alt: "Mom and teen talking honestly at kitchen table" },
      { type: "h2", text: "Phone and Screen Time Negotiations" },
      { type: "prompt", label: "Screen time conversation prep", text: "I need to have a conversation with my [age]-year-old about phone and screen time rules. They currently have [describe current setup]. I want to land on something that feels fair and actually sticks. Help me prepare for this conversation: the approach, the specific proposals I should have ready, and how to handle their likely objections." },
      { type: "pullquote", text: "\"The parts of middle school that need you can't be automated. Make sure AI handles everything else.\"" },
    ]
  },

  "high-school": {
    id: "high-school",
    category: "MILESTONES",
    title: "High School Moms: The AI Guide to the Four Most Overwhelming Years",
    subtitle: "College prep, test schedules, applications, financial aid. AI carries the cognitive weight.",
    readTime: "6 min",
    heroImage: "img-unsplash-32.jpg",
    heroAlt: "Mom helping teen with college application paperwork at desk",
    cta: { type: "course", label: "Take the Course →", href: "index.html" },
    body: [
      { type: "intro", text: "High school is four years of escalating logistics. Freshman year is deceptively manageable. Senior year is a full-time job on top of your actual life. The college process alone — the research, the visits, the essays, the applications, the financial aid — is one of the most information-dense projects most families ever undertake. Here's how AI helps." },
      { type: "h2", text: "Freshman and Sophomore Year: Building the Foundation" },
      { type: "prompt", label: "High school roadmap", text: "My child is entering [9th / 10th] grade. Help me build a high school roadmap that positions them well for college applications without burning them out. Include: course selection strategy, extracurricular recommendations, test prep timeline, and the things most families wish they'd started earlier." },
      { type: "h2", text: "Junior Year: The Research Begins" },
      { type: "prompt", label: "College list builder", text: "Help me think through building a college list for my child. They're interested in [fields/majors]. Their current GPA is approximately [X] and test scores are [X if available]. They want a school that is [describe — size, vibe, location, culture]. Our budget range is [describe]. Help me think through the right mix of reach, match, and safety schools and what criteria matter most for this specific student." },
      { type: "prompt", label: "Campus visit prep", text: "We're visiting [college name] next week. My child is interested in [major/field]. Help me prepare: the specific questions we should ask admissions, the departments or buildings worth seeking out, and the things to look for that won't appear in the brochure." },
      { type: "image", src: "/img/articles/photo-1525921429624-479b6a26d84d-w800.jpg", alt: "Mom and college-age child on a campus, happy and connected" },
      { type: "h2", text: "Senior Year: The Application Marathon" },
      { type: "prompt", label: "Essay topic brainstorm", text: "My child needs to write their college personal statement. The prompt is [paste the prompt]. Help them brainstorm: what experiences or qualities would be most compelling, what stories are worth telling, and what angles most students take that they should probably avoid. Note: we want to brainstorm and outline — AI will not write the essay for them." },
      { type: "prompt", label: "Financial aid research", text: "Help me understand the financial aid process for college applications. My family situation is [describe broadly]. What are the key deadlines, the difference between CSS Profile and FAFSA, and the most common mistakes families make? What questions should I be asking each school's financial aid office?" },
      { type: "pullquote", text: "\"The college process has a cognitive weight that no one warns you about. AI carries a significant portion of it.\"" },
    ]
  },

  "empty-nest": {
    id: "empty-nest",
    category: "MILESTONES",
    title: "College Drop-Off Is a Grief Nobody Prepares You For",
    subtitle: "She's gone. Now what? How mothers are using AI to rediscover who they are.",
    readTime: "4 min",
    heroImage: "img-unsplash-22.jpg",
    heroAlt: "Mom hugging college-age child at campus with emotional smile",
    cta: { type: "email", label: "Join the Community →", href: "subscribe.html" },
    body: [
      { type: "intro", text: "You've been building toward this. You wanted this for them. And it still hits like a wall. The empty bedroom. The quiet house. The sudden awareness that the identity of \"the mom who runs everything\" is now, quietly, optional." },
      { type: "text", text: "Empty nest isn't just logistically different. It's an identity shift. For many women, it's the first time in 18+ years that there's space to ask: what do I actually want? What did I set aside? Who was I before the school schedules and the carpools and the invisible load of being everyone else's person?" },
      { type: "pullquote", text: "\"The invisible load doesn't disappear in the empty nest. It just changes shape. And for the first time, you can actually put some of it down.\"" },
      { type: "h2", text: "Using This Chapter to Rebuild" },
      { type: "prompt", label: "The what-do-I-actually-want prompt", text: "I'm entering a new chapter — my youngest just left for college. For the first time in [X] years, I have genuine time and space. I feel [describe the mix of emotions — proud, lost, free, scared, all of it]. Help me think through: what did I used to love before I became a full-time parent? What have I always wanted to try? What does a life that's genuinely mine look like? Ask me questions to help me figure this out." },
      { type: "h2", text: "Staying Connected Without Hovering" },
      { type: "prompt", label: "How to stay close without being overbearing", text: "My child just started college. I want to stay connected and be available without becoming the mom who texts too much or calls at the wrong times. What do child development and family therapists generally recommend for this transition? And help me think through what a healthy communication rhythm might look like for both of us." },
      { type: "image", src: "/img/articles/photo-1522202176988-66273c2fd55f-w800.jpg", alt: "Woman in her 50s looking confident outdoors, smiling freely" },
      { type: "h2", text: "The Practical Shift" },
      { type: "text", text: "The logistics of an empty nest are genuinely different. Grocery shopping for two instead of five. A house that stays clean. Weekends without a schedule imposed on them. AI helps you reconfigure the systems — the meal planning, the household management, the weekly rhythms — around a life that's actually yours again." },
      { type: "prompt", label: "Reconfigure your household for two", text: "My household is now just [me / me and my partner]. For [X] years I've been running everything for a family of [X]. Help me reconfigure: grocery shopping and meal planning, household routines, how I spend my weekends, and what I want to start saying yes to that I've been postponing." },
    ]
  },

  "perimenopause": {
    id: "perimenopause",
    category: "MILESTONES",
    title: "Perimenopause + the Mental Load: The Double Burden Nobody Is Talking About",
    subtitle: "Brain fog, hormonal shifts, still running the household, possibly at peak career demands.",
    readTime: "5 min",
    heroImage: "img-unsplash-25.jpg",
    heroAlt: "Woman in her 40s at a bright home desk, focused and self-possessed",
    cta: { type: "course", label: "Build Your AI System →", href: "index.html" },
    body: [
      { type: "intro", text: "Perimenopause can start in your early 40s and last a decade. During that time, women often report memory lapses, difficulty concentrating, interrupted sleep, and mood shifts — while simultaneously running households, managing careers, and carrying the full invisible load of a family. Nobody is talking about the intersection of these two things. We are." },
      { type: "h2", text: "What's Actually Happening" },
      { type: "text", text: "Estrogen fluctuations directly affect the hippocampus — the brain region responsible for memory and learning. Progesterone changes affect sleep architecture. Sleep deprivation compounds cognitive effects. The result is a period where working memory and executive function are genuinely compromised — at exactly the time when most women are at peak career demands and family complexity." },
      { type: "text", text: "This isn't a performance problem. It's a biological one. And it's one that AI is uniquely positioned to help with." },
      { type: "pullquote", text: "\"Your brain is doing something real and significant. AI is the external hard drive for this chapter.\"" },
      { type: "h2", text: "AI as Cognitive Support" },
      { type: "text", text: "The brain fog of perimenopause affects working memory most — the ability to hold multiple things in mind simultaneously. This is exactly what AI is good at offloading. Keeping track of what needs to happen. Organizing the information. Holding the context so you don't have to." },
      { type: "prompt", label: "Your perimenopause support setup", text: "I'm navigating perimenopause and noticing that my working memory and focus are affected. I want to set up an AI system that helps compensate — not as a substitute for medical care, but as practical cognitive support. Help me build: a daily check-in practice, a way to capture and process everything on my mind, and a weekly reset that keeps me on top of what matters without overwhelm." },
      { type: "h2", text: "The Medical Research Side" },
      { type: "prompt", label: "Perimenopause research prep", text: "I'm preparing for an appointment with my OB/GYN or a menopause specialist about perimenopause symptoms. My main concerns are: [list your symptoms]. Help me prepare: the questions I should ask, the information I should bring, and what I should know about current treatment options (HRT, lifestyle, alternatives) so I can have an informed conversation." },
      { type: "image", src: "/img/articles/photo-1522202176988-66273c2fd55f-w800.jpg", alt: "Confident woman in her mid-40s smiling outdoors" },
      { type: "h2", text: "You're Not Losing It" },
      { type: "text", text: "Women in perimenopause often describe feeling like they're \"losing their mind\" — and then feel shame about it. You're not. Your brain is in a significant hormonal transition. The women who navigate it best are the ones who get the medical support they need AND build external systems to compensate for what's temporarily harder. Both matter." },
    ]
  },

  "menopause": {
    id: "menopause",
    category: "MILESTONES",
    title: "Menopause Is the Beginning of Reclaiming Your Time. AI Helps.",
    subtitle: "Research shows post-menopausal women report clarity, ambition, and purpose. Build the infrastructure for that chapter.",
    readTime: "4 min",
    heroImage: "img-mom-1.png",
    heroAlt: "Woman in her 50s outdoors, confident, smiling freely",
    cta: { type: "course", label: "Build Your AI System →", href: "index.html" },
    body: [
      { type: "intro", text: "The narrative around menopause is almost entirely about what's lost. The hot flashes, the sleep disruption, the end of fertility. What gets almost no attention: the research consistently showing that post-menopausal women report some of the highest levels of life satisfaction, creative energy, and sense of purpose of their adult lives." },
      { type: "text", text: "There's a reason Indigenous cultures call it the \"grandmother effect\" — the cognitive and emotional resources previously allocated to reproduction and early childcare become available for other things. The question is: have you built the infrastructure to use them?" },
      { type: "pullquote", text: "\"The invisible load of childrearing years can finally be set down. AI helps you figure out what to pick up next.\"" },
      { type: "h2", text: "What This Chapter Looks Like With AI" },
      { type: "prompt", label: "Designing the next chapter", text: "I'm entering or in menopause. For the first time in years, I feel a sense of clarity and energy returning. I want to be intentional about how I use it. Help me think through: what do I want to build, pursue, or return to in this chapter? What have I been postponing? What would \"investing in myself\" actually look like? Ask me questions to help figure this out." },
      { type: "h2", text: "Health and Medical Navigation" },
      { type: "prompt", label: "Menopause medical prep", text: "I want to have a thorough conversation with my doctor about menopause management. My current symptoms are: [list]. I want to understand my options including HRT, lifestyle interventions, and alternative approaches. Help me prepare: the questions to ask, the information I should bring, and what the current evidence says about each option." },
      { type: "image", src: "/img/articles/photo-1529156069898-49953e39b3ac-w800.jpg", alt: "Group of women in their 50s laughing together, full of energy" },
      { type: "h2", text: "The Practical Reconfiguration" },
      { type: "text", text: "If your kids are grown or nearly grown, your household has fundamentally changed. The systems you built for a family of five don't apply anymore. Building new ones — around your life, your needs, your rhythms — is one of the most satisfying things AI can help with." },
      { type: "prompt", label: "Reconfigure your life systems for this chapter", text: "My life has significantly changed in the last few years — [describe what's shifted: kids leaving, career change, relationship change, etc.]. The systems I had in place were built for a different version of my life. Help me redesign: daily routines, how I manage my time, what I want to prioritize, and what I want to let go of completely." },
    ]
  },

  "solo-mom": {
    id: "solo-mom",
    category: "MILESTONES",
    title: "Solo Mom, AI Co-Pilot: You Shouldn't Have to Do This Alone",
    subtitle: "Single mothers carry 100% of the invisible load. AI handles a meaningful portion of it.",
    readTime: "4 min",
    heroImage: "img-unsplash-20.jpg",
    heroAlt: "Black mother on couch with laptop, young child playing on floor beside her",
    cta: { type: "aime", label: "Meet Aime →", href: "aime.html" },
    body: [
      { type: "intro", text: "There's no version of the invisible load harder than the single mom's. There's no one to hand things off to. No one to divide the research, remember the forms, handle the pediatrician calls while you're in a meeting. It's all you, all the time. AI doesn't replace a partner — but it does absorb a genuine and significant portion of what's been entirely yours." },
      { type: "h2", text: "The Triage Problem" },
      { type: "text", text: "When you're doing everything alone, triage — what to handle now vs. what can wait — becomes critical. Running everything at the same priority level is a recipe for burnout. AI is genuinely useful for helping you figure out what actually matters this week." },
      { type: "prompt", label: "Weekly solo mom triage", text: "I'm a single mom to [kids, ages]. Here's everything on my plate right now: [brain dump everything]. Help me triage this into: must handle this week, can wait until next week, can delegate or automate, and just needed to get out of my head. Be honest about what's actually urgent vs. what just feels urgent." },
      { type: "h2", text: "The Research and Decision Load" },
      { type: "text", text: "Two-parent households split the research burden even when they don't think about it. One person looks into schools, the other looks into camps. One finds the plumber, the other finds the tutor. Alone, all of it comes to you. AI is the fastest research assistant you'll ever have." },
      { type: "prompt", label: "Solo research sprint", text: "I need to research [topic] for my family. I'm a single parent and I need the information organized and distilled — not a list of sources to read. Please research this topic and give me: the key information I need, the main options I should consider, the questions I should be asking, and your honest take on the best path forward." },
      { type: "image", src: "/img/articles/photo-1547592180-85f173990554-w800.jpg", alt: "Mom and child cooking together in the kitchen, joyful" },
      { type: "pullquote", text: "\"AI doesn't replace the support you deserve. But it does show up every time you need it, without complaint.\"" },
      { type: "h2", text: "Building Your Support Network" },
      { type: "prompt", label: "Building your village", text: "As a single mom, I know I need to build more support around me but I'm not sure where to start. Help me think through: what kinds of support would actually help most (practical vs. emotional), how to ask for help in ways that are easy for people to say yes to, and what I can automate or outsource to reduce the load." },
    ]
  },

  "return-to-work": {
    id: "return-to-work",
    category: "MILESTONES",
    title: "AI for the Return-to-Work Mom: Your 30-Day Ramp Plan",
    subtitle: "Close the gap. Rebuild confidence. Show up sharper than you left.",
    readTime: "5 min",
    heroImage: "img-mom-4.png",
    heroAlt: "Woman walking confidently into an office, purposeful stride",
    cta: { type: "course", label: "Take the Course →", href: "index.html" },
    body: [
      { type: "intro", text: "Returning to work after a career pause — whether it was maternity leave, caregiving, or intentional time off — comes with a specific kind of anxiety. The world moved. Things changed. You're worried about the gap on your resume and the gap in your confidence. Here's how AI compresses the ramp." },
      { type: "h2", text: "Week 1: Get Current Fast" },
      { type: "prompt", label: "Industry catch-up", text: "I'm returning to work in [field/industry] after a [X month/year] career pause. I need to get current quickly. Help me: understand what's changed in [industry] in the last [X] years, identify the key terms and technologies I should know, and give me a reading list I can get through in one week." },
      { type: "prompt", label: "Resume gap framing", text: "I have a [X year] gap in my resume during which I [what you did — raised children, cared for a parent, etc.]. Help me frame this in a way that is honest, confident, and positions it as a strength rather than something to apologize for. Give me language for: the resume itself, the cover letter, and the interview question 'can you walk me through your gap?'" },
      { type: "h2", text: "Week 2: Rebuild Your Professional Voice" },
      { type: "prompt", label: "LinkedIn profile refresh", text: "I'm returning to work after [X] years. Help me rewrite my LinkedIn profile to: position the gap honestly and confidently, highlight skills that are still relevant and transferable, and signal that I'm current and ready. My background: [paste your current profile or describe your experience]." },
      { type: "image", src: "/img/articles/photo-1524502397800-2eeaad7c3fe5-w800.jpg", alt: "Woman walking into office building, confident" },
      { type: "h2", text: "Week 3-4: Rebuild the Professional Muscle" },
      { type: "prompt", label: "Interview prep", text: "I have an interview for [role] at [type of company]. I've been out of the workforce for [X] years. Help me prepare: the 5 questions I'm most likely to be asked, how to answer each one given my situation, and how to talk about my time off in a way that's confident and forward-looking." },
      { type: "pullquote", text: "\"The gap doesn't define your capability. How you talk about it does.\"" },
      { type: "h2", text: "Managing Both Worlds" },
      { type: "prompt", label: "Reentry logistics", text: "I'm returning to work [full time / part time] in [X weeks]. I have [kids, ages] at home. Help me think through the logistics I need to solve before my first day: childcare coverage, morning and evening routines, who handles what, and what I need to communicate to my household to make this sustainable." },
    ]
  },

  // ═══════════════════════════════════
  // WORK
  // ═══════════════════════════════════

  "ai-at-work": {
    id: "ai-at-work",
    category: "WORK",
    title: "How to Use AI at Work Before Anyone Else Figures It Out",
    subtitle: "The quiet edge. Prep faster, write better, think clearer.",
    readTime: "4 min",
    heroImage: "img-unsplash-12.jpg",
    heroAlt: "Woman in office with laptop, sharp and in control",
    cta: { type: "course", label: "The Working Mom's AI System →", href: "index.html" },
    body: [
      { type: "intro", text: "The women who are quietly using AI at work aren't sharing it in all-hands meetings. They're showing up to Monday morning with a memo that would have taken them three hours drafted in 20 minutes. Their emails are cleaner. Their presentations are sharper. They look like they have more time than everyone else — because they do." },
      { type: "h2", text: "The Five Highest-Value Work Uses" },
      { type: "text", text: "First draft generation: any document, email, proposal, or communication that starts as a blank page. Give AI the context and the goal — it gives you a strong first draft you edit rather than a blank page you fill." },
      { type: "text", text: "Meeting prep: research, agenda review, talking points, and the questions you should be asking but might not think of in the moment." },
      { type: "text", text: "Information synthesis: you have 40 pages of material to understand before a meeting tomorrow. AI reads it, summarizes what matters, and flags what you should pay attention to." },
      { type: "text", text: "Communication refinement: you wrote something that feels slightly off — too aggressive, too passive, unclear. AI diagnoses and fixes it." },
      { type: "text", text: "Decision support: you're facing a choice and want someone to push back on your thinking. AI plays devil's advocate and surfaces what you might be missing." },
      { type: "h2", text: "The Prompts Worth Having at Work" },
      { type: "prompt", label: "The briefing doc", text: "I have a meeting with [person/group] about [topic] in [X hours]. Here's what I know: [paste relevant info]. Help me prepare: a one-paragraph background summary, 3 key points I want to make, 3 questions I should ask, and a potential objection I should be ready for." },
      { type: "prompt", label: "The tone check", text: "I wrote this [email / Slack message / document] and I'm not sure if the tone is right. I want to come across as [describe the intended tone]. Here's what I wrote: [paste it]. What's working and what should I change?" },
      { type: "image", src: "/img/articles/photo-1522202176988-66273c2fd55f-w800.jpg", alt: "Woman focused on laptop in flow state, coffee nearby" },
      { type: "pullquote", text: "\"The quiet edge isn't about working less. It's about thinking better.\"" },
      { type: "h2", text: "One Important Caveat" },
      { type: "text", text: "Don't submit AI output directly. Read it, edit it, make it yours. Not because it's wrong — because your voice and your judgment are what make you irreplaceable. AI accelerates your thinking. It doesn't replace it." },
    ]
  },

  "email-prompt": {
    id: "email-prompt",
    category: "WORK",
    title: "The Email Prompt That Saved Me 6 Hours a Week",
    subtitle: "Draft, refine, send — in your voice, in a fraction of the time.",
    readTime: "3 min",
    heroImage: "img-unsplash-14.jpg",
    heroAlt: "Woman focused on laptop, clearly in flow state",
    cta: { type: "course", label: "Get the Full Prompt Library →", href: "index.html" },
    body: [
      { type: "intro", text: "Email is where knowledge worker time goes to die. Not because of volume, but because of the decisions. What tone? How direct? How much context? How do I say this without starting a thing? AI makes these decisions faster than you do, and with less emotional energy." },
      { type: "h2", text: "The Master Email Prompt" },
      { type: "prompt", label: "For any professional email", text: "Write an email for me. Here's the context:\n\n- Who I'm writing to: [role, relationship to me]\n- What I need to communicate: [the point]\n- The tone I want: [direct / warm / firm / collaborative / apologetic / enthusiastic]\n- What I want them to do after reading: [the action]\n- Anything to avoid: [sensitivities, what not to say]\n- Length: [brief / standard / thorough]\n\nWrite a draft I can review and edit." },
      { type: "h2", text: "Specific Situations That Come Up Constantly" },
      { type: "prompt", label: "Saying no professionally", text: "I need to decline [request] from [person/organization]. I want to be clear and firm without being rude, and leave the door open for [future possibility if any]. I don't want to over-explain. Draft a response that's 3-4 sentences maximum." },
      { type: "prompt", label: "Following up without being annoying", text: "I sent [describe original email/request] to [person] on [date]. I haven't heard back. I need to follow up in a way that's professional and not passive-aggressive. This is follow-up number [X]. Adjust the tone accordingly." },
      { type: "prompt", label: "The difficult feedback email", text: "I need to give feedback to [person/vendor/colleague] about [issue]. I want to be direct and clear without making it personal or starting a conflict. The key points are: [list them]. Draft an email that's honest, specific, and forward-looking." },
      { type: "image", src: "/img/articles/photo-1524502397800-2eeaad7c3fe5-w800.jpg", alt: "Woman at laptop, composed and efficient" },
      { type: "pullquote", text: "\"The time saved isn't in the typing. It's in the decision-making.\"" },
      { type: "h2", text: "Making It Sound Like You" },
      { type: "text", text: "The first draft will need editing to sound like you. Do it — and notice what you change. After a few rounds, add those preferences to your prompt: \"I tend to open with a direct statement rather than small talk. I prefer shorter sentences. I don't use the word 'leverage.'\" The longer you use it, the closer the first draft gets to your actual voice." },
    ]
  },

  "meeting-prep": {
    id: "meeting-prep",
    category: "WORK",
    title: "How to Prep for Any Meeting in 3 Minutes With AI",
    subtitle: "Research, talking points, smart questions, follow-up draft. Before you walk in.",
    readTime: "3 min",
    heroImage: "img-unsplash-8.jpg",
    heroAlt: "Woman reviewing notes before a meeting, composed and prepared",
    cta: { type: "course", label: "The Working Mom's AI System →", href: "index.html" },
    body: [
      { type: "intro", text: "The difference between a good meeting and a great one is almost always preparation. Who's in the room, what they care about, what you want out of it, and the question nobody else will think to ask. AI handles the prep work in minutes." },
      { type: "h2", text: "The 3-Minute Meeting Prep Prompt" },
      { type: "prompt", label: "Run this before any meeting", text: "I have a meeting in [X time] about [topic]. Attendees: [list names/roles]. My goal for this meeting: [what I want to achieve]. Background info I have: [paste any relevant context, agenda, or notes].\n\nPlease give me:\n1. A 2-sentence summary of what this meeting is really about\n2. My 3 most important talking points\n3. 3 smart questions I should ask\n4. One potential objection or complication I should be ready for\n5. A suggested outcome to close toward" },
      { type: "h2", text: "After the Meeting" },
      { type: "prompt", label: "Follow-up email draft", text: "The meeting about [topic] just ended. Key decisions made: [list]. Action items: [list who is doing what by when]. Next steps: [what happens next]. Draft a concise follow-up email I can send to attendees that confirms what was decided and who's responsible for what. Tone: professional, clear, brief." },
      { type: "image", src: "/img/articles/photo-1524502397800-2eeaad7c3fe5-w800.jpg", alt: "Woman in meeting, confident and engaged" },
      { type: "pullquote", text: "\"You'll be the best-prepared person in the room. Every time.\"" },
      { type: "h2", text: "For High-Stakes Meetings" },
      { type: "prompt", label: "Performance review prep", text: "I have my performance review with [manager name] on [date]. I want to walk in prepared. My biggest wins this year: [list]. Areas where I want to ask for support: [list]. My goal from this conversation: [raise / promotion / recognition / feedback]. Help me prepare: what to say, how to frame my contributions, and how to handle any difficult questions." },
    ]
  },

  "working-mom-playbook": {
    id: "working-mom-playbook",
    category: "WORK",
    title: "The Working Mom's AI Playbook",
    subtitle: "Six workflows that let you perform at your peak — even on the days when everything is also happening at once.",
    readTime: "6 min",
    heroImage: "img-unsplash-25.jpg",
    heroAlt: "Mom working at kitchen table on laptop, child doing homework beside her",
    cta: { type: "course", label: "Build Your Full System →", href: "index.html" },
    body: [
      { type: "intro", text: "Working mothers don't get more hours in the day. They get better systems — or they don't, and they burn out. These are the six AI workflows that make the biggest difference for the women in our community who are doing both at high levels." },
      { type: "h2", text: "Workflow 1: The Morning Brain Clear" },
      { type: "text", text: "Before you open email, open AI. Spend 3 minutes dumping everything in your head — work tasks, home tasks, things you're anxious about. Ask AI to categorize and prioritize. You start the day from intention, not from reaction." },
      { type: "h2", text: "Workflow 2: The Parallel Track" },
      { type: "text", text: "Work tasks and home tasks run on parallel tracks. The mistake is trying to hold both in your head simultaneously. AI manages the home track — the meal plan, the school forms, the research task you've been avoiding — so your brain can be fully at work when you're at work." },
      { type: "h2", text: "Workflow 3: The Communication Stack" },
      { type: "text", text: "Batch your email and communication tasks. Once in the morning, once before EOD. Use AI to draft everything in the batch — work emails, school emails, social commitments. Review and send. This alone saves most women 5+ hours a week." },
      { type: "h2", text: "Workflow 4: The Weekly Sunday Set" },
      { type: "text", text: "Sunday evening: run the weekly reset prompt. Get your work week and home week planned simultaneously. Know what's coming, what needs decisions, and what can wait. Monday stops feeling like it's happening to you." },
      { type: "image", src: "/img/articles/photo-1524502397800-2eeaad7c3fe5-w800.jpg", alt: "Woman at table with laptop, coffee, organized and calm" },
      { type: "h2", text: "Workflow 5: The Decision Offload" },
      { type: "text", text: "Decision fatigue is real and it compounds. Every small decision — what's for dinner, what to respond to the school email, whether to say yes to the thing — depletes the same mental resource. Batch the small decisions to AI. Save your decision-making capacity for the ones that actually matter." },
      { type: "h2", text: "Workflow 6: The End-of-Day Close" },
      { type: "text", text: "Before you leave work — physically or mentally — do a 2-minute close. Tell AI what you got done, what's moving to tomorrow, and one thing that needs to happen first thing. You close the work loop and transition to home with intention." },
      { type: "pullquote", text: "\"The goal isn't to do more. It's to stop letting the small things eat the hours that belong to the big ones.\"" },
    ]
  },

  // ═══════════════════════════════════
  // TOOLS & AIME
  // ═══════════════════════════════════

  "meet-aime": {
    id: "meet-aime",
    category: "TOOLS",
    title: "Meet Aime: Your AI Chief Everything Officer™",
    subtitle: "She runs your household. Manages your week. Never sleeps, never judges.",
    readTime: "3 min",
    heroImage: "img-mom-1.png",
    heroAlt: "Woman relaxed on sofa with laptop, looking peaceful and unbothered",
    cta: { type: "aime", label: "Try Aime →", href: "aime.html" },
    body: [
      { type: "intro", text: "Aime is what happens when you stop using AI as a one-off tool and start using it as an actual operating system for your life. She's built on Claude, trained specifically for the complexity of modern motherhood, and available any time you need her." },
      { type: "h2", text: "What Aime Actually Does" },
      { type: "text", text: "Aime knows your family. Once you set up your profile — family members, schedules, dietary preferences, recurring commitments — every conversation starts from a place of context. You don't explain your life every time. She already knows it." },
      { type: "text", text: "Aime runs your weekly reset. Every Sunday, you check in. She reviews what's coming, helps you plan meals, flags schedule conflicts, and sends you into Monday with a prioritized plan." },
      { type: "text", text: "Aime handles the one-off tasks. The email you need to write, the decision you're stuck on, the research you've been putting off. You ask. She handles it." },
      { type: "pullquote", text: "\"The assistant you always deserved but never had. Available now.\"" },
      { type: "image", src: "/img/articles/photo-1474552226712-ac0f0961a954-w800.jpg", alt: "Woman with coffee and open laptop, looking calm and in control of her day" },
      { type: "h2", text: "What Aime Is Not" },
      { type: "text", text: "Aime is not a replacement for human connection. Not a therapist. Not a medical advisor. She's a highly capable AI assistant built specifically for the operational reality of managing a family and a life. She's the part of the Chief Everything Officer™ job that shouldn't require a human brain." },
      { type: "h2", text: "Getting Started" },
      { type: "text", text: "Start with the family profile. It takes 10 minutes and it's the foundation for everything Aime does well. Once she knows your life, the quality of what she gives you changes completely." },
    ]
  },

  "micro-tools": {
    id: "micro-tools",
    category: "TOOLS",
    title: "The ai.moms™ Micro-Tools You Didn't Know You Needed",
    subtitle: "Purpose-built tools that do one thing exceptionally well.",
    readTime: "3 min",
    heroImage: "img-unsplash-14.jpg",
    heroAlt: "Woman scrolling through apps on her phone at kitchen table",
    cta: { type: "tool", label: "Browse All Tools →", href: "toolkit.html" },
    body: [
      { type: "intro", text: "General AI tools are powerful. But sometimes you want something that's been purpose-built for a specific problem — something that asks you the right questions, already knows the context, and gives you exactly what you need without the setup. That's what our micro-tools are for." },
      { type: "h2", text: "The Meal Planner" },
      { type: "text", text: "Enter your family's dietary preferences, restrictions, and typical schedule once. Get a personalized weekly meal plan instantly, including a consolidated grocery list. No prompting required — it already knows your constraints." },
      { type: "h2", text: "The Summer Camp Finder" },
      { type: "text", text: "Enter your child's age, interests, location, budget, and available dates. Get a shortlist of camps worth investigating, plus the questions to ask each one. Cuts camp research from a 6-hour project to an afternoon." },
      { type: "h2", text: "SafeSitter™" },
      { type: "text", text: "Babysitter vetting, done properly. Enter your family's details and SafeSitter™ generates: an interview question set, a reference check script, a red flag guide, and a written agreement template. Everything you need to feel confident about who's in your home." },
      { type: "image", src: "/img/articles/photo-1491975474562-1f4e30bc9468-w800.jpg", alt: "Organized home workspace, calm and ready" },
      { type: "pullquote", text: "\"Built for the specific problems. Not the general ones.\"" },
      { type: "h2", text: "Why Micro-Tools vs. General AI" },
      { type: "text", text: "General AI requires you to write the prompt, provide the context, and know what to ask for. Micro-tools are pre-loaded with the right questions and context for a specific use case. They're faster, more accurate for their specific task, and require no learning curve. We build them for the most common, high-friction invisible load tasks." },
    ]
  },

  "safesitter": {
    id: "safesitter",
    category: "TOOLS",
    title: "How to Vet a Babysitter Using AI and SafeSitter™",
    subtitle: "Interview questions, red flags, reference checks, emergency docs. All of it.",
    readTime: "4 min",
    heroImage: "img-unsplash-16.jpg",
    heroAlt: "Mom and young babysitter at the front door, warm and professional handoff",
    cta: { type: "tool", label: "Try SafeSitter™ →", href: "toolkit.html" },
    body: [
      { type: "intro", text: "Finding a babysitter is stressful. Vetting one properly is even more so — because most of us don't know exactly what to ask, and we feel awkward asking it. SafeSitter™ takes the discomfort out of the process by giving you everything you need to make a confident decision." },
      { type: "h2", text: "The Interview Questions You Actually Need" },
      { type: "prompt", label: "Babysitter interview prep", text: "I'm interviewing babysitter candidates for my [ages] kids. Help me create a comprehensive interview guide including:\n1. 8-10 interview questions that reveal reliability, experience, and how they handle difficult situations with kids this age\n2. Scenario-based questions (e.g. 'What would you do if...')\n3. What ideal answers look like vs. red flag responses\n4. 3 questions to ask their references" },
      { type: "h2", text: "The Reference Check Script" },
      { type: "text", text: "Most people call references and ask \"How was she?\" and get a glowing answer that tells them nothing. A reference check is only useful if you ask the right questions." },
      { type: "prompt", label: "Reference check script", text: "Write me a reference check script for a babysitter candidate. The questions should be specific enough to get useful information, including: reliability, how they handled difficult situations, how kids responded to them, and whether the reference would hire them again. Include the key question that gets the most honest answer." },
      { type: "image", src: "/img/articles/photo-1516627145497-ae6968895b74-w800.jpg", alt: "Children playing happily, well supervised" },
      { type: "h2", text: "The Household Information Document" },
      { type: "prompt", label: "Babysitter briefing document", text: "Create a babysitter information document for my household. Include sections for:\n- Emergency contacts (with blanks to fill in)\n- Children's information (names, ages, medical info, allergies)\n- House rules and routines\n- Meal and snack options\n- Bedtime routine\n- Screen time and device policy\n- What to do in various emergencies\n- Nearest hospital and our address formatted for 911\n\nFormat it cleanly so I can print or share it digitally." },
      { type: "pullquote", text: "\"The goal isn't to be suspicious. It's to be informed. That's what confident parenting looks like.\"" },
    ]
  },

  "ai-toolkit": {
    id: "ai-toolkit",
    category: "TOOLS",
    title: "The AI Toolkit for Moms: What to Use — and When",
    subtitle: "The definitive guide to which tool does what.",
    readTime: "5 min",
    heroImage: "img-unsplash-9.jpg",
    heroAlt: "Group of women around a table with laptops, collaborating",
    cta: { type: "tool", label: "Browse the Toolkit →", href: "toolkit.html" },
    body: [
      { type: "intro", text: "The AI landscape is overwhelming. New tools every week. Everyone has an opinion. Here's the honest, practical breakdown of what's actually worth your time — organized by what you're trying to do." },
      { type: "h2", text: "For Thinking and Writing: Claude" },
      { type: "text", text: "Nuanced conversations, long documents, complex decisions, anything that benefits from context and memory within a session. Writing tasks where voice and tone matter. Research synthesis. Claude is where we spend most of our time and what we teach with." },
      { type: "h2", text: "For Quick Answers and Search: Perplexity" },
      { type: "text", text: "When you want current information with sources. Perplexity searches the web in real time and gives you a synthesized answer with citations. Better than Googling for most research questions because it gives you an answer, not 40 links." },
      { type: "h2", text: "For Voice and Transcription: Wispr Flow" },
      { type: "text", text: "The voice-to-text tool that works inside any app. Talk your brain dump, your email draft, your prompt — directly into whatever you're using. Works on desktop and mobile. The mothers in our community who use this report the biggest time savings of any single tool." },
      { type: "image", src: "/img/articles/photo-1484480974693-6ca0a78fb36b-w800.jpg", alt: "Woman using phone efficiently, in flow" },
      { type: "h2", text: "For Family Management: Aime" },
      { type: "text", text: "When you want AI that already knows your family. Aime is built on Claude but pre-loaded with the context and workflows for running a household. Weekly reset, meal planning, task management, the Sunday briefing — all in one place." },
      { type: "h2", text: "For Specific Tasks: The ai.moms™ Micro-Tools" },
      { type: "text", text: "Meal Planner, Summer Camp Finder, SafeSitter™ — purpose-built for the specific high-friction tasks that come up repeatedly. Faster than setting up a general AI conversation for a specific recurring need." },
      { type: "pullquote", text: "\"You don't need 20 tools. You need 3-4 right ones that you actually use.\"" },
      { type: "h2", text: "What to Ignore (For Now)" },
      { type: "text", text: "Image generation tools, video tools, complex automation platforms — unless you have a specific use case, these are noise. Start with language-based AI, get genuinely good at it, and then expand if you have a real need. The mothers who try to use everything end up using nothing well." },
    ]
  },

  // ═══════════════════════════════════
  // NEUROSCIENCE
  // ═══════════════════════════════════

  "invisible-load": {
    id: "invisible-load",
    category: "NEUROSCIENCE",
    title: "The Invisible Load Has Finally Met Its Match",
    subtitle: "How AI is giving mothers the one thing we never had — a second brain that actually works.",
    readTime: "5 min",
    heroImage: "img-unsplash-13.jpg",
    heroAlt: "Woman standing at window, hands lightly on her head, thoughtful",
    cta: { type: "course", label: "Build Your System →", href: "index.html" },
    body: [
      { type: "intro", text: "The invisible load isn't a metaphor. It's a measurable, documented, neurological reality — and it's been carried almost exclusively by women since before anyone named it. Until recently, there was no solution. Just better management. More efficient suffering." },
      { type: "h2", text: "What the Research Says" },
      { type: "text", text: "Studies consistently show that mothers perform a disproportionate share of what researchers call 'cognitive labor' — the planning, anticipating, organizing, and remembering that keeps a family functioning. This isn't about the tasks themselves. It's about the mental bandwidth required to track that the tasks need to happen, coordinate their timing, and hold everyone else's needs in working memory simultaneously." },
      { type: "text", text: "This cognitive load has measurable effects: reduced working memory, decision fatigue, impaired executive function, and elevated cortisol. It's not stress. It's structural overload." },
      { type: "pullquote", text: "\"Eliminate the load. Don't just manage it better.\"" },
      { type: "h2", text: "Why Previous Solutions Didn't Work" },
      { type: "text", text: "\"Just ask for help\" assumes equal willingness and capability from partners who haven't built the same cognitive map. Task-sharing apps require someone to input the tasks in the first place — which is itself cognitive labor. Productivity systems add maintenance overhead to an already overloaded brain." },
      { type: "text", text: "None of these eliminated the load. They redistributed the tasks while leaving the management, the tracking, and the anticipation entirely with the mother." },
      { type: "h2", text: "Why AI Is Different" },
      { type: "text", text: "AI doesn't just do tasks. It holds information. It anticipates. It tracks. It generates the options, does the research, drafts the communications, and flags what needs attention before it becomes urgent. For the first time, there's something that can hold a meaningful portion of the cognitive map alongside you — or instead of you." },
      { type: "image", src: "/img/articles/photo-1522202176988-66273c2fd55f-w800.jpg", alt: "Woman with laptop and coffee, calm and unencumbered" },
      { type: "h2", text: "What This Actually Looks Like" },
      { type: "text", text: "It looks like a Sunday morning where the week is already planned because you ran a 10-minute reset with AI on Saturday night. A morning where the groceries are handled because AI built the list from the meal plan it also generated. An afternoon where you're present for your kids because you're not simultaneously running through the mental checklist of everything you might be forgetting." },
    ]
  },

  "neuroscience-mental-load": {
    id: "neuroscience-mental-load",
    category: "NEUROSCIENCE",
    title: "The Neuroscience of the Mental Load — And Why AI Fixes It",
    subtitle: "Your brain wasn't built for 300 decisions a day. Here's what's actually happening.",
    readTime: "5 min",
    heroImage: "img-unsplash-24.jpg",
    heroAlt: "Close-up of woman's face in thought, serene and focused",
    cta: { type: "course", label: "Build Your AI System →", href: "index.html" },
    body: [
      { type: "intro", text: "The feeling that your brain is full isn't a feeling. It's a neurological fact. Working memory — the cognitive system responsible for holding and manipulating information in the moment — has a fixed capacity. Mothers regularly exceed it. Here's what that does to your brain and why AI is the only solution that works at the level of the actual problem." },
      { type: "h2", text: "Working Memory: Your Brain's RAM" },
      { type: "text", text: "Working memory is where active thinking happens. It holds the information you're currently using, combines it with what you already know, and produces decisions, plans, and actions. The problem: it can only hold 4-7 items simultaneously. Beyond that, items get dropped or processing slows dramatically." },
      { type: "text", text: "A mother managing a household is regularly asking her working memory to hold: the week's schedule, the state of the fridge, who needs to be where when, what decisions are pending, what's been promised to whom, and what's coming up that she hasn't dealt with yet. That's not 7 items. That's 40." },
      { type: "h2", text: "Decision Fatigue Is Neurologically Real" },
      { type: "text", text: "Every decision — regardless of how small — draws from the same cognitive resource. The famous Israeli judge study showed that parole decisions became significantly less favorable as the day went on and judges' mental resources depleted. The same happens to mothers every day, starting around 2pm." },
      { type: "pullquote", text: "\"By dinner, you've made 200 decisions. No wonder 'what do you want to eat?' is the one that breaks you.\"" },
      { type: "h2", text: "Why Sleep Doesn't Fully Fix It" },
      { type: "text", text: "Sleep restores cognitive capacity — but not the information load. You wake up rested, and the list is still there. The cognitive map is still there. AI doesn't just give you rest. It holds the map so your rested brain can focus on what actually needs human judgment." },
      { type: "h2", text: "Where AI Fits in the Neuroscience" },
      { type: "text", text: "AI doesn't improve your working memory capacity. But it offloads the contents — the tracking, the research, the communication, the planning — so your working memory can actually work on what matters. It's the cognitive equivalent of having an excellent executive assistant who handles everything that doesn't require you specifically." },
      { type: "image", src: "/img/articles/photo-1522202176988-66273c2fd55f-w800.jpg", alt: "Woman walking outdoors looking clear-eyed and present" },
    ]
  },

  "mothers-brains": {
    id: "mothers-brains",
    category: "NEUROSCIENCE",
    title: "Why Mothers' Brains Are Wired Differently — And What That Means for AI",
    subtitle: "The science behind why delegation feels so hard — and why AI changes the equation.",
    readTime: "5 min",
    heroImage: "img-mom-2.png",
    heroAlt: "Mom reading with young child in warm afternoon light, tender moment",
    cta: { type: "course", label: "Build Your AI System →", href: "index.html" },
    body: [
      { type: "intro", text: "The maternal brain is genuinely different. Not metaphorically — structurally and functionally different, in ways that are measurable on brain scans and documented in peer-reviewed research. Understanding these changes helps explain why the invisible load lands where it does — and why certain kinds of AI support are uniquely suited to this stage of life." },
      { type: "h2", text: "Matrescence: The Brain Change Nobody Talks About" },
      { type: "text", text: "Matrescence — the developmental process of becoming a mother — involves significant, lasting changes to brain structure. Gray matter volume decreases in regions associated with social cognition (this is efficiency, not loss — the brain streamlines for parenting). Hypervigilance circuits activate and stay active. The ability to detect and respond to need signals — in children, in partners, in anyone in the household — becomes heightened." },
      { type: "text", text: "This is why mothers notice things. Not because they're worriers. Because their brains were literally rewired to track and respond to the needs of others." },
      { type: "pullquote", text: "\"The hypervigilance that makes you a great mother is also what makes the invisible load so heavy.\"" },
      { type: "h2", text: "Why Delegation Feels Hard" },
      { type: "text", text: "The same hypervigilance that tracks every need also makes it hard to trust that someone else will track them. Delegating a task means accepting that it might be done differently — or incompletely — and that the resulting problem will come back to you. For a brain wired to prevent problems before they happen, this is genuinely threatening, not just a preference." },
      { type: "text", text: "This is why \"just ask your partner\" doesn't work. And why AI is different: AI doesn't do things halfway and leave you to fix them. It produces complete outputs that meet the standard you specify. The hypervigilance brain can actually relax." },
      { type: "h2", text: "The Long Game" },
      { type: "text", text: "Post-maternal brain research shows that the structural changes from matrescence persist — and that they're associated with specific cognitive strengths: enhanced empathy, stronger social cognition, more sophisticated anticipation of others' needs. These are assets. The question is whether the women who have them are spending those assets on tasks that deserve them — or on planning what's for dinner on Tuesday." },
      { type: "image", src: "/img/articles/photo-1474552226712-ac0f0961a954-w800.jpg", alt: "Woman at table, present, calm, and in her element" },
    ]
  },

  "decision-fatigue": {
    id: "decision-fatigue",
    category: "NEUROSCIENCE",
    title: "Decision Fatigue Is Real. Here's the Research — And the Fix.",
    subtitle: "What happens to your brain after decision 200 — and how to protect what matters.",
    readTime: "4 min",
    heroImage: "img-unsplash-7.jpg",
    heroAlt: "Tired woman at desk, head in hands, stacks of papers around her",
    cta: { type: "course", label: "Build Your AI System →", href: "index.html" },
    body: [
      { type: "intro", text: "Researchers estimate that adults make approximately 35,000 decisions per day. Mothers, managing not only their own lives but coordinating entire households, consistently land at the high end of that range. Decision fatigue — the cognitive degradation that results from making too many decisions — is measurable, predictable, and almost entirely avoidable with the right system." },
      { type: "h2", text: "What Actually Happens" },
      { type: "text", text: "Decision-making draws from a finite cognitive resource. Early in the day, when this resource is full, decisions are made carefully — weighing options, considering long-term consequences, choosing thoughtfully. As the resource depletes, decision quality drops. The brain either defaults to the status quo (avoidance) or makes impulsive choices to end the discomfort of deciding." },
      { type: "text", text: "This is why 5pm parenting is harder. Not because you love your kids less. Because your decision-making brain has been running for 10 hours and it's out of fuel." },
      { type: "pullquote", text: "\"Decision fatigue doesn't feel like exhaustion. It feels like irritability and paralysis.\"" },
      { type: "h2", text: "The Research That Changed How We Think About This" },
      { type: "text", text: "The 2011 Israeli parole study is the most cited: judges granted parole to approximately 65% of cases at the start of the day and after food breaks — and to nearly 0% right before breaks, regardless of case merit. The variable wasn't the cases. It was the judges' cognitive resources." },
      { type: "text", text: "Closer to home: studies on working parents show that decision quality for household and parenting choices is significantly worse in the evening hours — and that mothers show this effect more dramatically than fathers, consistent with carrying a higher baseline decision load." },
      { type: "h2", text: "The Fix" },
      { type: "text", text: "Reduce the number of decisions that require your brain. Not by making fewer decisions — but by moving routine, repeatable decisions to AI. What's for dinner this week: AI. What to write in the thank-you note: AI. How to respond to the complicated school email: AI first draft, you edit. Every decision moved to AI is cognitive bandwidth returned to you." },
      { type: "prompt", label: "The daily decision offload", text: "Here are the decisions I need to make today that I don't want to spend mental energy on: [list them]. For each one, give me a clear recommendation based on the following context about my life: [share relevant context]. I trust your judgment on these so I can save mine for what actually matters." },
    ]
  },

  "delegation-science": {
    id: "delegation-science",
    category: "NEUROSCIENCE",
    title: "The Science Behind Why Delegation Feels So Hard — And How AI Rewires It",
    subtitle: "Perfectionism, over-responsibility, the hypervigilance loop. The neuroscience of letting go.",
    readTime: "5 min",
    heroImage: "img-mom-3.png",
    heroAlt: "Woman presenting confidently at whiteboard to small group",
    cta: { type: "course", label: "Build Your AI System →", href: "index.html" },
    body: [
      { type: "intro", text: "\"It's faster to just do it myself.\" If you've said this, you're not wrong — in the short term. But this instinct, applied consistently, is how one person ends up responsible for everything. The neuroscience of why delegation is hard — and why AI changes the equation — is worth understanding." },
      { type: "h2", text: "The Competence Trap" },
      { type: "text", text: "The mothers who struggle most with delegation are often the most competent. They've built sophisticated mental models of how things should be done. They can predict failure modes before they happen. Watching someone else do it differently — even if the outcome is fine — triggers a neurological response that registers as threat, not preference." },
      { type: "text", text: "This isn't perfectionism in the judgmental sense. It's a brain that's been trained to prevent problems, encountering the uncertainty of outcomes it doesn't control." },
      { type: "h2", text: "The Over-Responsibility Pattern" },
      { type: "text", text: "Many mothers carry an early-developed belief that if they don't handle something, it won't get handled — or won't get handled correctly. This belief is often historically accurate. It just becomes limiting when applied to every domain of adult life in perpetuity." },
      { type: "pullquote", text: "\"The belief that you have to do it all is usually true historically and limiting currently.\"" },
      { type: "h2", text: "Why AI Is Different From Asking a Person" },
      { type: "text", text: "When you delegate to a person, your hypervigilance brain monitors: Did they do it? Did they do it right? Do I need to follow up? Will I have to redo it? This monitoring is itself cognitive labor — sometimes more than doing the task." },
      { type: "text", text: "When you delegate to AI, the output is immediate, complete, and meets the standard you specified. There's nothing to monitor. The hypervigilance brain gets a complete output to review, not an ongoing uncertainty to track. This is why so many mothers find it significantly easier to delegate to AI than to people — even when they trust those people." },
      { type: "h2", text: "The Gradual Release" },
      { type: "text", text: "Start with the decisions and tasks that you're least attached to. Grocery list: hand it off. First draft of the thank you email: hand it off. Camp research: hand it off. Build evidence for your brain that the outputs are acceptable — and gradually expand the territory. The over-responsibility pattern doesn't break overnight. But it does break." },
      { type: "image", src: "/img/articles/photo-1524502397800-2eeaad7c3fe5-w800.jpg", alt: "Woman looking purposeful and in control at her desk" },
    ]
  }

};

// Helper to get article by ID
export function getArticle(id: string): Article | null {
  return ARTICLES[id] || null;
}

// All article IDs in order
export const ARTICLE_IDS: string[] = Object.keys(ARTICLES);
