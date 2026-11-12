# Fege Website Build Guide (Information Site)

Instructions for building the public Fege information website with Cursor, plus the copy and messaging kit for the site, banners, mockups and videos.

Read this file first, then the Website and Buyer Deal Page PRD (sections 3 and 4 cover this site). The buyer Deal Page lives in the same Next.js app but has its own guide later. It is out of scope here.

---

## 0. How to work with Cursor on this site

1. Put this file and the Website PRD in `/docs`. Start each chat with: "Read /docs/fege-website-build-guide.md and the Website PRD. Then do the task below."
2. Build one page or one section per chat. Ask Cursor to list the files it will touch first.
3. All copy comes from section 14 of this file. Do not let Cursor invent claims, numbers or licences. Anything marked [CONFIRM] stays a visible placeholder until you confirm it.
4. After each slice: lint, type check, and a mobile Lighthouse run. Then commit.
5. When the PRD and this guide disagree, the PRD wins.

---

## 1. Scope and decisions

| Topic | Decision |
|---|---|
| Scope | Marketing and information pages only: Home, How it works, For sellers, For buyers, Pricing, Security, Scam awareness, About, Contact, FAQ, Policies, Download |
| No sign-up or login | The site has no account pages. Every Create account or Login button goes to `/download` or straight to the store |
| Where it lives | `apps/web` in the monorepo. If you start before the monorepo exists, use a standalone repo `fege-web` with the same folder layout and move it later |
| Content | Pages are code. Long text (FAQ, policies, articles) lives in MDX or typed content files, not inside components |
| Placeholders | Fees, licensed partner name, statistics and legal text are placeholders until confirmed, and are marked [CONFIRM] |
| Priority | Fast on weak networks beats fancy. No heavy animation libraries, no autoplay video above the fold |

---

## 2. Stack

- Next.js (current stable, App Router), TypeScript strict
- Tailwind CSS, with a small shared token file (colours, spacing, type scale)
- shadcn/ui only for accordion, dialog and form primitives
- MDX for long text, with front matter for title, description and updated date
- `next/font` with self-hosted fonts, `next/image` for all images
- Framer Motion only for the hero and the how-it-works steps, and always respecting reduced motion
- React Hook Form with Zod for the contact form
- PostHog for analytics (after consent), Sentry for errors
- Latest stable versions at project start, pinned in the lockfile

---

## 3. Folder structure

```
apps/web/
  app/
    (site)/
      page.tsx                    Home
      how-it-works/page.tsx
      for-sellers/page.tsx
      for-buyers/page.tsx
      pricing/page.tsx
      security/page.tsx
      scam-awareness/page.tsx
      scam-awareness/[slug]/page.tsx
      about/page.tsx
      contact/page.tsx
      faq/page.tsx
      policies/page.tsx
      policies/[slug]/page.tsx
      download/route.ts           device-aware redirect
      layout.tsx                  header, footer, sticky mobile download bar
    (deal)/                       Deal Page, built later
    sitemap.ts
    robots.ts
    not-found.tsx
  components/
    layout/ (Header, Footer, MobileDownloadBar)
    sections/ (Hero, ProblemStrip, HowItWorks, SellerBenefits, BuyerProtection,
               PricingSummary, SecurityStrip, FaqPreview, FinalCta)
    ui/ (Button, StoreBadges, QrCard, Accordion, SectionHeading)
  content/
    site.ts                       all headings, subheads, CTAs (from section 14)
    faq.ts
    policies/*.mdx
    scam-awareness/*.mdx
  lib/ (analytics, consent, seo, store-links, utm)
  public/ (badges, og images, illustrations)
```

---

## 4. Pages and what each must contain

