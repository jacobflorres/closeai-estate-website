# 🧭 Close AI — SEO Optimization Guidelines


This document guides the LLM to ensure the **Close AI website** is fully optimized for SEO while the code is being adapted and rebuilt.
It focuses on the **core 20% of actions that produce 90% of SEO impact**, following current best practices for **Next.js App Router** projects.

---

## 1. Rendering & Performance

* Use **pre-rendered pages** wherever possible — Static Site Generation (SSG) or Incremental Static Regeneration (ISR).
* Avoid pure client-side rendering for indexable pages.
* Optimize performance and **Core Web Vitals** through efficient rendering, minimal blocking scripts, and image optimization.
* Keep HTML content easily crawlable — make sure meaningful text is server-rendered, not delayed by client-side logic.

🧠 *Goal:* Pages should load fast, render instantly with full HTML content, and provide the best possible user experience (speed + structure).

---

## 2. Metadata & Discoverability

* Each route should have accurate, descriptive **metadata** — title, description, canonical URL, robots settings, and OpenGraph/Twitter tags.
* Maintain a consistent naming convention for titles across the site (e.g., “Page Name — Close-AI).
* Use **Next.js Metadata API** (either static or dynamic) rather than manually editing `<head>`.
* Ensure global defaults (site title, favicon, OG image) are defined at the layout level.

🧠 *Goal:* Every page is uniquely identifiable by search engines and social platforms, with consistent, descriptive metadata.

---

## 3. Content Structure & Semantics

* Build pages with proper **semantic HTML** — one `<h1>` per page, logical heading hierarchy, and meaningful `<section>`, `<nav>`, `<main>`, `<footer>` elements.
* Keep all text content indexable and avoid hiding key information inside client-only components.
* Write **clear, human-readable copy** that accurately describes the content and intent of each page.

🧠 *Goal:* Search engines can easily understand page structure and relevance, improving both accessibility and ranking.

---

## 4. Media & Assets

* Use **`next/image`** for all images — it automatically optimizes formats, sizes, and loading behavior.
* Always include meaningful `alt` text (descriptive, not keyword-stuffed).
* Serve fonts using **`next/font`** to reduce layout shifts and external requests.
* Keep asset sizes small and lazy-load only when necessary.

🧠 *Goal:* Every visual element contributes to faster load times, better accessibility, and stronger content signals.

---

## 5. Structured Data (Optional but High-Impact)

* When relevant, include **JSON-LD structured data** for pages like articles, blog posts, or organization info.
* Use schema types that help Google display rich snippets (e.g., `Organization`, `BlogPosting`, `BreadcrumbList`).

🧠 *Goal:* Provide structured meaning to search engines to improve how BuildFlow appears in search results.

---

## 6. URL Structure & Internal Linking

* Use **clean, human-readable URLs** — no query strings or meaningless slugs.
* Keep routes consistent with content hierarchy (e.g., `/services/web-apps` instead of `/page?id=2`).
* Link between related pages logically with descriptive anchor text.
* Set canonical URLs to prevent duplicates and signal preferred versions.

🧠 *Goal:* Maintain a clear site hierarchy that search engines can crawl efficiently.

---

## 7. Global SEO Files

* Ensure the project includes automatically generated **`sitemap.xml`** and **`robots.txt`** from the App Router file conventions.
* Keep the sitemap dynamic — include all pages, including future blog posts or case studies.

🧠 *Goal:* Help search engines discover and index all important pages consistently.

---

## 8. Technical Hygiene

* Keep code lean and modular — remove unused scripts or heavy client-side dependencies.
* Optimize imports and tree-shaking to reduce bundle size.
* Avoid rendering critical text or metadata conditionally on the client.

🧠 *Goal:* Deliver minimal, optimized, and search-friendly code.

---

## 9. Accessibility (A11y)

* Follow accessibility best practices — proper labels, roles, and keyboard navigation.
* Accessibility indirectly boosts SEO since it improves user experience and semantic clarity.

🧠 *Goal:* Every page is usable, readable, and understandable by both users and crawlers.

---

## 10. SEO-as-You-Build Mindset

* Treat each page as a **self-contained SEO unit**: structure + metadata + performance.
* When finishing a page, review:

  * Does it have metadata?
  * Is it server-rendered?
  * Is content semantic and indexable?
  * Are images optimized?
* Then move on — no need for a separate “SEO phase” later.

🧠 *Goal:* Integrate SEO into the development flow instead of treating it as a post-build task.

---

## 📚 Sources (2024–2025 Best Practices)

* **Next.js Docs:** Metadata API, Image Optimization, Font Optimization, App Router SEO guides
  → [https://nextjs.org/docs/app/building-your-application/optimizing/metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
* **Next.js Learn SEO Module:** Rendering Strategies, Metadata, and Web Vitals
  → [https://nextjs.org/learn/seo](https://nextjs.org/learn/seo)
* **Google Search Central:** Core Web Vitals & Structured Data Guidelines
  → [https://developers.google.com/search/docs/fundamentals/seo-starter-guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
* **Vercel Blog & Docs:** Performance and CWV optimization tips for Next.js 14+

---

### 🧠 TL;DR for the LLM

While adapting or rebuilding any page or component:

> **Render fast. Describe clearly. Structure semantically. Optimize assets. Keep everything indexable and human-readable.**