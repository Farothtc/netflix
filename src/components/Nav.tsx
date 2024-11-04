import { useState } from "react";

export function Nav() {
  const [searchItem, setSearchItem] = useState("");

  console.log(searchItem);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <a className="navbar-brand" href="/">
            <img
              src="./src/assets/netflix.svg"
              alt="netflix logo"
              id="netflix-logo-nav"
            />
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto ms-4 mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  TV Shows
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Movies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  New & Popular
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  My List
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Browse by Languages
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(event) => setSearchItem(event.target.value)}
              />
              <button
                className="btn btn-outline-dark border-0"
                type="submit"
                id="icon-button"
              >
                <i className="bi bi-search"></i>
              </button>
            </form>
            <div className="d-flex ms-2">
              <button
                className="btn btn-outline-dark border-0"
                id="icon-button"
              >
                <i className="bi bi-bell"></i>
              </button>
              <button
                className="btn btn-outline-dark border-0"
                id="icon-button"
              >
                <i className="bi bi-person-circle"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div>
        <h3 className="text-white">Hello Netflix</h3>
      </div>
    </>
  );
}
