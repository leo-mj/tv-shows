// import episodes from "./episodes.json";
import { EpisodeList } from "./episode-list";
import { episodeMatch } from "./utils/episode-match";
import IEpisode from "./utils/i-episode";
import { useEffect, useState } from "react";
// import ShowList from "./shows.json";
// import IShow from "./utils/i-show";
// import caseInsensitiveAlphabet from "./utils/case-insensitive-alphabet";

interface EpisodesListingProps {
  selectedShow: number | null;
  setSelectedShow: React.Dispatch<React.SetStateAction<number | null>>;
}

function EpisodesListing({
  selectedShow,
  setSelectedShow,
}: EpisodesListingProps): JSX.Element {
  const [searchText, setSearchText] = useState<string>("");
  const [previousData, setData] = useState<IEpisode[]>([]);
  //   const [showURL, setShowURL] = useState<string>(
  //     "https://api.tvmaze.com/shows/${selected/episodes"
  //   );
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${selectedShow}/episodes`)
      .then((response) => response.json())
      .then((jsonBody: IEpisode[]) => {
        setData(jsonBody);
      });
  }, [selectedShow]);
  const filteredEpisodes: IEpisode[] = previousData.filter((episode) =>
    episodeMatch(episode, searchText)
  );

  //   const sortedShowList = [...ShowList].sort(caseInsensitiveAlphabet);
  return (
    <>
      {/* <label htmlFor="shows">Choose a show:</label>
      <select
        name="shows"
        id="shows"
        onChange={(e) => setSelectedShow(e.target.value)}
      >
        {sortedShowList.map((show: IShow, i) => (
          <option
            key={i}
            value={show.id}
          >
            {show.name}
          </option>
        ))}
      </select> */}
      <button type="button" onClick={() => setSelectedShow(null)}>
        Return to shows list
      </button>
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        type="text"
        placeholder="Search"
      />
      <p>
        Displaying {filteredEpisodes.length}/{previousData.length} episodes
      </p>
      <div className="episodeList">
        {filteredEpisodes.map((element, i) => (
          <EpisodeList key={i} episode={element} />
        ))}
      </div>
      <footer>
        <p>
          Source:{" "}
          <span>
            <a href="https://tvmaze.com/">https://tvmaze.com/</a>
          </span>
        </p>
      </footer>
    </>
  );
}

export default EpisodesListing;
