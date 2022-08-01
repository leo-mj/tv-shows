import IEpisode from "./i-episode";

export function episodeMatch(episode: IEpisode, searchText: string): boolean {
  if (episode.summary.toLowerCase().includes(searchText.toLowerCase())) {
    return true;
  } else if (episode.name.toLowerCase().includes(searchText.toLowerCase())) {
    return true;
  }
  return false;
}
