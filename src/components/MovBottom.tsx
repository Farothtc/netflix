import { ColMovies } from "./ColMovies";
import Movies from "../lib/Movies";

export function MovBottom() {
  const displayedMovies = Movies.map((e, index) => (
    <ColMovies key={index} e={e} />
  ));

  return (
    <>
      <div className="container-fluid">
        <div className="row">{displayedMovies}</div>
      </div>
    </>
  );
}
