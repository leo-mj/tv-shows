import IEpisode from "../utils/i-episode";
import { episodeCode } from "../utils/episode-code";
import { omitTags } from "../utils/omit-tags";
import { useState } from "react";

interface EpisodeListProps {
  episode: IEpisode;
}

export function EpisodeList({ episode }: EpisodeListProps): JSX.Element {
  const [notes, setNotes] = useState<string | null>(null);
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
      {notes !== null ? (
        <>
          <textarea
            className="episodeNotes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
          <button onClick={() => setNotes(null)}>Delete notes</button>
        </>
      ) : (
        <button onClick={() => setNotes("")}>Add notes</button>
      )}
    </div>
  );
}