| Route | Goal | Sections, in order |
|---|---|---|
| `/` | Convince a seller to download | Hero, problem strip, how it works (4 steps), sample deal and sample Deal Page, seller benefits, buyer protection, pricing summary, security strip, FAQ highlights, final CTA |
| `/how-it-works` | Make the flow obvious | Four steps with illustrations, a "what the buyer sees" block, a "what you see" block, CTA |
| `/for-sellers` | Sell the benefits | Core pitch, benefits grid, one seller story, fee summary, CTA |
| `/for-buyers` | Calm the buyer | How the lock works, what the buyer sees, how disputes work, how to spot fake links, CTA to ask the seller for a Fege link |
| `/pricing` | Be plain about money | Fee explained with one worked example, who pays, what is free, Pro teaser, FAQ |
| `/security` | Earn trust | Licensed partner [CONFIRM], identity checks, risk checks, evidence and disputes, privacy, official links, report a fake message |
| `/scam-awareness` | Be useful and shareable | Article list, short articles, share buttons |
| `/about` | Show who is behind it | Mission, team [CONFIRM], company details [CONFIRM] |
| `/contact` | Be reachable | WhatsApp link, email, form, hours |
| `/faq` | Remove doubts | Grouped accordions: sellers, buyers, payments, delivery, disputes |
| `/policies` | Legal hub | List of 13 policies with version and effective date |
| `/download` | Send people to the right store | Redirect by device; QR and both badges on desktop |

Required components on every page: header with a Download button, footer with policies, contact and store badges, and a sticky download bar on mobile after the first scroll.

---

## 5. Design direction

- **Feel:** calm, confident, local and modern. A trustworthy tool, not a bank and not a startup toy.
- **Colour:** one strong brand colour for actions, a neutral base (white, soft grey, near-black text), and fixed status colours used sparingly (green for secured, amber for pending, red for problems). Decide the brand colour in your mockups, then set it once in the token file.
- **Type:** one clean sans-serif family. Large, readable headings. Body text never below 16 px on mobile.
- **Imagery:** real Nigerian sellers, real phones, real chats and parcels. Avoid generic stock photos of handshakes and padlocks. Use simple phone mockups of the contract, the Deal Page and the seller app.
- **Layout:** mobile first, one idea per screen, generous spacing, one primary button per section.
- **Motion:** gentle fades and one hero animation. Respect reduced motion. No autoplaying video above the fold. Videos load on tap.
- **Accessibility:** WCAG 2.1 AA, visible focus, alt text, 44 px tap targets, no information in colour alone.

---

## 6. Download logic

1. `/download` (route handler) reads the user agent: Android goes to Google Play, iPhone goes to the App Store, anything else renders a page with a QR code and both badges.
2. Store URLs live in environment variables (`NEXT_PUBLIC_PLAY_URL`, `NEXT_PUBLIC_APPSTORE_URL`) so they can change without a code edit.
3. Preserve UTM parameters and add them to the store link where supported. Record `download_redirect` with platform and source.
4. Header and hero buttons say Download the app. Any link labelled Create account or Login points to `/download`.
5. Before the apps are live, `/download` shows a waitlist form instead [CONFIRM when stores are ready].

---

## 7. SEO, performance and analytics

- Metadata API on every page, canonical URLs, social cards, `sitemap.ts`, `robots.ts`.
- JSON-LD: Organization on all pages, FAQPage on `/faq`, Article on scam awareness posts.
- Target keywords to write for: safe online payment Nigeria, avoid online scam Nigeria, escrow for Instagram sellers, protect payments WhatsApp, how to sell safely on Instagram.
- Performance: largest content paint under 2.5 seconds on a mid-range phone, no layout shift, compress every image, ship little JavaScript, no third-party scripts before consent.
- Analytics events: `page_view`, `cta_click` (platform and source), `download_redirect`, `faq_open`, `contact_submit`, `scroll_depth`. No personal data.
- Cookie and analytics consent banner that follows Nigerian data protection law. Nothing non-essential loads before consent.

---

## 8. Forms

- Contact form: name, email or phone, topic, message. Zod validation, honeypot field, rate limit, clear success and error messages. Do not collect more than needed.
- Newsletter or waitlist: email only, with a clear purpose line and an unsubscribe note.
- Submissions go to the backend (or an email provider) through one server action, never directly from the browser to a third party.

