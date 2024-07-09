import { imageBaseUrl } from "../../services/api";
import { useEffect, useState } from "react";
import CardMovieList from "../fragments/CardMovieList";
import { Link } from "react-router-dom";

const MovieList = ({ getMovies, title }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then((movies) => setMovies(movies));
  }, [getMovies]);

  return (
    <>
      <h2 className="text-3xl font-semibold text-left my-8">{ title }</h2>
      <div className="flex justify-center max-w-screen mb-8 items-center flex-wrap gap-x-8 gap-y-5 ">
        {movies ? (
          movies.length > 0 &&
            movies.slice(0, 5).map((movie) => (
              <Link to={`/movie-detail/${movie.id}/${encodeURIComponent(movie.title)}`} key={movie.id}>
                  <CardMovieList key={movie.id}>
                      <CardMovieList.Header MovieImage={`${imageBaseUrl}${movie.poster_path}`} MovieTitle={movie.title} />
                      <CardMovieList.Body MovieTitle={movie.title} MovieRelease={movie.release_date} />
                  </CardMovieList>
              </Link>
            ))
        ) : (
          <p>Loading....</p>
        )}
      </div>
    </>
  );
};

export default MovieList;
