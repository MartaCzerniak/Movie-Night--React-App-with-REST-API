import { NavLink, Outlet } from "react-router-dom";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";

const newComponent = (Component) => {
  return function NewComponent(props) {
    return (
      <Component
        {...props}
        style={({ isActive }) => {
          return {
            display: "block",
            margin: "20px 0px 20px 20px",
            color: isActive ? "#f84403" : "lightgrey",
            textDecoration: "none",
          };
        }}
      ></Component>
    );
  };
};

const MyNavLink = newComponent(NavLink);

function App() {
  return (
    <div className="App-header">
      <ErrorBoundary>
        <header className="App-header-links">
          <MyNavLink to={"/"}> Home</MyNavLink>
          <MyNavLink to={"/popularMovies"}> Popular</MyNavLink>
          <MyNavLink to={"/topRated"}> Top Rated</MyNavLink>
          <MyNavLink to={"/upcoming"}> Upcoming</MyNavLink>
          <MyNavLink to={"/search"}> Search</MyNavLink>
        </header>
      </ErrorBoundary>
      <Outlet />
    </div>
  );
}

export default App;
