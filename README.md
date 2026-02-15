🐾 Effie Jo — Dog Park Intake App

A modern web application built with Next.js, deployed on Vercel, and powered by a serverless Google Apps Script backend that writes submissions directly to Google Sheets.

Live App: [https://your-vercel-url.vercel.app](https://effie-jo-ai.vercel.app/)

Repository: https://github.com/cramseyw/effie-jo-ai

Overview

This project modernizes a previously built intake form into a production-ready, full-stack application.

The app collects structured dog profile data and writes clean, schema-aligned submissions into a Google Sheet via a custom Apps Script endpoint.

It demonstrates:

Frontend architecture with Next.js (App Router)

TypeScript implementation

Tailwind-based UI system

Form validation + controlled submission state

Serverless backend integration

Clean data mapping to spreadsheet headers

CI/CD deployment via GitHub → Vercel

Architecture

Frontend:

Next.js (App Router)

TypeScript

Tailwind CSS

Client-side form state management

Backend:

Google Apps Script (Web App deployment)

POST endpoint using doPost(e)

Header-based row mapping to ensure clean schema alignment

Multi-select field normalization

Data Flow:

User submits form
→ Frontend converts FormData into structured payload
→ POST to Apps Script endpoint
→ Apps Script maps headers dynamically
→ Row appended to Google Sheet
→ JSON success response returned

Deployment:

GitHub repository

Automatic deployments via Vercel CI/CD

Production URL generated per commit

Key Features

Structured intake fields (age group, size, energy level)

Multi-select treat preferences

Optional free-text additional details

Submission state handling (idle, submitting, success, error)

Scroll-to-top confirmation UX

Clean spreadsheet schema mapping

Serverless backend (no traditional server required)

Local Development

Install dependencies:

npm install


Run development server:

npm run dev


Visit:

http://localhost:3000

Why This Project

This project showcases:

End-to-end ownership (frontend, backend, deployment)

Practical serverless architecture

Clean UX refinement

Data integrity and schema alignment

Iterative modernization of an originally hand-built form into a production deployment

Built by Claire Wescott
Boston, MA
