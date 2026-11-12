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
      "Hi Amaka, Chioma Bags sent a Fege contract for 2 Ankara bags (₦36,000). See the goods and pay on fege.africa/d/demo",
    createdLabel: "Sent just now",
  },
};

export const dealCopy = {
  safety: "Pay only on fege.africa. Fege never asks you to pay a personal account.",
  protectionTitle: "You are right to wait for the goods",
  protectionBody:
    "The seller is right to want pay before they send them. Fege holds the middle. Your payment stays held until you confirm the goods, or the check window ends with no problem.",
  steps: [
    { title: "Review the contract", text: "Check the seller, the goods and the price." },
    { title: "Pay securely", text: "Your payment is locked, not sent straight to the seller." },
    { title: "Receive your order", text: "Follow delivery and confirm when it arrives." },
    { title: "Seller gets paid", text: "Funds release after confirmation or the check window." },
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
