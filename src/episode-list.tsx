import IEpisode from "./utils/i-episode";
import { episodeCode } from "./utils/episode-code";
import { omitPTags } from "./utils/omit-p-tags";

export function EpisodeList(episode: IEpisode): JSX.Element {
  return (
    <div className="episodeEntry">
      <h1>{episode.name}</h1>
      <h2>{episodeCode(episode.season, episode.number)}</h2>
      <img
        className="episodeImage"
        src={episode.image.medium}
        alt="episode thumbnail"
      />
      <h2>Episode summary:</h2>
      <p>{omitPTags(episode.summary)}</p>
    </div>
  );
}
