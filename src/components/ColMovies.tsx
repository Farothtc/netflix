import { MoviesData } from "../lib/Movies";

type ColMoviesProps = {
  e: MoviesData;
};

export function ColMovies({ e }: ColMoviesProps) {
  const styles = {
    fontFamily: e.movfont,
    color: e.tcolor,
  };
  return (
    <>
      <div className="col-md-3" id="col-movies">
        <div className="card text-bg-dark">
          <img src={e.banner} className="card-img" alt={e.name} />
          <div className="card-img-overlay">
            <h5 className="card-title" style={styles} id="col-movies-title">
              {e.name}
            </h5>
            <p className="card-text">{e.featured && e.description}</p>
            <p className="card-text">
              <small>{e.featured && e.imdb + "/" + e.imdbmax}</small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
