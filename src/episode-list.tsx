import IEpisode from "./utils/i-episode";

export function EpisodeList(episode: IEpisode): JSX.Element {
  return (
    <>
      <h1>{episode.name}</h1>
      <h2>
        {episode.season}, {episode.number}
      </h2>
    </>
  );
}
