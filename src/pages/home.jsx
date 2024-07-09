import Navbar from "../components/layout/Navbar";
import {
  getMovieNowPlaying,
  getMoviePopular,
  getMovieTopRated,
  getMovieUpComing,
} from "../services/getMovie";
import { useEffect, useState } from "react";
import MovieList from "../components/layout/MovieList";
import Button from "../components/elements/Button";
import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  useEffect(() => {
    document.title = "AndraCinema - Home";
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-[#FFF]">
        <div className="relative h-[90vh] flex justify-center items-center bg-[url('https://asset.kompas.com/crops/L8ObZEST9ZvxbjO_MS-eDSYfy1I=/0x0:512x341/750x500/data/photo/2023/09/11/64fec57437c3e.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 mx-[5%] text-center">
            <h2 className="text-white text-4xl font-semibold">
              Welcome to AndraCinema
            </h2>
            <p className="text-white mb-2">
              Discover millions of movies. Start exploring today.
            </p>
            <Link to="/movie">
              <Button customStyle="w-[35%] flex gap-x-3 items-center mx-auto justify-center">
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                Find a Movie
              </Button>
            </Link>
          </div>
        </div>
        <div className="mx-[5%] pt-10">
          <MovieList getMovies={getMovieNowPlaying} title="Now Playing" />
          <MovieList getMovies={getMoviePopular} title="Popular" />
          <MovieList title="Up Coming" getMovies={getMovieUpComing} />
          <MovieList title="Top Rated" getMovies={getMovieTopRated} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
