"use client";

import { useState } from "react";

const ENDPOINT = "https://script.google.com/macros/s/AKfycbzGHC__aKfT85xdd02VqK-isWBhoLHWOCVtc-Lmhq1NYV2lZYQNnDhYTF7E3_M-Wjk1Hg/exec";

export default function ApplyPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Convert FormData -> plain object
    const payload: Record<string, string> = {};
    for (const [key, value] of formData.entries()) {
      payload[key] = String(value);
    }

    try {
        const res = await fetch(ENDPOINT, {
          method: "POST",
          body: new URLSearchParams(payload),
        });
      
        const text = await res.text();
        console.log("APISpreadsheets status:", res.status);
        console.log("APISpreadsheets response:", text);
      
        if (!res.ok) throw new Error(`Request failed: ${res.status} ${text}`);
      
        form.reset();
        setStatus("success");
      } catch (err) {
        console.error("Submit error:", err);
        setStatus("error");
      }
      
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight">BFF Application 🐶</h1>
        <p className="mt-3 text-lg text-slate-600">
          Apply to be Effie Jo’s new best friend. Submissions go straight to the spreadsheet.
        </p>

        <form onSubmit={onSubmit} className="mt-10 space-y-6 rounded-2xl border border-slate-200 p-8 shadow-sm">
          <div>
            <label className="block text-sm font-medium">Your name</label>
            <input
              name="name"
              required
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900"
              placeholder="Jane Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              name="email"
              type="email"
              required
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900"
              placeholder="jane@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Why do you want to be Effie Jo’s BFF?</label>
            <textarea
              name="message"
              required
              rows={5}
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900"
              placeholder="Tell us your vibe…"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 font-medium text-white hover:bg-slate-800 disabled:opacity-60"
          >
            {status === "submitting" ? "Submitting..." : "Submit application"}
          </button>

          {status === "success" && (
            <p className="text-sm font-medium text-green-700">Application received — woof! 🐾</p>
          )}
          {status === "error" && (
            <p className="text-sm font-medium text-red-700">
              Oops — something went wrong. Try again in a moment.
            </p>
          )}
        </form>

        <p className="mt-6 text-sm text-slate-500">
          Tip: this is a demo site modernized with Next.js + Vercel + AI-assisted development.
        </p>
      </div>
    </main>
  );
}
