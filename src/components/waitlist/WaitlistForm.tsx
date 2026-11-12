"use client";

import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { joinWaitlist } from "@/app/actions/waitlist";
import { Button } from "@/components/ui/Button";

const fieldClass =
  "focus-ring h-12 w-full rounded-full border border-rv-line bg-white px-5 text-base text-rv-ink outline-none";

export function WaitlistForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("seller");
  const [status, setStatus] = useState<"idle" | "saving">("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("saving");
    setError("");
    const result = await joinWaitlist({ name, phone, email, role });
    if (!result.ok) {
      setStatus("idle");
      setError(result.error);
      toast.error(result.error);
      return;
    }
    setName("");
    setPhone("");
    setEmail("");
    setRole("seller");
    setStatus("idle");
    toast.success("You're on the list. We will message you when Fege is ready.");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-white">Full name</span>
        <input
          name="name"
          required
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Ada Okonkwo"
          className={fieldClass}
        />
      </label>
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-white">WhatsApp number</span>
        <input
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          placeholder="0803 000 0000"
          className={fieldClass}
        />
      </label>
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-white">Email</span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@email.com"
          className={fieldClass}
        />
      </label>
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-white">I am a</span>
        <select
          name="role"
          value={role}
          onChange={(event) => setRole(event.target.value)}
          className={fieldClass}
        >
          <option value="seller">Seller</option>
          <option value="buyer">Buyer</option>
        </select>
      </label>
      {error ? <p className="text-sm text-white">{error}</p> : null}
      <Button type="submit" variant="white" className="w-full" size="lg">
        {status === "saving" ? "Saving…" : "Join the waitlist"}
      </Button>
      <p className="text-center text-sm text-white/65">
        We only use this to tell you when the app is ready. Store links coming soon [CONFIRM].
      </p>
    </form>
  );
}
