export const brand = {
  name: "Fege",
  domain: "fege.africa",
  tagline: "You're not wrong. Your customers are also right.",
  about:
    "Transaction contract solution. Build instant trust for your business",
  /** Short title for browser tabs and link previews (WhatsApp, etc.). */
  shareTitle: "Build instant trust for your business",
  /** Plain-language share blurb. Keep different from shareTitle so previews are not duplicated. */
  shareDescription:
    "Build instant trust for your business & sell without fear",
  safety: "Win your business deals securely",
} as const;

export const nav = [
  { href: "/for-sellers", label: "For sellers" },
  { href: "/for-buyers", label: "For buyers" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
] as const;

export const home = {
  hero: {
    headline: "Buy & sell without fear.",
    subhead:
      "Sell fast. Use Fege and win your business deals.",
    cta: "Get early access",
    overlayLabel: "Deal",
    overlayAmount: "₦36,000",
    overlayAction: "Pay now",
    badges: ["Money held until delivery", "Verified seller"],
  },
  feature: {
    headline: "You're not wrong.",
    body: "Your customers are also right. You will not sell without pay, and they will not pay before they see the goods. It is not an invoice, and it is not an app that only locks the money.",
    cta: "See how it works",
    href: "/how-it-works",
    cards: [
      {
        image: "/images/kelly-sikkema-I5lR4R0CM6g-unsplash.jpg",
        label: "Seller",
        amount: "Funds locked",
        action: "Deliver",
        alt: "A card that says sell",
      },
      {
        image: "/images/vitaly-gariev-AixitSFNrBc-unsplash.jpg",
        label: "Buyer",
        amount: "₦36,000 held",
        action: "Confirm",
        alt: "Two people looking at a coat in a shop",
      },
    ],
  },
  proof: {
    headline: "Why lose a customer who is also right?",
    items: [
      "Instant trust for your business",
      "Money held by licensed partner [CONFIRM]",
      "Evidence on every step",
      "Real people on disputes",
      "Pay only on fege.africa",
      "No personal account requests",
      "WhatsApp · Instagram · SMS",
      "Not an invoice. Not just escrow.",
    ],
  },
  lifestyle: {
    headline: "You are right. So are they.",
    body: "You will not sell without pay. They will not pay before they see the goods. Fege is how you still win the deal.",
    tabs: [
      {
        id: "first-sale",
        label: "First sale",
        title: "Win the deal",
        text: "When they hesitate, send a Fege contract. They see the goods. You see the money held before you send them.",
        image: "/images/charlesdeluvio-OtC8kRzlbqo-unsplash.jpg",
        cta: "Start selling",
        href: "/for-sellers",
      },
      {
        id: "instagram",
        label: "Instagram",
        title: "Sell where they already are",
        text: "Share the Fege contract in DMs. Buyers open it without downloading anything.",
        image: "/images/sabhyata-sahu-Qzcqwkq7exc-unsplash.jpg",
        cta: "See for sellers",
        href: "/for-sellers",
      },
      {
        id: "whatsapp",
        label: "WhatsApp",
        title: "One link in the chat",
        text: "Add their number. They get the contract. The money stays held until they see the goods.",
        image: "/images/arpad-czapp-Cg94g0QFHv4-unsplash.jpg",
        cta: "See for buyers",
        href: "/for-buyers",
      },
    ],
  },
  elevate: {
    headline: "Win the deal",
    body: "Fege is the agreement both sides can see. Not a bare invoice. Not an app that only locks the money.",
    tabs: [
      {
        id: "invoice",
        label: "The contract",
        title: "Send a contract, not an account number",
        text: "Your business identity, the goods, the price, delivery terms, and what happens if something goes wrong.",
        image: "/images/atm3.jpg",
      },
      {
        id: "deal",
        label: "Deal Page",
        title: "What your buyer opens",
        text: "They review and accept the terms, pay securely, track fulfilment, then confirm the goods before money is released.",
        image: "/images/i-m-zion-KCPnPgAgz9s-unsplash.jpg",
      },
    ],
  },
  assistant: {
    headline: "Use Fege now.",
    body: "Add their number. They review the contract. Money is held while you fulfil the order. They confirm the goods, then you get paid.",
    cta: "See how it works",
    href: "/how-it-works",
  },
  security: {
    headline: "Both sides stay protected",
    body: "Transaction contract solution, so your business identity and the terms are on record. Payments are held by our licensed partner bank [CONFIRM] until the buyer confirms the goods, or the check window ends. Delivery proof, chat and milestones stay as evidence. If something is wrong, real people review the dispute.",
    points: [
      "Identity-verified sellers",
      "Locked payments",
      "Fulfilment tracking",
      "Evidence and disputes",
    ],
    cta: "Explore security",
    href: "/security",
  },
  plans: {
    eyebrow: "Choose your plan",
    headline: "Start free. Grow when you are ready.",
    items: [
      {
        name: "Free",
        price: "₦0",
        text: "Start the contracts that keep both sides right. First five protected sales free [CONFIRM].",
        cta: "See how it works",
        href: "/how-it-works",
      },
      {
        name: "Pro",
        price: "[CONFIRM]",
        text: "For sellers who want more volume, sharper tools and priority support as they scale.",
        cta: "See pricing",
        href: "/pricing",
      },
    ],
  },
  join: {
    headline: "Why lose them? Use Fege and win the deal.",
    cta: "Get early access",
  },
  howItWorks: {
    headline: "You both win the deal.",
    subhead: "You will not sell without pay. They will not pay before they see the goods.",
    steps: [
      {
        number: "01",
        title: "Add your buyer's number.",
        text: "Create the contract in under a minute: the goods, the price, delivery and what both of you agree. Fege checks the number and sends it.",
      },
      {
        number: "02",
        title: "They see the contract.",
        text: "They review your name, the goods, the price and the conditions. When they accept, both sides are on the same terms.",
      },
      {
        number: "03",
        title: "Their money is held.",
        text: "They pay on the Deal Page. The money stays held while you fulfil the order. You track delivery and keep proof along the way.",
      },
      {
        number: "04",
        title: "They see the goods. You get paid.",
        text: "When they confirm, or the check window ends with no problem, the money is released to you. If something is wrong, report it and we review the evidence.",
      },
    ],
  },
  faq: {
    headline: "Quick answers",
    items: [
      {
        q: "What is Fege?",
        a: "Transaction contract solution. Build instant trust for your business. You will not sell without pay. They will not pay before they see the goods. It is not an invoice, and it is not an app that only locks money.",
      },
      {
        q: "Do my buyers need to download anything?",
        a: "No. They open your link in WhatsApp, Instagram or SMS, review the contract on a Deal Page, and pay there.",
      },
      {
        q: "How do I know the link is real?",
        a: "It starts with fege.africa. We will never ask you to pay to a personal account number.",
      },
      {
        q: "When do I get my money?",
        a: "After the buyer confirms the goods, or when the check window ends with no problem. With Auto-payout it goes straight to your bank.",
      },
      {
        q: "What if something goes wrong?",
        a: "Report it before the check window ends. We review the evidence: the contract terms, delivery proof, tracking and messages. Real people handle disputes.",
      },
    ],
  },
} as const;

export const pages = {
  howItWorks: {
    headline: "You both win the deal",
    subhead: "You will not sell without pay. They will not pay before they see the goods. This is how Fege holds the middle.",
  },
  forSellers: {
    headline: "Why lose them?",
    subhead: "Build instant trust for your business. You are not wrong to want pay first. They are not wrong to want the goods first.",
  },
  forBuyers: {
    headline: "You are right to wait for the goods",
    subhead:
      "Review the contract. Pay on Fege. Track the order. Confirm only when you see the goods. The seller gets paid after that.",
  },
  pricing: {
    headline: "Fees you can see before you commit",
    subhead: "One clear fee. No surprises at checkout. [CONFIRM]",
  },
  security: {
    headline: "How we keep your money and your contract safe",
    subhead:
      "Transaction contract solution. Terms both sides accept, money held while fulfilment is tracked, and evidence if a dispute starts.",
  },
  download: {
    headline: "App almost ready!",
    subhead:
      "Get Fege on your phone. Be the first to try it.",
    formLead:
      "Leave your name and WhatsApp number. We will message you when you can download Fege.",
    formNote:
      "We will message you when you can download Fege.",
  },
} as const;

export const footer = {
  columns: [
    {
      title: "Product",
      links: [
        { href: "/how-it-works", label: "How it works" },
        { href: "/for-sellers", label: "For sellers" },
        { href: "/for-buyers", label: "For buyers" },
        { href: "/pricing", label: "Pricing" },
        { href: "/d/demo", label: "Sample Deal Page" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/security", label: "Security" },
        { href: "/download", label: "Waitlist" },
        { href: "/#faq", label: "FAQ" },
      ],
    },
    {
      title: "Safety",
      links: [
        { href: "/d/demo", label: "Official Deal Page" },
        { href: "/security", label: "Report a fake message" },
      ],
    },
  ],
} as const;
