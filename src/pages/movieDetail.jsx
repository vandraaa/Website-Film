import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMovieDetail, getVideo } from "../services/getMovie";
import Navbar from "../components/layout/Navbar";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { imageBaseUrl } from "../services/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  // const [video, setVideo] = useState({});

  // useEffect(() => {
  //   getVideo(id).then((video) => setMovie(video));
  // }, [id]);
  // console.log(video);

  useEffect(() => {
    getMovieDetail(id).then((movie) => setMovie(movie));
  }, [id]);

  useEffect(() => {
    document.title = `AndraCinema - ${movie.title}`;
  });

  const formatDate = (dateString) => {
    const options = { month: "long", day: "numeric", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const getYear = (dateString) => {
    return dateString ? dateString.split("-")[0] : "";
  };

  const getGenres = (genres) => {
    return genres ? genres.map((genre) => genre.name).join(", ") : "";
  };

  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  const userScore = () => {
    const voteAverage = movie.vote_average;
    if (voteAverage) {
      return Math.round(voteAverage * 10) + "%";
    } else {
      return "N/A";
    }
  };

  console.log(movie);
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        {movie && movie.id ? (
          <>
            <div className="flex h-[90vh] relative overflow-hidden bg-black">
              <img
                src={`${imageBaseUrl}${movie.backdrop_path}`}
                alt={movie.title}
                className="w-full h-full absolute z-10 object-cover opacity-25"
              />

              <div className="flex w-full relative z-20">
                <div className="w-1/3 flex justify-center items-center">
                  <img
                    src={`${imageBaseUrl}${movie.poster_path}`}
                    alt={movie.title}
                    className="rounded-xl w-auto h-[70vh] object-cover shadow-lg"
                  />
                </div>
                <div className="ml-6 w-2/3 p-6 flex flex-col justify-center">
                  <h2 className="text-4xl font-bold mb-2 text-white">
                    {movie.title}{" "}
                    <span className="font-semibold text-white">
                      ({getYear(movie.release_date)})
                    </span>
                  </h2>
                  <p className="text-xl text-white font-semibold">
                    {movie.tagline}
                  </p>
                  <div className="flex my-5 gap-x-3 items-center">
                    <div className="p-7 relative bg-transparent rounded-[50%] flex border-[3px] border-yellow-40">
                      <p className="text-white font-semibold text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        {userScore()}
                      </p>
                    </div>
                    <div className="flex flex-col w-8">
                      <p className="text-white font-bold text-[16px]">
                        User Score
                      </p>
                    </div>
                    <Link className="ms-10 border-white border-4 py-[10px] px-5 rounded-3xl hover:border-gray-600 hover:bg-gray-600 duration-300 ease-in-out">
                      <p className="text-white font-semibold text-sm">
                        <span className="mr-3">
                          <FontAwesomeIcon icon={faPlay} />
                        </span>
                        Play Trailer
                      </p>
                    </Link>
                  </div>
                  <div className="flex text-white text-sm mb-4">
                    <p className="mr-2">{formatDate(movie.release_date)}</p>
                    <p>-</p>
                    <p className="mx-2">{getGenres(movie.genres)}</p>
                    <p>-</p>
                    <p className="ml-2">{formatTime(movie.runtime)}</p>
                  </div>
                  <p className="text-lg text-white w-[90%]">{movie.overview}</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col justify-center items-center min-h-[90vh]">
            <p>Loading...</p>
            <p>If loading is long, please refresh this page</p>
          </div>
        )}
      </div>
    </>
  );
};

export default MovieDetailPage;
