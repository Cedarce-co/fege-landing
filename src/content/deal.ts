export type DealStatus = "awaiting_payment" | "funds_locked" | "in_delivery" | "completed";

export type Deal = {
  code: string;
  status: DealStatus;
  businessName: string;
  verified: boolean;
  productName: string;
  productDetail: string;
  quantity: number;
  amount: number;
  currency: "NGN";
  buyerName: string;
  messagePreview: string;
  createdLabel: string;
};

export const sampleDeals: Record<string, Deal> = {
  demo: {
    code: "demo",
    status: "awaiting_payment",
    businessName: "Chioma Bags",
    verified: true,
    productName: "Ankara tote bags",
    productDetail: "Handmade Ankara tote, navy and gold print",
    quantity: 2,
    amount: 36000,
    currency: "NGN",
    buyerName: "Amaka",
    messagePreview:
      "Hi Amaka, Chioma Bags sent a Fege contract for 2 Ankara bags (₦36,000). Review the terms and pay on fege.africa/d/demo",
    createdLabel: "Sent just now",
  },
};

export const dealCopy = {
  safety: "Pay only on fege.africa. Fege never asks you to pay a personal account.",
  protectionTitle: "You are right to wait for the goods",
  protectionBody:
    "The seller is right to want pay before they send them. Fege holds the middle. You review and accept the terms, pay securely, track fulfilment, then confirm only when you see the goods. If something is wrong, report it before the check window ends and we review the evidence.",
  steps: [
    {
      title: "Review and accept",
      text: "Check the seller, the goods, the price and the conditions. Accept only when the terms are clear.",
    },
    {
      title: "Pay securely",
      text: "Your payment is held under the contract, not sent straight to a personal account.",
    },
    {
      title: "Track fulfilment",
      text: "Follow delivery and keep the milestones in view until the goods arrive.",
    },
    {
      title: "Confirm and release",
      text: "Confirm when you see the goods, or wait for the check window. If there is a problem, raise a dispute with evidence.",
    },
  ],
  payCta: "Pay securely with Fege",
  help: "Not sure this link is real? Real Fege links always start with fege.africa.",
} as const;

export function getDeal(code: string): Deal {
  return sampleDeals[code] ?? {
    ...sampleDeals.demo,
    code,
  };
}
