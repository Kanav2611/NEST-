# Nest - Modern Student Housing Management Platform for Brokers, Property Owners and Students.

Nest is a production-oriented SaaS foundation for student housing management.

It unifies operations for students, brokers, owners, maintenance staff, security staff, and managers with role-based dashboards and workflow-driven modules.

## Tech Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Auth.js (next-auth v4, Credentials)
- PostgreSQL schema in `db/schema.sql`

## Implemented Foundation

- Multi-role portal routes:
  - `/student`
  - `/broker`
  - `/owner`
  - `/maintenance`
  - `/security`
- Authentication and role-based route protection:
  - `/login`
  - `/unauthorized`
  - middleware guard for role dashboards
- Smart natural-language search parsing API:
  - `POST /api/search`
- RMS ticket endpoints with escalation hints:
  - `GET /api/tickets`
  - `POST /api/tickets`
- Booking hold endpoint:
  - `POST /api/booking-holds`
- Comprehensive relational schema for:
  - users and roles
  - properties, rooms, amenities, media
  - booking and agreements
  - maintenance tickets and timelines
  - visitor passes
  - billing invoices
  - broker CRM leads

## Setup

1. Install dependencies:
   - `npm install`
2. Run development server:
   - `npm run dev`
3. Open:
   - `http://localhost:3000`

## Demo Login Accounts

- Student: `student@nest.app` / `student123`
- Broker: `broker@nest.app` / `broker123`
- Owner: `owner@nest.app` / `owner123`
- Maintenance: `maintenance@nest.app` / `maintenance123`
- Security: `security@nest.app` / `security123`

## Environment Variables

Create `.env.local` from `.env.example` and set:

- `AUTH_SECRET`
- `AUTH_TRUST_HOST=true`

## Production Roadmap

To move this baseline to full production, add:

- PostgreSQL runtime layer (Supabase/Firebase + Prisma/Drizzle)
- Cloudinary media uploads with signed URLs
- Google Maps embedding + geospatial filtering
- PDF agreement generation (server-side)
- Payments and reconciliation workflows
- Audit logs + background jobs + SLA automation
- Notification channels (email, in-app, WhatsApp)
- Strong API validation and rate limiting
- End-to-end tests and observability

## Notes

- Placeholder property images use real royalty-free links from Unsplash/Pexels.
- The architecture is modular to support expansion into multi-university and co-living operations.
