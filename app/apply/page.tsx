"use client";

import { useState } from "react";

const ENDPOINT =
  "https://script.google.com/macros/s/AKfycbzGHC__aKfT85xdd02VqK-isWBhoLHWOCVtc-Lmhq1NYV2lZYQNnDhYTF7E3_M-Wjk1Hg/exec";

type Status = "idle" | "submitting" | "success" | "error";

function SelectArrow() {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-500">
      <svg
        className="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}

export default function ApplyPage() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Convert FormData -> plain object
    // IMPORTANT: handle multi-select fields (checkboxes) by joining values.
    const payload: Record<string, string> = {};
    for (const [key, value] of formData.entries()) {
      const v = String(value);
      if (payload[key]) payload[key] = `${payload[key]}, ${v}`;
      else payload[key] = v;
    }

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        body: new URLSearchParams(payload),
      });

      const text = await res.text();
      if (!res.ok) throw new Error(`Request failed: ${res.status} ${text}`);

      form.reset();
      setStatus("success");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error("Submit error:", err);
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-2xl px-6 py-12">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Dog Park Intake Form
            </h1>
            <p className="mt-2 text-base text-slate-600">
              A short intake form to help Effie Jo follow up with dog park
              friends.
            </p>
          </div>

          <a
            href="/"
            className="shrink-0 text-sm font-medium text-slate-700 hover:text-slate-900"
          >
            ← Back
          </a>
        </div>

        {status === "success" && (
          <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-5">
            <p className="font-medium text-green-900">Submission received.</p>
            <p className="mt-1 text-sm text-green-800">
              Thanks — we’ll be in touch soon to set up a playdate.
            </p>
          </div>
        )}

        {status === "error" && (
          <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-5">
            <p className="font-medium text-red-900">Something went wrong.</p>
            <p className="mt-1 text-sm text-red-800">
              Please try again in a moment. If it keeps failing, the backend may
              be temporarily unavailable.
            </p>
          </div>
        )}

        <form
          onSubmit={onSubmit}
          className="mt-10 space-y-10 rounded-2xl border border-slate-200 p-8 shadow-sm"
        >
          {/* Basics */}
          <section className="space-y-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium">Dog Name</label>
                <input
                  name="dogName"
                  required
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900"
                  placeholder="Effie Jo"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Your Name</label>
                <input
                  name="name"
                  required
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900"
                  placeholder="Claire Wescott"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900"
                  placeholder="hello@example.com"
                />
              </div>
            </div>
          </section>

          {/* Dog details (structured) */}
          <section className="space-y-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium">Dog Age Group</label>
                <div className="relative">
                  <select
                    name="dogAgeGroup"
                    required
                    defaultValue=""
                    className="mt-2 w-full appearance-none rounded-xl border border-slate-300 bg-white px-4 py-3 pr-10 outline-none focus:border-slate-900"
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    <option value="Puppy (0–2 years)">Puppy (0–2 years)</option>
                    <option value="Adult (3–7 years)">Adult (3–7 years)</option>
                    <option value="Senior (8+ years)">Senior (8+ years)</option>
                  </select>
                  <SelectArrow />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium">Dog Size</label>
                <div className="relative">
                  <select
                    name="dogSize"
                    required
                    defaultValue=""
                    className="mt-2 w-full appearance-none rounded-xl border border-slate-300 bg-white px-4 py-3 pr-10 outline-none focus:border-slate-900"
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    <option value="Small (under 25 lbs)">
                      Small (under 25 lbs)
                    </option>
                    <option value="Medium (25–55 lbs)">Medium (25–55 lbs)</option>
                    <option value="Large (over 55 lbs)">Large (over 55 lbs)</option>
                  </select>
                  <SelectArrow />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium">Energy Level</label>
                <div className="relative">
                  <select
                    name="energyLevel"
                    required
                    defaultValue=""
                    className="mt-2 w-full appearance-none rounded-xl border border-slate-300 bg-white px-4 py-3 pr-10 outline-none focus:border-slate-900"
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    <option value="Low">Low</option>
                    <option value="Moderate">Moderate</option>
                    <option value="High">High</option>
                  </select>
                  <SelectArrow />
                </div>

                <p className="mt-2 text-xs text-slate-500">
                  Helps with planning meetups that feel comfortable for both dogs.
                </p>
              </div>
            </div>
          </section>

          {/* Treats (multi-select) */}
          <section className="space-y-6">
            <div>
              <label className="block text-sm font-medium">Treat Preferences</label>
              <p className="mt-1 text-sm text-slate-600">
                Select any that your dog enjoys (optional).
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  "Peanut butter",
                  "Cheese",
                  "Chicken",
                  "Yogurt",
                  "Freeze-dried fish",
                  "Crunchy biscuits",
                ].map((t) => (
                  <label
                    key={t}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 transition hover:border-slate-300 hover:bg-slate-50"
                  >
                    <input
                      type="checkbox"
                      name="treatPreferences"
                      value={t}
                      className="h-4 w-4"
                    />
                    <span className="text-sm text-slate-700">{t}</span>
                  </label>
                ))}
              </div>
            </div>
          </section>

          {/* Additional Details */}
          <section className="space-y-6">
            <div>
              <label className="block text-sm font-medium">Additional Details</label>
              <textarea
                name="additionalDetails"
                rows={5}
                maxLength={500}
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900"
                placeholder="Play style, favorite toys, leash manners, etc."
              />
              <p className="mt-2 text-xs text-slate-500">Max 500 characters.</p>
            </div>
          </section>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 font-medium text-white shadow-sm transition hover:bg-slate-800 hover:shadow-md disabled:opacity-60"
            >
              {status === "submitting" ? "Submitting…" : "Submit"}
            </button>

            <p className="text-xs text-slate-500">
              Submissions are written to Google Sheets via Apps Script.
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}
