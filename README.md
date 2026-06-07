# TTU MSA Platform
 
> Production web platform for Texas Tech University's MSA — centralizing event management, announcements, donations, and merch for an active student org of thousands.
 
[![Live Site](https://img.shields.io/badge/Live-ttumsa.org-brightgreen?style=flat-square)](https://ttumsa.org/)
[![Commits](https://img.shields.io/badge/Commits-145-blue?style=flat-square)](https://github.com/lbm-realty/MSA-Production/)
[![Stack](https://img.shields.io/badge/Stack-React%20%2F%20Node%20%2F%20MongoDB-informational?style=flat-square)](#tech-stack)
 
---
 
## What It Does
 
Before this platform existed, the MSA managed donations through a patchwork of Venmo, Zelle, physical checks, and third-party fundraising links, nothing centralized, nothing owned. Event info lived on social media. There was no way to build a digital presence or own the donation pipeline.
 
This platform changed that. It gave the organization:
 
- **A donations page** with Stripe integration of one-time and monthly options ($5, $25, $50, $100, or custom). Used to raise **$11,000 during Ramadan Banquet 2025**.
- **An events calendar** for announcements and event listings
- **A merch shop** with size/color/sleeve variant tracking and inventory management
- **An admin dashboard**: A lightweight CMS that lets org leadership update content, manage events, and view donation data without touching code
- **Auth-protected admin routes** so only verified officers can make changes
- **8–12 new student connections** traced directly to the website by the MSA president
---
 
## Tech Stack
 
| Layer | Technology |
|---|---|
| Frontend | React, React Router |
| Backend | Node.js, Express |
| Database | MongoDB (Mongoose) |
| Payments | Stripe (one-time + recurring) |
| Auth | Auth.js (JWT-based) |
| File Uploads | HTML File Input + Express Multer |
| Hosting | Render (Backend), Netlify (Frontend) |
 
---
 
## Architecture
 
The app is a decoupled full-stack architecture. A React SPA on the frontend talking to a REST API built in Node/Express, backed by MongoDB.
 
**Auth flow:** JWT-based authentication via Auth.js. Tokens are issued on login and validated on every admin API route via middleware. Admin-only endpoints are completely separated from public routes. The frontend conditionally renders admin UI based on token presence, but the real protection lives server-side.
 
**Donations:** Stripe handles payment processing end-to-end. The backend creates a PaymentIntent for one-time donations and a Subscription object for monthly recurring. Webhook handling confirms successful charges before updating donation records.
 
**Merch schema design:** The most iterated-on part of the data model. Merch items needed to support multiple variants (size: S/M/L/XL, sleeve: short/long, color) while tracking inventory per-variant and not per-item. This required a nested variant schema in MongoDB rather than a flat product document. Schema had to be fully restructured mid-project when the team added sleeve options, which cascaded into frontend rendering and cart logic updates.
 
**Admin CMS:** Admins authenticate and get access to a protected dashboard to manage events, edit announcements, and view donation history. Designed so non-technical org leadership can self-serve without developer involvement.
 
---
 
## Engineering Challenges
 
### 1. Merch Schema Redesign Under Live Conditions
The original product schema stored variants as flat fields. When the MSA team introduced sleeve variants mid-development, the entire schema needed restructuring, affecting MongoDB documents, Mongoose models, API response shape, and frontend rendering logic. Redesigned the variant model to nest size/sleeve/color/quantity per SKU, making future variant additions additive rather than breaking.
 
### 2. Events Page Crash in Production
Post-deployment, the president flagged that the events page was crashing intermittently. Root cause: a mismatch between the shape of data being written to MongoDB and the shape the frontend expected when rendering. Fixed by standardizing the event document schema, adding validation on the write path, and updating the frontend to handle optional fields gracefully. Diagnosed and resolved without access to production logs. Just API response inspection and systematic elimination.
 
### 3. JWT Auth from First Principles
Implemented Auth.js JWT authentication without prior experience in token-based auth systems. Worked through token issuance, storage, expiry, and middleware validation from scratch. The admin route protection now works reliably across sessions.
 
### 4. SEO for a React SPA
The site initially wasn't surfacing in searches for "Texas Tech MSA." Since React SPAs render client-side, search crawlers weren't indexing content properly. Improved meta tags and structured the About page content to give crawlers something to index resulting in measurable improvement in discoverability.
 
---
 
## Local Setup
 
```bash
# Clone the repo
git clone https://github.com/lbm-realty/MSA-Production.git
 
# Install frontend dependencies
cd frontend
npm install
 
# Install backend dependencies
cd ../backend
npm install
 
# Set up environment variables
cp .env.example .env
# Fill in: MONGO_URI, JWT_SECRET, STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET
 
# Run backend
npm run dev
 
# Run frontend (in a separate terminal)
cd ../frontend
npm start
```
 
**Required environment variables:**
 
| Variable | Description |
|---|---|
| `MONGO_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret for signing JWT tokens |
| `STRIPE_SECRET_KEY` | Stripe secret key |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret |
 
---
 
## Development Timeline
 
145 commits across 2 years of active development. Built iteratively in close collaboration with the MSA leadership team. Requirements gathered directly from the president and marketing team, shipped incrementally, and updated continuously based on real user feedback.
 
Currently migrating to Next.js (Pages Router) in a separate branch for improved performance and server-side rendering. The original React SPA had ~10 minute cold-start times locally so the migration targets faster builds and better SSR support.
 
---
 
## Impact
 
- **$11,000 raised** via Stripe during Ramadan Banquet 2025, the org's first centralized, owned donation pipeline
- **8–12 new student members** attributed to discovering the org through the website
- Replaced fragmented donation collection (Venmo, Zelle, checks, third-party links) with a single owned platform
- Active admin users: MSA president + officer team managing content independently
---
 
*Built and maintained by [Labeeb Muntasir](https://github.com/lbm-realty) · Texas Tech University CS '26*