---

## 9. Policies hub

- 13 policy pages from the PRD: Terms of Use, Privacy Policy, Escrow and Funds Policy, Inspection and Automatic Release Policy, Dispute Resolution Policy, Delivery Policy, Refund and Cancellation Policy, Prohibited and Restricted Items Policy, Fees Schedule, Seller Agreement, Acceptable Use Policy, Cookie Policy, Security and Anti-Phishing Notice.
- Each is an MDX file with front matter: title, version, effective date, summary.
- Show version and effective date at the top, link prior versions, and add a short "in plain words" summary box above the legal text.
- Legal text is written by counsel. Until then, pages show clearly marked placeholder text, never invented legal wording.

---

## 10. Security and hosting

- Secure headers and a content security policy. No wildcard origins.
- Environment variables for store links, analytics and form endpoints.
- A published "official links" page that lists every real Fege address, store listing and social handle, to defend against lookalike scams.
- Register defensive domains and variants early.

---

## 11. Build order and Cursor prompts

| Step | Scope | Starter prompt |
|---|---|---|
| W0 | Project, tokens, layout, header, footer, sticky mobile bar | "Set up Next.js with Tailwind and the folder structure in section 3, with Header, Footer and MobileDownloadBar. Use the copy from content/site.ts." |
| W1 | Content file | "Create content/site.ts with every heading, subhead and CTA from section 14. Mark [CONFIRM] items." |
| W2 | Home | "Build the Home page with the sections in order from section 4, mobile first, using the copy in content/site.ts." |
| W3 | How it works, For sellers, For buyers | "Build these three pages from the section 4 table with the copy kit." |
| W4 | Pricing, Security, FAQ | "Build Pricing, Security and FAQ with accordions, JSON-LD for FAQ, and placeholders for confirmed facts." |
| W5 | About, Contact, form | "Build About and Contact with the validated contact form and honeypot." |
| W6 | Policies hub | "Build the policies hub and the MDX template with version and effective date." |
| W7 | Download | "Build the device-aware /download route, QR page, UTM handling and a waitlist fallback." |
| W8 | SEO, analytics, consent | "Add metadata, sitemap, robots, JSON-LD, consent banner and the analytics events in section 7." |
| W9 | Scam awareness | "Build the article list and article template with MDX and share buttons." |
| W10 | Hardening | Lighthouse mobile, accessibility, real-device checks, broken links, security headers. |

---

## 12. Definition of done

1. Mobile Lighthouse: performance 90 or higher, accessibility 95 or higher, no layout shift.
2. Every page has one primary action and the sticky download bar works.
3. Every Create account or Login link reaches the right store or the waitlist.
4. Copy matches section 14, and all [CONFIRM] items are visible and tracked.
5. No unverified statistic, licence claim or fee appears as fact.
6. Tested on a real low-end Android phone and an iPhone.
7. Analytics fire only after consent.

---

## 13. Asset checklist (mockups, banners, videos)

| Asset | Size or length | Use |
|---|---|---|
| Default share image | 1200 x 630 | Link previews for the site |
| Hero phone mockups | Transparent PNG or WebP | Website hero and sections |
| Store screenshots | 1290 x 2796 and 1080 x 1920 | App Store and Google Play |
| Social square | 1080 x 1080 | Instagram and Facebook feed |
| Story and status | 1080 x 1920 | Instagram stories, WhatsApp status, TikTok |
| Wide banner | 1200 x 628 | X, LinkedIn, ads |
| Video teaser | 15 seconds, vertical | Reels, TikTok, status |
| Explainer | 30 to 60 seconds, vertical and wide | Website and YouTube |
| Seller story | 60 seconds, vertical | Pilot and launch |

Always design vertical first, add captions on every video, and keep text on banners to a headline of 6 words or fewer, one support line and one button.

---

