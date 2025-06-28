# CineScope 🎬

CineScope is a modern, responsive movie discovery web application built using **ReactJS**, powered by **TMDB API** for real-time movie data, and **Firebase** for Google Authentication. Users can explore trending and upcoming movies, search by title, view details, and bookmark favorites.

### 🌐 Live Demo
➡️ [https://cinescope108.netlify.app](https://cinescope108.netlify.app)

---

## 🚀 Features

- 🔍 **Search & Watch**: Find movies by title and view detailed info
- 🎞️ **Genre Sorting**: Filter movies by genres
- 🔥 **Trending Section**: Explore trending movies
- 🎬 **Upcoming Section**: Preview upcoming releases
- 💾 **Bookmarks**: Save and manage your favorite movies
- 🔐 **Google Login**: Secure sign-in with Firebase Auth
- ⚡ **Fast & Smooth**: Built with React, Tailwind, Framer Motion

---

## 🛠️ Tech Stack

- **Frontend**: ReactJS, TailwindCSS, Framer Motion
- **Backend/API**: [TMDB API](https://www.themoviedb.org/documentation/api)
- **Authentication**: Firebase Google Auth
- **Deployment**: Netlify

---

## ⚙️ Installation Guide

To run CineScope locally, follow these steps:

### 📌 Requirements

- Node.js installed
- A code editor like VS Code

---

### 🛠️ One-Time Setup (Copy-Paste Everything Below in Order)

```bash
# Step 1: Download the repository 
# ZIP: extract manually

cd CineScope

# Step 2: Install all dependencies
```

npm install

---

# Step 3: Create a .env file in the root directory (in code editor like vs code )
echo "VITE_API_KEY=your_tmdb_api_key
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECTID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id" > .env

> 🔁 Replace the values like `your_tmdb_api_key`, `your_firebase_api_key`, etc., with actual credentials from [TMDB](https://developer.themoviedb.org/) and [Firebase Console](https://console.firebase.google.com/)

# Step 4: Start the development server

```

npm run dev

---

### ✅ After Running

Once the server starts, open your browser and visit:

```
http://localhost:5173/
```

Or click the link shown in the terminal after `npm run dev`. (can use 'o' also to directly open from the terminal)

---


