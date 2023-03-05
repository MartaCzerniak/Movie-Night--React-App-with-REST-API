import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import api from "../services/api";
import "./Common.css";
import "./Stars.css";

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
    api.fetchMovies("trending/all/day", abortController).then((response) => {
      setData(response.results);
    });

    return () => abortController.abort();
  }, []);

  return (
    <div className="home-page-div">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <ErrorBoundary>
        <div className="home-pg">
          <h1 className="home-page-title">What are we watching today?</h1>
          <div className="home-page-button-container">
            <MyLink className="button-home-pg" to={"/popularMovies"}>
              Popular
            </MyLink>
            <MyLink className="button-home-pg" to={"/topRated"}>
              Top Rated
            </MyLink>
            <MyLink className="button-home-pg" to={"/upcoming"}>
              Upcoming
            </MyLink>
          </div>
        </div>
      </ErrorBoundary>
    </div>
  );
}
