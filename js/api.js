function moviePlayerUrl(id) {
  // Correct VidLink movie format: https://vidlink.pro/embed/movie/{id}
  return CONFIG.PLAYER_MOVIE_URL + id;
}

function tvPlayerUrl(id, season = 1, episode = 1) {
  // Correct VidLink TV format: https://vidlink.pro/embed/tv/{id}?s={season}&e={episode}
  return `${CONFIG.PLAYER_TV_URL}${id}?s=${season}&e=${episode}`;
}
