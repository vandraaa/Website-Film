import React, { useEffect, useState } from "react";
import { getMovieNowPlaying } from "../../services/getMovie";
import Button from "../elements/Button";
import Input from "../elements/Input";
import { imageBaseUrl } from "../../services/api";
import { Link } from "react-router-dom";
import CardMovieList from "./CardMovieList";
import { getSearchMovie } from "../../services/search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Loading from "../elements/Loading";

const SearchMovie = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovieNowPlaying()
    .then((result) => setSearchResults(result))
    .finally(() => setLoading(false));
  }, []);

  const search = async (q) => {
    if (q.length > 0) {
      setLoading(true);
      const query = await getSearchMovie(q);
      setSearchResults(query.results);
      setIsSearching(true);
      setLoading(false);
    } else {
      setSearchResults([]);
      setIsSearching(false);
    }
  };

  return (
    <>
      <div className="flex gap-x-5 w-[50%] mx-auto">
        <Input
          type="text"
          placeholder="Find Your Movie Here....."
          oc={({ target }) => setQuery(target.value)}
          value={query}
          customStyle="w-full"
        />
        <Button
          onclick={() => search(query)}
          customStyle="w-[200px] flex gap-x-3 items-center mx-auto justify-center"
        >
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
          Search
        </Button>
      </div>
      <h2 className="text-3xl font-semibold text-left mt-8">
        {isSearching ? "Search Result" : "Movies" }
        {isSearching && ` (${searchResults.length})`}
      </h2>

      {loading && (
        <div className="flex justify-center items-center py-24">
          <Loading />
        </div>
      )}

      <div className="flex justify-center max-w-screen my-8 items-center flex-wrap gap-x-8 gap-y-5 ">
        {searchResults && searchResults.length > 0 ? (
          searchResults.map((movie) => (
            <Link
              to={`/movie-detail/${movie.id}/${encodeURIComponent(
                movie.title
              )}`}
              key={movie.id}
            >
              <CardMovieList key={movie.id}>
                <CardMovieList.Header
                  MovieImage={`${imageBaseUrl}${movie.poster_path}`}
                  MovieTitle={movie.title}
                />
                <CardMovieList.Body
                  MovieTitle={movie.title}
                  MovieRelease={movie.release_date}
                />
              </CardMovieList>
            </Link>
          ))
        ) : (
          <div className="text-center py-8 text-black">
            <p>No result</p>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchMovie;
