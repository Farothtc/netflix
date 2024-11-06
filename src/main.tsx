import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { MovieDetail } from "./components/MovieDetail.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <div>
        <h2 className="display-5 text-center mt-5">Error 404</h2>
      </div>
    ),
  },
  {
    path: "/:movieName",
    element: <MovieDetail />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
