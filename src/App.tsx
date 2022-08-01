import episodes from "./episodes.json";
import { EpisodeList } from "./episode-list";

function App(): JSX.Element {
  return (
    <>
      <div className="episodeList">
        {episodes.map((element, i) => (
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
