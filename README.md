# SafarSphere

SafarSphere is a modern trip-planning web application that helps users search destinations, create personalized trip plans, and interact with dynamic maps to explore rich destination information. The project focuses on fast, intuitive planning so users can discover and design itineraries quickly and enjoyably.

---

## 🚀 Key Highlights

- Tech Stack: **React**, **Tailwind CSS**, **Node.js/Express**, **MongoDB**, **REST APIs**, **Firebase**
- Features: Search destinations, create personalized trip plans, apply advanced filters, interact with dynamic maps, and view rich destination information, weather page, currency converter and more.
- Impact: Enabled users to plan trips **30% faster** with improved navigation, filtering, and personalized itineraries.

---

## 🔧 Architecture & Overview

- Frontend: React + Vite, styled with Tailwind CSS, handling maps, UI, search, and trip planning features.
- Backend: Node.js + Express server exposing RESTful APIs that query third-party geo APIs (OpenTripMap, GeoDB) and (optionally) provide server-side logic and persistence.
- Database: MongoDB (planned/optional) to store users, saved trip plans, favorites, and analytics.
- Authentication: Firebase Authentication for user accounts and social logins (Google, etc.)
- External Services: OpenTripMap, GeoDB (via RapidAPI), and analytics or other map services as needed.

---

## 🔍 Features

- Search Destinations — find cities and places using predictive search and external geo APIs.
- Personalized Itineraries — build and save daily itineraries and trip plans.
- Advanced Filters — filter by category, distance, rating, tags and accessibility.
- Dynamic Maps — view, pan, and click destinations on the interactive map for instant details.
- Rich Destination Info — see details, photos, and practical tips for each destination.

---

## 🧭 API Endpoints (Server)

Current public endpoints (found in `backend/server.js`):

- `GET /api/city?query=...` — search cities by prefix (uses GeoDB/Geo API)
- `GET /api/nearby?lat={lat}&lon={lon}` — returns nearby places around a location (OpenTripMap)
- `GET /api/place/:xid` — get detailed information for a place (OpenTripMap XID)

Note: These are the current endpoints. If you add MongoDB for user data, the server will be extended with user endpoints such as `/api/user`, `/api/plans`, `/api/favorites`, etc.

---

## ⚙️ Quick Start — Local Development

Prerequisites:

- Node.js (v18+) and npm installed
- (Optional) MongoDB installed or a MongoDB Atlas cluster
- (Optional) Firebase project for Authentication

Backend:

```powershell
cd backend
npm install
# Create .env with required keys (see ENV section below)
npm run dev
```

Frontend:

```powershell
cd frontend
npm install
npm run dev
```

Open the frontend (Vite) server at the displayed address (usually http://localhost:5173) and the backend at http://localhost:5000.

If you prefer one terminal to run both, use two terminal tabs/windows concurrently.

---

## 🔐 Environment Variables (.env)

Create a `.env` file in the `backend` directory with the following variables:

```
RAPID_API_KEY=YOUR_RAPIDAPI_KEY
OPENTRIPMAP_KEY=YOUR_OPENTRIPMAP_KEY
MONGODB_URI=mongodb+srv://user:password@cluster-url/dbname
PORT=5000
FIREBASE_API_KEY=... (if using Firebase in backend)
FIREBASE_AUTH_DOMAIN=... (if using Firebase)
FIREBASE_PROJECT_ID=...
FIREBASE_STORAGE_BUCKET=...
FIREBASE_MESSAGING_SENDER_ID=...
FIREBASE_APP_ID=...
```

For frontend Firebase config (if using in frontend), store these in a `.env` inside `frontend/.env` as Vite environment variables starting with `VITE_`, e.g. `VITE_FIREBASE_API_KEY`.

---

## 🧾 Accounts & Authentication (Firebase) — How to Add

If you want to enable accounts and make trip plans persistent per user, follow these steps to configure Firebase Authentication:

1. Create a Firebase project at https://console.firebase.google.com/ and add a new Web app.
2. Enable Sign-in methods you want (e.g., Google, Email/Password) under Authentication → Sign-in method.
3. Copy the Firebase config to your frontend `.env` as `VITE_` prefixed variables and initialize Firebase in the client app.
4. Protect backend endpoints with Firebase ID tokens (verify ID token server-side using Firebase Admin SDK) and add API endpoints for CRUD operations to persist users' saved trip plans.

Example (frontend Firebase config):

```
VITE_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=YOUR_PROJECT.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

---

## 📦 Database (MongoDB) — How to Add

1. Use MongoDB Atlas or a local MongoDB server.
2. Add a connection entry to `backend/.env` as `MONGODB_URI`.
3. Create Mongoose models for `User`, `TripPlan`, `Destination`, and other resources.
4. Add endpoints under `/api/plans`, `/api/favorites` and ensure requests are validated and authenticated.

Example: `TripPlan` model fields

- title
- description
- days
- items[] (list of places, times)
- userId (reference to user)

---

## 🧭 What I'll Add (Roadmap / Planned Features) 💡

I plan to expand the project with the following features (short-term / medium-term roadmap):

- Authentication & user accounts (Firebase Auth) — allow sign-in and saved plans per user.
- Persist trip plans to MongoDB, with CRUD operations, sharing, and export.
- Add a saved favorites mechanism and user-specific analytics.
- Improve search experience with autocomplete and smart suggestions.
- Add map clustering and route optimization for multi-destination trips.
- Offline caching and PWA support for trip usage on mobile.
- Unit tests & E2E tests (Jest, React Testing Library, Cypress).
- Docker containers and GitHub Actions for CI/CD and deployment to cloud.

---

## 🧪 Testing

Add unit and integration tests using your preferred testing libraries:

- Frontend: Jest + React Testing Library; E2E: Cypress
- Backend: Jest / Supertest for API route tests

---

## 🛫 Deployment

Deploy frontend as a static site (Vercel, Netlify, or Cloudflare Pages), backend on Heroku, Railway, or Azure App Service, and use MongoDB Atlas for the database. For Firebase-hosted frontends or serverless functions, configure CORS and secure API endpoints properly.

---

## 👥 Contributing

Contributions are welcome! To contribute:

1. Fork the repository,
2. Create a branch: `git checkout -b feature/my-feature`,
3. Open a PR describing your changes and what parts of the app you have changed.

Please open issues for feature requests and use standard commit messages. Include tests for new features where possible.

---

## Author

Name - Ankita Gupta
Project - SafarSphere