## 14. Copy and messaging kit

### 14.1 Voice

- Confident, plain, local. Short sentences. Talk like a helpful friend who knows business.
- The marketing ideal: you are not wrong, and your customer is also right. You will not sell without pay. They will not pay before they see the goods. Why lose them? Use Fege and win the deal.
- Fege is a transaction contract solution. It is not an invoice product and not just an escrow app. Say that in the same sentence when you mention either.
- Sellers should hear this: build instant trust for your business.
- Lead with winning the sale. Use scams as proof, not as the headline.
- Never shout or scare. No "100% safe", "guaranteed" or "no scams ever".
- Say what happens in order: they see the contract, they pay, the money is held, you send the goods, they confirm, you get paid.
- Say "send a contract", never "send the deal". Use "deal" only for winning the sale: "win the deal". The buyer page is still called the Deal Page.
- No em dashes. Write in plain punctuation.

### 14.2 Core lines

| Line | Use for |
|---|---|
| **You're not wrong. Your customers are also right.** | Master promise. Hero, store listing, pitch decks |
| **You will not sell without pay. They will not pay before they see the goods.** | The standoff Fege solves |
| **Why lose them? Use Fege now and win the deal.** | Close, banners, final CTA |
| **Fege is a transaction contract solution.** | What Fege is. FAQ, security, pitch |
| **Build instant trust for your business.** | Seller identity line. For sellers, deal cards |
| **Not an invoice. Not just locked money.** | What Fege is not |
| **They see the goods. You get paid.** | How it works close |
| **Pay only on fege.africa.** | Safety banner, SMS, footer |

### 14.3 Punchlines (pick by use)

For sellers:
- Build instant trust for your business.
- You're not wrong to want pay first.
- Why lose them? Win the deal.
- You will not sell without pay.
- Send a contract, not an account number.
- They see the goods. You get paid.
- Use Fege now.

For buyers:
- You are also right.
- You will not pay before you see the goods.
- Pay safe. See the goods. Then the seller gets paid.
- Your money stays held until the order arrives.
- No more sending money and hoping.

For both sides:
- You're not wrong. Your customers are also right.
- Not an invoice. Not just locked money.
- Fege holds the middle.
- Both of you win the deal.

Light and local (use sparingly, test with real sellers):
- "Send first" and "pay first" can both be fair. Fege holds the contract.
- Less "abeg, send first". More "here is the Fege contract".

### 14.4 Home page copy

**Hero (choose one, A/B test the others)**

| Option | Headline | Subhead | Primary button |
|---|---|---|---|
| A | You're not wrong. | Your customers are also right. You will not sell without pay, and they will not pay before they see the goods. Use Fege now and win the deal. | Download the app |
| B | Why lose them? | You want pay before the goods leave. They want the goods before they relax. Fege holds the contract so you both win the deal. | Download the app |
| C | Send a contract, not an account number. | Fege is a transaction contract solution. They see what they are buying. You see the money held before you send the goods. | Download the app |

Secondary link: See how it works.
Under the buttons: Available on Google Play and the App Store. Free to start [CONFIRM].

**Problem strip**
Headline: Sound familiar?
- "Is this account real?"
- "Send me proof first."
- "I paid, where is my order?"
- "I never got that payment."
Closing line: Both of you are right. Why lose the sale? Fege holds the middle.

**How it works (4 steps)**
1. **Add your buyer's number.** Send the contract in under a minute. Fege checks the number and sends it.
2. **They see the contract.** The goods, the price and your name. They know what they are paying for.
3. **Their money is held.** They pay on the Deal Page. You see the money held, then you send the goods.
4. **They see the goods. You get paid.** When they confirm, or the window ends with no problem, the money is released to you.

**Seller benefits**
- Win the sale: you are not wrong to want pay first.
- Look established: every contract carries your name and what you both agreed.
- Book delivery in one tap, even for many orders.
- Know the moment money is held with an instant alert.
- Every contract in one place, with filters and export.
- Get paid without stress: Auto-payout straight to your bank.

