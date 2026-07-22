"use client";

import * as React from "react";
import { Send } from "lucide-react";
import { brand } from "@/brand.config";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [sent, setSent] = React.useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("your-name") || "");
    const email = String(form.get("your-email") || "");
    const phone = String(form.get("your-phone") || "");
    const subject = String(form.get("your-subject") || "New enquiry from travsuntours.com");
    const message = String(form.get("your-message") || "");

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone && `Phone: ${phone}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${brand.social.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="your-name" className="text-sm font-medium">
            Your Name
          </label>
          <input
            id="your-name"
            name="your-name"
            type="text"
            required
            placeholder="Your Name"
            className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus-visible:ring-[3px] focus-visible:ring-ring/50"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="your-email" className="text-sm font-medium">
            Email Address
          </label>
          <input
            id="your-email"
            name="your-email"
            type="email"
            required
            placeholder="Email Address"
            className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus-visible:ring-[3px] focus-visible:ring-ring/50"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="your-phone" className="text-sm font-medium">
            Phone Number
          </label>
          <input
            id="your-phone"
            name="your-phone"
            type="text"
            placeholder="Phone Number"
            className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus-visible:ring-[3px] focus-visible:ring-ring/50"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="your-subject" className="text-sm font-medium">
            Subject
          </label>
          <input
            id="your-subject"
            name="your-subject"
            type="text"
            placeholder="Subject"
            className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus-visible:ring-[3px] focus-visible:ring-ring/50"
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <label htmlFor="your-message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="your-message"
          name="your-message"
          required
          rows={5}
          placeholder="Write message"
          className="w-full resize-none rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus-visible:ring-[3px] focus-visible:ring-ring/50"
        />
      </div>
      <Button type="submit" size="lg" className="w-full sm:w-auto">
        <Send className="size-4" /> Send Message
      </Button>
      {sent && (
        <p className="text-sm text-muted-foreground">
          Your email app should now be open with your message ready to send.
          Prefer another way? Call or WhatsApp us directly above.
        </p>
      )}
    </form>
  );
}
