"use server";

import { appendFile, mkdir } from "fs/promises";
import path from "path";

type WaitlistInput = {
  name: string;
  phone: string;
  email: string;
  role: string;
};

export async function joinWaitlist(input: WaitlistInput) {
  const name = input.name.trim();
  const phone = input.phone.trim();
  const email = input.email.trim();
  const role = input.role === "buyer" ? "buyer" : "seller";

  if (name.length < 2 || phone.length < 7 || !email.includes("@")) {
    return { ok: false as const, error: "Add your name, WhatsApp number and email." };
  }

  const row =
    JSON.stringify({
      name,
      phone,
      email,
      role,
      at: new Date().toISOString(),
    }) + "\n";

  try {
    const dir = path.join(process.cwd(), "data");
    await mkdir(dir, { recursive: true });
    await appendFile(path.join(dir, "waitlist.jsonl"), row, "utf8");
  } catch {
    return { ok: false as const, error: "We could not save that. Try again in a moment." };
  }

  return { ok: true as const };
}