**Buyer protection**
Headline: You are right to wait for the goods.
Text: Pay on a Fege contract and your payment is held. The seller only gets paid after you confirm the goods. If something is wrong, tell us, and our team reviews the evidence.

**Security strip**
- Identity-verified sellers
- Money held by our licensed partner bank [CONFIRM]
- Every step recorded as evidence
- Real people review disputes

**Pricing summary**
Headline: Simple, visible fees.
Text: See exactly what you pay before you send. [CONFIRM fee details]. Your first five protected transactions are free [CONFIRM].

**Final CTA**
Headline: Why lose them? Use Fege and win the deal.
Button: Download the app.

### 14.5 Other pages

| Page | Headline | Subhead |
|---|---|---|
| How it works | You both win the deal | You will not sell without pay. They will not pay before they see the goods. |
| For sellers | Why lose them? | You are not wrong to want pay first. They are not wrong to want the goods first. |
| For buyers | You are right to wait for the goods | Pay on Fege. The seller only gets the money after you see your order. |
| Pricing | Fees you can see before you commit | One clear fee. No surprises at checkout. [CONFIRM] |
| Security | Both sides stay protected | Fege is a transaction contract solution. A contract both sides can point to. |
| Scam awareness | Spot the scam before it spots you | Short guides on fake alerts, fake sellers and phishing links. |
| About | We build trust for people who sell on their phones | Fege exists so honest sellers stop losing sales to doubt. |
| Contact | Talk to a real person | We reply on WhatsApp and email. [CONFIRM hours] |
| Download | Get Fege on your phone | Scan the code or choose your store. |
| 404 | We could not find that page | If a link asked you to pay, do not. Go to fege.africa. |

### 14.6 Buttons and labels

Download the app. Get it on Google Play. Download on the App Store. See how it works. Send a contract. Talk to us. Read the guide. Report a fake message. See the fees. Ask your seller for a Fege contract.

### 14.7 Microcopy

- Safety banner: Pay only on fege.africa. Fege never asks you to pay a personal account.
- Contact success: Thanks. We will reply soon, usually on WhatsApp or email.
- Contact error: That did not send. Please try again or message us on WhatsApp.
- Cookie banner: We use essential cookies to run this site. With your permission we also use analytics to improve it.
- Waitlist: Be first to know when Fege is in your store. We only use your email for this.
- Link check: Not sure a message is from us? Real Fege links always start with fege.africa.

### 14.8 FAQ drafts (keep short, confirm claims)

**Sellers**
- *What is Fege?* Fege is a transaction contract solution. It builds instant trust for your business. You will not sell without pay. They will not pay before they see the goods. It is not an invoice, and it is not an app that only locks money.
- *Do my buyers need to download anything?* No. They open your link in WhatsApp, Instagram or SMS and pay on a simple Deal Page.
- *What does it cost?* [CONFIRM] Fees are shown on the contract before anyone pays.
- *When do I get my money?* After the buyer confirms, or when the check window ends with no problem. With Auto-payout it goes straight to your bank.
- *What if a buyer lies about not receiving the item?* We review the evidence: your delivery proof, tracking and the delivery code.

**Buyers**
- *Is my money safe?* Your payment is held until you confirm delivery. [CONFIRM partner wording]
- *What if I do not get my order?* Report it before the check window ends and our team reviews the evidence.
- *How do I know the link is real?* It starts with fege.africa. We never ask you to pay a personal account.
- *Do I need an account?* No. You only need your phone.

### 14.9 Banner and ad lines

| Format | Headline (6 words or fewer) | Support line | Button |
|---|---|---|---|
| Seller, doubt | Why lose them? | You will not sell without pay. They will not pay before the goods. | Download |
| Seller, look real | You're not wrong. | Your customers are also right. Win the deal. | Download |
| Seller, speed | Send a contract in a minute. | Money held. You get the alert. | Download |
| Buyer, safe | You are right to wait. | Money stays held until you see the goods. | Learn more |
| Both | Not an invoice. Not just escrow. | Send a contract, not an account number. | See how |
| Awareness | Spot the scam. Pay on Fege. | Real links start with fege.africa. | Read the guide |

