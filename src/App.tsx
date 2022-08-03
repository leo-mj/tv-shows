import EpisodesListing from "./components/EpisodesListing";
import { useState } from "react";
import ShowsListing from "./components/ShowsListing";

function App(): JSX.Element {
  const [selectedShow, setSelectedShow] = useState<number | null>(null);
  return (
    <>
      {selectedShow ? (
        <EpisodesListing
          selectedShow={selectedShow}
          setSelectedShow={setSelectedShow}
        />
      ) : (
        <ShowsListing setSelectedShow={setSelectedShow} />
      )}
    </>
  );
}

export default App;
