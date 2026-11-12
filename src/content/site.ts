export const brand = {
  name: "Fege",
  domain: "fege.africa",
  tagline: "You're not wrong. Your customers are also right.",
  about:
    "Fege is a transaction contract solution. It builds instant trust for your business identity, so you will not sell without pay and they will not pay before they see the goods.",
  safety: "Pay only on fege.africa. Fege never asks you to pay a personal account.",
} as const;

export const nav = [
  { href: "/for-sellers", label: "For sellers" },
  { href: "/for-buyers", label: "For buyers" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
] as const;

export const home = {
  hero: {
    headline: "You're not wrong.",
    subhead:
      "Your customers are also right. You will not sell without pay, and they will not pay before they see the goods. Use Fege now and win the deal.",
    cta: "Download the app",
    overlayLabel: "Deal",
    overlayAmount: "₦36,000",
    overlayAction: "Pay now",
    badges: ["Money held until delivery", "Verified seller"],
  },
  feature: {
    headline: "Build instant trust for your business",
    body: "Fege is a transaction contract solution. You are right to want pay before the goods leave. They are right to want the goods before they relax. It is not an invoice, and it is not an app that only locks the money.",
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
        text: "Your business identity, the goods, the price, and what happens when they arrive.",
        image: "/images/atm3.jpg",
      },
      {
        id: "deal",
        label: "Deal Page",
        title: "What your buyer opens",
        text: "A simple page to review the contract, pay securely and follow it until confirmation.",
        image: "/images/i-m-zion-KCPnPgAgz9s-unsplash.jpg",
      },
    ],
  },
  assistant: {
    headline: "Use Fege now.",
    body: "Add their number. They see the contract. The money stays held until they confirm the goods, and then you get paid.",
    cta: "See how it works",
    href: "/how-it-works",
  },
  security: {
    headline: "Both sides stay protected",
    body: "Fege is a transaction contract solution, so your business identity and the contract are on record. Payments are held by our licensed partner bank [CONFIRM] until the buyer confirms the goods, or the check window ends. Every step is evidence.",
    points: [
      "Identity-verified sellers",
      "Locked payments",
      "Evidence and disputes",
      "Official links only",
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
    cta: "Download the app",
  },
  howItWorks: {
    headline: "You both win the deal.",
    subhead: "You will not sell without pay. They will not pay before they see the goods.",
    steps: [
      {
        number: "01",
        title: "Add your buyer's number.",
        text: "Send the contract in under a minute. Fege checks the number and sends it.",
      },
      {
        number: "02",
        title: "They see the contract.",
        text: "The goods, the price and your name. They know what they are paying for.",
      },
      {
        number: "03",
        title: "Their money is held.",
        text: "They pay on the Deal Page. You see the money held, then you send the goods.",
      },
      {
        number: "04",
        title: "They see the goods. You get paid.",
        text: "When they confirm, or the window ends with no problem, the money is released to you.",
      },
    ],
  },
  faq: {
    headline: "Quick answers",
    items: [
      {
        q: "What is Fege?",
        a: "Fege is a transaction contract solution. It builds instant trust for your business identity. You will not sell without pay. They will not pay before they see the goods. It is not an invoice, and it is not an app that only locks money.",
      },
      {
        q: "Do my buyers need to download anything?",
        a: "No. They open your link in WhatsApp, Instagram or SMS and pay on a simple Deal Page.",
      },
      {
        q: "How do I know the link is real?",
        a: "It starts with fege.africa. We will never ask you to pay to a personal account number.",
      },
      {
        q: "When do I get my money?",
        a: "After the buyer confirms, or when the check window ends with no problem. With Auto-payout it goes straight to your bank.",
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
    subhead: "Build instant trust for your business identity. You are not wrong to want pay first. They are not wrong to want the goods first.",
  },
  forBuyers: {
    headline: "You are right to wait for the goods",
    subhead: "Pay on Fege. The seller only gets the money after you see your order.",
  },
  pricing: {
    headline: "Fees you can see before you commit",
    subhead: "One clear fee. No surprises at checkout. [CONFIRM]",
  },
  security: {
    headline: "How we keep your money and your contract safe",
    subhead:
      "Fege is a transaction contract solution. A contract both sides can point to, with your business identity on it.",
  },
  download: {
    headline: "Get Fege on your phone",
    subhead:
      "The app is not in the stores yet [CONFIRM]. Join the waitlist and we will message you when you can download Fege.",
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