### 14.10 Video scripts

**15-second teaser (vertical)**
1. Text on screen: "You will not sell without pay."
2. Text on screen: "They will not pay before they see the goods."
3. Seller sends a Fege contract. On screen: "Send a contract, not an account number."
4. Buyer pays. Seller sends the goods. On screen: "Win the deal."
5. Logo, Download the app.

**30-second explainer**
- 0 to 5s: A chat stalls. Voiceover: "You are not wrong. Your customer is also right."
- 5 to 12s: Seller adds the buyer's number. "Use Fege now."
- 12 to 20s: Buyer opens the contract, sees the goods and the price, pays. "They will not pay before they see what they are buying."
- 20 to 27s: Seller sends the goods, buyer confirms, money lands. "They see the goods. You get paid."
- 27 to 30s: Logo and tagline. "Fege. You're not wrong. Your customers are also right."

**60-second seller story (Chioma)**
- Open with a real seller in her workspace: "I will not send bags before I am paid. And they will not pay before they see the bag. So I lose the sale."
- Show the old way: an account number in the chat, then silence.
- Show Fege: the contract in under a minute, the goods and price in chat, money held, then she sends the bag.
- Close with her saying: "Now we both win."
- End card: Download the app. Your first five protected sales are free [CONFIRM].

Video rules: captions always, first 2 seconds show the problem, real people and real phones, no fake dashboards or invented numbers.

### 14.11 App screenshot captions

1. Send the contract in under a minute.
2. Add your buyer's number. Win the sale.
3. Know the moment money is locked.
4. Book delivery in one tap.
5. Get paid without stress.
6. Every transaction in one place.

### 14.12 Store listing drafts

**Short description (80 characters):** You're not wrong. They are right too. Win the deal with Fege.

**Long description (draft):** You will not sell without pay. Your customer will not pay before they see the goods. Fege is a transaction contract solution, not an invoice and not an app that only locks money. Send a contract, not an account number. They see the goods and the price, the money stays held until they confirm, and you win the deal. [CONFIRM fees and partner wording]

### 14.13 Message the buyer receives (for mockups)

WhatsApp or SMS: "Hi Amaka, [Business name] sent a Fege contract for 2 Ankara bags (₦36,000). See the goods and pay on fege.africa/d/xxxx"
Preview card: business name and logo, product photo, item name, ₦ amount, "Pay on the Fege contract".

### 14.14 Nigerian Pidgin lines (optional, review with a native speaker before use)

- "You no wrong. Customer too dey right."
- "You no go sell without pay. Dem no go pay before dem see the goods."
- "Why you go lose the sale? Use Fege."

### 14.15 Words to use and avoid

| Use | Avoid |
|---|---|
| contract, held, confirmed, goods, both sides, win the deal | "send the deal", calling Fege an invoice app or just escrow |
| protected, held, confirmed, released, verified | guaranteed, 100% safe, no scams ever |
| link, delivery code, evidence | jargon like custody, settlement, ledger |
| first-time customers, strangers, new buyers | fear language, shaming sellers or buyers |
| "our licensed partner bank" only after confirmed | "Fege Bank" or any use of the word bank in our name |
| plain figures with source and date | made-up numbers or testimonials |

### 14.16 Proof points allowed (verify before any public use)

- In Visa's 2026 Stay Secure study of Nigeria, 83% of consumers had bought through social media, and 57% of those who had experienced a scam said it happened on social media.
- The same study found 51% had experienced a financial scam in the previous 12 months.
- The Global Anti-Scam Alliance's 2026 Nigeria report found 84% of adults had encountered a scam and only 4% reported it.

Always add the source and year next to the number, and re-check the figures before launch.
