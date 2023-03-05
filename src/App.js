import { NavLink, Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";

const StyledHeader = styled.header({
  display: "flex",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  boxShadow: " 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);",
});

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
            fontWeight: 600,
            fontSize: 18,
          };
        }}
      ></Component>
    );
  };
};

const MyNavLink = newComponent(NavLink);

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <StyledHeader>
          <MyNavLink to={"/"}> Home</MyNavLink>
          <MyNavLink to={"/popularMovies"}> Popular</MyNavLink>
          <MyNavLink to={"/topRated"}> Top Rated</MyNavLink>
          <MyNavLink to={"/upcoming"}> Upcoming</MyNavLink>
          <MyNavLink to={"/search"}> Search</MyNavLink>
        </StyledHeader>
      </ErrorBoundary>
      <Outlet />
    </div>
  );
}

export default App;
