# 🎬 CineScope

**CineScope** is a sleek and responsive movie discovery web application built with **ReactJS**. It integrates **TMDB API** for real-time movie data and uses **Firebase** for secure Google authentication. Users can browse trending and upcoming movies, search by title, view detailed info, and bookmark favorites — all in a smooth, animated UI.

> 🚀 Live Demo: [https://cinescope108.netlify.app](https://cinescope108.netlify.app)  
> 🧑‍💻 Built by: [@parthp108](https://github.com/parthp108)

---

## 🔥 Features

- 🎞️ Browse Trending & Upcoming Movies
- 🔍 Search Movies by Title
- 🎯 Filter by Genres
- 📑 View Movie Details (Poster, Rating, Overview, etc.)
- 💾 Bookmark & Manage Favorites
- 🔐 Google Sign-In via Firebase
- ⚡ Smooth Animations (Framer Motion)
- 🖥️ Mobile-Responsive & Dark UI (TailwindCSS)

---

## ⚙️ Tech Stack

| Frontend   | API           | Auth      | Hosting   |
|------------|----------------|-----------|------------|
| ReactJS (Vite) | TMDB API       | Firebase  | Netlify    |
| TailwindCSS    | Axios           | Firebase Auth |        |
| Framer Motion  |                |           |            |

---

## 🧑‍💻 Getting Started (Local Setup)

### 🔧 Prerequisites

- Node.js ≥ 14.x
- A code editor like VS Code

### 📦 Installation Steps

```bash
# Step 1: Clone the repository or extract ZIP
cd CineScope
```
```
# Step 2: Install dependencies
npm install
```
```
# Step 3: Create .env file in root with your credentials
VITE_API_KEY=your_tmdb_api_key
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECTID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```
🔁 Replace your_... values using:

TMDB Developer Portal
Firebase Console
```
# Step 4: Start development server
npm run dev
Visit: 👉 http://localhost:5173
```

Folder Structure (Quick Glance)
```
CineScope/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── context/
│   ├── App.jsx
│   └── main.jsx
├── .env
├── tailwind.config.js
├── vite.config.js
└── package.json
```
🛡️ License
This project is open for educational and portfolio use. Attribution appreciated.









