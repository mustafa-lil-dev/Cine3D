// =============================================
// CONFIG - Cine3D Premium Global Configuration
// =============================================
const CONFIG = {
  TMDB_API_KEY: "bb52b04dbc4a5dff90d1df4e1e30cd42",
  TMDB_BASE_URL: "https://api.themoviedb.org/3",
  TMDB_IMAGE_BASE: "https://image.tmdb.org/t/p",
  TMDB_BACKDROP_SIZE: "w1280",
  TMDB_POSTER_SIZE: "w500",
  
  // Base URLs for our top 3 streaming servers
  SERVERS: {
    vidlink: {
      name: "Server 1 (VidLink - Multi-Audio)",
      movie: "https://vidlink.pro/embed/movie/",
      tv: "https://vidlink.pro/embed/tv/"
    },
    vidsrcMe: {
      name: "Server 2 (VidSrc.me - Hindi Dubs)",
      movie: "https://vidsrc.me/embed/movie?",
      tv: "https://vidsrc.me/embed/tv?"
    },
    vidsrcTo: {
      name: "Server 3 (VidSrc.to - High Quality)",
      movie: "https://vidsrc.to/embed/movie/",
      tv: "https://vidsrc.to/embed/tv/"
    }
  }
};
