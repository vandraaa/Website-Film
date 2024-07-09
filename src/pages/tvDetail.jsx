import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { imageBaseUrl } from "../services/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDetailTv } from "../services/getTV";

const TVDetail = () => {
  const { id } = useParams();
  const [tv, setTv] = useState({});

  useEffect(() => {
    getDetailTv(id).then((tv) => setTv(tv));
  }, [id]);

  useEffect(() => {
    document.title = `AndraCinema - ${tv.name}`;
  }, [tv.title]);

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
    const voteAverage = tv.vote_average;
    if (voteAverage) {
      return Math.round(voteAverage * 10) + "%";
    } else {
      return "N/A";
    }
  };

  console.log(tv);
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        {tv && tv.id ? (
          <>
            <div className="flex h-[90vh] relative overflow-hidden bg-black">
              <img
                src={`${imageBaseUrl}${tv.backdrop_path}`}
                alt={tv.name}
                className="w-full h-full absolute z-10 object-cover opacity-25"
              />

              <div className="flex w-full relative z-20">
                <div className="w-1/3 flex justify-center items-center">
                  <img
                    src={`${imageBaseUrl}${tv.poster_path}`}
                    alt={tv.name}
                    className="rounded-xl w-auto h-[70vh] object-cover shadow-lg"
                  />
                </div>
                <div className="ml-6 w-2/3 p-6 flex flex-col justify-center">
                  <h2 className="text-4xl font-bold mb-2 text-white">
                    {tv.name}{" "}
                    <span className="font-semibold text-white">
                      ({getYear(tv.first_air_date)})
                    </span>
                  </h2>
                  <p className="text-xl text-white font-semibold">
                    {tv.number_of_episodes} episodes, {tv.number_of_seasons} seasons
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
                    <p className="mr-2">{formatDate(tv.release_date)}</p>
                    <p>-</p>
                    <p className="mx-2">{getGenres(tv.genres)}</p>
                    <p>-</p>
                    <p className="ml-2">{formatTime(tv.runtime)}</p>
                  </div>
                  <p className="text-lg text-white w-[90%]">{tv.overview}</p>
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

export default TVDetail;
