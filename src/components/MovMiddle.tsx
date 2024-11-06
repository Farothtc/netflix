export function MovMiddle() {
  return (
    <>
      <div className="wrapper-middle">
        <h2>The Lord of the Rings The Return of The King</h2>
        <div className="" id="button-wrapper-middle">
          <button className="btn btn-light me-3" id="play-middle">
            <i className="bi bi-play-fill"></i>
            <span>Play</span>
          </button>
          <button className="btn btn-secondary" id="info-middle">
            <i className="bi bi-info-circle"></i>
            <span>More Info</span>
          </button>
        </div>
        <h3 className="movies-suggest">Movies you might like</h3>
      </div>
    </>
  );
}
