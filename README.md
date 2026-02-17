# 🐾 Effie Jo – Dog Park Intake Web App

A modern, production-ready web application built with **Next.js (App Router)** and deployed via **Vercel CI/CD**, with a serverless **Google Apps Script** backend that writes structured submissions to Google Sheets.

This project demonstrates full-stack ownership: frontend UX, data validation, backend processing, and deployment automation.

---

## 🌐 Live Application

**Live App:** [https://your-vercel-url.vercel.app  ](https://effie-jo-ai.vercel.app/)
**Code Repository:** [https://github.com/cramseyw/dog-park-intake](https://github.com/cramseyw/dog-park-intake)

---

## 🏗 Architecture Overview

**Frontend**
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Custom form handling & validation

**Backend**
- Google Apps Script (serverless)
- Header-based schema mapping to Google Sheets
- LockService for concurrency protection

**Deployment**
- GitHub → Vercel (automatic CI/CD)
- Production deployments triggered on merge to `main`

---

## ⚙️ Key Features

- Structured multi-field intake form
- Custom select components with improved UX
- Multi-select checkbox handling with array serialization
- Schema-aware backend mapping (headers dynamically matched to payload)
- Error handling + success state messaging
- Clean, recruiter-ready UI with professional polish
- Serverless architecture (no traditional backend hosting required)

---

## 🔍 Data Flow

1. User submits intake form.
2. Frontend serializes form data.
3. POST request sent to Google Apps Script endpoint.
4. Backend:
   - Locks script execution
   - Maps headers to payload fields
   - Writes clean row to Google Sheet
5. Returns JSON success response.
6. UI displays confirmation state.

---

## 🚀 What This Project Demonstrates

- Full-stack system thinking
- Production deployment workflow (CI/CD)
- Serverless backend integration
- Data integrity and schema alignment
- Cross-functional technical ownership

---

## 📦 Local Development

```bash
npm install
npm run dev
