# DahmsIO website

Marketing site for DahmsIO, a solo data & technology consultancy serving small and mid-sized
businesses across New England (ME, NH, VT, MA, RI, CT).

## Stack

Vite + React + react-router-dom, deployed on Netlify. Static marketing site with a Netlify
Forms contact form.

## SEO is a primary constraint, not an afterthought

Every route must ship pre-rendered HTML containing its real content, its own `<title>`, its
own meta description, and its own self-referencing canonical. No AI crawler (GPTBot,
ClaudeBot, PerplexityBot, OAI-SearchBot) executes JavaScript — content that only exists after
hydration is invisible to them.

## Content pattern

Content lives in `src/data/*.js`, one module per page, each exporting a `META` object plus
page section constants. Keep this pattern for any new page.

## Audience

Non-technical business owners and operators. Copy is plain-language, pain-point-led, never
jargon.

## Voice

Plural/company voice ("we," "our," "us") throughout — the site reads as DahmsIO the company,
not a personal freelance pitch, even though Eric Dahms is the sole consultant behind it.
The `/about` page is the deliberate exception in framing, not in pronoun: it can and should
name Eric Dahms as founder (search engines and buyers both weight a real, credentialed human
as a trust signal), but should read as company history — "Our Story," not a personal
first-person bio. Don't reintroduce first-person-singular voice site-wide; that was a prior
misreading of the original task brief, corrected in T5.

## Scope guardrails

No industry-specific pages yet. The site is deliberately horizontal right now. Do not add
`/industries` or any vertical-specific routes unless explicitly asked.
