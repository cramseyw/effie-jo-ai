import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-5xl px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left — Image */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/effie_jo.jpg"
            alt="Effie Jo"
            width={360}
            height={360}
            className="rounded-2xl shadow-lg object-cover"
            priority
          />
        </div>

        {/* Right — Content */}
        <div>
          <h1 className="text-5xl font-bold tracking-tight">
            Effie Jo
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-slate-700">
            Dog Park Intake Form
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            A legacy Google Form re-imagined as a modern web application.
            Built with Next.js, deployed via Vercel, and connected to a Google Apps Script backend.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="/apply"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 font-medium text-white hover:bg-slate-800"
            >
              Open Form
            </a>

            <a
              href="https://github.com/cramseyw/effie-jo-ai"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 font-medium text-slate-900 hover:bg-slate-50"
            >
              View on GitHub
            </a>
          </div>

          {/* Tech Highlights */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-600">
            <div className="rounded-xl border border-slate-200 p-4">
              <div className="font-semibold text-slate-900">Frontend</div>
              <div>Next.js App Router + Tailwind</div>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <div className="font-semibold text-slate-900">Backend</div>
              <div>Google Apps Script Web App</div>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <div className="font-semibold text-slate-900">Delivery</div>
              <div>GitHub → Vercel CI/CD</div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
