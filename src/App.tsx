import logo from "./logo.svg";
import { useRef } from "react";
import { useFetchCharactersQuery } from "./stores/CharactersAPISlice";

function App() {
  const { data = [], isFetching, error } = useFetchCharactersQuery(2);
  if (error) {
    return <div>Error!</div>;
  }

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
