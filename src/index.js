import React from "react";
import { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const HomePage = lazy(() => import("./components/HomePage"));
const MoviesPage = lazy(() => import("./components/MoviesPage"));
const Search = lazy(() => import("./components/Search"));
const PopularMovies = lazy(() => import("./components/PopularMovies"));
const TopRated = lazy(() => import("./components/TopRated"));
const MovieDetailsPage = lazy(() => import("./components/MovieDetailsPage"));
const Upcoming = lazy(() => import("./components/Upcoming"));
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            index
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="Movie-Night--React-App-with-API"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <HomePage />
              </Suspense>
            }
          ></Route>
          <Route
            path="popularMovies"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <PopularMovies />
              </Suspense>
            }
          ></Route>
          <Route
            path="topRated"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <TopRated />
              </Suspense>
            }
          ></Route>
          <Route
            path="upcoming"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Upcoming />
              </Suspense>
            }
          ></Route>
          <Route
            path="search"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Search />
              </Suspense>
            }
          ></Route>
          <Route
            path="movie"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <MoviesPage />
              </Suspense>
            }
          >
            <Route
              path=":movieId"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <MovieDetailsPage />
                </Suspense>
              }
            ></Route>
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
