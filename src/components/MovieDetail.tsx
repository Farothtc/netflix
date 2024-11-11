import { useLocation, useParams, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";

export function MovieDetail() {
  const { movieName } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { colMoviesProps } = location.state || {};

  useEffect(() => {
    if (!colMoviesProps) {
      navigate("/");
    }
  }, [colMoviesProps, navigate]);

  if (!colMoviesProps) return null;

  const styles = {
    fontFamily: colMoviesProps.movfont,
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Link to={"/"}>
              <button className="btn btn-outline-light my-5">
                <i className="bi bi-arrow-left"></i> Back
              </button>
            </Link>
          </div>
          <div className="col-md-12" id="movie-detail">
            <div className="card mb-3 text-bg-dark">
              <div className="row g-0">
                <div className="col-md-8 border-end">
                  <img
                    src={colMoviesProps.banner}
                    className="img-fluid rounded-start"
                    alt={colMoviesProps.name}
                    id="movie-detail-img"
                    style={styles}
                  />
                </div>
                <div className="col-md-4 d-flex flex-column">
                  <div className="card-body">
                    <h2
                      className="card-title text-center mb-4 fs-1"
                      style={styles}
                    >
                      {colMoviesProps.name}
                    </h2>
                    <p className="card-text fs-4 mt-5" style={styles}>
                      {colMoviesProps.description}
                    </p>
                    <p className="card-text fs-3 mt-5" style={styles}>
                      <small className="">
                        IMDB: {colMoviesProps.imdb} / {colMoviesProps.imdbmax}
                      </small>
                    </p>
                  </div>
                  <div
                    className="d-flex mt-auto mb-5"
                    id="movie-detail-buttons"
                  >
                    <button className="btn btn-outline-light">
                      <i className="bi bi-play-fill me-1"></i> Watch
                    </button>
                    <button className="btn btn-outline-warning">
                      <i className="bi bi-star-fill me-1"></i> Add to Favorite
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
