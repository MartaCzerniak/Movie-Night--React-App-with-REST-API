import {
  Outlet,
  useNavigate,
  useParams,
  useSearchParams,
  Link,
} from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import ErrorBoundary from "../ErrorBoundary";
import api from "../../services/api";
import "../../App.css";
import "../Common.css";

export default function MoviePage(props) {
  let navigate = useNavigate();
  let params = useParams();
  let [searchParams, setSearchParams] = useSearchParams();

  const [data, setData] = useState(null);
  const elementRef = useRef(null);
  useEffect(() => {
    let abortController = new AbortController();
    let data = searchParams.get("query");
    if (!data) return;
    api.fetchMovies("search/movie", abortController, data).then((response) => {
      setData(response.results);
    });

    return () => abortController.abort();
  }, [searchParams.get("query")]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let query = elementRef.current.value;
    if (query) {
      setSearchParams({ query });
    } else {
      setSearchParams({});
    }
  };

  return (
    <ErrorBoundary>
      <div>
        <button
          className="back-button"
          onClick={() => {
            navigate(-1);
          }}
        >
          Go back
        </button>
        {!params.movieId && (
          <div>
            <div>
              <ul>
                {data &&
                  data.map((element) => (
                    <li key={element.id}>
                      <Link to={"/movie/" + element.id}>{element.title}</Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        )}
        {params.movieId && <Outlet />}
      </div>
    </ErrorBoundary>
  );
}

// import {
//   Outlet,
//   useNavigate,
//   useParams,
//   useSearchParams,
//   Link,
// } from "react-router-dom";
// import { useEffect, useState, useRef } from "react";
// import ErrorBoundary from "../ErrorBoundary";
// import api from "../../services/api";
// import styled from "@emotion/styled";
// import "../../App.css";
// import "../Common.css";

// export default function MoviePage(props) {
//   let navigate = useNavigate();
//   let params = useParams();
//   let [searchParams, setSearchParams] = useSearchParams();

//   const [data, setData] = useState(null);
//   const elementRef = useRef(null);
//   useEffect(() => {
//     let abortController = new AbortController();
//     let data = searchParams.get("query");
//     if (!data) return;
//     api.fetchMovies("search/movie", abortController, data).then((response) => {
//       setData(response.results);
//     });

//     return () => abortController.abort();
//   }, [searchParams.get("query")]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     let query = elementRef.current.value;
//     if (query) {
//       setSearchParams({ query });
//     } else {
//       setSearchParams({});
//     }
//   };

//   return (
//     <ErrorBoundary>
//       <div>
//         <button
//           className="back-button"
//           onClick={() => {
//             navigate(-1);
//           }}
//         >
//           Go back
//         </button>
//         {!params.movieId && (
//           <div>
//             <form
//               onSubmit={handleSubmit}
//               value={searchParams.get("query") || ""}
//             >
//               <input type="text" ref={elementRef}></input>
//               <button className="back-button" type="submit">
//                 Search
//               </button>
//             </form>
//             <div>
//               <ul>
//                 {data &&
//                   data.map((element) => (
//                     <li key={element.id}>
//                       <Link to={"/movie/" + element.id}>{element.title}</Link>
//                     </li>
//                   ))}
//               </ul>
//             </div>
//           </div>
//         )}
//         {params.movieId && <Outlet />}
//       </div>
//     </ErrorBoundary>
//   );
// }
