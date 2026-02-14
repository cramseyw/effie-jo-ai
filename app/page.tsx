import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-5xl px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Left — Image + copyright */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/effie_jo.jpg"
            alt="Effie Jo"
            width={360}
            height={360}
            className="rounded-2xl shadow-lg object-cover"
            priority
          />
          <p className="mt-2 text-xs text-slate-500">
            © {new Date().getFullYear()} Claire Wescott
          </p>
        </div>

        {/* Right — Content */}
        <div>
          <h1 className="text-5xl font-bold tracking-tight">Effie Jo</h1>

          <h2 className="mt-4 text-2xl font-semibold text-slate-700">
            Dog Park Intake Form
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            A modern web application built with Next.js, deployed on Vercel, and powered by a
            serverless Google Apps Script backend.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="/apply"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 font-medium text-white hover:bg-slate-800"
            >
              Open Intake Form
            </a>

            <a
              href="https://github.com/cramseyw/effie-jo-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 font-medium text-slate-900 hover:bg-slate-50"
            >
              View Source on GitHub
            </a>
          </div>

          {/* Tech Highlights */}
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900">Frontend</h3>
              <div className="mt-2 text-sm text-slate-600 space-y-1">
                <div>Next.js</div>
                <div>TypeScript</div>
                <div>Tailwind</div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900">Backend</h3>
              <p className="mt-2 text-sm text-slate-600">
                Google Apps Script (serverless)
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900">Deployment</h3>
              <p className="mt-2 text-sm text-slate-600">GitHub → Vercel CI/CD</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
