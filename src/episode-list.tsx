import IEpisode from "./utils/i-episode";
import { episodeCode } from "./utils/episode-code";
import { omitTags } from "./utils/omit-tags";

interface EpisodeListProps {
  episode: IEpisode;
}

export function EpisodeList({ episode }: EpisodeListProps): JSX.Element {
  return (
    <div className="episodeEntry">
      <h1>{episode.name}</h1>
      <h2>{episodeCode(episode.season, episode.number)}</h2>
      {episode.image != null && (
        <img
          className="episodeImg"
          src={episode.image.medium}
          alt="episode thumbnail"
        />
      )}
      <h2>Episode summary:</h2>
      {episode.summary != null && <p>{omitTags(episode.summary)}</p>}
    </div>
  );
}
