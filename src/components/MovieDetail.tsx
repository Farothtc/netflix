import { useLocation, useParams } from "react-router-dom";

export function MovieDetail() {
  const { movieName } = useParams();
  const location = useLocation();
  return (
    <>
      <h2>Hello Again</h2>
    </>
  );
}
