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

First person singular. Eric Dahms is the founder and sole consultant — no plural corporate
"we."

## Scope guardrails

No industry-specific pages yet. The site is deliberately horizontal right now. Do not add
`/industries` or any vertical-specific routes unless explicitly asked.
