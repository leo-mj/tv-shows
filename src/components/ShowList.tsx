import IShow from "../utils/i-show";
import { omitTags } from "../utils/omit-tags";
import { useEffect, useState } from "react";

interface ShowListProps {
  setSelectedShow: React.Dispatch<React.SetStateAction<number | null>>;
  show: IShow;
}

export default function ShowList({
  setSelectedShow,
  show,
}: ShowListProps): JSX.Element {
  const [isFavourite, setIsFavourite] = useState<boolean>(() => {
    let value;
    try {
      value = JSON.parse(
        window.localStorage.getItem(JSON.stringify(show.id)) || "false"
      );
    } catch (e) {
      value = false;
    }
    return value;
  });

  useEffect(() => {
    window.localStorage.setItem(
      JSON.stringify(show.id),
      JSON.stringify(isFavourite)
    );
  }, [isFavourite, show.id]);

  return (
    <div className="showEntry">
      <h1 onClick={() => setSelectedShow(show.id)}>{show.name}</h1>
      {isFavourite ? (
        <button
          onClick={() => {
            setIsFavourite(false);
          }}
        >
          ★
        </button>
      ) : (
        <button
          onClick={() => {
            setIsFavourite(true);
          }}
        >
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
