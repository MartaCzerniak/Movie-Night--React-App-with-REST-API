import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import api from "../services/api";
import "./Common.css";

const newComponent = (Component) => {
  return function NewComponent(props) {
    return (
      <Component
        {...props}
        style={{ textDecoration: "none", float: "left" }}
      ></Component>
    );
  };
};

const MyLink = newComponent(Link);

export default function HomePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    let abortController = new AbortController();
    api.fetchMovies("movie/top_rated", abortController).then((response) => {
      setData(response.results);
    });

    return () => abortController.abort();
  }, []);

  return (
    <ErrorBoundary>
      <h1>Top Rated</h1>
      <div className="main-section">
        <div>
          <section>
            <ul className="wrapper">
              {data &&
                data.map((movie) => (
                  <div>
                    <li key={movie.id}>
                      <MyLink to={"/movie/" + movie.id}>
                        <img
                          className="list-img"
                          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        />
                      </MyLink>
                    </li>
                  </div>
                ))}
            </ul>
          </section>
        </div>
      </div>
    </ErrorBoundary>
  );
}
