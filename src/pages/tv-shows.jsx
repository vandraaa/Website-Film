import { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import TVList from "../components/layout/TVList";
import {
  getAiringToday,
  getOnTheAir,
  getPopular,
  getTopRated,
} from "../services/getTV";
import { Link } from "react-router-dom";
import Button from "../components/elements/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const TVShowsPage = () => {
  useEffect(() => {
    document.title = "AndraCinema - TV Shows";
  });

  return (
    <>
      <Navbar />
      <div className="bg-[#fff]">
        <div className="relative h-[90vh] flex justify-center items-center bg-[url('https://s10019.cdn.ncms.io/wp-content/uploads/2023/10/TV-Series-to-Binge-Now.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 mx-[5%] text-center">
            <h2 className="text-white text-4xl font-semibold">
              AndraCinema
            </h2>
            <p className="text-white mb-2">
               Find your favorite tv shows on AndraCinema
            </p>
            <Link to="/search-tv-shows">
              <Button customStyle="w-[55%] flex gap-x-3 items-center mx-auto justify-center">
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                Find a TV Shows
              </Button>
            </Link>
          </div>
        </div>
        <div className="mx-[5%] pt-5">
          <TVList title="Airing Today" getTVs={getAiringToday} />
          <TVList
            title="TV Shows that air in the next 7 days."
            getTVs={getOnTheAir}
          />
          <TVList title="Popular" getTVs={getPopular} />
          <TVList title="Top Rated" getTVs={getTopRated} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TVShowsPage;
