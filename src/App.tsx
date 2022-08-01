// import episodes from "./episodes.json";
import { EpisodeList } from "./episode-list";
import { episodeMatch } from "./utils/episode-match";
import IEpisode from "./utils/i-episode";
import { useEffect, useState } from "react";

function App(): JSX.Element {
  const [searchText, setSearchText] = useState<string>("");
  const [previousData, setData] = useState<IEpisode[]>([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/shows/82/episodes")
      .then((response) => response.json())
      .then((jsonBody: IEpisode[]) => {
        setData(jsonBody);
      });
  }, []);
  const filteredEpisodes: IEpisode[] = previousData.filter((episode) =>
    episodeMatch(episode, searchText)
  );
  return (
    <>
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
          <EpisodeList
            key={i}
            id={element.id}
            url={element.url}
            name={element.name}
            season={element.season}
            number={element.number}
            type={element.type}
            airdate={element.airdate}
            airtime={element.airtime}
            airstamp={element.airstamp}
            runtime={element.runtime}
            rating={element.rating}
            image={element.image}
            summary={element.summary}
            _links={element._links}
          />
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

export default App;
