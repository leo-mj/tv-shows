// import episodes from "./episodes.json";
import { EpisodeList } from "./episode-list";
import { episodeMatch } from "./utils/episode-match";
import IEpisode from "./utils/i-episode";
import { useEffect, useState } from "react";
import ShowList from './shows.json';
import IShow from './utils/i-show';
import caseInsensitiveAlphabet from "./utils/case-insensitive-alphabet";

function App(): JSX.Element {
  const [searchText, setSearchText] = useState<string>("");
  const [previousData, setData] = useState<IEpisode[]>([]);
  const [showURL, setShowURL] = useState<string>("https://api.tvmaze.com/shows/250/episodes");
  useEffect(() => {
    fetch(showURL)
      .then((response) => response.json())
      .then((jsonBody: IEpisode[]) => {
        setData(jsonBody);
      });
  }, [showURL]);
  const filteredEpisodes: IEpisode[] = previousData.filter((episode) =>
    episodeMatch(episode, searchText)
  );

  const sortedShowList = [...ShowList].sort(caseInsensitiveAlphabet)
  return (
    <>
      <label htmlFor='shows'>Choose a show:</label>
      <select name='shows' id='shows' onChange={(e) => setShowURL(e.target.value)}>
        {sortedShowList.map((show: IShow, i) => <option key={i} value={`https://api.tvmaze.com/shows/${show.id}/episodes`}>{show.name}</option>)}
      </select>
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
