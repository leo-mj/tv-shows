import IShow from "./utils/i-show";

interface ShowListProps {
  setSelectedShow: React.Dispatch<React.SetStateAction<number | null>>;
  show: IShow;
}

export default function ShowList({
  setSelectedShow,
  show,
}: ShowListProps): JSX.Element {
  return (
    <>
      <h1 onClick={() => setSelectedShow(show.id)}>{show.name}</h1>
      <img src={show.image.medium} alt="Show thumbnail" />
      <p>{show.summary}</p>
      <p>Genre: {show.genres}</p>
      <p>Status: {show.status}</p>
      {show.rating.average && <p>Rating: {show.rating.average}</p>}
      {show.runtime && <p>Runtime: {show.runtime}</p>}
    </>
  );
}
