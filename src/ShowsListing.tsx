import { useState } from "react";
import shows from "./shows.json";
import IShow from "./utils/i-show";
import { showMatch } from "./utils/show-match";
import caseInsensitiveAlphabet from "./utils/case-insensitive-alphabet";
import ShowList from "./ShowList";

interface ShowsListingProps {
  setSelectedShow: React.Dispatch<React.SetStateAction<number | null>>;
}

function ShowsListing({ setSelectedShow }: ShowsListingProps): JSX.Element {
  const [searchText, setSearchText] = useState<string>("");
  const filteredShows: IShow[] = shows
    .filter((show) => showMatch(show, searchText))
    .sort(caseInsensitiveAlphabet);

  return (
    <>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search"
      />
      <p>
        Displaying {filteredShows.length} / {shows.length} shows
      </p>
      <label htmlFor="shows">Choose a show:</label>
      <select name="shows" id="shows">
        {filteredShows.map((show: IShow, i) => (
          <option
            key={i}
            value={`https://api.tvmaze.com/shows/${show.id}/episodes`}
          >
            {show.name}
          </option>
        ))}
      </select>
      {filteredShows.map((show, i) => (
        <ShowList setSelectedShow={setSelectedShow} key={i} show={show} />
      ))}
    </>
  );
}

export default ShowsListing;
