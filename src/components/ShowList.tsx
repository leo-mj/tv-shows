import IShow from "../utils/i-show";
import { omitTags } from "../utils/omit-tags";

interface ShowListProps {
  setSelectedShow: React.Dispatch<React.SetStateAction<number | null>>;
  show: IShow;
  setAllFavourites: React.Dispatch<React.SetStateAction<number[]>>;
  allFavourites: number[];
}

export default function ShowList({
  setSelectedShow,
  setAllFavourites,
  allFavourites,
  show,
}: ShowListProps): JSX.Element {
  return (
    <div className="showEntry">
      <h1 onClick={() => setSelectedShow(show.id)}>{show.name}</h1>
      {allFavourites.includes(show.id) ? (
        <button
          onClick={() =>
            setAllFavourites([...allFavourites].filter((a) => a !== show.id))
          }
        >
          ★
        </button>
      ) : (
        <button onClick={() => setAllFavourites([...allFavourites, show.id])}>
          ☆
        </button>
      )}
      <main className="showBody">
        <img className="showImg" src={show.image.medium} alt="Show thumbnail" />
        <div className="showText">
          {show.summary !== null && <p>{omitTags(show.summary)}</p>}
          <p>Genre: {show.genres.join(" | ")}</p>
          <p>Status: {show.status}</p>
          {show.rating.average && <p>Rating: {show.rating.average}</p>}
          {show.runtime && <p>Runtime: {show.runtime}</p>}
        </div>
      </main>
    </div>
  );
}
