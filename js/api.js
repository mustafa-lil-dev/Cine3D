function moviePlayerUrl(id) {
  return CONFIG.PLAYER_MOVIE_URL + id;
}

function tvPlayerUrl(id, season = 1, episode = 1) {
  return `${CONFIG.PLAYER_TV_URL}${id}/${season}/${episode}`;
}
