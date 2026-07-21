Markdown
# 🎬 CINE3D - Free Movie & TV Streaming Site

A Netflix-inspired streaming frontend built with vanilla HTML/CSS/JS.
Uses TMDB API for metadata and Vidking Player for video streaming.

* **Live Website:** https://cine3-d.vercel.app

---

## 👤 Author

* **Mustafa Khoso** 
* Undergrad Computer Engineering Student

---

## 📁 Project Structure

cine3d/
├── index.html         ← Homepage with hero + trending rows
├── css/
│   └── style.css      ← All styles
├── js/
│   ├── config.js      ← API keys & player URLs
│   ├── api.js         ← TMDB API helpers & card builder
│   └── home.js        ← Homepage logic
└── pages/
├── movies.html    ← Browse movies
├── tv.html        ← Browse TV shows
├── search.html    ← Search page
├── detail.html    ← Movie/TV detail page
└── watch.html     ← Video player page (Vidking)


---

## 🚀 How to Run

### Option 1 — Local Development Server
1. Open the `cine3d` folder in your code editor
2. Serve using a local server utility (e.g., Python or Node.js)
3. Open `http://localhost:8080` (or your configured port)

### Option 2 — Python Local Server
```bash
cd cine3d
python -m http.server 8080
# Open http://localhost:8080
Option 3 — Deploy to Web
Netlify: Drag & drop the cine3d folder at netlify.com

Vercel: vercel deploy from the folder

GitHub Pages: Push to GitHub and enable Pages

⚙️ Configuration
Edit js/config.js to change API keys or player:

JavaScript
const CONFIG = {
  TMDB_API_KEY: "your_tmdb_key_here",
  PLAYER_MOVIE_URL: "[https://vidking.net/embed/movie/](https://vidking.net/embed/movie/)",
  PLAYER_TV_URL: "[https://vidking.net/embed/tv/](https://vidking.net/embed/tv/)",
};
🎥 Player URLs
The Vidking player is embedded via iframe:

Movie: https://vidking.net/embed/movie/{tmdb_id}

TV Episode: https://vidking.net/embed/tv/{tmdb_id}/{season}/{episode}

✨ Features
🎬 Hero banner with auto-rotating featured content

🔥 Trending, Popular, Top Rated, New Releases rows

🔍 Live search with multi-result display

🎞️ Movie detail pages with cast, genres, similar titles

📺 TV show pages with season/episode selector

▶️ Embedded Vidking video player

📱 Fully responsive for mobile

📌 Notes
This project uses the TMDB API for movie metadata only

Video playback is handled by Vidking Player (third-party)

No backend required — pure static files
