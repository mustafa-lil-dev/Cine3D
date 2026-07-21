<div align="center">

# 🎬 CINE3D

### A Next-Generation, Netflix-Inspired Streaming Frontend

[![Live Website](https://img.shields.io/badge/Live-Website-red?style=for-the-badge&logo=vercel)](https://cine3-d.vercel.app/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/)

<p align="center">
  <img src="Screenshot%202026-07-05%20200803.png" alt="CINE3D Preview" width="100%">
</p>

</div>

---

## 👤 Author

* **Mustafa Khoso** 
* Undergrad Computer Engineering Student

---

## 🚀 Features

* **🎬 Dynamic Hero Banner:** Auto-rotating featured content showcase.
* **🔥 Rich Content Rows:** Trending, Popular, Top Rated, and New Releases grids.
* **🔍 Live Search:** Multi-result real-time lookup system.
* **🎞️ Comprehensive Details:** Cast info, genres, and similar title suggestions.
* **📺 TV Show Integration:** Dedicated episode and season switching selectors.
* **▶️ Embedded Streaming:** Integrated third-party Vidking video playback.
* **📱 Fully Responsive:** Optimized layout across mobile, tablet, and desktop viewports.

---

## 📁 Project Structure

```text
cine3d/
├── index.html         ← Homepage with hero & trending rows
├── css/
│   └── style.css      ← Global stylesheets
├── js/
│   ├── config.js      ← API keys & player endpoints
│   ├── api.js         ← TMDB helpers & card component builders
│   └── home.js        ← Homepage dynamic execution logic
└── pages/
    ├── movies.html    ← Movie directory
    ├── tv.html        ← TV series directory
    ├── search.html    ← Instant search engine
    ├── detail.html    ← Metadata detail viewer
    └── watch.html     ← Video player interface
